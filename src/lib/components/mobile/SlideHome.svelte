<script>
  import Sand from "$lib/svgs/mobile/Sand.svelte";
  import PixelBorder from "./PixelBorder.svelte";
  import Weather from "./Weather.svelte";
</script>

<div
  data-slide-name="home"
  class="swiper-slide h-full overflow-scroll shrink-0 px-4"
>
  <div class="h-full bg-white dark:bg-black w-full">
    <div class="h-full relative">
      <PixelBorder />
      <div class="p-4 h-full relative overflow-scroll hide-scrollbar">
        <div class="flex flex-col items-start">
          <div class="relative text-2xl leading-[0.75]">
            Yeah... We do shit. Come make amazing shits with us. Any type of
            shit but probably email first. Join us in harnessing a diverse
            spectrum of minds and voices to catalyze unprecedented shits. Let
            thy shit hit thy fan.
          </div>
          <div class="relative my-5 w-5/6">
            <Sand />
          </div>

          <Weather />

          <div class="relative flex flex-col mb-5">
            <a
              href="/mobile-policy?page=privacy"
              class="leading-[0.9] text-xl text-left"
            >
              Privacy Policy
            </a>
            <a
              href="/mobile-policy?page=terms"
              class="leading-[0.9] text-xl text-left"
            >
              Terms and Conditions
            </a>
            <a
              href="/mobile-policy?page=cookie"
              class="leading-[0.9] text-xl text-left"
            >
              Cookie Policy
            </a>
            <span class="leading-[0.9] text-xl mt-5">
              Made by The Sand Studio {new Date().getFullYear()}
            </span>
          </div>

          <a
            href="https://www.websitecarbon.com/website/thesandstudio-vercel-app/"
            target="_black"
            class="relative block rounded-full px-4 py-1 text-sand-green dark:text-black dark:bg-sand-green border-2 border-sand-green text-left"
          >
            Calculate CO2 Emission
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
