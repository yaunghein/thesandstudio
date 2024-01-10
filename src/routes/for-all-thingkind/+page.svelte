<script>
  import AppShell from "$lib/components/AppShell.svelte";
  import HeadingGroup from "./(components)/HeadingGroup.svelte";
  import Products from "./(components)/Products.svelte";
</script>

<AppShell>
  <div class="flex flex-col h-full">
    <HeadingGroup />
    <Products />
  </div>
</AppShell>
