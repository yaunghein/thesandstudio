<script lang="ts">
  import AChonLay from "$lib/svgs/mobile/AChonLay.svelte";
  import Home from "$lib/svgs/mobile/Home.svelte";
  import Burger from "$lib/svgs/mobile/Burger.svelte";

  import type { Swiper } from "swiper/types";

  export let swiper: Swiper;

  const switchMode = () => {
    const rootClasses = document.documentElement.classList;
    const toggleMode = () => {
      rootClasses.contains("dark")
        ? rootClasses.remove("dark")
        : rootClasses.add("dark");
      rootClasses.contains("dark")
        ? localStorage.setItem("sand-theme", "dark")
        : localStorage.setItem("sand-theme", "light");
    };
    toggleMode();
  };
</script>

<nav
  class="h-20 fixed z-20 inset-5 top-auto max-w-[320px] mx-auto flex items-center justify-evenly"
>
  <img
    class="absolute inset-0 w-full h-full dark:invert sand-transition"
    src="/images/mobile/dock-bg.png"
    alt=""
  />
  <button
    on:click={() => swiper?.slideTo(0)}
    class="relative h-14 aspect-square flex items-center justify-center dark:invert sand-transition"
  >
    <Home />
  </button>
  <button
    on:click={switchMode}
    class="relative h-14 aspect-square flex items-center justify-center"
  >
    <AChonLay />
  </button>
  <button
    on:click={() => swiper?.slideTo(1)}
    class="relative h-14 aspect-square flex items-center justify-center"
  >
    <Burger />
  </button>
</nav>
