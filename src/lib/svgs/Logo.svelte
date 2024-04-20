<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { SelectedBackground } from "$lib/stores/background";

  // const switchMode = () => {
  //   const rootClasses = document.documentElement.classList;
  //   const toggleMode = () => {
  //     rootClasses.contains("dark")
  //       ? rootClasses.remove("dark")
  //       : rootClasses.add("dark");
  //     rootClasses.contains("dark")
  //       ? localStorage.setItem("sand-theme", "dark")
  //       : localStorage.setItem("sand-theme", "light");
  //   };
  //   toggleMode();
  // };

  const stayBetween = (value: number, range: number[]) => {
    return Math.min(range[1], Math.max(range[0], value));
  };

  onMount(() => {
    // const animateLogo = (e: MouseEvent) => {
    //   const rect = document.querySelector("#logo")!.getBoundingClientRect();
    //   const track = {
    //     x: e.clientX / (rect!.left + rect!.width / 2) - 1,
    //     y: e.clientY / (rect!.top + rect!.height / 2) - 1,
    //   };
    //   const outerShapes = document.querySelectorAll(
    //     ".logo-outer-shape",
    //   ) as NodeListOf<HTMLElement>;
    //   outerShapes.forEach((shape) => {
    //     gsap.to(shape, {
    //       rotate: `${+track.x * 100}deg`,
    //       transformOrigin: "center",
    //       duration: 0.7,
    //       ease: "power4",
    //     });
    //   });
    //   const mouthShapes = document.querySelectorAll(
    //     ".logo-mouth",
    //   ) as NodeListOf<HTMLElement>;
    //   mouthShapes.forEach((shape) => {
    //     gsap.to(shape, {
    //       rotate: `${stayBetween(+track.x * 10, [-20, 20])}deg`,
    //       transformOrigin: "center",
    //       duration: 0.7,
    //       ease: "power4",
    //     });
    //   });
    //   const eyesShapes = document.querySelectorAll(
    //     ".logo-eyes",
    //   ) as NodeListOf<HTMLElement>;
    //   eyesShapes.forEach((shape) => {
    //     if ($SelectedBackground.name === "bg-scene") {
    //       gsap.to(shape, {
    //         x: `${stayBetween(+track.y * 2, [-10, 10])}deg`,
    //         y: `${stayBetween(+track.x * 2, [-10, 10])}deg`,
    //         duration: 0.7,
    //         ease: "power4",
    //       });
    //     } else {
    //       gsap.to(shape, {
    //         x: `${stayBetween(+track.x * 2, [-10, 10])}deg`,
    //         y: `${stayBetween(+track.y * 2, [-10, 10])}deg`,
    //         duration: 0.7,
    //         ease: "power4",
    //       });
    //     }
    //   });
    // };
    // window.addEventListener("mousemove", (e) => animateLogo(e));
    // return () => window.removeEventListener("mousemove", (e) => animateLogo(e));
  });
</script>

<button class="w-full h-full">
  <!-- <button
  id="theme-switcher"
  on:click|stopPropagation={switchMode}
  class="w-full h-full"
> -->
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 259 259"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M129.5 0C137.088 0 145.232 60.1866 147.881 60.8922C150.53 61.5978 187.674 13.5457 194.244 17.3515C200.815 21.1457 177.783 77.3414 179.715 79.2848C181.659 81.2281 237.854 58.1854 241.648 64.7558C245.443 71.3262 197.391 108.482 198.108 111.119C198.813 113.768 259 121.912 259 129.5C259 137.088 198.813 145.232 198.108 147.881C197.402 150.53 245.454 187.674 241.648 194.244C237.854 200.815 181.659 177.783 179.715 179.715C177.772 181.659 200.815 237.854 194.244 241.648C187.674 245.443 150.518 197.391 147.881 198.108C145.232 198.813 137.088 259 129.5 259C121.912 259 113.768 198.813 111.119 198.108C108.47 197.402 71.3262 245.454 64.7558 241.648C58.1854 237.854 81.2166 181.659 79.2848 179.715C77.3414 177.772 21.1457 200.815 17.3515 194.244C13.5573 187.674 61.6094 150.518 60.8922 147.881C60.1866 145.232 0 137.088 0 129.5C0 121.912 60.1866 113.768 60.8922 111.119C61.5978 108.47 13.5457 71.3262 17.3515 64.7558C21.1457 58.1854 77.3414 81.2166 79.2848 79.2848C81.2281 77.3414 58.1854 21.1457 64.7558 17.3515C71.3262 13.5573 108.482 61.6094 111.119 60.8922C113.768 60.1866 121.912 0 129.5 0Z"
      class=" fill-light-80 dark:fill-white"
    />
    <path
      d="M119.714 123V136.097M137.286 123V136.097M171 132.456C171 155.952 151.972 175 128.5 175C105.028 175 86 155.952 86 132.456"
      stroke="black"
      stroke-width="8"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg>
</button>
