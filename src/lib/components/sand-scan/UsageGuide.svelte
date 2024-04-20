<script lang="ts">
  import lottie from "lottie-web";

  const runningLottie = (node: HTMLDivElement, path: string) => {
    const player = lottie.loadAnimation({
      container: node,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });
    const handleMouseEnter = () => {
      player.setSpeed(0.3);
    };
    const handleMouseLeave = () => {
      player.setSpeed(1);
    };
    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return {
      destroy: () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      },
    };
  };
</script>

<div class="relative text-light-10 w-full h-full overflow-hidden">
  <div
    class="absolute inset-0 w-full h-full bg-light-20 dark:hidden opacity-40 rounded-[1.4rem]"
  />
  <div
    class="absolute inset-0 w-full h-full bg-[#ff9411] mix-blend-multiply opacity-20 hidden dark:block rounded-[1.2rem]"
  />
  <div
    class="absolute inset-0 w-full h-full bg-sand-yellow mix-blend-multiply opacity-[15%] hidden dark:block rounded-[1.2rem]"
  />

  <div
    class="absolute inset-[0.12rem] top-0 border-2 border-sand-yellow rounded-[1.2rem] hidden dark:block"
  />

  <div class="absolute inset-0 w-full h-full -ml-[0.4rem] -mt-[0.4rem]">
    {#each [...Array(32).keys()] as h}
      {#each [...Array(32).keys()] as v}
        {@const x = v * 2.63}
        {@const y = h * 2.63}
        <div
          class="shrink-0 rounded-full bg-sand-yellow opacity-90 absolute w-[0.125rem] aspect-square"
          style="top: {y}rem; left: {x}rem;"
        />
      {/each}
    {/each}
  </div>

  <img
    class="relative z-20 dark:hidden w-full -mb-16 mt-10 pointer-events-none"
    src="/images/sand-scan-usage-guide.webp"
    alt="SAND Scan Usage Guide"
  />
  <img
    class="relative z-20 hidden dark:block w-full -mb-16 mt-10 pointer-events-none"
    src="/images/sand-scan-usage-guide-for-dark.webp"
    alt="SAND Scan Usage Guide"
  />

  <img
    class="opacity-100 dark:opacity-0 sand-transition absolute z-30 top-44 left-40 w-48 h-44"
    src="/images/sand-scan-one.gif"
    alt=""
  />
  <div
    use:runningLottie={"lotties/running-black.json"}
    class="absolute z-10 top-[8.2rem] right-28 w-[36rem] dark:w-0 h-[17rem] dark:hidden overflow-hidden"
  />
  <img
    class="opacity-100 dark:opacity-0 sand-transition absolute z-30 bottom-[11.5rem] right-[4.2rem] w-[10.3rem] aspect-square rounded-2xl"
    src="/images/sand-scan-three.gif"
    alt=""
  />

  <img
    class="opacity-0 dark:opacity-100 sand-transition absolute z-30 top-44 left-40 w-48 h-44"
    src="/images/sand-scan-one-for-dark.gif"
    alt=""
  />
  <div
    use:runningLottie={"lotties/running-white.json"}
    class="absolute z-10 top-[8.2rem] right-28 w-0 dark:w-[36rem] h-[17rem] hidden dark:block"
  />
  <img
    class="opacity-0 dark:opacity-100 sand-transition absolute z-30 bottom-[11.5rem] right-[4.2rem] w-[10.3rem] aspect-square rounded-2xl"
    src="/images/sand-scan-three-for-dark.gif"
    alt=""
  />
</div>
