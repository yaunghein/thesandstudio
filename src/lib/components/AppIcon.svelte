<script lang="ts">
  import { browser } from "$app/environment";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { twMerge as twm } from "tailwind-merge";
  import type { AppIcon } from "$lib/types";

  export let icon: AppIcon;
  export let isInDock = false;
</script>

<!-- {#if icon.label === "SAND Scan"} -->
<button
  on:click={icon.handleClick}
  class="overflow-hidden relative group text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 border-3 border-white-90 dark:border-light-20 grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square"
>
  <!-- <img
        src={icon.icon}
        class="group-hover:scale-[1.4] group-hover:-translate-y-[100%] transition duration-1000"
        alt=""
      /> -->
  <div
    class="absolute inset-0 bg-light-10 dark:bg-light-100 opacity-0 group-hover:opacity-100 transition duration-500 ease-out"
  />

  <div
    class="w-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-[1.4] group-hover:-translate-y-32 group-hover:invert transition duration-500 ease-out"
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
        controlLayout=""
      />
    {:else}
      <svelte:component this={icon.image} />
    {/if}
  </div>

  <div
    class={twm(
      "w-20 text-left group-hover:leading-[1.2] origin-right font-sand-bold absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition duration-500 ease-out",
      isInDock ? "text-2xl" : "text-2xl",
    )}
  >
    {icon.label}
  </div>
  <!-- <div
        class={twm(
          "w-20 text-left leading-[0.5] origin-right font-sand-bold absolute left-4 bottom-3  text-light-10 dark:text-light-100",
          isInDock ? "text-2xl" : "text-2xl",
        )}
      >
        {icon.label}
      </div> -->
</button>
