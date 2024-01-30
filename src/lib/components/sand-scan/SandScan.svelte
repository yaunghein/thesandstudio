<script lang="ts">
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import drag from "$lib/utils/drag";
  import Scanimation from "./Scanimation.svelte";
  import UsageGuide from "./UsageGuide.svelte";
  import ButtonClose from "../ButtonClose.svelte";

  $: shell = $OpenShells.find((shell) => shell.id === "sand-scan");
  $: index = $OpenShells.findIndex((shell) => shell.id === "sand-scan");

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };

  let isUsageGuideOpen = false;
</script>

<div
  use:position
  use:drag
  in:scale={{ start: 0.9, duration: 200, easing: backOut }}
  out:scale={{ start: 0.9, duration: 200, easing: backIn }}
  class="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-shell-desktop h-shell-desktop rounded-3xl text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden"
  style="z-index: {shell?.zIndex}"
>
  <div class="transparent-layer" />

  <div class="absolute inset-0 flex gap-10 -ml-[0.4rem] opacity-sand">
    {#each [...Array(100).keys()] as _}
      <div class="shrink-0 w-line h-full bg-white dark:bg-light-12" />
    {/each}
  </div>

  <div class="relative flex flex-col h-full overflow-hidden">
    <div class="relative h-20 grid place-items-center shrink-0">
      <div class="absolute top-5 left-6">
        <ButtonClose on:close={() => removeShell("sand-scan")} />
      </div>
      <p class="text-2xl">SAND Scan</p>

      {#if isUsageGuideOpen}
        <button
          on:click={() => (isUsageGuideOpen = false)}
          class="shrink-0 w-40 h-9 rounded-2xl bg-light-10 dark:bg-light-100 absolute top-[0.8rem] right-4 grid place-items-center text-lg font-sand-bold text-light-100 dark:text-black"
        >
          Back
        </button>
      {:else}
        <button
          on:click={() => (isUsageGuideOpen = true)}
          class="shrink-0 w-40 h-12 rounded-2xl bg-sand-yellow absolute top-[0.92rem] right-4 grid place-items-center text-xl text-black border-2 border-white dark:border-light-12"
        >
          Usage Guide
        </button>
      {/if}
    </div>
    <div
      class="grow overflow-auto border-2 -m-[0.1875rem] border-white dark:border-light-12 rounded-3xl"
    >
      {#if isUsageGuideOpen}
        <UsageGuide />
      {:else}
        <Scanimation />
      {/if}
    </div>
  </div>
</div>
