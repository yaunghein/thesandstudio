<script lang="ts">
  import { browser } from "$app/environment";
  import { changeCursorType } from "$lib/stores/cursor";
  import { openContactTab } from "$lib/stores/finder";
  import { addShell } from "$lib/stores/shell";
  import playLottie from "$lib/utils/playLottie";
</script>

<section class="grow">
  <div class="grid grid-cols-1 sm:grid-cols-3">
    <div class="fade-up">
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
          <source
            src="https://res.cloudinary.com/dlhbpswom/video/upload/v1715944268/general/moving-sunset-sky_csvrih.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        {#if browser}
          <div
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem]"
          >
            <div use:playLottie={"/fatk-bag.json"} />
          </div>
        {/if}
        <!-- <img
          src="/images/fatk-bowl.webp"
          alt=""
          class="absolute right-56 bottom-10 w-40"
        /> -->
      </div>

      <div class="absolute bottom-5 right-5 flex gap-5">
        <a
          target="_blank"
          href="https://thesandstudio.webflow.io/for-all-thingkind"
          class="sand-transition flex items-center gap-10 text-black dark:text-white hover:text-white hover:dark:text-black text-xl rounded-full py-2 px-5 border-2 border-white hover:border-black dark:hover:border-white dark:border-light-12 bg-light-90 hover:bg-black dark:hover:bg-white bg-opacity-60 hover:bg-opacity-100 dark:hover:bg-opacity-100 dark:bg-opacity-60 dark:bg-black"
        >
          Visit
          <div class="shrink-0 w-4 aspect-square">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 17L17 1M17 1V17M17 1H1"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>

    <button
      on:click={() => {
        addShell({ id: "finder", zIndex: 65 });
        openContactTab();
      }}
      use:changeCursorType={{ inType: "contact", outType: "normal" }}
      class="fade-up"
    >
      <div class="overflow-hidden">
        <div
          class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
        >
          <div class="transparent-layer" />
          <span class="block relative text-3xl text-left">2024</span>
        </div>
      </div>

      <div
        class="relative w-full aspect-square overflow-hidden text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 pt-10 pl-10"
      >
        <!-- <span class="text-4xl font-sand-medium">Do you have an idea?</span> -->
        <!-- <div use:doYouHaveAnIdeaLottie></div> -->
        <img
          src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715955807/general/fatk-make-shit_kiswpm.svg"
          alt="Make shit with us"
          class="invert dark:invert-0 w-[50%]"
        />
      </div>
    </button>

    <div class="fade-up">
      <div class="overflow-hidden">
        <div
          class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
        >
          <div class="transparent-layer" />
          <span class="block relative text-3xl text-left">-</span>
          <!-- <span class="block relative text-3xl">SAND Rug 2022</span> -->
        </div>
      </div>
      <div
        class="relative w-full aspect-square overflow-hidden bg-light-90 dark:bg-light-12"
      ></div>
      <!-- <div
        class="relative w-full aspect-square overflow-hidden bg-[#4A3326]"
      ></div> -->
    </div>
  </div>
</section>
