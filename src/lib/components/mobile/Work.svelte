<script lang="ts">
	import Swiper from 'swiper'
	import type { Swiper as TSwiper } from 'swiper'
	import { Autoplay, EffectFade } from 'swiper/modules'
	import type { Work } from '$lib/types'
	import gsap from 'gsap'
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
	import lottie from 'lottie-web'
	import { changeCursorType } from '$lib/stores/cursor'
	import NewPixelBorder from './NewPixelBorder.svelte'

	interface Props {
		work: Work
	}

	let { work }: Props = $props()

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
</script>

<div role="region" class="">
	<div class="relative aspect-[1/0.6] w-full border-2 border-light-4">
		<NewPixelBorder />
		<div class="absolute inset-0 flex h-full w-full bg-light-90 dark:bg-light-20">
			{#if work.name === 'ENVISEAM'}
				<div class="h-full w-full shrink-0 overflow-hidden bg-white dark:bg-black">
					<div
						use:playLottie={work.images[0]}
						class="mx-auto h-full w-2/3 object-cover invert dark:invert-0"
					></div>
				</div>
			{:else}
				<div class="h-full w-full shrink-0 overflow-hidden">
					<img
						src={work.images[0]}
						alt={work.name}
						class="h-full w-full scale-[1.01] object-cover"
					/>
				</div>
			{/if}
		</div>
	</div>

	<div class="mt-2 font-sand-mobile-bold text-[1.45rem]">{work.name}</div>

	<!-- {#if work.links}
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
	{/if} -->
</div>
