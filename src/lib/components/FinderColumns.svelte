<script lang="ts">
  import {
    FilePreview,
    handleFileClick,
    handleFileDoubleClick,
  } from "$lib/stores/finder";
  import type { File } from "$lib/stores/finder";
  import { twMerge as twm } from "tailwind-merge";

  export let files: File[];
  export let isRecursive: boolean = false; // to have right border while only one column is opening

  const MIN_FILE_COUNT = 22;

  $: openFolder = files?.find((file: File) => file.isOpen);
</script>

{#if files}
  <div
    class={twm(
      "relative shrink-0 min-w-[30rem] h-full overflow-auto p-5 border-l-[0.1875rem] -ml-[0.1875rem] border-light-80 dark:border-light-40",
      !isRecursive && !$FilePreview && "border-r-[0.1875rem]",
    )}
  >
    <div class="w-full h-full absolute inset-0 p-5 mb-8">
      {#each [...Array(Math.max(MIN_FILE_COUNT, files.length)).keys()] as index}
        <div
          class={twm(
            "w-full h-8 rounded-lg",
            (index + 1) % 2 === 0
              ? "bg-light-100 dark:bg-light-10"
              : "bg-light-60 dark:light-100 bg-opacity-10",
          )}
        />
      {/each}
    </div>

    {#if files[0]}
      {#each files as file}
        <button
          class={twm(
            "relative w-full text-left text-xl rounded-lg leading-none h-8 flex items-center justify-between px-3 gap-1",
            file.isOpen && "bg-light-90 dark:bg-light-20",
          )}
          id={file.label}
          on:dblclick={() => handleFileDoubleClick(file)}
          on:click={() => handleFileClick(file)}
        >
          <span class="truncate">{file.label}</span>

          {#if file.type === "folder"}
            <span class="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
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
        class="relative w-full text-left truncate text-xl leading-none h-8 flex items-center"
      >
        There is no file yet in this folder.
      </p>
    {/if}
  </div>
{/if}

{#if openFolder}
  <svelte:self files={openFolder.data} isRecursive={true} />
{/if}
