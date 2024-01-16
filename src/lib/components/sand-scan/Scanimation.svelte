<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { Draggable } from "gsap/dist/Draggable";
  import { twMerge as twm } from "tailwind-merge";
  import IconSandScan from "$lib/svgs/IconSandScan.svelte";
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
  let images: any[] = [];
  $: console.log({ images });
  let name = "";

  const DISPLAY_WIDTH = 400;

  const setDisplayDimention = (
    canvas: HTMLCanvasElement,
    naturalWidth: number,
    naturalHeight: number,
    isBars: boolean,
  ): void => {
    if (naturalWidth > 200) {
      if (isBars) {
        canvas.width = 2 * DISPLAY_WIDTH;
        canvas.height = 2 * DISPLAY_WIDTH * (naturalHeight / naturalWidth);
      } else {
        canvas.width = DISPLAY_WIDTH;
        canvas.height = DISPLAY_WIDTH * (naturalHeight / naturalWidth);
      }
    } else {
      canvas.width = isBars ? naturalWidth * 2 : naturalWidth;
      canvas.height = isBars ? naturalHeight * 2 : naturalHeight;
    }
  };

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

    // const displayContainer = document.getElementById("display-base");
    const displayBase = document.getElementById(
      "display-base",
    ) as HTMLCanvasElement;
    const displayBars = document.getElementById(
      "display-bars",
    ) as HTMLCanvasElement;

    // setDisplayDimention(displayContainer, imgW, imgH, false);
    setDisplayDimention(displayBase, imgW, imgH, false);
    setDisplayDimention(displayBars, imgW, imgH, true);

    const displayBaseCtx = displayBase.getContext("2d");
    const displayBarsCtx = displayBars.getContext("2d");

    displayBaseCtx!.drawImage(
      base,
      0,
      0,
      base.width,
      base.height,
      0,
      0,
      displayBase.width,
      displayBase.height,
    );
    displayBarsCtx!.drawImage(
      bars,
      0,
      0,
      bars.width,
      bars.height,
      0,
      0,
      displayBars.width,
      displayBars.height,
    );
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
    if (speedPreset === "medium") speed = 140;
    if (speedPreset === "fast") speed = 200;
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
    <div
      class="w-[30%] flex shrink-0 m-4 flex-col rounded-xl border-3 bg-light-80 dark:bg-light-40 border-light-80 dark:border-light-40 overflow-hidden"
    >
      <div
        class="relative flex flex-col p-4 h-full bg-light-100 dark:bg-light-10 rounded-2xl -m-[0.1875rem] border-3 border-t-0 border-light-80 dark:border-light-40 overflow-hidden"
      >
        <div class="w-full grid place-items-center overflow-hidden mb-5">
          <div class="w-24 scale-[2.2]">
            <IconSandScan />
          </div>
        </div>

        <div class="w-full py-3 border-t border-light-80 dark:border-light-40">
          <h2 class="font-sand-medium text-lg text-light-50 -mb-1">
            Bar Width
          </h2>
          <div class="flex gap-5 items-center justify-between">
            <input
              type="range"
              bind:value={px}
              min="1"
              max="50"
              class="non-draggable w-full range appearance-none bg-transparent cursor-pointer"
            />
            <input
              type="number"
              bind:value={px}
              class="appearance-none bg-transparent outline-none p-2 h-[2rem] w-[4.5rem] border-3 border-light-80 dark:border-light-40 text-lg rounded-lg"
            />
          </div>
        </div>

        <div class="w-full py-3 border-t border-light-80 dark:border-light-40">
          <h2 class="font-sand-medium text-lg text-light-50 -mb-1">Speed</h2>
          <div class="flex gap-5 items-center justify-between">
            <input
              type="range"
              bind:value={speed}
              min="1"
              max="250"
              class="non-draggable w-full range appearance-none bg-transparent cursor-pointer"
              on:change={() => (speedPreset = "reset")}
            />
            <input
              type="number"
              bind:value={speed}
              class="appearance-none bg-transparent outline-none p-2 h-[2rem] w-[4.5rem] border-3 border-light-80 dark:border-light-40 text-lg rounded-lg"
              on:change={() => (speedPreset = "reset")}
            />
          </div>
          <div class="mt-1 flex items-center gap-4">
            <label
              class={twm(
                "text-lg cursor-pointer",
                speedPreset === "slow"
                  ? "text-light-10 dark:text-light-100"
                  : "text-light-50",
              )}
            >
              <input
                type="radio"
                bind:group={speedPreset}
                name="speed"
                value="slow"
                class="hidden"
              />
              Slow
            </label>
            <label
              class={twm(
                "text-lg cursor-pointer",
                speedPreset === "medium"
                  ? "text-light-10 dark:text-light-100"
                  : "text-light-50",
              )}
            >
              <input
                type="radio"
                bind:group={speedPreset}
                name="speed"
                value="medium"
                class="hidden"
              />
              Medium
            </label>
            <label
              class={twm(
                "text-lg cursor-pointer",
                speedPreset === "fast"
                  ? "text-light-10 dark:text-light-100"
                  : "text-light-50",
              )}
            >
              <input
                type="radio"
                bind:group={speedPreset}
                name="speed"
                value="fast"
                class="hidden"
              />
              Fast
            </label>
          </div>

          <div
            class="mt-2 text-lg h-12 rounded-xl overflow-hidden border-3 border-light-80 dark:border-light-40 grid grid-cols-2"
          >
            <button
              class={twm(
                "w-full h-full flex items-center px-4",
                autoPlay
                  ? "bg-light-100 dark:bg-light-10 text-light-10 dark:text-light-100"
                  : "bg-light-10 dark:bg-light-100 text-light-100 dark:text-light-10",
              )}
              on:click={() => (autoPlay = false)}
            >
              Cursor Drag
            </button>
            <button
              class={twm(
                "w-full h-full flex items-center px-4",
                autoPlay
                  ? "bg-light-10 dark:bg-light-100 text-light-100 dark:text-light-10"
                  : "bg-light-100 dark:bg-light-10 text-light-10 dark:text-light-100",
              )}
              on:click={() => (autoPlay = true)}
            >
              Auto Play
            </button>
          </div>
        </div>

        <div
          class="mt-auto pt-3 w-full flex flex-col gap-2 border-t border-light-80 dark:border-light-40"
        >
          <label for="name">
            <input
              type="text"
              id="name"
              bind:value={name}
              placeholder="Project Name"
              class="appearance-none text-center px-2 w-full h-12 text-lg text-light-10 dark:text-light-100 bg-transparent rounded-lg border-3 border-light-80 dark:border-light-40 outline-none placeholder:text-light-50"
              autocomplete="off"
            />
          </label>
        </div>
      </div>
      <button
        use:handleDownload
        class="appearance-none mt-auto bg-light-80 dark:bg-light-40 shrink-0 w-full h-20 text-lg font-sand-bold"
      >
        Export
      </button>
    </div>

    <!-- Animation -->
    <div
      class="relative grow border-l-3 border-light-80 dark:border-light-40 rounded-none flex flex-col items-center justify-center gap-5"
    >
      <div class="hidden">
        <canvas data-name="base" id="base" />
        <canvas data-name="bars" id="bars" />
      </div>

      {#if images.length > 0}
        <button
          on:click={reset}
          class="shrink-0 w-20 h-9 rounded-[0.65rem] bg-sand-red absolute bottom-4 right-4 grid place-items-center text-lg font-sand-bold text-light-10"
        >
          Reset
        </button>
      {/if}

      <div
        id="display-container"
        class="mt-10 hidden items-center justify-center"
      >
        <div class="display-inner-container relative overflow-hidden">
          <canvas data-name="base" id="display-base" />
          <canvas
            data-name="bars"
            id="display-bars"
            class="non-draggable w-full absolute top-0 right-0"
          />
        </div>
      </div>

      <label
        id="select-files-label"
        for="select-files"
        class="bg-transparent rounded-xl w-[18rem] aspect-[1.85/1] text-light-50 text-lg cursor-pointer grid place-items-center border-3 border-light-40 dark:border-light-40 border-dashed"
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
