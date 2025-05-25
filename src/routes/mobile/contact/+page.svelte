<script lang="ts">
	import NewPixelBorder from '$lib/components/mobile/NewPixelBorder.svelte'
	import ContactFormUpload from '$lib/svgs/ContactFormUpload.svelte'
	import { filesToBase64, formSchema, transformZodErrors, type FormInputs } from '$lib/utils/form'
	import { preventDefault, createBubbler } from 'svelte/legacy'
	const bubble = createBubbler()
	import { twMerge as twm } from 'tailwind-merge'

	const initialFormInputs: FormInputs = {
		name: '',
		email: '',
		message: '',
		attachments: null
	}
	let formInputs = $state({ ...initialFormInputs })
	let formErrors: any = $state()
	let formState: 'idel' | 'locked' | 'sending' = $state('idel')

	const handleAttachmentChange = async (event: Event) => {
		const input = event.target as HTMLInputElement
		if (!input.files) return
		formInputs.attachments = input.files
	}

	const submit = async () => {
		const validatedInputs: any = formSchema.safeParse(formInputs)
		if (!validatedInputs.success) {
			formErrors = transformZodErrors(validatedInputs.error)
			return
		}

		const { name, email, message, attachments } = formInputs
		const respSand = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				subject: `Website Form Submission: ${name}`,
				sender: { name, email },
				to: { name: 'The SAND Studio', email: 'yan@thesandstudio.com' }, // change to hi@
				htmlContent: `<html><body><div>${name}</div><div>${email}</div><div>${message}</div></body></html>`,
				attachments: attachments ? await filesToBase64(attachments) : null
			})
		})
		if (!respSand.ok) {
			const error = await respSand.json()
			console.log({ error: error.message })
			formState = 'idel'
			return
		}

		const respSender = await fetch('/api/send-email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				subject: `The SAND Studio Received Your Message.`,
				sender: { name: 'The SAND Studio', email: 'yan@thesandstudio.com' }, // change to hi@
				to: { name, email },
				htmlContent: `<html><body><div>Hi, ${name},</div><div>We received your message.</div><div>${name}</div><div>${email}</div><div>${message}</div></body></html>`,
				attachments: attachments ? await filesToBase64(attachments) : null
			})
		})
		if (!respSender.ok) {
			const error = await respSender.json()
			console.log({ error: error.message })
			return
		}
	}
</script>

<section class="p-4">
	<h1 class="mb-6 font-sand-mobile-bold text-6xl leading-[0.75]">What do you have in mind?</h1>
	<form
		onsubmit={preventDefault(bubble('submit'))}
		class="relative flex h-full w-full flex-col text-xl"
	>
		<div
			class="flex w-full flex-col items-start gap-3 text-xl text-light-4 dark:text-light-100 sm:dark:bg-light-7"
		>
			<div class="relative w-full border-[2px] border-light-4 dark:border-light-25">
				<NewPixelBorder />
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
						'sand-transition h-8 w-full bg-transparent px-2 pt-[1px] font-sand-mobile-bold text-xl outline-none'
					)}
					oninput={() => (formErrors?.name ? (formErrors.name = undefined) : null)}
				/>
			</div>
			<div class="relative w-full border-[2px] border-light-4 dark:border-light-25">
				<NewPixelBorder />
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
						'sand-transition h-8 w-full bg-transparent px-2 pt-[1px] font-sand-mobile-bold text-xl outline-none'
					)}
					oninput={() => (formErrors?.email ? (formErrors.email = undefined) : null)}
				/>
			</div>
			<div class="relative w-full border-[2px] border-light-4 dark:border-light-25">
				<NewPixelBorder />
				<textarea
					name="message"
					placeholder="Message*"
					bind:value={formInputs.message}
					class={twm(
						formErrors?.message
							? 'animate-vibrate-once text-sand-red placeholder:text-sand-red'
							: 'placeholder:text-black dark:placeholder:text-light-100',
						'sand-transition min-h-[7.5rem] w-full bg-transparent px-2 pt-[1px] font-sand-mobile-bold text-xl outline-none'
					)}
					oninput={() => (formErrors?.message ? (formErrors.message = undefined) : null)}
				></textarea>
			</div>

			<div class="relative flex items-center justify-start gap-3">
				<label for="attachments" class="relative flex items-center justify-start gap-3">
					<div
						class={twm(
							'sand-transition relative flex aspect-square w-12 shrink-0 items-center border-[2px] border-light-4 dark:border-light-25',
							formInputs?.attachments && 'bg-light-4'
						)}
					>
						<NewPixelBorder />
					</div>
					<span class="mr-auto shrink-0 whitespace-nowrap font-sand-mobile-regular text-xl">
						{formInputs.attachments ? 'Remove' : 'Upload Files'}
					</span>
					<!-- <ContactFormUpload hasAttachments={!!formInputs.attachments} /> -->
				</label>

				{#if formInputs.attachments}
					<button
						aria-label="remove attachment"
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

			<button
				onclick={submit}
				id="submit-btn"
				class="relative inline-block border-[2px] border-light-4 px-12 py-[0.58rem] font-sand-mobile-bold text-[1.45rem] leading-[0.65] dark:border-light-25 dark:bg-light-4"
			>
				<NewPixelBorder />
				<div class="pt-[1px]">Send</div>
			</button>
		</div>
	</form>
</section>

<section class="relative aspect-[4/3] w-full">
	<img
		src="/mobile/gifs/contact.gif"
		alt="Sand Dune"
		class="h-full w-full dark:opacity-25 dark:invert"
	/>
	<div class="absolute left-4 top-4">
		<div
			class="bg-light-100 p-1 font-sand-mobile-bold text-base text-light-4 dark:bg-light-4 dark:text-light-100"
		>
			<span class="block max-w-[5.8rem] translate-y-[0.07rem] text-3xl leading-[0.75]">
				Make Shit with Us
			</span>
		</div>
		<a
			href="/"
			class="relative mt-8 inline-block border-[2px] border-light-4 bg-light-100 px-4 py-2 font-sand-mobile-bold text-[1.45rem] leading-[0.65] dark:border-light-25 dark:bg-light-4"
		>
			Let's Go
			<NewPixelBorder />
		</a>
	</div>
</section>

<section class="p-4">
	<h2 class="mb-6 font-sand-mobile-bold text-6xl leading-[0.75]">Contact</h2>

	<div class="mt-6 flex gap-6">
		<div class="flex flex-col items-center gap-2">
			<div class="relative aspect-square w-12 border-[2px] border-light-4 dark:border-light-25">
				<NewPixelBorder />
			</div>
			<div class="text-center text-lg leading-[0.65]">Email</div>
		</div>
		<div class="flex flex-col items-center gap-2">
			<div class="relative aspect-square w-12 border-[2px] border-light-4 dark:border-light-25">
				<NewPixelBorder />
			</div>
			<div class="text-center text-lg leading-[0.65]">IG</div>
		</div>
		<div class="flex flex-col items-center gap-2">
			<div class="relative aspect-square w-12 border-[2px] border-light-4 dark:border-light-25">
				<NewPixelBorder />
			</div>
			<div class="text-center text-lg leading-[0.65]">FB</div>
		</div>
	</div>
</section>
