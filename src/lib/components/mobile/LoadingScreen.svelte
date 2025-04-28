<script lang="ts">
	import { onMount } from 'svelte'
	import gsap from 'gsap'

	onMount(() => {
		const progressTl = gsap.timeline({
			defaults: { ease: 'Power4.out', duration: 1 },
			onComplete: () => {
				fetch('/api/set-cookie', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						key: 'sand-showed-loading-screen',
						value: 'yes',
						age: 600 // 10 minutes
					})
				})
				document.querySelector('.mobile-loading')?.remove()
			}
		})
		progressTl
			.to('.mobile-loading_progress', { width: '30%', delay: 1 })
			.to('.mobile-loading_progress', { width: '50%', delay: 1 })
			.to('.mobile-loading_progress', { width: '75%', delay: 0 })
			.to('.mobile-loading_progress', { width: '100%', delay: 2 })
			.to('.mobile-loading', { opacity: 0 })
	})
</script>

<div
	class="mobile-loading fixed inset-0 z-[60] flex flex-col items-center justify-between bg-white text-black dark:bg-black dark:text-white"
>
	<div class="h-1/3">
		<div class="mobile-loading_title mt-3 font-sand-mobile-regular">SAND Lite 1000</div>
	</div>
	<div class="-mt-20 flex h-1/3 flex-col items-center justify-center gap-5">
		<img
			class="mobile-loading_image relative aspect-square w-[9.5rem] rotate-180 dark:invert"
			src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943575/general/mobile-not-works_onymkk.gif"
			alt=""
		/>
		<div class="mobile-loading_bar h-[0.19rem] w-[90%] max-w-[8.5rem] bg-light-90 dark:bg-light-12">
			<div class="mobile-loading_progress h-full w-0 bg-black dark:bg-white"></div>
		</div>
	</div>
	<div class="flex h-1/3 flex-col items-center justify-center">
		<div class="mobile-loading_warning text-center font-sand-mobile-bold text-2xl leading-[0.75]">
			For the complete experience<br /> and access to all features,<br /> please visit our desktop website.
		</div>
	</div>
</div>
