<script lang="ts">
	import { gsap } from 'gsap'

	let lightingImage: HTMLElement | null = $state(null)
	let contentContainer: HTMLElement | null = $state(null)

	// Apply flashing effect on mount
	$effect(() => {
		if (lightingImage && contentContainer) {
			animateLighting()
		}
	})

	function animateLighting() {
		if (!lightingImage || !contentContainer) return

		// Set initial state - invisible
		gsap.set([lightingImage, contentContainer], { opacity: 0 })

		// Create timeline for light switching effect
		const tl = gsap.timeline()

		// Realistic old light bulb flickering effect
		tl.to([lightingImage, contentContainer], {
			opacity: 0.4,
			duration: 0.03,
			ease: 'none'
		})
			.to([lightingImage, contentContainer], {
				opacity: 0,
				duration: 0.1,
				ease: 'none'
			})
			.to([lightingImage, contentContainer], {
				opacity: 0.8,
				duration: 0.04,
				ease: 'none'
			})
			.to([lightingImage, contentContainer], {
				opacity: 0,
				duration: 0.15,
				ease: 'none'
			})
			.to([lightingImage, contentContainer], {
				opacity: 0.6,
				duration: 0.02,
				ease: 'none'
			})
			.to([lightingImage, contentContainer], {
				opacity: 0,
				duration: 0.12,
				ease: 'none'
			})
			// Final warm-up and stabilization
			.to([lightingImage, contentContainer], {
				opacity: 0.8,
				duration: 0.1,
				ease: 'power1.out'
			})
			.to([lightingImage, contentContainer], {
				opacity: 0.4,
				duration: 0.05,
				ease: 'none'
			})
			.to([lightingImage, contentContainer], {
				opacity: 1,
				duration: 0.6,
				ease: 'power2.out'
			})
	}
</script>

<section class="flex h-[100dvh] items-end bg-interior-brand leading-[1.5] text-white">
	<!-- filler for fixed navbar -->
	<div class="h-[3.6rem] sm:h-[11.5rem]"></div>

	<div
		bind:this={lightingImage}
		class="pointer-events-none absolute bottom-0 left-0 right-0 top-[3.6rem] bg-interior-brand sm:top-[11.5rem]"
	>
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
			class="flex w-full items-center justify-center gap-4 px-5 py-8 sm:px-[4rem] sm:py-[1.6rem]"
		>
			<h1 class="text-[1.75rem] sm:text-[7.6rem]">Contact</h1>
		</div>

		<div class="relative flex w-full justify-center px-5 py-5 sm:px-[4rem] sm:py-[4.25rem]">
			<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
				<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
			</div>

			<div class="flex flex-col items-center gap-1 text-center sm:col-span-4 sm:gap-3">
				<div class="flex items-center gap-1 sm:gap-3">
					<div class="text-sm leading-[1.5] sm:text-[1.6rem]"><i>Hannah</i></div>
					<div class="text-sm leading-[1.5] sm:text-[1.6rem]">Hnin Myat Noe Oo</div>
				</div>

				<div class="text-sm leading-[1.5] sm:text-[1.6rem]">Interior Designer</div>

				<div class="mt-10 flex items-start gap-3 sm:col-span-4 sm:mt-32 sm:gap-10">
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
				</div>
			</div>
		</div>

		<div
			class="relative flex w-full items-center justify-center px-5 py-5 pb-6 sm:px-[4rem] sm:py-[4.25rem]"
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
		</div>

		<div
			class="relative flex h-[4.25rem] w-full items-center justify-center gap-4 px-5 py-5 sm:h-auto sm:gap-[2rem] sm:px-[4rem] sm:py-[4.24rem]"
		>
			<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
				<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
			</div>
			<div class="flex justify-center sm:col-span-6">
				<a
					href="/?bypass-select=true"
					class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]"
				>
					Visit the Sand Studio
				</a>
			</div>
		</div>
	</div>
</section>
