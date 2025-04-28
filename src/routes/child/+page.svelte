<script>
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
</script>

<div class="relative flex h-[100dvh] flex-col bg-light-10 p-3 pt-0 text-light-100">
	<Navbar />
	<div class="relative grow overflow-auto rounded-3xl bg-sand-blue text-light-100">
		<div class="grid h-full w-full place-items-center">
			<div class="flex flex-col items-center gap-6 font-medium">
				<div class="text-5xl">
					<p class="-ml-56 leading-tight">the prodigal child &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</p>
					<p class="-ml-36 leading-tight">will return</p>
				</div>
				<p class="-ml-16 mb-10 flex max-w-[16rem] items-center justify-center text-center text-xl">
					art, design, refined garments and contemporary culture.
				</p>
				<button
					class="border-2 border-light-100 px-24 py-4 text-3xl"
					onclick={() => window.history.back()}
				>
					Back
				</button>
			</div>
		</div>
	</div>

	<Footer />
</div>
