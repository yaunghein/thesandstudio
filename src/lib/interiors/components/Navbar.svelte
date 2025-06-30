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
		'fixed top-0 flex h-[3.6rem] w-full items-center justify-center text-interior-brand transition sm:h-[11.5rem]',
		isOpen ? 'z-[51]' : 'z-40'
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

		{#if isInteriorsContactPage}
			<!-- <div
				class="pointer-events-none absolute -bottom-[0.125rem] left-[4rem] right-[4rem] h-[0.125rem] bg-white"
			></div> -->
			<!-- <div
				class="pointer-events-none absolute left-0 right-0 top-[10.5rem] h-[calc(100dvh-10.5rem)]"
			>
				<img
					src="/interiors/lighting.png"
					alt=""
					class="absolute inset-0 bottom-auto h-[28rem] w-full"
				/>
			</div> -->
			<!-- <div
				style="
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
  mask-composite: exclude;
  border-radius: 100px;
"
				class="pointer-events-none absolute left-0 right-0 top-[13.5rem] h-[calc(100dvh-10.5rem)] scale-x-[1]"
			></div> -->
			<!-- <div
				style="background: red; filter: blur(200.35076904296875px); backdrop-filter: blur(10px);"
				class="pointer-events-none absolute left-0 right-0 top-[12.5rem] h-[calc(100dvh-10.5rem)] scale-[0.75]"
			></div> -->
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
			class="flex w-full grow flex-col items-start justify-center gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-[8rem]"
		>
			{#each links as link}
				<a onclick={() => (isOpen = false)} href={link.href} class="text-[3.5rem] sm:text-[11rem]">
					{link.label}
				</a>
			{/each}
		</div>

		<div
			class="grid w-full grid-cols-2 items-center justify-between gap-4 border-t border-white/30 px-5 pb-8 pt-4 sm:flex sm:px-[4rem] sm:py-[4.25rem]"
		>
			<div class="flex items-start gap-6">
				<a
					href="tel:+66614464660"
					class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]"
				>
					IG
				</a>
				<a
					href="mailto:hnin@thesandstudio.com"
					class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]"
				>
					LINE
				</a>
			</div>
			<div class="">
				<div class="text-sm leading-[1.5] underline underline-offset-4 sm:text-[1.6rem]">
					Visit the Sand Studio
				</div>
			</div>
		</div>
	</div>
{/if}
