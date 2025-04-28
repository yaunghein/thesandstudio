<script>
	import Sand from '$lib/svgs/mobile/Sand.svelte'
	import PixelBorder from './PixelBorder.svelte'
	import Weather from './Weather.svelte'
</script>

<div data-slide-name="home" class="swiper-slide h-full w-full shrink-0 overflow-scroll px-4">
	<div class="h-full w-full bg-white dark:bg-black">
		<div class="relative h-full">
			<PixelBorder />
			<div class="hide-scrollbar relative h-full overflow-scroll p-4">
				<div class="flex flex-col items-start">
					<div class="relative text-2xl leading-[0.75]">
						Yeah... We do shit. Come make amazing shits with us. Any type of shit but probably email
						first. Join us in harnessing a diverse spectrum of minds and voices to catalyze
						unprecedented shits. Let thy shit hit thy fan.
					</div>
					<div class="relative my-5 w-5/6">
						<Sand />
					</div>

					<Weather />

					<div class="relative mb-5 flex flex-col">
						<a href="/mobile-policy?page=privacy" class="text-left text-xl leading-[0.9]">
							Privacy Policy
						</a>
						<a href="/mobile-policy?page=terms" class="text-left text-xl leading-[0.9]">
							Terms and Conditions
						</a>
						<a href="/mobile-policy?page=cookie" class="text-left text-xl leading-[0.9]">
							Cookie Policy
						</a>
						<span class="mt-5 text-xl leading-[0.9]">
							Made by The Sand Studio {new Date().getFullYear()}
						</span>
					</div>

					<a
						href="https://greenpixie.com/sites/www-thesandstudio-com"
						target="_black"
						class="relative block origin-top-left scale-[0.7] rounded-full border-2 border-sand-green px-4 py-1 text-left font-sand-mobile-bold text-sand-green"
					>
						Calculate CO2 Emission
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
