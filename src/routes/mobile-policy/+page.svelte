<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Swiper from "swiper";
  import { Pagination } from "swiper/modules";
  import Header from "$lib/components/mobile/Header.svelte";
  import MobileAppShell from "$lib/components/mobile/AppShell.svelte";
  import SlidePrivacyPolicy from "$lib/components/mobile/SlidePrivacyPolicy.svelte";
  import SlideTnC from "$lib/components/mobile/SlideTnC.svelte";
  import SlideCookiePolicy from "$lib/components/mobile/SlideCookiePolicy.svelte";

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
  <MobileAppShell>
    <Header />
    <div class="swiper relative pb-3">
      <div class="swiper-wrapper flex h-[calc(100dvh-10rem)] pt-2 pb-3">
        <SlidePrivacyPolicy />
        <SlideTnC />
        <SlideCookiePolicy />
      </div>
      <div class="swiper-pagination !translate-y-[0.675rem]"></div>
    </div>
  </MobileAppShell>
</div>
