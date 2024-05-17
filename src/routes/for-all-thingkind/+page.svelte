<script>
  import AppShell from "$lib/components/AppShell.svelte";
  import Heading from "./(components)/Heading.svelte";
  import Products from "./(components)/Products.svelte";
  import LogoMain from "$lib/svgs/LogoMain.svelte";
</script>

<AppShell>
  <div class="flex flex-col h-full">
    <div class="text-[1.375rem] pl-12 pt-12 select-none">
      <p class="max-w-[32rem] leading-[1.35]">
        We embrace all forms, materials, and ideas, shaping them into products
        that reflect a confluence of diverse inspirations and tangible
        craftsmanship.
      </p>
    </div>
    <div class="w-64 aspect-square absolute top-12 right-[49rem]">
      <LogoMain />
    </div>
    <div class="px-2">
      <Heading />
    </div>
    <div class="-mt-28">
      <Products />
    </div>
  </div>
</AppShell>
