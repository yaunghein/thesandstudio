<script lang="ts">
	import { onMount } from 'svelte'
	import { twMerge as twm } from 'tailwind-merge'
	import { slugify } from '$lib/utils/slugify'
	import Project from '$lib/interiors/components/Project.svelte'

	let { data } = $props()

	type TProject = {
		name: string
		location: string
		slug: string
		preview: {
			desktop: string
			mobile: string
		}
		desktop: {
			layoutClasses: string
		}
		mobile: {
			layoutClasses: string
		}
	}

	const projects = [
		{
			name: 'Creative Youth Centre',
			location: 'Yangon, Myanmar',
			slug: slugify('Creative Youth Centre'),
			preview: {
				desktop: '/interiors/placeholders/project-1.png',
				mobile: '/interiors/placeholders/project-1.png'
			},
			desktop: {
				layoutClasses: 'col-span-3'
			},
			mobile: {
				layoutClasses: 'h-[9rem] col-span-3'
			}
		},
		{
			name: 'The Ostel Hostel',
			location: 'Bangkok, Thailand',
			slug: slugify('The Ostel Hostel'),
			preview: {
				desktop: '/interiors/placeholders/project-2.png',
				mobile: '/interiors/placeholders/project-5.png'
			},
			desktop: {
				layoutClasses: 'row-span-2'
			},
			mobile: {
				layoutClasses: 'w-[9rem] aspect-square'
			}
		},
		{
			name: 'Unseen Battle PTSD Awareness Exhibition',
			location: 'Yangon, Myanmar',
			slug: slugify('Unseen Battle PTSD Awareness Exhibition'),
			preview: {
				desktop: '/interiors/placeholders/project-3.png',
				mobile: '/interiors/placeholders/project-3.png'
			},
			desktop: {
				layoutClasses: 'col-span-2'
			},
			mobile: {
				layoutClasses: 'w-[9rem] aspect-square'
			}
		},
		{
			name: 'Community Market',
			location: 'Yangon, Myanmar',
			slug: slugify('Community Market'),
			preview: {
				desktop: '/interiors/placeholders/project-4.png',
				mobile: '/interiors/placeholders/project-4.png'
			},
			desktop: {
				layoutClasses: ''
			},
			mobile: {
				layoutClasses: 'w-[9rem] aspect-square'
			}
		},
		{
			name: 'Yuki Mugi Bakery & Cafe',
			location: 'Yangon, Myanmar',
			slug: slugify('Yuki Mugi Bakery & Cafe'),
			preview: {
				desktop: '/interiors/placeholders/project-5.png',
				mobile: '/interiors/placeholders/project-2.png'
			},
			desktop: {
				layoutClasses: ''
			},
			mobile: {
				layoutClasses: 'w-[9rem] row-span-2'
			}
		},
		{
			name: 'Factory Townhouse',
			location: 'Bangkok, Thailand',
			slug: slugify('Factory Townhouse'),
			preview: {
				desktop: '/interiors/placeholders/project-6.png',
				mobile: '/interiors/placeholders/project-6.png'
			},
			desktop: {
				layoutClasses: ''
			},
			mobile: {
				layoutClasses: 'w-[9rem]'
			}
		},
		{
			name: 'Community Market II',
			location: 'Yangon, Myanmar',
			slug: slugify('Community Market II'),
			preview: {
				desktop: '/interiors/placeholders/project-7.png',
				mobile: '/interiors/placeholders/project-7.png'
			},
			desktop: {
				layoutClasses: ''
			},
			mobile: {
				layoutClasses: 'w-[9rem]'
			}
		}
	]

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

	onMount(() => {
		const handleResize = () => {
			console.log('resize')
			projectsInViewToRender = projects.slice(0, window.innerWidth < 768 ? 4 : 8)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	const getLayoutClasses = (index: number) => {
		const classes = ['col-span-3', 'col-span-2', 'row-span-2']
		return classes[Math.floor(Math.random() * classes.length)]
	}
</script>

<!-- filler for fixed navbar -->
<div class="h-[3.6rem] sm:h-[11.5rem]"></div>

<div class="flex h-[calc(100dvh-3.6rem)] flex-col justify-between sm:hidden">
	<div class="hide-scrollbar my-auto w-full overflow-x-auto px-5">
		<div class="grid min-w-max auto-cols-max grid-flow-col grid-rows-2 gap-4">
			{#each projects as project, index}
				<Project {project} {index} onProjectVisibilityChange={handleProjectVisibilityChange} />
			{/each}
			<!-- <div class="grid h-40 w-40 place-items-center bg-white text-interior-brand">1</div>
			<div class="col-span-2 grid h-40 place-items-center bg-white text-interior-brand">2</div>
			<div class="grid h-40 w-40 place-items-center bg-white text-interior-brand">3</div>
			<div class="row-span-2 grid w-40 place-items-center bg-white text-interior-brand">4</div>
			<div class="grid h-40 w-40 place-items-center bg-white text-interior-brand">5</div>
			<div class="grid h-40 w-40 place-items-center bg-white text-interior-brand">6</div> -->
		</div>
	</div>
	<section
		class="sticky inset-0 top-auto grid w-full gap-1 border-t border-interior-brand bg-interior-light p-5"
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
					<h3 class="">{project.name}</h3>
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
					project.desktop.layoutClasses
				)}
			>
				<div class="absolute inset-0 h-full w-full">
					<img
						src={project.preview.desktop}
						alt=""
						class="h-full w-full object-cover mix-blend-multiply"
					/>
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
				<div class="col-span-2">
					<p class="">{project.location}</p>
				</div>
			</a>
		{/each}
	</section>
</div>
