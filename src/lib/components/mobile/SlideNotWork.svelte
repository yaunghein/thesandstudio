<script>
	import PixelBorder from './PixelBorder.svelte'
	import TypographicChallengeHeading from '../../../routes/not-works/(components)/TypographicChallengeHeading.svelte'
	import { MobileHomeSwiper } from '$lib/stores/slider'
</script>

<div data-slide-name="not-works" class="swiper-slide h-full w-full shrink-0 overflow-scroll px-4">
	<div class="h-full w-full bg-white dark:bg-black">
		<div class="relative h-full">
			<PixelBorder />
			<div class="hide-scrollbar relative h-full w-full overflow-scroll p-4">
				<h1 class="font-sand-mobile-bold text-6xl">Not Works</h1>
				<p class="relative mt-3 text-2xl leading-[0.75]">
					Valuing and cultivating the creative aspect of the human spirit, recognizing it as a
					powerful tool for solving problems, expressing oneself, and understanding the world.
					Encouraging innovation and original thought, breaking free from traditional constraints,
					and exploring new ideas without being hindered by fear or skepticism.
				</p>
				<div class="mt-6 grid gap-3">
					<div>
						<div class="mb-2 flex items-end justify-between px-2">
							<div class="font-sand-mobile-bold text-2xl leading-[0.75]">
								Typographic Poster Challenge
							</div>
							<div class="font-sand-mobile-bold text-2xl leading-[0.75]">2022</div>
						</div>
						<div class="relative aspect-[1/1.3] w-full overflow-hidden bg-[#4A3326]">
							<img
								src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715944571/general/not-work-typo-challenge_vvslvc.webp"
								alt=""
								class="h-full w-full scale-[1.01] object-cover"
							/>
							<div class="absolute left-4 top-4 w-[18rem] text-light-100">
								<TypographicChallengeHeading />
							</div>

							<div class="absolute bottom-6 left-6 right-6 flex items-center gap-6">
								<a
									href="https://thesandstudio.webflow.io/typographic-challenge"
									target="_blank"
									class="relative flex h-10 w-full items-center justify-center rounded-full bg-white p-[0.4rem] text-2xl text-black dark:bg-black dark:text-white"
								>
									<PixelBorder />
									Brief
								</a>
								<a
									href="https://thesandstudio.webflow.io/gallery"
									target="_blank"
									class="relative flex h-10 w-full items-center justify-center rounded-full bg-white p-[0.4rem] text-2xl text-black dark:bg-black dark:text-white"
								>
									<PixelBorder />
									Gallery
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
						src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715944624/general/not-works-collaborate-mobile_v8zal7.svg"
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
						Hop in the DeLorean!
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
