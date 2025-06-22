<script lang="ts">
	import { twMerge as twm } from 'tailwind-merge'
	import Logo from '$lib/interiors/components/Logo.svelte'
	import Door from '$lib/interiors/components/Door.svelte'

	let { isInteriorsContactPage } = $props()
</script>

<header
	class={twm(
		'fixed top-0 z-10 flex h-[3.6rem] w-full items-center justify-center text-interior-brand transition sm:h-[11.5rem]',
		isInteriorsContactPage && 'bg-black'
	)}
>
	<div class="mx-4 flex w-full items-center justify-between sm:mx-[3rem]">
		<div class={twm('aspect-square w-8 sm:w-[6.8rem]', isInteriorsContactPage && 'text-white')}>
			<Logo />
		</div>
		<div
			class={twm(
				'aspect-square w-8 translate-y-[0.1rem] sm:w-[6.8rem] sm:translate-y-[0.2rem]',
				isInteriorsContactPage && 'text-white'
			)}
		>
			<Door />
		</div>

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
