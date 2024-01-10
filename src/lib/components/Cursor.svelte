<script lang="ts">
  import { onMount } from "svelte";
  import { twMerge as twm } from "tailwind-merge";
  import { CursorType } from "$lib/stores/cursor";

  let pos = { x: 0, y: 0 };
  // $: console.log(pos);

  onMount(() => {
    const rect = document.querySelector("#cursor");
    window.addEventListener("mousemove", (e: MouseEvent) => {
      pos = {
        x: e.clientX - rect!.clientWidth / 2,
        y: e.clientY - rect!.clientHeight / 2,
      };
    });
  });
</script>

<div
  id="cursor"
  class="pointer-events-none fixed top-0 z-[100000000000000000]"
  style="left: {pos.x}px; top: {pos.y}px"
>
  {#if $CursorType === "normal"}
    <div
      class="bg-light-10 dark:bg-light-100 w-10 aspect-square flex items-center justify-center rounded-full text-5xl"
    ></div>
  {/if}
  {#if $CursorType === "footer-close"}
    <div
      class="bg-light-10 dark:bg-light-100 w-20 aspect-square flex items-center justify-center rounded-full text-5xl"
    >
      X
    </div>
  {/if}
  {#if $CursorType === "footer"}
    <div class="bg-light-10 dark:bg-red-500 py-6 px-12 rounded-full text-5xl">
      <p>This is inside footer.</p>
    </div>
  {/if}
</div>
