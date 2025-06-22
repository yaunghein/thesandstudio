<script>
	import { twMerge as twm } from 'tailwind-merge'
</script>

<section
	class="flex h-[calc(100dvh-3.6rem)] items-end bg-black leading-[1.5] text-white sm:h-[calc(100dvh-11.5rem)]"
>
	<div class="w-full">
		<div
			class="w-full grid-cols-12 gap-4 px-5 py-8 sm:grid sm:gap-[2rem] sm:px-[4rem] sm:py-[1.6rem]"
		>
			<div class="col-span-4 hidden sm:block"></div>
			<div class="col-span-6 grid grid-cols-2 gap-[2rem] sm:grid-cols-6">
				<div class="col-span-2 flex flex-col items-start gap-0 sm:col-span-4">
					<h1 class="text-[1.75rem] sm:text-[7.6rem]">Contact</h1>
				</div>
			</div>
		</div>

		<div
			class="grid w-full gap-[2rem] border-t border-white/30 px-5 pb-24 pt-8 sm:grid-cols-12 sm:px-[4rem] sm:pb-[18.5rem] sm:pt-[4.25rem]"
		>
			<div class="col-span-4 hidden sm:block"></div>
			<div class="col-span-6 grid grid-cols-2 gap-4 sm:grid-cols-6 sm:gap-[2rem]">
				<div class="flex flex-col items-start gap-0 sm:col-span-4">
					<div class="text-sm sm:text-[1.6rem]">Hannah</div>
					<div class="text-sm sm:text-[1.6rem]">Hnin Myat Noe Oo</div>
				</div>
				<div class="sm:col-span-2">
					<div class="text-sm sm:text-[1.6rem]">Architect</div>
					<div class="text-sm sm:text-[1.6rem]">Interior Designer</div>
				</div>
			</div>
		</div>

		<div
			class="w-full grid-cols-12 gap-4 border-t border-white/30 px-5 pb-8 pt-4 sm:grid sm:gap-[2rem] sm:px-[4rem] sm:py-[4.25rem]"
		>
			<div class="col-span-4 hidden sm:block"></div>
			<div class="col-span-6 grid grid-cols-2 gap-4 sm:grid-cols-6 sm:gap-[2rem]">
				<div class="col-span-4 flex flex-col items-start gap-0">
					<a href="tel:+66614464660" class="text-sm sm:text-[1.6rem]">+66 61446 4660</a>
					<a href="mailto:hnin@thesandstudio.com" class="text-sm sm:text-[1.6rem]">
						hnin@thesandstudio.com
					</a>
				</div>
			</div>
		</div>

		<div
			class="w-full grid-cols-12 gap-[2rem] border-t border-white/30 px-5 pb-8 pt-4 sm:grid sm:px-[4rem] sm:py-[4.25rem]"
		>
			<div class="col-span-4 hidden sm:block"></div>
			<div class="col-span-6 grid grid-cols-2 gap-4 sm:grid-cols-6 sm:gap-[2rem]">
				<div class="flex items-center gap-6 sm:col-span-4">
					<a href="/" class="text-sm underline underline-offset-4 sm:text-[1.6rem]">IG</a>
					<a href="/" class="text-sm underline underline-offset-4 sm:text-[1.6rem]">LINE</a>
				</div>
				<div class="sm:col-span-2">
					<a href="/" class="text-sm underline underline-offset-4 sm:text-[1.6rem]"
						>Visit the Sand Studio</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
