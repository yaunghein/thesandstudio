<script lang="ts">
  import { onMount } from "svelte";
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

  let isTargetClickable = false;

  onMount(() => {
    const isTouchDevice = "ontouchstart" in window;
    const createCursorFollower = () => {
      const handleMouseMove = (e: MouseEvent) => {
        const cursor = document.querySelector("#cursor");
        const cursorRect = cursor?.getBoundingClientRect();
        const { target, x, y } = e;
        pos.x = x;
        pos.y = y;
        isTargetClickable =
          !!(target as HTMLElement)?.closest("a") ||
          !!(target as HTMLElement)?.closest("button");

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
  class={twm(
    "pointer-events-none select-none fixed top-0 z-[100000000] w-10 h-10",
    $CursorType !== "contact" && "mix-blend-difference dark:invert",
  )}
>
  <div
    class={twm(
      "relative text-black dark:text-white flex items-center justify-center text-5xl w-full h-full",
      $CursorType === "normal" || $CursorType === "a-chon-lyy"
        ? "overflow-visible rounded-none"
        : "border-2 border-white dark:border-light-12 rounded-full overflow-hidden",
    )}
  >
    <div
      class={twm(
        $CursorType === "normal" || $CursorType === "a-chon-lyy"
          ? "hidden"
          : '"absolute inset-0 w-full h-full bg-light-90 dark:bg-black opacity-90"',
      )}
    />

    {#if $CursorType === "contact"}
      <div
        transition:scale
        class="whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        hi@thesandstudio.com
      </div>
    {:else if $CursorType === "footer-close"}
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
    {:else if $CursorType === "a-chon-lyy"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_2"
        data-name="Layer 2"
        viewBox="0 0 2600.24 2600.24"
        class={twm(
          isTargetClickable ? "scale-150" : "scale-100",
          "invert w-10 aspect-square dark:invert-0 sand-transition",
        )}
      >
        <defs>
          <style>
            .cls-1 {
              stroke-width: 0px;
            }
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            class="cls-1"
            d="M1300.12,0c76.19,0,157.97,604.24,184.55,611.36,26.58,7.12,399.52-475.27,465.51-437.18,65.99,38.1-165.31,602.27-145.85,621.73,19.46,19.46,583.63-211.84,621.73-145.85,38.1,65.99-444.3,438.92-437.18,465.51,7.12,26.58,611.36,108.36,611.36,184.55s-604.24,157.97-611.36,184.55c-7.12,26.58,475.27,399.52,437.18,465.51-38.1,65.99-602.27-165.31-621.73-145.85-19.46,19.46,211.84,583.63,145.85,621.73-65.99,38.1-438.92-444.3-465.51-437.18-26.58,7.12-108.36,611.36-184.55,611.36s-157.97-604.24-184.55-611.36c-26.58-7.12-399.52,475.27-465.51,437.18-65.99-38.1,165.31-602.27,145.85-621.73-19.46-19.46-583.63,211.84-621.73,145.85-38.1-65.99,444.3-438.92,437.18-465.51-7.12-26.58-611.36-108.36-611.36-184.55s604.24-157.97,611.36-184.55c7.12-26.58-475.27-399.52-437.18-465.51,38.1-65.99,602.27,165.31,621.73,145.85,19.46-19.46-211.84-583.63-145.85-621.73,65.99-38.1,438.92,444.3,465.51,437.18,26.58-7.12,108.36-611.36,184.55-611.36Z"
          />
        </g>
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_2"
        data-name="Layer 2"
        viewBox="0 0 1531.3 1535.98"
        class={twm(
          isTargetClickable
            ? "scale-150 translate-x-7 translate-y-7"
            : "scale-100 translate-x-5 translate-y-5",
          "invert w-10 aspect-square dark:invert-0 sand-transition",
        )}
      >
        <defs>
          <style>
            .cls-1 {
              stroke-width: 0px;
            }
          </style>
        </defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            class="cls-1"
            d="M795.1,1535.58c58.91-15.78-3.04-499.85,16.03-510.87,19.08-11.01,407.32,284.67,450.44,241.55,43.12-43.12-252.56-431.36-241.55-450.44,11.01-19.08,495.08,42.87,510.87-16.03,11.59-43.25-228.07-156.32-356.24-222.08-.04-.02-.07-.04-.11-.06L58.74,4.62C24.08-13.18-13.1,23.81,4.53,58.56l563.77,1111.6,39.15,77.19c65.47,129.92,151.26,297.98,187.65,288.23Z"
          />
        </g>
      </svg>
    {/if}
  </div>
</div>
