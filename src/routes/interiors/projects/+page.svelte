<script lang="ts">
	import { twMerge as twm } from 'tailwind-merge'
	import horizontalScroll from '$lib/utils/horizontalScroll.js'
	import Project from '$lib/interiors/components/Project.svelte'
	import projects from '$lib/interiors/fixtures/projects'
	import MetaData from '$lib/components/MetaData.svelte'

	let { data } = $props()

	type TProject = {
		name: string
		slug: string
		year: number
		type: string
		coverImage: {
			path: string
			layoutClasses: string
			layoutClassesMobile: string
		}
		showcaseImages: {
			path: string
			layoutClasses: string
		}[]
		details?: {
			images: {
				path: string
				layoutClasses: string
			}[]
			title: string
			body: string[]
			contentClasses: string
		}[]
		desktop?: {
			layoutClasses: string
		}
		preview?: {
			desktop: string
		}
		location?: string
	}

	let projectsInView = $state<TProject[]>([])
	let projectsInViewToRender = $derived(
		[...projectsInView]
			.sort((a, b) => {
				const indexA = projects.findIndex((p) => p.slug === a.slug)
				const indexB = projects.findIndex((p) => p.slug === b.slug)
				return indexA - indexB
			})
			.slice(0, data.isMobile ? 4 : 8)
	)

	const handleProjectVisibilityChange = (project: TProject, isVisible: boolean) => {
		if (isVisible) {
			if (!projectsInView.some((p) => p.slug === project.slug)) {
				projectsInView = [...projectsInView, project]
			}
		} else {
			projectsInView = projectsInView.filter((p) => p.slug !== project.slug)
		}
	}

	let scrollContainer = $state<HTMLElement | null>(null)
	let paddingTop = $derived.by(() => {
		if (scrollContainer) {
			const containerHeight = scrollContainer.getBoundingClientRect().height / 16
			const windowHeight = window.innerHeight / 16 - 14
			return (windowHeight - containerHeight) / 2
		}
		return 0
	})
</script>

<MetaData
	pageTitle="Projects - Sand Interiors"
	title="Projects - Sand Interiors"
	description="Explore our portfolio of interior design and architecture projects including residential, commercial, and exhibition spaces across Thailand and Myanmar."
	ogImage="/og-image-interiors.jpg"
	canonicalUrl="https://thesandstudio.com/interiors/projects/"
/>

<!-- filler for fixed navbar -->
<div class="h-[3.6rem] sm:h-[11.5rem]"></div>

<div class="flex h-[calc(100dvh-3.6rem)] flex-col justify-between sm:hidden">
	<section
		use:horizontalScroll={{ extra: paddingTop * 33 }}
		class="hide-scrollbar relative h-[calc(100dvh-3.6rem)] !overflow-x-hidden"
		style="padding-top: {paddingTop}rem; overscroll-behavior: none;"
	>
		<div class="w-full px-5">
			<div
				bind:this={scrollContainer}
				class="sticky top-0 grid min-w-max auto-cols-max grid-flow-col grid-rows-2 gap-4"
			>
				{#each projects as project, index}
					<Project {project} {index} onProjectVisibilityChange={handleProjectVisibilityChange} />
				{/each}
				<div class="w-[12rem]"></div>
			</div>
		</div>
	</section>
	<section
		class="pointer-events-none fixed inset-0 top-auto grid h-[8.68rem] w-full place-content-start gap-1 border-t border-interior-brand bg-interior-light p-5"
	>
		{#each projectsInViewToRender as project}
			{@const originalIndex = projects.findIndex((p) => p.slug === project.slug)}
			<a href="/interiors/projects/{project.slug}" class="flex items-start gap-3">
				<h3 class="w-10 shrink-0">
					{#if originalIndex + 1 < 10}
						0{originalIndex + 1}
					{:else}
						{originalIndex + 1}
					{/if}
				</h3>
				<div class="col-span-3">
					<h3 class="whitespace-nowrap">{project.name}</h3>
				</div>
			</a>
		{/each}
	</section>
</div>

<div class="hidden sm:block">
	<section
		class="relative grid min-h-[calc(100svh-22rem)] grid-cols-6 content-start gap-[2rem] p-[4rem] pb-[22rem] pt-[2rem]"
	>
		{#each projects as project, i}
			<a
				href="/interiors/projects/{project.slug}"
				class={twm(
					'relative h-full min-h-[25rem] w-full overflow-hidden',
					project.coverImage.layoutClasses
				)}
			>
				<div class="absolute inset-0 h-full w-full">
					<img src={project.coverImage.path} alt="" class="h-full w-full object-cover" />
				</div>
				<div class="absolute bottom-0 left-0">
					{#if i + 1 < 10}
						<span class="text-interior-brand">0{i + 1}</span>
					{:else}
						<span class="text-interior-brand">{i + 1}</span>
					{/if}
				</div>
			</a>
		{/each}
	</section>

	<section
		class="fixed inset-0 top-auto grid w-full grid-cols-2 gap-x-[2rem] gap-y-[1.5rem] border-t border-interior-brand bg-interior-light p-[4rem]"
	>
		{#each projects as project, i}
			<a href="/interiors/projects/{project.slug}" class="grid grid-cols-6 gap-x-[2rem] gap-y-0">
				<h3 class="">
					{#if i + 1 < 10}
						0{i + 1}
					{:else}
						{i + 1}
					{/if}
				</h3>
				<div class="col-span-3">
					<h3 class="">{project.name}</h3>
				</div>
				<div class="col-span-2 leading-[1.2]">
					<p class="">{project.location || ''}</p>
				</div>
			</a>
		{/each}
	</section>
</div>
