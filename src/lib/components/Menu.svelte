<script lang="ts">
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import lottie from "lottie-web";
  import drag from "$lib/utils/drag";
  import ButtonClose from "./ButtonClose.svelte";
  import LogoShape from "$lib/svgs/LogoShape.svelte";
  import { addShell } from "$lib/stores/shell";
  import { openContactTab } from "$lib/stores/finder";
  import playLottie from "$lib/utils/playLottie";

  let isOpen = false;

  const openTermsAndConditions = () => {
    addShell({ id: "copyright", zIndex: 65 });
    setTimeout(() => {
      const el = document.getElementById(
        "Terms-&-Conditions",
      ) as HTMLButtonElement;
      el.click();
    }, 0);
  };

  const openCookiesPolicy = () => {
    addShell({ id: "copyright", zIndex: 65 });
    setTimeout(() => {
      const el = document.getElementById("Cookies-Policy") as HTMLButtonElement;
      el.click();
    }, 0);
  };

  const openPrivacyPolicy = () => {
    addShell({ id: "copyright", zIndex: 65 });
    setTimeout(() => {
      const el = document.getElementById("Privacy-Policy") as HTMLButtonElement;
      el.click();
    }, 0);
  };
</script>

<button on:click={() => (isOpen = !isOpen)} class="grid place-items-end">
  <img
    class="w-11 aspect-square"
    src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715955911/general/hamburger_ibrafo.webp"
    alt="Menu"
  />
</button>

{#if isOpen}
  <div
    use:drag
    in:scale={{ start: 0.9, duration: 200, easing: backOut }}
    out:scale={{ start: 0.9, duration: 200, easing: backIn }}
    class="p-6 pt-4 fixed top-[8.125rem] right-16 border-2 border-white dark:border-light-12 rounded-3xl overflow-hidden"
  >
    <div class="transparent-layer" />

    <div class="absolute inset-0 flex gap-10 -ml-[0.5rem] opacity-sand">
      {#each [...Array(100).keys()] as _}
        <div class="shrink-0 w-line h-full bg-white dark:bg-light-12" />
      {/each}
    </div>

    <div class="relative">
      <div class="mb-8">
        <ButtonClose on:close={() => (isOpen = false)} />
      </div>

      <div class="grid gap-5 grid-cols-2">
        <!-- ########## Sand Desktop ########## -->
        <a
          href="/"
          class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-48 aspect-square sand-transition"
        >
          <div
            class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white sand-transition"
          />

          <div
            class="w-10 absolute invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-10 left-1/2 -translate-x-1/2 sand-transition"
          >
            <div class="animate-spin-slow sand-transition">
              <LogoShape />
            </div>
          </div>
          <div
            class="w-20 text-2xl text-left leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 text-black dark:text-light-100 group-hover:text-light-100 dark:group-hover:text-light-10 sand-transition"
          >
            SAND DESKTOP
          </div>
        </a>

        <!-- ########## For All Thingkind ########## -->
        <a
          href="/for-all-thingkind"
          class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-48 aspect-square sand-transition"
        >
          <div
            class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white sand-transition"
          />

          <div
            class="w-32 absolute scale-[1.4] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] sand-transition"
          >
            <div
              use:playLottie={"https://res.cloudinary.com/dlhbpswom/raw/upload/v1715763241/lotties/fatk_tdug6t.json"}
            />
          </div>
        </a>

        <!-- ########## Works ########## -->
        <a
          href="/works"
          class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-48 aspect-square sand-transition"
        >
          <div
            class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white sand-transition"
          />

          <div
            class="w-32 absolute scale-[1.4] group-hover:scale-[2.3] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-[50%] -translate-x-1/2 -translate-y-[50%] group-hover:-translate-x-[40%] group-hover:-translate-y-[90%] group-hover:rotate-[75deg] sand-transition"
          >
            <div
              use:playLottie={"https://res.cloudinary.com/dlhbpswom/raw/upload/v1715763270/lotties/works_tyaamm.json"}
            />
          </div>
          <div
            class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
          >
            Works
          </div>
        </a>

        <!-- ########## Not Works ########## -->
        <a
          href="/not-works"
          class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-48 aspect-square sand-transition"
        >
          <div
            class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white sand-transition"
          />

          <div
            class="w-32 absolute scale-[1] group-hover:scale-[1.6] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-[50%] -translate-x-1/2 -translate-y-[50%] group-hover:-translate-x-[0%] group-hover:-translate-y-[90%] rotate-[180deg] sand-transition"
          >
            <img
              src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715763646/app-images/not-works_wnc5c5.gif"
              alt="Not Works"
              class="w-full h-full"
            />
          </div>
          <div
            class="text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
          >
            Not Works
          </div>
        </a>
      </div>

      <div
        class="text-2xl text-light-80 dark:text-light-20 grid gap-8 mt-8 px-[0.6rem]"
      >
        <div class="flex flex-col gap-2">
          <button
            class="leading-none text-left hover:text-black dark:hover:text-white sand-transition"
            on:click={() => {
              addShell({ id: "finder", zIndex: 65 });
              openContactTab();
            }}
          >
            hi@thesandstudio.com
          </button>
        </div>

        <div class="flex flex-col gap-2">
          <a
            class="leading-none hover:text-black dark:hover:text-white sand-transition"
            href="https://www.instagram.com/the.sandstudio/"
            target="_blank"
          >
            Instagram
          </a>
          <a
            class="leading-none hover:text-black dark:hover:text-white sand-transition"
            href="https://www.facebook.com/thesandstudio.works"
            target="_blank"
          >
            Facebook
          </a>
        </div>

        <div class="flex flex-col items-start gap-2">
          <button
            class="leading-none hover:text-black dark:hover:text-white sand-transition"
            on:click={openPrivacyPolicy}
          >
            Privacy Policy
          </button>
          <button
            class="leading-none hover:text-black dark:hover:text-white sand-transition"
            on:click={openTermsAndConditions}
          >
            Terms and Conditions
          </button>
          <button
            class="leading-none hover:text-black dark:hover:text-white sand-transition"
            on:click={openCookiesPolicy}
          >
            Cookie policy
          </button>
        </div>

        <div class="flex flex-col gap-2">
          <a
            class="leading-none hover:text-black dark:hover:text-white sand-transition"
            href="/"
          >
            Made by The Sand Studio {new Date().getFullYear()}
          </a>
        </div>
      </div>

      <div class="mt-8 flex items-center w-[16rem] text-white mb-4 px-[0.6rem]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 256 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48.5039H8.712C9.90037 60.5544 17.2293 66.8285 30.5975 66.8285C40.4005 66.8285 47.4293 62.3452 47.4293 53.4848C47.4293 43.7228 38.912 41.4343 26.2374 38.644C13.7616 35.8537 3.06624 32.272 3.06624 18.8264C3.07029 7.06957 12.7719 0 27.1297 0C44.8538 0 52.1828 9.06439 53.9633 22.2082H45.5474C44.2617 12.0505 37.7236 6.97166 27.3284 6.97166C17.7241 6.97166 11.3848 11.0551 11.3848 18.4266C11.3848 26.4956 19.3059 28.882 29.8999 30.9748C43.6655 33.7651 56.2387 37.1509 56.2387 53.1829C56.2387 66.5266 45.446 74 30.1959 74C10.2978 74 0.790894 62.8429 0 48.5039Z"
            fill="currentColor"
          />
          <path
            d="M86.3453 1.39515H96.3471L122.487 72.6049H112.781L105.258 50.8944H77.0371L69.4121 72.6049H60.3026L86.3453 1.39515ZM79.6126 43.6208H102.784L94.6639 19.7197C93.2768 15.7342 91.4963 9.65998 91.4963 9.65998H91.2975C91.2975 9.65998 89.4156 15.6363 88.0285 19.7197L79.6126 43.6208Z"
            fill="currentColor"
          />
          <path
            d="M130.108 1.39515H139.514L171.794 50.8944C174.171 54.5781 176.945 60.0567 176.945 60.0567H177.144V1.39515H185.463V72.6049H176.353L143.874 23.0077C141.594 19.5239 138.626 14.1432 138.626 14.1432H138.427V72.6049H130.108V1.39515Z"
            fill="currentColor"
          />
          <path
            d="M198.729 1.39515H224.476C245.765 1.39515 255.864 15.9341 255.864 37.2488C255.864 58.5636 245.072 72.6049 223.782 72.6049H198.729V1.39515ZM223.482 64.7357C240.12 64.7357 246.751 53.9784 246.751 37.2488C246.751 20.5193 240.809 9.16229 224.176 9.16229H207.64V64.7357H223.482Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  </div>
{/if}
