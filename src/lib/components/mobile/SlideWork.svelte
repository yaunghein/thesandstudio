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
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716576949/works/sawbwa-morning-blend/Mobile/Sawbwa-3_ybb53v.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716576952/works/sawbwa-morning-blend/Mobile/Sawbwa_dotiv7.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716576948/works/sawbwa-morning-blend/Mobile/Sawbwa-1_uvnhb0.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716576948/works/sawbwa-morning-blend/Mobile/Sawbwa-2_otct3x.webp",
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
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716576631/works/enviseam/mobile/Enviseam_gcecua.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716576631/works/enviseam/mobile/Enviseam-1_klixto.webp",
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
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577478/works/elephant-cafe/Mobile/The_Elephant_Cafe_jdkuf1.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577471/works/elephant-cafe/Mobile/The_Elephant_Cafe-1_alxioe.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577481/works/elephant-cafe/Mobile/The_Elephant_Cafe-2_ykjc3y.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577480/works/elephant-cafe/Mobile/The_Elephant_Cafe-3_zunwea.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577472/works/elephant-cafe/Mobile/The_Elephant_Cafe-4_luija3.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577488/works/elephant-cafe/Mobile/The_Elephant_Cafe-5_urdyse.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577484/works/elephant-cafe/Mobile/The_Elephant_Cafe-6_lictpz.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577478/works/elephant-cafe/Mobile/The_Elephant_Cafe-7_yewdhx.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577489/works/elephant-cafe/Mobile/The_Elephant_Cafe-8_fwdvjf.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577474/works/elephant-cafe/Mobile/The_Elephant_Cafe-9_tvpka9.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577485/works/elephant-cafe/Mobile/The_Elephant_Cafe-10_mzpn8c.webp",
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
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577772/works/the-other-cakes/mobile/The_Other_Cakes-2_lxv0cd.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577776/works/the-other-cakes/mobile/The_Other_Cakes-3_aymnml.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577778/works/the-other-cakes/mobile/The_Other_Cakes-4_pjqjkv.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577775/works/the-other-cakes/mobile/The_Other_Cakes_zpzus0.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577772/works/the-other-cakes/mobile/The_Other_Cakes-1_bw9eoe.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Bakery", "Myanmar", "2019"],
        },
        // PFM CBD
        {
          name: "Another Club",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577942/works/another-club/mobile/Another_Club-1_vztyii.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577947/works/another-club/mobile/Another_Club-2_hedvb7.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577952/works/another-club/mobile/Another_Club_owfnmq.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577957/works/another-club/mobile/Another_Club-3_enmsxm.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577941/works/another-club/mobile/Another_Club-4_a1nwms.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577955/works/another-club/mobile/Another_Club-5_nucdsl.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577950/works/another-club/mobile/Another_Club-7_jrzqwf.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577944/works/another-club/mobile/Another_Club-8_nc4du8.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577963/works/another-club/mobile/Another_Club-6_cjzywi.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716577949/works/another-club/mobile/Another_Club-9_ayxlit.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578116/works/another-club/mobile/Another_b3rgwt.webp",
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
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578264/works/grand-hotel/mobile/Grand_Hotel_hqryyr.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578266/works/grand-hotel/mobile/Grand_Hotel-1_zmu6ge.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578285/works/grand-hotel/mobile/Grand_Hotel-2_uiesfl.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578282/works/grand-hotel/mobile/Grand_Hotel-3_ja4ik2.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578276/works/grand-hotel/mobile/Grand_Hotel-4_avz5rn.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578280/works/grand-hotel/mobile/Grand_Hotel-5_gkzexh.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578268/works/grand-hotel/mobile/Grand_Hotel-7_x7qi4w.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578270/works/grand-hotel/mobile/Grand_Hotel-6_sqolsf.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578273/works/grand-hotel/mobile/Grand_Hotel-8_rz37gq.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["Hotel", "Myanmar", "2021"],
        },
        {
          name: "YG",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578815/works/yangon-galacticos/mobile/YG_qq5qhr.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578816/works/yangon-galacticos/mobile/YG-2_muziqk.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578818/works/yangon-galacticos/mobile/YG-1_vvennm.webp",
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
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578868/works/rio/mobile/Rio_stdb4o.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578870/works/rio/mobile/Rio-2_obhyxp.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578873/works/rio/mobile/Rio-3_cwz8mz.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578876/works/rio/mobile/Rio-1_u7wc0y.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Restaurant", "Myanmar", "2019"],
        },
        {
          name: "Burmese Hype",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578941/works/burmese-hype/mobile/BH_negbwd.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578932/works/burmese-hype/mobile/BH-1_kiqyj0.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578938/works/burmese-hype/mobile/BH-2_dy82ko.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578930/works/burmese-hype/mobile/BH-3_afpfsx.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716578936/works/burmese-hype/mobile/BH-4_efcii1.webp",
          ],
          categories: ["Visual Identity"],
          meta: ["Culture & Social Platform", "Myanmar", "2019"],
        },
        {
          name: "_ALLWeNeed.",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579021/works/all-we-need/mobile/AWN-3_fii9cv.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579039/works/all-we-need/mobile/AWN_iwenmy.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579031/works/all-we-need/mobile/AWN-1_wzjh9q.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579027/works/all-we-need/mobile/AWN-2_csx7ok.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579019/works/all-we-need/mobile/AWN-4_h3avtb.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579024/works/all-we-need/mobile/AWN-5_f9p31e.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579037/works/all-we-need/mobile/AWN-6_igq903.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579033/works/all-we-need/mobile/AWN-7_xzevpg.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579042/works/all-we-need/mobile/AWN-8_qa1ksl.webp",
          ],
          categories: ["Visual Identity", "Packaging"],
          meta: ["Culture & Apparel", "Myanmar", "2019"],
        },
        {
          name: "HOG",
          images: [
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579156/works/hog/mobile/HOG_kdyhfs.webp",
            "https://res.cloudinary.com/dlhbpswom/image/upload/v1716579154/works/hog/mobile/HOG-1_ueex1k.webp",
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
  class="swiper-slide w-full h-full overflow-scroll shrink-0 px-4"
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
              <div class="">Visual Identity/</div>
              <div class="">Motion Graphics and Animation/</div>
              <div class="">Packaging/</div>
              <div class="">Web Design and Development/</div>
              <div class="">Web Maintenance and Support/</div>
              <div class="">App Design and Development/</div>
            </div>
          </div>

          <div>
            <div class="leading-[0.75] text-xl">
              <div class="">E-commerce Solutions/</div>
              <div class="">Architectural Design/</div>
              <div class="">Interior Design/</div>
              <div class="">3D Modeling and Visualization/</div>
              <div class="">Consultation and Strategy/</div>
            </div>
            <div class=" leading-[0.75] text-xl mt-4">
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
                  <div class="shrink-0">
                    {currentWork.categories.join(" / ")}
                  </div>
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
