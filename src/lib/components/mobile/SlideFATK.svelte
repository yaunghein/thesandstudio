<script>
  import playLottie from "$lib/utils/playLottie";
  import { browser } from "$app/environment";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import PixelBorder from "./PixelBorder.svelte";
  import FATK from "$lib/svgs/mobile/FATK.svelte";
  import { MobileHomeSwiper } from "$lib/stores/slider";
</script>

<div
  data-slide-name="fatk"
  class="swiper-slide w-full h-full overflow-scroll shrink-0 px-4"
>
  <div class="h-full bg-white dark:bg-black w-full">
    <div class="h-full relative">
      <PixelBorder />
      <div class="p-4 w-full h-full relative overflow-scroll hide-scrollbar">
        <div class="mt-7 max-w-[213px] mx-auto">
          <FATK />
        </div>
        <p class="relative text-2xl leading-[0.75] mt-6">
          We embrace all forms, materials, and ideas, shaping them into products
          that reflect a confluence of diverse inspirations and tangible
          craftsmanship.
        </p>

        <div class="mt-6 grid gap-3">
          <div>
            <div class="flex items-end justify-between mb-2 px-2">
              <div
                class="text-2xl font-sand-mobile-bold max-w-[12rem] leading-[0.75]"
              >
                Ambivalent Tote Bag and Trinket Bowl
              </div>
              <div class="text-2xl font-sand-mobile-bold leading-[0.75]">
                2022
              </div>
            </div>
            <div class="relative w-full aspect-square overflow-hidden">
              <video
                autoplay
                muted
                loop
                playsinline
                class="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="https://res.cloudinary.com/dlhbpswom/video/upload/v1715944268/general/moving-sunset-sky_csvrih.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>

              {#if browser}
                <div
                  class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[9.5rem]"
                >
                  <div use:playLottie={"/fatk-bag.json"} />
                </div>
              {/if}

              <div class="absolute left-1/2 -translate-x-1/2 bottom-4">
                <a
                  target="_blank"
                  href="https://thesandstudio.webflow.io/for-all-thingkind"
                  class="w-[12.5rem] h-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-black dark:text-white p-[0.4rem] text-2xl"
                >
                  <PixelBorder />
                  Visit
                </a>
              </div>
            </div>
          </div>

          <div>
            <div class="flex items-end justify-between mb-2 px-2">
              <div
                class="text-2xl font-sand-mobile-bold max-w-[12rem] leading-[0.75]"
              >
                -
              </div>
              <div class="text-2xl font-sand-mobile-bold">2024</div>
            </div>
          </div>
        </div>

        <div
          class="font-sand-mobile-bold text-7xl leading-[0.75] max-w-[18rem] mt-6"
        >
          <!-- Do you have an idea? -->
          <img
            src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715943851/general/mobile-fatk-make-shit_uqjvop.svg"
            alt="Make shit with us"
            class="invert dark:invert-0 w-[75%]"
          />
        </div>
        <div class="flex items-center justify-center mt-6 mb-20">
          <button
            on:click={() => $MobileHomeSwiper?.slideTo(3)}
            class="relative w-[12.5rem] h-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-black dark:text-white p-[0.4rem] text-2xl"
          >
            <PixelBorder />
            Let's Go
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
