<script lang="ts">
	import { run, createBubbler, preventDefault, stopPropagation } from 'svelte/legacy'

	const bubble = createBubbler()
	import ContactFormTubeLabel from './../../svgs/ContactFormTubeLabel.svelte'
	import { browser } from '$app/environment'
	import { scale } from 'svelte/transition'
	import gsap from 'gsap'
	import { twMerge as twm } from 'tailwind-merge'
	import ContactFormTubeAPhone from '$lib/components/mobile/ContactFormTubeAPhone.svelte'
	import ContactFormUpload from '$lib/svgs/ContactFormUpload.svelte'
	import Lock from '$lib/svgs/mobile/Lock.svelte'
	import LogoShape from './LogoShape.svelte'
	import { formSchema, filesToBase64, transformZodErrors } from '$lib/utils/form'
	import type { FormInputs } from '$lib/utils/form'
	import PixelBorder from './PixelBorder.svelte'

	interface Props {
		swiperIndex?: number
	}

	let { swiperIndex = 0 }: Props = $props()

	const defaults = { ease: 'power4.inOut', duration: 1 }

	let openTubeTl: any = $state()
	let wrapperWidth: string = $state('')
	run(() => {
		if (swiperIndex === 3 && browser) {
			if (openTubeTl) {
				openTubeTl.restart()
			} else {
				openTubeTl = gsap.timeline({
					defaults,
					onComplete() {
						wrapperWidth = `${
							document.querySelector('#paper-wrapper')?.getBoundingClientRect().width
						}px`
					}
				})
				openTubeTl
					.to('#tube', { y: '0%' })
					.from('#paper-wrapper', { width: '7.3rem' }, '<50%')
					.to('#paper-wrapper', { right: '-2.2rem' }, '<')
			}
		} else if (browser && swiperIndex !== 3) {
			openTubeTl?.reverse()
		}
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
		gsap.to('#paper-wrapper', { width: '7.3rem', ...defaults })
		gsap.to('#paper-wrapper', { right: '0.75rem', ...defaults })
	}

	const unlock = () => {
		formState = 'idel'
		gsap.to('#paper-wrapper', { width: wrapperWidth, ...defaults })
		gsap.to('#paper-wrapper', { right: '-2.2rem', ...defaults })
	}

	const sendTheTube = () => {
		const tl = gsap.timeline({
			defaults,
			onUpdate: () => {
				if (tl.progress() >= 0.4 && formInputs?.name) {
					formInputs = { ...initialFormInputs }
				}
			}
		})
		tl.to('#tube', { y: '-125%' })
			.set('#tube', { y: '125%' })
			.to('#tube', { y: '0%' })
			.to('#paper-wrapper', { width: wrapperWidth }, '<50%')
			.to('#paper-wrapper', { right: '-2.2rem' }, '<')
	}

	const submit = async () => {
		sendTheTube()
		formState = 'sending'

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

<div data-slide-name="contact" class="swiper-slide h-full w-full shrink-0 px-4">
	<div class="h-full w-full">
		<form
			onsubmit={preventDefault(bubble('submit'))}
			class="relative flex h-full w-full flex-col text-xl"
		>
			<PixelBorder />
			<div
				id="tube"
				class="ml-auto flex h-[91%] w-[200px] -translate-x-5 translate-y-[125%] flex-col px-1 pt-12"
			>
				<div class="flex">
					<ContactFormTubeAPhone />
				</div>

				<div
					class="relative mx-auto w-36 grow border-x-2 border-black bg-opacity-30 dark:border-white sm:border-0"
				>
					<div
						id="paper-wrapper"
						class="absolute bottom-3 right-3 top-3 w-[calc(100vw-4.35rem)] overflow-hidden rounded-lg border-2 border-black dark:border-white sm:border-0"
					>
						<div
							id="paper"
							class="w-100% absolute left-0 right-0 flex h-full flex-col items-start rounded-lg bg-white p-4 text-xl text-black dark:bg-black dark:text-light-100 sm:dark:bg-light-7"
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
									'sand-transition h-8 w-full bg-transparent text-xl outline-none'
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
									'sand-transition mt-1 h-8 w-full bg-transparent text-xl outline-none'
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
									'mt-5 h-full w-full resize-none bg-transparent text-xl leading-[0.7] outline-none'
								)}
								oninput={() => (formErrors?.message ? (formErrors.message = undefined) : null)}
							></textarea>
							<!-- {#if formErrors?.message}
                <p class="animate-vibrate-once text-base text-sand-red mb-2">
                  {formErrors.message[0]}
                </p>
              {/if} -->

							<div class="relative flex items-center justify-start gap-3">
								<label for="attachments" class="relative flex h-10 w-11 shrink-0 items-center">
									<ContactFormUpload hasAttachments={!!formInputs.attachments} />
								</label>

								<span class="mr-auto shrink-0 whitespace-nowrap font-sand-mobile-regular text-xl">
									{formInputs.attachments ? 'Remove' : 'Upload Files'}
								</span>

								{#if formInputs.attachments}
									<button
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
						</div>
					</div>
				</div>

				<div class="flex rotate-180">
					<ContactFormTubeAPhone />
				</div>
			</div>

			<div class="absolute bottom-7 flex w-full items-center justify-end pl-0 pr-5">
				<div class="mx-auto h-4 w-20">
					<ContactFormTubeLabel />
				</div>

				<button
					disabled={formState === 'sending'}
					onclick={handleSubmit[formState]}
					id="submit-btn"
					class="relative flex h-10 w-[12.5rem] items-center justify-between rounded-full bg-white text-black dark:bg-black dark:text-white"
				>
					<PixelBorder />
					{#if formState === 'locked'}
						<button
							transition:scale={{ start: 0.5 }}
							onclick={stopPropagation(unlock)}
							class="absolute left-[0.6rem] flex h-6"
						>
							<Lock />
						</button>
					{/if}
					{#if formState === 'idel'}
						<span
							transition:scale={{ start: 0.5 }}
							class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[49%] font-sand-mobile-bold text-2xl"
						>
							Lock
						</span>
					{:else if formState === 'locked'}
						<span
							transition:scale={{ start: 0.5 }}
							class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[49%] font-sand-mobile-bold text-2xl"
						>
							Send
						</span>
					{:else}
						<span
							transition:scale={{ start: 0.5 }}
							class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-mobile-bold text-2xl"
						>
							Sending...
						</span>
					{/if}
					<div
						id="btn-logo-shape"
						class={twm(
							'ml-auto mr-2 flex aspect-square w-6 transition duration-[800ms] ease-out',
							formState === 'idel' && 'animate-spin-back-once',
							formState === 'locked' && 'animate-spin-once text-sand-green',
							formState === 'sending' && 'animate-spin text-sand-red'
						)}
					>
						<LogoShape />
					</div>
				</button>
			</div>

			<div class="pointer-events-none absolute inset-0 h-full w-full font-sand-mobile-regular">
				<div class="absolute left-4 top-3 font-sand-mobile-bold text-2xl leading-none">Contact</div>
				<div class="absolute left-4 top-[5.3rem] font-sand-mobile-bold text-2xl leading-[0.75]">
					What do<br /> you have in<br /> mind?
				</div>
				<a href="mailto:hi@thesandstudio.com" class="absolute right-4 top-3 text-2xl leading-none">
					hi@thesandstudio.com
				</a>
				<div class="absolute bottom-28 left-4 flex items-center gap-6">
					<a href="/" class="text-2xl leading-none">IG</a>
					<a href="/" class="text-2xl leading-none">FB</a>
				</div>
			</div>
		</form>
	</div>
</div>
