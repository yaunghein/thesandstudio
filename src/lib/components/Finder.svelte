<script lang="ts">
	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	import { backIn, backOut } from 'svelte/easing'
	import FinderColumns from './FinderColumns.svelte'
	import CFilePreview from './CFilePreview.svelte'
	import ButtonClose from './ButtonClose.svelte'
	import ContactForm from './ContactForm.svelte'
	import {
		tabs,
		Tabs,
		FilePreview,
		HistoryIndex,
		FinderHistory,
		FilePreviewHistory,
		FinderOpenPath,
		addHistory
	} from '$lib/stores/finder'
	import type { Tab } from '$lib/stores/finder'
	import { OpenShells, removeShell } from '$lib/stores/shell'
	import drag from '$lib/utils/drag'
	import deepClone from '$lib/utils/deepClone'
	import IconChevronLeft from '$lib/svgs/IconChevronLeft.svelte'
	import IconChevronRight from '$lib/svgs/IconChevronRight.svelte'
	import IconSandExplorer from '$lib/svgs/IconSandExplorer.svelte'
	import ContactFormTubeLabel from '$lib/svgs/ContactFormTubeLabel.svelte'
	import StarwarText from './StarwarText.svelte'

	$: shell = $OpenShells.find((shell) => shell.id === 'finder')
	$: index = $OpenShells.findIndex((shell) => shell.id === 'finder')

	const position = (node: HTMLDivElement) => {
		if (index < 0) return
		node.style.top = `${50 + index * 5}%`
		node.style.left = `${50 + index * 5}%`
	}

	onMount(() => {
		const scrollColumns = () => {
			setTimeout(() => {
				const columns = document.getElementById('columns')
				if (columns) columns.scrollLeft = columns.scrollWidth
			}, 0)
		}
		Tabs.subscribe(scrollColumns)
		FilePreview.subscribe(scrollColumns)
	})

	const reset = () => {
		Tabs.set(deepClone(tabs))
		FinderHistory.set([deepClone(tabs)])
		FilePreview.set(undefined)
		FilePreviewHistory.set([undefined])
		HistoryIndex.set(0)
	}

	$: currentTab = $Tabs.find((tab) => tab.isOpen) as Tab
	$: canPrev = $HistoryIndex > 0
	$: canNext = $HistoryIndex < $FinderHistory.length - 1
</script>

<div
	use:drag
	use:position
	in:scale={{ start: 0.9, duration: 200, easing: backOut }}
	out:scale={{ start: 0.9, duration: 200, easing: backIn }}
	class="fixed left-1/2 top-1/2 z-10 h-shell-desktop w-shell-desktop -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border-2 border-white text-light-10 dark:border-light-12 dark:text-light-100"
	style="z-index: {shell?.zIndex}"
>
	<div class="transparent-layer" />

	<div class="absolute inset-0 -ml-[0.4rem] flex gap-10 opacity-sand">
		{#each [...Array(100).keys()] as _}
			<div class="h-full w-line shrink-0 bg-white dark:bg-light-12" />
		{/each}
	</div>

	<div class="relative flex h-full overflow-hidden">
		<div class="relative w-[20.65rem] shrink-0">
			<div class="ml-6 mt-6">
				<ButtonClose
					on:close={() => {
						removeShell('finder')
						setTimeout(reset, 300)
					}}
				/>
			</div>
			<div class="mt-14 flex flex-col px-9">
				{#each $Tabs as tab}
					<button
						class="flex items-center gap-4 py-1"
						on:click={() => {
							const updatedTabs = deepClone(tabs).map((i) => ({
								...i,
								isOpen: i.label === tab.label ? true : false
							}))
							Tabs.set(updatedTabs)
							FilePreview.set(undefined)
							addHistory(updatedTabs)
						}}
					>
						<div
							class="h-[1.25rem] w-[1.65rem] shrink-0 rounded border-[0.125rem] {tab.isOpen
								? 'border-light-10 bg-light-10 dark:border-light-100 dark:bg-light-100'
								: 'border-light-70 bg-transparent dark:border-light-12'}"
						/>
						<div class="text-2xl">{tab.label}</div>
					</button>
				{/each}
			</div>

			<div class="absolute bottom-[2.1rem] left-[2.1rem] flex flex-col">
				<div class="h-16 w-32 text-white dark:text-light-12">
					<IconSandExplorer />
				</div>
			</div>
		</div>

		<div
			class="-m-[0.1875rem] ml-0 grow overflow-hidden rounded-3xl border-2 border-white bg-light-90 dark:border-light-12 dark:bg-black"
		>
			<div class="flex h-20 items-center px-4">
				<button
					class="aspect-square h-16 cursor-pointer select-none {canPrev
						? 'pointer-events-auto text-light-10 dark:text-light-100'
						: 'pointer-events-none text-light-80 dark:text-light-20'}"
					on:click={() => {
						HistoryIndex.set($HistoryIndex - 1)
						Tabs.set($FinderHistory[$HistoryIndex])
						FilePreview.set(undefined)
					}}
				>
					<IconChevronLeft />
				</button>
				<button
					class="aspect-square h-16 cursor-pointer select-none {canNext
						? 'pointer-events-auto text-light-10 dark:text-light-100'
						: 'pointer-events-none text-light-80 dark:text-light-20'}"
					on:click={() => {
						HistoryIndex.set($HistoryIndex + 1)
						Tabs.set($FinderHistory[$HistoryIndex])
						FilePreview.set(undefined)
					}}
				>
					<IconChevronRight />
				</button>
				<span class="ml-5 truncate text-2xl" title={$FinderOpenPath}>
					{$FinderOpenPath}
				</span>
			</div>
			<div
				data-simplebar-parent
				id="columns"
				class="hide-scrollbar -m-[0.125rem] mt-0 flex h-[calc(100%-5rem)] overflow-y-hidden rounded-3xl border-2 border-b-0 border-white dark:border-light-12"
			>
				{#if currentTab.label !== 'Contact' && currentTab.label !== 'About'}
					<FinderColumns files={currentTab.files} />
					{#if $FilePreview}
						<CFilePreview data={$FilePreview} />
					{/if}
				{:else if currentTab.label === 'About'}
					<div class="relative w-full overflow-hidden p-10">
						<h2
							id="about-heading"
							class="pointer-events-none relative z-10 mb-3 font-sand-medium text-4xl leading-none"
						>
							The Sand Studio
						</h2>
						<div id="about-tldr" class="pointer-events-none relative z-10 flex flex-col gap-2">
							<span class="text-lg leading-none">TL;DR:</span>
							<span class="text-lg leading-none">Small Team.</span>
							<span class="text-lg leading-none">Big Ideas.</span>
						</div>

						<StarwarText />

						<div id="services" class="mt-6">
							<h2
								class="font-sand-medium text-4xl"
								style="
                  background: radial-gradient(circle, #D549F8, #22ADFC, #00DC80, #FF9900, #F80077, #4200FF);
                  -webkit-background-clip: text;
                  color: transparent;"
							>
								Our Services
							</h2>

							<div class="mt-5 grid grid-cols-3 gap-x-20 gap-y-6">
								<div class="flex flex-col gap-2">
									<p
										class="text-lg leading-none"
										style="
                      background: radial-gradient(circle, #D549F8, #22ADFC, #00DC80, #FF9900, #F80077, #4200FF);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Visual Identity
									</p>
									<p
										class="text-lg leading-none"
										style="
                      background: radial-gradient(circle, #D549F8, #22ADFC, #00DC80, #FF9900, #F80077, #4200FF);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Motion Graphics and Animation
									</p>
									<p
										class="text-lg leading-none"
										style="
                      background: radial-gradient(circle, #D549F8, #22ADFC, #00DC80, #FF9900, #F80077, #4200FF);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Packaging
									</p>
								</div>
								<div class="flex flex-col gap-2">
									<p
										class="text-lg leading-none"
										style="
                      background: linear-gradient(to right, #D549F8 0%, #22ADFC 50%, #00DC80 100%);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Web Design and Development
									</p>
									<p
										class="text-lg leading-none"
										style="
                    background: linear-gradient(to right, #D549F8 0%, #22ADFC 50%, #00DC80 100%);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Web Maintenance and Support
									</p>
									<p
										class="text-lg leading-none"
										style="
                    background: linear-gradient(to right, #D549F8 0%, #22ADFC 50%, #00DC80 100%);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										E-commerce Solutions
									</p>
								</div>
								<div class="flex flex-col gap-2">
									<p
										class="text-lg leading-none"
										style="
                      background: linear-gradient(to left, #4200FF 0%, #F80077 100%);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Consultation and Strategy
									</p>
									<p
										class="text-lg leading-none"
										style="
                      background: linear-gradient(to left, #4200FF 0%, #F80077 100%);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										App Design and Development
									</p>
								</div>
								<div class="flex flex-col gap-2">
									<p
										class="text-lg leading-none"
										style="
                      background: linear-gradient(to right, #22ADFC 0%, #00DC80 40%, #FF9900 80%, #F80077 100%);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Architectural Design
									</p>
									<p
										class="text-lg leading-none"
										style="
                    background: linear-gradient(to right, #22ADFC 0%, #00DC80 40%, #FF9900 80%, #F80077 100%);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Interior Design
									</p>
									<p
										class="text-lg leading-none"
										style="
                    background: linear-gradient(to right, #22ADFC 0%, #00DC80 40%, #FF9900 80%, #F80077 100%);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										3D Modeling and Visualization
									</p>
								</div>
								<div class="flex flex-col gap-2">
									<p
										class="max-w-[16rem] text-lg leading-[1.3]"
										style="
                    background: radial-gradient(circle at 0% 0%, #D549F8, #22ADFC, #00DC80, #FF9900, #F80077, #4200FF);
                      -webkit-background-clip: text;
                      color: transparent;"
									>
										Others (Every idea matters to us – no concept too small, no vision too grand. If
										you’re a person with an idea. Come say hi!)
									</p>
								</div>
							</div>
						</div>
					</div>
				{:else}
					<div class="flex w-full flex-col justify-between">
						<p class="ml-12 mt-20 font-sand-medium text-4xl">What do you have in mind?</p>
						<div
							class="mb-16 ml-12 mt-auto flex flex-col items-start gap-1 text-xl text-light-80 dark:text-light-12"
						>
							<a
								class="sand-transition mb-2 leading-none hover:text-black dark:hover:text-light-100"
								href="matilto:hi@thesandstudio.com"
							>
								hi@thesandstudio.com
							</a>
							<a
								class="light-70 sand-transition text-xl leading-none hover:text-black dark:hover:text-light-100"
								href="/"
							>
								Instagram
							</a>
							<a
								class="light-70 sand-transition text-xl leading-none hover:text-black dark:hover:text-light-100"
								href="/"
							>
								Facebook
							</a>
						</div>

						<div class="mb-8 h-8 w-40 self-center text-white dark:text-light-20">
							<ContactFormTubeLabel />
						</div>
					</div>
				{/if}
			</div>
		</div>

		{#if currentTab.label === 'Contact'}
			<div class="relative w-[18.55rem] shrink-0">
				<ContactForm />
			</div>
		{/if}
	</div>
</div>
