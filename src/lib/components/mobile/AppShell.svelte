<script lang="ts">
  import MobileDock from "$lib/components/mobile/Dock.svelte";
</script>

<div
  class="h-[100dvh] p-1 relative pb-12 mx-auto bg-black font-sand-mobile-regular"
>
  <div
    class="relative overflow-hidden h-full rounded-[45px] bg-white dark:bg-black text-black dark:text-white sand-transition"
  >
    <slot />
  </div>
  <MobileDock />
</div>
