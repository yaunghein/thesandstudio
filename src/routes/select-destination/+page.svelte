<script lang="ts">
	import lottie from 'lottie-web'

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
</script>

<div class="flex h-screen w-full items-center justify-center overflow-hidden bg-black">
	<div class="relative w-[320px] shrink-0 sm:w-[52rem] sm:-translate-x-[5rem]">
		<div
			class="absolute top-1/2 hidden max-w-[16rem] -translate-y-1/2 text-5xl font-bold text-white sm:block"
		>
			Select your destination.
		</div>

		<div
			class="sand-transition pointer-events-none absolute -right-[2rem] top-[7.7rem] w-[10rem] sm:-right-[20.7rem] sm:top-[18.9rem] sm:w-[28.5rem] {destination ===
			'interiors'
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<img src="/interiors/floor-lamp.svg" alt="" class="h-full w-full" />
		</div>

		<div
			class="sand-transition pointer-events-none absolute right-[0.05rem] top-[15rem] w-[7.9rem] sm:-right-[14.7rem] sm:top-[38.7rem] sm:w-[21.5rem] {destination ===
			'studio'
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<img src="/interiors/ceiling-light.svg" alt="" class="h-full w-full" />
		</div>

		<div
			onmouseenter={() => (destination = 'interiors')}
			onmouseleave={() => (destination = '')}
			class="group absolute right-[0rem] top-[10rem] z-10 h-[5.75rem] w-[12rem] sm:-right-[13.5rem] sm:top-[26rem] sm:h-[15rem] sm:w-[30rem]"
		>
			<span class="sr-only">Sand Interiors</span>
			<div class="absolute left-2 top-1 flex items-center sm:left-3 sm:top-3">
				<div
					class="aspect-square w-6 shrink-0 sm:w-14"
					use:playLottie={'/interiors/interiors-spining.json'}
				></div>
				<img
					src="/interiors/sand-interiors.svg"
					alt=""
					class="sand-transition w-[4rem] -translate-x-[1.5rem] translate-y-[0rem] opacity-0 group-hover:opacity-100 sm:w-[9rem] sm:-translate-x-[3.5rem]"
				/>
			</div>
		</div>

		<div
			onmouseenter={() => (destination = 'studio')}
			onmouseleave={() => (destination = '')}
			class="group absolute -right-[0rem] top-[16rem] z-10 h-[6rem] w-[14rem] rounded-bl-[4rem] sm:-right-[13.5rem] sm:top-[42rem] sm:h-[15rem] sm:w-[35rem] sm:rounded-bl-[10.5rem]"
		>
			<span class="sr-only">The Sand Studio</span>
			<div class="absolute left-10 top-0 flex items-center sm:left-[5.75rem] sm:top-[0.1rem]">
				<div
					class="aspect-square w-6 sm:w-14"
					use:playLottie={'/interiors/studio-spining.json'}
				></div>
				<img
					src="/interiors/sand-studio.svg"
					alt=""
					class="sand-transition w-[3.5rem] -translate-x-[1.35rem] translate-y-[0.25rem] opacity-0 group-hover:opacity-100 sm:w-[8rem] sm:-translate-x-[2.95rem] sm:translate-y-[0.5rem]"
				/>
			</div>
		</div>

		<img
			src="/interiors/architectural-drawing.svg"
			alt=""
			class="pointer-events-none h-full w-full -translate-x-[0.5rem] sm:translate-x-1/4"
		/>
	</div>
</div>
