<script lang="ts">
  import type { File } from "$lib/stores/finder";
  import { twMerge as twm } from "tailwind-merge";
  import PixelBorder from "./PixelBorder.svelte";
  import { handleFileClickMobile } from "$lib/stores/explorer";

  export let files: File[];

  const getFiles = (file: any) =>
    file.data?.filter((i: any) => i.type === "file");
  const getFolders = (file: any) =>
    file.data?.filter((i: any) => i.type === "folder");
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

          <div class="w-full h-full flex items-center overflow-hidden">
            <div>
              <!-- <div
              class={twm(
                "marquee-content",
                file.isMarquee && "animate-marquee",
              )}
            > -->
              <span class="whitespace-nowrap">{file.label}</span>
              <!-- {#if file.isMarquee}
                <span class="whitespace-nowrap">{file.label}</span>
              {/if} -->
            </div>
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
          {@const medias = getFiles(file)}
          <div
            class="grid {file.label === 'Sawbwa Morning Blend'
              ? 'grid-cols-2'
              : 'grid-cols-1'} p-1 pt-[2px] gap-[2px] align-top"
          >
            {#each medias as media}
              {#if media.mediaType === "img"}
                <img alt={media.label} src={media.mediaSrc} />
              {:else if media.mediaType === "video"}
                <div class="w-full bg-black">
                  <video
                    style="width:100%;height:100%;"
                    autoplay
                    loop
                    src={media.mediaSrc}
                  >
                    <source type="video/mp4" src={media.mediaSrc} />
                    <track kind="captions" />
                  </video>
                </div>
              {:else if media.mediaType === "pdf"}
                <a
                  class="p-4 text-center leading-[0.75]"
                  href={media.mediaSrc}
                  target="_blank">{media.label}</a
                >
              {/if}
            {/each}
          </div>

          {@const folders = getFolders(file)}
          {#if folders.length > 0}
            <div class="-mt-1">
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
