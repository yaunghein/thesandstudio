<script lang="ts">
  import { browser } from "$app/environment";
  import lottie from "lottie-web";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { changeCursorType } from "$lib/stores/cursor";

  // this lottie file is not working at the moment
  const doYouHaveAnIdeaLottie = (node: HTMLDivElement) => {
    lottie.loadAnimation({
      container: node,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lotties/do-you-have-an-idea.json",
    });
  };
</script>

<section class="grow">
  <div class="grid grid-cols-1 sm:grid-cols-3">
    <a
      target="_blank"
      href="https://archive.thesandstudio.com/for-all-thingkind"
    >
      <div class="overflow-hidden">
        <div
          class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
        >
          <div class="transparent-layer" />
          <span class="block relative text-3xl">
            Tote Bag & Trinket Bowl 2022
          </span>
        </div>
      </div>
      <div class="relative w-full aspect-square overflow-hidden bg-[#4A3326]">
        <video
          autoplay
          muted
          loop
          playsinline
          class="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/moving-sunset-sky.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {#if browser}
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem]"
          >
            <LottiePlayer
              src="/lotties/fatk-bag.json"
              autoplay={true}
              loop={true}
              renderer="svg"
              background="transparent"
              height="100%"
              width="100%"
              controls=""
              controlsLayout=""
            />
          </div>
        {/if}
        <!-- <img
          src="/images/fatk-bowl.webp"
          alt=""
          class="absolute right-56 bottom-10 w-40"
        /> -->
      </div>
    </a>

    <a
      href="mailto:hi@thesandstudio.com"
      use:changeCursorType={{ inType: "contact", outType: "normal" }}
    >
      <div class="overflow-hidden">
        <div
          class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
        >
          <div class="transparent-layer" />
          <span class="block relative text-3xl">2024</span>
        </div>
      </div>

      <div
        class="relative w-full aspect-square overflow-hidden text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 pt-10 pl-10"
      >
        <!-- <span class="text-4xl font-sand-medium">Do you have an idea?</span> -->
        <!-- <div use:doYouHaveAnIdeaLottie></div> -->
        <img
          src="/images/fatk-make-shit.svg"
          alt="Make shit with us"
          class="invert dark:invert-0 w-[50%]"
        />
      </div>
    </a>

    <a href="/">
      <div class="overflow-hidden">
        <div
          class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
        >
          <div class="transparent-layer" />
          <span class="block relative text-3xl">-</span>
          <!-- <span class="block relative text-3xl">SAND Rug 2022</span> -->
        </div>
      </div>
      <div
        class="relative w-full aspect-square overflow-hidden bg-light-90 dark:bg-light-12"
      ></div>
      <!-- <div
        class="relative w-full aspect-square overflow-hidden bg-[#4A3326]"
      ></div> -->
    </a>
  </div>
</section>
