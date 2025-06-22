<script lang="ts">
	import { onMount } from 'svelte'
	import Navbar from '$lib/interiors/components/Navbar.svelte'

	const { children } = $props()

	onMount(() => {
		document.documentElement.classList.add('bg-interior-light')

		return () => {
			document.documentElement.classList.remove('bg-interior-light')
		}
	})
</script>

<Navbar />

<main class="bg-interior-light text-sm text-interior-brand sm:text-[1.57rem]">
	<!-- filler for fixed navbar -->
	<div class="h-[3.6rem] sm:h-[11.5rem]"></div>
	{@render children()}
</main>

<!-- <div class="fixed bottom-0 left-5 top-0 z-50 w-[1px] bg-red-500"></div>
<div class="fixed bottom-0 right-5 top-0 z-50 w-[1px] bg-red-500"></div> -->

<div class="pointer-events-none fixed inset-0 z-50 mx-[4rem] flex gap-[2rem]">
	{#each { length: 12 } as _}
		<div class="h-full flex-1 shrink-0 bg-neutral-900/5"></div>
	{/each}
</div>
<div class="pointer-events-none fixed inset-0 z-50 my-[4rem] flex flex-col gap-[2rem]">
	{#each { length: 12 } as _}
		<div class="h-full flex-1 shrink-0 bg-neutral-900/5"></div>
	{/each}
</div>

<!-- <div class="pointer-events-none fixed inset-0 z-50 mx-5 flex gap-4">
	{#each { length: 2 } as _}
		<div class="h-full flex-1 shrink-0 bg-neutral-900/5"></div>
	{/each}
</div>
<div class="pointer-events-none fixed inset-0 z-50 my-5 flex flex-col gap-4">
	{#each { length: 10 } as _}
		<div class="h-full flex-1 shrink-0 bg-neutral-900/5"></div>
	{/each}
</div> -->
