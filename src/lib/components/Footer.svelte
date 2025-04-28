<script lang="ts">
	import { page } from '$app/stores'
	import gsap from 'gsap'
	import lottie from 'lottie-web'
	import { twMerge as twm } from 'tailwind-merge'
	import clickOutside from '$lib/utils/clickOutside'
	import Logo from '$lib/svgs/Logo.svelte'
	import { CursorType } from '$lib/stores/cursor'
	import { openContactTab } from '$lib/stores/finder'
	import { addShell } from '$lib/stores/shell'

	interface Props {
		isLogoHovering?: boolean
	}

	let { isLogoHovering = false }: Props = $props()

	let isOpen = $state(false)

	const playLottie = (node: HTMLDivElement) => {
		lottie.loadAnimation({
			container: node,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: 'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715936686/lotties/sand-text-footer_jby9yx.json'
		})
	}

	const moveText = (node: HTMLDivElement) => {
		const tl = gsap.timeline({ repeat: Infinity })
		tl.to(node, { x: '-100%', duration: 7.5, ease: 'none' }).set(node, {
			x: '0%'
		})
	}
</script>

<footer
	use:clickOutside={{
		callback: () => {
			isOpen = false
			CursorType.set('normal')
		}
	}}
	class="relative z-[20] hidden font-sans text-5xl text-light-10 dark:text-light-100 sm:flex"
>
	<div class="transparent-layer"></div>
	<div
		class="sand-transition absolute -top-16 left-1/2 h-16 w-[32rem] -translate-x-1/2 font-sand-medium text-xl"
	>
		{#if !isOpen && $page.url.pathname === '/'}
			<span class="absolute left-1/2 top-0 hidden -translate-x-1/2">
				© {new Date().getFullYear()} The Sand Studio
			</span>
		{/if}

		{#if !isOpen}
			<button
				onclick={() => {
					isOpen = !isOpen
					CursorType.set('normal')
				}}
				class="{isLogoHovering &&
					'translate-y-10'} text-light dark:text-dark sand-transition group absolute bottom-0 left-1/2 grid h-4 w-80 -translate-x-1/2 place-items-center rounded-t-2xl border-2 border-b-0 border-white bg-light-90 hover:h-10 dark:border-light-12 dark:bg-black"
			>
				<span class="sr-only">Open Footer</span>
				{#if !isOpen}
					<span class={twm('mt-2 transition', isOpen && 'rotate-180')}>
						<svg
							width="50"
							height="18"
							viewBox="0 0 50 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-3 w-6"
						>
							<path d="M25.0002 0L49.2489 18H0.751465L25.0002 0Z" fill="currentColor" />
						</svg>
					</span>
				{/if}
			</button>
		{/if}
	</div>

	{#if isOpen}
		<div class="absolute left-0 right-0 top-0 z-20 w-full">
			<div class="absolute bottom-0 left-0 aspect-square w-[1.63rem] text-white dark:text-light-12">
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M24 26C10.7452 26 0 15.2548 0 2V26H24Z"
						class="fill-light-90 opacity-50 dark:fill-black"
					/>
					<path
						d="M1 0V2.5C1 14.9264 11.0736 25 23.5 25C24.3342 25 25.1675 25 26 25"
						class="stroke-current stroke-[0.125rem]"
						stroke="#1400FF"
						stroke-width="2"
					/>
				</svg>
			</div>

			<div
				class="absolute bottom-0 left-[1.63rem] right-[1.63rem] h-[0.11rem] bg-white dark:bg-light-12"
			></div>

			<div
				class="absolute bottom-0 right-0 aspect-square w-[1.63rem] -scale-x-[1] text-white dark:text-light-12"
			>
				<svg
					width="100%"
					height="100%"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M24 26C10.7452 26 0 15.2548 0 2V26H24Z"
						class="fill-light-90 opacity-50 dark:fill-black"
					/>
					<path
						d="M1 0V2.5C1 14.9264 11.0736 25 23.5 25C24.3342 25 25.1675 25 26 25"
						class="stroke-current stroke-[0.125rem]"
						stroke="#1400FF"
						stroke-width="2"
					/>
				</svg>
			</div>
		</div>
	{/if}

	<div
		role="region"
		onmouseenter={() => CursorType.set('normal')}
		onmouseleave={() => CursorType.set('footer-close')}
		class="{isOpen ? 'h-[28rem]' : 'h-[0rem]'} flex flex-col overflow-hidden transition-all"
	>
		<div class="relative flex items-center gap-12 px-[3rem] pt-6 text-3xl">
			<a
				href="https://www.instagram.com/the.sandstudio/"
				target="_blank"
				onmouseenter={() => CursorType.set('normal')}>INSTAGRAM</a
			>

			<a
				href="https://www.facebook.com/thesandstudio.works"
				target="_blank"
				onmouseenter={() => CursorType.set('normal')}>FACEBOOK</a
			>

			<a class="ml-auto" href="/" onmouseenter={() => CursorType.set('normal')}>
				© {new Date().getFullYear()}
			</a>
		</div>

		<button
			onclick={() => {
				addShell({ id: 'finder', zIndex: 65 })
				openContactTab()
			}}
			onmouseenter={() => CursorType.set('contact')}
			onmouseleave={() => CursorType.set('normal')}
			class="flex h-full overflow-hidden whitespace-nowrap text-[25rem]"
		>
			<div class="flex h-full shrink-0 items-center">
				<div use:moveText class="flex h-full">
					<div class="pointer-events-none ml-10 mr-5 aspect-square w-[20.75rem] shrink-0">
						<!-- <Logo /> -->
					</div>

					<div class="flex h-full shrink-0 items-center dark:invert">
						<div use:playLottie></div>
					</div>
				</div>

				<div use:moveText class="flex h-full">
					<div class="pointer-events-none ml-10 mr-5 aspect-square w-[20.75rem] shrink-0">
						<!-- <Logo /> -->
					</div>

					<div class="flex h-full shrink-0 items-center dark:invert">
						<div use:playLottie></div>
					</div>
				</div>
			</div></button
		>
	</div>
</footer>
