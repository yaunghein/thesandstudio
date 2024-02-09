<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import lottie from "lottie-web";
  import ContactForm from "./ContactForm.svelte";
  import type { File } from "$lib/stores/finder";
  import { handleFileDoubleClick } from "$lib/stores/finder";

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
      class="w-full h-full p-5 overflow-auto rounded-xl border-2 border-white dark:border-light-12"
    >
      <p class="text-2xl">
        At SAND, we are more than just a design studio; we are a collective of
        innovative spirits venturing where most have traveled less. Our team
        embodies a fusion of talents in Architecture, Design, Motion, and Code.
        We are the home for the curious, the thinkers, the makers, and the doers
        who are passionate about transforming bold ideas into tangible
        realities. Our ethos is rooted in pushing boundaries and delving into
        the intersections of diverse fields. We don't just create; we
        collaborate, innovate, and inspire. SAND is where like-minded
        individuals unite to challenge the conventional and explore uncharted
        territories in design and technology. We are on a journey to a
        destination unknown, driven by the belief that it takes a multitude of
        fields and diversity to achieve something truly groundbreaking. Our
        projects are collaborative explorations, valuing each unique voice and
        idea, igniting the potential for extraordinary innovation. Join us at
        SAND, where your passion for creativity and diversity finds its purpose.
        Here, we're not just designing for today; we're pioneering the future
        through interdisciplinary collaboration and collective ingenuity. We are
        going where most have traveled less, because it takes a rich tapestry of
        skills and perspectives to uncover what we have yet to even imagine.
      </p>
    </div>
  {:else if data.label.toLowerCase() === "our services"}
    <div
      class="w-full h-full p-5 overflow-auto rounded-xl border-2 border-white dark:border-light-12"
    >
      <div class="grid gap-6">
        <div>
          <p class="leading-tight text-2xl">Branding and Graphic Design</p>
          <p class="leading-tight text-2xl">Motion Graphics and Animation</p>
        </div>
        <div>
          <p class="leading-tight text-2xl">Architectural Design</p>
          <p class="leading-tight text-2xl">Interior Design</p>
          <p class="leading-tight text-2xl">3D Modeling and Visualization</p>
        </div>
        <div>
          <p class="leading-tight text-2xl">Web Design and Development</p>
          <p class="leading-tight text-2xl">Web Maintenance and Support</p>
          <p class="leading-tight text-2xl">E-commerce Solutions</p>
        </div>
        <div>
          <p class="leading-tight text-2xl">Consultation and Strategy</p>
        </div>
        <div>
          <p class="leading-tight text-2xl">Others</p>
          <p class="leading-tight text-2xl">
            (Every idea matters to us – no concept too small, no vision too
            grand. If you’re a person with an idea. Come say hi!)
          </p>
        </div>
      </div>
    </div>
  {:else if data.label.toLowerCase() === "inquiry"}
    <div
      class="w-full h-full p-5 overflow-auto rounded-xl border-2 border-white dark:border-light-12"
    >
      <div class="grid gap-6">
        <div>
          <p class="leading-tight text-2xl">General:</p>
          <a href="mailto:hi@thesandstudio.com" class="leading-tight text-2xl">
            hi@thesandstudio.com
          </a>

          <div class="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  {:else if data.label.toLowerCase() === "social media"}
    <div
      class="w-full h-full p-5 overflow-auto rounded-xl border-2 border-white dark:border-light-12"
    >
      <div class="grid gap-6">
        <div class="grid">
          <a
            href="https://www.google.com/"
            target="_blank"
            class="leading-tight text-2xl"
          >
            Instagram
          </a>
          <a
            href="https://www.google.com/"
            target="_blank"
            class="leading-tight text-2xl"
          >
            Facebook
          </a>
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
        <div
          class="{paddings[data.label]} invert dark:invert-0"
          id="lottie-container"
        >
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
        {data.label === "Sand Scan" ? "Launch" : "Visit"}
      </button>
    </div>
  {:else}
    <div
      class="flex flex-col items-center justify-center h-full rounded-xl border-2 border-white dark:border-light-12 overflow-hidden"
    >
      <button on:click={() => handleFileDoubleClick(data)}>
        {#if data.mediaType === "img"}
          <img
            src={data.mediaSrc}
            alt={data.label}
            class="w-full object-contain rounded-2xl"
          />
        {:else if data.mediaType === "video"}
          <div class="group w-full h-full relative">
            {#if data.thumbnail}
              <img
                src={data.thumbnail}
                alt={data.label}
                class="w-full object-contain rounded-2xl"
              />
              <div
                class="text-black opacity-50 group-hover:opacity-100 sand-transition flex items-center w-32 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 390 390"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M215.452 63.5206C209.854 36.569 202.258 0 195 0C187.742 0 180.146 36.569 174.548 63.5206C171.333 78.9978 168.777 91.3033 167.322 91.6909C165.874 92.0847 157.518 82.7174 147.003 70.931C128.677 50.3885 103.795 22.4974 97.5087 26.1277C91.2263 29.7556 102.924 65.1996 111.551 91.3401C116.51 106.366 120.454 118.318 119.386 119.386C118.32 120.447 106.4 116.513 91.4044 111.564C65.2577 102.936 29.7586 91.2211 26.1277 97.5087C22.4859 103.796 50.3799 128.676 70.926 147.002C82.7108 157.513 92.0782 165.868 91.6909 167.322C91.3033 168.777 78.9977 171.333 63.5206 174.548C36.569 180.146 0 187.742 0 195C0 202.258 36.569 209.854 63.5206 215.452C78.9978 218.667 91.3033 221.223 91.6909 222.678C92.0847 224.126 82.7174 232.482 70.931 242.997C50.3886 261.323 22.4974 286.205 26.1277 292.491C29.7556 298.774 65.1996 287.076 91.3401 278.449C106.366 273.49 118.318 269.546 119.386 270.614C120.447 271.68 116.513 283.6 111.564 298.596C102.936 324.742 91.2211 360.241 97.5087 363.872C103.796 367.514 128.676 339.62 147.002 319.074C157.513 307.289 165.868 297.922 167.322 298.309C168.777 298.697 171.333 311.002 174.548 326.479C180.146 353.431 187.742 390 195 390C202.258 390 209.854 353.431 215.452 326.479C218.667 311.002 221.223 298.697 222.678 298.309C224.126 297.915 232.482 307.283 242.997 319.069C261.323 339.611 286.205 367.503 292.491 363.872C298.774 360.244 287.076 324.8 278.449 298.66C273.49 283.634 269.546 271.682 270.614 270.614C271.68 269.553 283.6 273.487 298.596 278.436C324.742 287.064 360.241 298.779 363.872 292.491C367.514 286.204 339.62 261.324 319.074 242.998C307.289 232.487 297.922 224.132 298.309 222.678C298.697 221.223 311.002 218.667 326.479 215.452C353.431 209.854 390 202.258 390 195C390 187.742 353.431 180.146 326.479 174.548C311.002 171.333 298.697 168.777 298.309 167.322C297.915 165.874 307.283 157.518 319.069 147.003C339.611 128.677 367.503 103.795 363.872 97.5087C360.244 91.2263 324.8 102.924 298.66 111.551C283.634 116.51 271.682 120.454 270.614 119.386C269.553 118.32 273.487 106.4 278.436 91.4044C287.064 65.2578 298.779 29.7586 292.491 26.1277C286.204 22.4859 261.324 50.3799 242.998 70.926C232.487 82.7108 224.132 92.0782 222.678 91.6909C221.223 91.3033 218.667 78.9977 215.452 63.5206ZM258.897 199.325C259.624 198.005 260.004 196.515 260 195C260.004 193.485 259.624 191.995 258.897 190.675C258.171 189.355 257.123 188.249 255.855 187.466L177.265 138.313C175.94 137.484 174.423 137.031 172.87 137.002C171.316 136.972 169.783 137.367 168.429 138.146C167.088 138.913 165.971 140.031 165.192 141.385C164.414 142.74 164.002 144.282 164 145.853V244.147C164.002 245.718 164.414 247.26 165.192 248.615C165.971 249.969 167.088 251.087 168.429 251.854C169.783 252.633 171.316 253.028 172.87 252.998C174.423 252.969 175.94 252.516 177.265 251.687L255.855 202.534C257.123 201.751 258.171 200.645 258.897 199.325Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            {:else}
              <div>
                <div
                  class="text-black dark:text-light-100 flex items-center w-48 aspect-square absolute top-0 left-1/2 -translate-x-1/2"
                >
                  <p class="leading-none">
                    No thumbnail at the moment. Just click, please.
                  </p>
                </div>
                <div
                  class="text-black dark:text-light-100 opacity-50 group-hover:opacity-100 sand-transition flex items-center w-32 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 390 390"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M215.452 63.5206C209.854 36.569 202.258 0 195 0C187.742 0 180.146 36.569 174.548 63.5206C171.333 78.9978 168.777 91.3033 167.322 91.6909C165.874 92.0847 157.518 82.7174 147.003 70.931C128.677 50.3885 103.795 22.4974 97.5087 26.1277C91.2263 29.7556 102.924 65.1996 111.551 91.3401C116.51 106.366 120.454 118.318 119.386 119.386C118.32 120.447 106.4 116.513 91.4044 111.564C65.2577 102.936 29.7586 91.2211 26.1277 97.5087C22.4859 103.796 50.3799 128.676 70.926 147.002C82.7108 157.513 92.0782 165.868 91.6909 167.322C91.3033 168.777 78.9977 171.333 63.5206 174.548C36.569 180.146 0 187.742 0 195C0 202.258 36.569 209.854 63.5206 215.452C78.9978 218.667 91.3033 221.223 91.6909 222.678C92.0847 224.126 82.7174 232.482 70.931 242.997C50.3886 261.323 22.4974 286.205 26.1277 292.491C29.7556 298.774 65.1996 287.076 91.3401 278.449C106.366 273.49 118.318 269.546 119.386 270.614C120.447 271.68 116.513 283.6 111.564 298.596C102.936 324.742 91.2211 360.241 97.5087 363.872C103.796 367.514 128.676 339.62 147.002 319.074C157.513 307.289 165.868 297.922 167.322 298.309C168.777 298.697 171.333 311.002 174.548 326.479C180.146 353.431 187.742 390 195 390C202.258 390 209.854 353.431 215.452 326.479C218.667 311.002 221.223 298.697 222.678 298.309C224.126 297.915 232.482 307.283 242.997 319.069C261.323 339.611 286.205 367.503 292.491 363.872C298.774 360.244 287.076 324.8 278.449 298.66C273.49 283.634 269.546 271.682 270.614 270.614C271.68 269.553 283.6 273.487 298.596 278.436C324.742 287.064 360.241 298.779 363.872 292.491C367.514 286.204 339.62 261.324 319.074 242.998C307.289 232.487 297.922 224.132 298.309 222.678C298.697 221.223 311.002 218.667 326.479 215.452C353.431 209.854 390 202.258 390 195C390 187.742 353.431 180.146 326.479 174.548C311.002 171.333 298.697 168.777 298.309 167.322C297.915 165.874 307.283 157.518 319.069 147.003C339.611 128.677 367.503 103.795 363.872 97.5087C360.244 91.2263 324.8 102.924 298.66 111.551C283.634 116.51 271.682 120.454 270.614 119.386C269.553 118.32 273.487 106.4 278.436 91.4044C287.064 65.2578 298.779 29.7586 292.491 26.1277C286.204 22.4859 261.324 50.3799 242.998 70.926C232.487 82.7108 224.132 92.0782 222.678 91.6909C221.223 91.3033 218.667 78.9977 215.452 63.5206ZM258.897 199.325C259.624 198.005 260.004 196.515 260 195C260.004 193.485 259.624 191.995 258.897 190.675C258.171 189.355 257.123 188.249 255.855 187.466L177.265 138.313C175.94 137.484 174.423 137.031 172.87 137.002C171.316 136.972 169.783 137.367 168.429 138.146C167.088 138.913 165.971 140.031 165.192 141.385C164.414 142.74 164.002 144.282 164 145.853V244.147C164.002 245.718 164.414 247.26 165.192 248.615C165.971 249.969 167.088 251.087 168.429 251.854C169.783 252.633 171.316 253.028 172.87 252.998C174.423 252.969 175.94 252.516 177.265 251.687L255.855 202.534C257.123 201.751 258.171 200.645 258.897 199.325Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            {/if}
          </div>
        {:else}
          <div class="group w-full h-full relative">
            {#if data.thumbnail}
              <img
                src={data.thumbnail}
                alt={data.label}
                class="w-full object-contain rounded-2xl"
              />
            {:else}
              <div>
                <div
                  class="text-black dark:text-light-100 flex items-center w-48 aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <p class="leading-none">
                    No thumbnail at the moment. Just click, please.
                  </p>
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </button>
    </div>
  {/if}
</div>
