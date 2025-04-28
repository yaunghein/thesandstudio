<script lang="ts">
	import { createBubbler, preventDefault, stopPropagation } from 'svelte/legacy'

	const bubble = createBubbler()
	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	import gsap from 'gsap'
	import { twMerge as twm } from 'tailwind-merge'
	import { changeCursorType } from '$lib/stores/cursor'
	import LogoShape from '$lib/svgs/LogoShape.svelte'
	import IconLock from '$lib/svgs/IconLock.svelte'
	import ContactFormTopShape from '$lib/svgs/ContactFormTopShape.svelte'
	import ContactFormTubeAPhone from '$lib/svgs/ContactFormTubeAPhone.svelte'
	import ContactFormUpload from '$lib/svgs/ContactFormUpload.svelte'
	import { formSchema, filesToBase64, transformZodErrors } from '$lib/utils/form'
	import type { FormInputs } from '$lib/utils/form'
	import { PUBLIC_SAND_EMAIL } from '$env/static/public'
	import formateDate from '$lib/utils/formatDate'

	const defaults = { ease: 'power4.inOut', duration: 1 }

	onMount(() => {
		const tl = gsap.timeline({ defaults })
		tl.from('#tube', { y: '115%', ease: 'power4.out' }).to('#paper', { x: '0%' }, '<50%')
	})

	const initialFormInputs: FormInputs = {
		name: '',
		email: '',
		message: '',
		attachments: null
	}
	let formInputs = $state({ ...initialFormInputs })
	let formErrors: any = $state()
	let formState: 'idel' | 'locked' | 'sending' = $state('idel')
	let hasServerError = $state(false)

	const handleAttachmentChange = async (event: Event) => {
		const input = event.target as HTMLInputElement
		if (!input.files) return
		formInputs.attachments = input.files
	}

	const lock = () => {
		const validatedInputs: any = formSchema.safeParse(formInputs)
		if (!validatedInputs.success) {
			formErrors = transformZodErrors(validatedInputs.error)
			return
		}
		formState = 'locked'
		gsap.to('#paper', { x: '79.5%', ...defaults })
	}

	const unlock = () => {
		formState = 'idel'
		gsap.to('#paper', { x: '0%', ...defaults })
	}

	const sendTheTube = () => {
		const tl = gsap.timeline({
			defaults,
			onUpdate: () => {
				if (tl.progress() >= 0.4 && formInputs?.name && !hasServerError) {
					formInputs = { ...initialFormInputs }
				}
			}
		})
		tl.to('#tube', { y: '-115%' })
			.set('#tube', { y: '115%' })
			.to('#tube', { y: '0%' })
			.to('#paper', { x: '0%' }, '<50%')
	}

	const submit = async () => {
		sendTheTube()
		formState = 'sending'

		const { name, email, message, attachments } = formInputs
		const [date, time] = formateDate(new Date())
		const generalData = { name, email, message, date, time }

		const respSand = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				subject: `Website Form Submission: ${name}`,
				sender: { name, email },
				to: { name: 'The SAND Studio', email: PUBLIC_SAND_EMAIL },
				attachments: attachments ? await filesToBase64(attachments) : null,
				type: 'sand',
				...generalData
			})
		})
		if (!respSand.ok) {
			const error = await respSand.json()
			console.log({ error: error.message })
			hasServerError = true
			formState = 'idel'
			return
		}

		const respSender = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				subject: `Hi ${name.split(' ')[0]}, the SAND Studio Received Your Message.`,
				sender: { name: 'The SAND Studio', email: PUBLIC_SAND_EMAIL },
				to: { name, email },
				attachments: attachments ? await filesToBase64(attachments) : null,
				type: 'sender',
				...generalData
			})
		})
		if (!respSender.ok) {
			const error = await respSender.json()
			console.log({ error: error.message })
			hasServerError = true
			formState = 'idel'
			return
		}

		formState = 'idel'
	}

	const handleSubmit: Record<string, () => void> = {
		idel: lock,
		locked: submit
	}
</script>

<form onsubmit={preventDefault(bubble('submit'))} class="relative flex h-full flex-col text-xl">
	<div class="relative z-10 -mt-[0.1rem] ml-[0.1rem] flex w-full">
		<ContactFormTopShape />
	</div>

	<div id="tube" class="-mt-[7rem] flex h-full flex-col px-2">
		<div class="flex">
			<ContactFormTubeAPhone />
		</div>

		<div class="relative mx-auto w-52 grow bg-light-90 bg-opacity-30 dark:bg-black">
			<div class="absolute right-3 top-3 h-[27rem] w-[56rem] overflow-hidden rounded-lg">
				<div
					id="paper"
					class="absolute right-0 flex h-full w-[55rem] translate-x-[79.5%] flex-col rounded-lg bg-white p-5 text-xl text-black dark:bg-light-7 dark:text-light-100"
				>
					<input
						autocomplete="off"
						type="text"
						name="name"
						bind:value={formInputs.name}
						placeholder="Name*"
						class={twm(
							formErrors?.name
								? 'animate-vibrate-once text-sand-red placeholder:text-sand-red'
								: 'placeholder:text-black dark:placeholder:text-light-100',
							'sand-transition h-8 bg-transparent text-2xl outline-none'
						)}
						oninput={() => (formErrors?.name ? (formErrors.name = undefined) : null)}
					/>
					<!-- {#if formErrors?.name}
            <p class="animate-vibrate-once text-base text-sand-red mb-2">
              {formErrors.name[0]}
            </p>
          {/if} -->
					<input
						autocomplete="off"
						type="text"
						name="email"
						bind:value={formInputs.email}
						placeholder="Email*"
						class={twm(
							formErrors?.email
								? 'animate-vibrate-once text-sand-red placeholder:text-sand-red'
								: 'placeholder:text-black dark:placeholder:text-light-100',
							'sand-transition h-8 bg-transparent text-2xl outline-none'
						)}
						oninput={() => (formErrors?.email ? (formErrors.email = undefined) : null)}
					/>
					<!-- {#if formErrors?.email}
            <p class="animate-vibrate-once text-base text-sand-red mb-2">
              {formErrors.email[0]}
            </p>
          {/if} -->
					<textarea
						name="message"
						placeholder="Message*"
						bind:value={formInputs.message}
						class={twm(
							formErrors?.message
								? 'animate-vibrate-once text-sand-red placeholder:text-sand-red'
								: 'placeholder:text-black dark:placeholder:text-light-100',
							'mt-5 h-full resize-none bg-transparent text-2xl outline-none'
						)}
						oninput={() => (formErrors?.message ? (formErrors.message = undefined) : null)}
					></textarea>
					<!-- {#if formErrors?.message}
            <p class="animate-vibrate-once text-base text-sand-red mb-2">
              {formErrors.message[0]}
            </p>
          {/if} -->

					<div class="relative">
						<label
							use:changeCursorType={{
								inType: 'upload-files',
								outType: 'normal'
							}}
							for="attachments"
							class="relative flex h-20 w-24 items-center"
						>
							<ContactFormUpload hasAttachments={!!formInputs.attachments} />
						</label>

						{#if formInputs.attachments}
							<button
								use:changeCursorType={{
									inType: 'remove-files',
									outType: 'normal'
								}}
								onclick={() => (formInputs.attachments = null)}
								class="absolute left-0 top-0 h-20 w-24 bg-transparent"
							></button>
						{/if}

						<input
							type="file"
							multiple
							id="attachments"
							class="hidden"
							onchange={handleAttachmentChange}
						/>
					</div>

					{#if hasServerError}
						<p class="mt-4 animate-vibrate-once text-base text-sand-red">
							Server error! Your previous submission was not received.<br />
							Please contact to
							<a href="mailto:h1@thesandstudio.com">hi@thesandstudio.com</a>.
						</p>
					{/if}
				</div>
			</div>
		</div>

		<div class="flex rotate-180">
			<ContactFormTubeAPhone />
		</div>
	</div>

	<button
		disabled={formState === 'sending'}
		onclick={handleSubmit[formState]}
		id="submit-btn"
		class="relative mx-auto mb-4 mt-3 flex h-14 w-[89%] items-center justify-between rounded-full border-2 border-white bg-light-90 p-3 text-black dark:border-light-12 dark:bg-black dark:text-light-100"
	>
		{#if formState === 'locked'}
			<button
				transition:scale={{ start: 0.5 }}
				onclick={stopPropagation(unlock)}
				class="absolute left-[0.36rem] flex aspect-square w-10"
			>
				<IconLock />
			</button>
		{/if}
		{#if formState === 'idel'}
			<span
				transition:scale={{ start: 0.5 }}
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-medium text-xl"
			>
				Lock
			</span>
		{:else if formState === 'locked'}
			<span
				transition:scale={{ start: 0.5 }}
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-medium text-xl"
			>
				Send
			</span>
		{:else}
			<span
				transition:scale={{ start: 0.5 }}
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-medium text-xl"
			>
				Sending...
			</span>
		{/if}
		<div
			id="btn-logo-shape"
			class={twm(
				'ml-auto flex aspect-square w-9 transition duration-[800ms] ease-out',
				formState === 'idel' && 'animate-spin-back-once',
				formState === 'locked' && 'animate-spin-once text-sand-green',
				formState === 'sending' && 'animate-spin text-sand-red'
			)}
		>
			<LogoShape />
		</div>
	</button>
</form>
