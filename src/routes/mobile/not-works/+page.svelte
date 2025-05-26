<script lang="ts">
	import { browser } from '$app/environment'
	import NewPixelBorder from '$lib/components/mobile/NewPixelBorder.svelte'
	import playLottie from '$lib/utils/playLottie'
</script>

<section class="p-4">
	<h1 class="font-sand-mobile-bold text-7xl leading-[0.75]">Not Works</h1>
	<p class="mt-4 text-[1.45rem]">
		Valuing and cultivating the creative aspect of the human spirit, recognizing it as a powerful
		tool for solving problems, expressing oneself, and understanding the world. Encouraging
		innovation and original thought, breaking free from traditional constraints, and exploring new
		ideas without being hindered by fear or skepticism.
	</p>
</section>

<section class="p-4 pt-2">
	<h2 class="font-sand-mobile-bold text-[1.45rem]">Typographic Poster Challenge</h2>
	<div class="mt-1 text-[1.45rem]">2022</div>
	<div class="relative mt-3 aspect-square w-full border-[2px] border-light-4 dark:border-light-25">
		<NewPixelBorder />
		<img
			src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715944571/general/not-work-typo-challenge_vvslvc.webp"
			alt=""
			class="h-full w-full object-cover"
		/>
	</div>
	<div class="mt-4 flex gap-4">
		<a
			href="https://thesandstudio.webflow.io/typographic-challenge"
			target="_blank"
			class="relative inline-block border-[2px] border-light-4 px-4 py-2 font-sand-mobile-bold text-[1.45rem] leading-[0.65] dark:border-light-25 dark:bg-light-4"
		>
			Brief
			<NewPixelBorder />
		</a>
		<a
			href="https://thesandstudio.webflow.io/gallery"
			target="_blank"
			class="relative inline-block border-[2px] border-light-4 px-4 py-2 font-sand-mobile-bold text-[1.45rem] leading-[0.65] dark:border-light-25 dark:bg-light-4"
		>
			Gallery
			<NewPixelBorder />
		</a>
	</div>
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
