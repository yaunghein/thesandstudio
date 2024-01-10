<script lang="ts">
  import { twMerge as twm } from "tailwind-merge";
  import type { AppIcon } from "$lib/types";

  export let data: AppIcon;
  export let isInDock = false;
</script>

<button
  on:click={data.handleClick}
  class="overflow-hidden relative group text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 border-3 border-white-90 dark:border-light-20 grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square"
>
  <div class="icon-wrapper w-36 aspect-square group-hover:opacity-0">
    <svelte:component this={data.icon} />
  </div>

  <div
    class="w-36 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-[2.5] transition"
  >
    <svelte:component this={data.icon} />
  </div>

  <div
    class="absolute inset-0 bg-light-10 dark:bg-light-100 opacity-0 group-hover:opacity-100 transition"
  />

  <div
    class={twm(
      "w-32 text-left leading-none origin-right font-sand-bold absolute left-4 bottom-3 translate-y-[200%] text-light-100 dark:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition",
      isInDock ? "text-2xl" : "text-lg",
    )}
  >
    {data.label}
  </div>
</button>
