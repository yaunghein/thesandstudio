<script lang="ts">
  import PixelBorder from "./PixelBorder.svelte";
  import Work from "$lib/components/Work.svelte";
  import type { WorkGroup, Work as TWork } from "$lib/types";

  const WORKS_GROUPS: WorkGroup[] = [
    {
      type: "Projects",
      data: [
        {
          name: "Sawbwa Morning Blend.",
          textColor: "dark",
          images: [
            "/images/archives/works/sawbwa-morning-blend/Sawbwa.webp",
            "/images/archives/works/sawbwa-morning-blend/SB Farmer.gif",
            "/images/archives/works/sawbwa-morning-blend/SB Plant 1.gif",
            "/images/archives/works/sawbwa-morning-blend/SB Plant 2.gif",
            "/images/archives/works/sawbwa-morning-blend/SB Seed.gif",
            "/images/archives/works/sawbwa-morning-blend/SB Field.gif",
            "/images/archives/works/sawbwa-morning-blend/SB House.gif",
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
          meta: ["Bakery", "Myanmar", "2019"],
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
          meta: ["Culture & Apparel", "Myanmar", "2019"],
        },
        {
          name: "HOG",
          textColor: "light",
          images: [
            "/images/archives/works/hog/HOG Logo.webp",
            "/images/archives/works/hog/HOG Mascot.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["E-Sports", "Myanmar", "2017"],
        },
      ],
    },
  ];

  let currentWork: TWork = WORKS_GROUPS[0].data[0];
</script>

<div
  data-slide-name="works"
  class="swiper-slide h-full overflow-scroll shrink-0 px-4"
>
  <div class="h-full bg-white dark:bg-black w-full">
    <div class="h-full relative">
      <PixelBorder />
      <div
        id="mobile-work-container"
        style="overscroll-behavior: none;"
        class="p-4 w-full h-full rounded-[1.08rem] relative overflow-scroll hide-scrollbar"
      >
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h1 class="font-sand-mobile-bold text-6xl">Works</h1>
            <div class="max-w-[7rem] leading-[0.75] text-xl">
              <div class="opacity-50">Visual Identity/</div>
              <div class="opacity-50">Motion Graphics and Animation/</div>
              <div class="opacity-50">Packaging/</div>
              <div class="opacity-50">Web Design and Development/</div>
              <div class="opacity-50">Web Maintenance and Support/</div>
            </div>
          </div>

          <div>
            <div class="leading-[0.75] text-xl">
              <div class="opacity-50">E-commerce Solutions/</div>
              <div class="opacity-50">Architectural Design/</div>
              <div class="opacity-50">Interior Design/</div>
              <div class="opacity-50">3D Modeling and Visualization/</div>
              <div class="opacity-50">Consultation and Strategy/</div>
            </div>
            <div class="opacity-50 leading-[0.75] text-xl mt-4">
              Others (Every idea matters to us – no concept too small, no vision
              too grand. If you’re a person with an idea. Come say hi!)
            </div>
          </div>
        </div>

        <div class="mt-4 -mx-4 -my-4">
          {#each WORKS_GROUPS as workGroup}
            <div
              class="z-10 grid grid-cols-2 gap-x-8 gap-y-1 px-5 py-3 rounded-[1.2rem] bg-white dark:bg-black sticky -top-4"
            >
              <PixelBorder />
              <div class="text-xl font-sand-mobile-bold leading-[0.75]">
                <div class="">{workGroup.type}</div>
                <div class="mt-1">
                  {currentWork.name} ({currentWork.meta[
                    currentWork.meta.length - 1
                  ]})
                </div>
              </div>
              <div class="text-xl font-sand-mobile-bold leading-[0.75]">
                <div class="">{currentWork.meta[0]}</div>
                <div class="mt-1">{currentWork.meta[1]}</div>
              </div>

              <div
                class="-mx-5 col-span-2 text-xl font-sand-mobile-bold leading-[0.75] flex items-center gap-2 animate-marquee"
              >
                {#each [...Array(20)] as _}
                  <div class="shrink-0">{currentWork.categories.join(" ")}</div>
                {/each}
              </div>
            </div>
            <div role="region" class="relative -mt-3">
              {#each workGroup.data as work}
                <Work
                  {work}
                  on:enter={(e) => (currentWork = e.detail)}
                  on:enterBack={(e) => (currentWork = e.detail)}
                />
              {/each}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>
