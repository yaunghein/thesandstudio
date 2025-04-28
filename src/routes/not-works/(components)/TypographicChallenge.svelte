<script>
	import gsap from 'gsap'
	import TypographicChallengeHeading from './TypographicChallengeHeading.svelte'
</script>

<div>
	<div class="overflow-hidden">
		<div class="relative -mx-[0.1rem] border-2 border-white px-3 py-5 dark:border-light-12">
			<div class="transparent-layer"></div>
			<span class="relative block text-3xl">2022</span>
		</div>
	</div>
	<div class="relative aspect-[1/1.3] w-full overflow-hidden bg-[#4A3326]">
		<img
			src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715944571/general/not-work-typo-challenge_vvslvc.webp"
			alt=""
			class="h-full w-full scale-[1.01] object-cover"
		/>
		<div class="absolute left-8 top-8 w-[40rem] text-light-100">
			<TypographicChallengeHeading />
		</div>

		<div
			class="group absolute bottom-4 left-4 right-4 flex items-center overflow-hidden rounded-full border-2 border-white dark:border-light-12"
		>
			<div class="transparent-layer rounded-full"></div>
			<div
				id="bg"
				class="sand-transition absolute bottom-0 left-0 top-0 w-1/2 rounded-full bg-black opacity-0 group-hover:opacity-100 dark:bg-white"
			></div>

			<a
				target="_blank"
				href="https://thesandstudio.webflow.io/typographic-challenge"
				class="relative flex w-1/2 items-center justify-between rounded-full px-8 py-5 text-[2.5rem] text-white dark:text-light-12"
				onmouseenter={() => gsap.to('#bg', { x: '0%', ease: 'power4' })}
			>
				<span class="leading-none">Brief</span>
				<div class="flex aspect-square w-7 items-center">
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 31L31 1M31 1V31M31 1H1"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</a>

			<a
				target="_blank"
				href="https://thesandstudio.webflow.io/gallery"
				class="relative flex w-1/2 items-center justify-between rounded-full px-8 py-5 text-[2.5rem] text-white dark:text-light-12"
				onmouseenter={() => gsap.to('#bg', { x: '100%', ease: 'power4' })}
			>
				<span class="leading-none">Gallery</span>
				<div class="flex aspect-square w-7 items-center">
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 32 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 31L31 1M31 1V31M31 1H1"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
			</a>
		</div>
	</div>
</div>
