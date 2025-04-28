<script lang="ts">
	import { openContactTab } from '$lib/stores/finder'
	import { addShell } from '$lib/stores/shell'
	import LogoMain from '$lib/svgs/LogoMain.svelte'
	import AppShell from '$lib/components/AppShell.svelte'
	import { changeCursorType } from '$lib/stores/cursor'
	import TypographicChallenge from './(components)/TypographicChallenge.svelte'
	import MetaData from '$lib/components/MetaData.svelte'
</script>

<MetaData
	pageTitle="Not Works - The Sand Studio"
	title="Not Works - The Sand Studio"
	description="Valuing and cultivating the creative aspect of the human spirit, recognizing it as a powerful tool for solving problems, expressing oneself, and understanding the world. Encouraging innovation and original thought, breaking free from traditional constraints, and exploring new ideas without being hindered by fear or skepticism."
/>
<div>
	<AppShell>
		<div class="page-wrapper flex h-full flex-col">
			<div class="select-none pl-12 pt-12 text-[1.375rem]">
				<p class="fade-up max-w-[65rem] leading-[1.35]">
					Valuing and cultivating the creative aspect of the human spirit, recognizing it as a
					powerful tool for solving problems, expressing oneself, and understanding the world.
					Encouraging innovation and original thought, breaking free from traditional constraints,
					and exploring new ideas without being hindered by fear or skepticism.
				</p>
			</div>
			<div class="my-5 flex items-center text-[26rem] leading-none">
				<div class="fade-up">N</div>
				<div class="fade-up mx-5 flex aspect-square w-[25rem] items-center">
					<LogoMain />
				</div>
				<div class="fade-up mr-24">T</div>
				<div class="fade-up">WORKS</div>
			</div>

			<section class="-mt-20 grow">
				<div class="fade-up grid grid-cols-1 sm:grid-cols-3">
					<TypographicChallenge />

					<button
						onclick={() => {
							addShell({ id: 'finder', zIndex: 65 })
							openContactTab()
						}}
						use:changeCursorType={{ inType: 'contact', outType: 'normal' }}
						class="fade-up"
					>
						<div class="overflow-hidden">
							<div
								class="relative -mx-[0.1rem] border-2 border-white px-3 py-5 dark:border-light-12"
							>
								<div class="transparent-layer"></div>
								<span class="relative block text-left text-3xl">2024</span>
							</div>
						</div>

						<div
							class="relative aspect-[1/1.3] w-full overflow-hidden bg-light-100 pl-10 pt-10 text-light-10 dark:bg-light-10 dark:text-light-100"
						>
							<!-- <span class="text-4xl font-sand-medium">Do you have an idea?</span> -->
							<img
								src="https://res.cloudinary.com/dlhbpswom/image/upload/v1715955807/general/not-works-collaborate_xbzd1y.svg"
								alt="Make shit with us"
								class="w-[50%] invert dark:invert-0"
							/>
						</div>
					</button>

					<div class="fade-up">
						<div class="overflow-hidden">
							<div
								class="relative -mx-[0.1rem] border-2 border-white px-3 py-5 dark:border-light-12"
							>
								<div class="transparent-layer"></div>
								<span class="text-lef relative block text-3xl">-</span>
							</div>
						</div>

						<div
							class="relative grid aspect-[1/1.3] w-full place-items-center overflow-hidden bg-light-90 text-light-10 dark:bg-light-12 dark:text-light-100"
						></div>
					</div>
				</div>
			</section>
		</div>
	</AppShell>
</div>
