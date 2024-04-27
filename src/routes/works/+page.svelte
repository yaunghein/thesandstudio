<script lang="ts">
  import { twMerge as twm } from "tailwind-merge";
  import AppShell from "$lib/components/AppShell.svelte";
  import Work from "$lib/components/Work.svelte";
  import LogoMain from "$lib/svgs/LogoMain.svelte";
  import type { Work as TWork, WorkGroup } from "$lib/types";
  import deepClone from "$lib/utils/deepClone";

  const WORKS_GROUPS: WorkGroup[] = [
    {
      type: "Projects",
      data: [
        {
          name: "Sawbwa Morning Blend.",
          textColor: "dark",
          images: [
            "/images/archives/works/all-we-need/AWN Bag 1.webp",
            "/images/archives/works/all-we-need/AWN Bag 2.webp",
            "/images/archives/works/all-we-need/AWN Tape 1.webp",
            "/images/archives/works/all-we-need/AWN Tape 2.webp",
          ],
          categories: ["Packaging"],
          meta: ["Specialty Coffee", "Myanmar", "2022"],
        },
        {
          name: "ENVISEAM",
          textColor: "light",
          images: [
            "/images/archives/works/another-club/AC Window Stickers.webp",
            "/images/archives/works/another-club/AC Logo.webp",
            "/images/archives/works/another-club/AC Coffee Bags.webp",
            "/images/archives/works/another-club/AC Coasters.webp",
            "/images/archives/works/another-club/AC Mockups.webp",
          ],
          categories: [
            "Visual Identity",
            "Motion Graphics and Animation",
            "Web Maintenance and Support",
          ],
          meta: [
            "Art, Culture & Entertainment",
            "International",
            "2023-Ongoing",
          ],
        },
      ],
    },
    {
      type: "Archives",
      data: [
        {
          name: "The Elephant Cafe",
          textColor: "light",
          images: [
            "/images/works/elephant-cafe/Elephant_Cafe_1.webp",
            "/images/works/elephant-cafe/Elephant_Cafe_2.webp",
            "/images/works/elephant-cafe/Elephant_Cafe_3.webp",
            "/images/works/elephant-cafe/Elephant_Cafe_4.webp",
            "/images/works/elephant-cafe/Elephant_Cafe_5.webp",
          ],
          categories: [
            "Visual Identity",
            "Interior Design",
            "3D Modelling and Visualization",
          ],
          meta: ["Restaurant", "Myanmar", "2022"],
        },
        {
          name: "The Other Cakes",
          textColor: "dark",
          images: [
            "/images/archives/works/the-other-cakes/TOC Logos.webp",
            "/images/archives/works/the-other-cakes/TOC Alternate Logos.webp",
            "/images/archives/works/the-other-cakes/TOC Misc.webp",
            "/images/archives/works/the-other-cakes/TOC Tags and Sticker.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Bakery", "Yangon", "2019"],
        },
        // PFM CBD
        {
          name: "Another Club",
          textColor: "light",
          images: [
            "/images/archives/works/another-club/AC Window Stickers.webp",
            "/images/archives/works/another-club/AC Logo.webp",
            "/images/archives/works/another-club/AC Coffee Bags.webp",
            "/images/archives/works/another-club/AC Coasters.webp",
            "/images/archives/works/another-club/AC Mockups.webp",
          ],
          categories: [
            "Visual Identity",
            "Interior Design",
            "3D Modelling and Visualization",
          ],
          meta: ["Restaurant", "Myanmar", "2021"],
        },
        {
          name: "Grand Hotel",
          textColor: "light",
          images: [
            "/images/archives/works/grand-hotel/GH Logos.webp",
            "/images/archives/works/grand-hotel/GH Collaterals.webp",
            "/images/archives/works/grand-hotel/GH Documents.webp",
            "/images/archives/works/grand-hotel/GH Envenlope.webp",
            "/images/archives/works/grand-hotel/GH Laundry Bag.webp",
            "/images/archives/works/grand-hotel/GH Paperbag.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["Hotel", "Myanmar", "2021"],
        },
        {
          name: "YG",
          textColor: "light",
          images: [
            "/images/archives/works/yangon-galacticos/YG Apparels 1.webp",
            "/images/archives/works/yangon-galacticos/YG Apparels 2.webp",
            "/images/archives/works/yangon-galacticos/YG Merch Kit.webp",
            "/images/archives/works/yangon-galacticos/YG Mouse Pad.webp",
            "/images/archives/works/yangon-galacticos/YG Screens 1.webp",
            "/images/archives/works/yangon-galacticos/YG Screens 2.webp",
            "/images/archives/works/yangon-galacticos/YG Stickers.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["E-Sports Team", "Myanmar", "2020"],
        },
        {
          name: "Game Sauce",
          textColor: "light",
          images: [
            "/images/archives/works/game-sauce/GS Logo.webp",
            "/images/archives/works/game-sauce/GS Logo Animation.gif",
          ],
          categories: ["Visual Identity", "Motion Graphics and Animation"],
          meta: ["E-Sports", "Myanmar", "2019"],
        },
        {
          name: "RIO",
          textColor: "dark",
          images: [
            "/images/archives/works/rio/RIO Logo.webp",
            "/images/archives/works/rio/RIO Alternate Symbol.webp",
            "/images/archives/works/rio/RIO Colors.webp",
            "/images/archives/works/rio/RIO Tote Bag.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Restaurant", "Myanmar", "2019"],
        },
        {
          name: "Burmese Hype",
          textColor: "dark",
          images: [
            "/images/works/burmese-hype/Burmese Hype 1.webp",
            "/images/works/burmese-hype/Burmese Hype 2.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["Culture & Social Platform", "Myanmar", "2019"],
        },
        {
          name: "_ALLWeNeed.",
          textColor: "dark",
          images: [
            "/images/archives/works/all-we-need/AWN Bag 1.webp",
            "/images/archives/works/all-we-need/AWN Bag 2.webp",
            "/images/archives/works/all-we-need/AWN Tape 1.webp",
            "/images/archives/works/all-we-need/AWN Tape 2.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Culture & Apparel", "Yangon", "2019"],
        },
        {
          name: "HOG",
          textColor: "light",
          images: [
            "/images/archives/works/hog/HOG Logo.webp",
            "/images/archives/works/hog/HOG Mascot.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["E-Sports", "Yangon", "2017"],
        },
      ],
    },
  ];

  let hoveredWork: TWork | null;
  let hoveredType: string;

  const initialDisplayLabels = [
    { label: "Visual Identity", isActive: false },
    { label: "Motion Graphics and Animation", isActive: false },
    { label: "Packaging", isActive: false },
    { label: "Web Design and Development", isActive: false },
    { label: "Web Maintenance and Support", isActive: false },
    { label: "E-commerce Solutions", isActive: false },
    { label: "Architectural Design", isActive: false },
    { label: "Interior Design", isActive: false },
    { label: "3D Modelling and Visualization", isActive: false },
    { label: "Consultation and Strategy", isActive: false },
  ];
  let displayLabels = deepClone(initialDisplayLabels);

  $: {
    if (!hoveredWork) {
      displayLabels = deepClone(initialDisplayLabels);
    } else {
      const newDisplayLables = [];
      for (const labelItem of displayLabels) {
        hoveredWork!.categories.includes(labelItem.label)
          ? newDisplayLables.push({ ...labelItem, isActive: true })
          : newDisplayLables.push({ ...labelItem, isActive: false });
      }
      displayLabels = newDisplayLables;
    }
  }
</script>

<AppShell>
  <section class="relative">
    <div
      class="p-10 h-[12.5rem] sticky top-0 z-20 bg-light-95 dark:bg-light-7 flex items-start gap-32"
    >
      <div class="grid grid-rows-3 grid-flow-col gap-y-2 gap-x-32">
        {#each displayLabels as label}
          <span
            class={twm(
              "sand-transition text-2xl leading-none",
              label.isActive
                ? "text-black dark:text-light-100"
                : "text-light-80 dark:text-light-20",
            )}
          >
            {label.label}
          </span>
        {/each}
      </div>
      <div
        class="text-light-80 dark:text-light-20 sand-transition text-2xl leading-tight max-w-[22rem]"
      >
        Others (Every idea matters to us – no concept too small, no vision too
        grand. If you’re a person with an idea. Come say hi!)
      </div>
      <div class="flex items-center justify-end grow">
        <div class="w-[7.5rem] aspect-square scale-125 -mb-2">
          <LogoMain allowY={5} />
        </div>
      </div>
    </div>
    {#each WORKS_GROUPS as workGroup}
      <div
        role="region"
        class="h-32 sticky z-20 top-[12.5rem] flex items-center border-b-2 border-white dark:border-light-12"
      >
        <!-- <div
        role="region"
        class="h-32 sticky z-20 top-[12.5rem] flex items-center border-b-2 border-white dark:border-light-12 backdrop-blur-lg"
      > -->
        <div class="transparent-layer" />
        <!-- <div class="absolute inset-0 w-full h-full backdrop-blur-lg" /> -->
        <div
          class="absolute inset-0 flex gap-10 -ml-[0.125rem] opacity-sand overflow-hidden"
        >
          {#each [...Array(100).keys()] as _}
            <div class="shrink-0 w-line h-full bg-white dark:bg-light-12" />
          {/each}
        </div>
        <div class="relative grid grid-cols-2 items-center w-full h-full">
          <h2 class="text-6xl relative px-9">{workGroup.type}</h2>
          {#if hoveredWork && hoveredType === workGroup.type}
            <div class="grid grid-cols-3 items-center text-light-100 pl-6">
              {#each hoveredWork.meta as item}
                <div class="text-2xl">{item}</div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
      <div
        role="region"
        on:mouseenter={() => (hoveredType = workGroup.type)}
        on:mouseleave={() => (hoveredWork = null)}
        class="relative grid grid-cols-2 border-b-2 border-white dark:border-light-12"
      >
        {#each workGroup.data as work}
          <Work {work} on:hoverIn={(e) => (hoveredWork = e.detail)} />
        {/each}
      </div>
    {/each}
  </section>
</AppShell>
