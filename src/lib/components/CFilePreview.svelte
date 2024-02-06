<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import lottie from "lottie-web";
  import type { File } from "$lib/stores/finder";

  export let data: File;

  const apps = ["Sand Scan", "For All Thingkind", "Works", "Not Works"];

  const playLottie = (path: string) => {
    // had to remove and create new div again because lottie doesn't seem to replace the old one
    const lottieEle = document.querySelector("#lottie");
    lottieEle && lottieEle.remove();

    const lottieContainer = document.querySelector("#lottie-container");

    if (data.label === "Not Works") {
      const newImageEle = document.createElement("img");
      newImageEle.id = "lottie";
      newImageEle.setAttribute("src", path);
      lottieContainer?.appendChild(newImageEle);
      return;
    }

    const newLottieEle = document.createElement("div");
    newLottieEle.id = "lottie";
    lottieContainer?.appendChild(newLottieEle);

    lottie.loadAnimation({
      container: newLottieEle,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });
  };

  onMount(() => playLottie(data.icon as string));

  $: if (data && browser) playLottie(data.icon as string);

  const paddings: Record<string, string> = {
    "Sand Scan": "p-10",
    "For All Thingkind": "p-0 scale-[1.2]",
    Works: "p-0",
    "Not Works": "p-10",
  };
</script>

<div
  class="shrink-0 w-[29.8rem] h-full p-5 -mt-[0.1rem] border-l-2 -ml-[0.125rem] border-white dark:border-light-12"
>
  {#if data.label.toLowerCase() === "we are sand"}
    <div
      class="shrink-0 w-96 p-5 h-full flex border-l-[0.1875rem] -ml-[0.1875rem] border-white dark:border-light-12"
    >
      <div
        class="w-full max-h-full p-5 overflow-auto rounded-xl border-2 border-white dark:border-light-12"
      >
        <p class="text-lg">
          At SAND, we are more than just a design studio; we are a collective of
          innovative spirits venturing where most have traveled less. Our team
          embodies a fusion of talents in Architecture, Design, Motion, and
          Code. We are the home for the curious, the thinkers, the makers, and
          the doers who are passionate about transforming bold ideas into
          tangible realities. Our ethos is rooted in pushing boundaries and
          delving into the intersections of diverse fields. We don't just
          create; we collaborate, innovate, and inspire. SAND is where
          like-minded individuals unite to challenge the conventional and
          explore uncharted territories in design and technology. We are on a
          journey to a destination unknown, driven by the belief that it takes a
          multitude of fields and diversity to achieve something truly
          groundbreaking. Our projects are collaborative explorations, valuing
          each unique voice and idea, igniting the potential for extraordinary
          innovation. Join us at SAND, where your passion for creativity and
          diversity finds its purpose. Here, we're not just designing for today;
          we're pioneering the future through interdisciplinary collaboration
          and collective ingenuity. We are going where most have traveled less,
          because it takes a rich tapestry of skills and perspectives to uncover
          what we have yet to even imagine.
        </p>
      </div>
    </div>
  {:else if data.label.toLowerCase() === "our services"}
    <div
      class="shrink-0 w-96 p-5 h-full flex border-l-[0.1875rem] -ml-[0.1875rem] border-white dark:border-light-12"
    >
      <div
        class="w-full max-h-full p-5 overflow-auto rounded-xl border-2 border-white dark:border-light-12"
      >
        <div class="grid gap-6">
          <div>
            <p class="leading-tight text-lg">Branding and Graphic Design</p>
            <p class="leading-tight text-lg">Motion Graphics and Animation</p>
          </div>
          <div>
            <p class="leading-tight text-lg">Architectural Design</p>
            <p class="leading-tight text-lg">Interior Design</p>
            <p class="leading-tight text-lg">3D Modeling and Visualization</p>
          </div>
          <div>
            <p class="leading-tight text-lg">Web Design and Development</p>
            <p class="leading-tight text-lg">Web Maintenance and Support</p>
            <p class="leading-tight text-lg">E-commerce Solutions</p>
          </div>
          <div>
            <p class="leading-tight text-lg">Consultation and Strategy</p>
          </div>
          <div>
            <p class="leading-tight text-lg">Others</p>
            <p class="leading-tight text-lg">
              (Every idea matters to us – no concept too small, no vision too
              grand. If you’re a person with an idea. Come say hi!)
            </p>
          </div>
        </div>
      </div>
    </div>
  {:else if data.label.toLowerCase() === "inquiry"}
    <div
      class="shrink-0 w-96 p-5 h-full flex border-l-[0.1875rem] -ml-[0.1875rem] border-white dark:border-light-12"
    >
      <div
        class="w-full max-h-full p-5 overflow-auto rounded-xl border-2 border-white dark:border-light-12"
      >
        <div class="grid gap-6">
          <div>
            <p class="leading-tight text-lg">General:</p>
            <a href="mailto:hi@thesandstudio.com" class="leading-tight text-lg">
              hi@thesandstudio.com
            </a>
          </div>
        </div>
      </div>
    </div>
  {:else if data.label.toLowerCase() === "social media"}
    <div
      class="shrink-0 w-96 p-5 h-full flex border-l-[0.1875rem] -ml-[0.1875rem] border-white dark:border-light-12"
    >
      <div
        class="w-full max-h-full p-5 overflow-auto rounded-xl border-2 border-white dark:border-light-12"
      >
        <div class="grid gap-6">
          <div class="grid">
            <a
              href="https://www.google.com/"
              target="_blank"
              class="leading-tight text-lg"
            >
              Instagram
            </a>
            <a
              href="https://www.google.com/"
              target="_blank"
              class="leading-tight text-lg"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  {:else if apps.includes(data.label)}
    <div
      class="flex flex-col h-full rounded-2xl border-2 border-white dark:border-light-12 overflow-hidden"
    >
      <div
        class="relative w-full aspect-square grid items-center rounded-2xl -m-[0.125rem] border-2 border-t-0 border-white dark:border-light-12 overflow-hidden"
      >
        <div class={paddings[data.label]} id="lottie-container">
          <!-- Here comes image: lottie or gif -->
        </div>
      </div>
      <div
        class="grow rounded-b-2xl -m-[0.1875rem] border-2 border-t-0 border-white dark:border-light-12 overflow-hidden"
      >
        <p class="p-6 text-xl leading-tight">
          {data.description || ""}
        </p>
      </div>
      <button
        class="shrink-0 w-full h-20 text-2xl font-sand-medium"
        on:click={data.handleClick}
      >
        {data.label === "Sand Scan" ? "Launch" : "Go"}
      </button>
    </div>
  {:else}
    <div
      class="shrink-0 w-96 h-full p-5 border-l-[0.1875rem] -ml-[0.1875rem] border-white dark:border-light-12"
    >
      <div
        class="flex flex-col h-full rounded-xl border-2 bg-light-80 dark:bg-light-40 border-white dark:border-light-12 overflow-hidden"
      >
        <div
          class="relative bg-light-100 dark:bg-light-10 rounded-2xl -m-[0.1875rem] border-2 border-t-0 border-white dark:border-light-12 h-[16rem] overflow-hidden"
        >
          <div class="h-full">
            <img
              src={data.mediaSrc}
              alt=""
              class="h-full w-full object-cover"
            />
          </div>
        </div>
        <div
          class="bg-light-100 dark:bg-light-10 grow rounded-b-2xl -m-[0.1875rem] border-2 border-t-0 border-white dark:border-light-12 h-[16rem] overflow-hidden"
        >
          <p class="p-6 text-lg leading-tight">
            {data.description || ""}
          </p>
        </div>
        <button
          class="shrink-0 w-full h-20 text-lg font-sand-bold"
          on:click={() => alert(0)}
        >
          Launch
        </button>
      </div>
    </div>
  {/if}
</div>
