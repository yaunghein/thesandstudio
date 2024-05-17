<script lang="ts">
  import { twMerge as twm } from "tailwind-merge";
  import AppShell from "$lib/components/AppShell.svelte";
  import Work from "$lib/components/Work.svelte";
  import LogoMain from "$lib/svgs/LogoMain.svelte";
  import type { Work as TWork, WorkGroup } from "$lib/types";
  import deepClone from "$lib/utils/deepClone";

  export const WORKS_GROUPS: WorkGroup[] = [
    {
      type: "Projects",
      data: [
        {
          name: "Sawbwa Morning Blend.",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/sawbwa-morning-blend/SB_Farmer_yrwamk.gif",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880730/works/sawbwa-morning-blend/SB_Plant_1_ovykzn.gif",
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
            <div
              class="grid grid-cols-3 items-center text-light-10 dark:text-light-100 pl-6"
            >
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
