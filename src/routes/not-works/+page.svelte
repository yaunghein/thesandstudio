<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import AppShell from "$lib/components/AppShell.svelte";
  import LogoCalm from "$lib/svgs/LogoCalm.svelte";

  onMount(() => {
    const shell = document.querySelector(".app-shell") as HTMLDivElement;
    shell!.style.overflow = "hidden";
    return () => (shell!.style.overflow = "auto");
  });
</script>

<div>
  <AppShell>
    <div class="p-11">
      <div class="flex items-center gap-1 text-9xl mb-11">
        <div>N</div>
        <div class="dark:invert w-32 -mt-3">
          <LogoCalm />
        </div>
        <div class="-ml-[0.125rem]">T</div>
        <div class="ml-10">WORK</div>
      </div>

      <div class="grid grid-cols-3 gap-5">
        <div>
          <img
            class="aspect-[0.86/1] rounded-3xl object-cover"
            src="images/competitions/2.jpg"
            alt=""
          />
          <p class="text-center mt-2 text-3xl leading-tight">
            Typographic Interpretation of translated texts<br />from early works
            of Rene Descartes, <br />"Rules for the Direction of the Mind"
          </p>
        </div>

        <div
          class="relative w-full aspect-[0.86/1] rounded-3xl overflow-hidden text-light-100 dark:text-light-10 bg-light-10 dark:bg-light-100 flex flex-col gap-20 items-center justify-center"
        >
          <div class="text-4xl w-56 text-center">Do you have an idea?</div>
          <a
            href="mailto:hi@thesandstudio.com"
            class="text-4xl text-center bg-light-100 dark:bg-light-10 text-light-10 dark:text-light-100 rounded-full px-5 py-2"
          >
            hi@thesandstudio.com
          </a>
        </div>
      </div>
    </div>
  </AppShell>
</div>
