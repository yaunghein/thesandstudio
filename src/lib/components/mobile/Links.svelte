<script lang="ts">
	import FATK from '$lib/svgs/mobile/FATK.svelte'
	import Explorer from '$lib/svgs/mobile/Explorer.svelte'
	import Tube from '$lib/svgs/mobile/Tube.svelte'
	import { MobileHomeSwiper as swiper } from '$lib/stores/slider'
	import PixelBorder from './PixelBorder.svelte'

	const goToSlideByName = (slideName: string) => {
		const slides = $swiper!.slides
		for (let i = 0; i < slides.length; i++) {
			if (slides[i].dataset.slideName === slideName) {
				$swiper!.slideTo(i)
				return
			}
		}
	}
</script>

<button onclick={() => goToSlideByName('works')} class="p-[0.125rem] pb-0">
	<div class="relative flex aspect-square w-full items-center justify-center">
		<PixelBorder />
		<img
			class="relative dark:invert"
			src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943579/general/mobile-works_gpgxlr.gif"
			alt=""
		/>
	</div>
	<div class="whitespace-nowrap pl-[2px] pt-1 text-left font-sand-mobile-bold text-lg leading-none">
		Works
	</div>
</button>

<button onclick={() => goToSlideByName('fatk')} class="p-[0.125rem] pb-0">
	<div class="relative flex aspect-square w-full items-center justify-center">
		<PixelBorder />
		<div class="relative flex w-[85%] items-center justify-center">
			<FATK />
		</div>
	</div>
	<div class="whitespace-nowrap pl-[2px] pt-1 text-left font-sand-mobile-bold text-lg leading-none">
		For All Thingkind
	</div>
</button>

<button onclick={() => goToSlideByName('not-works')} class="p-[0.125rem] pb-0">
	<div class="relative flex aspect-square w-full items-center justify-center p-4">
		<PixelBorder />
		<img
			class="relative rotate-180 dark:invert"
			src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943575/general/mobile-not-works_onymkk.gif"
			alt=""
		/>
	</div>
	<div class="whitespace-nowrap pl-[2px] pt-1 text-left font-sand-mobile-bold text-lg leading-none">
		Not Works
	</div>
</button>

<button onclick={() => goToSlideByName('about')} class="p-[0.125rem] pb-0">
	<div class="relative flex aspect-square w-full items-center justify-center p-4">
		<PixelBorder />
		<img
			class="relative dark:invert"
			src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943567/general/mobile-about_tj6vbb.gif"
			alt=""
		/>
	</div>
	<div class="whitespace-nowrap pl-[2px] pt-1 text-left font-sand-mobile-bold text-lg leading-none">
		About
	</div>
</button>

<button onclick={() => goToSlideByName('contact')} class="p-[0.125rem] pb-0">
	<div class="relative flex aspect-square w-full items-center justify-center">
		<PixelBorder />
		<div class="relative flex h-[3rem] w-[80%] items-center justify-center">
			<Tube />
		</div>
	</div>
	<div class="whitespace-nowrap pl-[2px] pt-1 text-left font-sand-mobile-bold text-lg leading-none">
		Contact
	</div>
</button>

<button onclick={() => goToSlideByName('explorer')} class="p-[0.125rem] pb-0">
	<div class="relative flex aspect-square w-full items-center justify-center">
		<PixelBorder />
		<div class="relative flex w-[75%] items-center justify-center">
			<Explorer />
		</div>
	</div>
	<div class="whitespace-nowrap pl-[2px] pt-1 text-left font-sand-mobile-bold text-lg leading-none">
		Explorer 1000
	</div>
</button>
