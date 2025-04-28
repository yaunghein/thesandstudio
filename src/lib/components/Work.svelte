<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	import Swiper from 'swiper'
	import type { Swiper as TSwiper } from 'swiper'
	import { Autoplay, EffectFade } from 'swiper/modules'
	import type { Work } from '$lib/types'
	import gsap from 'gsap'
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
	import lottie from 'lottie-web'
	import { changeCursorType } from '$lib/stores/cursor'

	interface Props {
		work: Work
	}

	let { work }: Props = $props()

	const getRandomNumber = () => {
		const numbers = [10, 13, 15]
		const randomIndex = Math.floor(Math.random() * numbers.length)
		return numbers[randomIndex]
	}

	let slider: TSwiper
	const swiper = (node: HTMLDivElement) => {
		slider = new Swiper(node, {
			modules: [Autoplay, EffectFade],
			effect: 'slide',
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 750,
			autoplay: {
				delay: 1000 * getRandomNumber(),
				disableOnInteraction: false
			}
		})
	}

	const inView = (node: HTMLDivElement) => {
		if (window.innerWidth > 640) return
		gsap.registerPlugin(ScrollTrigger)
		ScrollTrigger.create({
			trigger: node,
			scroller: '#mobile-work-container',
			start: 'top 50%',
			end: 'bottom 50%',
			onEnter: () => dispatch('enter', work),
			onEnterBack: () => dispatch('enterBack', work)
		})
	}

	const playLottie = (node: HTMLDivElement, path: string) => {
		let isReversing = false
		let isClose = window.innerWidth > 639 ? true : false
		const parent = node.parentNode

		const animation = lottie.loadAnimation({
			container: node,
			renderer: 'canvas',
			loop: false,
			autoplay: window.innerWidth > 639 ? false : true,
			path
		})

		const handleLoop = () => {
			if (isClose) return
			if (!isReversing) {
				isReversing = true
				animation.setDirection(-1)
			} else {
				isReversing = false
				animation.setDirection(1)
			}
			animation.play()
		}
		animation.addEventListener('complete', handleLoop)

		const handleMouseEnter = () => {
			isClose = false
			animation.play()
		}
		const handleMouseLeave = () => {
			isClose = true
			animation.setDirection(-1)
			animation.play()
		}
		if (window.innerWidth > 639) {
			parent?.addEventListener('mouseenter', handleMouseEnter)
			parent?.addEventListener('mouseleave', handleMouseLeave)
		}

		return {
			destroy() {
				animation.removeEventListener('complete', handleLoop)
				parent?.removeEventListener('mouseenter', handleMouseEnter)
				parent?.removeEventListener('mouseleave', handleMouseLeave)
			}
		}
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (window.innerWidth <= 640) return
		const _slider = slider?.el
		const _slides = slider?.slides
		const sliderWidth = _slider.clientWidth
		const mouseX = e.clientX - _slider.getBoundingClientRect().left
		const segmentWidth = sliderWidth / _slides.length
		const segmentIndex = Math.floor(mouseX / segmentWidth)
		slider?.slideTo(segmentIndex)
	}

	const direction = (node: HTMLDivElement) => {
		if (window.innerWidth > 640) {
			node.setAttribute('dir', 'rtl')
		}
	}
</script>

<div
	role="region"
	use:inView
	use:direction
	use:swiper
	use:changeCursorType={{ inType: 'work-slider', outType: 'normal' }}
	onmouseenter={() => dispatch('hoverIn', work)}
	onmousemove={handleMouseMove}
	class="fade-up group relative h-[115vw] w-full overflow-hidden sm:aspect-[1.6/1] sm:h-auto"
>
	<div class="swiper-wrapper absolute inset-0 flex h-full w-full bg-light-90 dark:bg-light-20">
		{#each work.images as image}
			{#if work.name === 'ENVISEAM'}
				<div class="swiper-slide h-full w-full shrink-0 overflow-hidden bg-white dark:bg-black">
					<div
						use:playLottie={image}
						class="mx-auto h-full w-2/3 object-cover invert dark:invert-0"
					></div>
				</div>
			{:else}
				<div class="swiper-slide h-full w-full shrink-0 overflow-hidden">
					<img src={image} alt={work.name} class="h-full w-full scale-[1.01] object-cover" />
				</div>
			{/if}
		{/each}
	</div>

	{#if work.links}
		<div
			use:changeCursorType={{ inType: 'normal', outType: 'work-slider' }}
			class="absolute bottom-5 right-5 flex gap-5"
		>
			{#each work.links.reverse() as link}
				<a
					target="_blank"
					href={link.to}
					class="sand-transition flex flex-row-reverse items-center gap-10 rounded-full border-2 border-white bg-light-90 bg-opacity-60 px-5 py-2 text-xl text-black hover:border-black hover:bg-black hover:bg-opacity-100 hover:text-white dark:border-light-12 dark:bg-black dark:bg-opacity-60 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-100 hover:dark:text-black"
				>
					{link.label}
					<div class="aspect-square w-4 shrink-0">
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 17L17 1M17 1V17M17 1H1"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
