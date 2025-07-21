<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import { onMount } from 'svelte'
	import lottie from 'lottie-web'
	import NewPixelBorder from '$lib/components/mobile/NewPixelBorder.svelte'
	import { slide } from 'svelte/transition'
	import clickOutside from '$lib/utils/clickOutside'

	let { children } = $props()

	let isOpen = $state(false)

	onMount(() => {
		afterNavigate(() => {
			const mobilePage = document.querySelector('.mobile-page')
			if (mobilePage) {
				mobilePage.scrollTo({ top: 0 })
				isOpen = false
			}
		})
	})

	const playLottie = (node: HTMLDivElement, path: string) => {
		lottie.loadAnimation({
			container: node,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path
		})
	}

	const navLinks = [
		{ icon: '/mobile/nav-icons/Home.png', label: 'Home', href: '/mobile' },
		{ icon: '/interiors/interiors-spining.json', label: 'Interiors', href: '/interiors' },
		{ icon: '/mobile/nav-icons/Works.gif', label: 'Works', href: '/mobile/works' },
		{ icon: '/mobile/nav-icons/Not Works.gif', label: 'Not Works', href: '/mobile/not-works' },
		{ icon: '/mobile/nav-icons/Contact.gif', label: 'Contact', href: '/mobile/contact' },
		{
			icon: '/mobile/nav-icons/FATK.gif',
			label: 'For All Thingskind',
			href: '/mobile/for-all-thingskind'
		},
		{ icon: '/mobile/nav-icons/Explorer.png', label: 'Explorer', href: '/mobile/explorer' },
		{ icon: '/mobile/nav-icons/About.png', label: 'About', href: '/mobile/about' }
	]

	const toggleMode = () => {
		setTimeout(() => {
			const rootClasses = document.documentElement.classList
			if (rootClasses.contains('dark')) {
				rootClasses.remove('dark')
				localStorage.setItem('sand-theme', 'light')
			} else {
				rootClasses.add('dark')
				localStorage.setItem('sand-theme', 'dark')
			}
		}, 300)
	}

	const changeModeText = (node: HTMLSpanElement) => {
		const rootClasses = document.documentElement.classList
		node.textContent = rootClasses.contains('dark') ? 'Dark' : 'Light'
	}
</script>

<div
	class="flex overflow-hidden bg-light-100 font-sand-mobile-regular text-sm leading-[1] dark:bg-light-7 dark:text-light-100"
>
	<div
		onclick={() => (isOpen = !isOpen)}
		onkeydown={() => {}}
		use:clickOutside={{ callback: () => (isOpen = false) }}
		role="button"
		tabindex="0"
		aria-expanded={isOpen}
		class="sand-transition relative z-10 h-[100dvh] shrink-0 border-r-2 border-light-4 dark:border-light-25 {isOpen
			? 'w-36'
			: 'w-[3.31rem]'}"
	>
		<div class="absolute inset-0 left-0 flex flex-col gap-[2px] overflow-hidden">
			{#each { length: 275 }, i}
				<div class="flex gap-[2px] {i % 2 === 0 ? 'pl-[2px]' : ''}">
					{#each { length: 40 }, j}
						<div class="aspect-square w-[2px] shrink-0 bg-light-4 dark:bg-light-25"></div>
					{/each}
				</div>
			{/each}
		</div>
		<nav class="relative flex h-full flex-col gap-6 px-3 py-6 {!isOpen && 'pointer-events-none'}">
			{#each navLinks as link}
				<a href={link.href} class="flex items-center gap-2">
					<div
						class="relative aspect-square w-6 shrink-0 border-[2px] border-light-4 bg-light-100 dark:border-light-25 dark:bg-light-4"
					>
						<NewPixelBorder />
						<div
							class="absolute left-1/2 top-1/2 aspect-square w-5 -translate-x-1/2 -translate-y-1/2"
						>
							{#if link.icon.endsWith('.json')}
								<div
									class="h-full w-full scale-125 object-cover invert dark:invert-0"
									use:playLottie={link.icon}
								></div>
							{:else}
								<img src={link.icon} alt="" class="h-full w-full object-cover dark:invert" />
							{/if}
						</div>
					</div>
					{#if isOpen}
						<div
							transition:slide={{ axis: 'x' }}
							class="bg-light-100 px-[2px] font-sand-mobile-bold text-base text-light-4 dark:bg-light-4 dark:text-light-100"
						>
							<span class="block translate-y-[0.05rem] whitespace-nowrap leading-none">
								{link.label}
							</span>
						</div>
					{/if}
				</a>
			{/each}
			<button onclick={toggleMode} class="mt-auto flex items-center gap-2">
				<div
					class="relative aspect-square w-6 shrink-0 border-[2px] border-light-4 bg-light-100 dark:border-light-25 dark:bg-light-4"
				>
					<NewPixelBorder />
					<div
						class="absolute left-1/2 top-1/2 aspect-square w-5 -translate-x-1/2 -translate-y-1/2"
					>
						<img
							src="/mobile/nav-icons/Light.svg"
							alt=""
							class="h-full w-full object-cover dark:invert"
						/>
					</div>
				</div>
				{#if isOpen}
					<div
						transition:slide={{ axis: 'x' }}
						class="bg-light-100 px-[2px] font-sand-mobile-bold text-base text-light-4 dark:bg-light-4 dark:text-light-100"
					>
						<span
							use:changeModeText
							class="block translate-y-[0.05rem] whitespace-nowrap leading-none"
						>
							Light
						</span>
					</div>
				{/if}
			</button>
		</nav>
	</div>

	<div
		class="mobile-page h-[100dvh] min-w-[calc(100dvw-3.31rem)] overflow-x-hidden overflow-y-scroll"
	>
		{@render children()}
	</div>
</div>
