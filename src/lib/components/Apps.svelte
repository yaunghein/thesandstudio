<script lang="ts">
	import lottie from 'lottie-web'
	import { addShell } from '$lib/stores/shell'
	import { openArchiveTab, openAboutTab } from '$lib/stores/finder'

	const playLottie = (node: HTMLDivElement, path: string) => {
		lottie.loadAnimation({
			container: node,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path
		})
	}
</script>

<div class="grid grid-cols-2 gap-5">
	<!-- ########## SAND Scan ########## -->
	<button
		onclick={() => addShell({ id: 'sand-scan', zIndex: 65 })}
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-black dark:border-light-12 dark:hover:border-white"
	>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-white"
		></div>
		<div
			class="sand-transition absolute left-1/2 top-[50%] w-28 -translate-x-1/2 -translate-y-[50%] invert group-hover:-translate-y-[125%] group-hover:scale-[1.4] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<img
				src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715763648/app-images/sand-scan_yqwnto.gif"
				alt="Sand Scan Icon"
				class="h-full w-full object-contain"
			/>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-4 w-20 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
		>
			SAND Scan
		</div>
	</button>

	<!-- ########## For All Thingkind ########## -->
	<a
		href="/for-all-thingkind"
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-black dark:border-light-12 dark:hover:border-white"
	>
		<span class="sr-only">For All Thingkind</span>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-white"
		></div>

		<div
			class="sand-transition absolute left-1/2 top-[50%] w-28 -translate-x-1/2 -translate-y-[50%] scale-[1.3] invert group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<div
				use:playLottie={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715763241/lotties/fatk_tdug6t.json'}
			></div>
		</div>
	</a>

	<!-- ########## Works ########## -->
	<a
		href="/works"
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-black dark:border-light-12 dark:hover:border-white"
	>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-white"
		></div>

		<div
			class="sand-transition absolute left-[50%] top-[50%] w-28 -translate-x-1/2 -translate-y-[50%] scale-[1.4] invert group-hover:-translate-x-[20%] group-hover:-translate-y-[90%] group-hover:rotate-[75deg] group-hover:scale-[1.8] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<div
				use:playLottie={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715763270/lotties/works_tyaamm.json'}
			></div>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-4 w-20 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
		>
			Works
		</div>
	</a>

	<!-- ########## Not Works ########## -->
	<a
		href="/not-works"
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-black dark:border-light-12 dark:hover:border-white"
	>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-white"
		></div>

		<div
			class="sand-transition absolute left-[50%] top-[50%] w-28 -translate-x-1/2 -translate-y-[50%] rotate-[180deg] scale-[1] invert group-hover:-translate-x-[0%] group-hover:-translate-y-[90%] group-hover:scale-[1.5] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<img
				src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715763646/app-images/not-works_wnc5c5.gif"
				alt="Not Works"
				class="h-full w-full"
			/>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-4 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
		>
			Not Works
		</div>
	</a>

	<!-- ########## Archives ########## -->
	<button
		onclick={() => {
			addShell({ id: 'finder', zIndex: 65 })
			openArchiveTab()
		}}
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-black dark:border-light-12 dark:hover:border-white"
	>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-white"
		></div>

		<div
			class="sand-transition absolute left-[50%] top-[50%] w-20 -translate-x-1/2 -translate-y-[50%] scale-[1.6] invert group-hover:-translate-y-[120%] group-hover:translate-x-[10%] group-hover:scale-[2.8] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<img
				src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715763640/app-images/archive_jsvdej.gif"
				alt="Archive Icon"
				class="h-full w-full object-contain"
			/>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-4 w-20 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
		>
			Archives
		</div>
	</button>

	<!-- ########## About ########## -->
	<button
		onclick={() => {
			addShell({ id: 'finder', zIndex: 65 })
			openAboutTab()
		}}
		class="fade-up sand-transition group relative grid aspect-square w-40 select-none place-items-center overflow-hidden rounded-3xl border-2 border-white p-2 text-light-100 hover:border-black dark:border-light-12 dark:hover:border-white"
	>
		<div
			class="sand-transition absolute inset-0 bg-light-90 opacity-sand group-hover:bg-black group-hover:opacity-100 dark:bg-black dark:group-hover:bg-white"
		></div>

		<div
			class="sand-transition absolute left-[50%] top-[50%] w-28 -translate-x-1/2 -translate-y-[50%] scale-[1.2] invert group-hover:-translate-x-[14%] group-hover:-translate-y-[95%] group-hover:scale-[2.2] group-hover:invert-0 dark:invert-0 dark:group-hover:invert"
		>
			<div
				use:playLottie={'https://res.cloudinary.com/dlhbpswom/raw/upload/v1715957920/lotties/about_i69vp3.json'}
				class="h-full w-full"
			></div>
		</div>
		<div
			class="sand-transition absolute bottom-3 left-4 w-20 origin-right translate-y-[100%] text-left font-sand-medium text-2xl text-light-100 opacity-0 group-hover:translate-y-[0%] group-hover:leading-[1] group-hover:opacity-100 dark:group-hover:text-light-10"
		>
			About
		</div>
	</button>
</div>
