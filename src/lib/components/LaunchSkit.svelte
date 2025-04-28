<script lang="ts">
	import { scale } from 'svelte/transition'
	import { backIn, backOut } from 'svelte/easing'
	import { browser } from '$app/environment'
	import { onMount } from 'svelte'
	import ButtonClose from './ButtonClose.svelte'
	import { removeShell, type OpenShell, OpenShells } from '$lib/stores/shell'
	import drag from '$lib/utils/drag'

	let shell = $derived($OpenShells.find((shell) => shell.id === 'launch-skit'))
	let index = $derived($OpenShells.findIndex((shell) => shell.id === 'launch-skit'))

	const position = (node: HTMLDivElement) => {
		if (index < 0) return
		node.style.top = `${50 + index * 5}%`
		node.style.left = `${50 + index * 5}%`
	}

	let VideoPlayer: any = $state()

	// onMount(async () => {
	//   VideoPlayer = (await import("svelte-video-player")).default;
	//   setTimeout(() => document.querySelector("video")?.click(), 2000);
	//   setTimeout(() => {
	//     document.querySelector(".controls")?.classList.add("non-draggable");
	//     document.querySelector("video")?.play();
	//   }, 4000);
	// });
</script>

{#if false}
	<div
		use:drag
		use:position
		in:scale={{ start: 0.9, duration: 200, easing: backOut }}
		out:scale={{ start: 0.9, duration: 200, easing: backIn }}
		class="absolute left-1/2 top-1/2 z-10 w-[41.5rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border-2 border-white text-light-10 dark:border-light-12 dark:text-light-100"
		style="z-index: {shell?.zIndex}"
	>
		<div class="transparent-layer"></div>

		<div class="absolute inset-0 -ml-[0.4rem] flex gap-10 opacity-sand">
			{#each [...Array(20).keys()] as _}
				<div class="h-full w-line shrink-0 bg-white dark:bg-light-12"></div>
			{/each}
		</div>

		<div class="relative flex h-20 items-center gap-2 overflow-hidden pl-6">
			<ButtonClose on:close={() => removeShell('launch-skit')} />
		</div>

		<div class="z-2 absolute left-1/2 top-[1.6rem] -translate-x-1/2 font-sand-medium text-xl">
			Launch Skit
		</div>

		<div
			class="relative -m-[0.1875rem] overflow-hidden rounded-3xl border-2 border-white dark:border-light-12"
		>
			<div class="aspect-[0.8/1] w-full">
				{#if browser}
					<VideoPlayer
						width="1600"
						height="2000"
						poster="/launch-skit-poster.png"
						source="/launch-skit.mp4"
						color="black"
						timeDisplay={true}
						loop
					/>
					<!-- <VideoPlayer
          width="1600"
          height="2000"
          poster="/launch-skit-poster.png"
          source="/launch-skit.mp4"
          color="black"
          timeDisplay={true}
          loop
        /> -->
				{/if}
			</div>
		</div>
	</div>
{/if}
