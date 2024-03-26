<script lang="ts">
  import AChonLay from "$lib/svgs/mobile/AChonLay.svelte";
  import Home from "$lib/svgs/mobile/Home.svelte";
  import Burger from "$lib/svgs/mobile/Burger.svelte";
  import { MobileHomeSwiper as swiper } from "$lib/stores/slider";
  import PixelBorder from "./PixelBorder.svelte";

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
  class="h-[4.5rem] fixed z-20 inset-5 top-auto max-w-[420px] mx-auto flex items-center justify-evenly"
>
  <PixelBorder />
  <button
    on:click={() => $swiper?.slideTo(0)}
    class="relative h-11 aspect-square flex items-center justify-center dark:invert sand-transition"
  >
    <Home />
  </button>
  <button
    on:click={switchMode}
    class="relative h-11 aspect-square flex items-center justify-center"
  >
    <AChonLay />
  </button>
  <button
    on:click={() => $swiper?.slideTo(1)}
    class="relative h-11 aspect-square flex items-center justify-center"
  >
    <Burger />
  </button>
</nav>
