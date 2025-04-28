<script lang="ts">
	import lottie from 'lottie-web'

	const runningLottie = (node: HTMLDivElement, path: string) => {
		const player = lottie.loadAnimation({
			container: node,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path
		})
		const handleMouseEnter = () => {
			player.setSpeed(0.3)
		}
		const handleMouseLeave = () => {
			player.setSpeed(1)
		}
		node.addEventListener('mouseenter', handleMouseEnter)
		node.addEventListener('mouseleave', handleMouseLeave)

		return {
			destroy: () => {
				node.removeEventListener('mouseenter', handleMouseEnter)
				node.removeEventListener('mouseleave', handleMouseLeave)
			}
		}
	}
</script>

<div class="relative h-full w-full overflow-hidden text-light-10">
	<div
		class="absolute inset-0 h-full w-full rounded-[1.4rem] bg-light-20 opacity-40 dark:hidden"
	></div>
	<div
		class="absolute inset-0 hidden h-full w-full rounded-[1.2rem] bg-[#ff9411] opacity-20 mix-blend-multiply dark:block"
	></div>
	<div
		class="absolute inset-0 hidden h-full w-full rounded-[1.2rem] bg-sand-yellow opacity-[15%] mix-blend-multiply dark:block"
	></div>

	<div
		class="absolute inset-[0.12rem] top-0 hidden rounded-[1.2rem] border-2 border-sand-yellow dark:block"
	></div>

	<div class="absolute inset-0 -ml-[0.4rem] -mt-[0.4rem] h-full w-full">
		{#each [...Array(32).keys()] as h}
			{#each [...Array(32).keys()] as v}
				{@const x = v * 2.63}
				{@const y = h * 2.63}
				<div
					class="absolute aspect-square w-[0.125rem] shrink-0 rounded-full bg-sand-yellow opacity-90"
					style="top: {y}rem; left: {x}rem;"
				></div>
			{/each}
		{/each}
	</div>

	<img
		class="pointer-events-none relative z-20 -mb-16 mt-10 w-full dark:hidden"
		src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715709502/app-images/sand-scan-usage-guide_uf0rdd.webp"
		alt="SAND Scan Usage Guide"
	/>
	<img
		class="pointer-events-none relative z-20 -mb-16 mt-10 hidden w-full dark:block"
		src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715709502/app-images/sand-scan-usage-guide-for-dark_scv4yl.webp"
		alt="SAND Scan Usage Guide"
	/>

	<img
		class="sand-transition absolute left-40 top-44 z-30 h-44 w-48 opacity-100 dark:opacity-0"
		src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715709672/app-images/sand-scan-one_lxitod.gif"
		alt=""
	/>
	<div
		use:runningLottie={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715588393/lotties/sand-scan-running-black_okxci6.json'}
		class="absolute right-28 top-[8.2rem] z-10 h-[17rem] w-[36rem] overflow-hidden dark:hidden dark:w-0"
	></div>
	<img
		class="sand-transition absolute bottom-[11.5rem] right-[4.2rem] z-30 aspect-square w-[10.3rem] rounded-2xl opacity-100 dark:opacity-0"
		src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715709674/app-images/sand-scan-three_w1iv1t.gif"
		alt=""
	/>

	<img
		class="sand-transition absolute left-40 top-44 z-30 h-44 w-48 opacity-0 dark:opacity-100"
		src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715709671/app-images/sand-scan-one-for-dark_hpdkg5.gif"
		alt=""
	/>
	<div
		use:runningLottie={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715588283/lotties/sand-scan-running-white_r4x1n9.json'}
		class="absolute right-28 top-[8.2rem] z-10 hidden h-[17rem] w-0 dark:block dark:w-[36rem]"
	></div>
	<img
		class="sand-transition absolute bottom-[11.5rem] right-[4.2rem] z-30 aspect-square w-[10.3rem] rounded-2xl opacity-0 dark:opacity-100"
		src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715709675/app-images/sand-scan-three-for-dark_dl52xb.gif"
		alt=""
	/>
</div>
