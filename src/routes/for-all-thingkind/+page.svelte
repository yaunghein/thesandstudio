<script>
  import AppShell from "$lib/components/AppShell.svelte";
  import HeadingGroup from "./(components)/HeadingGroup.svelte";
  import Products from "./(components)/Products.svelte";
  import Logo from "$lib/svgs/Logo.svelte";
</script>

<AppShell>
  <div class="flex flex-col h-full">
    <div class="w-40 absolute top-7 right-[54rem]">
      <Logo />
    </div>
    <HeadingGroup />
    <Products />
  </div>
</AppShell>
