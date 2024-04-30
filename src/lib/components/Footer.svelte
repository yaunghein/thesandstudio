<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import gsap from "gsap";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { twMerge as twm } from "tailwind-merge";
  import clickOutside from "$lib/utils/clickOutside";
  import Logo from "$lib/svgs/Logo.svelte";
  import { CursorType } from "$lib/stores/cursor";
  import { openContactTab } from "$lib/stores/finder";
  import { addShell } from "$lib/stores/shell";

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
  class="relative z-[20] text-light-10 dark:text-light-100 text-5xl font-sans"
>
  <div class="transparent-layer" />
  <div
    class="absolute w-[32rem] h-16 -top-16 left-1/2 -translate-x-1/2 font-sand-medium text-xl sand-transition"
  >
    {#if !isOpen && $page.url.pathname === "/"}
      <span class="absolute top-0 left-1/2 -translate-x-1/2 hidden">
        ©{new Date().getFullYear()} The Sand Studio
      </span>
    {/if}

    {#if !isOpen}
      <button
        on:click={() => {
          isOpen = !isOpen;
          CursorType.set("normal");
        }}
        class="group absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-4 hover:h-10 rounded-t-2xl grid place-items-center bg-light-90 dark:bg-black text-light dark:text-dark border-2 border-b-0 border-white dark:border-light-12 transition-all"
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
    {/if}
  </div>

  {#if isOpen}
    <div class="absolute z-20 top-0 left-0 right-0 w-full">
      <div
        class="w-[1.63rem] aspect-square absolute left-0 bottom-0 text-white dark:text-light-12"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 26C10.7452 26 0 15.2548 0 2V26H24Z"
            class="fill-light-90 dark:fill-black opacity-50"
          />
          <path
            d="M1 0V2.5C1 14.9264 11.0736 25 23.5 25C24.3342 25 25.1675 25 26 25"
            class="stroke-[0.125rem] stroke-current"
            stroke="#1400FF"
            stroke-width="2"
          />
        </svg>
      </div>

      <div
        class="absolute left-[1.63rem] right-[1.63rem] h-[0.11rem] bottom-0 bg-white dark:bg-light-12"
      />

      <div
        class="w-[1.63rem] aspect-square absolute right-0 bottom-0 -scale-x-[1] text-white dark:text-light-12"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 26C10.7452 26 0 15.2548 0 2V26H24Z"
            class="fill-light-90 dark:fill-black opacity-50"
          />
          <path
            d="M1 0V2.5C1 14.9264 11.0736 25 23.5 25C24.3342 25 25.1675 25 26 25"
            class="stroke-[0.125rem] stroke-current"
            stroke="#1400FF"
            stroke-width="2"
          />
        </svg>
      </div>
    </div>
  {/if}

  <div
    role="region"
    on:mouseenter={() => CursorType.set("normal")}
    on:mouseleave={() => CursorType.set("footer-close")}
    class="{isOpen
      ? 'h-[28rem]'
      : 'h-[0rem]'} flex flex-col transition-all overflow-hidden"
  >
    <div class="relative flex items-center gap-12 px-[3rem] pt-6 text-3xl">
      <a href="/" on:mouseenter={() => CursorType.set("normal")}> INSTAGRAM </a>

      <a href="/" on:mouseenter={() => CursorType.set("normal")}> FACEBOOK </a>

      <a
        class="ml-auto"
        href="/"
        on:mouseenter={() => CursorType.set("normal")}
      >
        @{new Date().getFullYear()}
      </a>
    </div>

    <button
      on:click={() => {
        addShell({ id: "finder", zIndex: 65 });
        openContactTab();
      }}
      on:mouseenter={() => CursorType.set("contact")}
      on:mouseleave={() => CursorType.set("normal")}
      class="text-[25rem] flex whitespace-nowrap overflow-hidden h-full"
    >
      <div class="flex items-center h-full">
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
                height="100%"
                controls=""
                controlsLayout=""
              />
            </div>
          {/if}
        </div>
      </div>
    </button>
  </div>
</footer>
