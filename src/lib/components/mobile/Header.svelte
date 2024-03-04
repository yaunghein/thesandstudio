<script>
  import LogoShape from "$lib/svgs/LogoShape.svelte";
  import Sand from "$lib/svgs/mobile/Sand.svelte";
</script>

<header class="mt-5 px-3 bg-white dark:bg-black relative py-[2px]">
  <button
    class="sand-transition flex items-center justify-between gap-1 border-2 border-black dark:border-white rounded-full px-[5px] py-[2px]"
  >
    <div class="text-lg font-sand-mobile-bold mt-[2px] leading-[0.6]">
      LOGIN
    </div>
    <div class="w-4"><LogoShape /></div>
  </button>

  <div
    class="absolute w-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl leading-none"
  >
    <Sand />
  </div>
</header>
