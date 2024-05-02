<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Swiper from "swiper";
  import { Autoplay, EffectFade } from "swiper/modules";
  import type { Work } from "$lib/types";

  export let work: Work;

  const getRandomNumber = () => {
    const numbers = [3, 4, 5, 6, 7];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  };

  const swiper = (node: HTMLDivElement) => {
    new Swiper(node, {
      modules: [Autoplay, EffectFade],
      effect: "fade",
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 1000 * getRandomNumber(),
        disableOnInteraction: false,
      },
    });
  };
</script>

<div
  role="region"
  use:swiper
  on:mouseenter={() => dispatch("hoverIn", work)}
  class="group w-full aspect-[1.63/1] relative overflow-hidden {work.textColor ===
  'light'
    ? 'bg-light-10'
    : 'bg-light-100'}"
>
  <div
    class="swiper-wrapper absolute inset-0 w-full h-full bg-light-90 dark:bg-light-20 flex"
  >
    {#each work.images as image}
      <div class="swiper-slide w-full h-full overflow-hidden shrink-0">
        <img src={image} alt={work.name} class="w-full h-full object-cover" />
      </div>
    {/each}
  </div>
</div>
