<script>
  import Icon from "./Icon.svelte";
  import GuideOne from "./GuideOne.svelte";
  import GuideTwo from "./GuideTwo.svelte";
</script>

<div
  class="bg-sand-yellow text-light-10 w-full h-full px-10 flex flex-col justify-center"
>
  <div class="border-b border-light-10 flex items-end justify-between">
    <div class="text-7xl font-sand-bold leading-tight">Usage Guide</div>
    <div class="text-sm">©{new Date().getFullYear()} The Sand Studio</div>
  </div>

  <div class="py-3 w-full">
    <GuideOne />
  </div>

  <div class="py-3 w-full border-y border-light-10">
    <GuideTwo />
  </div>

  <div class="flex items-start text-xs pt-3">
    <p class="shrink-0 max-w-[10rem] mr-24">
      Black and white and contrasting frames produce better results.
    </p>
    <div class="grow">
      <p class="max-w-[29rem]">
        Barrier-grid animation , commonly known as scanimation, involves the use
        of a lined overlay on a specially designed image. When the overlay moves
        across the image, it creates an optical illusion of motion due to the
        interaction between the lines and the underlying graphics.
      </p>
    </div>
    <div class="w-14 aspect-square shrink-0">
      <Icon />
    </div>
  </div>
</div>
