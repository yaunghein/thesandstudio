<script lang="ts">
	import { twMerge as twm } from 'tailwind-merge'
	import Swiper from 'swiper'
	import { Autoplay, FreeMode } from 'swiper/modules'

	const images = [
		{
			path: '/interiors/trailing-images/trail-1.webp',
			layoutClasses: 'w-[30rem] aspect-[1/1]'
		},
		{
			path: '/interiors/trailing-images/trail-2.webp',
			layoutClasses: 'w-[30rem] aspect-[1:1.15]'
		},
		{
			path: '/interiors/trailing-images/trail-3.webp',
			layoutClasses: 'w-[40rem] aspect-[1/0.56]'
		},
		{
			path: '/interiors/trailing-images/trail-4.webp',
			layoutClasses: 'w-[16rem] aspect-[1/2.72]'
		},
		{
			path: '/interiors/trailing-images/trail-5.webp',
			layoutClasses: 'w-[30rem] aspect-[1/0.75]'
		},
		{
			path: '/interiors/trailing-images/trail-6.webp',
			layoutClasses: 'w-[35rem] aspect-[1/0.56]'
		},
		{
			path: '/interiors/trailing-images/trail-7.webp',
			layoutClasses: 'w-[30rem] aspect-[1/1]'
		},
		{
			path: '/interiors/trailing-images/trail-8.webp',
			layoutClasses: 'w-[35rem] aspect-[1/0.56]'
		},
		{
			path: '/interiors/trailing-images/trail-9.webp',
			layoutClasses: 'w-[30rem] aspect-[1/0.85]'
		},
		{
			path: '/interiors/trailing-images/trail-10.webp',
			layoutClasses: 'w-[30rem] aspect-[1/1]'
		},
		{
			path: '/interiors/trailing-images/trail-11.webp',
			layoutClasses: 'w-[30rem] aspect-[1/0.75]'
		},
		{
			path: '/interiors/trailing-images/trail-12.webp',
			layoutClasses: 'w-[35rem] aspect-[1/0.87] mix-blend-multiply'
		},
		{
			path: '/interiors/trailing-images/trail-13.webp',
			layoutClasses: 'w-[30rem] aspect-[1/0.75]'
		},
		{
			path: '/interiors/trailing-images/trail-14.webp',
			layoutClasses: 'w-[30rem] aspect-[1/0.75]'
		},
		{
			path: '/interiors/trailing-images/trail-15.webp',
			layoutClasses: 'w-[30rem] aspect-[1/1]'
		}
		// {
		// 	path: '/interiors/trailing-images/trail-16.webp',
		// 	layoutClasses: 'w-[30rem] aspect-[1/0.75]'
		// },
		// {
		// 	path: '/interiors/trailing-images/trail-17.webp',
		// 	layoutClasses: 'w-[20rem] aspect-[1/1.25]'
		// },
		// {
		// 	path: '/interiors/trailing-images/trail-18.webp',
		// 	layoutClasses: 'w-[30rem] aspect-[1/0.75]'
		// },
		// {
		// 	path: '/interiors/trailing-images/trail-19.webp',
		// 	layoutClasses: 'w-[30rem] aspect-[1/0.75]'
		// },
		// {
		// 	path: '/interiors/trailing-images/trail-20.webp',
		// 	layoutClasses: 'w-[20rem] aspect-[1/1.25]'
		// }
	]

	const mobileImages = [
		{
			path: '/interiors/home-scroll-images/1.webp',
			layoutClasses: 'h-[95%] my-auto aspect-[1/2.73]'
		},
		{
			path: '/interiors/home-scroll-images/2.webp',
			layoutClasses: 'h-[75%] my-auto aspect-[1/1.25]'
		},
		{
			path: '/interiors/home-scroll-images/3.webp',
			layoutClasses: 'h-[40%] my-auto aspect-[1/1.01]'
		},
		{
			path: '/interiors/home-scroll-images/4.webp',
			layoutClasses: 'h-[60%] my-auto aspect-[1/0.76]'
		},
		{
			path: '/interiors/home-scroll-images/5.webp',
			layoutClasses: 'h-[75%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/6.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/0.85]'
		},
		{
			path: '/interiors/home-scroll-images/7.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/8.webp',
			layoutClasses: 'h-[65%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/9.webp',
			layoutClasses: 'h-[90%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/10.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/1.04]'
		},
		{
			path: '/interiors/home-scroll-images/11.webp',
			layoutClasses: 'h-[90%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/12.webp',
			layoutClasses: 'h-[65%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/13.webp',
			layoutClasses: 'h-[95%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/14.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/15.webp',
			layoutClasses: 'h-[55%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/16.webp',
			layoutClasses: 'h-[65%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/17.webp',
			layoutClasses: 'h-[75%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/18.webp',
			layoutClasses: 'h-[75%] my-auto aspect-[1/0.85]'
		},
		{
			path: '/interiors/home-scroll-images/19.webp',
			layoutClasses: 'h-[50%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/20.webp',
			layoutClasses: 'h-[90%] my-auto aspect-[1/1.33]'
		},
		{
			path: '/interiors/home-scroll-images/21.webp',
			layoutClasses: 'h-[75%] my-auto aspect-[1/1.25]'
		},
		{
			path: '/interiors/home-scroll-images/22.webp',
			layoutClasses: 'h-[60%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/23.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/24.webp',
			layoutClasses: 'h-[75%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/25.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/0.6]'
		},
		{
			path: '/interiors/home-scroll-images/26.webp',
			layoutClasses: 'h-[60%] my-auto aspect-[1/0.85]'
		},
		{
			path: '/interiors/home-scroll-images/27.webp',
			layoutClasses: 'h-[65%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/28.webp',
			layoutClasses: 'h-[65%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/29.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/30.webp',
			layoutClasses: 'h-[50%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/31.webp',
			layoutClasses: 'h-[60%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/32.webp',
			layoutClasses: 'h-[75%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/33.webp',
			layoutClasses: 'h-[65%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/34.webp',
			layoutClasses: 'h-[75%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/35.webp',
			layoutClasses: 'h-[60%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/36.webp',
			layoutClasses: 'h-[60%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/37.webp',
			layoutClasses: 'h-[90%] my-auto aspect-[1/1.25]'
		},
		{
			path: '/interiors/home-scroll-images/38.webp',
			layoutClasses: 'h-[50%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/39.webp',
			layoutClasses: 'h-[50%] my-auto aspect-[1/0.54]'
		},
		{
			path: '/interiors/home-scroll-images/40.webp',
			layoutClasses: 'h-[90%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/41.webp',
			layoutClasses: 'h-[90%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/42.webp',
			layoutClasses: 'h-[65%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/43.webp',
			layoutClasses: 'h-[80%] my-auto aspect-[1/0.56]'
		},
		{
			path: '/interiors/home-scroll-images/44.webp',
			layoutClasses: 'h-[90%] my-auto aspect-[1/0.92]'
		},
		{
			path: '/interiors/home-scroll-images/45.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/0.75]'
		},
		{
			path: '/interiors/home-scroll-images/46.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/0.63]'
		},
		{
			path: '/interiors/home-scroll-images/47.webp',
			layoutClasses: 'h-[90%] my-auto aspect-[1/1.25]'
		},
		{
			path: '/interiors/home-scroll-images/48.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/1]'
		},
		{
			path: '/interiors/home-scroll-images/49.webp',
			layoutClasses: 'h-[70%] my-auto aspect-[1/0.75]'
		}
	]

	const trailingImages = (container: HTMLElement) => {
		if (window.innerWidth < 768) return
		const config = {
			imageLifeSpan: 2000,
			removalDelay: 50,
			mouseThreshold: 100,
			scrollThreshold: 50,
			idelCursorInterval: 500,
			inDuration: 750,
			outDuration: 1000,
			inEasing: 'cubic-bezier(0.07, 0.5, 0.5, 1)',
			outEasing: 'cubic-bezier(0.87, 0, 0.13, 1)'
		}
		const trail: {
			element: HTMLImageElement
			rotation: number
			removalTime: number
		}[] = []

		let mouseX: number, mouseY: number, lastMouseX: number, lastMouseY: number
		let isMoving = false
		let isCursorInContainer = false
		let lastRemovalTime = 0
		let lastSteadyImageTime = 0
		let lastScrollTime = 0
		let isScrolling = false
		let scrollTicking = false
		let currentImageIndex = 0

		const isInContainer = (x: number, y: number) => {
			const rect = container.getBoundingClientRect()
			return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
		}

		const setInitialMousePosition = (e: MouseEvent) => {
			mouseX = e.clientX
			mouseY = e.clientY
			lastMouseX = mouseX
			lastMouseY = mouseY
			isCursorInContainer = isInContainer(mouseX, mouseY)
			document.removeEventListener('mouseover', setInitialMousePosition, false)
		}
		document.addEventListener('mouseover', setInitialMousePosition, false)

		const hasMoveEnough = () => {
			const distance = Math.sqrt(
				Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2)
			)
			return distance > config.mouseThreshold
		}

		const createTrailImage = () => {
			if (!isCursorInContainer) return

			const now = Date.now()

			if (isMoving && hasMoveEnough()) {
				lastMouseX = mouseX
				lastMouseY = mouseY
				createImage()
				return
			}

			// if (!isMoving && now - lastSteadyImageTime >= config.idelCursorInterval) {
			// 	lastSteadyImageTime = now
			// 	createImage()
			// }
		}

		const createImage = () => {
			const img = document.createElement('img')
			const selectedImage = images[currentImageIndex]
			currentImageIndex = (currentImageIndex + 1) % images.length
			const rotation = (Math.random() * -0.5) / 50

			img.src = selectedImage.path

			img.classList.add(
				'absolute',
				'origin-center',
				'object-cover',
				'will-change-transform',
				'pointer-events-none'
			)
			if (selectedImage.layoutClasses) {
				selectedImage.layoutClasses.split(' ').forEach((cls) => {
					if (cls.trim()) img.classList.add(cls)
				})
			}

			const rect = container.getBoundingClientRect()
			const relativeX = mouseX - rect.left
			const relativeY = mouseY - rect.top

			img.style.left = `${relativeX}px`
			img.style.top = `${relativeY}px`
			img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`
			img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`

			container.appendChild(img)

			setTimeout(() => {
				img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`
			}, 10)

			trail.push({
				element: img,
				rotation,
				removalTime: Date.now() + config.imageLifeSpan
			})
		}

		const createScollTrailImage = () => {
			if (!isCursorInContainer) return

			lastMouseX += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1)
			lastMouseY += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1)

			createImage()

			lastMouseX = mouseX
			lastMouseY = mouseY
		}

		const removeOldImage = () => {
			const now = Date.now()
			if (now - lastRemovalTime < config.removalDelay || trail.length === 0) {
				return
			}

			const oldestImage = trail[0]
			if (now >= oldestImage.removalTime) {
				const imageToRemove = trail.shift()
				if (imageToRemove) {
					imageToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`
					imageToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imageToRemove.rotation}deg) scale(0)`
					lastRemovalTime = now

					setTimeout(() => {
						if (imageToRemove.element.parentElement) {
							imageToRemove.element.parentElement.removeChild(imageToRemove.element)
						}
					}, config.outDuration)
				}
			}
		}

		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX
			mouseY = e.clientY
			isCursorInContainer = isInContainer(mouseX, mouseY)
			if (isCursorInContainer) {
				isMoving = true
				// @ts-ignore
				clearTimeout(window.moveTimeout)
				// @ts-ignore
				window.moveTimeout = setTimeout(() => {
					isMoving = false
				}, 100)
			}
		}
		document.addEventListener('mousemove', handleMouseMove, false)

		const handleScroll = () => {
			isCursorInContainer = isInContainer(mouseX, mouseY)
			if (isCursorInContainer) {
				isMoving = true
				lastMouseX += (Math.random() - 50) * 10
				// @ts-ignore
				clearTimeout(window.scrollTimeout)
				// @ts-ignore
				window.scrollTimeout = setTimeout(() => {
					isMoving = false
				}, 100)
			}
		}
		document.addEventListener('scroll', handleScroll, false)

		window.addEventListener(
			'scroll',
			() => {
				const now = Date.now()
				isScrolling = true

				if (now - lastScrollTime < config.scrollThreshold) {
					return
				}

				lastScrollTime = now

				if (!scrollTicking) {
					requestAnimationFrame(() => {
						if (isScrolling) {
							isScrolling = false
							createScollTrailImage()
						}
						scrollTicking = false
					})
					scrollTicking = true
				}
			},
			{ passive: false }
		)
		const animate = () => {
			createTrailImage()
			removeOldImage()
			requestAnimationFrame(animate)
		}
		animate()

		return {
			destroy() {
				document.removeEventListener('mousemove', handleMouseMove, false)
				document.removeEventListener('scroll', handleScroll, false)
			}
		}
	}

	const slider = (node: HTMLElement) => {
		Swiper.use([Autoplay, FreeMode])

		const swiper = new Swiper(node, {
			spaceBetween: 20,
			speed: 5000,
			freeMode: true,
			loop: true,
			slidesPerView: 'auto',
			autoplay: {
				delay: 0,
				disableOnInteraction: false
			}
		})

		return {
			destroy() {
				swiper.destroy()
			}
		}
	}
</script>

<!-- filler for fixed navbar -->
<div class="h-[3.6rem] sm:h-[11.5rem]"></div>

<section
	use:trailingImages
	class="flex h-[calc(100dvh-3.6rem)] flex-col justify-between sm:h-[calc(100dvh-11.5rem)]"
>
	<div
		class="mb-4 mt-5 grid grid-cols-2 gap-x-4 gap-y-6 px-5 text-base leading-[1.4] sm:mb-0 sm:mt-[3rem] sm:grid-cols-3 sm:gap-x-[2rem] sm:gap-y-[2rem] sm:px-[4rem] sm:text-[1.6rem]"
	>
		<div>Architecture</div>
		<div>Interior Design</div>
		<p class="col-span-2 max-w-[17rem] sm:col-span-1 sm:max-w-[35rem]">
			Currently based in Bangkok, Thailand while continuously expanding expertise in
			multidisciplinary design and sustainable practices.
		</p>
	</div>

	<div class="hide-scrollbar my-auto flex gap-16 overflow-x-scroll px-5 sm:hidden sm:px-[4rem]">
		{#each [...mobileImages, ...mobileImages, ...mobileImages, ...mobileImages, ...mobileImages] as image}
			<div class="flex shrink-0 items-center">
				<div class={twm('shrink-0', image.layoutClasses)}>
					<img src={image.path} alt="" class="h-full w-full object-cover" />
				</div>
			</div>
		{/each}
	</div>

	<div class="hidden aspect-[1/0.1] w-full p-[4rem] sm:block">
		{@render sandInteriors()}
	</div>
	<div class="aspect-[1/0.34] w-[10.75rem] p-5 sm:hidden">
		{@render sandInteriorsMobile()}
	</div>
</section>

{#snippet sandInteriors()}
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 1360 132"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1316.99 130.495C1297.84 130.495 1283.89 122.219 1273.99 111.508L1284.7 79.8617H1288.92C1287.78 88.3006 1286.97 93.4938 1286.97 97.7132C1286.97 118.324 1302.55 124.815 1316.83 124.815C1336.14 124.815 1349.13 117.512 1349.13 101.608C1349.13 86.1908 1336.79 82.9451 1316.67 76.9405L1311.96 75.4799C1293.3 70.1244 1279.99 58.6021 1279.99 38.9654C1279.99 17.8681 1294.92 4.07373 1317.64 4.07373C1335.33 4.07373 1349.45 12.3504 1354.81 17.219L1344.91 45.2946H1340.69C1341.66 39.29 1342.47 36.8557 1342.47 34.5836C1343.12 16.8944 1331.11 9.42919 1316.67 9.42919C1302.71 9.42919 1290.22 16.2452 1290.22 29.5527C1290.22 44.3208 1305.47 49.3517 1319.59 53.2466L1323.32 54.2204C1339.55 58.7644 1360 65.0936 1360 91.5463C1360 116.701 1341.82 130.495 1316.99 130.495Z"
			fill="currentColor"
		/>
		<path
			d="M1206.18 128.711H1164.31V126.601L1176.49 120.921V12.5132L1164.31 7.48228V5.37256H1216.41C1236.37 5.37256 1257.47 15.4343 1257.47 36.5316C1257.47 53.8963 1243.51 66.0678 1223.06 68.989L1256.01 120.921L1271.59 126.601V128.711H1225.5V126.601L1237.02 122.057L1204.56 70.6119H1194.01V120.921L1206.18 126.601V128.711ZM1194.01 12.3509V63.6335H1210.4C1228.58 63.6335 1240.26 54.3832 1240.26 36.8562C1240.26 18.0309 1226.47 12.3509 1210.4 12.3509H1194.01Z"
			fill="currentColor"
		/>
		<path
			d="M1093.54 130.495C1063.03 130.495 1037.23 104.367 1037.23 67.8524C1037.23 29.5527 1065.79 4.07373 1096.46 4.07373C1127.46 4.07373 1154.23 30.2019 1154.23 65.905C1154.23 103.393 1124.7 130.495 1093.54 130.495ZM1099.06 124.491C1118.37 124.491 1133.62 108.1 1133.62 72.5588C1133.62 31.0133 1115.77 10.0783 1093.05 10.0783C1076.82 10.0783 1056.86 23.2236 1056.86 62.0101C1056.86 103.231 1078.61 124.491 1099.06 124.491Z"
			fill="currentColor"
		/>
		<path
			d="M1027.1 128.711H985.228V126.601L997.399 120.921V12.5132L985.228 7.48228V5.37256H1027.1V7.48228L1014.93 12.5132V120.921L1027.1 126.601V128.711Z"
			fill="currentColor"
		/>
		<path
			d="M916.159 128.711H874.289V126.601L886.461 120.921V12.5132L874.289 7.48228V5.37256H926.383C946.344 5.37256 967.442 15.4343 967.442 36.5316C967.442 53.8963 953.485 66.0678 933.037 68.989L965.981 120.921L981.561 126.601V128.711H935.471V126.601L946.994 122.057L914.536 70.6119H903.988V120.921L916.159 126.601V128.711ZM903.988 12.3509V63.6335H920.379C938.555 63.6335 950.239 54.3832 950.239 36.8562C950.239 18.0309 936.445 12.3509 920.379 12.3509H903.988Z"
			fill="currentColor"
		/>
		<path
			d="M858.886 128.711H779.041V126.601L791.212 120.921V12.5132L779.041 7.48228V5.37256H857.263L862.943 30.527H860.347L847.688 12.0263H808.739V59.9009H834.705L839.736 46.1065H843.469V80.5113H839.736L834.705 66.717H808.739V121.245H849.311L861.969 103.556H864.566L858.886 128.711Z"
			fill="currentColor"
		/>
		<path
			d="M741.029 128.711H699.159V126.601L711.331 120.921V12.0263H682.444L670.922 30.527H667.676L673.356 5.37256H766.671L772.351 30.527H769.267L757.583 12.0263H728.858V120.921L741.029 126.601V128.711Z"
			fill="currentColor"
		/>
		<path
			d="M590.87 128.711H559.224V126.601L571.396 120.921V12.5132L559.224 7.48228V5.37256H579.997L642.315 93.1697V12.5132L630.144 7.48228V5.37256H661.79V7.48228L649.618 12.5132V128.711H644.587L578.861 36.5316V120.921L590.87 126.601V128.711Z"
			fill="currentColor"
		/>
		<path
			d="M547.686 128.711H505.816V126.601L517.987 120.921V12.5132L505.816 7.48228V5.37256H547.686V7.48228L535.514 12.5132V120.921L547.686 126.601V128.711Z"
			fill="currentColor"
		/>
		<path
			d="M353.009 128.755V3.05029H398.719C417.121 3.05029 431.01 8.73484 440.386 20.1039C449.763 31.473 454.451 46.8858 454.451 66.3421C454.451 85.6813 449.587 100.918 439.859 112.053C430.131 123.188 416.007 128.755 397.489 128.755H353.009ZM368.832 114.866H396.961C424.505 114.866 438.277 98.6913 438.277 66.3421C438.277 33.2897 424.915 16.7635 398.192 16.7635H368.832V114.866Z"
			fill="currentColor"
		/>
		<path
			d="M231.109 128.755V3.05029H247.811L305.125 90.4282L314.267 106.603H314.619V3.05029H329.387V128.755H313.212L255.546 41.2012L246.228 25.5541H245.877V128.755H231.109Z"
			fill="currentColor"
		/>
		<path
			d="M107.085 128.755L153.323 3.05029H171.08L217.494 128.755H200.265L186.903 90.4282H136.797L123.26 128.755H107.085ZM156.312 35.3995L141.368 77.594H182.508L168.091 35.3995L162.465 17.6426H162.114C159.887 24.675 157.953 30.594 156.312 35.3995Z"
			fill="currentColor"
		/>
		<path
			d="M53.6223 131.216C36.7444 131.216 23.7344 127.055 14.5923 118.734C5.56734 110.412 0.703243 99.5703 0 86.2087H15.4713C17.5811 107.775 30.5325 118.558 54.3255 118.558C63.3505 118.558 70.5587 116.565 75.9502 112.58C81.459 108.478 84.2133 102.618 84.2133 94.9992C84.2133 91.6002 83.5687 88.6114 82.2794 86.0329C80.9901 83.4543 79.4078 81.3446 77.5325 79.7037C75.7744 78.0628 73.0787 76.5391 69.4452 75.1326C65.8118 73.7261 62.4128 72.6127 59.2482 71.7922C56.2008 70.9718 51.9814 69.9755 46.5898 68.8034C40.1434 67.3969 34.8105 65.9904 30.5911 64.584C26.3716 63.0603 22.1522 61.0092 17.9327 58.4306C13.7132 55.852 10.5486 52.5702 8.43891 48.5852C6.44639 44.4829 5.45013 39.5602 5.45013 33.8171C5.45013 23.5029 9.31797 15.4156 17.0536 9.55521C24.9065 3.57765 35.2794 0.588867 48.1721 0.588867C76.4191 0.588867 92.3006 13.6575 95.8168 39.7947H80.8729C79.7009 30.8869 76.3605 24.2061 70.8517 19.7522C65.343 15.1812 57.9003 12.8956 48.5238 12.8956C39.8504 12.8956 32.9352 14.6537 27.7781 18.1699C22.7382 21.6862 20.2182 26.6675 20.2182 33.1138C20.2182 35.9268 20.7457 38.4468 21.8005 40.6737C22.9726 42.7834 24.4377 44.6001 26.1958 46.1238C28.0711 47.5303 30.4739 48.8196 33.404 49.9917C36.4514 51.1637 39.4402 52.16 42.3704 52.9805C45.3006 53.6837 48.8754 54.4455 53.0948 55.266C58.9552 56.4381 63.7607 57.5515 67.5113 58.6064C71.2619 59.5441 75.4228 61.0091 79.9939 63.0017C84.565 64.9942 88.0812 67.2797 90.5425 69.8583C93.1211 72.4369 95.2894 75.8359 97.0475 80.0553C98.9228 84.1576 99.8605 88.9631 99.8605 94.4718C99.8605 105.958 95.5824 114.983 87.0263 121.547C78.5874 127.993 67.4527 131.216 53.6223 131.216Z"
			fill="currentColor"
		/>
	</svg>
{/snippet}

{#snippet sandInteriorsMobile()}
	<svg
		width="100%"
		height="100%"
		viewBox="0 0 132 46"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M125.368 45.0702C122.415 45.0702 120.263 43.7939 118.736 42.1422L120.388 37.2622H121.039C120.864 38.5635 120.738 39.3643 120.738 40.015C120.738 43.1933 123.141 44.1943 125.343 44.1943C128.321 44.1943 130.323 43.0681 130.323 40.6156C130.323 38.2382 128.421 37.7377 125.318 36.8117L124.592 36.5865C121.714 35.7606 119.662 33.9838 119.662 30.9557C119.662 27.7024 121.965 25.5752 125.468 25.5752C128.196 25.5752 130.373 26.8515 131.199 27.6023L129.673 31.9317H129.022C129.172 31.0058 129.297 30.6304 129.297 30.28C129.397 27.5522 127.545 26.401 125.318 26.401C123.166 26.401 121.239 27.4521 121.239 29.5042C121.239 31.7816 123.591 32.5574 125.769 33.158L126.344 33.3081C128.847 34.0088 132 34.9848 132 39.064C132 42.943 129.197 45.0702 125.368 45.0702Z"
			fill="currentColor"
		/>
		<path
			d="M108.281 44.7949H101.824V44.4696L103.701 43.5937V26.8765L101.824 26.1007V25.7754H109.857C112.936 25.7754 116.189 27.327 116.189 30.5803C116.189 33.2581 114.037 35.135 110.884 35.5854L115.964 43.5937L118.366 44.4696V44.7949H111.259V44.4696L113.036 43.7688L108.031 35.8357H106.404V43.5937L108.281 44.4696V44.7949ZM106.404 26.8515V34.7596H108.932C111.734 34.7596 113.536 33.3331 113.536 30.6304C113.536 27.7274 111.409 26.8515 108.932 26.8515H106.404Z"
			fill="currentColor"
		/>
		<path
			d="M90.9105 45.0702C86.2056 45.0702 82.2266 41.041 82.2266 35.4103C82.2266 29.5042 86.6311 25.5752 91.3609 25.5752C96.1408 25.5752 100.27 29.6043 100.27 35.11C100.27 40.8909 95.7154 45.0702 90.9105 45.0702ZM91.7613 44.1442C94.7394 44.1442 97.0918 41.6166 97.0918 36.136C97.0918 29.7295 94.339 26.5011 90.8354 26.5011C88.3328 26.5011 85.2547 28.5282 85.2547 34.5094C85.2547 40.8659 88.6081 44.1442 91.7613 44.1442Z"
			fill="currentColor"
		/>
		<path
			d="M80.6646 44.7949H74.208V44.4696L76.0849 43.5937V26.8765L74.208 26.1007V25.7754H80.6646V26.1007L78.7877 26.8765V43.5937L80.6646 44.4696V44.7949Z"
			fill="currentColor"
		/>
		<path
			d="M63.5572 44.7949H57.1006V44.4696L58.9775 43.5937V26.8765L57.1006 26.1007V25.7754H65.1338C68.212 25.7754 71.4653 27.327 71.4653 30.5803C71.4653 33.2581 69.3131 35.135 66.1599 35.5854L71.2401 43.5937L73.6425 44.4696V44.7949H66.5353V44.4696L68.3121 43.7688L63.3069 35.8357H61.6803V43.5937L63.5572 44.4696V44.7949ZM61.6803 26.8515V34.7596H64.2079C67.0107 34.7596 68.8126 33.3331 68.8126 30.6304C68.8126 27.7274 66.6854 26.8515 64.2079 26.8515H61.6803Z"
			fill="currentColor"
		/>
		<path
			d="M54.7247 44.7949H42.4121V44.4696L44.289 43.5937V26.8765L42.4121 26.1007V25.7754H54.4745L55.3504 29.6544H54.95L52.998 26.8014H46.9918V34.184H50.9959L51.7717 32.0568H52.3473V37.3623H51.7717L50.9959 35.2351H46.9918V43.6437H53.2482L55.2002 40.9159H55.6006L54.7247 44.7949Z"
			fill="currentColor"
		/>
		<path
			d="M36.5509 44.7949H30.0942V44.4696L31.9712 43.5937V26.8014H27.5166L25.7398 29.6544H25.2393L26.1152 25.7754H40.5049L41.3808 29.6544H40.9053L39.1035 26.8014H34.6739V43.5937L36.5509 44.4696V44.7949Z"
			fill="currentColor"
		/>
		<path
			d="M13.3956 44.7949H8.51562V44.4696L10.3925 43.5937V26.8765L8.51562 26.1007V25.7754H11.7189L21.3288 39.3143V26.8765L19.4518 26.1007V25.7754H24.3318V26.1007L22.4549 26.8765V44.7949H21.6791L11.5437 30.5803V43.5937L13.3956 44.4696V44.7949Z"
			fill="currentColor"
		/>
		<path
			d="M6.73592 44.7949H0.279297V44.4696L2.15622 43.5937V26.8765L0.279297 26.1007V25.7754H6.73592V26.1007L4.85899 26.8765V43.5937L6.73592 44.4696V44.7949Z"
			fill="currentColor"
		/>
		<path
			d="M54.4365 20.1296V0.745117H61.4854C64.323 0.745117 66.4648 1.62171 67.9108 3.3749C69.3567 5.12808 70.0796 7.50482 70.0796 10.5051C70.0796 13.4873 69.3296 15.837 67.8294 17.554C66.3293 19.2711 64.1513 20.1296 61.2956 20.1296H54.4365ZM56.8765 17.9878H61.2143C65.4617 17.9878 67.5854 15.4936 67.5854 10.5051C67.5854 5.40823 65.525 2.85979 61.4041 2.85979H56.8765V17.9878Z"
			fill="currentColor"
		/>
		<path
			d="M35.6387 20.1296V0.745117H38.2142L47.0525 14.2193L48.4622 16.7136H48.5165V0.745117H50.7938V20.1296H48.2996L39.4071 6.62823L37.9702 4.21534H37.916V20.1296H35.6387Z"
			fill="currentColor"
		/>
		<path
			d="M16.5137 20.1296L23.6439 0.745117H26.3821L33.5395 20.1296H30.8826L28.8221 14.2193H21.0955L19.0079 20.1296H16.5137ZM24.1048 5.73356L21.8003 12.2402H28.1443L25.9212 5.73356L25.0537 2.99534H24.9995C24.656 4.07979 24.3578 4.99253 24.1048 5.73356Z"
			fill="currentColor"
		/>
		<path
			d="M8.26889 20.5093C5.66623 20.5093 3.66 19.8677 2.25022 18.5844C0.858519 17.3011 0.108444 15.6293 0 13.5688H2.38578C2.71111 16.8945 4.7083 18.5573 8.37734 18.5573C9.76904 18.5573 10.8806 18.25 11.712 17.6355C12.5615 17.0029 12.9862 16.0992 12.9862 14.9244C12.9862 14.4003 12.8868 13.9394 12.688 13.5417C12.4892 13.1441 12.2452 12.8188 11.956 12.5657C11.6849 12.3127 11.2692 12.0777 10.7089 11.8608C10.1486 11.644 9.62445 11.4722 9.13645 11.3457C8.66652 11.2192 8.01586 11.0656 7.18445 10.8848C6.19037 10.668 5.368 10.4511 4.71734 10.2342C4.06667 9.99921 3.416 9.68291 2.76534 9.28528C2.11467 8.88765 1.62667 8.38158 1.30133 7.76706C0.994075 7.13447 0.840445 6.37536 0.840445 5.48973C0.840445 3.89921 1.43689 2.65209 2.62978 1.74839C3.84074 0.826612 5.4403 0.365723 7.42845 0.365723C11.7843 0.365723 14.2333 2.38098 14.7756 6.4115H12.4711C12.2904 5.03787 11.7753 4.00765 10.9258 3.32084C10.0763 2.61595 8.9286 2.2635 7.48267 2.2635C6.14519 2.2635 5.07882 2.53461 4.28356 3.07684C3.50637 3.61906 3.11778 4.38721 3.11778 5.38128C3.11778 5.81506 3.19911 6.20365 3.36178 6.54706C3.54252 6.87239 3.76845 7.15254 4.03956 7.3875C4.32874 7.60439 4.69926 7.80321 5.15111 7.98395C5.62104 8.16469 6.08193 8.31832 6.53378 8.44484C6.98563 8.55328 7.53689 8.67076 8.18756 8.79728C9.09126 8.97802 9.8323 9.14973 10.4107 9.31239C10.989 9.45699 11.6307 9.68291 12.3356 9.99017C13.0405 10.2974 13.5827 10.6499 13.9622 11.0475C14.3599 11.4451 14.6942 11.9693 14.9653 12.62C15.2545 13.2525 15.3991 13.9936 15.3991 14.8431C15.3991 16.6143 14.7394 18.006 13.42 19.0182C12.1187 20.0123 10.4016 20.5093 8.26889 20.5093Z"
			fill="currentColor"
		/>
	</svg>
{/snippet}
