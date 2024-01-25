<script lang="ts">
  import { onMount } from "svelte";

  onMount(async () => {
    var options = {
      animate: true,
      patternWidth: 500,
      patternHeight: 500,
      grainOpacity: 0.05,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
    };

    window.grained("#grain", options);
  });
</script>

<div
  class="fixed z-[10000000000] inset-0 w-full h-full pointer-events-none select-none"
>
  <div id="grain" class="absolute inset-0 w-full h-full"></div>
</div>
