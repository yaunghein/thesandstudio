<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount, onDestroy } from "svelte";
  import { Application } from "@splinetool/runtime";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import lottie from "lottie-web";
  import { twMerge as twm } from "tailwind-merge";
  import Swiper from "swiper";
  import { Pagination } from "swiper/modules";
  import { OpenShells } from "$lib/stores/shell";
  import { SelectedBackground } from "$lib/stores/background";
  import Dock from "$lib/components/Dock.svelte";
  import AppShell from "$lib/components/AppShell.svelte";
  import Apps from "$lib/components/Apps.svelte";
  import Finder from "$lib/components/Finder.svelte";
  import MediaWindow from "$lib/components/MediaWindow.svelte";
  import Weather from "$lib/components/Weather.svelte";
  import Backgrounds from "$lib/components/Backgrounds.svelte";
  import SandScan from "$lib/components/sand-scan/SandScan.svelte";
  import Child from "$lib/components/Child.svelte";
  import Logo from "$lib/svgs/Logo.svelte";
  import LogoShape from "$lib/svgs/LogoShape.svelte";
  import Sand from "$lib/svgs/mobile/Sand.svelte";
  import Links from "$lib/components/mobile/Links.svelte";
  import MobileDock from "$lib/components/mobile/Dock.svelte";

  import type { Swiper as TSwiper } from "swiper/types";

  import "swiper/css/pagination";

  let swiper: TSwiper;
  onMount(() => {
    if (!browser) return;
    swiper = new Swiper(".swiper", {
      autoHeight: true,
      loop: true,
      modules: [Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  $: isSandScanOpen = $OpenShells.find((shell) => shell.id === "sand-scan");
  $: isFinderOpen = $OpenShells.find((shell) => shell.id === "finder");
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

  const moveEye = (e: MouseEvent, spline: any) => {
    let pupil_left_x = mapRange(e.clientX, 0, window.innerWidth, -10, 20);
    let pupil_left_y = -mapRange(e.clientY, 0, window.innerHeight, -8, 8);
    let pupil_right_x = mapRange(e.clientX, 0, window.innerWidth, -20, 10);
    let pupil_right_y = -mapRange(e.clientY, 0, window.innerHeight, -8, 8);

    pupil_left_x = Math.min(Math.max(pupil_left_x, -10), 10);
    pupil_right_x = Math.min(Math.max(pupil_right_x, -10), 10);

    spline.setVariables({
      pupil_left_x,
      pupil_left_y,
      pupil_right_x,
      pupil_right_y,
    });
  };

  const create3DBackground = (node: HTMLCanvasElement) => {
    spline = new Application(node);
    spline
      .load("https://prod.spline.design/5rPaPRxD6nId8tp7/scene.splinecode")
      .then(() => {
        isSplineLoaded = true;
        spline.addEventListener("mouseDown", clickWebThemeSwitcher);
        window.addEventListener("mousemove", (e) => moveEye(e, spline));
      });
  };

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener("mousemove", (e) => moveEye(e, spline));
  });

  $: if ($SelectedBackground) {
    if (browser) {
      const hasSpline = !!spline;
      const is3DBg = $SelectedBackground.name === "bg-scene";
      const isLightMode = localStorage.getItem("sand-theme") === "light";

      if (hasSpline && is3DBg && !isLightMode && isSplineLoaded) {
        setTimeout(() => (isSplineThemeChangeComplete = true), 0);
      }

      if (hasSpline && is3DBg && isLightMode && isSplineLoaded) {
        spline.removeEventListener("mouseDown", clickWebThemeSwitcher);
        spline.emitEvent("mouseDown", "Logo");
        spline.addEventListener("mouseDown", clickWebThemeSwitcher);
        setTimeout(() => (isSplineThemeChangeComplete = true), 0);
      }
    }
  }

  const sandTextLottie = (node: HTMLDivElement) => {
    const player = lottie.loadAnimation({
      container: node,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "lotties/sand-text.json",
    });
    const handleMouseEnter = () => {
      player.setDirection(1);
      player.setLoop(true);
      player.play();
    };
    const handleMouseLeave = () => {
      player.setDirection(-1);
      player.setLoop(false);
    };
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return {
      destroy: () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      },
    };
  };
</script>

<div class="hidden sm:block">
  <AppShell>
    {#if $SelectedBackground?.name === "bg-scene"}
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
    {/if}

    {#if browser && $SelectedBackground?.name === "bg-legacy"}
      <div class="dark:invert opacity-50">
        <LottiePlayer
          src="/images/backgrounds/morph-archi.json"
          autoplay={true}
          loop={true}
          renderer="svg"
          background="transparent"
          height="${100 / 3}%"
          width="100%"
          controls=""
          controlLayout=""
        />
        <LottiePlayer
          src="/images/backgrounds/morph-motion.json"
          autoplay={true}
          loop={true}
          renderer="svg"
          background="transparent"
          height="${100 / 3}%"
          controls=""
          controlLayout=""
        />
        <LottiePlayer
          src="/images/backgrounds/morph-design.json"
          autoplay={true}
          loop={true}
          renderer="svg"
          background="transparent"
          height="${100 / 3}%"
          width="100%"
          controls=""
          controlLayout=""
        />
      </div>
    {/if}

    <div class="text-[1.375rem] absolute top-12 left-12 select-none">
      <p class="max-w-[32rem] leading-[1.35]">
        Yeah... We do shit. Come make amazing shits with us. Any type of shit
        but probably email first. Join us in harnessing a diverse spectrum of
        minds and voices to catalyze unprecedented shits. Let thy shit hit thy
        fan.
      </p>
      <div class="overflow-hidden">
        <div
          use:sandTextLottie
          class="dark:invert max-w-[32rem] h-[16rem] scale-[1.026]"
        />
      </div>

      <div class="min-h-[10.8rem]">
        <Weather />
      </div>

      <div class="mt-12 flex flex-col gap-2">
        <a
          href="/"
          class="text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Privacy Policy
        </a>
        <a
          href="/"
          class="text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Terms and Conditions
        </a>
        <a
          href="/"
          class="text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Cookie Policy
        </a>
        <a
          href="/"
          class="text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Made by The Sand Studio {new Date().getFullYear()}
        </a>
      </div>

      <a
        href="https://www.websitecarbon.com/website/thesandstudio-vercel-app/"
        target="_black"
        class="block rounded-full px-4 py-3 w-80 text-sand-green dark:text-black dark:bg-sand-green border-2 border-sand-green text-left mt-16"
      >
        0.25g of CO2 /view
      </a>
    </div>

    <div
      class={twm(
        "w-52 aspect-square absolute top-12 left-1/2 -translate-x-1/2 z-[2]",
        $SelectedBackground?.name === "bg-scene" && "hidden",
      )}
    >
      <Logo />
    </div>

    <div class="absolute top-12 right-12 flex gap-5 z-[2]">
      <Apps />
    </div>

    <Dock />

    {#if isSandScanOpen}
      <SandScan />
    {/if}

    {#if isFinderOpen}
      <Finder />
    {/if}

    {#if isBackgroundsOpen}
      <Backgrounds />
    {/if}

    {#if isChildOpen}
      <Child />
    {/if}

    {#if openMediaFiles.length > 0}
      {#each openMediaFiles as file, index}
        <MediaWindow {file} {index} />
      {/each}
    {/if}
  </AppShell>
</div>

<div class="sm:hidden bg-black font-sand-mobile-regular">
  <div class="h-[100dvh] p-1 relative pb-12 mx-auto">
    <div
      class="relative overflow-hidden h-full rounded-[45px] bg-white dark:bg-black text-black dark:text-white sand-transition"
    >
      <img
        src="/images/mobile-dot-bg.png"
        class="absolute inset-0 h-full w-full object-cover dark:invert sand-transition"
        alt=""
      />
      <header class="mt-5 px-3 bg-white dark:bg-black relative py-[2px]">
        <button
          class="sand-transition flex items-center justify-between gap-1 border-2 border-black dark:border-white rounded-full px-[5px] py-[2px]"
        >
          <div class="text-lg font-sand-mobile-bold mt-[2px] leading-[0.6]">
            LOGIN
          </div>
          <div class="w-4"><LogoShape /></div>
        </button>

        <div
          class="absolute w-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl leading-none"
        >
          <Sand />
        </div>
      </header>

      <div class="relative swiper pb-5">
        <div class="swiper-wrapper flex h-[calc(100dvh-11rem)]">
          <!-- Home -->
          <div class="swiper-slide h-full overflow-scroll shrink-0 p-5">
            <div class="h-full bg-white dark:bg-black w-full p-1">
              <div class="h-full p-4 relative">
                <img
                  class="absolute inset-0 w-full h-full invert dark:invert-0 sand-transition"
                  src="/images/mobile/border-v-long.png"
                  alt=""
                />
                <div class="relative text-2xl leading-[0.75] max-w-[14rem]">
                  Yeah... We do shit. Come make amazing shits with us. Any type
                  of shit but probably email first. Join us in harnessing a
                  diverse spectrum of minds and voices to catalyse unprecedented
                  shits. Let thy shit hit thy fan.
                </div>
                <div class="relative my-5 w-5/6">
                  <Sand />
                </div>

                <div class="relative flex flex-col mb-5">
                  <a href="/" class="leading-[0.9] text-xl"> Privacy Policy </a>
                  <a href="/" class="leading-[0.9] text-xl">
                    Terms and Conditions
                  </a>
                  <a href="/" class="leading-[0.9] text-xl"> Cookie Policy </a>
                  <a href="/" class="leading-[0.9] text-xl mt-5">
                    Made by The Sand Studio {new Date().getFullYear()}
                  </a>
                </div>

                <a
                  href="https://www.websitecarbon.com/website/thesandstudio-vercel-app/"
                  target="_black"
                  class="relative block rounded-full px-4 py-1 w-5/6 text-sand-green dark:text-black dark:bg-sand-green border-2 border-sand-green text-left"
                >
                  0.25g of CO2 /view
                </a>
              </div>
            </div>
          </div>

          <!-- Menu -->
          <div class="swiper-slide shrink-0 h-full p-5">
            <div
              class="grid grid-cols-2 place-content-start gap-5 h-full overflow-scroll"
            >
              <Links {swiper} />
            </div>
          </div>

          <!-- About -->
          <div class="swiper-slide h-full overflow-scroll shrink-0 p-5">
            <div class="h-full bg-white dark:bg-black w-full p-1">
              <div class="h-full p-4 relative">
                <img
                  class="absolute inset-0 w-full h-full invert dark:invert-0 sand-transition"
                  src="/images/mobile/border-v-long.png"
                  alt=""
                />
                <div class="font-sand-mobile-bold text-5xl leading-none mb-3">
                  The Sand Studio
                </div>
                <div class="relative text-2xl leading-[0.75] mb-4">
                  We are more than just a design studio; we are a collective of
                  innovative spirits venturing where most have traveled less.
                </div>
                <div class="relative text-2xl leading-[0.75] mb-4">
                  Our team embodies a fusion of talents in Architecture, Design,
                  Motion, and Code. We are the home for the curious, the
                  thinkers, the makers, and the doers who are passionate about
                  transforming bold ideas into tangible realities.
                </div>
                <div class="relative text-2xl leading-[0.75] mb-4">
                  Our ethos is rooted in pushing boundaries and delving into the
                  intersections of diverse fields. We don't just create; we
                  collaborate,
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="swiper-pagination h-5 flex items-center justify-center"
        ></div>
      </div>
    </div>

    <MobileDock {swiper} />
  </div>
</div>
