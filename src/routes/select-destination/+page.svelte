<script lang="ts">
	import { goto } from '$app/navigation'
	import lottie from 'lottie-web'
	import updateMetaColor from '$lib/utils/updateMetaColor'

	updateMetaColor('#ffffff')

	const playLottie = (node: HTMLDivElement, path: string) => {
		lottie.loadAnimation({
			container: node,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path
		})
	}

	let destination: 'studio' | 'interiors' | '' = ''

	const handleClick = (route: string) => {
		fetch('/api/set-cookie', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				key: 'sand-showed-select-screen',
				value: 'yes',
				age: 10 * 60 * 1000 // 10 minutes
			})
		})
			.then(() => {
				goto(route)
			})
			.catch((err) => {
				console.error(err)
			})
	}
</script>

<!-- <div class="fixed bottom-0 left-[9.75rem] top-0 z-50 w-[1px] bg-red-500 sm:left-[86.5rem]"></div>
<div class="fixed bottom-0 left-[11.5rem] top-0 z-50 w-[1px] bg-red-500 sm:left-[89.6rem]"></div> -->

<div class="flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-black">
	<div
		class="relative w-[27.5rem] shrink-0 -translate-x-[1rem] sm:w-[52rem] sm:-translate-x-[5rem]"
	>
		<div
			class="absolute top-1/2 hidden max-w-[16rem] -translate-y-1/2 text-5xl font-bold text-white sm:block"
		>
			Select your destination.
		</div>

		<div
			class="sand-transition pointer-events-none absolute -right-[5rem] top-[8.6rem] z-10 w-[18rem] scale-[0.93] sm:-right-[20.7rem] sm:top-[18.9rem] sm:w-[28.5rem] sm:scale-100 {destination ===
			'interiors'
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<img src="/interiors/floor-lamp.svg" alt="" class="h-full w-full" />
		</div>

		<div
			class="sand-transition pointer-events-none absolute -right-[0.7rem] top-[20.3rem] z-10 w-[12rem] sm:-right-[14.67rem] sm:top-[38.72rem] sm:w-[21.5rem] {destination ===
			'studio'
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<img src="/interiors/ceiling-light.svg" alt="" class="h-full w-full" />
		</div>

		<button
			onclick={() => handleClick('/interiors/')}
			onmouseenter={() => (destination = 'interiors')}
			onmouseleave={() => (destination = '')}
			class="group absolute right-[0.9rem] top-[13.8rem] z-10 h-[7.5rem] w-[15rem] sm:-right-[13.5rem] sm:top-[26rem] sm:h-[15rem] sm:w-[30rem]"
		>
			<span class="sr-only">Sand Interiors</span>
			<div class="absolute left-[0.3rem] top-1 flex items-center sm:left-3 sm:top-3">
				<div
					class="aspect-square w-8 shrink-0 sm:w-16"
					use:playLottie={'/interiors/interiors-spining.json'}
				></div>
				<img
					src="/interiors/sand-interiors.svg"
					alt=""
					class="sand-transition w-[5.3rem] -translate-x-[1.45rem] translate-y-[0rem] opacity-100 group-hover:opacity-100 sm:w-[11rem] sm:-translate-x-[3.55rem] sm:opacity-0"
				/>
			</div>
		</button>

		<button
			onclick={() => handleClick('/')}
			onmouseenter={() => (destination = 'studio')}
			onmouseleave={() => (destination = '')}
			class="group absolute -right-[0.1rem] top-[22rem] z-10 h-[8rem] w-[18rem] rounded-bl-[4rem] sm:-right-[13.55rem] sm:top-[42rem] sm:h-[15rem] sm:w-[35rem] sm:rounded-bl-[10.5rem]"
		>
			<span class="sr-only">The Sand Studio</span>
			<div class="absolute left-[2.4rem] top-0 flex items-center sm:left-[5.75rem] sm:top-[0.1rem]">
				<div
					class="aspect-square w-[1.9rem] sm:w-[3.75rem]"
					use:playLottie={'/interiors/studio-spining.json'}
				></div>
				<img
					src="/interiors/sand-studio.svg"
					alt=""
					class="sand-transition w-[4rem] -translate-x-[1.375rem] translate-y-[0.5rem] opacity-100 group-hover:opacity-100 sm:w-[8.5rem] sm:-translate-x-[3.1rem] sm:translate-y-[0.9rem] sm:opacity-0"
				/>
			</div>
		</button>

		<img
			src="/interiors/architectural-drawing.svg"
			alt=""
			style="filter: brightness(1.5);"
			class="pointer-events-none h-full w-full -translate-x-[0.5rem] sm:translate-x-1/4"
		/>
	</div>
</div>
