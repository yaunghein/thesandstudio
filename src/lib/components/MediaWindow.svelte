<script lang="ts">
	import ButtonClose from './ButtonClose.svelte'
	import { removeShell, type OpenShell, OpenShells } from '$lib/stores/shell'
	import drag from '$lib/utils/drag'

	interface Props {
		file: OpenShell
		index?: number
	}

	let { file, index = 0 }: Props = $props()

	const { mediaType, mediaSrc } = file.file!

	const position = (node: HTMLDivElement) => {
		if (index === 0) return
		node.style.top = `${50 + index * 5}%`
		node.style.left = `${50 + index * 5}%`
	}
</script>

<div
	use:drag
	use:position
	class="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 {mediaType === 'pdf'
		? 'w-[64rem]'
		: 'w-[41.5rem]'} overflow-hidden rounded-3xl border-2 border-white text-light-10 dark:border-light-12 dark:text-light-100"
	style="z-index: {file?.zIndex}"
>
	<div class="transparent-layer"></div>

	<div class="absolute inset-0 -ml-[0.4rem] flex gap-10 opacity-sand">
		{#each [...Array(20).keys()] as _}
			<div class="h-full w-line shrink-0 bg-white dark:bg-light-12"></div>
		{/each}
	</div>

	<div class="relative flex h-20 items-center gap-2 overflow-hidden pl-6">
		<ButtonClose on:close={() => removeShell(file.id)} />
	</div>

	<div
		class="relative -m-[0.1875rem] overflow-hidden rounded-3xl border-2 border-white dark:border-light-12"
	>
		{#if mediaType === 'img'}
			<img class="w-full object-contain" src={mediaSrc} alt="" />
		{:else if mediaType === 'video'}
			<div class="w-full bg-black">
				<video
					style="width:100%;height:100%;"
					width="410"
					height="230"
					autoplay
					controls
					src={mediaSrc}
				>
					<source type="video/mp4" src={mediaSrc} />
					<track kind="captions" />
				</video>
			</div>
		{:else if mediaType === 'pdf'}
			<embed src={mediaSrc} type="application/pdf" width="100%" height="500" />
		{/if}
	</div>
</div>
