<script lang="ts">
  import type { File } from "$lib/stores/finder";
  import { twMerge as twm } from "tailwind-merge";
  import PixelBorder from "./PixelBorder.svelte";
  import { handleFileClickMobile } from "$lib/stores/explorer";

  export let files: File[];
</script>

{#if files}
  <div>
    {#if files[0]}
      {#each files as file}
        <button
          title={file.label}
          class={twm(
            "-mt-[2px] relative w-full text-left text-2xl rounded-[1.2rem] leading-none h-10 flex items-center justify-between px-5 gap-1",
            file.isOpen && "bg-black dark:bg-white text-white dark:text-black",
          )}
          id={file.label}
          on:click={() => handleFileClickMobile(file)}
        >
          <PixelBorder />

          <div
            class={twm("marquee-content", file.isMarquee && "animate-marquee")}
          >
            <span class="whitespace-nowrap">{file.label}</span>
            {#if file.isMarquee}
              <span class="whitespace-nowrap">{file.label}</span>
            {/if}
          </div>

          {#if file.type === "folder"}
            <span class="shrink-0 absolute right-5">
              {#if !file.isOpen}
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.1543 9H4.51465V5.71509H0.819824V4.07544H4.51465V0.790527H6.1543V4.07544H9.85474V5.71509H6.1543V9Z"
                    fill="currentColor"
                  />
                </svg>
              {:else}
                <svg
                  width="8"
                  height="2"
                  viewBox="0 0 8 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.38965 1.89526H0.819824V0.25H7.38965V1.89526Z"
                    fill="currentColor"
                  />
                </svg>
              {/if}
            </span>
          {/if}
        </button>
        {#if file.isOpen}
          {@const medias = file.data?.filter(
            (i) => i.type === "file" && i.mediaType === "img",
          )}
          {#if medias.length > 0}
            <div class="grid grid-cols-2 p-1 pt-[2px] gap-[2px] align-top">
              {#each medias as media}
                <img alt={media.label} src={media.mediaSrc} />
              {/each}
            </div>
          {/if}

          {@const folders = file.data?.filter((i) => i.type === "folder")}
          {#if folders.length > 0}
            <div class="mt-1">
              <svelte:self files={folders} />
            </div>
          {/if}
        {/if}
      {/each}
      <!-- {#if openFolder}
        <svelte:self files={openFolder.data} />
      {/if} -->
    {:else}
      <p
        class="relative w-full text-left truncate text-2xl leading-none h-10 flex items-center px-3"
      >
        There is no file yet in this folder.
      </p>
    {/if}
  </div>
{/if}
