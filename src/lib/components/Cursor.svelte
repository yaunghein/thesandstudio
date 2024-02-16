<script lang="ts">
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { twMerge as twm } from "tailwind-merge";
  import gsap from "gsap";
  import { CursorType } from "$lib/stores/cursor";

  const pos = { x: 0, y: 0 };
  const options = { start: 0.5, duration: 500, easing: backOut };
  const pillCursors = [
    "upload-files",
    "remove-files",
    "bg-scene",
    "bg-default",
    "bg-legacy",
  ];
  const pillLabels: Record<string, string> = {
    "upload-files": "Upload Files",
    "remove-files": "Remove",
    "bg-scene": "Scene",
    "bg-default": "Default",
    "bg-legacy": "Legacy",
  };

  let isTargetClickable = false;

  onMount(() => {
    const isTouchDevice = "ontouchstart" in window;
    const easing = { duration: 0.7, ease: "power4" };
    const createCursorFollower = () => {
      const handleMouseMove = (e: MouseEvent) => {
        const cursor = document.querySelector("#cursor");
        const cursorRect = cursor?.getBoundingClientRect();
        const { target, x, y } = e;
        pos.x = x;
        pos.y = y;
        isTargetClickable =
          !!(target as HTMLElement)?.closest("a") ||
          !!(target as HTMLElement)?.closest("button") ||
          !!(target as HTMLElement)?.closest("input") ||
          !!(target as HTMLElement)?.closest("textarea") ||
          !!(target as HTMLElement)?.closest("label");

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
</script>

<div
  id="cursor"
  class={twm(
    "pointer-events-none select-none fixed top-0 z-[100000000]",
    $CursorType !== "contact" && !pillCursors.includes($CursorType)
      ? "mix-blend-difference"
      : "mix-blend-normal",
  )}
>
  {#if $CursorType === "normal"}
    <div
      transition:scale={options}
      class="dark:invert w-10 aspect-square absolute"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="invert dark:invert-0 absolute"
      >
        <path
          class="sand-transition"
          d="M15.6416 19.5807L15.6414 19.5809C15.4656 19.6821 15.4053 19.8489 15.3899 19.8918C15.3651 19.9609 15.3519 20.0306 15.3439 20.0856C15.3272 20.1989 15.3201 20.3372 15.3176 20.4834C15.3125 20.7805 15.3255 21.1825 15.3471 21.6441C15.3671 22.0693 15.3949 22.5555 15.4244 23.0716L15.4325 23.2131C15.4651 23.783 15.4992 24.3871 15.5272 24.9914C15.5833 26.2047 15.6139 27.3995 15.5612 28.3043C15.5346 28.7602 15.4882 29.1149 15.4238 29.3533C15.4207 29.3648 15.4176 29.3758 15.4145 29.3863C15.3699 29.3437 15.3184 29.2896 15.2599 29.2223C15.0111 28.9351 14.7118 28.4932 14.381 27.9428C13.7225 26.8473 12.9899 25.4093 12.3469 24.137L12.3463 24.1359L11.5793 22.6283L0.534358 0.917037L0.534327 0.916978C0.41154 0.675693 0.669894 0.405748 0.922881 0.535276L1.13147 0.12788L0.922881 0.535276L22.7777 11.7248C22.7783 11.7251 22.7789 11.7255 22.7795 11.7258C22.7812 11.7267 22.7831 11.7277 22.7851 11.7287C23.1305 11.9054 23.5135 12.0977 23.9174 12.3005C24.9992 12.8438 26.2299 13.4619 27.2846 14.0533C28.0095 14.4598 28.6273 14.8406 29.0445 15.1632C29.1931 15.278 29.3046 15.3767 29.3832 15.458C29.3733 15.4609 29.363 15.4638 29.3522 15.4667C29.1127 15.531 28.7565 15.5773 28.299 15.6038C27.3912 15.6563 26.1925 15.6258 24.9755 15.5698C24.3694 15.5419 23.7634 15.508 23.1917 15.4755L23.0506 15.4675C22.5327 15.438 22.0447 15.4102 21.618 15.3904C21.155 15.3688 20.7519 15.3559 20.4541 15.361C20.3075 15.3635 20.169 15.3706 20.0556 15.3871C20.0006 15.3952 19.9309 15.4083 19.862 15.4329C19.8195 15.4481 19.6523 15.508 19.5506 15.6837C19.4488 15.8597 19.4803 16.0348 19.4885 16.0794C19.5016 16.1516 19.5252 16.2186 19.5458 16.2702C19.5882 16.3766 19.6514 16.4999 19.7225 16.6277C19.867 16.8875 20.0799 17.2292 20.3301 17.6181C20.5607 17.9767 20.8288 18.384 21.1134 18.8165L21.1909 18.9344C21.505 19.4117 21.8375 19.9179 22.1648 20.4273C22.8219 21.45 23.4476 22.4695 23.8558 23.2794C24.0615 23.6875 24.1992 24.0179 24.2629 24.2565C24.2658 24.2672 24.2685 24.2775 24.2709 24.2875C24.2602 24.2849 24.2491 24.282 24.2376 24.279C23.9979 24.2153 23.6663 24.0779 23.2569 23.8728C22.4444 23.4658 21.4217 22.8419 20.3958 22.1868C19.8849 21.8605 19.3771 21.5291 18.8983 21.216C18.8585 21.1899 18.8189 21.164 18.7795 21.1382C18.3459 20.8547 17.9375 20.5876 17.5781 20.3577C17.188 20.1083 16.8453 19.8961 16.5848 19.7521C16.4565 19.6812 16.3331 19.6182 16.2265 19.576C16.1748 19.5555 16.1079 19.5322 16.0358 19.5191C15.9913 19.5111 15.8171 19.4798 15.6416 19.5807ZM15.5743 29.5096C15.5743 29.5098 15.5727 29.5092 15.5693 29.5075C15.5725 29.5087 15.5743 29.5095 15.5743 29.5096ZM29.5097 15.6198C29.5095 15.6197 29.5083 15.6174 29.5068 15.613C29.5092 15.6177 29.5099 15.6199 29.5097 15.6198ZM24.299 24.4877C24.299 24.4877 24.2991 24.4871 24.2992 24.4861L24.299 24.4877Z"
          fill={isTargetClickable ? "black" : "transparent"}
          stroke="black"
        />
      </svg>
    </div>
  {/if}

  {#if $CursorType === "a-chon-lyy"}
    <div
      transition:scale={options}
      class="w-20 aspect-square absolute -translate-x-1/2 -translate-y-1/2"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35 0C37.0511 0 39.2526 16.2665 39.9682 16.4582C40.6837 16.6498 50.7235 3.66362 52.5 4.68903C54.2765 5.7147 48.0498 20.9025 48.5736 21.4264C49.0975 21.9502 64.2853 15.7235 65.311 17.5C66.3366 19.2765 53.3502 29.316 53.5418 30.0318C53.7335 30.7474 70 32.9489 70 35C70 37.0511 53.7335 39.2526 53.5418 39.9682C53.3502 40.6837 66.3364 50.7235 65.311 52.5C64.2853 54.2765 49.0975 48.0498 48.5736 48.5736C48.0498 49.0975 54.2765 64.2853 52.5 65.311C50.7235 66.3366 40.684 53.3502 39.9682 53.5418C39.2526 53.7335 37.0511 70 35 70C32.9489 70 30.7474 53.7335 30.0318 53.5418C29.3163 53.3502 19.2765 66.3364 17.5 65.311C15.7235 64.2853 21.9502 49.0975 21.4264 48.5736C20.9025 48.0498 5.7147 54.2765 4.68903 52.5C3.66335 50.7235 16.6498 40.684 16.4582 39.9682C16.2665 39.2526 0 37.0511 0 35C0 32.9489 16.2665 30.7474 16.4582 30.0318C16.6498 29.3163 3.66362 19.2765 4.68903 17.5C5.7147 15.7235 20.9025 21.9502 21.4264 21.4264C21.9502 20.9025 15.7235 5.7147 17.5 4.68903C19.2765 3.66335 29.316 16.6498 30.0318 16.4582C30.7474 16.2665 32.9489 0 35 0Z"
          fill="white"
        />
      </svg>
    </div>
  {/if}

  {#if $CursorType === "contact"}
    <div
      transition:scale={options}
      class="absolute -translate-x-1/2 -translate-y-1/2 text-6xl rounded-full px-11 py-5 border-2 text-black dark:text-light-100 border-white dark:border-light-12 overflow-hidden"
    >
      <div class="transparent-layer rounded-full" />
      <span class="relative">hi@thesandstudio.com</span>
    </div>
  {/if}

  {#if $CursorType === "footer-close"}
    <div
      class="absolute -translate-x-1/2 -translate-y-1/2 p-4 w-14 aspect-square rounded-full bg-white dark:bg- text-black overflow-hidden"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M240 240L16 16M240 16L16 240"
          stroke="currentColor"
          stroke-width="32"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  {/if}

  {#if pillCursors.includes($CursorType)}
    <div
      transition:scale={options}
      class="absolute -translate-x-1/2 -translate-y-1/2 text-xl rounded-full px-5 py-2 text-white dark:text-black border-2 border-light-12 dark:border-white overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-black dark:bg-white rounded-full opacity-80"
      />
      <span class="relative whitespace-nowrap">{pillLabels[$CursorType]}</span>
    </div>
  {/if}
</div>
