<script lang="ts">
  import { gsap } from "gsap";
  import { Draggable } from "gsap/dist/Draggable";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import Scanimation from "./Scanimation.svelte";
  import UsageGuide from "./UsageGuide.svelte";

  $: shell = $OpenShells.find((shell) => shell.id === "sand-scan");
  $: index = $OpenShells.findIndex((shell) => shell.id === "sand-scan");

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };

  let isUsageGuideOpen = false;

  const drag = (node: HTMLDivElement) => {
    gsap.registerPlugin(Draggable);
    const drag = new Draggable(node, {
      bounds: "body",
      allowEventDefault: true,
      allowNativeTouchScrolling: true,
      onPress: function (event) {
        if (event.target.matches(".non-draggable")) {
          this.disable();
          setTimeout(() => this.enable(), 0); // hehe this is working, smell tho
        }
      },
    });
    drag.disable();
    node.addEventListener("mouseenter", drag.enable);
    node.addEventListener("mouseleave", drag.disable);
    return {
      destroy() {
        drag.kill();
      },
    };
  };
</script>

<div
  use:position
  use:drag
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64.1rem] h-[40rem] rounded-3xl text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 border-3 border-light-80 dark:border-light-40"
  style="z-index: {shell?.zIndex}"
>
  <div class="flex flex-col h-full overflow-hidden">
    <div class="relative h-16 grid place-items-center shrink-0">
      <button
        on:click={() => removeShell("sand-scan")}
        class="shrink-0 w-5 h-5 rounded-full bg-sand-red absolute top-[1.35rem] left-6"
      />
      <p class="text-lg font-sand-medium">SAND Scan</p>

      {#if isUsageGuideOpen}
        <button
          on:click={() => (isUsageGuideOpen = false)}
          class="shrink-0 w-40 h-9 rounded-[0.65rem] bg-light-100 absolute top-[0.8rem] right-4 grid place-items-center text-lg font-sand-bold text-light-10"
        >
          Back
        </button>
      {:else}
        <button
          on:click={() => (isUsageGuideOpen = true)}
          class="shrink-0 w-40 h-9 rounded-[0.65rem] bg-sand-yellow absolute top-[0.8rem] right-4 grid place-items-center text-lg font-sand-bold text-light-10"
        >
          Usage Guide
        </button>
      {/if}
    </div>
    <div
      class="grow overflow-auto border-3 -m-[0.1875rem] border-light-80 dark:border-light-40 rounded-3xl"
    >
      {#if isUsageGuideOpen}
        <UsageGuide />
      {:else}
        <Scanimation />
      {/if}
    </div>
  </div>
</div>
