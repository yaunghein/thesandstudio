<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { Draggable } from "gsap/dist/Draggable";
  import { twMerge as twm } from "tailwind-merge";
  import convertFilesToBase64 from "$lib/utils/scanimation/convertFilesToBase64";
  import transformToImageObjects from "$lib/utils/scanimation/transformToImageObjects";
  import drawBars from "$lib/utils/scanimation/drawBars";
  import downloadImages from "$lib/utils/scanimation/downloadImages";

  // need to fix some issue while drawing bars and auto moving
  onMount(() => {
    gsap.registerPlugin(Draggable);
  });

  let px = 1;
  $: if (px < 1) px = 1;
  let pxPreset = "small";
  $: if (pxPreset) {
    if (pxPreset === "small") px = 1;
    if (pxPreset === "normal") px = 5;
    if (pxPreset === "large") px = 10;
  }
  let images: any[] = [];
  let name = "";
  let isNameActive = false;

  const DISPLAY_WIDTH = 400;

  const generateBaseAndBars = (px: number): void => {
    const base = document.getElementById("base") as HTMLCanvasElement;
    const bars = document.getElementById("bars") as HTMLCanvasElement;

    const imgW = images[0].naturalWidth;
    const imgH = images[0].naturalHeight;

    base!.width = imgW;
    base!.height = imgH;

    bars.width = imgW * 2;
    bars.height = imgH;

    const ctx = base.getContext("2d");

    const sliceSequence = [...Array(1000).keys()].map(
      (i) => i * px * images.length,
    );
    for (const [index, image] of images.entries()) {
      for (const i of sliceSequence) {
        ctx!.drawImage(
          image,
          i + px * index,
          0,
          px,
          imgH,
          i + px * index,
          0,
          px,
          imgH,
        );
      }
    }

    drawBars(bars, images, px);

    const displayInnerContainer = document.querySelector(
      ".display-inner-container",
    ) as HTMLDivElement;
    if (base.width > DISPLAY_WIDTH) {
      displayInnerContainer.style.width = `${DISPLAY_WIDTH}px`;
      displayInnerContainer.style.height = `${DISPLAY_WIDTH * (imgH / imgW)}px`;
    } else {
      displayInnerContainer.style.width = `${base.width}px`;
      displayInnerContainer.style.height = `${base.height}px`;
    }

    const displayBase = document.querySelector(
      "#display-base",
    ) as HTMLImageElement;
    displayBase?.setAttribute("src", base.toDataURL("image/png"));

    const displayBars = document.querySelector(
      "#display-bars",
    ) as HTMLImageElement;
    displayBars.setAttribute("src", bars.toDataURL("image/png"));
  };

  let autoPlay = false;
  let speed = 20;
  $: if (speed < 1) speed = 1;
  let speedPreset = "medium";
  let drag: Draggable[];
  let movingId: number;
  let movingPixels = 0;
  $: if (movingPixels < 1) movingPixels = 1;

  $: if (px) {
    autoPlay = false;
  }

  $: if (speedPreset) {
    if (speedPreset === "slow") speed = 20;
    if (speedPreset === "medium") speed = 120;
    if (speedPreset === "fast") speed = 180;
    if (speedPreset === "fast-as-fk") speed = 250;
  }

  const animateMove = () => {
    const bars = document.getElementById("display-bars");
    const move = () => {
      if (movingPixels < 100) {
        movingPixels += 0.001 * speed;
      } else {
        movingPixels = 0;
      }
      bars!.style.transform = `translateX(${movingPixels}px)`;
      movingId = requestAnimationFrame(move);
    };
    move();
  };

  const cancleMoveAnimation = () => {
    cancelAnimationFrame(movingId);
  };

  const reset = () => {
    images = [] as any[];
    (
      document!.querySelector("#display-container") as HTMLElement
    ).style.display = "none";

    (
      document!.querySelector("#select-files-label") as HTMLElement
    ).style.display = "grid";
  };

  $: if (images.length > 0) {
    (
      document!.querySelector("#display-container") as HTMLElement
    ).style.display = "flex";

    (
      document!.querySelector("#select-files-label") as HTMLElement
    ).style.display = "none";

    generateBaseAndBars(px);

    if (autoPlay) {
      drag[0]?.disable();
      animateMove();
    } else {
      cancleMoveAnimation();
      if (drag) {
        drag[0].enable();
      } else {
        drag = Draggable.create("#display-bars", {
          type: "x,y",
          edgeResistance: 0,
          bounds: ".display-inner-container",
        });
      }
    }
  }

  const handleFilesChange: any = async (node: HTMLInputElement) => {
    node.addEventListener("change", async () => {
      const { files } = node;
      if (files!.length === 0) return;

      const base64Images = await convertFilesToBase64(files as any);
      const imagesObjects = await transformToImageObjects(base64Images as any);
      images = imagesObjects as any;
    });
  };

  const handleDownload: any = (node: HTMLButtonElement) => {
    node.addEventListener("click", () => {
      const base = document.getElementById("base") as HTMLCanvasElement;
      const bars = document.getElementById("bars") as HTMLCanvasElement;
      downloadImages(name || new Date().toJSON().slice(0, 10), [base, bars]);
    });
  };
</script>

<div class="overflow-hidden h-full w-full">
  <div class="h-full flex">
    <!-- Controls -->
    <div class="w-[18rem] flex shrink-0 flex-col">
      <div class="relative flex flex-col h-full px-10 py-9 overflow-hidden">
        <div
          class="w-full grid place-items-center overflow-hidden rounded-2xl mb-5 dark:invert"
        >
          <img
            src="/images/sand-scan.gif"
            class="w-full h-40 object-cover"
            alt="SAND Scan Icon"
          />
        </div>

        <!-- Bar Width   -->
        <div class="w-full py-3">
          <h2 class="text-xl text-black dark:text-white -mb-1">Bar Width</h2>
          <div class="flex items-center justify-between">
            <input
              type="range"
              bind:value={px}
              min="1"
              max="50"
              class="non-draggable w-full range appearance-none bg-transparent"
            />
            <input
              type="number"
              bind:value={px}
              class="appearance-none bg-transparent outline-none p-2 h-[2rem] w-[3.2rem] border-2 border-black dark:border-light-100 text-lg rounded-lg text-right"
            />
          </div>
          <div class="mt-1 flex items-center gap-7">
            <label
              class={twm(
                "text-xl sand-transition",
                pxPreset === "small"
                  ? "text-black dark:text-light-100"
                  : "text-light-70 dark:text-light-25",
              )}
            >
              <input
                type="radio"
                bind:group={pxPreset}
                name="px"
                value="small"
                class="hidden"
              />
              S
            </label>
            <label
              class={twm(
                "text-xl sand-transition",
                pxPreset === "normal"
                  ? "text-black dark:text-light-100"
                  : "text-light-70 dark:text-light-25",
              )}
            >
              <input
                type="radio"
                bind:group={pxPreset}
                name="px"
                value="normal"
                class="hidden"
              />
              N
            </label>
            <label
              class={twm(
                "text-xl sand-transition",
                pxPreset === "large"
                  ? "text-black dark:text-light-100"
                  : "text-light-70 dark:text-light-25",
              )}
            >
              <input
                type="radio"
                bind:group={pxPreset}
                name="px"
                value="large"
                class="hidden"
              />
              L
            </label>
          </div>
        </div>

        <!-- Autoplay -->
        <div
          class="relative mt-2 text-lg rounded-[1.35rem] overflow-hidden border-2 border-white dark:border-light-12 grid"
        >
          <div
            class={twm(
              "absolute inset-0 w-full h-1/2 rounded-full bg-black dark:bg-light-100 sand-transition",
              autoPlay ? "translate-y-[100%]" : "translate-y-[0%]",
            )}
          />
          <button
            class={twm(
              "relative w-full h-full flex items-center justify-center py-[0.4rem]",
              autoPlay
                ? "text-light-70 dark:text-light-20"
                : "text-white dark:text-black",
            )}
            on:click={() => (autoPlay = false)}
          >
            Cursor Drag
          </button>
          <button
            class={twm(
              "relative w-full h-full flex items-center justify-center py-[0.4rem]",
              autoPlay
                ? "text-white dark:text-black"
                : "text-light-70 dark:text-light-20",
            )}
            on:click={() => (autoPlay = true)}
          >
            Auto Play
          </button>
        </div>

        <!-- Speed -->
        <div class="w-full py-3">
          <h2 class="text-xl text-black dark:text-white -mb-1">Speed</h2>
          <div class="flex items-center justify-between">
            <input
              type="range"
              bind:value={speed}
              min="1"
              max="250"
              class="non-draggable w-full range appearance-none bg-transparent"
              on:change={() => (speedPreset = "reset")}
            />
            <input
              type="number"
              bind:value={speed}
              class="appearance-none bg-transparent outline-none p-2 h-[2rem] w-[3.2rem] border-2 border-black dark:border-light-100 text-lg rounded-lg text-right"
              on:change={() => (speedPreset = "reset")}
            />
          </div>
          <div class="mt-1 flex items-center gap-7">
            <label
              class={twm(
                "text-xl sand-transition",
                speedPreset === "slow"
                  ? "text-black dark:text-light-100"
                  : "text-light-70 dark:text-light-25",
              )}
            >
              <input
                type="radio"
                bind:group={speedPreset}
                name="speed"
                value="slow"
                class="hidden"
              />
              S
            </label>
            <label
              class={twm(
                "text-xl sand-transition",
                speedPreset === "medium"
                  ? "text-black dark:text-light-100"
                  : "text-light-70 dark:text-light-25",
              )}
            >
              <input
                type="radio"
                bind:group={speedPreset}
                name="speed"
                value="medium"
                class="hidden"
              />
              N
            </label>
            <label
              class={twm(
                "text-xl sand-transition",
                speedPreset === "fast"
                  ? "text-black dark:text-light-100"
                  : "text-light-70 dark:text-light-25",
              )}
            >
              <input
                type="radio"
                bind:group={speedPreset}
                name="speed"
                value="fast"
                class="hidden"
              />
              F
            </label>
            <label
              class={twm(
                "text-xl sand-transition",
                speedPreset === "fast-as-fk"
                  ? "text-black dark:text-light-100"
                  : "text-light-70 dark:text-light-25",
              )}
            >
              <input
                type="radio"
                bind:group={speedPreset}
                name="speed"
                value="fast-as-fk"
                class="hidden"
              />
              FAF
            </label>
          </div>
        </div>

        <!-- Project Name -->
        <div class="mt-auto pt-3 w-full flex flex-col gap-2">
          <label for="name" class="relative">
            <input
              type="text"
              id="name"
              bind:value={name}
              class="appearance-none w-full h-12 text-lg text-black dark:text-light-100 bg-transparent rounded-lg outline-none placeholder:text-black dark:placeholder:text-light-100"
              autocomplete="off"
              on:focus={() => (isNameActive = true)}
              on:blur={() => (isNameActive = false)}
            />
            {#if !isNameActive && !name}
              <div
                class="pointer-events-none absolute left-0 top-0 w-full h-full flex items-center gap-[1px]"
              >
                <span class="text-lg">Project Name</span>
                <div
                  class="w-[1px] h-4 bg-black dark:bg-light-100 animate-blink"
                />
              </div>
            {/if}
          </label>
        </div>
      </div>
      <button
        use:handleDownload
        class="relative appearance-none mt-auto bg-light-100 dark:bg-black shrink-0 w-full h-20 text-xl font-sand-medium"
      >
        Export
        <div
          class="absolute w-10 aspect-square bg-light-100 dark:bg-black -right-4 bottom-0"
        />
      </button>
    </div>

    <!-- Animation -->
    <div
      class="relative grow bg-light-90 dark:bg-light-7 border-2 -m-[0.1875rem] ml-0 border-white dark:border-light-12 rounded-3xl flex flex-col items-center justify-center gap-5"
    >
      <div class="hidden">
        <canvas data-name="base" id="base" />
        <canvas data-name="bars" id="bars" />
      </div>

      {#if images.length >= 0}
        <button
          on:click={reset}
          class="shrink-0 w-40 h-12 rounded-2xl bg-sand-red absolute bottom-4 right-4 grid place-items-center text-xl text-white border-2 border-white dark:border-light-12"
        >
          Reset
        </button>
      {/if}

      <div id="display-container" class="hidden items-center justify-center">
        <div class="display-inner-container relative overflow-hidden">
          <img
            id="display-base"
            src=""
            alt=""
            class="non-draggable absolute inset-0 w-full h-full"
          />
          <img
            id="display-bars"
            src=""
            alt=""
            class="non-draggable absolute top-0 right-0 min-w-[200%] h-full"
          />
        </div>
      </div>

      <label
        id="select-files-label"
        for="select-files"
        class="bg-transparent hover:bg-light-80 dark:hover:bg-light-12 sand-transition rounded-xl w-[18rem] aspect-[1.85/1] text-black dark:text-white text-lg cursor-none grid place-items-center border-2 border-black dark:border-white border-dashed"
      >
        <input
          use:handleFilesChange
          type="file"
          multiple
          id="select-files"
          class="hidden"
        />
        <span>Select Frames</span>
      </label>
    </div>
  </div>
</div>
