<script lang="ts">
  import { gsap, Power4 } from "gsap";
  import { goto } from "$app/navigation";
  import lottie from "lottie-web";
  import { changeCursorType } from "$lib/stores/cursor";
  import LabelExplorer from "$lib/svgs/LabelExplorer.svelte";
  import { addShell } from "$lib/stores/shell";
  import { openContactTab } from "$lib/stores/finder";
  import ContactFormTubeLabel from "$lib/svgs/ContactFormTubeLabel.svelte";

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

  const openInquiryForm = () => {
    addShell({ id: "finder", zIndex: 65 });
    openContactTab();
  };
</script>

<!-- <div
  class="fixed h-[1px] w-full right-0 left-0 bottom-80 bg-red-500 z-[2000]"
/>
<div
  class="fixed h-[1px] w-full right-0 left-0 bottom-[17.5rem] bg-red-500 z-[2000]"
/>
<div
  class="fixed h-[1px] w-full right-0 left-0 bottom-24 bg-red-500 z-[2000]"
/>
<div
  class="fixed h-[1px] w-full right-0 left-0 bottom-20 bg-red-500 z-[2000]"
/> -->

<div
  use:magnify
  use:changeCursorType={{ inType: "a-chon-lyy", outType: "normal" }}
  class="z-[2] h-36 p-4 fixed bottom-16 left-1/2 -translate-x-1/2 border-2 border-white dark:border-light-12 flex items-end rounded-3xl gap-4"
>
  <div
    class="absolute rounded-[1.3rem] inset-0 w-full h-full bg-light-90 dark:bg-black opacity-sand"
  />
  <!-- ########## Child ########## -->
  <button
    on:click={() => addShell({ id: "child", zIndex: 65 })}
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-sand-blue dark:border-light-12 dark:hover:border-sand-blue grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-sand-blue opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-32 absolute scale-1 group-hover:scale-[1.6] invert dark:invert-0 group-hover:invert-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] group-hover:-translate-y-[75%] sand-transition"
    >
      <div use:playLottieOnHover={"lotties/child.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
    >
      CHILD*
    </div>
  </button>

  <!-- ########## Explorer ########## -->
  <button
    on:click={() => addShell({ id: "finder", zIndex: 65 })}
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-light-10 dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-light-100 opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-32 absolute scale-[1.2] group-hover:scale-[1.8] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] group-hover:-translate-y-[92%] sand-transition"
    >
      <div use:playLottieOnHover={"lotties/explorer-2000.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-[6%] sand-transition"
    >
      <div class="w-28">
        <LabelExplorer />
      </div>
    </div>
  </button>

  <!-- ########## Background ########## -->
  <button
    on:click={() => addShell({ id: "backgrounds", zIndex: 65 })}
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-light-10 dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-light-100 opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-32 absolute scale-[1.4] group-hover:scale-[1.8] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] group-hover:-translate-y-[73%] sand-transition"
    >
      <div use:playLottieOnHover={"lotties/backgrounds.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
    >
      <div
        class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-0 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[52%] sand-transition"
      >
        Backgrounds
      </div>
    </div>
  </button>

  <!-- ########## Contact ########## -->
  <button
    on:click={openInquiryForm}
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-light-10 dark:border-light-12 dark:hover:border-white p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-light-100 opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-32 absolute origin-top-left scale-[1.1] group-hover:scale-[1.5] group-hover:translate-y-[8%] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-0 left-0 sand-transition"
    >
      <div use:playLottieOnHover={"lotties/contact.json"} />
    </div>
    <div
      class="w-44 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-1/2 -translate-x-1/2 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
    >
      <div
        class="w-44 mx-auto text-2xl text-center group-hover:leading-[1] origin-right font-sand-medium absolute left-1/2 -translate-x-1/2 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[25%] sand-transition"
      >
        <ContactFormTubeLabel />
      </div>
    </div>
  </button>
</div>
