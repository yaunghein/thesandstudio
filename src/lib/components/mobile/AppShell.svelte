<script lang="ts">
	import MobileDock from '$lib/components/mobile/Dock.svelte'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<div class="relative mx-auto h-[100dvh] bg-black p-1 font-sand-mobile-regular">
	<div
		class="sand-transition relative h-full overflow-hidden bg-white text-black dark:bg-black dark:text-white"
	>
		<!-- <div
    class="relative overflow-hidden h-full rounded-[45px] bg-white dark:bg-black text-black dark:text-white sand-transition"
  > -->
		{@render children?.()}
	</div>
	<MobileDock />
</div>
