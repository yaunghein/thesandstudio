<script lang="ts">
	import { run } from 'svelte/legacy'

	import { onMount } from 'svelte'
	import { scale } from 'svelte/transition'
	import { backIn, backOut } from 'svelte/easing'
	import { gsap } from 'gsap'
	import { Draggable } from 'gsap/dist/Draggable'
	import { twMerge as twm } from 'tailwind-merge'
	import convertFilesToBase64 from '$lib/utils/scanimation/convertFilesToBase64'
	import transformToImageObjects from '$lib/utils/scanimation/transformToImageObjects'
	import drawBars from '$lib/utils/scanimation/drawBars'
	import downloadImages from '$lib/utils/scanimation/downloadImages'
	import playLottie from '$lib/utils/playLottie'

	onMount(() => {
		gsap.registerPlugin(Draggable)
	})

	let px = $state(1)
	run(() => {
		if (px < 1) px = 1
	})
	let pxPreset = $state('small')
	run(() => {
		if (pxPreset) {
			if (pxPreset === 'small') px = 1
			if (pxPreset === 'normal') px = 5
			if (pxPreset === 'large') px = 10
		}
	})
	let images: any[] = $state([])
	let name = $state('')
	let isNameActive = $state(false)

	const DISPLAY_WIDTH = 400
	const BARS_WIDTH_SCALE = 2

	const generateBaseAndBars = (px: number): void => {
		const base = document.getElementById('base') as HTMLCanvasElement
		const bars = document.getElementById('bars') as HTMLCanvasElement

		const imgW = images[0].naturalWidth
		const imgH = images[0].naturalHeight

		base!.width = imgW
		base!.height = imgH

		bars.width = imgW * BARS_WIDTH_SCALE
		bars.height = imgH

		const ctx = base.getContext('2d')

		const sliceSequence = [...Array(1000).keys()].map((i) => i * px * images.length)
		for (const [index, image] of images.entries()) {
			for (const i of sliceSequence) {
				ctx!.drawImage(image, i + px * index, 0, px, imgH, i + px * index, 0, px, imgH)
			}
		}

		drawBars(bars, images, px)

		const displayInnerContainer = document.querySelector(
			'.display-inner-container'
		) as HTMLDivElement
		if (base.width > DISPLAY_WIDTH) {
			displayInnerContainer.style.width = `${DISPLAY_WIDTH}px`
			displayInnerContainer.style.height = `${DISPLAY_WIDTH * (imgH / imgW)}px`
		} else {
			displayInnerContainer.style.width = `${base.width}px`
			displayInnerContainer.style.height = `${base.height}px`
		}

		const displayBase = document.querySelector('#display-base') as HTMLImageElement
		displayBase?.setAttribute('src', base.toDataURL('image/png'))

		const displayBars = document.querySelector('#display-bars') as HTMLImageElement
		displayBars.setAttribute('src', bars.toDataURL('image/png'))
		// fk this is so ugly
		if (base.width > DISPLAY_WIDTH) {
			displayBars.style.minWidth = `${
				displayInnerContainer.getBoundingClientRect().width * BARS_WIDTH_SCALE
			}px`
		} else {
			displayBars.style.width = `${
				displayInnerContainer.getBoundingClientRect().width * BARS_WIDTH_SCALE
			}px`
		}
	}

	let autoPlay = $state(false)
	let speed = $state(20)
	run(() => {
		if (speed < 1) speed = 1
	})
	let speedPreset = $state('medium')
	let drag: Draggable[] = $state()
	let movingId: number
	let movingPixels = $state(0)
	run(() => {
		if (movingPixels < 1) movingPixels = 1
	})

	run(() => {
		if (px) {
			autoPlay = false
		}
	})

	run(() => {
		if (speedPreset) {
			if (speedPreset === 'slow') speed = 20
			if (speedPreset === 'medium') speed = 120
			if (speedPreset === 'fast') speed = 180
			if (speedPreset === 'fast-as-fk') speed = 250
		}
	})

	const animateMove = () => {
		const bars = document.getElementById('display-bars')
		const move = () => {
			if (movingPixels < 100) {
				movingPixels += 0.001 * speed
			} else {
				movingPixels = 0
			}
			bars!.style.transform = `translateX(${movingPixels}px)`
			movingId = requestAnimationFrame(move)
		}
		move()
	}

	const cancelMoveAnimation = () => {
		cancelAnimationFrame(movingId)
	}

	const reset = () => {
		images = [] as any[]
		;(document!.querySelector('#display-container') as HTMLElement).style.display = 'none'
	}

	run(() => {
		if (images.length > 0) {
			;(document!.querySelector('#display-container') as HTMLElement).style.display = 'flex'

			generateBaseAndBars(px)

			if (autoPlay) {
				drag[0]?.disable()
				animateMove()
			} else {
				cancelMoveAnimation()
				if (drag) {
					drag[0].enable()
				} else {
					drag = Draggable.create('#display-bars', {
						type: 'x,y',
						edgeResistance: 0,
						bounds: '#display-container'
					})
				}
			}
		}
	})

	const handleFilesChange: any = async (node: HTMLInputElement) => {
		node.addEventListener('change', async () => {
			const { files } = node
			if (files!.length === 0) return

			const base64Images = await convertFilesToBase64(files as any)
			const imagesObjects = await transformToImageObjects(base64Images as any)
			images = imagesObjects as any
		})
	}

	const handleDownload: any = (node: HTMLButtonElement) => {
		node.addEventListener('click', () => {
			const base = document.getElementById('base') as HTMLCanvasElement
			const bars = document.getElementById('bars') as HTMLCanvasElement
			downloadImages(name || new Date().toJSON().slice(0, 10), [base, bars])
		})
	}
</script>

<div class="h-full w-full overflow-hidden">
	<div class="flex h-full">
		<!-- Controls -->
		<div class="flex w-[18rem] shrink-0 flex-col">
			<div class="relative flex h-full flex-col overflow-hidden px-10 py-9">
				<div class="mb-5 grid w-full place-items-center overflow-hidden rounded-2xl">
					<!-- <img
            src="/images/sand-scan.gif"
            class="w-full h-40 object-cover"
            alt="SAND Scan Icon"
          /> -->
					<div
						class="hidden dark:block"
						use:playLottie={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715710030/lotties/sand-scan-display-logo-white_ldxqc5.json'}
					></div>
					<div
						class="dark:hidden"
						use:playLottie={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715710027/lotties/sand-scan-display-logo-dark_cgoacy.json'}
					></div>
				</div>

				<!-- Bar Width   -->
				<div class="w-full py-3">
					<h2 class="-mb-1 text-xl text-black dark:text-white">Bar Width</h2>
					<div class="flex items-center justify-between">
						<input
							type="range"
							bind:value={px}
							min="1"
							max="50"
							class="non-draggable range w-full appearance-none bg-transparent"
						/>
						<input
							type="number"
							bind:value={px}
							class="h-[2rem] w-[3.2rem] appearance-none rounded-lg border-2 border-black bg-transparent p-2 text-right text-lg outline-none dark:border-light-100"
						/>
					</div>
					<div class="mt-1 flex items-center gap-7">
						<label
							class={twm(
								'sand-transition text-xl',
								pxPreset === 'small'
									? 'text-black dark:text-light-100'
									: 'text-light-70 dark:text-light-25'
							)}
						>
							<input type="radio" bind:group={pxPreset} name="px" value="small" class="hidden" />
							S
						</label>
						<label
							class={twm(
								'sand-transition text-xl',
								pxPreset === 'normal'
									? 'text-black dark:text-light-100'
									: 'text-light-70 dark:text-light-25'
							)}
						>
							<input type="radio" bind:group={pxPreset} name="px" value="normal" class="hidden" />
							N
						</label>
						<label
							class={twm(
								'sand-transition text-xl',
								pxPreset === 'large'
									? 'text-black dark:text-light-100'
									: 'text-light-70 dark:text-light-25'
							)}
						>
							<input type="radio" bind:group={pxPreset} name="px" value="large" class="hidden" />
							L
						</label>
					</div>
				</div>

				<!-- Autoplay -->
				<div
					class="relative mt-2 grid overflow-hidden rounded-[1.35rem] border-2 border-white text-lg dark:border-light-12"
				>
					<div
						class={twm(
							'sand-transition absolute inset-0 h-1/2 w-full rounded-full bg-black dark:bg-light-100',
							autoPlay ? 'translate-y-[100%]' : 'translate-y-[0%]'
						)}
					></div>
					<button
						class={twm(
							'relative flex h-full w-full items-center justify-center py-[0.4rem]',
							autoPlay ? 'text-light-70 dark:text-light-20' : 'text-white dark:text-black'
						)}
						onclick={() => (autoPlay = false)}
					>
						Cursor Drag
					</button>
					<button
						class={twm(
							'relative flex h-full w-full items-center justify-center py-[0.4rem]',
							autoPlay ? 'text-white dark:text-black' : 'text-light-70 dark:text-light-20'
						)}
						onclick={() => (autoPlay = true)}
					>
						Auto Play
					</button>
				</div>

				<!-- Speed -->
				<div class="w-full py-3">
					<h2 class="-mb-1 text-xl text-black dark:text-white">Speed</h2>
					<div class="flex items-center justify-between">
						<input
							type="range"
							bind:value={speed}
							min="1"
							max="250"
							class="non-draggable range w-full appearance-none bg-transparent"
							onchange={() => (speedPreset = 'reset')}
						/>
						<input
							type="number"
							bind:value={speed}
							class="h-[2rem] w-[3.2rem] appearance-none rounded-lg border-2 border-black bg-transparent p-2 text-right text-lg outline-none dark:border-light-100"
							onchange={() => (speedPreset = 'reset')}
						/>
					</div>
					<div class="mt-1 flex items-center gap-7">
						<label
							class={twm(
								'sand-transition text-xl',
								speedPreset === 'slow'
									? 'text-black dark:text-light-100'
									: 'text-light-70 dark:text-light-25'
							)}
						>
							<input
								type="radio"
								bind:group={speedPreset}
								name="speed"
								value="slow"
								class="hidden"
							/>
							S
						</label>
						<label
							class={twm(
								'sand-transition text-xl',
								speedPreset === 'medium'
									? 'text-black dark:text-light-100'
									: 'text-light-70 dark:text-light-25'
							)}
						>
							<input
								type="radio"
								bind:group={speedPreset}
								name="speed"
								value="medium"
								class="hidden"
							/>
							N
						</label>
						<label
							class={twm(
								'sand-transition text-xl',
								speedPreset === 'fast'
									? 'text-black dark:text-light-100'
									: 'text-light-70 dark:text-light-25'
							)}
						>
							<input
								type="radio"
								bind:group={speedPreset}
								name="speed"
								value="fast"
								class="hidden"
							/>
							F
						</label>
						<label
							class={twm(
								'sand-transition text-xl',
								speedPreset === 'fast-as-fk'
									? 'text-black dark:text-light-100'
									: 'text-light-70 dark:text-light-25'
							)}
						>
							<input
								type="radio"
								bind:group={speedPreset}
								name="speed"
								value="fast-as-fk"
								class="hidden"
							/>
							FAF
						</label>
					</div>
				</div>

				<!-- Project Name -->
				<div class="mt-auto flex w-full flex-col gap-2 pt-3">
					<label for="name" class="relative">
						<input
							type="text"
							id="name"
							bind:value={name}
							class="h-12 w-full appearance-none rounded-lg bg-transparent text-lg text-black outline-none placeholder:text-black dark:text-light-100 dark:placeholder:text-light-100"
							autocomplete="off"
							onfocus={() => (isNameActive = true)}
							onblur={() => (isNameActive = false)}
						/>
						{#if !isNameActive && !name}
							<div
								class="pointer-events-none absolute left-0 top-0 flex h-full w-full items-center gap-[1px]"
							>
								<span class="text-lg text-light-70 dark:text-light-25"> Project Name </span>
								<div class="h-4 w-[1px] animate-blink bg-black dark:bg-light-100"></div>
							</div>
						{/if}
					</label>
				</div>
			</div>
			<button
				use:handleDownload
				class="relative mt-auto h-20 w-full shrink-0 appearance-none bg-light-100 font-sand-medium text-xl dark:bg-black"
			>
				Export
				<div class="absolute -right-4 bottom-0 aspect-square w-10 bg-light-100 dark:bg-black"></div>
			</button>
		</div>

		<!-- Animation -->
		<div
			class="relative -m-[0.1875rem] ml-0 flex grow flex-col items-center justify-center gap-5 rounded-3xl border-2 border-white bg-light-90 dark:border-light-12 dark:bg-light-7"
		>
			<div class="hidden">
				<canvas data-name="base" id="base"></canvas>
				<canvas data-name="bars" id="bars"></canvas>
			</div>

			{#if images.length > 0}
				<button
					in:scale={{ start: 0.9, duration: 200, easing: backOut }}
					out:scale={{ start: 0.9, duration: 200, easing: backIn }}
					onclick={reset}
					class="absolute bottom-4 right-4 z-[10000] grid h-12 w-40 shrink-0 place-items-center rounded-2xl border-2 border-white bg-sand-red text-xl text-white dark:border-light-12"
				>
					Reset
				</button>
			{/if}

			<div
				id="display-container"
				class="relative hidden h-full w-full items-center justify-center overflow-hidden rounded-3xl"
			>
				<div class="display-inner-container relative">
					<img
						id="display-base"
						src=""
						alt=""
						class="non-draggable absolute inset-0 h-full w-full"
					/>
				</div>
				<img id="display-bars" src="" alt="" class="non-draggable absolute right-0 top-0 h-full" />
			</div>

			{#if images.length === 0}
				<label
					id="select-files-label"
					for="select-files"
					class="sand-transition grid aspect-[1.85/1] w-[18rem] cursor-pointer place-items-center rounded-xl border-2 border-dashed border-black bg-transparent text-lg text-black hover:bg-light-80 dark:border-white dark:text-white dark:hover:bg-light-12"
				>
					<input use:handleFilesChange type="file" multiple id="select-files" class="hidden" />
					<span>Select Frames</span>
				</label>
			{/if}
		</div>
	</div>
</div>
