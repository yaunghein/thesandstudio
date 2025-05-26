<script lang="ts">
	import { browser } from '$app/environment'
	import NewPixelBorder from '$lib/components/mobile/NewPixelBorder.svelte'
	import playLottie from '$lib/utils/playLottie'
</script>

<section class="p-4">
	<h1 class="font-sand-mobile-bold text-7xl leading-[0.75]">For All Thingskind</h1>
	<p class="mt-4 text-[1.45rem]">
		We embrace all forms, materials, and ideas, shaping them into products that reflect a confluence
		of diverse inspirations and tangible craftsmanship.
	</p>
</section>

<section class="p-4 pt-2">
	<h2 class="w-[10rem] font-sand-mobile-bold text-[1.45rem]">
		Ambivalent Tote Bag and Trinket bowl
	</h2>
	<div class="mt-1 text-[1.45rem]">2022</div>
	<div class="relative mt-3 aspect-square w-full border-[2px] border-light-4 dark:border-light-25">
		<NewPixelBorder />
		<video autoplay muted loop playsinline class="absolute inset-0 h-full w-full object-cover">
			<source
				src="https://res.cloudinary.com/dlhbpswom/video/upload/v1715944268/general/moving-sunset-sky_csvrih.mp4"
				type="video/mp4"
			/>
			Your browser does not support HTML5 video.
		</video>
		{#if browser}
			<div class="absolute left-1/2 top-1/2 w-[9.5rem] -translate-x-1/2 -translate-y-1/2">
				<div use:playLottie={'/fatk-bag.json'}></div>
			</div>
		{/if}
	</div>
	<a
		href="https://thesandstudio.webflow.io/for-all-thingkind"
		target="_blank"
		class="relative mt-4 inline-block border-[2px] border-light-4 px-4 py-2 font-sand-mobile-bold text-[1.45rem] leading-[0.65] dark:border-light-25 dark:bg-light-4"
	>
		Visit
		<NewPixelBorder />
	</a>
</section>

<section class="relative aspect-[4/3] w-full">
	<img
		src="/mobile/gifs/sand-dune-loop.gif"
		alt="Sand Dune"
		class="h-full w-full dark:opacity-25 dark:invert"
	/>
	<div class="absolute left-4 top-4">
		<div
			class="bg-light-100 p-1 font-sand-mobile-bold text-base text-light-4 dark:bg-light-4 dark:text-light-100"
		>
			<span class="block max-w-[7rem] translate-y-[0.07rem] text-3xl leading-[0.75]">
				What’s on your mind?
			</span>
		</div>
		<a
			href="/mobile/contact"
			class="relative mt-8 inline-block border-[2px] border-light-4 bg-light-100 px-4 py-2 font-sand-mobile-bold text-[1.45rem] leading-[0.65] dark:border-light-25 dark:bg-light-4"
		>
			Let's Go
			<NewPixelBorder />
		</a>
	</div>
</section>
