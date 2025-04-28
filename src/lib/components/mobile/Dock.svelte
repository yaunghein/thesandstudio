<script lang="ts">
	import AChonLay from '$lib/svgs/mobile/AChonLay.svelte'
	import Home from '$lib/svgs/mobile/Home.svelte'
	import Burger from '$lib/svgs/mobile/Burger.svelte'
	import { MobileHomeSwiper as swiper } from '$lib/stores/slider'
	import PixelBorder from './PixelBorder.svelte'

	const switchMode = () => {
		const rootClasses = document.documentElement.classList
		const toggleMode = () => {
			rootClasses.contains('dark') ? rootClasses.remove('dark') : rootClasses.add('dark')
			rootClasses.contains('dark')
				? localStorage.setItem('sand-theme', 'dark')
				: localStorage.setItem('sand-theme', 'light')
		}
		toggleMode()
	}

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

<nav
	class="fixed inset-5 top-auto z-20 mx-auto flex h-[4.5rem] max-w-[420px] items-center justify-evenly rounded-[1.1rem] bg-white dark:bg-black"
>
	<PixelBorder />
	<button
		onclick={() => goToSlideByName('home')}
		class="sand-transition relative flex aspect-square w-11 items-center justify-center dark:invert"
	>
		<Home />
	</button>
	<button onclick={switchMode} class="relative flex aspect-square w-11 items-center justify-center">
		<AChonLay />
	</button>
	<button
		onclick={() => goToSlideByName('menu')}
		class="relative flex aspect-square w-11 items-center justify-center"
	>
		<Burger />
	</button>
</nav>
