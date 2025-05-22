<script lang="ts">
	import { browser } from '$app/environment'
	import NewPixelBorder from '$lib/components/mobile/NewPixelBorder.svelte'
	import playLottie from '$lib/utils/playLottie'
	import type { Work as TWork, WorkGroup } from '$lib/types'
	import Work from '$lib/components/mobile/Work.svelte'

	const WORKS_GROUPS: WorkGroup[] = [
		{
			type: 'Projects',
			data: [
				{
					name: 'Sawbwa Morning Blend.',
					slug: 'sawbwa-morning-blend',
					images: [
						// "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/sawbwa-morning-blend/SB_Farmer_yrwamk.gif",
						// "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880730/works/sawbwa-morning-blend/SB_Plant_1_ovykzn.gif",
						// "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/sawbwa-morning-blend/SB_Plant_2_ynncob.gif",
						// "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880731/works/sawbwa-morning-blend/SB_Seed_ciddwl.gif",
						// "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880731/works/sawbwa-morning-blend/SB_Field_zpdr7s.gif",
						// "https://res.cloudinary.com/dlhbpswom/image/upload/v1715880732/works/sawbwa-morning-blend/SB_House_f3abca.gif",
						//new
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574116/works/sawbwa-morning-blend/Sawbwa_New_1_wsfwsa.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574240/works/sawbwa-morning-blend/Sawbwa_New_2_xoyaqv.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574117/works/sawbwa-morning-blend/Sawbwa_New_3_whkti1.webp'
					],
					categories: ['Packaging'],
					meta: ['Specialty Coffee', 'Myanmar', '2022'],
					links: [
						{ label: 'sawbwacoffee.com', to: 'https://www.sawbwacoffee.com/' },
						{ label: 'Facebook', to: 'https://www.facebook.com/sawbwacoffee' }
					]
				},
				{
					name: 'ENVISEAM',
					slug: 'enviseam',
					images: [
						'https://res.cloudinary.com/dlhbpswom/raw/upload/v1717478894/lotties/enviseam_n3orkw.json'
						// "https://res.cloudinary.com/dlhbpswom/image/upload/v1716573917/works/enviseam/Enviseam-New_1_yn6wik.webp",
						// "https://res.cloudinary.com/dlhbpswom/image/upload/v1716573918/works/enviseam/Enviseam-New_2_ahkala.webp",
					],
					categories: [
						'Visual Identity',
						'Motion Graphics and Animation',
						'Web Maintenance and Support',
						'App Design and Development'
					],
					meta: ['Art, Culture & Entertainment', 'International', '2023-Ongoing'],
					links: [
						{ label: 'envise.am', to: 'https://www.envise.am/' },
						{ label: 'Instagram', to: 'https://www.instagram.com/enviseam/' }
					]
				}
			]
		},
		{
			type: 'Archives',
			data: [
				{
					name: 'The Elephant Cafe',
					slug: 'the-elephant-cafe',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574517/works/elephant-cafe/May-25-2024/The_Elephant_Cafe_vk4yuc.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574521/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-9_w7lfrg.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574520/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-11_pqypwa.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574517/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-13_abcqpk.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574522/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-1_hkga8b.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574527/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-10_iaduhn.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574518/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-12_xjpjyr.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574518/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-14_ehluau.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574529/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-2_lpetdr.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574530/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-3_pbc7qb.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574526/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-4_qbrgwp.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574528/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-15_ra7acr.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574524/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-5_ey29y7.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574524/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-6_mjvfyo.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574523/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-7_ofhdem.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574517/works/elephant-cafe/May-25-2024/The_Elephant_Cafe-8_ohapza.webp'
					],
					categories: ['Visual Identity', 'Interior Design', '3D Modelling and Visualization'],
					meta: ['Restaurant', 'Myanmar', '2022']
				},
				{
					name: 'The Other Cakes',
					slug: 'the-other-cakes',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880743/works/the-other-cakes/The_Other_Cakes_hkah3d.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880744/works/the-other-cakes/TOC_Logos_beropf.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Tags_and_Sticker_w1uefd.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Misc_p9euyo.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/the-other-cakes/TOC_Alternate_Logos_tqr0v8.webp'
					],
					categories: ['Visual Identity', 'Packaging'],
					meta: ['Bakery', 'Myanmar', '2019'],
					links: [
						{
							label: 'Facebook',
							to: 'https://www.facebook.com/theothercakesmm'
						}
					]
				},
				// PFM CBD
				{
					name: 'Another Club',
					slug: 'another-club',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/another-club/AC_Logo_2_p4zxbj.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/another-club/AC_Window_Stickers_e4u8s6.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/another-club/AC_Mockups_lbhccj.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880739/works/another-club/Group_1_uz5lmh.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880739/works/another-club/AC_Coasters_onalyl.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880740/works/another-club/AC_Coffee_Bags_ofov8x.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880740/works/another-club/AC_Logo_zh7gg0.webp',
						//new
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574995/works/another-club/May-25-2024/Another_Club-3_yxp9fn.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574987/works/another-club/May-25-2024/Another_Club-1_hhndyr.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574988/works/another-club/May-25-2024/Another_Club_br6sxf.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574990/works/another-club/May-25-2024/Another_Club-8_i1o5sm.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574990/works/another-club/May-25-2024/Another_Club-10_hdi4b9.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574986/works/another-club/May-25-2024/Another_Club-11_ho9egm.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574985/works/another-club/May-25-2024/Another_Club-4_uqaxqx.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574986/works/another-club/May-25-2024/Another_Club-2_pdyptx.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574994/works/another-club/May-25-2024/Another_Club-7_vx39bu.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574989/works/another-club/May-25-2024/Another_Club-9_jr5zwj.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574992/works/another-club/May-25-2024/Another_Club-5_ajw6qy.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716574991/works/another-club/May-25-2024/Another_Club-6_a9kk0u.webp'
					],
					categories: ['Visual Identity', 'Interior Design', '3D Modelling and Visualization'],
					meta: ['Restaurant', 'Myanmar', '2021'],
					links: [
						{
							label: 'Facebook',
							to: 'https://www.facebook.com/anotherclubcafe'
						}
					]
				},
				{
					name: 'Grand Hotel',
					slug: 'grand-hotel',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/grand-hotel/Grand_Hotel_q5bid6.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/grand-hotel/GH_Logos_mmcfmz.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Laundry_Bag_vljzng.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Documents_rjkh7v.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/grand-hotel/GH_Collaterals_mgqkrz.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880727/works/grand-hotel/GH_Paperbag_lchdgv.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/grand-hotel/GH_Envenlope_chtjan.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716575321/works/grand-hotel/Grand_Hotel_b8anbz.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716575321/works/grand-hotel/Grand_Hotel-1_p8myce.webp'
					],
					categories: ['Visual Identity'],
					meta: ['Hotel', 'Myanmar', '2021'],
					links: [
						{
							label: 'Facebook',
							to: 'https://www.facebook.com/grandhotel.chaungthabeach'
						}
					]
				},
				{
					name: 'YG',
					slug: 'yangon-galacticos',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_eftdop.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/yangon-galacticos/YG_Apparels_2_qqdvqy.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/yangon-galacticos/YG_Merch_Kit_bqhdan.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Mouse_Pad_fasc3m.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Screens_2_cm2ksj.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Screens_1_wpvfbf.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Screens_1_wpvfbf.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Apparels_1_l57ewl.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880735/works/yangon-galacticos/YG_Stickers_gjx0vi.webp'
					],
					categories: ['Visual Identity'],
					meta: ['E-Sports Team', 'Myanmar', '2020'],
					links: [
						{
							label: 'Instagram',
							to: 'https://www.instagram.com/ygesportsmm/'
						}
					]
				},
				{
					name: 'Game Sauce',
					slug: 'game-sauce',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880738/works/game-sauce/GS_Logo_wqq4dc.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716573445/works/game-sauce/GS_Logo_Animation_wg2fmo.gif'
					],
					categories: ['Visual Identity', 'Motion Graphics and Animation'],
					meta: ['E-Sports', 'Myanmar', '2019'],
					links: [{ label: 'Facebook', to: 'https://www.facebook.com/gamesauce.gg' }]
				},
				{
					name: 'RIO',
					slug: 'rio',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/rio/RIO_Logo_p3cjds.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/rio/Rio_bzfli5.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880725/works/rio/RIO_Alternate_Symbol_ww2mtm.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/rio/RIO_Colors_tzoaxn.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880734/works/rio/RIO_Tote_Bag_yxwv8m.webp'
					],
					categories: ['Visual Identity', 'Packaging'],
					meta: ['Restaurant', 'Myanmar', '2019'],
					links: [{ label: 'Facebook', to: 'https://www.facebook.com/rioygn' }]
				},
				{
					name: 'Burmese Hype',
					slug: 'burmese-hype',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880741/works/burmese-hype/Burmese_Hype_1_yhqfer.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/burmese-hype/Burmese_Hype_jbkoof.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880742/works/burmese-hype/Burmese_Hype_2_qkgz9u.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716575754/works/burmese-hype/BH-2_gopq2z.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716575754/works/burmese-hype/BH-1_f9vkrv.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716575755/works/burmese-hype/BH_rokevr.webp'
					],
					categories: ['Visual Identity'],
					meta: ['Culture & Social Platform', 'Myanmar', '2019'],
					links: [{ label: 'Facebook', to: 'https://www.facebook.com/burmesehype' }]
				},
				{
					name: '_ALLWeNeed.',
					slug: 'all-we-need',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880726/works/all-we-need/AWN_Logo_on_White_ebysv5.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880727/works/all-we-need/AWN_Tape_1_fk2jho.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Bag_2_dpafxx.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Tape_3_xvgmqk.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880728/works/all-we-need/AWN_Bag_1_tiidue.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/all-we-need/AWN_Tape_2_r9ziya.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880729/works/all-we-need/AWN_Logo_on_Black_aoorzg.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880733/works/all-we-need/AWN_Name_Card_b4xjpi.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1716575831/works/all-we-need/AWN_b1kdgi.webp'
					],
					categories: ['Visual Identity', 'Packaging'],
					meta: ['Culture & Apparel', 'Myanmar', '2019']
				},
				{
					name: 'HOG',
					slug: 'hog',
					images: [
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/hog/HOG_Logo_elngx6.webp',
						'https://res.cloudinary.com/dlhbpswom/image/upload/v1715880736/works/hog/HOG_Mascot_ri5p0c.webp'
					],
					categories: ['Visual Identity'],
					meta: ['E-Sports', 'Myanmar', '2017'],
					links: [
						{
							label: 'Facebook',
							to: 'https://www.facebook.com/hogesportsmyanmar'
						}
					]
				}
			]
		}
	]

	// let currentWork: TWork = $state(WORKS_GROUPS[0].data[0])
</script>

<section class="p-4">
	<h1 class="font-sand-mobile-bold text-7xl leading-[0.75]">Works</h1>
	<p class="mt-4 text-[1.45rem]">
		Visual Identity/ Motion Graphics and Animation/ Packaging/ Web Design and Development/ Web
		Maintenance and Support/ E-commerce Solutions/ App Design and Development/ Architectural Design/
		Interior Design/ 3D Modeling and Visualization/ Consultation and Strategy/
	</p>
	<p class="mt-4 text-[1.45rem]">
		Others (Every idea matters to us – no concept too small, no vision too grand. If you’re a person
		with an idea. Come say hi!)
	</p>
</section>

<section>
	<div class="">
		{#each WORKS_GROUPS as workGroup}
			<div class="relative py-3">
				<div class="absolute inset-0 bottom-auto h-[1px] w-full bg-light-4 dark:bg-light-25"></div>
				<div
					class="absolute inset-0 bottom-auto top-[3px] h-[1px] w-full bg-light-4 dark:bg-light-25"
				></div>
				<div class="absolute inset-0 top-auto h-[1px] w-full bg-light-4 dark:bg-light-25"></div>
				<div
					class="absolute inset-0 bottom-[3px] top-auto h-[1px] w-full bg-light-4 dark:bg-light-25"
				></div>
				<div class="flex animate-marquee items-center gap-4">
					{#each { length: 50 }}
						<div
							class="shrink-0 whitespace-pre pt-[0.185rem] font-sand-mobile-bold text-[1.45rem] uppercase leading-[0.45]"
						>
							{workGroup.type}/
						</div>
					{/each}
				</div>
			</div>
			<div role="region" class="relative grid gap-6 p-4">
				{#each workGroup.data as work}
					<Work {work} />
				{/each}
			</div>
		{/each}
	</div>
</section>

<section class="relative aspect-[4/3] w-full">
	<img
		src="/mobile/gifs/sand-dune-loop.gif"
		alt="Sand Dune"
		class="h-full w-full dark:opacity-25 dark:invert"
	/>
	<div class="absolute left-4 top-4">
		<div
			class="bg-light-100 p-1 font-sand-mobile-bold text-base text-light-4 dark:bg-light-4 dark:text-light-100"
		>
			<span class="block max-w-[5.8rem] translate-y-[0.07rem] text-3xl leading-[0.75]">
				Make Shit with Us
			</span>
		</div>
		<a
			href="/"
			class="relative mt-8 inline-block border-[2px] border-light-4 bg-light-100 px-4 py-2 font-sand-mobile-bold text-[1.45rem] leading-[0.65] dark:border-light-25 dark:bg-light-4"
		>
			Let's Go
			<NewPixelBorder />
		</a>
	</div>
</section>
