<script lang="ts">
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
  <div class="px-12 p-4 pb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
    {#each products as product}
      <div
        class="relative w-full aspect-[1/0.765] rounded-3xl overflow-hidden bg-[#D1C2B0]"
      >
        <img src={product.image} alt="" class="w-full h-full object-cover" />
        <a
          href={product.link}
          class="absolute top-3 left-3 right-3 h-10 grid place-items-center bg-light-100 dark:bg-light-10 text-light-10 dark:text-light-100 rounded-xl text-xl font-sand-medium"
        >
          {product.label}
        </a>
      </div>
    {/each}
    <div
      class="relative w-full aspect-[1/0.765] rounded-3xl overflow-hidden text-light-100 dark:text-light-10 bg-light-10 dark:bg-light-100 grid place-items-center"
    >
      <span class="text-4xl font-sand-medium">Do you have an idea?</span>
    </div>
  </div>
</section>
