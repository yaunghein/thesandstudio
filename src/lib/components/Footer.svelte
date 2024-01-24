<script lang="ts">
  import { browser } from "$app/environment";
  import gsap from "gsap";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { twMerge as twm } from "tailwind-merge";
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
  use:clickOutside={{
    callback: () => {
      isOpen = false;
      CursorType.set("normal");
    },
  }}
  class="relative z-[10] text-light-10 dark:text-light-100 text-5xl font-sans -mx-3"
>
  <div
    class="absolute inset-0 w-full h-full bg-light-90 dark:bg-black opacity-50"
  />
  <div
    class="absolute w-[32rem] h-16 -top-16 left-1/2 -translate-x-1/2 font-sand-medium text-xl sand-transition"
  >
    {#if !isOpen}
      <span class="absolute top-0 left-1/2 -translate-x-1/2">
        ©2023 The Sand Studio
      </span>
    {/if}
    <button
      on:click={() => {
        isOpen = !isOpen;
        CursorType.set("normal");
      }}
      class="group absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-4 hover:h-10 rounded-t-2xl grid place-items-center bg-light-90 dark:bg-black text-light dark:text-dark border-3 border-b-0 border-white dark:border-light-12 transition-all"
    >
      {#if !isOpen}
        <span class={twm("mt-2 transition", isOpen && "rotate-180")}>
          <svg
            width="50"
            height="18"
            viewBox="0 0 50 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-3"
          >
            <path
              d="M25.0002 0L49.2489 18H0.751465L25.0002 0Z"
              fill="currentColor"
            />
          </svg>
        </span>
      {/if}
    </button>
  </div>
  <!-- h-[33.75rem] -->
  <div
    role="region"
    on:mouseenter={() => CursorType.set("normal")}
    on:mouseleave={() => CursorType.set("footer-close")}
    class="{isOpen
      ? 'h-[28rem]'
      : 'h-[0rem]'} flex flex-col transition-all overflow-hidden"
  >
    <div class="relative flex items-center px-[3.75rem] pt-6">
      <div class="w-1/3">
        <a href="/" on:mouseenter={() => CursorType.set("normal")}>
          INSTAGRAM
        </a>
      </div>
      <div class="w-1/3 grid place-items-center">
        <a href="/" on:mouseenter={() => CursorType.set("normal")}>
          FACEBOOK
        </a>
      </div>
      <div class="w-1/3 grid place-items-end">
        <a href="/" on:mouseenter={() => CursorType.set("normal")}>
          @{new Date().getFullYear()}
        </a>
      </div>
    </div>

    <a
      href="mailto:hi@thesandstudio.com"
      on:mouseenter={() => CursorType.set("contact")}
      on:mouseleave={() => CursorType.set("normal")}
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
