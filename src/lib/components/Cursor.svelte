<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { twMerge as twm } from "tailwind-merge";
  import gsap from "gsap";
  import { CursorType } from "$lib/stores/cursor";
  import { scale } from "svelte/transition";
  import { browser } from "$app/environment";

  const pos = { x: 0, y: 0 };
  const easing = { duration: 0.7, ease: "power4" };

  const centerCursor = () => {
    setTimeout(() => {
      const cursor = document.querySelector("#cursor");
      const cursorRect = cursor?.getBoundingClientRect();
      gsap.to("#cursor", {
        x: pos.x - cursorRect!.width / 2,
        y: pos.y - cursorRect!.height / 2,
        opacity: 1,
        ...easing,
      });
    }, 300);
  };

  onMount(() => {
    const isTouchDevice = "ontouchstart" in window;
    const createCursorFollower = () => {
      const handleMouseMove = (e: MouseEvent) => {
        const cursor = document.querySelector("#cursor");
        const cursorRect = cursor?.getBoundingClientRect();
        const { x, y } = e;
        pos.x = x;
        pos.y = y;

        gsap.to("#cursor", {
          x: x - cursorRect!.width / 2,
          y: y - cursorRect!.height / 2,
          opacity: 1,
          ...easing,
        });
      };
      window.addEventListener("mousemove", handleMouseMove);

      const handleMouseLeave = () => {
        gsap.to("#cursor", {
          opacity: 0,
          ...easing,
        });
      };
      document.addEventListener("mouseleave", handleMouseLeave);
    };

    if (!isTouchDevice) {
      createCursorFollower();
    }
  });

  $: if ($CursorType && browser) {
    centerCursor();
    switch ($CursorType) {
      case "normal":
        gsap.to("#cursor", {
          width: "3.5rem",
          height: "3.5rem",
          ...easing,
        });
        break;
      case "contact":
        gsap.to("#cursor", {
          width: "35rem",
          height: "6rem",
          ...easing,
        });
        break;
      case "footer-close":
        gsap.to("#cursor", {
          width: "3.5rem",
          height: "3.5rem",
          ...easing,
        });
        break;
    }
  }
</script>

<div
  id="cursor"
  class="pointer-events-none select-none fixed top-0 z-[100000000000000000] rounded-full overflow-hidden w-10 h-10"
>
  <div
    class="relative text-black dark:text-white border-3 border-white dark:border-light-12 rounded-full overflow-hidden flex items-center justify-center text-5xl w-full h-full"
  >
    <div
      class="absolute inset-0 w-full h-full bg-light-90 dark:bg-black opacity-90"
    />
    {#if $CursorType === "contact"}
      <a
        href="mailto:hi@thesandstudio.com"
        transition:scale
        class="whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        hi@thesandstudio.com
      </a>
    {/if}
    {#if $CursorType === "footer-close"}
      <div
        transition:scale
        class="whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    {/if}
  </div>
</div>
