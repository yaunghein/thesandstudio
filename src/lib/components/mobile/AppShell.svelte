<script lang="ts">
  import MobileDock from "$lib/components/mobile/Dock.svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="h-[100dvh] p-1 relative mx-auto bg-black font-sand-mobile-regular">
  <div
    class="relative overflow-hidden h-full bg-white dark:bg-black text-black dark:text-white sand-transition"
  >
    <!-- <div
    class="relative overflow-hidden h-full rounded-[45px] bg-white dark:bg-black text-black dark:text-white sand-transition"
  > -->
    {@render children?.()}
  </div>
  <MobileDock />
</div>
