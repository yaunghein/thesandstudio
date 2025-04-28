<script lang="ts">
	import PixelBorder from './PixelBorder.svelte'
	import ExplorerRow from './ExplorerRow.svelte'
	import { Files } from '$lib/stores/explorer'
</script>

<div data-slide-name="explorer" class="swiper-slide h-full w-full shrink-0 overflow-scroll px-4">
	<div class="h-full w-full bg-white dark:bg-black">
		<div class="relative h-full overflow-hidden rounded-[1rem]">
			<PixelBorder />
			<div
				style="overscroll-behavior: none;"
				class="hide-scrollbar relative h-full w-full overflow-scroll p-4"
			>
				<h1 class="mb-3 font-sand-mobile-bold text-5xl">Sand Explorer 1000</h1>
				<div class="-mx-4">
					<ExplorerRow files={$Files} />
				</div>
			</div>
		</div>
	</div>
</div>
