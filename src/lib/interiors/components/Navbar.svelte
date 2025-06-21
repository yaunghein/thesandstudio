<script lang="ts">
	import Logo from '$lib/interiors/components/Logo.svelte'
	import Door from '$lib/interiors/components/Door.svelte'
</script>

<header
	class="sticky top-0 z-10 flex h-[3.6rem] items-center justify-center bg-interior-light text-interior-brand sm:h-[12.35rem]"
>
	<div class="mx-5 flex w-full items-center justify-between sm:mx-[4rem]">
		<div class="aspect-square w-8 sm:w-[7.2rem]">
			<Logo />
		</div>
		<div class="aspect-square w-8 translate-y-[0.1rem] sm:w-[7.2rem] sm:translate-y-[0.2rem]">
			<Door />
		</div>
	</div>
</header>
