<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div
  class="text-light-100 bg-light-10 relative h-[100dvh] p-3 pt-0 flex flex-col"
>
  <Navbar />
  <div
    class="text-light-100 bg-sand-blue relative rounded-3xl grow overflow-auto"
  >
    <div class="w-full h-full grid place-items-center">
      <div class="font-medium flex flex-col items-center gap-6">
        <div class="text-5xl">
          <p class="-ml-56 leading-tight">
            the prodigal child &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
          </p>
          <p class="-ml-36 leading-tight">will return</p>
        </div>
        <p
          class="text-xl mb-10 text-center flex items-center justify-center max-w-[16rem] -ml-16"
        >
          art, design, refined garments and contemporary culture.
        </p>
        <button
          class="text-3xl border-3 border-light-100 py-4 px-24"
          on:click={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  </div>

  <!-- might need to change colors inside footer componant -->
  <Footer />
</div>
