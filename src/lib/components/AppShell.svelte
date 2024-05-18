<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
  import Finder from "$lib/components/Finder.svelte";
  import CopyrightWindow from "$lib/components/CopyrightWindow.svelte";
  import { removeShell, OpenShells } from "$lib/stores/shell";

  let isMounted = false;
  onMount(() => setTimeout(() => (isMounted = true), 1000));

  $: {
    if ($page) {
      removeShell("finder");
      removeShell("copyright");
    }
  }
  $: isFinderOpen = $OpenShells.find((shell) => shell.id === "finder");
  $: isCopyrightOpen = $OpenShells.find((shell) => shell.id === "copyright");
</script>

<div
  class="text-light-10 dark:text-light-100 bg-light-90 dark:bg-black relative h-[100dvh] p-3 pt-0 flex flex-col sand-transition"
>
  <Navbar />
  <div class="h-[100dvh]">
    <div
      class="fixed inset-3 sm:top-20 app-shell text-light-10 dark:text-light-100 bg-light-95 dark:bg-light-7 rounded-3xl border-light-100 dark:border-light-12 {isMounted
        ? 'border-2'
        : 'border-0'} grow overflow-auto hide-scrollbar sand-transition"
    >
      <slot />
      {#if isFinderOpen}
        <Finder />
      {/if}
      {#if isCopyrightOpen}
        <CopyrightWindow />
      {/if}
    </div>
  </div>
  <Footer />
</div>
