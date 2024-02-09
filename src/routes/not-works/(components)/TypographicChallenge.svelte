<script>
  import gsap from "gsap";
  import TypographicChallengeHeading from "./TypographicChallengeHeading.svelte";
</script>

<div>
  <div class="overflow-hidden">
    <div
      class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
    >
      <div class="transparent-layer" />
      <span class="block relative text-3xl">2022</span>
    </div>
  </div>
  <div class="relative w-full aspect-[1/1.25] overflow-hidden bg-[#4A3326]">
    <img
      src="/images/competitions/2.jpg"
      alt=""
      class="w-full h-full object-cover scale-[1.01]"
    />
    <div class="w-[40rem] absolute top-8 left-8 text-light-100">
      <TypographicChallengeHeading />
    </div>

    <div
      class="group rounded-full absolute bottom-4 left-4 right-4 border-2 border-white dark:border-light-12 flex items-center overflow-hidden"
    >
      <div class="transparent-layer rounded-full" />
      <div
        id="bg"
        class="absolute rounded-full bg-black dark:bg-white top-0 bottom-0 left-0 w-1/2 opacity-0 group-hover:opacity-100 sand-transition"
      />

      <a
        href="/"
        class="relative w-1/2 rounded-full px-8 py-5 text-white dark:text-light-12 flex items-center justify-between text-[2.5rem]"
        on:mouseenter={() => gsap.to("#bg", { x: "0%", ease: "power4" })}
      >
        <span class="leading-none">Brief</span>
        <div class="w-7 aspect-square flex items-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 31L31 1M31 1V31M31 1H1"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </a>

      <a
        href="/"
        class="relative w-1/2 rounded-full px-8 py-5 text-white dark:text-light-12 flex items-center justify-between text-[2.5rem]"
        on:mouseenter={() => gsap.to("#bg", { x: "100%", ease: "power4" })}
      >
        <span class="leading-none">Gallery</span>
        <div class="w-7 aspect-square flex items-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 31L31 1M31 1V31M31 1H1"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</div>
