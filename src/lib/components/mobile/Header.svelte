<script>
  import Sand from "$lib/svgs/mobile/Sand.svelte";
  import PixelBorder from "./PixelBorder.svelte";
</script>

<header class="mx-4 mt-3 relative py-[10px]">
  <PixelBorder />
  <!-- <button
    class="sand-transition flex items-center justify-between gap-1 border-2 border-black dark:border-white rounded-full px-[5px] py-[2px]"
  >
    <div class="text-lg font-sand-mobile-bold mt-[2px] leading-[0.6]">
      LOGIN
    </div>
    <div class="w-4"><LogoShape /></div>
  </button> -->

  <div class="mx-auto w-16 text-3xl leading-none">
    <Sand />
  </div>
</header>
