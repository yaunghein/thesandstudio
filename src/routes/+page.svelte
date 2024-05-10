<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { onMount, onDestroy } from "svelte";
  import { Application } from "@splinetool/runtime";
  import lottie from "lottie-web";
  import { twMerge as twm } from "tailwind-merge";
  import Swiper from "swiper";
  import { Pagination } from "swiper/modules";
  import { addShell, OpenShells } from "$lib/stores/shell";
  import { SelectedBackground } from "$lib/stores/background";
  import { MobileHomeSwiper } from "$lib/stores/slider";
  import { CursorType } from "$lib/stores/cursor";
  import Dock from "$lib/components/Dock.svelte";
  import AppShell from "$lib/components/AppShell.svelte";
  import Apps from "$lib/components/Apps.svelte";
  import MediaWindow from "$lib/components/MediaWindow.svelte";
  import Weather from "$lib/components/Weather.svelte";
  import Backgrounds from "$lib/components/Backgrounds.svelte";
  import SandScan from "$lib/components/sand-scan/SandScan.svelte";
  import Child from "$lib/components/Child.svelte";
  // import LogoMain from "$lib/svgs/LogoMain.svelte";

  import "swiper/css/pagination";

  let swiperIndex = 0;
  onMount(() => {
    if (!browser) return;
    const swiper = new Swiper(".swiper", {
      loop: false,
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    swiper.on("activeIndexChange", function (this: Swiper) {
      swiperIndex = this.realIndex;
    });
    MobileHomeSwiper.set(swiper);
  });

  $: if ($page) {
    const pageName = $page.url.searchParams.get("page");
    if (pageName) {
      pageName === "home" && $MobileHomeSwiper?.slideTo(0);
      pageName === "menu" && $MobileHomeSwiper?.slideTo(1);
    }
  }

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  $: isSandScanOpen = $OpenShells.find((shell) => shell.id === "sand-scan");

  $: isBackgroundsOpen = $OpenShells.find(
    (shell) => shell.id === "backgrounds",
  );
  $: openMediaFiles = $OpenShells.filter((shell) => !!shell.file);
  $: isChildOpen = $OpenShells.find((shell) => shell.id === "child");

  let spline: any;
  let isSplineLoaded = false;
  let isSplineThemeChangeComplete = false;

  const clickWebThemeSwitcher = (e: any) => {
    if (e.target.name === "Logo") {
      (document.querySelector("#theme-switcher") as HTMLElement)?.click();
    }
  };

  function mapRange(
    value: number,
    fromLow: number,
    fromHigh: number,
    toLow: number,
    toHigh: number,
  ) {
    return (
      toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow)
    );
  }

  // const moveEye = (e: MouseEvent, spline: any) => {
  //   let pupil_left_x = mapRange(e.clientX, 0, window.innerWidth, -10, 20);
  //   let pupil_left_y = -mapRange(e.clientY, 0, window.innerHeight, -8, 8);
  //   let pupil_right_x = mapRange(e.clientX, 0, window.innerWidth, -20, 10);
  //   let pupil_right_y = -mapRange(e.clientY, 0, window.innerHeight, -8, 8);

  //   pupil_left_x = Math.min(Math.max(pupil_left_x, -10), 10);
  //   pupil_right_x = Math.min(Math.max(pupil_right_x, -10), 10);

  //   spline?.setVariables({
  //     pupil_left_x,
  //     pupil_left_y,
  //     pupil_right_x,
  //     pupil_right_y,
  //   });
  // };

  // a couple timeout wrappers to ensure the spline app loads properly 🥲
  // const create3DBackground = (node: HTMLCanvasElement) => {
  //   CursorType.set("loading");
  //   spline = new Application(node);
  //   setTimeout(() => {
  //     spline
  //       .load("https://prod.spline.design/0JtwT9xb53fikO5h/scene.splinecode")
  //       .then(() => {
  //         setTimeout(() => (isSplineLoaded = true), 1000);
  //         CursorType.set("normal");
  //         spline.addEventListener("mouseDown", clickWebThemeSwitcher);
  //         window.addEventListener("mousemove", (e) => moveEye(e, spline));
  //       });
  //   }, 3000);
  // };

  // onDestroy(() => {
  //   if (!browser) return;
  //   window.removeEventListener("mousemove", (e) => moveEye(e, spline));
  // });

  // $: if ($SelectedBackground) {
  //   if (browser) {
  //     const hasSpline = !!spline;
  //     const is3DBg = $SelectedBackground.name === "bg-scene";
  //     const isLightMode = localStorage.getItem("sand-theme") === "light";

  //     if (!is3DBg) {
  //       spline = null;
  //       isSplineLoaded = false;
  //       isSplineThemeChangeComplete = false;
  //     }

  //     if (hasSpline && is3DBg && !isLightMode && isSplineLoaded) {
  //       setTimeout(() => (isSplineThemeChangeComplete = true), 0);
  //     }

  //     if (hasSpline && is3DBg && isLightMode && isSplineLoaded) {
  //       spline.removeEventListener("mouseDown", clickWebThemeSwitcher);
  //       spline.emitEvent("mouseDown", "Logo");
  //       spline.addEventListener("mouseDown", clickWebThemeSwitcher);
  //       setTimeout(() => (isSplineThemeChangeComplete = true), 0);
  //     }
  //   }
  // }

  // const sandTextLottie = (node: HTMLDivElement) => {
  //   const player = lottie.loadAnimation({
  //     container: node,
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: false,
  //     path: "lotties/sand-text.json",
  //   });
  //   const handleMouseEnter = () => {
  //     player.setDirection(1);
  //     player.setLoop(true);
  //     player.play();
  //   };
  //   const handleMouseLeave = () => {
  //     player.setDirection(-1);
  //     player.setLoop(false);
  //   };
  //   node.addEventListener("mouseenter", handleMouseEnter);
  //   node.addEventListener("mouseleave", handleMouseLeave);

  //   return {
  //     destroy: () => {
  //       node.removeEventListener("mouseenter", handleMouseEnter);
  //       node.removeEventListener("mouseleave", handleMouseLeave);
  //     },
  //   };
  // };

  // let loadedLegacyLotties: { player: any; startFrame: number }[] = [];
  // $: if ($SelectedBackground.name !== "bg-legacy") {
  //   loadedLegacyLotties = [];
  // }
  // $: if (loadedLegacyLotties.length === 3) {
  //   for (const lottie of loadedLegacyLotties) {
  //     lottie.player.goToAndPlay(lottie.startFrame, true);
  //   }
  // }
  // const legacyLottie = (node: HTMLDivElement, startFrame: number) => {
  //   const player = lottie.loadAnimation({
  //     container: node,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: false,
  //     path: "/lotties/categories-displace-v2.json",
  //   });
  //   player.addEventListener("DOMLoaded", () => {
  //     loadedLegacyLotties = [...loadedLegacyLotties, { player, startFrame }];
  //   });
  // };

  const openTermsAndConditions = () => {
    addShell({ id: "copyright", zIndex: 65 });
    setTimeout(() => {
      const el = document.getElementById(
        "Terms-&-Conditions",
      ) as HTMLButtonElement;
      el.click();
    }, 0);
  };

  const openCookiesPolicy = () => {
    addShell({ id: "copyright", zIndex: 65 });
    setTimeout(() => {
      const el = document.getElementById("Cookies-Policy") as HTMLButtonElement;
      el.click();
    }, 0);
  };

  const openPrivacyPolicy = () => {
    addShell({ id: "copyright", zIndex: 65 });
    setTimeout(() => {
      const el = document.getElementById("Privacy-Policy") as HTMLButtonElement;
      el.click();
    }, 0);
  };
</script>

<div class="hidden sm:block">
  <AppShell>
    <!-- {#if $SelectedBackground?.name === "bg-scene"}
      <div
        class={twm(
          "sticky top-0 bottom-0 h-screen sand-transition",
          isSplineLoaded && isSplineThemeChangeComplete
            ? "opacity-100"
            : "opacity-0",
        )}
      >
        <canvas use:create3DBackground></canvas>
      </div>
    {/if} -->

    <!-- {#if $SelectedBackground?.name === "bg-legacy"}
      <div
        class={twm(
          "dark:invert h-full flex flex-col justify-between overflow-hidden sand-transition",
          loadedLegacyLotties.length === 3
            ? "opacity-30 dark:opacity-50"
            : "opacity-0",
        )}
      >
        <div use:legacyLottie={0} />
        <div use:legacyLottie={120} />
        <div use:legacyLottie={240} />
      </div>
    {/if} -->

    <div
      class="text-[1.375rem] absolute top-12 left-12 select-none flex flex-col items-start"
    >
      <p class="max-w-[32rem] leading-[1.35]">
        Yeah... We do shit. Come make amazing shits with us. Any type of shit
        but probably email first. Join us in harnessing a diverse spectrum of
        minds and voices to catalyze unprecedented shits. Let thy shit hit thy
        fan.
      </p>
      <div class="overflow-hidden">
        <!-- <div
          use:sandTextLottie
          class="dark:invert max-w-[32rem] h-[16rem] scale-[1.026]"
        /> -->
      </div>

      <div class="min-h-[10.8rem]">
        <Weather />
      </div>

      <div class="mt-12 flex flex-col items-start gap-2">
        <button
          on:click={openPrivacyPolicy}
          class="text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Privacy Policy
        </button>
        <button
          on:click={openTermsAndConditions}
          class="text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Terms and Conditions
        </button>
        <button
          on:click={openCookiesPolicy}
          class="text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Cookies Policy
        </button>
        <a
          href="/"
          class="mt-5 text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Made by The Sand Studio {new Date().getFullYear()}
        </a>
      </div>

      <a
        href="https://www.websitecarbon.com/website/thesandstudio-vercel-app/"
        target="_black"
        class="block rounded-full px-4 py-3 text-sand-green dark:text-black dark:bg-sand-green border-2 border-sand-green text-left mt-16"
      >
        Calculate CO2 Emission
      </a>
    </div>

    <!-- <div
      class={twm(
        "w-52 aspect-square absolute top-12 left-1/2 -translate-x-1/2 z-[2]",
        $SelectedBackground?.name === "bg-scene" &&
          "opacity-0 pointer-events-none",
      )}
    >
      <LogoMain />
    </div> -->

    <div class="absolute top-12 right-12 flex gap-5 z-[2]">
      <Apps />
    </div>

    <Dock />

    {#if isSandScanOpen}
      <SandScan />
    {/if}

    {#if isBackgroundsOpen}
      <Backgrounds />
    {/if}

    {#if isChildOpen}
      <Child />
    {/if}

    {#if openMediaFiles.length > 0}
      {#each openMediaFiles as file, index (file.id)}
        <MediaWindow {file} {index} />
      {/each}
    {/if}
  </AppShell>
</div>
