<script lang="ts">
  import AppShell from "$lib/components/AppShell.svelte";
  import Heading from "./(components)/Heading.svelte";
  import Products from "./(components)/Products.svelte";
  import LogoMain from "$lib/svgs/LogoMain.svelte";
  import MetaData from "$lib/components/MetaData.svelte";
</script>

<MetaData
  pageTitle="For All Thingkind -  The Sand Studio"
  title="For All Thingkind -  The Sand Studio"
  description="We embrace all forms, materials, and ideas, shaping them into products that reflect a confluence of diverse inspirations and tangible craftsmanship."
/>
<AppShell>
  <div class="page-wrapper flex flex-col h-full">
    <div class="text-[1.375rem] pl-12 pt-12 select-none">
      <p class="fade-up max-w-[32rem] leading-[1.35]">
        We embrace all forms, materials, and ideas, shaping them into products
        that reflect a confluence of diverse inspirations and tangible
        craftsmanship.
      </p>
    </div>
    <div class="fade-up w-64 aspect-square absolute top-12 right-[49rem]">
      <LogoMain />
    </div>
    <div class="fade-up px-2">
      <Heading />
    </div>
    <div class="-mt-28">
      <Products />
    </div>
  </div>
</AppShell>
