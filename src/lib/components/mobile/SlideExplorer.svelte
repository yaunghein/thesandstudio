<script lang="ts">
  import PixelBorder from "./PixelBorder.svelte";
  import ExplorerRow from "./ExplorerRow.svelte";
  import { Files } from "$lib/stores/explorer";
</script>

<div class="swiper-slide h-full overflow-scroll shrink-0 px-4">
  <div class="h-full bg-white dark:bg-black w-full">
    <div class="h-full relative overflow-hidden rounded-[1rem]">
      <PixelBorder />
      <div class="p-4 w-full h-full relative overflow-scroll hide-scrollbar">
        <h1 class="font-sand-mobile-bold text-5xl mb-3">Sand Explorer 1000</h1>
        <div class="-mx-4">
          <ExplorerRow files={$Files} />
        </div>
      </div>
    </div>
  </div>
</div>
