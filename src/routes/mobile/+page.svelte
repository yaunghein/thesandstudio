<script lang="ts">
	import Weather from '$lib/components/mobile/Weather.svelte'
</script>

<section class="flex h-full flex-col p-3 pt-6">
	<h1 class="font-sand-mobile-bold text-[43vw] leading-[0.55]">SAND</h1>
	<div class="relative mt-1 text-[1.45rem]">
		Yeah... We do shit. Come make amazing shits with us. Any type of shit but probably email first.
		Join us in harnessing a diverse spectrum of minds and voices to catalyze unprecedented shits.
		Let thy shit hit thy fan.
	</div>

	<div class="mt-auto min-w-[18.5rem] shrink-0">
		<Weather />
	</div>
</section>

<section class="my-8 grid gap-4 px-3">
	<a href="/mobile/privacy-policy" class="font-sand-mobile-bold text-lg leading-[0.65]">
		Privacy Policy
	</a>
	<a href="/mobile/terms-and-conditions" class="font-sand-mobile-bold text-lg leading-[0.65]">
		Terms and Conditions
	</a>
	<a href="/mobile/cookie-policy" class="font-sand-mobile-bold text-lg leading-[0.65]">
		Cookie Policy
	</a>
</section>

<section class="relative aspect-[4/3] w-full dark:invert">
	<img
		src="/mobile/gifs/sand-dune-loop.gif"
		alt="Sand Dune"
		class="h-full w-full dark:opacity-25"
	/>
	<div
		class="absolute bottom-3 left-3 bg-light-100 px-[2px] font-sand-mobile-bold text-base text-light-4"
	>
		<span class="block translate-y-[0.07rem] leading-none">Made by The Sand Studio 2025</span>
	</div>
</section>
