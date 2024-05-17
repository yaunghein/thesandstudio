<script lang="ts">
  import FATK from "$lib/svgs/mobile/FATK.svelte";
  import Explorer from "$lib/svgs/mobile/Explorer.svelte";
  import Tube from "$lib/svgs/mobile/Tube.svelte";
  import { MobileHomeSwiper as swiper } from "$lib/stores/slider";
  import PixelBorder from "./PixelBorder.svelte";

  const goToSlideByName = (slideName: string) => {
    const slides = $swiper!.slides;
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].dataset.slideName === slideName) {
        $swiper!.slideTo(i);
        return;
      }
    }
  };
</script>

<button on:click={() => goToSlideByName("works")} class="p-[0.125rem] pb-0">
  <div class="w-full flex items-center justify-center aspect-square relative">
    <PixelBorder />
    <img
      class="relative dark:invert"
      src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943579/general/mobile-works_gpgxlr.gif"
      alt=""
    />
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    Works
  </div>
</button>

<button on:click={() => goToSlideByName("fatk")} class="p-[0.125rem] pb-0">
  <div class="w-full flex items-center justify-center aspect-square relative">
    <PixelBorder />
    <div class="relative w-[85%] flex items-center justify-center">
      <FATK />
    </div>
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    For All Thingkind
  </div>
</button>

<button on:click={() => goToSlideByName("not-works")} class="p-[0.125rem] pb-0">
  <div
    class="w-full flex items-center justify-center aspect-square relative p-4"
  >
    <PixelBorder />
    <img
      class="relative rotate-180 dark:invert"
      src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943575/general/mobile-not-works_onymkk.gif"
      alt=""
    />
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    Not Works
  </div>
</button>

<button on:click={() => goToSlideByName("about")} class="p-[0.125rem] pb-0">
  <div
    class="w-full flex items-center justify-center aspect-square relative p-4"
  >
    <PixelBorder />
    <img
      class="relative dark:invert"
      src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943567/general/mobile-about_tj6vbb.gif"
      alt=""
    />
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    About
  </div>
</button>

<button on:click={() => goToSlideByName("contact")} class="p-[0.125rem] pb-0">
  <div class="w-full flex items-center justify-center aspect-square relative">
    <PixelBorder />
    <div class="relative w-[80%] h-[3rem] flex items-center justify-center">
      <Tube />
    </div>
  </div>
  <div
    class="leading-none pl-[2px] pt-1 text-lg text-left whitespace-nowrap font-sand-mobile-bold"
  >
    Contact
  </div>
</button>

<button on:click={() => goToSlideByName("explorer")} class="p-[0.125rem] pb-0">
  <div class="w-full flex items-center justify-center aspect-square relative">
    <PixelBorder />
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
