<script lang="ts">
  import { openContactTab } from "$lib/stores/finder";
  import { addShell } from "$lib/stores/shell";
  import LogoMain from "$lib/svgs/LogoMain.svelte";
  import AppShell from "$lib/components/AppShell.svelte";
  import { changeCursorType } from "$lib/stores/cursor";
  import TypographicChallenge from "./(components)/TypographicChallenge.svelte";
  import MetaData from "$lib/components/MetaData.svelte";
</script>

<MetaData
  pageTitle="Not Works - The Sand Studio"
  title="Not Works - The Sand Studio"
  description="Valuing and cultivating the creative aspect of the human spirit, recognizing it as a powerful tool for solving problems, expressing oneself, and understanding the world. Encouraging innovation and original thought, breaking free from traditional constraints, and exploring new ideas without being hindered by fear or skepticism."
/>
<div>
  <AppShell>
    <div class="page-wrapper flex flex-col h-full">
      <div class="text-[1.375rem] pl-12 pt-12 select-none">
        <p class="fade-up max-w-[65rem] leading-[1.35]">
          Valuing and cultivating the creative aspect of the human spirit,
          recognizing it as a powerful tool for solving problems, expressing
          oneself, and understanding the world. Encouraging innovation and
          original thought, breaking free from traditional constraints, and
          exploring new ideas without being hindered by fear or skepticism.
        </p>
      </div>
      <div class="flex items-center text-[26rem] leading-none my-5">
        <div class="fade-up">N</div>
        <div class="fade-up w-[25rem] aspect-square mx-5 flex items-center">
          <LogoMain />
        </div>
        <div class="fade-up mr-24">T</div>
        <div class="fade-up">WORKS</div>
      </div>

      <section class="grow -mt-20">
        <div class="fade-up grid grid-cols-1 sm:grid-cols-3">
          <TypographicChallenge />

          <button
            on:click={() => {
              addShell({ id: "finder", zIndex: 65 });
              openContactTab();
            }}
            use:changeCursorType={{ inType: "contact", outType: "normal" }}
            class="fade-up"
          >
            <div class="overflow-hidden">
              <div
                class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
              >
                <div class="transparent-layer" />
                <span class="block relative text-3xl text-left">2024</span>
              </div>
            </div>

            <div
              class="relative w-full aspect-[1/1.3] overflow-hidden text-light-10 dark:text-light-100 bg-light-100 dark:bg-light-10 pt-10 pl-10"
            >
              <!-- <span class="text-4xl font-sand-medium">Do you have an idea?</span> -->
              <img
                src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715955807/general/not-works-collaborate_xbzd1y.svg"
                alt="Make shit with us"
                class="invert dark:invert-0 w-[50%]"
              />
            </div>
          </button>

          <div class="fade-up">
            <div class="overflow-hidden">
              <div
                class="relative px-3 py-5 border-2 border-white dark:border-light-12 -mx-[0.1rem]"
              >
                <div class="transparent-layer" />
                <span class="block relative text-3xl text-lef">-</span>
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
