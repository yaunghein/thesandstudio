<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Swiper from "swiper";
  import type { Swiper as TSwiper } from "swiper";
  import { Autoplay, EffectFade } from "swiper/modules";
  import type { Work } from "$lib/types";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import lottie from "lottie-web";
  import { changeCursorType } from "$lib/stores/cursor";

  export let work: Work;

  // const getRandomNumber = () => {
  //   const numbers = [10, 12, 15];
  //   const randomIndex = Math.floor(Math.random() * numbers.length);
  //   return numbers[randomIndex];
  // };

  let slider: TSwiper;
  const swiper = (node: HTMLDivElement) => {
    slider = new Swiper(node, {
      modules: [Autoplay, EffectFade],
      effect: "slide",
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 750,
      // autoplay: {
      //   delay: 1000 * getRandomNumber(),
      //   disableOnInteraction: false,
      // },
    });
  };

  const inView = (node: HTMLDivElement) => {
    if (window.innerWidth > 640) return;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: node,
      scroller: "#mobile-work-container",
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => dispatch("enter", work),
      onEnterBack: () => dispatch("enterBack", work),
    });
  };

  const playLottie = (node: HTMLDivElement, path: string) => {
    let isReversing = false;
    const animation = lottie.loadAnimation({
      container: node,
      renderer: "canvas",
      loop: false,
      autoplay: true,
      path,
    });
    animation.addEventListener("complete", () => {
      if (!isReversing) {
        isReversing = true;
        animation.setDirection(-1);
      } else {
        isReversing = false;
        animation.setDirection(1);
      }
      animation.play();
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (window.innerWidth <= 640) return;
    const _slider = slider?.el;
    const _slides = slider?.slides;
    const sliderWidth = _slider.clientWidth;
    const mouseX = e.clientX - _slider.getBoundingClientRect().left;
    const segmentWidth = sliderWidth / _slides.length;
    const segmentIndex = Math.floor(mouseX / segmentWidth);
    slider?.slideTo(segmentIndex);
  };
</script>

<div
  role="region"
  dir="rtl"
  use:inView
  use:swiper
  use:changeCursorType={{ inType: "work-slider", outType: "normal" }}
  on:mouseenter={() => dispatch("hoverIn", work)}
  on:mousemove={handleMouseMove}
  class="fade-up group w-full h-96 sm:h-auto sm:aspect-[1.6/1] relative overflow-hidden"
>
  <div
    class="swiper-wrapper absolute inset-0 w-full h-full bg-light-90 dark:bg-light-20 flex"
  >
    {#each work.images as image}
      <!-- {#if work.name === "ENVISEAM"}
        <div
          class="swiper-slide w-full h-full overflow-hidden shrink-0 bg-white dark:bg-black"
        >
          <div
            use:playLottie={image}
            class="w-2/3 mx-auto h-full object-cover invert dark:invert-0"
          />
        </div>
      {:else} -->
      <div class="swiper-slide w-full h-full overflow-hidden shrink-0">
        <img
          src={image}
          alt={work.name}
          class="w-full h-full object-cover scale-[1.01]"
        />
      </div>
      <!-- {/if} -->
    {/each}
  </div>
</div>
