<script lang="ts">
  import { page } from "$app/stores";
  import LogoShape from "$lib/svgs/LogoShape.svelte";
  import Menu from "./Menu.svelte";
  import { twMerge as twm } from "tailwind-merge";

  const PAGE_NAMES_MAP: Record<string, string> = {
    "/": "",
    "/for-all-thingkind/": "For All Thingkind",
    "/child/": "CHILD*",
    "/works/": "WORKS",
    "/not-works/": "Not Works",
  };
</script>

<header
  class="hidden sticky z-50 top-0 right-0 left-0 w-full h-20 sm:flex items-center px-12 shrink-0"
>
  <div class="w-full grid grid-cols-3">
    <div class="w-full flex items-center gap-10 text-2xl font-sand-medium">
      <a href="/" class="flex items-center gap-5">
        <div class="w-11 aspect-square">
          <LogoShape />
        </div>
        <div class="mt-[0.125rem]">SAND DESKTOP</div>
      </a>

      <button
        class="bg-white rounded-full px-4 py-2 text-black flex items-center gap-2 pointer-events-none opacity-50 dark:opacity-25"
      >
        <div class="w-7 aspect-square">
          <LogoShape />
        </div>
        <span class="select-none">Log In</span>
      </button>
    </div>

    <a href="/" class="grid place-items-center text-2xl">
      {PAGE_NAMES_MAP[$page.url.pathname] || ""}
    </a>

    {#if $page.url.pathname !== "/"}
      <Menu />
    {/if}
  </div>
</header>
