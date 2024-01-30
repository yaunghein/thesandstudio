<script lang="ts">
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import { twMerge as twm } from "tailwind-merge";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import { Backgrounds } from "$lib/stores/background";
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
  class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64.1rem] h-[40rem] rounded-3xl text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 border-2 border-light-80 dark:border-light-40"
  style="z-index: {shell?.zIndex}"
>
  <div class="flex flex-col h-full overflow-hidden">
    <div class="relative h-16 grid place-items-center shrink-0">
      <div class="absolute top-3 left-6">
        <ButtonClose on:close={() => removeShell("backgrounds")} />
      </div>
      <p class="text-lg font-sand-medium">Change Background</p>
    </div>

    <div
      class="grow overflow-auto border-2 -m-[0.1875rem] border-light-80 dark:border-light-40 rounded-3xl p-6 grid grid-cols-2 gap-x-3 gap-y-6"
    >
      {#each $Backgrounds as bg}
        <button
          on:click={() => {
            Backgrounds.set(
              $Backgrounds.map((item) =>
                item.id === bg.id
                  ? { ...item, isOpen: true }
                  : { ...item, isOpen: false },
              ),
            );
          }}
        >
          <p class="text-left text-lg font-sand-medium leading-tight mb-3">
            {bg.name}
          </p>
          <div
            class={twm(
              "rounded-xl aspect-[1.91/1] overflow-hidden",
              bg.name === "Solid" &&
                "border-2 border-light-80 dark:border-light-40 ",
            )}
          >
            <img
              class="object-cover scale-105"
              src={bg.thumbnail}
              alt={bg.name}
            />
          </div>
        </button>
      {/each}
    </div>
  </div>
</div>
