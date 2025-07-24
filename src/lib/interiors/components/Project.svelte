<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import { twMerge as twm } from 'tailwind-merge'

	let { project, index, onProjectVisibilityChange = () => {} } = $props()

	// let isVisible = $state(false)
	// let wasVisible = $state(false)
	// let container: HTMLAnchorElement | null = null

	// $effect(() => {
	// 	if (isVisible !== wasVisible) {
	// 		onProjectVisibilityChange(project, isVisible)
	// 		wasVisible = isVisible
	// 	}
	// })

	// onMount(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			for (const entry of entries) {
	// 				isVisible = entry.isIntersecting
	// 			}
	// 		},
	// 		{
	// 			root: null,
	// 			threshold: 0.5
	// 		}
	// 	)

	// 	if (container) observer.observe(container)

	// 	onDestroy(() => {
	// 		if (container) observer.unobserve(container)
	// 	})
	// })
</script>

<a
	href="/interiors/projects/{project.slug}"
	class={twm('relative overflow-hidden', project.coverImage.layoutClassesMobile)}
>
	<div class="absolute inset-0 h-full w-full">
		<img
			src={project.coverImage.path}
			alt=""
			class="h-full w-full object-cover mix-blend-multiply"
		/>
	</div>
	<div class="absolute bottom-0 left-0">
		{#if index + 1 < 10}
			<span class="text-interior-brand">0{index + 1}</span>
		{:else}
			<span class="text-interior-brand">{index + 1}</span>
		{/if}
	</div>
</a>
