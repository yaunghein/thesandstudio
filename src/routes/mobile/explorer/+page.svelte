<script lang="ts">
	import { Files, type File } from '$lib/stores/explorer'

	type FilePathItem = { id: string; label: string }

	function findNodeById(
		tree: File[],
		id: string,
		path: FilePathItem[] = []
	): { result: File | null; path: FilePathItem[] } {
		for (const node of tree) {
			const currentPath = [...path, { id: node.id, label: node.label }]

			if (node.id === id) {
				return { result: node, path: currentPath }
			}

			if (node.type === 'folder' && node.data) {
				const found = findNodeById(node.data, id, currentPath)
				if (found.result) return found
			}
		}
		return { result: null, path: [] }
	}

	function handleNodeById(tree: File[], id: string): { data: File[]; path: FilePathItem[] } {
		const { result, path } = findNodeById(tree, id)

		if (!result) {
			console.log('Node not found')
			return { data: [], path: [] }
		}

		if (result.type === 'file') {
			console.log('File found:', result)
			return { data: [], path }
		}

		return { data: result.data || [], path }
	}

	let id = $state('')
	let { data, path } = $derived(handleNodeById($Files, id))
	let datax = $derived(data.length ? data : $Files)

	$effect(() => {
		const breadcrumb = document.querySelector('.breadcrumb')
		if (breadcrumb && id) {
			console.log('scroll to end')
			breadcrumb.scrollTo({ left: breadcrumb.scrollWidth, behavior: 'smooth' })
		}

		const mobilePage = document.querySelector('.mobile-page')
		if (mobilePage) {
			mobilePage.scrollTo({ top: 0 })
		}
	})
</script>

<section class="">
	<h1 class="px-4 pt-4 text-6xl leading-[0.75]">
		<span class="font-sand-mobile-bold">Sand Explorer 1000</span> Lite
	</h1>

	<div class="relative mt-2 py-3">
		<div class="absolute inset-0 bottom-auto h-[1px] w-full bg-light-4 dark:bg-light-25"></div>
		<div
			class="absolute inset-0 bottom-auto top-[3px] h-[1px] w-full bg-light-4 dark:bg-light-25"
		></div>
		<div class="absolute inset-0 top-auto h-[1px] w-full bg-light-4 dark:bg-light-25"></div>
		<div
			class="absolute inset-0 bottom-[3px] top-auto h-[1px] w-full bg-light-4 dark:bg-light-25"
		></div>
		<div
			class="breadcrumb hide-scrollbar flex h-5 items-center gap-1 overflow-y-hidden overflow-x-scroll whitespace-pre px-4 pt-[0.185rem] font-sand-mobile-bold text-[1.45rem] uppercase leading-[0.45]"
		>
			<button onclick={() => (id = '')}>Root/</button>
			{#each path as item}
				<button onclick={() => (id = item.id)}>{item.label}/</button>
			{/each}
		</div>
	</div>

	<div class="grid grid-cols-2 gap-x-5">
		{#each datax as file}
			{#if file.type === 'folder'}
				<button onclick={() => (id = file.id)} class="mt-5 flex flex-col gap-2 odd:ml-5 even:mr-5">
					<div class="relative aspect-[1/1.04] w-full">
						{@render FolderIcon()}
						<div class="absolute left-3 top-2 font-sand-mobile-bold text-[2rem]">
							{file.data?.length}
						</div>
					</div>
					<div class="font-sand-mobile-bold text-[1.45rem]">{file.label}</div>
				</button>
			{:else if file.mediaType === 'img'}
				<img
					alt={file.label}
					src={file.mediaSrc}
					class="col-span-2 border-b-[2px] border-light-4 last-of-type:border-b-0 dark:border-light-25"
				/>
			{:else if file.mediaType === 'video'}
				<div class="col-span-2 w-full bg-black">
					<video style="width:100%;height:100%;" autoplay loop src={file.mediaSrc}>
						<source type="video/mp4" src={file.mediaSrc} />
						<track kind="captions" />
					</video>
				</div>
			{:else if file.mediaType === 'pdf'}
				<a
					class="col-span-2 py-3 text-center text-[1.45rem] leading-[0.75]"
					href={file.mediaSrc}
					target="_blank"
				>
					{file.label}
				</a>
			{/if}
		{/each}
	</div>
</section>

{#snippet FolderIcon()}
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 108 112"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="dark:invert"
	>
		<rect x="2" y="6" width="104" height="104" fill="transparent" />
		<rect
			x="108"
			y="110"
			width="2.00001"
			height="104"
			transform="rotate(-180 108 110)"
			fill="black"
		/>
		<rect x="107" y="111" width="2" height="2" transform="rotate(-180 107 111)" fill="black" />
		<rect x="107" y="5" width="2" height="2" transform="rotate(90 107 5)" fill="black" />
		<rect y="6" width="2" height="104" fill="black" />
		<rect x="2" y="6" width="2" height="4" transform="rotate(-90 2 6)" fill="black" />
		<rect x="42" y="6" width="2" height="64" transform="rotate(-90 42 6)" fill="black" />
		<rect x="1" y="5" width="2" height="2" fill="black" />
		<rect x="5" y="3" width="2" height="2" fill="black" />
		<rect x="41" y="3" width="2" height="2" fill="black" />
		<rect x="6" y="2" width="2" height="2" fill="black" />
		<rect x="7" y="1" width="2" height="2" fill="black" />
		<rect x="40" y="2" width="2" height="2" fill="black" />
		<rect x="39" y="1" width="2" height="2" fill="black" />
		<rect x="8" width="32" height="2" fill="black" />
		<rect x="2" y="112" width="2" height="104" transform="rotate(-90 2 112)" fill="black" />
		<rect x="1" y="111" width="2" height="2" transform="rotate(-90 1 111)" fill="black" />
	</svg>
{/snippet}
