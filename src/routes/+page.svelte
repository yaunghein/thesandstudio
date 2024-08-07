<script lang="ts">
  import { browser } from "$app/environment";
  import gsap from "gsap";
  import { onMount, onDestroy } from "svelte";
  import lottie from "lottie-web";
  import { Application } from "@splinetool/runtime";
  import { twMerge as twm } from "tailwind-merge";
  import Swiper from "swiper";
  import { Pagination } from "swiper/modules";
  import { addShell, OpenShells } from "$lib/stores/shell";
  import { SelectedBackground, changeBackground } from "$lib/stores/background";
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
  import Header from "$lib/components/mobile/Header.svelte";
  import MobileAppShell from "$lib/components/mobile/AppShell.svelte";
  import SlideHome from "$lib/components/mobile/SlideHome.svelte";
  import SlideMenu from "$lib/components/mobile/SlideMenu.svelte";
  import SlideAbout from "$lib/components/mobile/SlideAbout.svelte";
  import SlideContact from "$lib/components/mobile/SlideContact.svelte";
  import SlideFATK from "$lib/components/mobile/SlideFATK.svelte";
  import SlideNotWork from "$lib/components/mobile/SlideNotWork.svelte";
  import SlideWork from "$lib/components/mobile/SlideWork.svelte";
  import SlideExplorer from "$lib/components/mobile/SlideExplorer.svelte";
  import MetaData from "$lib/components/MetaData.svelte";
  import LoadingScreen from "$lib/components/LoadingScreen.svelte";
  import MobileLoadingScreen from "$lib/components/mobile/LoadingScreen.svelte";
  import SChat from "$lib/components/schat/SChat.svelte";
  import LaunchSkit from "$lib/components/LaunchSkit.svelte";

  import "swiper/css/pagination";

  // let { supabase, session } = data;
  // $: ({ supabase, session } = data);

  export let data;
  const { isMac, isMobile, shouldShowLoadingScreen } = data;

  let swiperIndex = 0;

  onMount(() => {
    if (!browser) return;

    // set legacy bg as default only in Mac (data.shouldShowLoadingScreen indicates this is first time or reset state)
    if (isMac && sessionStorage.getItem("sand-background") !== "bg-scene") {
      changeBackground("bg-legacy");
    }

    if (!data.shouldShowLoadingScreen) {
      gsap.set("#virtual-assistant", { zIndex: 56 });
      addShell({ id: "launch-skit", zIndex: 65 });
    }

    // this means codes below within onMount are for mobile
    if (!isMobile) return;
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

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  // };

  $: isSandScanOpen = $OpenShells.find((shell) => shell.id === "sand-scan");

  $: isBackgroundsOpen = $OpenShells.find(
    (shell) => shell.id === "backgrounds",
  );
  $: openMediaFiles = $OpenShells.filter((shell) => !!shell.file);
  $: isChildOpen = $OpenShells.find((shell) => shell.id === "child");
  $: isSChatOpen = $OpenShells.find((shell) => shell.id === "schat");
  $: isLaunchSkitOpen = $OpenShells.find((shell) => shell.id === "launch-skit");

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

    spline?.setVariables({
      pupil_left_x,
      pupil_left_y,
      pupil_right_x,
      pupil_right_y,
    });
  };

  const handleMoveEyes = (e: MouseEvent) => moveEye(e, spline);

  // a couple timeout wrappers to ensure the spline app loads properly 🥲
  const create3DBackground = (node: HTMLCanvasElement) => {
    CursorType.set("loading");
    spline = new Application(node);
    setTimeout(() => {
      spline
        .load("https://prod.spline.design/0JtwT9xb53fikO5h/scene.splinecode")
        .then(() => {
          setTimeout(() => (isSplineLoaded = true), 1000);
          CursorType.set("normal");
          spline.addEventListener("mouseDown", clickWebThemeSwitcher);
          window.addEventListener("mousemove", handleMoveEyes);
        });
    }, 3000);
  };

  onDestroy(() => {
    if (!browser) return;
    window.removeEventListener("mousemove", handleMoveEyes);
  });

  $: if ($SelectedBackground) {
    if (browser) {
      const hasSpline = !!spline;
      const is3DBg = $SelectedBackground.name === "bg-scene";
      const isLightMode = localStorage.getItem("sand-theme") === "light";

      if (!is3DBg) {
        spline = null;
        isSplineLoaded = false;
        isSplineThemeChangeComplete = false;
      }

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
      renderer: "canvas",
      loop: false,
      autoplay: false,
      path: "https://res.cloudinary.com/dlhbpswom/raw/upload/v1715936485/lotties/sand-text_cae3ah.json",
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

  let loadedLegacyLotties: { player: any; startFrame: number }[] = [];
  $: if ($SelectedBackground.name !== "bg-legacy") {
    loadedLegacyLotties = [];
  }
  $: if (loadedLegacyLotties.length === 3) {
    for (const lottie of loadedLegacyLotties) {
      lottie.player.goToAndPlay(lottie.startFrame, true);
    }
  }
  const legacyLottie = (node: HTMLDivElement, startFrame: number) => {
    const player = lottie.loadAnimation({
      container: node,
      renderer: "canvas",
      loop: true,
      autoplay: false,
      path: "https://res.cloudinary.com/dlhbpswom/raw/upload/v1715748233/lotties/background-legacy_zdjgh0.json",
    });
    player.addEventListener("DOMLoaded", () => {
      loadedLegacyLotties = [...loadedLegacyLotties, { player, startFrame }];
    });
  };

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

<MetaData
  pageTitle="The Sand Studio"
  title="The Sand Studio"
  description="Yeah... We do shit. Come make amazing shits with us. Any type of shit but probably email first. Join us in harnessing a diverse spectrum of minds and voices to catalyze unprecedented shits. Let thy shit hit thy fan."
/>

{#if !isMobile}
  <AppShell show={data.shouldShowLoadingScreen}>
    <LoadingScreen show={data.shouldShowLoadingScreen} />
    <div class="overflow-hidden h-[calc(100vh-6rem)]">
      <div class="page-wrapper">
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

        <div
          class="text-[1.375rem] absolute top-12 left-12 select-none flex flex-col items-start"
        >
          <p class="fade-up max-w-[32rem] leading-[1.35]">
            Yeah... We do shit. Come make amazing shits with us. Any type of
            shit but probably email first. Join us in harnessing a diverse
            spectrum of minds and voices to catalyze unprecedented shits. Let
            thy shit hit thy fan.
          </p>
          <div class="overflow-hidden">
            <div
              use:sandTextLottie
              class="fade-up dark:invert max-w-[32rem] h-[16rem] scale-[1.026]"
            />
          </div>

          <div class="fade-up min-h-[10.8rem]">
            <Weather />
          </div>

          <div class="mt-12 flex flex-col items-start gap-2">
            <button
              on:click={openPrivacyPolicy}
              class="fade-up text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
            >
              Privacy Policy
            </button>
            <button
              on:click={openTermsAndConditions}
              class="fade-up text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
            >
              Terms and Conditions
            </button>
            <button
              on:click={openCookiesPolicy}
              class="fade-up text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
            >
              Cookies Policy
            </button>
            <a
              href="/"
              class="fade-up mt-5 text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
            >
              Made by The Sand Studio {new Date().getFullYear()}
            </a>
          </div>

          <a
            href="https://greenpixie.com/sites/www-thesandstudio-com"
            target="_black"
            class="fade-up block scale-[0.7] origin-top-left rounded-full px-4 py-3 text-sand-green hover:bg-sand-green hover:text-light-10 transition border-2 border-sand-green text-left mt-16"
          >
            Calculate CO2 Emission
          </a>
        </div>

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

        {#if isSChatOpen}
          <SChat />
        {/if}
        <button
          on:click={() => addShell({ id: "schat", zIndex: 65 })}
          id="virtual-assistant"
          class={twm(
            "ade-up group fixed top-[8rem] left-1/2 translate-x-[7rem] flex items-center gap-3",
            $SelectedBackground?.name === "bg-scene" && "hidden",
          )}
        >
          <div
            class="shrink-0 w-[3.44rem] h-[3.44rem] group-hover:text-sand-green sand-transition"
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.5543 32.9846L50.3477 27.4997L54.5543 22.0147C54.9604 21.4851 55.0968 20.7976 54.925 20.1531C54.752 19.5086 54.2901 18.9811 53.6735 18.7255L47.2883 16.0764L48.181 9.22184C48.2669 8.5612 48.0414 7.89733 47.5709 7.42683C47.0993 6.95524 46.4365 6.72966 45.7758 6.81667L38.9212 7.70934L36.2722 1.32526C36.0166 0.708662 35.4891 0.246748 34.8446 0.0737987C34.2001 -0.0980763 33.5126 0.0383494 32.983 0.444404L27.498 4.65104L22.013 0.44333C21.4834 0.0372752 20.7959 -0.0991506 20.1514 0.0727244C19.5069 0.245674 18.9794 0.707588 18.7238 1.32419L16.0748 7.70934L9.22017 6.81667C8.55952 6.73073 7.89673 6.95632 7.42515 7.42683C6.95357 7.89841 6.72798 8.5612 6.81499 9.22184L7.70767 16.0764L1.32358 18.7265C0.708057 18.9822 0.245069 19.5096 0.0731936 20.1542C-0.0997556 20.7987 0.0377444 21.4862 0.443799 22.0158L4.65044 27.5008L0.443799 32.9857C0.0377444 33.5153 -0.0986814 34.2028 0.0731936 34.8473C0.246143 35.4919 0.708057 36.0193 1.32466 36.275L5.28745 37.9196L5.11558 38.7199L1.86177 50.1034C1.65337 50.8328 1.84565 51.618 2.36665 52.1691C2.88872 52.7202 3.66323 52.9554 4.4023 52.7868L15.1724 50.3365L17.1533 49.8842L18.727 53.6773C18.9827 54.2928 19.5101 54.7558 20.1546 54.9277C20.7992 55.1007 21.4867 54.9632 22.0163 54.5571L27.5012 50.3505L32.9862 54.5582C33.3654 54.8493 33.8251 55.0018 34.2924 55.0018C34.4772 55.0018 34.6641 54.9782 34.8478 54.9288C35.4923 54.7558 36.0198 54.2939 36.2754 53.6784L38.9245 47.2932L45.7791 48.1859C46.4408 48.274 47.1036 48.0463 47.5741 47.5758C48.0457 47.1042 48.2712 46.4414 48.1842 45.7807L47.2916 38.9261L53.6756 36.2771C54.2922 36.0215 54.7542 35.494 54.9271 34.8495C55.1001 34.205 54.9626 33.5174 54.5565 32.9879L54.5543 32.9846ZM16.2069 30.1423C14.747 30.1423 13.5643 28.9595 13.5643 27.4997C13.5643 26.0398 14.747 24.8571 16.2069 24.8571C17.6667 24.8571 18.8495 26.0398 18.8495 27.4997C18.8495 28.9595 17.6667 30.1423 16.2069 30.1423ZM27.7085 30.1423C26.2487 30.1423 25.066 28.9595 25.066 27.4997C25.066 26.0398 26.2487 24.8571 27.7085 24.8571C29.1684 24.8571 30.3511 26.0398 30.3511 27.4997C30.3511 28.9595 29.1684 30.1423 27.7085 30.1423ZM39.2113 30.1423C37.7514 30.1423 36.5687 28.9595 36.5687 27.4997C36.5687 26.0398 37.7514 24.8571 39.2113 24.8571C40.6711 24.8571 41.8539 26.0398 41.8539 27.4997C41.8539 28.9595 40.6711 30.1423 39.2113 30.1423Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            class="relative text-base opacity-0 group-hover:opacity-100 text-sand-green sand-transition"
          >
            Virtual Assistant
          </div>
        </button>

        {#if isLaunchSkitOpen}
          <LaunchSkit />
        {/if}

        {#if openMediaFiles.length > 0}
          {#each openMediaFiles as file, index (file.id)}
            <MediaWindow {file} {index} />
          {/each}
        {/if}

        <div class="fade-up h-[calc(100vh-3rem)] pointer-events-none">
          {#if $SelectedBackground?.name === "bg-legacy"}
            <div
              class={twm(
                "dark:invert h-full flex flex-col justify-between overflow-hidden sand-transition",
                loadedLegacyLotties.length === 3
                  ? "opacity-10 dark:opacity-20"
                  : "opacity-0",
              )}
            >
              <div use:legacyLottie={0} class="h-[28rem]" />
              <div use:legacyLottie={120} class="h-[28rem]" />
              <div use:legacyLottie={240} class="h-[28rem]" />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </AppShell>
{/if}

{#if isMobile}
  {#if data.shouldShowLoadingScreen}
    <MobileLoadingScreen />
  {/if}
  <MobileAppShell>
    <Header />
    <div class="swiper relative pb-3">
      <div class="swiper-wrapper flex h-[calc(100dvh-9rem)] pt-2 pb-3">
        <SlideHome />
        <SlideMenu />
        <SlideAbout />
        <SlideContact {swiperIndex} />
        <SlideFATK />
        <SlideNotWork />
        <SlideWork />
        <SlideExplorer />
      </div>
    </div>
  </MobileAppShell>
{/if}
