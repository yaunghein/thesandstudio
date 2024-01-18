<script lang="ts">
  import { browser } from "$app/environment";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import gsap from "gsap";
  import clickOutside from "$lib/utils/clickOutside";
  import Logo from "$lib/svgs/Logo.svelte";
  import { CursorType } from "$lib/stores/cursor";

  let isOpen = false;

  const moveText = (node: HTMLDivElement) => {
    const tl = gsap.timeline({ repeat: Infinity });
    tl.to(node, { x: "-100%", duration: 7.5, ease: "none" }).set(node, {
      x: "0%",
    });
  };
</script>

<footer
  class="relative z-[1000000] bg-light-100 dark:bg-light-10 text-light-10 dark:text-light-100 text-5xl font-sans -mx-3"
>
  <button
    class="group absolute w-[32rem] h-6 hover:h-20 -top-6 hover:-top-16 left-1/2 -translate-x-1/2 transition-all"
    on:click={() => {
      isOpen = !isOpen;
      CursorType.set("normal");
    }}
  >
    <div
      class="group mx-auto w-[32rem] group-hover:w-[18.25rem] h-full rounded-t-3xl group-hover:rounded-t-xl font-sand-medium text-xl grid place-items-center bg-light-100 dark:bg-light-10 text-light dark:text-dark transition-all"
    >
      <span class="opacity-0 group-hover:opacity-100 transition-opacity">
        ©2023 The Sand Studio
      </span>
    </div>
  </button>
  <!-- h-[33.75rem] -->
  <div
    class="{isOpen
      ? 'h-[28rem]'
      : 'h-[0rem]'} flex flex-col transition-all overflow-hidden"
  >
    <div class="flex items-center px-[3.75rem] pt-6">
      <div class="w-1/3">
        <a
          href="/"
          on:mouseenter={() => CursorType.set("normal")}
          on:mouseleave={() => CursorType.set("footer-close")}
        >
          INSTAGRAM
        </a>
      </div>
      <div class="w-1/3 grid place-items-center">
        <a
          href="/"
          on:mouseenter={() => CursorType.set("normal")}
          on:mouseleave={() => CursorType.set("footer-close")}
        >
          FACEBOOK
        </a>
      </div>
      <div class="w-1/3 grid place-items-end">
        <a
          href="/"
          on:mouseenter={() => CursorType.set("normal")}
          on:mouseleave={() => CursorType.set("footer-close")}
        >
          @{new Date().getFullYear()}
        </a>
      </div>
    </div>

    <a
      href="mailto:hi@thesandstudio.com"
      use:clickOutside={{
        callback: () => {
          isOpen = false;
          CursorType.set("normal");
        },
      }}
      on:mouseenter={() => CursorType.set("footer")}
      on:mouseleave={() => CursorType.set("footer-close")}
      class="text-[25rem] flex whitespace-nowrap overflow-hidden h-full"
    >
      <div class="flex items-center">
        <div use:moveText class="flex h-full">
          <div
            class="w-[20.75rem] aspect-square shrink-0 ml-10 mr-5 pointer-events-none"
          >
            <Logo />
          </div>
          {#if browser}
            <div class="dark:invert flex items-center h-full">
              <LottiePlayer
                src="/lotties/sand-footer-text.json"
                autoplay={true}
                loop={true}
                renderer="svg"
                background="transparent"
                width={window.innerWidth}
                height="100%"
                controls=""
                controlsLayout=""
              />
            </div>
          {/if}
        </div>

        <div use:moveText class="flex h-full">
          <div
            class="w-[20.75rem] aspect-square shrink-0 ml-10 mr-5 pointer-events-none"
          >
            <Logo />
          </div>
          {#if browser}
            <div class="dark:invert flex items-center h-full">
              <LottiePlayer
                src="/lotties/sand-footer-text.json"
                autoplay={true}
                loop={true}
                renderer="svg"
                background="transparent"
                width={window.innerWidth}
                controls=""
                controlsLayout=""
              />
            </div>
          {/if}
        </div>
      </div>
    </a>
  </div>
</footer>
