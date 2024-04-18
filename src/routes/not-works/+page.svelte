<script lang="ts">
  import LogoMain from "$lib/svgs/LogoMain.svelte";
  import AppShell from "$lib/components/AppShell.svelte";
  import { changeCursorType } from "$lib/stores/cursor";
  import TypographicChallenge from "./(components)/TypographicChallenge.svelte";
</script>

<div>
  <AppShell>
    <div class="flex flex-col h-full">
      <div class="text-[1.375rem] pl-12 pt-12 select-none">
        <p class="max-w-[65rem] leading-[1.35]">
          Valuing and cultivating the creative aspect of the human spirit,
          recognizing it as a powerful tool for solving problems, expressing
          oneself, and understanding the world. Encouraging innovation and
          original thought, breaking free from traditional constraints, and
          exploring new ideas without being hindered by fear or skepticism.
        </p>
      </div>
      <div class="flex items-center text-[26rem] leading-none my-5">
        <div>N</div>
        <div class="w-[25rem] aspect-square mx-5 flex items-center">
          <LogoMain />
        </div>
        <div class="mr-24">T</div>
        <div>WORKS</div>
      </div>

      <section class="grow -mt-20">
        <div class="grid grid-cols-1 sm:grid-cols-3">
          <TypographicChallenge />

          <a
            href="mailto:hi@thesandstudio.com"
            use:changeCursorType={{ inType: "contact", outType: "normal" }}
          >
            <div class="overflow-hidden">
              <div
                class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
              >
                <div class="transparent-layer" />
                <span class="block relative text-3xl">2024</span>
              </div>
            </div>

            <div
              class="relative w-full aspect-[1/1.3] overflow-hidden text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 grid place-items-center"
            >
              <span class="text-4xl font-sand-medium">Do you have an idea?</span
              >
            </div>
          </a>

          <div>
            <div class="overflow-hidden">
              <div
                class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
              >
                <div class="transparent-layer" />
                <span class="block relative text-3xl">2024</span>
              </div>
            </div>

            <div
              class="relative w-full aspect-[1/1.3] overflow-hidden text-light-10 dark:text-light-100 bg-light-90 dark:bg-light-12 grid place-items-center"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </AppShell>
</div>
