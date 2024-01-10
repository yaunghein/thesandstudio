<script>
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
</script>

<div
  class="text-light-10 dark:text-light-100 bg-light-80 dark:bg-light-20 relative h-[100dvh] p-3 pt-0 flex flex-col"
>
  <Navbar />
  <div
    class="text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 relative rounded-3xl grow overflow-auto"
  >
    <slot />
  </div>

  <Footer />
</div>
