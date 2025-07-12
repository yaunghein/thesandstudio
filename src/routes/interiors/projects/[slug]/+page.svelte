<script lang="ts">
	import { fade } from 'svelte/transition'
	import { twMerge as twm } from 'tailwind-merge'
	import Swiper from 'swiper'
	import { Autoplay, FreeMode } from 'swiper/modules'
	import horizontalScroll from '$lib/utils/horizontalScroll.js'
	import MetaData from '$lib/components/MetaData.svelte'
	import { getInteriorsStore } from '$lib/interiors/store.svelte'

	let { data } = $props()

	let isOpen = $state(false)
	let isMobileOpen = $state(false)
	let mobileContent = $state<HTMLElement | null>(null)
	let mobileContentBottom = $derived(
		mobileContent ? mobileContent.getBoundingClientRect().bottom / 16 : 0
	)

	// Get the interiors store for logo spin degree
	const interiorsStore = getInteriorsStore()

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
			},
			parallax: true
		})

		return {
			destroy() {
				swiper.destroy()
			}
		}
	}

	// Scroll listeners for logo rotation
	const handleDesktopScroll = () => {
		const desktopDetails = document.getElementById('desktop-details')
		if (desktopDetails) {
			const scrollY = desktopDetails.scrollTop
			interiorsStore.logoSpinDegree = scrollY * 0.075
		}
	}

	const handleMobileScroll = () => {
		const mobileDetails = document.getElementById('mobile-details')
		if (mobileDetails) {
			const scrollY = mobileDetails.scrollTop
			interiorsStore.logoSpinDegree = scrollY * 0.075
		}
	}

	// Add scroll listeners when desktop details section is open
	$effect(() => {
		const desktopDetails = document.getElementById('desktop-details')
		if (isOpen && desktopDetails) {
			desktopDetails.addEventListener('scroll', handleDesktopScroll, { passive: true })
			return () => {
				desktopDetails.removeEventListener('scroll', handleDesktopScroll)
			}
		}
	})

	// Add scroll listeners when mobile details section is open
	$effect(() => {
		const mobileDetails = document.getElementById('mobile-details')
		if (isMobileOpen && mobileDetails) {
			mobileDetails.addEventListener('scroll', handleMobileScroll, { passive: true })
			return () => {
				mobileDetails.removeEventListener('scroll', handleMobileScroll)
			}
		}
	})
</script>

<MetaData
	pageTitle="{data.project.name} - Sand Interiors"
	title="{data.project.name} - {data.project.type} | Sand Interiors"
	description="{data.project.name} is a {data.project.type.toLowerCase()} project located in {data
		.project.location}. Explore this interior design and architecture project by Sand Interiors."
	ogImage="/og-image-interiors.jpg"
	ogType="article"
	canonicalUrl="https://thesandstudio.com/interiors/projects/{data.project.slug}/"
	structuredData={{
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: data.project.name,
		description: `${data.project.name} is a ${data.project.type.toLowerCase()} project located in ${data.project.location}.`,
		image: `https://thesandstudio.com${data.project.coverImage.path}`,
		dateCreated: data.project.year.toString(),
		creator: {
			'@type': 'Organization',
			name: 'Sand Interiors'
		},
		location: {
			'@type': 'Place',
			name: data.project.location
		},
		genre: data.project.type,
		url: `https://thesandstudio.com/interiors/projects/${data.project.slug}/`
	}}
/>

<!-- filler for fixed navbar -->
<div class="h-[3.6rem] sm:h-[11.5rem]"></div>

<section
	class={twm(
		'interior-transition flex h-[calc(100dvh-3.6rem)] flex-col  sm:h-[calc(100dvh-11.5rem)]',
		isOpen ? '-translate-y-full' : ''
		// isMobileOpen ? '-translate-y-[101dvh]' : ''
	)}
>
	<div bind:this={mobileContent} class="px-5 pb-8 pt-7 sm:hidden">
		<a href="/interiors/projects" class="mb-8 flex items-center gap-[0.25rem] text-xs">
			<span>Projects</span>
			{@render backIcon()}
		</a>
		<h1 class="font-sand-interior-regular text-[2rem] leading-none">{data.project.name}</h1>
		<div class="mt-9 flex justify-between px-[2px]">
			<div class="w-[15%] text-xs">{data.project.year}</div>
			<div class="w-[25%] text-xs">{data.project.type}</div>
			<a href="/interiors/projects" class="w-[30%] text-xs">{data.project.location}</a>
		</div>
	</div>
	<div
		use:horizontalScroll={{ extra: window.innerHeight }}
		class="hide-scrollbar h-[calc(100dvh-15.5rem)] !overflow-x-hidden"
	>
		<div class="flex items-start">
			<div class="sticky top-0 flex gap-5 px-5 sm:gap-[12rem] sm:px-[4rem]">
				{#each data.project.showcaseImages as image}
					<div class={twm('shrink-0', image.layoutClasses)}>
						<img src={image.path} alt={data.project.name} class="h-full w-full object-cover" />
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
		!data.project.details?.length && 'hidden'
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
				{data.project.name}
			</h1>
			<div class="grid grid-cols-3 gap-[2rem] text-[1.6rem]">
				<div class="">{data.project.year}</div>
				<div class="">{data.project.type}</div>
				<div class="flex items-start justify-between">
					{#if data.project.details}
						<div class="relative h-6">
							{#if isOpen}
								<button
									onclick={() => (isOpen = !isOpen)}
									class="absolute flex items-center gap-[0.5rem]"
									transition:fade={{ duration: 1000 }}
								>
									<div class="whitespace-nowrap">Go Back</div>
									{@render backIcon()}
								</button>
							{:else}
								<button
									onclick={() => (isOpen = !isOpen)}
									class="absolute flex items-center gap-[0.5rem]"
									transition:fade={{ duration: 1000 }}
								>
									<div class="whitespace-nowrap">About the Project</div>
									{@render learnMoreIcon()}
								</button>
							{/if}
						</div>
					{/if}
					<a href="/interiors/projects" class="flex items-center gap-[0.5rem]">
						<span>Back to Projects</span>
						{@render backIcon()}
					</a>
				</div>
			</div>
		</div>
	</div>
	<div
		id="desktop-details"
		class={twm(
			'hide-scrollbar interior-transition grid h-[calc(100dvh-27rem)] items-start gap-[12rem] overflow-y-scroll p-[4rem]'
		)}
	>
		{#if data.project.details}
			{#each data.project.details as detail}
				<div class="grid w-full grid-cols-3 items-center gap-[2rem]">
					<div class="col-span-2">
						<div class="grid grid-cols-4 gap-x-[2rem] gap-y-[12rem] sm:pr-[13rem]">
							{#each detail.images as image, index}
								<div
									class={twm('aspect-[1/0.72] w-[49.75rem] bg-interior-light', image.layoutClasses)}
								>
									<img
										src={image.path}
										alt=""
										class="h-full w-full object-cover mix-blend-darken"
									/>
								</div>
							{/each}
						</div>
					</div>
					<div class={twm('top-0 col-span-1 grid gap-[1.5rem]', detail.contentClasses)}>
						{#if detail.title && detail.body}
							<div class="font-sand-bold text-[1.6rem]">{detail.title}</div>
							<div class="grid max-w-[31rem] gap-[1.5rem] text-[1.6rem] leading-[1.5]">
								{#each detail.body as paragraph}
									<p>{@html paragraph}</p>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>

<section
	class={twm(
		'interior-transition fixed inset-0 z-40 w-full bg-interior-light text-sm sm:hidden',
		!data.project.details?.length && 'hidden'
	)}
	style={`top: ${isMobileOpen ? `${mobileContentBottom}rem` : 'calc(100dvh - 2.75rem)'}; 
		height: ${isMobileOpen ? `calc(100dvh - ${mobileContentBottom}rem)` : '2.75rem'}`}
>
	<button
		onclick={() => (isMobileOpen = !isMobileOpen)}
		class={twm(
			'interior-transition flex h-11 w-full shrink-0 items-center justify-between border-y border-t-interior-brand px-5',
			isMobileOpen ? 'border-b-interior-brand ' : 'border-b-interior-light '
		)}
	>
		<div>About the Project</div>
		{@render mobileProjectToggle()}
	</button>
	<div
		id="mobile-details"
		class="hide-scrollbar grid w-full gap-5 overflow-y-scroll py-5"
		style={`height: calc(100dvh - ${mobileContentBottom + 2.75}rem)`}
	>
		{#if data.project.details}
			{#each data.project.details as detail, detailIndex}
				<div class="flex flex-col gap-5">
					<div class="px-5">
						{#if detail.title && detail.body}
							<div class="mb-3 font-sand-bold">{detail.title}</div>
							<div class="grid gap-3">
								{#each detail.body as paragraph}
									<p class="w-full overflow-hidden">{@html paragraph}</p>
								{/each}
							</div>
						{/if}
					</div>
					{#each detail.images as image, imageIndex}
						<div
							class={twm(
								'bg-interior-light',
								image.layoutClasses,
								imageIndex === detail.images.length - 1 &&
									detailIndex === data.project.details.length - 1
									? '-mb-5 sm:mb-0'
									: ''
							)}
						>
							<img src={image.path} alt="" class="h-full w-full object-cover mix-blend-darken" />
						</div>
					{/each}
				</div>
			{/each}
		{/if}
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
	<div class="aspect-square h-[0.9rem] sm:h-[1.6rem]">
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
