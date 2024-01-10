<script lang="ts">
  import { gsap } from "gsap";
  import { Draggable } from "gsap/dist/Draggable";

  import { scale } from "svelte/transition";

  import { OpenShells, removeShell } from "$lib/stores/shell";
  import type { AppId } from "$lib/stores/shell";

  export let id: AppId;

  $: shell = $OpenShells.find((shell) => shell.id === id);

  const drag = (node: HTMLElement) => {
    gsap.registerPlugin(Draggable);
    const drag = new Draggable(node, { bounds: "body" });
    // drag.disable();

    // const nav = node.querySelector("#nav");
    // nav?.addEventListener("mouseenter", drag.enable);
    // nav?.addEventListener("mouseleave", drag.disable);

    return {
      destroy() {
        drag.kill();
      },
    };
  };
</script>

<div
  use:drag
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[680px] bg-white pt-10 rounded-lg shadow-sm border border-gray-200"
  style="z-index: {shell?.zIndex}"
  transition:scale={{ start: 0.95, duration: 200 }}
>
  <div
    id="nav"
    class="absolute top-0 h-14 left-4 w-full flex items-center gap-2"
  >
    <button
      on:click={() => removeShell(id)}
      class="shrink-0 w-3 h-3 rounded-full bg-red-500"
    />
    <div class="shrink-0 w-3 h-3 rounded-full bg-yellow-500"></div>
    <div class="shrink-0 w-3 h-3 rounded-full bg-green-500"></div>
  </div>

  <slot />
</div>
