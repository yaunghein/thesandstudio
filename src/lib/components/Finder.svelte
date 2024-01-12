<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { gsap } from "gsap";
  import { Draggable } from "gsap/dist/Draggable";
  import FinderColumns from "./FinderColumns.svelte";
  import CFilePreview from "./CFilePreview.svelte";
  import {
    tabs,
    Tabs,
    FilePreview,
    HistoryIndex,
    FinderHistory,
    FilePreviewHistory,
    FinderOpenPath,
    addHistory,
  } from "$lib/stores/finder";
  import type { Tab } from "$lib/stores/finder";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import deepClone from "$lib/utils/deepClone";
  import IconChevronLeft from "$lib/svgs/IconChevronLeft.svelte";
  import IconChevronRight from "$lib/svgs/IconChevronRight.svelte";
  import IconSandExplorer from "$lib/svgs/IconSandExplorer.svelte";

  $: shell = $OpenShells.find((shell) => shell.id === "finder");
  $: index = $OpenShells.findIndex((shell) => shell.id === "finder");

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };

  const drag = (node: HTMLDivElement) => {
    gsap.registerPlugin(Draggable);
    const drag = new Draggable(node, { bounds: "body" });
    drag.disable();

    node.addEventListener("mouseenter", drag.enable);
    node.addEventListener("mouseleave", drag.disable);

    return {
      destroy() {
        drag.kill();
      },
    };
  };

  onMount(() => {
    const scrollColumns = () => {
      setTimeout(() => {
        const columns = document.getElementById("columns");
        if (columns) columns.scrollLeft = columns.scrollWidth;
      }, 0);
    };
    Tabs.subscribe(scrollColumns);
    FilePreview.subscribe(scrollColumns);
  });

  onDestroy(() => {
    Tabs.set(deepClone(tabs));
    FinderHistory.set([deepClone(tabs)]);
    FilePreview.set(undefined);
    FilePreviewHistory.set([undefined]);
    HistoryIndex.set(0);
  });

  $: currentTab = $Tabs.find((tab) => tab.isOpen) as Tab;
  $: canPrev = $HistoryIndex > 0;
  $: canNext = $HistoryIndex < $FinderHistory.length - 1;
</script>

<div
  use:drag
  use:position
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64.1rem] h-[40rem] rounded-3xl text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 border-3 border-light-80 dark:border-light-40"
  style="z-index: {shell?.zIndex}"
>
  <div class="flex h-full overflow-hidden">
    <div class="relative w-64 shrink-0">
      <button
        on:click={() => removeShell("finder")}
        class="shrink-0 w-5 h-5 rounded-full bg-sand-red mt-4 ml-6"
      />
      <div class="flex flex-col mt-6 px-6">
        {#each $Tabs as tab}
          <button
            class="flex items-center gap-4 py-2"
            on:click={() => {
              const updatedTabs = deepClone(tabs).map((i) => ({
                ...i,
                isOpen: i.label === tab.label ? true : false,
              }));
              Tabs.set(updatedTabs);
              FilePreview.set(undefined);
              addHistory(updatedTabs);
            }}
          >
            <div
              class="shrink-0 w-6 h-[1.1rem] rounded border-[0.125rem] {tab.isOpen
                ? 'bg-light-10 dark:bg-light-100 border-light-10 dark:border-light-100'
                : 'bg-transparent border-light-70 dark:border-light-40'}"
            />
            <div class="text-xl">{tab.label}</div>
          </button>
        {/each}
      </div>

      <div
        class="absolute left-6 bottom-6 text-light-40 dark:text-light-100 opacity-40 flex flex-col"
      >
        <div class="w-[12rem] h-4">
          <IconSandExplorer />
        </div>
        <div class="text-xs">©2023 The Sand Studio</div>
      </div>
    </div>

    <div
      class="grow overflow-hidden rounded-3xl -m-[0.1875rem] ml-0 border-3 border-light-80 dark:border-light-40"
    >
      <div class="flex items-center h-12 px-4">
        <button
          class="h-full aspect-square select-none cursor-pointer {canPrev
            ? 'pointer-events-auto text-light-10 dark:text-light-100'
            : 'pointer-events-none text-light-80 dark:text-light-20'}"
          on:click={() => {
            HistoryIndex.set($HistoryIndex - 1);
            Tabs.set($FinderHistory[$HistoryIndex]);
            FilePreview.set(undefined);
          }}
        >
          <IconChevronLeft />
        </button>
        <button
          class="h-full aspect-square select-none cursor-pointer {canNext
            ? 'pointer-events-auto text-light-10 dark:text-light-100'
            : 'pointer-events-none text-light-80 dark:text-light-20'}"
          on:click={() => {
            HistoryIndex.set($HistoryIndex + 1);
            Tabs.set($FinderHistory[$HistoryIndex]);
            FilePreview.set(undefined);
          }}
        >
          <IconChevronRight />
        </button>
        <span class="ml-2 text-xl truncate" title={$FinderOpenPath}>
          {$FinderOpenPath}
        </span>
      </div>
      <div
        id="columns"
        class="flex h-[calc(100%-3rem)] overflow-auto hide-scrollbar rounded-3xl -m-[0.1875rem] mt-0 border-3 border-b-0 border-light-80 dark:border-light-40"
      >
        <FinderColumns files={currentTab.files} />
        {#if $FilePreview}
          <CFilePreview data={$FilePreview} />
        {/if}
      </div>
    </div>
  </div>
</div>
