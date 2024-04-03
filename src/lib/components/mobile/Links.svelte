<script lang="ts">
  import FATK from "$lib/svgs/mobile/FATK.svelte";
  import Explorer from "$lib/svgs/mobile/Explorer.svelte";
  import Tube from "$lib/svgs/mobile/Tube.svelte";
  import { MobileHomeSwiper as swiper } from "$lib/stores/slider";

  import type { Swiper } from "swiper/types";
</script>

<a href="/works" class=" p-[0.125rem] pb-0">
  <div class="w-full flex items-center justify-center aspect-square relative">
    <img
      class="absolute inset-0 w-full h-full dark:invert"
      src="/images/mobile/border-square.png"
      alt=""
    />
    <img class="relative dark:invert" src="/images/mobile/works.gif" alt="" />
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    Works
  </div>
</a>

<a href="/for-all-thingkind" class=" p-[0.125rem] pb-0">
  <div class="w-full flex items-center justify-center aspect-square relative">
    <img
      class="absolute inset-0 w-full h-full dark:invert"
      src="/images/mobile/border-square.png"
      alt=""
    />
    <div class="relative w-[85%] flex items-center justify-center">
      <FATK />
    </div>
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    For All Thingkind
  </div>
</a>

<a href="/not-works" class=" p-[0.125rem] pb-0">
  <div
    class="w-full flex items-center justify-center aspect-square relative p-4"
  >
    <img
      class="absolute inset-0 w-full h-full dark:invert"
      src="/images/mobile/border-square.png"
      alt=""
    />
    <img
      class="relative rotate-180 dark:invert"
      src="/images/mobile/not-works.gif"
      alt=""
    />
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    Not Work
  </div>
</a>

<button on:click={() => $swiper?.slideTo(2)} class=" p-[0.125rem] pb-0">
  <div
    class="w-full flex items-center justify-center aspect-square relative p-4"
  >
    <img
      class="absolute inset-0 w-full h-full dark:invert"
      src="/images/mobile/border-square.png"
      alt=""
    />
    <img class="relative dark:invert" src="/images/mobile/about.gif" alt="" />
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    About
  </div>
</button>

<button on:click={() => $swiper?.slideTo(3)} class=" p-[0.125rem] pb-0">
  <div class="w-full flex items-center justify-center aspect-square relative">
    <img
      class="absolute inset-0 w-full h-full dark:invert"
      src="/images/mobile/border-square.png"
      alt=""
    />
    <div class="relative w-[70%] h-[3rem] flex items-center justify-center">
      <Tube />
    </div>
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    Contact
  </div>
</button>

<button class=" p-[0.125rem] pb-0">
  <div class="w-full flex items-center justify-center aspect-square relative">
    <img
      class="absolute inset-0 w-full h-full dark:invert"
      src="/images/mobile/border-square.png"
      alt=""
    />
    <div class="relative w-[75%] flex items-center justify-center">
      <Explorer />
    </div>
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    Explorer 1000
  </div>
</button>
