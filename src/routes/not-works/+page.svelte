<script lang="ts">
  import { onMount } from "svelte";
  import Logo from "$lib/svgs/Logo.svelte";
  import AppShell from "$lib/components/AppShell.svelte";
  import { CursorType } from "$lib/stores/cursor";

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
        <div class="w-32">
          <Logo />
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

        <a
          href="mailto:hi@thesandstudio.com"
          on:mouseenter={() => CursorType.set("contact")}
          on:mouseleave={() => CursorType.set("normal")}
          class="relative w-full aspect-[0.86/1] rounded-3xl overflow-hidden text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 flex flex-col gap-20 items-center justify-center"
        >
          <div class="text-4xl w-56 text-center">Do you have an idea?</div>
        </a>
      </div>
    </div>
  </AppShell>
</div>
