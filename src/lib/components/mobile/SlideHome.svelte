<script>
  import Sand from "$lib/svgs/mobile/Sand.svelte";
</script>

<div class="swiper-slide h-full overflow-scroll shrink-0 p-3">
  <div class="h-full bg-white dark:bg-black w-full p-1">
    <div class="h-full p-4 relative">
      <img
        class="absolute inset-0 w-full h-full invert dark:invert-0 sand-transition"
        src="/images/mobile/border-v-long.png"
        alt=""
      />
      <div class="relative text-2xl leading-[0.75] max-w-[14rem]">
        Yeah... We do shit. Come make amazing shits with us. Any type of shit
        but probably email first. Join us in harnessing a diverse spectrum of
        minds and voices to catalyse unprecedented shits. Let thy shit hit thy
        fan.
      </div>
      <div class="relative my-5 w-5/6">
        <Sand />
      </div>

      <div class="relative flex flex-col mb-5">
        <a href="/" class="leading-[0.9] text-xl"> Privacy Policy </a>
        <a href="/" class="leading-[0.9] text-xl"> Terms and Conditions </a>
        <a href="/" class="leading-[0.9] text-xl"> Cookie Policy </a>
        <a href="/" class="leading-[0.9] text-xl mt-5">
          Made by The Sand Studio {new Date().getFullYear()}
        </a>
      </div>

      <a
        href="https://www.websitecarbon.com/website/thesandstudio-vercel-app/"
        target="_black"
        class="relative block rounded-full px-4 py-1 w-5/6 text-sand-green dark:text-black dark:bg-sand-green border-2 border-sand-green text-left"
      >
        0.25g of CO2 /view
      </a>
    </div>
  </div>
</div>
