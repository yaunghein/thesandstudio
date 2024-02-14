<script lang="ts">
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import FinderColumns from "./FinderColumns.svelte";
  import CFilePreview from "./CFilePreview.svelte";
  import ButtonClose from "./ButtonClose.svelte";
  import ContactForm from "./ContactForm.svelte";
  import {
    tabs,
    Tabs,
    FilePreview,
    HistoryIndex,
    FinderHistory,
    FilePreviewHistory,
    FinderOpenPath,
    addHistory,
    openArchiveTab,
  } from "$lib/stores/finder";
  import type { Tab } from "$lib/stores/finder";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import drag from "$lib/utils/drag";
  import deepClone from "$lib/utils/deepClone";
  import IconChevronLeft from "$lib/svgs/IconChevronLeft.svelte";
  import IconChevronRight from "$lib/svgs/IconChevronRight.svelte";
  import IconSandExplorer from "$lib/svgs/IconSandExplorer.svelte";
  import ContactFormTubeLabel from "$lib/svgs/ContactFormTubeLabel.svelte";

  $: shell = $OpenShells.find((shell) => shell.id === "finder");
  $: index = $OpenShells.findIndex((shell) => shell.id === "finder");

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
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

  const reset = () => {
    Tabs.set(deepClone(tabs));
    FinderHistory.set([deepClone(tabs)]);
    FilePreview.set(undefined);
    FilePreviewHistory.set([undefined]);
    HistoryIndex.set(0);
  };

  $: currentTab = $Tabs.find((tab) => tab.isOpen) as Tab;
  $: canPrev = $HistoryIndex > 0;
  $: canNext = $HistoryIndex < $FinderHistory.length - 1;
</script>

<div
  use:drag
  use:position
  in:scale={{ start: 0.9, duration: 200, easing: backOut }}
  out:scale={{ start: 0.9, duration: 200, easing: backIn }}
  class="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-shell-desktop h-shell-desktop rounded-3xl text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden"
  style="z-index: {shell?.zIndex}"
>
  <div class="transparent-layer" />

  <div class="absolute inset-0 flex gap-10 -ml-[0.4rem] opacity-sand">
    {#each [...Array(100).keys()] as _}
      <div class="shrink-0 w-line bg-white dark:bg-light-12 h-full" />
    {/each}
  </div>

  <div class="relative flex h-full overflow-hidden">
    <div class="relative w-[20.65rem] shrink-0">
      <div class="mt-6 ml-6">
        <ButtonClose
          on:close={() => {
            removeShell("finder");
            setTimeout(reset, 300);
          }}
        />
      </div>
      <div class="flex flex-col mt-14 px-9">
        {#each $Tabs as tab}
          <button
            class="flex items-center gap-4 py-1"
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
              class="shrink-0 w-[1.65rem] h-[1.25rem] rounded border-[0.125rem] {tab.isOpen
                ? 'bg-light-10 dark:bg-light-100 border-light-10 dark:border-light-100'
                : 'bg-transparent border-light-70 dark:border-light-12'}"
            />
            <div class="text-2xl">{tab.label}</div>
          </button>
        {/each}
      </div>

      <div class="absolute left-[2.1rem] bottom-[2.1rem] flex flex-col">
        <div class="w-32 h-16 text-white dark:text-light-12">
          <IconSandExplorer />
        </div>
      </div>
    </div>

    <div
      class="grow overflow-hidden rounded-3xl -m-[0.1875rem] ml-0 border-2 border-white dark:border-light-12 bg-light-90 dark:bg-black"
    >
      <div class="flex items-center h-20 px-4">
        <button
          class="h-16 aspect-square select-none cursor-pointer {canPrev
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
          class="h-16 aspect-square select-none cursor-pointer {canNext
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
        <span class="ml-5 text-2xl truncate" title={$FinderOpenPath}>
          {$FinderOpenPath}
        </span>
      </div>
      <div
        id="columns"
        class="flex h-[calc(100%-5rem)] overflow-auto hide-scrollbar rounded-3xl -m-[0.125rem] mt-0 border-2 border-b-0 border-white dark:border-light-12"
      >
        {#if currentTab.label !== "Contact"}
          <FinderColumns files={currentTab.files} />
          {#if $FilePreview}
            <CFilePreview data={$FilePreview} />
          {/if}
        {:else}
          <div class="w-full flex flex-col justify-between">
            <p class="text-4xl font-sand-medium mt-20 ml-10">
              What do you have in mind?
            </p>
            <div
              class="ml-10 mb-16 mt-auto flex flex-col items-start gap-1 text-xl text-light-80 dark:text-light-12"
            >
              <a
                class="leading-none mb-2 hover:text-black dark:hover:text-light-100 sand-transition"
                href="matilto:hi@thesandstudio.com"
              >
                hi@thesandstudio.com
              </a>
              <a
                class="text-xl light-70 leading-none hover:text-black dark:hover:text-light-100 sand-transition"
                href="/"
              >
                Instagram
              </a>
              <a
                class="text-xl light-70 leading-none hover:text-black dark:hover:text-light-100 sand-transition"
                href="/"
              >
                Facebook
              </a>
            </div>

            <div
              class="text-white dark:text-light-20 w-40 h-8 self-center mb-8"
            >
              <ContactFormTubeLabel />
            </div>
          </div>
        {/if}
      </div>
    </div>

    {#if currentTab.label === "Contact"}
      <div class="relative w-[18.55rem] shrink-0">
        <ContactForm />
      </div>
    {/if}
  </div>
</div>
