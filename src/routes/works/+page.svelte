<script lang="ts">
  import AppShell from "$lib/components/AppShell.svelte";
  import Work from "$lib/components/Work.svelte";
  import type { WorkGroup } from "$lib/types.ts";

  const WORKS_GROUPS: WorkGroup[] = [
    {
      type: "Works",
      data: [
        {
          name: "_ALLWeNeed.",
          textColor: "dark",
          images: [
            "/images/archives/works/all-we-need/AWN Bag 1.webp",
            "/images/archives/works/all-we-need/AWN Bag 2.webp",
            "/images/archives/works/all-we-need/AWN Tape 1.webp",
            "/images/archives/works/all-we-need/AWN Tape 2.webp",
          ],
          hoverImage:
            "/images/archives/works/all-we-need/AWN Logo on White.webp",
          details: [
            ["APPAREL AND", "CULTURE"],
            ["Branding and", "Typography"],
          ],
        },
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
          hoverImage: "/images/archives/works/another-club/AC Logo 2.webp",
          details: [
            ["RESTAURANT"],
            ["Branding and", "Graphic Design"],
            ["Interior Design", "3D Visualization"],
          ],
        },
        {
          name: "Burmese Hype",
          textColor: "dark",
          images: [
            "/images/works/burmese-hype/Burmese Hype 1.webp",
            "/images/works/burmese-hype/Burmese Hype 2.webp",
          ],
          hoverImage: "/images/works/burmese-hype/Burmese Hype.webp",
          details: [["I DON'T KNOW"]],
        },
        {
          name: "Elephant Cafe",
          textColor: "light",
          images: [
            "/images/works/elephant-cafe/Elephant_Cafe_1.webp",
            "/images/works/elephant-cafe/Elephant_Cafe_2.webp",
            "/images/works/elephant-cafe/Elephant_Cafe_3.webp",
            "/images/works/elephant-cafe/Elephant_Cafe_4.webp",
            "/images/works/elephant-cafe/Elephant_Cafe_5.webp",
          ],
          hoverImage: "/images/works/elephant-cafe/Elephant Cafe.webp",
          details: [
            ["CAFE"],
            ["Branding and", "Graphic Design"],
            ["AA", "Interior Design", "3D Visualization"],
          ],
        },
        {
          name: "Game Sauce",
          textColor: "light",
          images: [
            "/images/archives/works/game-sauce/GS Logo.webp",
            "/images/archives/works/game-sauce/GS Logo Animation.gif",
          ],
          hoverImage: "/images/archives/works/game-sauce/GS Logo.webp",
          details: [["I DON'T KNOW"]],
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
          hoverImage: "/images/archives/works/grand-hotel/Grand Hotel.webp",
          details: [["HOTEL"], ["Branding and", "Graphic Design"]],
        },
        {
          name: "HOG",
          textColor: "light",
          images: [
            "/images/archives/works/hog/HOG Logo.webp",
            "/images/archives/works/hog/HOG Mascot.webp",
          ],
          hoverImage: "/images/archives/works/hog/HOG Logo.webp",
          details: [["I DON'T KNOW"]],
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
          hoverImage:
            "/images/archives/works/the-other-cakes/The Other Cakes.webp",
          details: [["I DON'T KNOW"]],
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
          hoverImage: "/images/archives/works/rio/Rio.webp",
          details: [["I DON'T KNOW"]],
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
          hoverImage: "/images/archives/works/yangon-galacticos/YG.webp",
          details: [["I DON'T KNOW"]],
        },
      ],
    },
  ];
</script>

<div>
  <AppShell>
    <div class="p-11 grid gap-11">
      {#each WORKS_GROUPS as workGroup}
        <section>
          <h2 class="text-2xl mb-2">{workGroup.type}</h2>
          <div class="grid grid-cols-2 gap-4">
            {#each workGroup.data as work}
              <Work {work} />
            {/each}
          </div>
        </section>
      {/each}
    </div>
  </AppShell>
</div>
