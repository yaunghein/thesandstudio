<script lang="ts">
  import { removeShell, type OpenShell } from "$lib/stores/shell";
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
  class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] rounded-lg shadow-sm border border-gray-100 overflow-hidden"
  style="z-index: {file.zIndex}"
>
  <div class="flex items-center gap-2 h-14 bg-white overflow-hidden px-4">
    <button
      on:click={() => removeShell(file.id)}
      class="shrink-0 w-3 h-3 rounded-full bg-red-500"
    />
  </div>

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
    <embed src={mediaSrc} width="100%" height="500" />
  {/if}
</div>
