<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Swiper from "swiper";
  import { Pagination } from "swiper/modules";
  import Header from "$lib/components/mobile/Header.svelte";
  import SlidePrivacyPolicy from "$lib/components/mobile/SlidePrivacyPolicy.svelte";
  import SlideTnC from "$lib/components/mobile/SlideTnC.svelte";
  import SlideCookiePolicy from "$lib/components/mobile/SlideCookiePolicy.svelte";
  import Home from "$lib/svgs/mobile/Home.svelte";
  import PixelBorder from "$lib/components/mobile/PixelBorder.svelte";

  import "swiper/css/pagination";

  onMount(() => {
    if (!browser) return;
    const policySwiper = new Swiper(".swiper", {
      modules: [Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
    const pages = ["privacy", "terms", "cookie"];
    const pageName = $page.url.searchParams.get("page");
    policySwiper.slideTo(pages.findIndex((page) => page === pageName));
  });
</script>

<div class="sm:hidden">
  <div
    class="h-[100dvh] p-1 relative mx-auto bg-black font-sand-mobile-regular"
  >
    <div
      class="relative overflow-hidden h-full bg-white dark:bg-black text-black dark:text-white sand-transition"
    >
      <Header />
      <div class="swiper relative pb-3">
        <div class="swiper-wrapper flex h-[calc(100dvh-10rem)] pt-2 pb-3">
          <SlidePrivacyPolicy />
          <SlideTnC />
          <SlideCookiePolicy />
        </div>
        <div class="swiper-pagination !translate-y-[0.675rem]"></div>
      </div>
    </div>
  </div>
  <nav
    class="h-[4.5rem] fixed z-20 inset-5 top-auto max-w-[420px] mx-auto flex items-center justify-evenly bg-white dark:bg-black rounded-[1.1rem]"
  >
    <PixelBorder />
    <a
      href="/"
      class="relative w-11 aspect-square flex items-center justify-center dark:invert sand-transition"
    >
      <Home />
    </a>
  </nav>
</div>
