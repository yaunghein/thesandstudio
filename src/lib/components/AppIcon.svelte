<script lang="ts">
  import { browser } from "$app/environment";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { twMerge as twm } from "tailwind-merge";
  import type { AppIcon } from "$lib/types";

  export let icon: AppIcon;
  export let isInDock = false;
</script>

<button
  on:click={icon.handleClick}
  class="overflow-hidden relative group text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 border-2 border-white-90 dark:border-light-20 grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square"
>
  <div
    class="absolute inset-0 bg-light-10 dark:bg-light-100 opacity-0 group-hover:opacity-100 transition duration-500 ease-out"
  />

  <div
    class="w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.4] group-hover:-translate-y-32 invert dark:invert-0 group-hover:invert-0 dark:group-hover:invert transition duration-500 ease-out"
  >
    {#if icon.lottie && browser}
      <LottiePlayer
        src={icon.lottie}
        autoplay={true}
        loop={true}
        renderer="svg"
        background="transparent"
        width="100%"
        height="100%"
        controls=""
        controlsLayout=""
      />
    {:else}
      <div
        class="icon-wrapper scale-100 invert dark:invert-0 group-hover:scale-[3] transition duration-500 ease-out"
      >
        <svelte:component this={icon.image} />
      </div>
    {/if}
  </div>

  <div
    class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-bold absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition duration-500 ease-out"
  >
    {icon.label}
  </div>
</button>
