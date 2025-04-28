<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import { scale } from 'svelte/transition'
	import { backIn, backOut } from 'svelte/easing'
	import gsap from 'gsap'
	import { twMerge as twm } from 'tailwind-merge'
	import { OpenShells, removeShell } from '$lib/stores/shell'
	import drag from '$lib/utils/drag'
	import Scanimation from './Scanimation.svelte'
	import UsageGuide from './UsageGuide.svelte'
	import ButtonClose from '../ButtonClose.svelte'

	let shell = $derived($OpenShells.find((shell) => shell.id === 'sand-scan'))
	let index = $derived($OpenShells.findIndex((shell) => shell.id === 'sand-scan'))

	const position = (node: HTMLDivElement) => {
		if (index < 0) return
		node.style.top = `${50 + index * 5}%`
		node.style.left = `${50 + index * 5}%`
	}

	let isUsageGuideOpen = $state(false)

	onMount(() => {
		const app = document.querySelector('#sand-scan-app')
		const loadingEle = document.querySelector('#sand-scan-loading')
		const image = loadingEle!.querySelector('img')
		image!.setAttribute(
			'src',
			'https://res.cloudinary.com/dlhbpswom/image/upload/v1715587553/app-images/sand-scan-loading_ed4vcj.gif'
		)
		gsap.from(app, {
			opacity: 0,
			ease: 'power4',
			delay: 2,
			duration: 1.5
		})
		gsap.to(loadingEle, {
			opacity: 0,
			ease: 'power4',
			delay: 2,
			duration: 1.5
		})
		gsap.set(loadingEle, { display: 'none', delay: 2.6 })
	})

	onDestroy(() => {
		const loadingEle = document.querySelector('#sand-scan-loading')
		const image = loadingEle!.querySelector('img')
		image!.setAttribute('src', '')
	})

	const downloadZip = async () => {
		try {
			const response = await fetch(
				'https://res.cloudinary.com/dlhbpswom/raw/upload/v1717260159/general/TRY_rdavf4.zip'
			)
			if (!response.ok) {
				throw new Error(`Failed to fetch the file: ${response.statusText}`)
			}
			const blob = await response.blob()
			const blobUrl = URL.createObjectURL(blob)

			const link = document.createElement('a')
			link.href = blobUrl
			link.download = 'Try.zip'

			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
			URL.revokeObjectURL(blobUrl)
		} catch (error) {
			console.error('Error downloading the file:', error)
		}
	}
</script>

<div
	use:position
	use:drag
	in:scale={{ start: 0.9, duration: 200, easing: backOut }}
	out:scale={{ start: 0.9, duration: 200, easing: backIn }}
	class="fixed left-1/2 top-1/2 z-10 h-shell-desktop w-shell-desktop -translate-x-1/2 -translate-y-1/2 select-none overflow-hidden rounded-3xl border-2 border-white text-light-10 dark:border-light-12 dark:text-light-100"
	style="z-index: {shell?.zIndex}"
>
	<div class="transparent-layer"></div>

	<div class="absolute inset-0 -ml-[0.4rem] flex gap-10 opacity-sand">
		{#each [...Array(100).keys()] as _}
			<div
				class={twm(
					'w-line shrink-0 bg-white dark:bg-light-12',
					isUsageGuideOpen ? 'h-20' : 'h-full'
				)}
			></div>
		{/each}
	</div>

	<div id="sand-scan-loading" class="absolute inset-0 z-50 h-full w-full invert dark:invert-0">
		<img src="" alt="" class="h-full object-cover" />
	</div>

	<div id="sand-scan-app" class="relative flex h-full flex-col overflow-hidden">
		<div class="relative grid h-20 shrink-0 place-items-center">
			<div class="absolute left-6 top-5">
				<ButtonClose on:close={() => removeShell('sand-scan')} />
			</div>
			<p class="text-2xl">SAND Scan</p>

			<div class="absolute right-4 top-[0.92rem] flex gap-3">
				<button
					onclick={downloadZip}
					class="grid h-12 w-auto shrink-0 place-items-center rounded-2xl border-2 border-white bg-sand-yellow px-6 text-xl text-black dark:border-light-12"
				>
					Download Try.zip
				</button>
				{#if isUsageGuideOpen}
					<button
						onclick={() => (isUsageGuideOpen = false)}
						class="grid h-12 w-40 shrink-0 place-items-center rounded-2xl border-2 border-white bg-sand-yellow text-xl text-black dark:border-light-12"
					>
						Back
					</button>
				{:else}
					<button
						onclick={() => (isUsageGuideOpen = true)}
						class="grid h-12 w-40 shrink-0 place-items-center rounded-2xl border-2 border-white bg-sand-yellow text-xl text-black dark:border-light-12"
					>
						Usage Guide
					</button>
				{/if}
			</div>
		</div>
		<div class="-m-[0.1875rem] grow rounded-3xl border-2 border-white dark:border-light-12">
			{#if isUsageGuideOpen}
				<UsageGuide />
			{:else}
				<Scanimation />
			{/if}
		</div>
	</div>
</div>
