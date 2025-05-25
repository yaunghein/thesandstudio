<script lang="ts">
	import Lottie from 'lottie-web'
	import type { PageProps } from './$types'

	let { data }: PageProps = $props()

	const playLottie = (node: HTMLDivElement, path: string) => {
		let isReversing = false
		let isClose = window.innerWidth > 639 ? true : false
		const parent = node.parentNode

		const animation = Lottie.loadAnimation({
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

<div class="flex min-h-screen flex-col">
	<section class="p-4 pb-0">
		<h1 class="font-sand-mobile-bold text-5xl leading-[0.75]">{data.work.name}</h1>
		<p class="mb-4 mt-2 text-[1.45rem]">{data.work.meta.join(' ')}</p>
		<div class="relative -mx-4 py-3">
			<div class="absolute inset-0 bottom-auto h-[1px] w-full bg-light-4 dark:bg-light-25"></div>
			<div
				class="absolute inset-0 bottom-auto top-[3px] h-[1px] w-full bg-light-4 dark:bg-light-25"
			></div>
			<div class="absolute inset-0 top-auto h-[1px] w-full bg-light-4 dark:bg-light-25"></div>
			<div
				class="absolute inset-0 bottom-[3px] top-auto h-[1px] w-full bg-light-4 dark:bg-light-25"
			></div>
			<div class="flex animate-marquee items-center gap-4">
				{#each { length: 50 }}
					<div
						class="shrink-0 whitespace-pre pt-[0.185rem] font-sand-mobile-bold text-[1.45rem] uppercase leading-[0.45]"
					>
						{data.work.categories.join('/')}/
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="">
		{#each data.work.images as image}
			<div
				class="relative aspect-[1/0.6] w-full border-b-[2px] border-light-4 dark:border-light-25"
			>
				<!-- this json check is only for enviseam at the moment -->
				{#if image.endsWith('.json')}
					<div
						use:playLottie={image}
						class="mx-auto h-full w-2/3 object-cover invert dark:invert-0"
					></div>
				{:else}
					<img src={image} alt={data.work.name} class="h-full w-full object-cover" />
				{/if}
			</div>
		{/each}
	</section>

	<section class="mt-auto">
		<a
			href="/mobile/works/{data.next.slug}"
			class="-mt-[2px] inline-block w-full border-t-[2px] border-light-4 p-4 dark:border-light-25"
		>
			<p class="mb-2 font-sand-mobile-bold text-[1.45rem]">Next Project</p>
			<h1 class="font-sand-mobile-bold text-5xl leading-[0.75]">{data.next.name}</h1>
		</a>
	</section>
</div>
