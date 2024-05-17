<script lang="ts">
  import PixelBorder from "./PixelBorder.svelte";
  import Work from "$lib/components/Work.svelte";
  import type { WorkGroup, Work as TWork } from "$lib/types";

  export const WORKS_GROUPS: WorkGroup[] = [
    {
      type: "Projects",
      data: [
        {
          name: "Sawbwa Morning Blend.",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/sawbwa-morning-blend/SB_Farmer_yrwamk.gif",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880730/works/sawbwa-morning-blend/SB_Plant_1_ovykzn.giff",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/sawbwa-morning-blend/SB_Plant_2_ynncob.gif",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880731/works/sawbwa-morning-blend/SB_Seed_ciddwl.gif",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880731/works/sawbwa-morning-blend/SB_Field_zpdr7s.gif",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880732/works/sawbwa-morning-blend/SB_House_f3abca.gif",
          ],
          categories: ["Packaging"],
          meta: ["Specialty Coffee", "Myanmar", "2022"],
        },
        {
          name: "ENVISEAM",
          images: [
            "https://uploads-ssl.webflow.com/637f1d40ad46563adc48171e/641db77936aa4a5d92119ac4_NVAM%20logo%20v2.json",
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
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880737/works/elephant-cafe/Elephant_Cafe_1_fzlti8.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/elephant-cafe/Elephant_Cafe_3_srybvz.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880737/works/elephant-cafe/Elephant_Cafe_4_sghzl5.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/elephant-cafe/Elephant_Cafe_5_pjdig0.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/elephant-cafe/Elephant_Cafe_2_tc7ukj.webp",
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
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880743/works/the-other-cakes/The_Other_Cakes_hkah3d.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880744/works/the-other-cakes/TOC_Logos_beropf.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Tags_and_Sticker_w1uefd.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Misc_p9euyo.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Alternate_Logos_tqr0v8.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Bakery", "Myanmar", "2019"],
        },
        // PFM CBD
        {
          name: "Another Club",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/another-club/AC_Logo_2_p4zxbj.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/another-club/AC_Window_Stickers_e4u8s6.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/another-club/AC_Mockups_lbhccj.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880739/works/another-club/Group_1_uz5lmh.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880739/works/another-club/AC_Coasters_onalyl.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880740/works/another-club/AC_Coffee_Bags_ofov8x.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880740/works/another-club/AC_Logo_zh7gg0.webp",
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
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/grand-hotel/Grand_Hotel_q5bid6.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/grand-hotel/GH_Logos_mmcfmz.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Laundry_Bag_vljzng.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Documents_rjkh7v.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Collaterals_mgqkrz.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880727/works/grand-hotel/GH_Paperbag_lchdgv.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/grand-hotel/GH_Envenlope_chtjan.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["Hotel", "Myanmar", "2021"],
        },
        {
          name: "YG",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_eftdop.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/yangon-galacticos/YG_Apparels_2_qqdvqy.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/yangon-galacticos/YG_Merch_Kit_bqhdan.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Mouse_Pad_fasc3m.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Screens_2_cm2ksj.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Screens_1_wpvfbf.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Screens_1_wpvfbf.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Apparels_1_l57ewl.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Stickers_gjx0vi.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["E-Sports Team", "Myanmar", "2020"],
        },
        {
          name: "Game Sauce",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/game-sauce/GS_Logo_wqq4dc.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880740/works/game-sauce/GS_Logo_Animation_ivjrr7.gif",
          ],
          categories: ["Visual Identity", "Motion Graphics and Animation"],
          meta: ["E-Sports", "Myanmar", "2019"],
        },
        {
          name: "RIO",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/rio/RIO_Logo_p3cjds.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/rio/Rio_bzfli5.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/rio/RIO_Alternate_Symbol_ww2mtm.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/rio/RIO_Colors_tzoaxn.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/rio/RIO_Tote_Bag_yxwv8m.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Restaurant", "Myanmar", "2019"],
        },
        {
          name: "Burmese Hype",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880741/works/burmese-hype/Burmese_Hype_1_yhqfer.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/burmese-hype/Burmese_Hype_jbkoof.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/burmese-hype/Burmese_Hype_2_qkgz9u.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["Culture & Social Platform", "Myanmar", "2019"],
        },
        {
          name: "_ALLWeNeed.",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/all-we-need/AWN_Logo_on_White_ebysv5.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880727/works/all-we-need/AWN_Tape_1_fk2jho.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Bag_2_dpafxx.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Tape_3_xvgmqk.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Bag_1_tiidue.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/all-we-need/AWN_Tape_2_r9ziya.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/all-we-need/AWN_Logo_on_Black_aoorzg.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880733/works/all-we-need/AWN_Name_Card_b4xjpi.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Culture & Apparel", "Myanmar", "2019"],
        },
        {
          name: "HOG",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/hog/HOG_Logo_elngx6.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/hog/HOG_Mascot_ri5p0c.webp",
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
              class="z-10 grid grid-cols-2 gap-x-8 gap-y-1 px-5 py-3 rounded-[1.2rem] bg-white dark:bg-black sticky -top-4 overflow-hidden"
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
