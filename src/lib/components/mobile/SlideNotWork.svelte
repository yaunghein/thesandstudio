<script>
  import PixelBorder from "./PixelBorder.svelte";
  import TypographicChallengeHeading from "../../../routes/not-works/(components)/TypographicChallengeHeading.svelte";
  import { MobileHomeSwiper } from "$lib/stores/slider";
</script>

<div
  data-slide-name="not-works"
  class="swiper-slide w-full h-full overflow-scroll shrink-0 px-4"
>
  <div class="h-full bg-white dark:bg-black w-full">
    <div class="h-full relative">
      <PixelBorder />
      <div class="p-4 w-full h-full relative overflow-scroll hide-scrollbar">
        <h1 class="font-sand-mobile-bold text-6xl">Not Works</h1>
        <p class="relative text-2xl leading-[0.75] mt-3">
          Valuing and cultivating the creative aspect of the human spirit,
          recognizing it as a powerful tool for solving problems, expressing
          oneself, and understanding the world. Encouraging innovation and
          original thought, breaking free from traditional constraints, and
          exploring new ideas without being hindered by fear or skepticism.
        </p>
        <div class="mt-6 grid gap-3">
          <div>
            <div class="flex items-end justify-between mb-2 px-2">
              <div class="text-2xl font-sand-mobile-bold leading-[0.75]">
                Typographic Poster Challenge
              </div>
              <div class="text-2xl font-sand-mobile-bold leading-[0.75]">
                2022
              </div>
            </div>
            <div
              class="relative w-full aspect-[1/1.3] overflow-hidden bg-[#4A3326]"
            >
              <img
                src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715944571/general/not-work-typo-challenge_vvslvc.webp"
                alt=""
                class="w-full h-full object-cover scale-[1.01]"
              />
              <div class="w-[18rem] absolute top-4 left-4 text-light-100">
                <TypographicChallengeHeading />
              </div>

              <div
                class="absolute bottom-6 right-6 left-6 flex items-center gap-6"
              >
                <a
                  href="https://archive.thesandstudio.com/typographic-challenge"
                  target="_blank"
                  class="relative w-full h-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-black dark:text-white p-[0.4rem] text-2xl"
                >
                  <PixelBorder />
                  Brief
                </a>
                <a
                  href="https://archive.thesandstudio.com/gallery"
                  target="_blank"
                  class="relative w-full h-10 flex items-center justify-center rounded-full bg-white dark:bg-black text-black dark:text-white p-[0.4rem] text-2xl"
                >
                  <PixelBorder />
                  Gallery
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
            src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715944624/general/not-works-collaborate-mobile_v8zal7.svg"
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
            Hop in the DeLorean!
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
