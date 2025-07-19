<script lang="ts">
	import { gsap } from 'gsap'
	import { twMerge as twm } from 'tailwind-merge'
	import MetaData from '$lib/components/MetaData.svelte'
	import clickOutside from '$lib/utils/clickOutside'
	import { getInteriorsStore } from '$lib/interiors/store.svelte'

	const interiorsStore = getInteriorsStore()

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

	let services = $state([
		{
			title: 'Architectural and Interior Design Services',
			open: false,
			contentEl: null as HTMLElement | null,
			details: [
				'We approach each project as a collaboration — working closely with clients to understand not just how a space should look, but how it should feel and function in everyday use. Through a process that’s both thoughtful and technically grounded, we translate ideas into environments with clarity, character, and purpose.',
				'Every project is tailored to your goals, budget, and timeline — with a strong focus on spatial experience, clarity, and long-term usability.'
			],
			color: 'bg-green-500',
			paddingBottom: 'pb-[20.5rem]'
		},
		{
			title: 'Our services',
			open: false,
			contentEl: null as HTMLElement | null,
			details: [
				`<div class="grid gap-[0.25rem] sm:gap-[0.5rem]">
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Spatial Planning & Layout Development</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Material & Finish Selection</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Moodboard & Design Concept Direction</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Realistic 3D Visualization</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Construction-ready Technical Drawings & Documentation</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Custom Built-in Furniture Design</div>
        </div>`,
				`<div class="grid gap-[0.25rem] sm:gap-[0.5rem]">
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Lighting & Electrical Planning</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Sanitary & Kitchen Layout Planning</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Furniture & Loose Item Curation</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Artwork & Accessory Styling</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Renovation Consultation & Reconfiguration</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Vendor & Contractor Liaison</div>
        </div>`
			],
			color: 'bg-blue-500',
			paddingBottom: 'pb-[14.5rem]'
		},
		{
			title: 'Project Types',
			open: false,
			contentEl: null as HTMLElement | null,
			details: [
				`<div class="grid gap-[0.25rem] sm:gap-[0.5rem]">
          <div class="text-sm sm:text-[1.4rem] leading-[1.5]">We work across a range of project scales and sectors, including:</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Commercial Interiors</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Offices, Retail Spaces, Cafés, & Restaurants</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Hospitality Spaces</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Boutique Hotels, Hostels, & Short-stay Accommodations (Airbnb)</div>
        </div>`,
				`<div class="grid gap-[0.25rem] sm:gap-[0.5rem]">
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Private Residences</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Condominiums, Apartments, & Landed Homes</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Pop-up, Temporary, or Event-based Interiors</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Spatial Planning & Styling for Short-term Activations, Exhibitions, or Seasonal Campaigns</div>
        </div>`
			],
			layout: ['', 'self-end'],
			color: 'bg-yellow-500',
			paddingBottom: 'pb-[9.75rem]'
		},
		{
			title: 'Additional Services',
			open: false,
			contentEl: null as HTMLElement | null,
			details: [
				`<div class="grid gap-[0.25rem] sm:gap-[0.5rem]">
          <div class="text-sm sm:text-[1.4rem] leading-[1.5]">Beyond core design scope, we also offer focused support for specific project needs and creative opportunities:</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Pre-lease or Pre-purchase Design Consultations</div>
          <div class="text-sm sm:text-[1.4rem] leading-[1.5]">Early-stage spatial advice to help evaluate potential properties before commitment.</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Design Advisory For Developers & Landlords</div>
          <div class="text-sm sm:text-[1.4rem] leading-[1.5]">Tailored design packages or unit typologies for rental, resale, or hospitality positioning.</div>
        </div>`,
				`<div class="grid gap-[0.25rem] sm:gap-[0.5rem]">
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Art Direction For Brand-aligned Interiors</div>
          <div class="text-sm sm:text-[1.4rem] leading-[1.5]">Creative input on visual identity, tone, and brand–space alignment for businesses.</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Furniture Layout & FF&E Mapping For Existing Spaces</div>
          <div class="text-sm sm:text-[1.4rem] leading-[1.5]">Reworking existing layouts for better function without structural changes.</div>
          <div class="text-sm sm:text-[1.4rem] font-sand-medium leading-[1.5]">Post-completion Styling & Visual Refinement</div>
          <div class="text-sm sm:text-[1.4rem] leading-[1.5]">Final on-site styling layer for photography, press features, or real estate staging.</div>
        </div>`
			],
			color: 'bg-red-500',
			paddingBottom: ''
		}
	])

	let hoverIndex = $state(0)
</script>

<MetaData
	pageTitle="Services - Sand Interiors"
	title="Services - Sand Interiors"
	description="Sand Interiors is a collaborative interior and architectural design studio delivering spatial planning, 3‑D visualizations, custom furniture, and turnkey supervision for commercial, hospitality, and residential projects across Thailand, Myanmar, and worldwide."
	keywords="interior design services Thailand, architectural design studio, commercial interiors, hospitality design, residential interior designer, 3D visualization, custom furniture design, spatial planning "
	ogImage="/og-image-interiors.jpg"
	canonicalUrl="https://thesandstudio.com/interiors/contact/"
/>

<section class="flex h-[100dvh] flex-col bg-interior-brand leading-[1.5] text-white">
	<!-- filler for fixed navbar -->
	<div class="h-[3.6rem] shrink-0 sm:h-[11.5rem]"></div>

	<div
		bind:this={lightingImage}
		class="pointer-events-none absolute bottom-0 left-0 right-0 top-[3.6rem] bg-interior-brand sm:top-[11.5rem]"
	>
		<img
			src="/interiors/lighting-2.png"
			alt=""
			class="absolute inset-0 bottom-auto mx-auto hidden h-full w-full mix-blend-screen sm:block"
		/>
		<img
			src="/interiors/lighting-2-mobile.png"
			alt=""
			class="absolute inset-0 bottom-auto mx-auto h-full w-full mix-blend-screen sm:hidden"
		/>
	</div>

	<div
		bind:this={contentContainer}
		class={twm(
			'hide-scrollbar interior-transition relative flex min-h-[calc(100dvh-3.6rem)] w-full flex-col overflow-y-auto sm:min-h-[calc(100dvh-11.5rem)]'
		)}
	>
		<!-- <div class="absolute inset-0 top-auto h-[1px] w-full opacity-30">
			<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
		</div> -->

		<h1
			class="mb-5 mt-40 px-5 text-[1.75rem] sm:mb-[1rem] sm:mt-auto sm:hidden sm:px-[4rem] sm:text-[7.6rem]"
		>
			Services
		</h1>

		<div class="relative hidden h-[100dvh] overflow-hidden sm:block">
			<h1 class="absolute bottom-[42rem] mb-5 hidden px-5 sm:block sm:px-[4rem] sm:text-[6.5rem]">
				Services
			</h1>
			{#each services as service, index}
				<button
					onmouseenter={() => (hoverIndex = index)}
					class={twm(
						'interior-transition absolute inset-0 top-auto z-[4] grid w-full content-start gap-0 px-5 text-left delay-300 sm:grid-cols-2 sm:gap-[2rem] sm:px-[4rem]',
						index <= hoverIndex ? 'translate-y-[0rem]' : 'translate-y-[21rem]'
					)}
				>
					<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
						<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
					</div>
					<div class="font-sand-bold text-sm sm:py-[2rem] sm:text-[1.4rem]">
						{service.title}
					</div>
					<div class={twm('interior-transition overflow-hidden')}>
						<div class={twm('interior-transition overflow-hidden', service.paddingBottom)}>
							<div
								bind:this={service.contentEl}
								class={twm(
									'interior-transition grid items-start gap-5 sm:grid-cols-2 sm:gap-[2.5rem]',
									index === hoverIndex ? 'opacity-100 delay-[750ms]' : 'opacity-0'
								)}
							>
								<div class="max-w-[32rem] sm:py-[2.5rem]">
									{@html service.details[0]}
								</div>
								<div class="max-w-[33.5rem] sm:py-[2.5rem]">
									{@html service.details[1]}
								</div>
							</div>
						</div>
					</div>
				</button>
			{/each}
		</div>

		{#each services as service, index}
			<button
				onclick={() => {
					services = services.map((s) => ({
						...s,
						open: s.title === service.title ? !s.open : false
					}))
				}}
				class="relative grid w-full content-start gap-0 px-5 py-5 text-left sm:hidden sm:grid-cols-2 sm:gap-[2rem] sm:px-[4rem] sm:py-[3rem]"
			>
				<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
					<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
				</div>
				{#if index === services.length - 1}
					<div class="absolute inset-0 top-auto h-[1px] w-full opacity-30">
						<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
					</div>
				{/if}
				<div class="font-sand-bold text-sm sm:text-[1.4rem]">
					{service.title}
				</div>
				<div
					class="interior-transition overflow-hidden"
					style:height={service.open ? `${service.contentEl?.clientHeight}px` : '0px'}
				>
					<div
						bind:this={service.contentEl}
						class={twm(
							'interior-transition grid items-start gap-1 overflow-hidden pb-5 sm:grid-cols-2 sm:gap-[2rem] sm:pb-20',
							service.open ? 'opacity-100' : 'opacity-0'
						)}
					>
						<div class="max-w-[32rem] {service.layout?.[0]}">
							<div class="pb-5 sm:pb-0"></div>
							{@html service.details[0]}
						</div>
						<div class="max-w-[33.5rem] {service.layout?.[1]}">
							{@html service.details[1]}
						</div>
					</div>
				</div>
			</button>
		{/each}

		<div
			class="relative mt-auto flex h-[4.25rem] w-full items-center justify-between gap-4 px-5 py-5 sm:mt-0 sm:h-auto sm:px-[4rem] sm:py-[4.25rem]"
		>
			<div class="absolute inset-0 bottom-auto hidden h-[1px] w-full opacity-30 sm:block">
				<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
			</div>
			<div class="flex -translate-y-[0.22rem] items-start gap-3 sm:-translate-y-[0.15rem] sm:gap-6">
				<a
					href="https://www.instagram.com/sand.interiors_/"
					target="_blank"
					class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.4rem]"
				>
					IG
				</a>
				<a
					href="https://line.me/ti/p/3Wi3R721g_"
					target="_blank"
					class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.4rem]"
				>
					LINE
				</a>
			</div>
			<div class="-translate-y-[0.25rem] sm:-translate-y-[0.2rem]">
				<a
					href="/mobile/?bypass-select=true"
					class="text-sm leading-[1.5] underline underline-offset-4 sm:hidden sm:text-[1.4rem]"
				>
					Visit The Sand Studio
				</a>
				<a
					href="/?bypass-select=true"
					class="hidden text-sm leading-[1.5] underline underline-offset-4 sm:block sm:text-[1.4rem]"
				>
					Visit The Sand Studio
				</a>
			</div>
		</div>
	</div>
</section>
