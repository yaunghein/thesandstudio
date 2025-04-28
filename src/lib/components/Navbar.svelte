<script lang="ts">
	import { page } from '$app/state'
	import LogoShape from '$lib/svgs/LogoShape.svelte'
	import Menu from './Menu.svelte'
	import { twMerge as twm } from 'tailwind-merge'

	const PAGE_NAMES_MAP: Record<string, string> = {
		'/': '',
		'/for-all-thingkind/': 'For All Thingkind',
		'/child/': 'CHILD*',
		'/works/': 'WORKS',
		'/not-works/': 'Not Works'
	}
</script>

<header
	class="sticky left-0 right-0 top-0 z-50 hidden h-20 w-full shrink-0 items-center px-12 sm:flex"
>
	<div class="grid w-full grid-cols-3">
		<div class="flex w-full items-center gap-10 font-sand-medium text-2xl">
			<a href="/" class="flex items-center gap-5">
				<div class="aspect-square w-11">
					<LogoShape />
				</div>
				<div class="mt-[0.125rem]">SAND DESKTOP</div>
			</a>

			<button
				class="pointer-events-none flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black opacity-50 dark:opacity-25"
			>
				<div class="aspect-square w-7">
					<LogoShape />
				</div>
				<span class="select-none">Log In</span>
			</button>
		</div>

		<a href="/" class="grid place-items-center text-2xl">
			{PAGE_NAMES_MAP[page.url.pathname] || ''}
		</a>

		{#if page.url.pathname !== '/'}
			<Menu />
		{/if}
	</div>
</header>
