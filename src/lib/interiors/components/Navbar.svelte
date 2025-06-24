<script lang="ts">
	import { twMerge as twm } from 'tailwind-merge'
	import Logo from '$lib/interiors/components/Logo.svelte'
	import Door from '$lib/interiors/components/Door.svelte'

	let { isInteriorsContactPage } = $props()

	const links = [
		{ label: 'Home', href: '/interiors/' },
		{ label: 'Projects', href: '/interiors/projects/' },
		{ label: 'Contact', href: '/interiors/contact/' }
	]

	let isOpen = $state(false)

	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	})
</script>

<header
	class={twm(
		'fixed top-0 z-40 flex h-[3.6rem] w-full items-center justify-center text-interior-brand transition sm:h-[11.5rem]'
	)}
>
	<div class="mx-4 flex w-full items-center justify-between sm:mx-[3rem]">
		<a
			href="/interiors/"
			class={twm(
				'aspect-square w-8 sm:w-[6.8rem]',
				(isInteriorsContactPage || isOpen) && 'text-white'
			)}
		>
			<Logo />
		</a>
		<button
			onclick={() => (isOpen = !isOpen)}
			class={twm(
				'aspect-square w-8 translate-y-[0.1rem] sm:w-[6.8rem] sm:translate-y-[0.2rem]',
				(isInteriorsContactPage || isOpen) && 'text-white'
			)}
		>
			<Door />
		</button>

		<!-- {#if isInteriorsContactPage}
			<div
				class="pointer-events-none absolute -bottom-[0.125rem] left-[4rem] right-[4rem] h-[0.125rem] bg-white"
			></div>
			<div
				class="pointer-events-none absolute left-0 right-0 top-[11.625rem] h-[calc(100dvh-11.625rem)]"
			>
	
			</div>
		{/if} -->
	</div>
</header>

{#if isOpen}
	<div
		class="fixed inset-0 top-0 z-30 flex h-[100dvh] flex-col items-end bg-black leading-[1.5] text-white"
	>
		<!-- filler for fixed navbar -->
		<div class="h-[3.6rem] sm:h-[11.5rem]"></div>
		<div
			class="flex w-full grow flex-col items-start justify-center gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-[8rem]"
		>
			{#each links as link}
				<a onclick={() => (isOpen = false)} href={link.href} class="text-[3.5rem] sm:text-[11rem]">
					{link.label}
				</a>
			{/each}
		</div>
	</div>
{/if}
