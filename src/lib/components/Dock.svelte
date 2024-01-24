<script lang="ts">
  import { gsap, Power4 } from "gsap";
  import { goto } from "$app/navigation";
  import lottie from "lottie-web";
  import IconChild from "$lib/svgs/IconChild.svelte";
  import IconExplorer from "$lib/svgs/IconExplorer.svelte";
  import IconBackground from "$lib/svgs/IconBackground.svelte";
  import IconContact from "$lib/svgs/IconContact.svelte";
  import LabelExplorer from "$lib/svgs/LabelExplorer.svelte";
  import type { AppIcon as TAppIcon } from "$lib/types";
  import { addShell, removeShell } from "$lib/stores/shell";
  import { openContactTab } from "$lib/stores/finder";

  const magnify = (node: HTMLElement) => {
    const dock = node;
    const apps = dock.querySelectorAll("button");
    let firstIcon = apps[0];

    let min = 140;
    let max = 280;
    let bound = min * Math.PI;

    dock.addEventListener("mousemove", (event) => {
      let offset = dock.getBoundingClientRect().left + firstIcon.offsetLeft;
      updateApps(event.clientX - offset);
    });

    dock.addEventListener("mouseleave", () => {
      gsap.to(apps, {
        ease: Power4.easeOut,
        duration: 0.2,
        width: "10rem",
      });
    });

    function updateApps(pointer: number) {
      for (let i = 0; i < apps.length; i++) {
        let icon = apps[i];
        let distance = i * min + min / 2 - pointer;
        let scale = 1;

        if (-bound < distance && distance < bound) {
          let rad = (distance / min) * 0.5;
          scale = 1 + (max / min - 1) * Math.cos(rad);

          /**
           *  to make the scale smaller
           * i don't knwo how to modify the codes above, so i add these two lines. lol...
           */
          scale -= 0.5;
          scale = Math.max(scale, 1);
        }

        gsap.to(icon, {
          ease: Power4.easeOut,
          duration: 0.2,
          width: `${10 * scale}rem`,
        });
      }
    }
  };

  // delete later
  const NAV_ITEMS: TAppIcon[] = [
    {
      label: "Child",
      image: IconChild,
      handleClick: () => goto("/child"),
    },
    {
      label: "Explorer",
      image: IconExplorer,
      handleClick: () => addShell({ id: "finder", zIndex: 65 }),
    },
    {
      label: "Backgrounds",
      image: IconBackground,
      handleClick: () => addShell({ id: "backgrounds", zIndex: 65 }),
    },
    {
      label: "Contact",
      image: IconContact,
      handleClick: () => {
        removeShell("finder");
        addShell({ id: "finder", zIndex: 65 });
        openContactTab();
        setTimeout(() => document.getElementById("Inquiry")?.click(), 0); // kind of bad thing :/
      },
    },
  ];

  const playLottieOnHover = (node: HTMLDivElement, path: string) => {
    const player = lottie.loadAnimation({
      container: node,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path,
    });
    const handleMouseEnter = () => {
      player.setLoop(true);
      player.play();
    };
    const handleMouseLeave = () => {
      player.stop();
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

<div
  use:magnify
  class="z-[2] h-36 p-4 fixed bottom-[6.2rem] left-1/2 -translate-x-1/2 border-3 border-light-100 dark:border-light-10 flex items-end rounded-3xl gap-4"
>
  <div
    class="absolute rounded-3xl inset-0 w-full h-full bg-light-100 dark:bg-light-10 opacity-sand"
  />
  <!-- ########## Child ########## -->
  <button
    on:click={() => goto("/child")}
    class="overflow-hidden relative group text-light-100 border-3 border-light-100 hover:border-sand-blue dark:border-light-10 dark:hover:border-sand-blue grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square transition"
  >
    <div
      class="absolute inset-0 bg-light-100 dark:bg-light-10 group-hover:bg-sand-blue opacity-sand group-hover:opacity-100 transition"
    />

    <div
      class="w-32 absolute scale-1 group-hover:scale-[1.6] invert dark:invert-0 group-hover:invert-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] group-hover:-translate-y-[75%] transition"
    >
      <div use:playLottieOnHover={"lotties/child.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition"
    >
      CHILD*
    </div>
  </button>

  <!-- ########## Explorer ########## -->
  <button
    on:click={() => addShell({ id: "finder", zIndex: 65 })}
    class="overflow-hidden relative group text-light-100 border-3 border-light-100 hover:border-light-10 dark:border-light-10 dark:hover:border-light-100 grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square transition"
  >
    <div
      class="absolute inset-0 bg-light-100 dark:bg-light-10 group-hover:bg-light-10 dark:group-hover:bg-light-100 opacity-sand group-hover:opacity-100 transition"
    />

    <div
      class="w-32 absolute scale-[1.2] group-hover:scale-[1.6] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] group-hover:-translate-y-[90%] transition"
    >
      <div use:playLottieOnHover={"lotties/explorer-2000.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition"
    >
      <div class="w-28">
        <LabelExplorer />
      </div>
    </div>
  </button>

  <!-- ########## Background ########## -->
  <button
    on:click={() => addShell({ id: "backgrounds", zIndex: 65 })}
    class="overflow-hidden relative group text-light-100 border-3 border-light-100 hover:border-light-10 dark:border-light-10 dark:hover:border-light-100 grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square transition"
  >
    <div
      class="absolute inset-0 bg-light-100 dark:bg-light-10 group-hover:bg-light-10 dark:group-hover:bg-light-100 opacity-sand group-hover:opacity-100 transition"
    />

    <div
      class="w-32 absolute scale-[1.4] group-hover:scale-[1.8] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] group-hover:-translate-y-[80%] transition"
    >
      <div use:playLottieOnHover={"lotties/backgrounds.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition"
    >
      <div
        class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition"
      >
        Backgrounds
      </div>
    </div>
  </button>

  <!-- ########## Contact ########## -->
  <button
    on:click={() => addShell({ id: "backgrounds", zIndex: 65 })}
    class="overflow-hidden relative group text-light-100 border-3 border-light-100 hover:border-light-10 dark:border-light-10 dark:hover:border-light-100 grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square transition"
  >
    <div
      class="absolute inset-0 bg-light-100 dark:bg-light-10 group-hover:bg-light-10 dark:group-hover:bg-light-100 opacity-sand group-hover:opacity-100 transition"
    />

    <div
      class="w-32 absolute origin-top-left scale-[1.1] group-hover:scale-[1.5] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-0 left-0 transition"
    >
      <div use:playLottieOnHover={"lotties/contact.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition"
    >
      <div
        class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] transition"
      >
        Talk
      </div>
    </div>
  </button>
</div>

<!-- <div
  class="icon-wrapper invert dark:invert-0 group-hover:scale-150 group-hover:invert-0 dark:group-hover:invert transition"
>
  <svelte:component this={IconChild} />
</div> -->

<!-- {#each NAV_ITEMS as item, index}
  <div class={index === 0 ? "" : "pl-4"}>
    <AppIcon icon={item} isInDock={true} />
  </div>
{/each} -->

<!-- {#if browser}
  <LottiePlayer
    src="lotties/icon-sand-scan.json"
    autoplay={true}
    loop={true}
    renderer="svg"
    background="transparent"
    width="100%"
    height="100%"
    controls=""
    controlLayout=""
  />
{/if} -->
