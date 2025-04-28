<script lang="ts">
	import { gsap, Power4 } from 'gsap'
	import { goto } from '$app/navigation'
	import lottie from 'lottie-web'
	import { changeCursorType } from '$lib/stores/cursor'
	import LabelExplorer from '$lib/svgs/LabelExplorer.svelte'
	import { addShell } from '$lib/stores/shell'
	import { openContactTab } from '$lib/stores/finder'
	import ContactFormTubeLabel from '$lib/svgs/ContactFormTubeLabel.svelte'

	const magnify = (node: HTMLElement) => {
		const dock = node
		const apps = dock.querySelectorAll('button')
		let firstIcon = apps[0]

		let min = 140
		let max = 280
		let bound = min * Math.PI

		dock.addEventListener('mousemove', (event) => {
			let offset = dock.getBoundingClientRect().left + firstIcon.offsetLeft
			updateApps(event.clientX - offset)
		})

		dock.addEventListener('mouseleave', () => {
			gsap.to(apps, {
				ease: Power4.easeOut,
				duration: 0.2,
				width: '10rem'
			})
		})

		function updateApps(pointer: number) {
			for (let i = 0; i < apps.length; i++) {
				let icon = apps[i]
				let distance = i * min + min / 2 - pointer
				let scale = 1

				if (-bound < distance && distance < bound) {
					let rad = (distance / min) * 0.5
					scale = 1 + (max / min - 1) * Math.cos(rad)

					/**
					 *  to make the scale smaller
					 * i don't knwo how to modify the codes above, so i add these two lines. lol...
					 */
					scale -= 0.5
					scale = Math.max(scale, 1)
				}

				gsap.to(icon, {
					ease: Power4.easeOut,
					duration: 0.2,
					width: `${10 * scale}rem`
				})
			}
		}
	}

	const playLottieOnHover = (node: HTMLDivElement, path: string) => {
		const player = lottie.loadAnimation({
			container: node,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path
		})
		const handleMouseEnter = () => {
			player.setLoop(true)
			player.play()
		}
		const handleMouseLeave = () => {
			player.stop()
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

	const openInquiryForm = () => {
		addShell({ id: 'finder', zIndex: 65 })
		openContactTab()
	}
</script>

<div
	use:magnify
	use:changeCursorType={{ inType: 'a-chon-lyy', outType: 'normal' }}
	class="fade-up fixed bottom-16 left-1/2 z-[2] flex h-36 -translate-x-1/2 items-end gap-4 rounded-3xl border-2 border-white p-4 dark:border-light-12"
>
	<div
		class="absolute inset-0 h-full w-full rounded-[1.3rem] bg-light-90 opacity-sand dark:bg-black"
	></div>
	<!-- ########## Child ########## -->
	<button
		onclick={() => addShell({ id: 'child', zIndex: 65 })}
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-sand-blue dark:border-light-12 dark:hover:border-sand-blue"
	>
		<span class="sr-only">Child</span>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-sand-blue group-hover:opacity-100 dark:bg-black"
		></div>

		<div
			class="scale-1 sand-transition absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-[50%] invert group-hover:-translate-y-[75%] group-hover:scale-[1.6] group-hover:invert-0 dark:invert-0"
		>
			<div
				use:playLottieOnHover={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715936871/lotties/child_un9s0j.json'}
			></div>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-4 w-20 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100"
		>
			CHILD*
		</div>
	</button>

	<!-- ########## Explorer ########## -->
	<button
		onclick={() => addShell({ id: 'finder', zIndex: 65 })}
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-light-10 dark:border-light-12 dark:hover:border-white"
	>
		<span class="sr-only">Explorer 2000</span>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-light-100"
		></div>

		<div
			class="sand-transition absolute left-1/2 top-[50%] w-32 -translate-x-1/2 -translate-y-[50%] scale-[1.2] invert group-hover:-translate-y-[92%] group-hover:scale-[1.8] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<div
				use:playLottieOnHover={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715936923/lotties/explorer-2000_wpzh6k.json'}
			></div>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-4 w-20 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:-translate-y-[6%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
		>
			<div class="w-28">
				<LabelExplorer />
			</div>
		</div>
	</button>

	<!-- ########## Background ########## -->
	<button
		onclick={() => addShell({ id: 'backgrounds', zIndex: 65 })}
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-light-10 dark:border-light-12 dark:hover:border-white"
	>
		<span class="sr-only">Backgrounds</span>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-light-100"
		></div>

		<div
			class="sand-transition absolute left-1/2 top-[50%] w-32 -translate-x-1/2 -translate-y-[50%] scale-[1.4] invert group-hover:-translate-y-[73%] group-hover:scale-[1.8] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<div
				use:playLottieOnHover={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715936952/lotties/backgrounds_avq1k3.json'}
			></div>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-4 w-20 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
		>
			<div
				class="sand-transition absolute bottom-3 left-0 w-20 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[52%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
			>
				Backgrounds
			</div>
		</div>
	</button>

	<!-- ########## Contact ########## -->
	<button
		onclick={openInquiryForm}
		class="fade-up sand-transition group relative aspect-square w-40 select-none overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-light-10 dark:border-light-12 dark:hover:border-white"
	>
		<span class="sr-only">Contact</span>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-light-100"
		></div>

		<div
			class="sand-transition absolute left-0 top-0 w-32 origin-top-left scale-[1.1] invert group-hover:scale-[1.5] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<div
				use:playLottieOnHover={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715936957/lotties/contact_ja4oy7.json'}
			></div>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-1/2 w-44 origin-right -translate-x-1/2 translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
		>
			<div
				class="sand-transition absolute bottom-3 left-1/2 mx-auto w-44 origin-right -translate-x-1/2 translate-y-[100%] text-center font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[25%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
			>
				<ContactFormTubeLabel />
			</div>
		</div>
	</button>
</div>

<!-- <div
  class="fixed h-[1px] w-full right-0 left-0 bottom-80 bg-red-500 z-[2000]"
/>
<div
  class="fixed h-[1px] w-full right-0 left-0 bottom-[17.5rem] bg-red-500 z-[2000]"
/>
<div
  class="fixed h-[1px] w-full right-0 left-0 bottom-24 bg-red-500 z-[2000]"
/>
<div
  class="fixed h-[1px] w-full right-0 left-0 bottom-20 bg-red-500 z-[2000]"
/> -->
