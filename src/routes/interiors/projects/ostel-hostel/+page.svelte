<script lang="ts">
	import { fade } from 'svelte/transition'
	import { twMerge as twm } from 'tailwind-merge'
	import { slugify } from '$lib/utils/slugify'
	import horizontalScroll from '$lib/utils/horizontalScroll'

	const project = {
		name: 'The Ostel Hostel',
		slug: slugify('The Ostel Hostel'),
		year: 2024,
		type: 'Bachelor Thesis',
		coverImage: {
			path: '/interiors/projects/list-page/oh.webp',
			layoutClasses: 'row-span-2',
			layoutClassesMobile: 'w-[9rem] row-span-2'
		},
		location: 'Bangkok, Thailand',
		showcaseImages: [
			{
				path: '/interiors/projects/oh/showcase/OH-1.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/1.4]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-2.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-3.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-4.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-5.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-center aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-6.webp',
				layoutClasses: 'h-[15.33vh] sm:h-[20vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-7.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/1.27]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-8.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.63]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-9.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/2.06]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-10.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-center aspect-[1/0.63]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-11.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] self-center aspect-[1/0.63]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-12.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/1.15]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-13.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] self-center aspect-[1/0.63]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-14.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-15.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-16.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-17.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-center aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-18.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] self-end aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-19.webp',
				layoutClasses: 'h-[30.67vh] sm:h-[40vh] aspect-[1/0.64]'
			},
			{
				path: '/interiors/projects/oh/showcase/OH-20.webp',
				layoutClasses: 'h-[46vh] sm:h-[60vh] aspect-[1/0.64]'
			}
		],
		details: [
			{
				images: [
					{
						path: '/interiors/placeholders/cyc-4.jpg',
						layoutClasses: 'w-full sm:w-[49.75rem] aspect-[1/0.72]'
					},
					{
						path: '/interiors/placeholders/cyc-5.png',
						layoutClasses: 'w-full sm:w-[36.75rem] aspect-[1/0.97]'
					}
				],
				title: 'Abstract',
				body: [
					'In the city of Yangon, Myanmar, the youth represent a dynamic part of the population filled with potential and aspirations. The geopolitical and social setting of Yangon, along with the challenges and opportunities that arise amid the pandemic, make an urgent need for spaces that serve as anchors for the youth.',
					'The absense of cohesive, safe environments that support the diverse needs and aspirations, especially in creativity and communal interactions, highlights a critical gap. The initiative aims for a design approach to elevate youth creativity through interior design, by creating a safe and supportive spaceto connect, learn, and thrive within a vibrant community.'
				],
				contentClasses: 'sticky top-0'
			}
		]
	}

	let isOpen = $state(false)
	let isMobileOpen = $state(false)
	let isDay = $state(true)

	$effect(() => {
		if (isMobileOpen || isOpen) {
			document.getElementById('desktop-details')?.scrollTo({
				top: 0
			})
			document.getElementById('mobile-details')?.scrollTo({
				top: 0
			})
		}
	})
</script>

<!-- filler for fixed navbar -->
<div class="h-[3.6rem] sm:h-[11.5rem]"></div>

<section
	class={twm(
		'interior-transition flex flex-col sm:h-[calc(100dvh-11.5rem)]',
		isOpen ? '-translate-y-full' : '',
		isMobileOpen ? '-translate-y-[101dvh]' : ''
	)}
>
	<div class="px-5 pb-8 pt-7 sm:hidden">
		<h1 class="font-sand-interior-regular text-[2rem] leading-none">{project.name}</h1>
		<div class="mt-9 grid grid-cols-2 gap-4 px-[2px]">
			<div class="text-xs">{project.year}</div>
			<div class="text-xs">{project.type}</div>
		</div>
	</div>
	<div use:horizontalScroll class="hide-scrollbar h-[calc(100dvh-15.5rem)] !overflow-x-hidden">
		<div class="flex items-start">
			<div class="sticky top-0 flex gap-5 px-5 sm:gap-[12rem] sm:px-[4rem]">
				{#each [...project.showcaseImages, ...project.showcaseImages, ...project.showcaseImages, ...project.showcaseImages, ...project.showcaseImages] as image}
					<div class={twm('shrink-0', image.layoutClasses)}>
						<img src={image.path} alt={project.name} class="h-full w-full object-cover" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section
	class={twm(
		'interior-transition fixed inset-0 z-20 hidden h-[24rem] w-full sm:block',
		isOpen ? 'top-[13.5rem]' : 'top-[calc(100dvh-24rem)]',
		!project.details?.length && 'hidden'
	)}
>
	<div
		class={twm(
			'interior-transition flex border-b bg-interior-light px-[4rem]',
			isOpen
				? 'h-[13.5rem] border-interior-brand py-[2.5rem]'
				: 'h-[24rem] border-interior-light py-[4rem]'
		)}
	>
		<div class="flex w-full flex-col justify-between">
			<h1
				class={twm(
					'interior-transition font-sand-interior-regular',
					isOpen ? 'text-[2.9rem] leading-none' : 'text-[6.5rem] leading-none'
				)}
			>
				{project.name}
			</h1>
			<div class="grid grid-cols-3 gap-[2rem] text-[1.6rem]">
				<div class="">{project.year}</div>
				<div class="">{project.type}</div>
				{#if project.details}
					<div class="relative">
						{#if isOpen}
							<button
								onclick={() => (isOpen = !isOpen)}
								class="absolute flex items-center gap-[0.5rem]"
								transition:fade={{ duration: 1000 }}
							>
								<div>Go Back</div>
								{@render backIcon()}
							</button>
						{:else}
							<button
								onclick={() => (isOpen = !isOpen)}
								class="absolute flex items-center gap-[0.5rem]"
								transition:fade={{ duration: 1000 }}
							>
								<div>Learn More About the Project</div>
								{@render learnMoreIcon()}
							</button>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	</div>
	<div
		id="desktop-details"
		class={twm(
			'hide-scrollbar interior-transition grid h-[calc(100dvh-27rem)] items-start gap-[12rem] overflow-y-scroll p-[4rem]'
		)}
	>
		<div class="grid w-full grid-cols-3 items-center gap-[2rem]">
			<div class="col-span-2">
				<div class="grid grid-cols-4 gap-x-[2rem] gap-y-[12rem] sm:pr-[13rem]">
					<div class={twm('relative col-span-4 aspect-[1/1.4] bg-interior-light')}>
						<img
							src="/interiors/projects/oh/detail/Facade-light.webp"
							alt="Ostel Hostel"
							class="h-full w-full object-cover"
						/>
						<img
							src="/interiors/projects/oh/detail/Facade-Dark.webp"
							alt="Ostel Hostel"
							class={twm(
								'interior-transition absolute inset-0 h-full w-full object-cover',
								isDay ? 'opacity-0' : 'opacity-100'
							)}
						/>
						<div class="absolute right-10 top-10 flex flex-col items-center gap-2">
							<button
								onclick={() => (isDay = !isDay)}
								class="relative aspect-square w-24 rounded-full bg-interior-light"
							>
								<span
									class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-bold uppercase"
								>
									{isDay ? 'Day' : 'Night'}
								</span>
							</button>
							<p
								class={twm(
									'interior-transition text-base',
									isDay ? 'text-interior-brand' : 'text-interior-light'
								)}
							>
								Change Time
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class={twm('sticky top-0 col-span-1 grid gap-[1.5rem] self-start')}>
				<div class="font-sand-bold text-[1.6rem]">Abstract</div>
				<div class="grid max-w-[31rem] gap-[1.5rem] text-[1.6rem] leading-[1.5]">
					<p>
						In the city of Yangon, Myanmar, the youth represent a dynamic part of the population
						filled with potential and aspirations. The geopolitical and social setting of Yangon,
						along with the challenges and opportunities that arise amid the pandemic, make an urgent
						need for spaces that serve as anchors for the youth.
					</p>
					<p>
						The absense of cohesive, safe environments that support the diverse needs and
						aspirations, especially in creativity and communal interactions, highlights a critical
						gap. The initiative aims for a design approach to elevate youth creativity through
						interior design, by creating a safe and supportive spaceto connect, learn, and thrive
						within a vibrant community.
					</p>
				</div>
			</div>
		</div>

		<div class="grid w-full grid-cols-3 items-center gap-[2rem]">
			<div class="col-span-2">
				<div class="grid grid-cols-4 gap-x-[2rem] gap-y-[12rem] sm:pr-[13rem]">
					<div class={twm('relative col-span-4 aspect-[1/0.71] bg-interior-brand')}>
						<video
							autoplay
							loop
							muted
							src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
							class="absolute inset-0 h-full w-full object-cover"
						>
							<source
								type="video/mp4"
								src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
							/>
							<track kind="captions" />
						</video>
					</div>
				</div>
			</div>
			<div class={twm('sticky top-0 col-span-1 grid gap-[1.5rem] self-center')}>
				<div class="font-sand-bold text-[1.6rem]">Design Process</div>
				<div class="grid max-w-[31rem] gap-[1.5rem] text-[1.6rem] leading-[1.5]">
					<p>
						The massing strategy is primarily inspired by site context and integration of visual and
						physical connection to the neighbouring lake. Initially, the volume is elevated and
						split into two halves, creating a pathway that aligns with the lake, a direct axis that
						integrates the built environment with its natural setting.
					</p>
				</div>
			</div>
		</div>

		<div class="my-40 h-[1px] w-full scale-x-[1.052] bg-interior-brand"></div>
	</div>
</section>

<section
	class={twm(
		'interior-transition fixed inset-0 z-40 w-full bg-interior-light text-sm sm:hidden',
		isMobileOpen ? 'top-0 h-[100dvh]' : 'top-[calc(100dvh-2.75rem)] h-11',
		!project.details?.length && 'hidden'
	)}
>
	<button
		onclick={() => (isMobileOpen = !isMobileOpen)}
		class={twm(
			'interior-transition flex h-11 w-full shrink-0 items-center justify-between border-y px-5',
			isMobileOpen
				? 'border-b-interior-brand border-t-interior-light'
				: 'border-b-interior-light border-t-interior-brand'
		)}
	>
		<div>About the Project</div>
		{@render mobileProjectToggle()}
	</button>
	<div
		id="mobile-details"
		class="hide-scrollbar grid h-[calc(100dvh-2.75rem)] w-full gap-5 overflow-y-scroll py-5"
	>
		<div class="flex flex-col gap-5">
			<div class="order-2">
				<div class={twm('relative aspect-[1/1.4] bg-interior-light')}>
					<img
						src="/interiors/projects/oh/detail/Facade-light.webp"
						alt="Ostel Hostel"
						class="h-full w-full object-cover"
					/>
					<img
						src="/interiors/projects/oh/detail/Facade-Dark.webp"
						alt="Ostel Hostel"
						class={twm(
							'interior-transition absolute inset-0 h-full w-full object-cover',
							isDay ? 'opacity-0' : 'opacity-100'
						)}
					/>
					<div class="absolute right-5 top-5 flex flex-col items-center">
						<button
							onclick={() => (isDay = !isDay)}
							class="relative aspect-square w-10 rounded-full bg-interior-light"
						>
							<span
								class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-bold text-[10px] uppercase"
							>
								{isDay ? 'Day' : 'Night'}
							</span>
						</button>
						<p
							class={twm(
								'interior-transition text-[8px]',
								isDay ? 'text-interior-brand' : 'text-interior-light'
							)}
						>
							Change Time
						</p>
					</div>
				</div>
			</div>
			<div class={twm('grid gap-5 self-start px-5')}>
				<div class="font-sand-bold text-sm">Abstract</div>
				<div class="grid gap-5 text-sm leading-[1.5]">
					<p>
						In the city of Yangon, Myanmar, the youth represent a dynamic part of the population
						filled with potential and aspirations. The geopolitical and social setting of Yangon,
						along with the challenges and opportunities that arise amid the pandemic, make an urgent
						need for spaces that serve as anchors for the youth.
					</p>
					<p>
						The absense of cohesive, safe environments that support the diverse needs and
						aspirations, especially in creativity and communal interactions, highlights a critical
						gap. The initiative aims for a design approach to elevate youth creativity through
						interior design, by creating a safe and supportive spaceto connect, learn, and thrive
						within a vibrant community.
					</p>
				</div>
			</div>
		</div>

		<div class="-mb-5 flex flex-col gap-5">
			<div class="order-2">
				<div class="grid grid-cols-4 gap-x-[2rem] gap-y-[12rem] sm:pr-[13rem]">
					<div class={twm('relative col-span-4 aspect-[1/0.71] bg-interior-brand')}>
						<video
							autoplay
							loop
							muted
							src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
							class="absolute inset-0 h-full w-full object-cover"
						>
							<source
								type="video/mp4"
								src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
							/>
							<track kind="captions" />
						</video>
					</div>
				</div>
			</div>
			<div class={twm('flex flex-col gap-5 px-5')}>
				<div class="font-sand-bold text-sm">Design Process</div>
				<div class="grid max-w-[31rem] gap-5 text-sm leading-[1.5]">
					<p>
						The massing strategy is primarily inspired by site context and integration of visual and
						physical connection to the neighbouring lake. Initially, the volume is elevated and
						split into two halves, creating a pathway that aligns with the lake, a direct axis that
						integrates the built environment with its natural setting.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

{#snippet learnMoreIcon()}
	<div class="aspect-square h-[1.6rem]">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_705_783"
				style="mask-type:alpha"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="16"
				height="16"
			>
				<rect width="16" height="16" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_705_783)">
				<path
					d="M7.49967 13.6668V8.50016H2.33301V7.50016H7.49967V2.3335H8.49967V7.50016H13.6663V8.50016H8.49967V13.6668H7.49967Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	</div>
{/snippet}

{#snippet backIcon()}
	<div class="aspect-square h-[1.6rem]">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_700_500"
				style="mask-type:alpha"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="16"
				height="16"
			>
				<rect width="16" height="16" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_700_500)">
				<path
					d="M12.6668 12.3331V9.9998C12.6668 9.40147 12.4553 8.8908 12.0322 8.4678C11.6092 8.04469 11.0985 7.83313 10.5002 7.83313H4.24883L6.8155 10.3998L6.10266 11.1023L2.3335 7.33313L6.10266 3.56396L6.8155 4.26647L4.24883 6.83313H10.5002C11.3754 6.83313 12.1219 7.14213 12.7398 7.76013C13.3578 8.37802 13.6668 9.12458 13.6668 9.9998V12.3331H12.6668Z"
					fill="currentColor"
				/>
			</g>
		</svg>
	</div>
{/snippet}

{#snippet mobileProjectToggle()}
	<div class={twm('interior-transition aspect-square w-5', isMobileOpen ? 'rotate-45' : '')}>
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<mask
				id="mask0_700_642"
				style="mask-type:alpha"
				maskUnits="userSpaceOnUse"
				x="0"
				y="0"
				width="20"
				height="20"
			>
				<rect width="20" height="20" fill="#D9D9D9" />
			</mask>
			<g mask="url(#mask0_700_642)">
				<path
					d="M9.37533 17.0832V10.6248H2.91699V9.37484H9.37533V2.9165H10.6253V9.37484H17.0837V10.6248H10.6253V17.0832H9.37533Z"
					fill="#864235"
				/>
			</g>
		</svg>
	</div>
{/snippet}
