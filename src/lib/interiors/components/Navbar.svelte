<script lang="ts">
	import { twMerge as twm } from 'tailwind-merge'
	import { gsap } from 'gsap'
	import Logo from '$lib/interiors/components/Logo.svelte'
	import Door from '$lib/interiors/components/Door.svelte'

	let { isInteriorsContactPage } = $props()

	const links = [
		{ label: 'Home', href: '/interiors/' },
		{ label: 'Projects', href: '/interiors/projects/' },
		{ label: 'Services', href: '/interiors/projects/' },
		{ label: 'Contact', href: '/interiors/contact/' }
	]

	let isOpen = $state(false)
	let navLinksContainer: HTMLElement | null = $state(null)
	let lightingImage: HTMLElement | null = $state(null)

	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
			// Animate nav links with light switching effect
			animateNavLinks()
		} else {
			document.body.style.overflow = 'auto'
		}
	})

	function animateNavLinks() {
		if (!navLinksContainer) return

		// Set initial state - invisible
		gsap.set(navLinksContainer, { opacity: 0 })
		if (lightingImage) {
			gsap.set(lightingImage, { opacity: 0 })
		}

		// Create timeline for light switching effect
		const tl = gsap.timeline()

		// Realistic old light bulb flickering effect
		tl.to([navLinksContainer, lightingImage], {
			opacity: 0.4,
			duration: 0.03,
			ease: 'none'
		})
			.to([navLinksContainer, lightingImage], {
				opacity: 0,
				duration: 0.1,
				ease: 'none'
			})
			.to([navLinksContainer, lightingImage], {
				opacity: 0.8,
				duration: 0.04,
				ease: 'none'
			})
			.to([navLinksContainer, lightingImage], {
				opacity: 0,
				duration: 0.15,
				ease: 'none'
			})
			.to([navLinksContainer, lightingImage], {
				opacity: 0.6,
				duration: 0.02,
				ease: 'none'
			})
			.to([navLinksContainer, lightingImage], {
				opacity: 0,
				duration: 0.12,
				ease: 'none'
			})
			// Final warm-up and stabilization
			.to([navLinksContainer, lightingImage], {
				opacity: 0.8,
				duration: 0.1,
				ease: 'power1.out'
			})
			.to([navLinksContainer, lightingImage], {
				opacity: 0.4,
				duration: 0.05,
				ease: 'none'
			})
			.to([navLinksContainer, lightingImage], {
				opacity: 1,
				duration: 0.6,
				ease: 'power2.out'
			})
	}
</script>

<header
	class={twm(
		'fixed top-0 flex h-[3.6rem] w-full items-center justify-center text-interior-brand transition sm:h-[11.5rem]',
		isOpen ? 'z-[51]' : 'z-40'
	)}
>
	<div class="mx-4 flex w-full items-center justify-between sm:mx-[3rem]">
		<a
			href="/interiors/"
			onclick={() => (isOpen = false)}
			class={twm(
				'aspect-square w-8 sm:w-[5.25rem]',
				(isInteriorsContactPage || isOpen) && 'text-white'
			)}
		>
			<Logo />
		</a>
		<button
			onclick={() => (isOpen = !isOpen)}
			class={twm(
				'aspect-square w-[1.825rem] translate-y-[0.1rem] sm:w-[4.75rem] sm:translate-y-[0.2rem]',
				(isInteriorsContactPage || isOpen) && 'text-white'
			)}
		>
			<Door />
		</button>
	</div>
</header>

{#if isOpen}
	<div
		class={twm(
			'fixed inset-0 top-0 z-20 flex h-[100dvh] flex-col items-end bg-interior-brand leading-[1.5] text-white',
			isOpen ? 'z-50' : 'z-20'
		)}
	>
		<!-- filler for fixed navbar -->
		<div class="h-[3.6rem] sm:h-[11.5rem]"></div>

		{#if isInteriorsContactPage || isOpen}
			<div
				bind:this={lightingImage}
				class="pointer-events-none absolute left-0 right-0 top-[3.6rem] h-[100dvh] bg-interior-brand sm:top-[11.5rem]"
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
		{/if}

		<div
			bind:this={navLinksContainer}
			class="flex w-full grow flex-col items-start justify-center gap-0 p-5 sm:flex-row sm:items-center sm:gap-[7rem] sm:p-[8rem]"
		>
			{#each links as link}
				<div class="group relative -my-[0.15rem] sm:my-0">
					<a
						onclick={() => {
							setTimeout(() => {
								isOpen = false
							}, 50)
						}}
						href={link.href}
						class={twm('nav-link interior-transition text-[2.5rem] sm:text-[5.4rem]')}
					>
						{link.label}
					</a>
					<div
						class="interior-transition absolute inset-0 bottom-2 top-auto hidden h-[2px] w-full scale-x-0 bg-white group-hover:scale-x-100 sm:block"
					></div>
				</div>
			{/each}
		</div>

		<div
			class="relative flex h-[4.25rem] w-full items-center justify-between gap-4 px-5 py-5 sm:h-auto sm:px-[4rem] sm:py-[4.25rem]"
		>
			<div class="absolute inset-0 bottom-auto h-[1px] w-full opacity-30">
				<div class="h-full w-full bg-gradient-to-r from-white/0 via-white to-white/0"></div>
			</div>
			<div class="flex -translate-y-[0.22rem] items-start gap-3 sm:-translate-y-[0.15rem] sm:gap-6">
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
			<div class="-translate-y-[0.25rem] sm:-translate-y-[0.2rem]">
				<a
					href="/mobile/?bypass-select=true"
					class="text-sm leading-[1.5] underline underline-offset-4 sm:hidden sm:text-[1.6rem]"
				>
					Visit the Sand Studio
				</a>
				<a
					href="/?bypass-select=true"
					class="hidden text-sm leading-[1.5] underline underline-offset-4 sm:block sm:text-[1.6rem]"
				>
					Visit the Sand Studio
				</a>
			</div>
		</div>
	</div>
{/if}
