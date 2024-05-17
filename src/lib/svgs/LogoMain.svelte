<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import lottie from "lottie-web";
  import { SelectedBackground } from "$lib/stores/background";

  export let allowY: number = 10;

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
      path: "https://res.cloudinary.com/dlhbpswom/raw/upload/v1715936557/lotties/logo-shape_nhorul.json",
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
          x: `${stayBetween(+track.x * 5, [-10, 10])}px`,
          y: `${stayBetween(+track.y * 3, [-allowY, allowY])}px`,
          duration: 0.7,
          ease: "power4",
        });
      });
    };

    window.addEventListener("mousemove", (e) => animateLogo(e));
    return () => window.removeEventListener("mousemove", (e) => animateLogo(e));
  });

  const blinkEyes = (node: SVGPathElement) => {
    const open = "M4 4L4 17.0967M21.5729 4V17.0967";
    const close = "M4 4L4 7M22 4V7";
    const y = "+=" + (17.0967 - 9) / 2;

    const tl = gsap.timeline({ repeat: -1, defaults: { duration: 0.1 } });
    tl.to(node, { attr: { d: close }, y, delay: 2 })
      .to(node, { attr: { d: open }, y: 0 })
      .to(node, { attr: { d: close }, y })
      .to(node, { attr: { d: open }, y: 0 })
      .to(node, { attr: { d: close }, y, delay: 4 })
      .to(node, { attr: { d: open }, y: 0 });
  };
</script>

<button
  id="theme-switcher"
  on:click|stopPropagation={switchMode}
  class="relative main-logo w-full h-full"
>
  <!-- <div
    class="absolute z-10 bg-red-500 bg-opacity-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-[50%] aspect-square"
  ></div> -->

  <div class="logo-shape" />

  <div class="logo-mouth absolute inset-0 w-full h-full">
    <div
      class="text-black w-[40%] absolute left-1/2 -translate-x-1/2 bottom-[30%]"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 93 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M89 4C89 27.4967 69.9722 46.5444 46.5 46.5444C23.0278 46.5444 4 27.4967 4 4"
          stroke="currentColor"
          stroke-width="8"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>

  <div class=" absolute inset-0 w-full h-full">
    <div
      class="text-black w-[12%] absolute left-1/2 -translate-x-1/2 bottom-[50%]"
    >
      <div class="logo-eyes">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 26 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            use:blinkEyes
            style="transform-origin: 50% 50%;"
            d="M4 4L4 17.0967M21.5729 4V17.0967"
            stroke="currentColor"
            stroke-width="8"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</button>
