<script lang="ts">
	import Logo from '$lib/interiors/components/Logo.svelte'
	import Door from '$lib/interiors/components/Door.svelte'
</script>

<header
	class="fixed top-0 z-10 flex h-[3.6rem] w-full items-center justify-center text-interior-brand sm:h-[11.5rem]"
>
	<div class="mx-4 flex w-full items-center justify-between sm:mx-[3rem]">
		<div class="aspect-square w-8 sm:w-[6.8rem]">
			<Logo />
		</div>
		<div class="aspect-square w-8 translate-y-[0.1rem] sm:w-[6.8rem] sm:translate-y-[0.2rem]">
			<Door />
		</div>
	</div>
</header>
