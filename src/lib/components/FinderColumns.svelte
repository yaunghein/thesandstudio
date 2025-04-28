<script lang="ts">
	import FinderColumns from './FinderColumns.svelte'
	import { goto } from '$app/navigation'
	import { FilePreview, handleFileClick, handleFileDoubleClick } from '$lib/stores/finder'
	import type { File } from '$lib/stores/finder'
	import { twMerge as twm } from 'tailwind-merge'
	import { addShell } from '$lib/stores/shell'

	interface Props {
		files: File[]
		isRecursive?: boolean // to have right border while only one column is opening
	}

	let { files, isRecursive = false }: Props = $props()

	const MIN_FILE_COUNT = 20

	let openFolder = $derived(files?.find((file: File) => file.isOpen))
</script>

{#if files}
	<div
		data-simplebar
		class={twm(
			'relative -ml-[0.1875rem] h-full w-[29.8rem] shrink-0 border-l-[0.1875rem] border-white p-5 dark:border-light-12',
			!isRecursive && !$FilePreview && 'border-r-2'
		)}
	>
		<div class="absolute inset-0 mb-8 h-full w-full p-5">
			{#each [...Array(Math.max(MIN_FILE_COUNT, files.length)).keys()] as index}
				<div
					class={twm(
						'h-10 w-full rounded-lg',
						(index + 1) % 2 === 0 ? 'bg-light-90 dark:bg-black' : 'bg-light-80 dark:bg-light-7'
					)}
				></div>
			{/each}
		</div>

		{#if files[0]}
			{#each files as file}
				<button
					title={file.label}
					class={twm(
						'relative flex h-10 w-full items-center justify-between gap-1 overflow-hidden rounded-lg px-3 text-left text-2xl leading-none',
						file.isOpen && 'bg-light-70 dark:bg-light-20'
					)}
					id={file.label}
					ondblclick={() => {
						switch (file.label) {
							case 'Sand Scan':
								addShell({ id: 'sand-scan', zIndex: 65 })
								break
							case 'For All Thingkind':
								goto('/for-all-thingkind')
								break
							case 'Works':
								goto('/works')
								break
							case 'Not Works':
								goto('/not-works')
								break
							default:
								handleFileDoubleClick(file)
						}
					}}
					onclick={() => handleFileClick(file)}
				>
					<div class={twm('marquee-content', file.isMarquee && 'animate-marquee')}>
						<span class="whitespace-nowrap">{file.label}</span>
						{#if file.isMarquee}
							<span class="whitespace-nowrap">{file.label}</span>
						{/if}
					</div>

					{#if file.type === 'folder'}
						<span class="absolute right-2 shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="h-4 w-4"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m8.25 4.5 7.5 7.5-7.5 7.5"
								/>
							</svg>
						</span>
					{/if}
				</button>
			{/each}
		{:else}
			<p
				class="relative flex h-10 w-full items-center truncate px-3 text-left text-2xl leading-none"
			>
				There is no file yet in this folder.
			</p>
		{/if}
	</div>
{/if}

{#if openFolder}
	<FinderColumns files={openFolder.data} isRecursive={true} />
{/if}
