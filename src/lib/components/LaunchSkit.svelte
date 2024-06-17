<script lang="ts">
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import VideoPlayer from "svelte-video-player";
  import ButtonClose from "./ButtonClose.svelte";
  import { removeShell, type OpenShell, OpenShells } from "$lib/stores/shell";
  import drag from "$lib/utils/drag";

  $: shell = $OpenShells.find((shell) => shell.id === "launch-skit");
  $: index = $OpenShells.findIndex((shell) => shell.id === "launch-skit");

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };

  onMount(() => {
    setTimeout(() => document.querySelector("video")?.click(), 2000);
    setTimeout(() => document.querySelector("video")?.play(), 4000);
  });
</script>

<div
  use:drag
  use:position
  in:scale={{ start: 0.9, duration: 200, easing: backOut }}
  out:scale={{ start: 0.9, duration: 200, easing: backIn }}
  class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[41.5rem] rounded-3xl text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden"
  style="z-index: {shell?.zIndex}"
>
  <div class="transparent-layer" />

  <div class="absolute inset-0 flex gap-10 -ml-[0.4rem] opacity-sand">
    {#each [...Array(20).keys()] as _}
      <div class="shrink-0 w-line bg-white dark:bg-light-12 h-full" />
    {/each}
  </div>

  <div class="relative flex items-center gap-2 h-20 overflow-hidden pl-6">
    <ButtonClose on:close={() => removeShell("launch-skit")} />
  </div>

  <div
    class="relative rounded-3xl -m-[0.1875rem] border-2 border-white dark:border-light-12 overflow-hidden"
  >
    <div class="w-full aspect-[0.8/1]">
      {#if browser}
        <VideoPlayer
          width="1600"
          height="2000"
          poster="/launch-skit-poster.png"
          source="/launch-skit.mp4"
          color="black"
          timeDisplay={true}
          loop
        />
      {/if}
    </div>
  </div>
</div>
