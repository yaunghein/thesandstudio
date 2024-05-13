<script lang="ts">
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import { Backgrounds, changeBackground } from "$lib/stores/background";
  import { changeCursorType } from "$lib/stores/cursor";
  import drag from "$lib/utils/drag";
  import ButtonClose from "./ButtonClose.svelte";

  $: shell = $OpenShells.find((shell) => shell.id === "backgrounds");
  $: index = $OpenShells.findIndex((shell) => shell.id === "backgrounds");

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };
</script>

<div
  use:drag
  use:position
  in:scale={{ start: 0.9, duration: 200, easing: backOut }}
  out:scale={{ start: 0.9, duration: 200, easing: backIn }}
  class="overflow-hidden fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65rem] h-[43.2rem] rounded-3xl text-light-100 border-2 border-white dark:border-light-12"
  style="z-index: {shell?.zIndex}"
>
  <div class="transparent-layer" />

  <div class="absolute inset-0 flex gap-10 -ml-[0.4rem] opacity-sand">
    {#each [...Array(100).keys()] as _}
      <div class="shrink-0 w-line bg-white dark:bg-light-12 h-full" />
    {/each}
  </div>

  <div class="relative flex flex-col h-full overflow-hidden">
    <div class="relative h-20 grid place-items-center shrink-0">
      <div class="absolute top-5 left-6">
        <ButtonClose on:close={() => removeShell("backgrounds")} />
      </div>
      <p class="text-2xl text-black dark:text-light-100">Backgrounds</p>
    </div>

    <div
      class="grow overflow-auto border-2 -m-[0.1875rem] border-white dark:border-light-12 rounded-3xl p-6 grid grid-cols-2 gap-3"
    >
      {#each $Backgrounds as bg}
        <button on:click={() => changeBackground(bg.name)}>
          <div
            use:changeCursorType={{ inType: bg.name, outType: "normal" }}
            class="relative rounded-xl overflow-hidden"
          >
            <!-- <div
            use:changeCursorType={{ inType: bg.name, outType: "normal" }}
            class="relative rounded-xl aspect-[1.91/1] overflow-hidden"
          > -->
            <img
              class="object-cover scale-[1.01] dark:hidden"
              src={bg.thumbnail.light}
              alt={bg.name}
            />
            <img
              class="object-cover scale-[1.01] hidden dark:block"
              src={bg.thumbnail.dark}
              alt={bg.name}
            />
          </div>
        </button>
      {/each}
    </div>
  </div>
</div>
