<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import LogoShape from "$lib/svgs/LogoShape.svelte";
  import ContactFormTopShape from "$lib/svgs/ContactFormTopShape.svelte";
  import ContactFormTubeAPhone from "$lib/svgs/ContactFormTubeAPhone.svelte";

  const defaults = { ease: "power4.inOut", duration: 1 };

  onMount(() => {
    const tl = gsap.timeline({ defaults });
    tl.from("#tube", { y: "115%" }).to("#paper", { x: "0%" }, "<50%");
  });

  const sendTheTube = () => {
    const tl = gsap.timeline({ defaults });
    tl.to("#paper", { x: "79.5%" })
      .to("#tube", { y: "-115%" })
      .set("#tube", { y: "115%" })
      .to("#tube", { y: "0%" })
      .to("#paper", { x: "0%" }, "<50%");
  };

  const handleSubmit = () => {
    sendTheTube();
  };
</script>

<form on:submit|preventDefault class="relative text-xl h-full flex flex-col">
  <div class="relative z-10 w-full flex ml-[0.1rem] -mt-[0.1rem]">
    <ContactFormTopShape />
  </div>

  <div id="tube" class="px-2 h-full -mt-[7rem] flex flex-col">
    <div class="flex">
      <ContactFormTubeAPhone />
    </div>

    <div class="grow relative w-52 mx-auto bg-light-80 bg-opacity-50">
      <div
        class="absolute w-[56rem] right-3 top-3 h-[27.3rem] overflow-hidden rounded-lg"
      >
        <div
          id="paper"
          class="absolute w-[55rem] right-0 h-full bg-white dark:bg-light-7 rounded-lg translate-x-[79.5%] p-3"
        >
          hehehe
        </div>
      </div>
    </div>

    <div class="flex rotate-180">
      <ContactFormTubeAPhone />
    </div>
  </div>

  <button
    on:click={handleSubmit}
    id="submit-btn"
    class="relative w-[89%] mx-auto h-14 flex items-center justify-end rounded-full border-2 border-white dark:border-light-12 bg-black dark:bg-light-100 text-light-100 dark:text-black p-3 mb-4 mt-3"
  >
    <span
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-medium text-xl"
    >
      Lock
    </span>
    <div class="flex w-6 aspect-square">
      <LogoShape />
    </div>
  </button>
</form>
