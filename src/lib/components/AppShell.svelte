<script>
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
</script>

<div
  class="text-light-10 dark:text-light-100 bg-light-90 dark:bg-black relative h-[100dvh] p-3 pt-0 flex flex-col sand-transition"
>
  <Navbar />
  <div
    class="app-shell text-light-10 dark:text-light-100 bg-light-95 dark:bg-light-7 relative rounded-3xl border-2 border-white dark:border-light-12 grow overflow-auto sand-transition"
  >
    <slot />
  </div>

  <Footer />
</div>
