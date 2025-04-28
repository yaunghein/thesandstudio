<script>
	import playLottie from '$lib/utils/playLottie'
	import { browser } from '$app/environment'
	import { LottiePlayer } from '@lottiefiles/svelte-lottie-player'
	import PixelBorder from './PixelBorder.svelte'
	import FATK from '$lib/svgs/mobile/FATK.svelte'
	import { MobileHomeSwiper } from '$lib/stores/slider'
</script>

<div data-slide-name="fatk" class="swiper-slide h-full w-full shrink-0 overflow-scroll px-4">
	<div class="h-full w-full bg-white dark:bg-black">
		<div class="relative h-full">
			<PixelBorder />
			<div class="hide-scrollbar relative h-full w-full overflow-scroll p-4">
				<div class="mx-auto mt-7 max-w-[213px]">
					<FATK />
				</div>
				<p class="relative mt-6 text-2xl leading-[0.75]">
					We embrace all forms, materials, and ideas, shaping them into products that reflect a
					confluence of diverse inspirations and tangible craftsmanship.
				</p>

				<div class="mt-6 grid gap-3">
					<div>
						<div class="mb-2 flex items-end justify-between px-2">
							<div class="max-w-[12rem] font-sand-mobile-bold text-2xl leading-[0.75]">
								Ambivalent Tote Bag and Trinket Bowl
							</div>
							<div class="font-sand-mobile-bold text-2xl leading-[0.75]">2022</div>
						</div>
						<div class="relative aspect-square w-full overflow-hidden">
							<video
								autoplay
								muted
								loop
								playsinline
								class="absolute inset-0 h-full w-full object-cover"
							>
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

							<div class="absolute bottom-4 left-1/2 -translate-x-1/2">
								<a
									target="_blank"
									href="https://thesandstudio.webflow.io/for-all-thingkind"
									class="flex h-10 w-[12.5rem] items-center justify-center rounded-full bg-white p-[0.4rem] text-2xl text-black dark:bg-black dark:text-white"
								>
									<PixelBorder />
									Visit
								</a>
							</div>
						</div>
					</div>

					<div>
						<div class="mb-2 flex items-end justify-between px-2">
							<div class="max-w-[12rem] font-sand-mobile-bold text-2xl leading-[0.75]">-</div>
							<div class="font-sand-mobile-bold text-2xl">2024</div>
						</div>
					</div>
				</div>

				<div class="mt-6 max-w-[18rem] font-sand-mobile-bold text-7xl leading-[0.75]">
					<!-- Do you have an idea? -->
					<img
						src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943851/general/mobile-fatk-make-shit_uqjvop.svg"
						alt="Make shit with us"
						class="w-[75%] invert dark:invert-0"
					/>
				</div>
				<div class="mb-20 mt-6 flex items-center justify-center">
					<button
						onclick={() => $MobileHomeSwiper?.slideTo(3)}
						class="relative flex h-10 w-[12.5rem] items-center justify-center rounded-full bg-white p-[0.4rem] text-2xl text-black dark:bg-black dark:text-white"
					>
						<PixelBorder />
						Let's Go
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
