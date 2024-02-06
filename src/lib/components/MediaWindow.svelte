<script lang="ts">
  import ButtonClose from "./ButtonClose.svelte";
  import { removeShell, type OpenShell, OpenShells } from "$lib/stores/shell";
  import drag from "$lib/utils/drag";

  export let file: OpenShell;
  export let index: number = 0;

  const { mediaType, mediaSrc } = file.file!;

  const position = (node: HTMLDivElement) => {
    if (index === 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };
</script>

<div
  use:drag
  use:position
  class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 {mediaType ===
  'pdf'
    ? 'w-[64rem]'
    : 'w-[41.5rem]'} rounded-3xl text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden"
  style="z-index: {file?.zIndex}"
>
  <div class="transparent-layer" />

  <div class="absolute inset-0 flex gap-10 -ml-[0.4rem] opacity-sand">
    {#each [...Array(20).keys()] as _}
      <div class="shrink-0 w-line bg-white dark:bg-light-12 h-full" />
    {/each}
  </div>

  <div class="relative flex items-center gap-2 h-20 overflow-hidden pl-6">
    <ButtonClose on:close={() => removeShell(file.id)} />
  </div>

  <div
    class="relative rounded-3xl -m-[0.1875rem] border-2 border-white dark:border-light-12 overflow-hidden"
  >
    {#if mediaType === "img"}
      <img class="w-full object-contain" src={mediaSrc} alt="" />
    {:else if mediaType === "video"}
      <div class="w-full bg-black">
        <video
          style="width:100%;height:100%;"
          width="410"
          height="230"
          autoplay
          controls
          src={mediaSrc}
        >
          <source type="video/mp4" src={mediaSrc} />
          <track kind="captions" />
        </video>
      </div>
    {:else if mediaType === "pdf"}
      <embed src={mediaSrc} type="application/pdf" width="100%" height="500" />
    {/if}
  </div>
</div>
