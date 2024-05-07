<script lang="ts">
  import { page } from "$app/stores";
  import gsap from "gsap";
  import lottie from "lottie-web";
  import AppShell from "$lib/components/AppShell.svelte";
  import { SelectedBackground } from "$lib/stores/background";
  import { onMount } from "svelte";

  let logoShapeLottie: any;

  const switchMode = () => {
    const is3D = $SelectedBackground.name === "bg-scene";
    const timeout = is3D ? 0 : 1000;
    const rootClasses = document.documentElement.classList;
    const toggleMode = () => {
      if (rootClasses.contains("dark")) {
        rootClasses.remove("dark");
        localStorage.setItem("sand-theme", "light");
      } else {
        rootClasses.add("dark");
        localStorage.setItem("sand-theme", "dark");
      }
    };
    setTimeout(() => toggleMode(), timeout);
    if (logoShapeLottie) {
      rootClasses.contains("dark")
        ? logoShapeLottie.setDirection(1)
        : logoShapeLottie.setDirection(-1);
      logoShapeLottie.play();
    }
  };

  const stayBetween = (value: number, range: number[]) => {
    return Math.min(range[1], Math.max(range[0], value));
  };

  onMount(() => {
    logoShapeLottie = lottie.loadAnimation({
      container: document.querySelector(".logo-shape") as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/lotties/logo-shape.json",
    });
    !document.documentElement.classList.contains("dark") &&
      logoShapeLottie.goToAndStop(100, true);

    const animateLogo = (e: MouseEvent) => {
      const rect = document
        .querySelector(".main-logo")!
        .getBoundingClientRect();
      const track = {
        x: e.clientX / (rect!.left + rect!.width / 2) - 1,
        y: e.clientY / (rect!.top + rect!.height / 2) - 1,
      };

      const outerShapes = document.querySelectorAll(
        ".logo-shape",
      ) as NodeListOf<HTMLElement>;
      outerShapes.forEach((shape) => {
        gsap.to(shape, {
          rotate: `${+track.x * 200}deg`,
          transformOrigin: "center",
          duration: 0.7,
          ease: "power4",
        });
      });

      const mouthShapes = document.querySelectorAll(
        ".logo-mouth",
      ) as NodeListOf<HTMLElement>;
      mouthShapes.forEach((shape) => {
        gsap.to(shape, {
          rotate: `${stayBetween(+track.x * 10, [-20, 20])}deg`,
          transformOrigin: "center",
          duration: 0.7,
          ease: "power4",
        });
      });

      const eyesShapes = document.querySelectorAll(
        ".logo-eyes",
      ) as NodeListOf<HTMLElement>;
      eyesShapes.forEach((shape) => {
        gsap.to(shape, {
          x: `${stayBetween(+track.x * 5, [-20, 20])}px`,
          y: `${stayBetween(+track.y * 10, [-10, 20])}px`,
          duration: 0.7,
          ease: "power4",
        });
      });
    };

    window.addEventListener("mousemove", (e) => animateLogo(e));
    return () => window.removeEventListener("mousemove", (e) => animateLogo(e));
  });
</script>

<AppShell>
  <div class="grid place-items-center h-full bg-white dark:bg-black">
    {#if $page.status === 404}
      <div class="text-center flex flex-col gap-2 sm:gap-7">
        <div class="relative">
          <div class="flex items-center gap-20 sm:gap-[15rem]">
            <div
              class="font-sand-black text-9xl sm:text-[32rem] leading-none drop-shadow-404-dark dark:drop-shadow-404-light text-light-40 dark:text-white"
            >
              4
            </div>
            <div
              class="font-sand-black text-9xl sm:text-[32rem] leading-none drop-shadow-404-dark dark:drop-shadow-404-light text-light-40 dark:text-white"
            >
              4
            </div>
          </div>
          <div
            class="w-[60rem] aspect-square bg-404-gradient-light dark:bg-404-gradient-dark absolute -left-[35rem] top-[8rem]"
          />
          <div
            class="w-[60rem] aspect-square bg-404-gradient-light dark:bg-404-gradient-dark absolute -right-[35rem] top-[8rem]"
          />
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <button
              on:click|stopPropagation={switchMode}
              class="relative main-logo w-[8rem] sm:w-[25rem] aspect-square drop-shadow-404-dark dark:drop-shadow-404-light invert dark:invert-0 -translate-y-2"
            >
              <div class="logo-shape" />

              <div
                class="absolute w-10 sm:w-28 aspect-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 -mt-[0.5rem] sm:-mt-[1.5rem]"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 76 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-eyes"
                >
                  <g clip-path="url(#clip0_417_2)">
                    <path
                      d="M26.92 0.99C25.6 -0.33 23.45 -0.33 22.13 0.99L13.96 9.16L5.78 0.99C4.46 -0.33 2.31 -0.33 0.99 0.99C-0.33 2.31 -0.33 4.46 0.99 5.78L9.16 13.95L0.99 22.12C-0.33 23.44 -0.33 25.59 0.99 26.91C1.65 27.57 2.52 27.9 3.39 27.9C4.26 27.9 5.12 27.57 5.79 26.91L13.96 18.74L22.13 26.91C22.79 27.57 23.66 27.9 24.53 27.9C25.4 27.9 26.26 27.57 26.93 26.91C28.25 25.59 28.25 23.44 26.93 22.12L18.76 13.95L26.93 5.78C28.25 4.46 28.25 2.31 26.93 0.99H26.92Z"
                      fill="black"
                    />
                    <path
                      d="M66.21 13.95L74.38 5.78C75.7 4.46 75.7 2.31 74.38 0.99C73.06 -0.33 70.91 -0.33 69.59 0.99L61.42 9.16L53.25 0.99C51.93 -0.33 49.78 -0.33 48.46 0.99C47.14 2.31 47.14 4.46 48.46 5.78L56.63 13.95L48.46 22.12C47.14 23.44 47.14 25.59 48.46 26.91C49.12 27.57 49.99 27.9 50.86 27.9C51.73 27.9 52.59 27.57 53.26 26.91L61.43 18.74L69.6 26.91C70.26 27.57 71.13 27.9 72 27.9C72.87 27.9 73.73 27.57 74.4 26.91C75.72 25.59 75.72 23.44 74.4 22.12L66.23 13.95H66.21Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
              <div
                class="absolute w-10 sm:w-36 aspect-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-30 mt-[1rem] sm:mt-[3rem]"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 126 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="logo-mouth"
                >
                  <g clip-path="url(#clip0_417_7)">
                    <path
                      d="M122.41 0H3.39C1.52 0 0 1.52 0 3.39C0 5.26 1.52 6.78 3.39 6.78H78.11V14.66C78.11 23.67 85.44 31.01 94.46 31.01C103.48 31.01 110.81 23.68 110.81 14.66V6.78H122.42C124.29 6.78 125.81 5.26 125.81 3.39C125.81 1.52 124.29 0 122.42 0H122.41ZM104.03 14.66C104.03 19.94 99.74 24.23 94.46 24.23C89.18 24.23 84.89 19.94 84.89 14.66V6.78H104.03V14.66Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <p class="text-xs sm:text-3xl">Oops! Page Not Found.</p>
      </div>
    {:else}
      <div class="text-center">
        <div>{$page.status}</div>
        <div>{$page.error?.message}</div>
      </div>
    {/if}
  </div>
</AppShell>
