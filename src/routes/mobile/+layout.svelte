<script>
	import { afterNavigate } from '$app/navigation'
	import { onMount } from 'svelte'
	import NewPixelBorder from '$lib/components/mobile/NewPixelBorder.svelte'

	let { children } = $props()

	let isOpen = $state(false)

	onMount(() => {
		afterNavigate(() => {
			const mobilePage = document.querySelector('.mobile-page')
			if (mobilePage) {
				mobilePage.scrollTo({ top: 0 })
			}
		})
	})
</script>

<div class="flex overflow-hidden bg-light-100 font-sand-mobile-regular text-sm leading-[1]">
	<nav
		class="sand-transition relative z-10 h-[100dvh] shrink-0 border-r-2 border-light-4 {isOpen
			? 'w-32'
			: 'w-[3.31rem]'}"
	>
		<div class="absolute inset-0 left-0 flex flex-col gap-[2px] overflow-hidden">
			{#each { length: 275 }, i}
				<div class="flex gap-[2px] {i % 2 === 0 ? 'pl-[2px]' : ''}">
					{#each { length: 35 }, j}
						<div class="aspect-square w-[2px] shrink-0 bg-light-4"></div>
					{/each}
				</div>
			{/each}
		</div>
		<div class="relative flex h-full flex-col gap-6 px-3 py-6">
			{#each { length: 6 }}
				<button
					onclick={() => (isOpen = !isOpen)}
					class="relative aspect-square w-6 border-[2px] border-light-4 bg-light-100"
				>
					<NewPixelBorder />
				</button>
			{/each}
			<div class="relative mt-auto aspect-square w-6 border-[2px] border-light-4 bg-light-100">
				<NewPixelBorder />
			</div>
		</div>
	</nav>

	<div
		class="mobile-page h-[100dvh] min-w-[calc(100dvw-3.31rem)] overflow-x-hidden overflow-y-scroll"
	>
		{@render children()}
	</div>
</div>
