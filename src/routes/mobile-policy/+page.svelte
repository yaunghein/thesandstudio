<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import Swiper from 'swiper'
	import { Pagination } from 'swiper/modules'
	import Header from '$lib/components/mobile/Header.svelte'
	import SlidePrivacyPolicy from '$lib/components/mobile/SlidePrivacyPolicy.svelte'
	import SlideTnC from '$lib/components/mobile/SlideTnC.svelte'
	import SlideCookiePolicy from '$lib/components/mobile/SlideCookiePolicy.svelte'
	import Home from '$lib/svgs/mobile/Home.svelte'
	import PixelBorder from '$lib/components/mobile/PixelBorder.svelte'

	import 'swiper/css/pagination'

	onMount(() => {
		if (!browser) return
		const policySwiper = new Swiper('.swiper', {
			modules: [Pagination],
			loop: true,
			pagination: {
				el: '.swiper-pagination'
			}
		})
		const pages = ['privacy', 'terms', 'cookie']
		const pageName = $page.url.searchParams.get('page')
		policySwiper.slideTo(pages.findIndex((page) => page === pageName))
	})
</script>

<div class="sm:hidden">
	<div class="relative mx-auto h-[100dvh] bg-black p-1 font-sand-mobile-regular">
		<div
			class="sand-transition relative h-full overflow-hidden bg-white text-black dark:bg-black dark:text-white"
		>
			<Header />
			<div class="swiper relative pb-3">
				<div class="swiper-wrapper flex h-[calc(100dvh-10rem)] pb-3 pt-2">
					<SlidePrivacyPolicy />
					<SlideTnC />
					<SlideCookiePolicy />
				</div>
				<div class="swiper-pagination !translate-y-[0.675rem]"></div>
			</div>
		</div>
	</div>
	<nav
		class="fixed inset-5 top-auto z-20 mx-auto flex h-[4.5rem] max-w-[420px] items-center justify-evenly rounded-[1.1rem] bg-white dark:bg-black"
	>
		<PixelBorder />
		<a
			href="/"
			class="sand-transition relative flex aspect-square w-11 items-center justify-center dark:invert"
		>
			<Home />
		</a>
	</nav>
</div>
