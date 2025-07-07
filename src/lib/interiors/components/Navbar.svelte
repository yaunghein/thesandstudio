<script lang="ts">
	import { twMerge as twm } from 'tailwind-merge'
	import { gsap } from 'gsap'
	import Logo from '$lib/interiors/components/Logo.svelte'
	import Door from '$lib/interiors/components/Door.svelte'

	let { isInteriorsContactPage } = $props()

	const links = [
		{ label: 'Home', href: '/interiors/' },
		{ label: 'Projects', href: '/interiors/projects/' },
		{ label: 'Contact', href: '/interiors/contact/' }
	]

	let isOpen = $state(false)
	let navLinksContainer: HTMLElement | null = $state(null)
	let lightingImage: HTMLElement | null = $state(null)
	let hoveredLink = $state<string | null>(null)

	$effect(() => {
		if (!isOpen) {
			hoveredLink = null
		}
	})

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

		{#if isInteriorsContactPage || isOpen}
			<div
				class="pointer-events-none absolute -bottom-[0.125rem] left-2 right-2 h-[0.1rem] bg-white sm:left-[4rem] sm:right-[4rem] sm:h-[0.25rem]"
			></div>
			<div
				bind:this={lightingImage}
				class="pointer-events-none absolute left-0 right-0 top-[calc(3.6rem+0.125rem)] h-[100dvh] sm:top-[calc(11.5rem+0.125rem)]"
			>
				<img
					src="/interiors/lighting-desktop.webp"
					alt=""
					class="absolute inset-0 bottom-auto mx-auto hidden h-full w-full sm:block"
				/>
				<img
					src="/interiors/lighting-mobile.webp"
					alt=""
					class="absolute inset-0 bottom-auto mx-auto h-full w-full sm:hidden"
				/>
			</div>
		{/if}
	</div>
</header>

{#if isOpen}
	<div
		class={twm(
			'fixed inset-0 top-0 z-20 flex h-[100dvh] flex-col items-end bg-black leading-[1.5] text-white',
			isOpen ? 'z-50' : 'z-20'
		)}
	>
		<!-- filler for fixed navbar -->
		<div class="h-[3.6rem] sm:h-[11.5rem]"></div>
		<div
			bind:this={navLinksContainer}
			class="flex w-full grow flex-col items-start justify-center gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-[8rem]"
		>
			{#each links as link}
				<a
					onclick={() => (isOpen = false)}
					href={link.href}
					onmouseenter={() => (hoveredLink = link.label)}
					onmouseleave={() => (hoveredLink = null)}
					class={twm(
						'nav-link interior-transition text-[3.5rem] sm:text-[11rem] ',
						hoveredLink === link.label ? 'text-glow-white opacity-100' : 'opacity-25',
						hoveredLink === null && 'opacity-100'
					)}
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div
			class="grid h-[4.25rem] w-full grid-cols-2 items-center justify-between gap-4 border-t border-white/30 px-5 pb-8 pt-4 sm:flex sm:h-auto sm:px-[4rem] sm:py-[4.25rem]"
		>
			<div class="flex -translate-y-[0.1rem] items-start gap-3 sm:gap-6">
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
			<div class="-translate-y-[0.125rem]">
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
