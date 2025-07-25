<script lang="ts">
	import { gsap } from 'gsap'
	import { twMerge as twm } from 'tailwind-merge'
	import MetaData from '$lib/components/MetaData.svelte'
	import clickOutside from '$lib/utils/clickOutside'
	import { getInteriorsStore } from '$lib/interiors/store.svelte'
	import updateMetaColor from '$lib/utils/updateMetaColor'

	updateMetaColor('#864235')

	const interiorsStore = getInteriorsStore()

	let lightingImage: HTMLElement | null = $state(null)
	let contentContainer: HTMLElement | null = $state(null)
	let textContent: HTMLElement | null = $state(null)

	// Apply flashing effect on mount
	$effect(() => {
		if (lightingImage && contentContainer && textContent) {
			animateLighting()
		}
	})

	function animateLighting() {
		if (!lightingImage || !contentContainer || !textContent) return

		// Set initial state - invisible
		gsap.set([lightingImage, contentContainer, textContent], { opacity: 0 })

		// Create timeline for light switching effect
		const tl = gsap.timeline()

		// Realistic old light bulb flickering effect
		tl.to([lightingImage, contentContainer, textContent], {
			opacity: 0.4,
			duration: 0.03,
			ease: 'none'
		})
			.to([lightingImage, contentContainer, textContent], {
				opacity: 0,
				duration: 0.1,
				ease: 'none'
			})
			.to([lightingImage, contentContainer, textContent], {
				opacity: 0.8,
				duration: 0.04,
				ease: 'none'
			})
			.to([lightingImage, contentContainer, textContent], {
				opacity: 0,
				duration: 0.15,
				ease: 'none'
			})
			.to([lightingImage, contentContainer, textContent], {
				opacity: 0.6,
				duration: 0.02,
				ease: 'none'
			})
			.to([lightingImage, contentContainer, textContent], {
				opacity: 0,
				duration: 0.12,
				ease: 'none'
			})
			// Final warm-up and stabilization
			.to([lightingImage, contentContainer, textContent], {
				opacity: 0.8,
				duration: 0.1,
				ease: 'power1.out'
			})
			.to([lightingImage, contentContainer, textContent], {
				opacity: 0.4,
				duration: 0.05,
				ease: 'none'
			})
			.to([lightingImage, contentContainer, textContent], {
				opacity: 1,
				duration: 0.6,
				ease: 'power2.out'
			})
	}

	let isAboutOpen = $state(false)
	let content = $state<HTMLElement | null>(null)
	let contentTop = $derived(content ? content.getBoundingClientRect().top / 16 : 0)
	let desktopAboutContent = $state<HTMLElement | null>(null)
	let desktopAboutContentBottom = $derived(
		desktopAboutContent ? desktopAboutContent.getBoundingClientRect().bottom / 16 : 100
	)
</script>

<MetaData
	pageTitle="Contact - Sand Interiors"
	title="Contact - Sand Interiors"
	description="Sand Interiors is a collaborative interior and architectural design studio delivering spatial planning, 3‑D visualizations, custom furniture, and turnkey supervision for commercial, hospitality, and residential projects across Thailand, Myanmar, and worldwide."
	keywords="interior design services Thailand, architectural design studio, commercial interiors, hospitality design, residential interior designer, 3D visualization, custom furniture design, spatial planning "
	ogImage="/og-image-interiors.jpg"
	canonicalUrl="https://thesandstudio.com/interiors/contact/"
/>

<section class="flex h-[100dvh] items-end bg-interior-brand leading-[1.5] text-white">
	<!-- filler for fixed navbar -->
	<div class="h-[3.6rem] shrink-0 sm:h-[11.5rem]"></div>

	<div
		bind:this={lightingImage}
		class="pointer-events-none absolute bottom-0 left-0 right-0 top-[3.6rem] bg-interior-brand sm:top-[11.5rem]"
	>
		<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
			<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
		</div>
		<img
			src="/interiors/lighting-contact.png"
			alt=""
			class="absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen sm:block"
		/>
		<img
			src="/interiors/lighting-2-mobile.png"
			alt=""
			class="absolute inset-0 bottom-auto mx-auto h-full w-full mix-blend-screen sm:hidden"
		/>
	</div>

	<div bind:this={contentContainer} class="relative w-full">
		<div
			class={twm(
				'interior-transition relative w-full',
				isAboutOpen && '-translate-y-[1.5rem] sm:-translate-y-[0rem]'
			)}
		>
			<div bind:this={textContent} class={twm('interior-transition relative w-full')}>
				<div
					class="flex w-full items-center justify-center gap-4 px-5 py-8 sm:px-[4rem] sm:py-[1.6rem]"
				>
					<h1 class="text-[1.75rem] sm:text-[7.6rem]">Contact</h1>
				</div>

				<div
					class={twm(
						'interior-transition relative flex w-full items-center justify-center px-5 sm:px-[4rem]',
						isAboutOpen && 'opacity-0'
					)}
				>
					<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
						<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
					</div>
					<div class="col-span-4 flex flex-col items-start gap-1">
						<button
							onclick={() => {
								isAboutOpen = true
								interiorsStore.logoSpinDegree = 90
							}}
							class="relative py-5 text-sm leading-[1.5] sm:py-[4rem] sm:text-[1.6rem]"
						>
							About Me
							<span class="absolute -right-5 top-1/2 -translate-y-1/2 sm:-right-8">
								{@render learnMoreIcon()}
							</span>
						</button>
					</div>
				</div>

				<div
					class={twm(
						'interior-transition relative flex w-full justify-center px-5 py-5 sm:px-[4rem] sm:py-[4.25rem]',
						isAboutOpen && 'opacity-0'
					)}
				>
					<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
						<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
					</div>

					<div
						bind:this={content}
						class="flex flex-col items-center gap-1 text-center sm:col-span-4 sm:gap-3"
					>
						<div class="flex items-center gap-1 sm:gap-3">
							<div class="text-sm leading-[1.5] sm:text-[1.6rem]"><i>Hannah</i></div>
							<div class="text-sm leading-[1.5] sm:text-[1.6rem]">Hnin Myat Noe Oo</div>
						</div>

						<div class="text-sm leading-[1.5] sm:text-[1.6rem]">Interior Designer</div>

						<div
							class={twm(
								'interior-transition mt-10 flex items-start gap-3 sm:col-span-4 sm:mt-28 sm:gap-7',
								isAboutOpen && 'opacity-0'
							)}
						>
							<a
								href="https://www.instagram.com/sand.interiors_/"
								target="_blank"
								class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]"
							>
								IG
							</a>
							<a
								href="https://line.me/ti/p/3Wi3R721g_"
								target="_blank"
								class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]"
							>
								LINE
							</a>
							<a
								href="mailto:hnin@thesandstudio.com"
								target="_blank"
								class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]"
							>
								hnin@thesandstudio.com
							</a>
						</div>
					</div>
				</div>

				<!-- <div
				class={twm(
					'interior-transition relative flex w-full items-center justify-center px-5 py-5 pb-6 sm:px-[4rem] sm:py-[4.25rem]',
					isAboutOpen && 'opacity-0'
				)}
			>
				<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
					<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
				</div>
				<div class="col-span-4 flex flex-col items-start gap-1">
					<a
						href="mailto:hnin@thesandstudio.com"
						class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]"
					>
						hnin@thesandstudio.com
					</a>
				</div>
			</div> -->

				<div
					class={twm(
						'interior-transition relative flex h-[4.25rem] w-full items-center justify-center gap-4 px-5 py-5 sm:h-auto sm:gap-[2rem] sm:px-[4rem] sm:py-[4.25rem]',
						isAboutOpen && 'opacity-0'
					)}
				>
					<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
						<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
					</div>
					<div class="flex justify-center sm:col-span-6">
						<a
							href="/?bypass-select=true"
							class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]"
						>
							Visit The Sand Studio
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div
	use:clickOutside={{
		callback: () => {
			isAboutOpen = false
			interiorsStore.logoSpinDegree = 0
		}
	}}
	class={twm(
		isAboutOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
		'interior-transition'
	)}
>
	<section
		bind:this={desktopAboutContent}
		class={twm(
			'interior-transition fixed inset-0 bottom-[6.65rem] top-auto z-40 hidden w-full text-sm text-white sm:block'
		)}
	>
		<button
			onclick={() => {
				isAboutOpen = false
				interiorsStore.logoSpinDegree = 0
			}}
			class={twm(
				'interior-transition relative flex w-full shrink-0 items-center justify-center px-5 py-[4rem]'
			)}
		>
			<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
				<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
			</div>
			<div class="absolute inset-0 top-auto h-[1px] w-full opacity-30">
				<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
			</div>
			<div class="relative text-sm leading-[1.5] sm:text-[1.6rem]">
				About Me
				<span class="absolute -right-5 top-1/2 -translate-y-1/2 sm:-right-8">
					{@render backIcon()}
				</span>
			</div>
		</button>
		<div
			id="mobile-details"
			class="hide-scrollbar mx-auto grid w-full max-w-[42rem] gap-5 overflow-y-scroll p-5 py-[4rem] text-center leading-normal sm:text-[1.6rem]"
		>
			<p>
				Adaptable, detail-driven creative with a sharp eye for translating abstract ideas into
				spatially cohesive, impactful designs. Rooted in architecture and interior design, with a
				focus on challenging convention and crafting environments that respond to human behavior and
				experience.
			</p>
			<p class="">
				Currently based in Bangkok, Thailand while continuously expanding expertise in
				multidisciplinary design and sustainable practices.
			</p>
		</div>
	</section>

	<section
		class={twm('interior-transition fixed inset-0 z-40 w-full  text-sm text-white sm:hidden')}
		style={`top: ${isAboutOpen ? `${contentTop - 6.5}rem` : `${contentTop - 5}rem`}; 
		height: ${isAboutOpen ? `calc(100dvh - ${contentTop}rem)` : '2.75rem'}`}
	>
		<button
			onclick={() => {
				isAboutOpen = false
				interiorsStore.logoSpinDegree = 0
			}}
			class={twm(
				'interior-transition relative flex w-full shrink-0 items-center justify-center p-5'
			)}
		>
			<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
				<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
			</div>
			<div class="absolute inset-0 top-auto h-[1px] w-full opacity-30">
				<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
			</div>
			<div class="relative text-sm leading-[1.5] sm:text-[1.6rem]">
				About Me
				<span class="absolute -right-5 top-1/2 -translate-y-1/2">
					{@render backIcon()}
				</span>
			</div>
		</button>
		<div
			id="mobile-details"
			class="mx-auto grid w-full max-w-[21rem] gap-5 p-5 text-center"
			style={`height: calc(100dvh - ${contentTop + 2.75}rem)`}
		>
			<p>
				Adaptable, detail-driven creative with a sharp eye for translating abstract ideas into
				spatially cohesive, impactful designs. Rooted in architecture and interior design, with a
				focus on challenging convention and crafting environments that respond to human behavior and
				experience.
			</p>
			<p class="">
				Currently based in Bangkok, Thailand while continuously expanding expertise in
				multidisciplinary design and sustainable practices.
			</p>
		</div>
	</section>
</div>

{#snippet learnMoreIcon()}
	<div class="aspect-square h-[0.9rem] sm:h-[1.6rem]">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_705_783"
				style="mask-type:alpha"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="16"
				height="16"
			>
				<rect width="16" height="16" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_705_783)">
				<path
					d="M7.49967 13.6668V8.50016H2.33301V7.50016H7.49967V2.3335H8.49967V7.50016H13.6663V8.50016H8.49967V13.6668H7.49967Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	</div>
{/snippet}

{#snippet backIcon()}
	<div class="aspect-square h-[0.9rem] sm:h-[1.6rem]">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_700_500"
				style="mask-type:alpha"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="16"
				height="16"
			>
				<rect width="16" height="16" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_700_500)">
				<path
					d="M12.6668 12.3331V9.9998C12.6668 9.40147 12.4553 8.8908 12.0322 8.4678C11.6092 8.04469 11.0985 7.83313 10.5002 7.83313H4.24883L6.8155 10.3998L6.10266 11.1023L2.3335 7.33313L6.10266 3.56396L6.8155 4.26647L4.24883 6.83313H10.5002C11.3754 6.83313 12.1219 7.14213 12.7398 7.76013C13.3578 8.37802 13.6668 9.12458 13.6668 9.9998V12.3331H12.6668Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	</div>
{/snippet}
