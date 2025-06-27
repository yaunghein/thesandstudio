<script lang="ts">
	import { fade } from 'svelte/transition'
	import { twMerge as twm } from 'tailwind-merge'
	import Swiper from 'swiper'
	import { Autoplay, FreeMode } from 'swiper/modules'

	const images = [
		{
			path: '/interiors/placeholders/cyc-1.jpg',
			layoutClasses: 'w-[12.38rem] sm:w-[42rem] aspect-[1/1.33]'
		},
		{
			path: '/interiors/placeholders/cyc-2.jpg',
			layoutClasses: 'w-[14.92em] sm:w-[49rem] aspect-[1/0.75] self-end'
		},
		{
			path: '/interiors/placeholders/cyc-3.jpg',
			layoutClasses: 'w-[14.25rem] sm:w-[47rem] aspect-[1/0.75] self-start'
		},
		{
			path: '/interiors/placeholders/cyc-1.jpg',
			layoutClasses: 'w-[12.38rem] sm:w-[42rem] aspect-[1/1.33]'
		},
		{
			path: '/interiors/placeholders/cyc-2.jpg',
			layoutClasses: 'w-[14.92rem] sm:w-[49rem] aspect-[1/0.75] self-end'
		},
		{
			path: '/interiors/placeholders/cyc-3.jpg',
			layoutClasses: 'w-[14.25rem] sm:w-[47rem] aspect-[1/0.75] self-start'
		}
	]

	const details = [
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
			]
		},
		{
			images: [
				{
					path: '/interiors/placeholders/cyc-6.png',
					layoutClasses: 'w-full sm:w-[36.75rem] aspect-square place-self-end self-center'
				},
				{
					path: '/interiors/placeholders/cyc-7.png',
					layoutClasses: 'w-full sm:w-[36.75rem] aspect-[1/1.28]'
				}
			],
			title: 'Design Process',
			body: [
				'The massing strategy is primarily inspired by site context and integration of visual and physical connection to the neighbouring lake. Initially, the volume is elevated and split into two halves, creating a pathway that aligns with the lake, a direct axis that integrates the built environment with its natural setting.'
			]
		},
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
			]
		},
		{
			images: [
				{
					path: '/interiors/placeholders/cyc-6.png',
					layoutClasses: 'w-full sm:w-[36.75rem] aspect-square place-self-end self-center'
				},
				{
					path: '/interiors/placeholders/cyc-7.png',
					layoutClasses: 'w-full sm:w-[36.75rem] aspect-[1/1.28]'
				}
			],
			title: 'Design Process',
			body: [
				'The massing strategy is primarily inspired by site context and integration of visual and physical connection to the neighbouring lake. Initially, the volume is elevated and split into two halves, creating a pathway that aligns with the lake, a direct axis that integrates the built environment with its natural setting.'
			]
		}
	]

	let isOpen = $state(false)
	let isMobileOpen = $state(false)

	$effect(() => {
		if (isMobileOpen || isOpen) {
			document.getElementById('details')?.scrollTo({
				top: 0
			})
		}
	})

	const slider = (node: HTMLElement) => {
		Swiper.use([Autoplay, FreeMode])

		const swiper = new Swiper(node, {
			spaceBetween: window.innerWidth > 768 ? 88 : 20,
			speed: 5000,
			freeMode: true,
			loop: true,
			slidesPerView: 'auto',
			autoplay: {
				delay: 0,
				disableOnInteraction: false
			}
		})

		return {
			destroy() {
				swiper.destroy()
			}
		}
	}
</script>

<!-- filler for fixed navbar -->
<div class="h-[3.6rem] sm:h-[11.5rem]"></div>

<section
	class={twm(
		'interior-transition sm:h-[calc(100dvh-11.5rem)]',
		isOpen ? '-translate-y-full' : '',
		isMobileOpen ? '-translate-y-[101dvh]' : ''
	)}
>
	<div class="px-5 pb-10 pt-7 sm:hidden">
		<h1 class="font-sand-interior-regular text-[2rem] leading-none">Creative Youth Center</h1>
		<div class="mt-9 grid grid-cols-2 gap-4 px-[2px]">
			<div class="text-xs">2024</div>
			<div class="text-xs">Bachelor Thesis</div>
		</div>
	</div>
	<div use:slider class="swiper overflow-hidden px-5 sm:px-[4rem]">
		<div class="swiper-wrapper flex h-full">
			{#each images as image}
				<div class="swiper-slide flex shrink-0">
					<div class={twm('shrink-0', image.layoutClasses)}>
						<img src={image.path} alt="" class="h-full w-full object-cover" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section
	class={twm(
		'interior-transition fixed inset-0 z-20 hidden h-[24rem] w-full sm:block',
		isOpen ? 'top-[13.5rem]' : 'top-[calc(100dvh-24rem)]'
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
				Creative Youth Center
			</h1>
			<div class="grid grid-cols-3 gap-[2rem] text-[1.6rem]">
				<div class="">2024</div>
				<div class="">Bachelor Thesis</div>
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
			</div>
		</div>
	</div>
	<div
		id="details"
		class={twm(
			'hide-scrollbar interior-transition grid h-[calc(100dvh-27rem)] items-start gap-[8rem] overflow-y-scroll p-[4rem]'
		)}
	>
		{#each details as detail}
			<div class="grid w-full grid-cols-3 items-center gap-[2rem]">
				<div class="col-span-2">
					<div class="grid grid-cols-2 gap-[2rem]">
						{#each detail.images as image}
							<div
								class={twm('aspect-[1/0.72] w-[49.75rem] bg-interior-light', image.layoutClasses)}
							>
								<img src={image.path} alt="" class="h-full w-full object-cover mix-blend-darken" />
							</div>
						{/each}
					</div>
				</div>
				<div class="col-span-1 grid gap-[1.5rem]">
					<div class="font-sand-bold text-[1.6rem]">{detail.title}</div>
					<div class="grid max-w-[31rem] gap-[1.5rem] text-[1.6rem] leading-[1.5]">
						{#each detail.body as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<section
	class={twm(
		'interior-transition fixed inset-0 z-40 w-full bg-interior-light text-sm sm:hidden',
		isMobileOpen ? 'top-0 h-[100dvh]' : 'top-[calc(100dvh-2.75rem)] h-11'
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
		id="details"
		class="hide-scrollbar grid h-[calc(100dvh-2.75rem)] w-full gap-5 overflow-y-scroll py-5"
	>
		{#each details as detail}
			<div class="grid gap-5">
				<div class="px-5">
					<div class="mb-3 font-sand-bold">{detail.title}</div>
					<div class="grid gap-3">
						{#each detail.body as paragraph}
							<p>{paragraph}</p>
						{/each}
					</div>
				</div>
				{#each detail.images as image}
					<div class={twm('bg-interior-light', image.layoutClasses)}>
						<img src={image.path} alt="" class="h-full w-full object-cover mix-blend-darken" />
					</div>
				{/each}
			</div>
		{/each}
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
