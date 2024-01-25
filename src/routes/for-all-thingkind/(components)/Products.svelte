<script lang="ts">
  import { CursorType } from "$lib/stores/cursor";

  const products = [
    {
      label: "Tote Bag & Trinket Bowl 2022",
      image: "/images/products/bag-and-bowl.jpg",
      link: "/",
    },
    {
      label: "SAND Rug 2022",
      image: "",
      link: "/",
    },
  ];
</script>

<section class="grow">
  <div class="grid grid-cols-1 sm:grid-cols-3">
    {#each products as product}
      <a href={product.link}>
        <div class="overflow-hidden">
          <div class="relative px-3 py-5 border-3 border-white -mx-[0.1rem]">
            <div class="blur-layer" />
            <span class="block relative text-3xl">{product.label}</span>
          </div>
        </div>
        <div
          class="relative w-full aspect-[1.4/1] overflow-hidden bg-[#4A3326]"
        >
          <img
            src={product.image}
            alt=""
            class="w-full h-full object-cover scale-[1.01]"
          />
        </div>
      </a>
    {/each}
    <a
      href="mailto:hi@thesandstudio.com"
      on:mouseenter={() => CursorType.set("contact")}
      on:mouseleave={() => CursorType.set("normal")}
    >
      <div class="overflow-hidden">
        <div class="relative px-3 py-5 border-3 border-white -mx-[0.1rem]">
          <div class="blur-layer" />
          <span class="block relative text-3xl">2024</span>
        </div>
      </div>

      <div
        class="relative w-full aspect-[1.4/1] overflow-hidden text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 grid place-items-center"
      >
        <span class="text-4xl font-sand-medium">Do you have an idea?</span>
      </div>
    </a>
  </div>
</section>
