<script lang="ts">
  import { onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import type { Work } from "$lib/types.ts";

  export let work: Work;

  let index = 0;

  const getRandomNumber = () => {
    const numbers = [5, 6, 7, 8];
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  };

  const intervalId = setInterval(() => {
    if (index === work.images.length - 1) return (index = 0);
    index++;
  }, 1000 * getRandomNumber());

  onDestroy(() => clearInterval(intervalId));
</script>

<div
  class="group w-full aspect-[1.63/1] relative rounded-xl overflow-hidden {work.textColor ===
  'light'
    ? 'bg-light-10'
    : 'bg-light-100'}"
>
  {#key index}
    <img
      transition:fade={{ duration: 200 }}
      src={work.images[index]}
      alt={work.name}
      class="absolute inset-0 w-full h-full bg-green-500 object-cover rounded-lg scale-[1.05]"
    />
  {/key}
  <img
    src={work.hoverImage}
    alt={work.name}
    class="absolute z-10 inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition rounded-lg scale-[1.05]"
  />
  <div
    class="relative z-20 p-11 grid gap-6 opacity-0 group-hover:opacity-100 transition rounded-lg"
  >
    {#each work.details as i}
      <div>
        {#each i as j}
          <div
            class="text-lg leading-tight {work.textColor === 'light'
              ? 'text-light-100'
              : 'text-light-10'}"
          >
            {j}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
