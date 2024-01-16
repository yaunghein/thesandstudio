<script lang="ts">
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { Application } from "@splinetool/runtime";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import lottie from "lottie-web";
  import Dock from "$lib/components/Dock.svelte";
  import AppShell from "$lib/components/AppShell.svelte";
  import AppIcon from "$lib/components/AppIcon.svelte";
  import Finder from "$lib/components/Finder.svelte";
  import MediaWindow from "$lib/components/MediaWindow.svelte";
  import Weather from "$lib/components/Weather.svelte";
  import Backgrounds from "$lib/components/Backgrounds.svelte";
  import SandScan from "$lib/components/sand-scan/SandScan.svelte";
  import Logo from "$lib/svgs/Logo.svelte";
  import { OpenShells, addShell, removeShell } from "$lib/stores/shell";
  import { SelectedBackground } from "$lib/stores/background";
  import {
    openArchiveTab,
    openAboutTab,
    FilePreview,
  } from "$lib/stores/finder";
  import type { AppIcon as TAppIcon } from "$lib/types";

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

  let spline: any;
  const create3DBackground = (node: HTMLCanvasElement) => {
    spline = new Application(node);
    spline
      .load("https://prod.spline.design/5rPaPRxD6nId8tp7/scene.splinecode")
      // .load("https://prod.spline.design/VTpVNzKWHkIl-K3I/scene.splinecode")
      .then(() => {
        // console.log(spline.getSplineEvents());
        spline.addEventListener("mouseDown", (e: any) => {
          console.log(e.target.name);
          if (e.target.name === "Ellipse") {
            document.getElementById("dark-btn")?.click();
          }
        });
      });
  };

  const handleFinderIconClick = (fn: () => void) => {
    // might need to debug later to handle FilePreviewHistory and HistoryIndex
    FilePreview.set(undefined);
    removeShell("finder");
    addShell({ id: "finder", zIndex: 65 });
    fn();
  };

  const NAV_ITEMS: TAppIcon[] = [
    {
      label: "SAND Scan",
      lottie: "lotties/icon-sand-scan.json",
      handleClick: () => addShell({ id: "sand-scan", zIndex: 65 }),
    },
    {
      label: "For All Thingkind",
      lottie: "lotties/icon-sand-scan.json",
      handleClick: () => goto("/for-all-thingkind"),
    },
    {
      label: "Works",
      lottie: "lotties/icon-sand-scan.json",
      handleClick: () => goto("/works"),
    },
    {
      label: "Not Works",
      lottie: "lotties/icon-sand-scan.json",
      handleClick: () => goto("/not-works"),
    },
    {
      label: "Archives",
      lottie: "lotties/icon-sand-scan.json",
      handleClick: () => handleFinderIconClick(openArchiveTab),
    },
    {
      label: "About",
      lottie: "lotties/icon-sand-scan.json",
      handleClick: () => {
        handleFinderIconClick(openAboutTab);
        setTimeout(() => document.getElementById("We are SAND")?.click(), 0); // kind of bad thing :/
      },
    },
  ];

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

<div>
  <AppShell>
    {#if $SelectedBackground?.name === "Sand Dunes"}
      <div class="sticky top-0">
        <canvas use:create3DBackground></canvas>
      </div>
    {/if}

    {#if browser && $SelectedBackground?.name === "Legacy"}
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

    <div class="absolute top-12 left-12 select-none">
      <div use:sandTextLottie class="dark:invert w-[31.5rem]"></div>
      <p class="mb-4 text-xl max-w-[31rem]">
        We are a multi-disciplinary design studio and a collection of curious
        makers, doers and thinkers, that study the practices of Architecture,
        Design, Motion and Code.
        <br />
        <br />
        SAND collaborates with amazing people to create meaningful work through meaningful
        relationships.
      </p>
    </div>

    {#if $SelectedBackground?.name !== "Sand Dunes"}
      <div
        class="w-52 aspect-square absolute top-12 left-1/2 -translate-x-1/2 z-[2]"
      >
        <Logo />
      </div>
    {/if}

    <div class="absolute top-12 right-12 flex gap-5 z-[2]">
      <div class="grid grid-cols-2 gap-5">
        {#each NAV_ITEMS as item}
          <AppIcon icon={item} />
        {/each}
      </div>
    </div>
  </AppShell>
  <!-- 
  <Weather /> -->

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

  {#if openMediaFiles.length > 0}
    {#each openMediaFiles as file, index}
      <MediaWindow {file} {index} />
    {/each}
  {/if}
</div>
