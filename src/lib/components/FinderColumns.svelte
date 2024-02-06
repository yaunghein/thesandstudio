<script lang="ts">
  import { onMount } from "svelte";
  import {
    FilePreview,
    handleFileClick,
    handleFileDoubleClick,
  } from "$lib/stores/finder";
  import type { File } from "$lib/stores/finder";
  import { twMerge as twm } from "tailwind-merge";

  export let files: File[];
  export let isRecursive: boolean = false; // to have right border while only one column is opening

  const MIN_FILE_COUNT = 20;

  $: openFolder = files?.find((file: File) => file.isOpen);
</script>

{#if files}
  <div
    class={twm(
      "relative shrink-0 w-[29.8rem] h-full overflow-auto p-5 border-l-[0.1875rem] -ml-[0.1875rem] border-white dark:border-light-12",
      !isRecursive && !$FilePreview && "border-r-2",
    )}
  >
    <div class="w-full h-full absolute inset-0 p-5 mb-8">
      {#each [...Array(Math.max(MIN_FILE_COUNT, files.length)).keys()] as index}
        <div
          class={twm(
            "w-full h-10 rounded-lg",
            (index + 1) % 2 === 0
              ? "bg-light-90 dark:bg-black"
              : "bg-light-80 dark:bg-light-7",
          )}
        />
      {/each}
    </div>

    {#if files[0]}
      {#each files as file}
        <button
          title={file.label}
          class={twm(
            "relative overflow-hidden w-full text-left text-2xl rounded-lg leading-none h-10 flex items-center justify-between px-3 gap-1",
            file.isOpen && "bg-light-70 dark:bg-light-20",
          )}
          id={file.label}
          on:dblclick={() => handleFileDoubleClick(file)}
          on:click={() => handleFileClick(file)}
        >
          <div
            class={twm("marquee-content", file.isMarquee && "animate-marquee")}
          >
            <span class="whitespace-nowrap">{file.label}</span>
            {#if file.isMarquee}
              <span class="whitespace-nowrap">{file.label}</span>
            {/if}
          </div>

          {#if file.type === "folder"}
            <span class="shrink-0 absolute right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          {/if}
        </button>
      {/each}
    {:else}
      <p
        class="relative w-full text-left truncate text-2xl leading-none h-10 flex items-center px-3"
      >
        There is no file yet in this folder.
      </p>
    {/if}
  </div>
{/if}

{#if openFolder}
  <svelte:self files={openFolder.data} isRecursive={true} />
{/if}
