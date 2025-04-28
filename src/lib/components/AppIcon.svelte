<script lang="ts">
	import { browser } from '$app/environment'
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player'
	import { twMerge as twm } from 'tailwind-merge'
	import type { AppIcon } from '$lib/types'

	interface Props {
		icon: AppIcon
		isInDock?: boolean
	}

	let { icon, isInDock = false }: Props = $props()
</script>

<button
	onclick={icon.handleClick}
	class="border-white-90 group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 bg-light-100 p-2 text-light-10 dark:border-light-20 dark:bg-light-10 dark:text-light-100"
>
	<div
		class="absolute inset-0 bg-light-10 opacity-0 transition duration-500 ease-out group-hover:opacity-100 dark:bg-light-100"
	></div>

	<div
		class="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 invert transition duration-500 ease-out group-hover:-translate-y-32 group-hover:scale-[1.4] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
	>
		{#if icon.lottie && browser}
			<LottiePlayer
				src={icon.lottie}
				autoplay={true}
				loop={true}
				renderer="svg"
				background="transparent"
				width="100%"
				height="100%"
				controls=""
				controlsLayout=""
			/>
		{:else}
			<div
				class="icon-wrapper scale-100 invert transition duration-500 ease-out group-hover:scale-[3] dark:invert-0"
			>
				<icon.image />
			</div>
		{/if}
	</div>

	<div
		class="absolute bottom-3 left-4 w-20 origin-right translate-y-[100%] text-left font-sand-bold text-2xl text-light-100 opacity-0 transition duration-500 ease-out group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100 dark:text-light-10"
	>
		{icon.label}
	</div>
</button>
