<script lang="ts">
	import { scale } from 'svelte/transition'
	import { backIn, backOut } from 'svelte/easing'
	import { OpenShells, removeShell } from '$lib/stores/shell'
	import { Backgrounds, changeBackground } from '$lib/stores/background'
	import { changeCursorType } from '$lib/stores/cursor'
	import drag from '$lib/utils/drag'
	import ButtonClose from './ButtonClose.svelte'

	let shell = $derived($OpenShells.find((shell) => shell.id === 'backgrounds'))
	let index = $derived($OpenShells.findIndex((shell) => shell.id === 'backgrounds'))

	const position = (node: HTMLDivElement) => {
		if (index < 0) return
		node.style.top = `${50 + index * 5}%`
		node.style.left = `${50 + index * 5}%`
	}
</script>

<div
	use:drag
	use:position
	in:scale={{ start: 0.9, duration: 200, easing: backOut }}
	out:scale={{ start: 0.9, duration: 200, easing: backIn }}
	class="fixed left-1/2 top-1/2 z-10 h-[43.2rem] w-[65rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border-2 border-white text-light-100 dark:border-light-12"
	style="z-index: {shell?.zIndex}"
>
	<div class="transparent-layer"></div>

	<div class="absolute inset-0 -ml-[0.4rem] flex gap-10 opacity-sand">
		{#each [...Array(100).keys()] as _}
			<div class="h-full w-line shrink-0 bg-white dark:bg-light-12"></div>
		{/each}
	</div>

	<div class="relative flex h-full flex-col overflow-hidden">
		<div class="relative grid h-20 shrink-0 place-items-center">
			<div class="absolute left-6 top-5">
				<ButtonClose on:close={() => removeShell('backgrounds')} />
			</div>
			<p class="text-2xl text-black dark:text-light-100">Backgrounds</p>
		</div>

		<div
			class="-m-[0.1875rem] grid grow grid-cols-2 gap-3 overflow-auto rounded-3xl border-2 border-white p-6 dark:border-light-12"
		>
			{#each $Backgrounds as bg}
				<button
					onclick={() => {
						changeBackground(bg.name)
						sessionStorage.setItem('sand-background', bg.name) // to check if bg is in 3D state when navigate to home from other pages
					}}
					class="aspect-[1.91/1] w-full"
				>
					<div
						use:changeCursorType={{ inType: bg.name, outType: 'normal' }}
						class="relative overflow-hidden rounded-xl"
					>
						<!-- <div
            use:changeCursorType={{ inType: bg.name, outType: "normal" }}
            class="relative rounded-xl aspect-[1.91/1] overflow-hidden"
          > -->
						<img
							class="scale-[1.01] object-cover dark:hidden"
							src={bg.thumbnail.light}
							alt={bg.name}
						/>
						<img
							class="hidden scale-[1.01] object-cover dark:block"
							src={bg.thumbnail.dark}
							alt={bg.name}
						/>
					</div>
				</button>
			{/each}
		</div>
	</div>
</div>
