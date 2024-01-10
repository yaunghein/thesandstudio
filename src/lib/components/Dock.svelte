<script lang="ts">
  import { gsap, Power4 } from "gsap";
  import { goto } from "$app/navigation";
  import AppIcon from "$lib/components/AppIcon.svelte";
  import IconChild from "$lib/svgs/IconChild.svelte";
  import IconExplorer from "$lib/svgs/IconExplorer.svelte";
  import IconBackground from "$lib/svgs/IconBackground.svelte";
  import IconContact from "$lib/svgs/IconContact.svelte";
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
      gsap.to(".icon-wrapper", {
        ease: Power4.easeOut,
        duration: 0.2,
        width: "9rem",
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
        gsap.to(icon.querySelector(".icon-wrapper"), {
          ease: Power4.easeOut,
          duration: 0.2,
          width: `${9 * scale}rem`,
        });
      }
    }
  };

  const NAV_ITEMS: TAppIcon[] = [
    {
      label: "Child",
      icon: IconChild,
      handleClick: () => goto("/child"),
    },
    {
      label: "Explorer",
      icon: IconExplorer,
      handleClick: () => addShell({ id: "finder", zIndex: 65 }),
    },
    {
      label: "Backgrounds",
      icon: IconBackground,
      handleClick: () => addShell({ id: "backgrounds", zIndex: 65 }),
    },
    {
      label: "Contact",
      icon: IconContact,
      handleClick: () => {
        removeShell("finder");
        addShell({ id: "finder", zIndex: 65 });
        openContactTab();
        setTimeout(() => document.getElementById("Inquiry")?.click(), 0); // kind of bad thing :/
      },
    },
  ];
</script>

<div
  use:magnify
  class="z-[2] h-36 p-4 absolute bottom-24 left-1/2 -translate-x-1/2 backdrop-blur-3xl bg-light-90 dark:bg-light-20 border-3 border-light-95 dark:border-light-25 flex items-end rounded-3xl"
>
  {#each NAV_ITEMS as item, index}
    <div class={index === 0 ? "" : "pl-4"}>
      <AppIcon data={item} isInDock={true} />
    </div>
  {/each}
</div>
