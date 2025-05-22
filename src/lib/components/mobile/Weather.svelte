<script lang="ts">
	import { scale } from 'svelte/transition'
	import { browser } from '$app/environment'
	import { twMerge as twm } from 'tailwind-merge'
	import getDateAndTime from '$lib/utils/getDateAndTime'
	import { PUBLIC_WEATHER_API_KEY } from '$env/static/public'
	import Icon from '../sand-scan/Icon.svelte'
	import NewPixelBorder from './NewPixelBorder.svelte'
	// import a from "./weather.json"; // delete this file

	const LOCATIONS: Record<string, string> = {
		Bangkok: '13.6863144,100.60985628',
		London: '51.5285262,-0.2664025',
		'New York': '40.6973709,-74.144487',
		Singapore: '1.3139946,103.6794402',
		Yangon: '16.8390767,96.0167634',
		Local: ''
	}

	const ICONS: Record<string, { conditions: string[]; image: string; size: number }> = {
		'sunny-clear': {
			conditions: ['Sunny', 'Clear'],
			image: '/mobile/weather-icons/Sunny Clear.png',
			size: 100
		},
		'partly-cloudy': {
			conditions: ['Partly cloudy'],
			image: '/mobile/weather-icons/Partly Cloudy.png',
			size: 100
		},
		cloudy: {
			conditions: ['Cloudy'],
			image: '/mobile/weather-icons/Cloudy.png',
			size: 100
		},
		overcast: {
			conditions: ['Overcast'],
			image: '/mobile/weather-icons/Partly Cloudy.png',
			size: 125
		},
		'fog-mist': {
			conditions: ['Mist', 'Fog'],
			image: '/mobile/weather-icons/Fog Mist.png',
			size: 125
		},
		'freezing-fog': {
			conditions: ['Freezing fog'],
			image: '/mobile/weather-icons/Freezing Fog.png',
			size: 150
		},
		'all-rain': {
			conditions: [
				'Patchy rain nearby',
				'Patchy rain possible',
				'Patchy light rain',
				'Light rain',
				'Moderate rain at times',
				'Moderate rain',
				'Heavy rain at times',
				'Heavy rain',
				'Light rain shower',
				'Moderate or heavy rain shower',
				'Torrential rain shower',
				'Patchy light drizzle',
				'Light drizzle',
				'Thundery outbreaks in nearby'
			],
			image: '/mobile/weather-icons/All Rain.png',
			size: 100
		},
		'all-freezing-rain': {
			conditions: [
				'Light freezing rain',
				'Moderate or heavy freezing rain',
				'Patchy freezing drizzle possible',
				'Freezing drizzle',
				'Heavy freezing drizzle'
			],
			image: '/mobile/weather-icons/Freezing Rain.png',
			size: 150
		},
		'all-snow': {
			conditions: [
				'Patchy snow possible',
				'Patchy light snow',
				'Light snow',
				'Patchy moderate snow',
				'Moderate snow',
				'Patchy heavy snow',
				'Heavy snow',
				'Light snow showers'
			],
			image: '/mobile/weather-icons/Snow.png',
			size: 100
		},
		thunder: {
			conditions: ['Thundery outbreaks possible'],
			image: '/mobile/weather-icons/Thunder.png',
			size: 100
		},
		'snow-thunder': {
			conditions: ['Patchy light snow with thunder', 'Moderate or heavy snow with thunder'],
			image: '/mobile/weather-icons/Snow Thunder.png',
			size: 100
		},
		'rain-thunder': {
			conditions: ['Patchy light rain with thunder', 'Moderate or heavy rain with thunder'],
			image: '/mobile/weather-icons/Rain Thunder.png',
			size: 100
		},
		'all-sleet-blizzard-pellets': {
			conditions: [
				'Patchy sleet possible',
				'Blizzard',
				'Light sleet',
				'Moderate or heavy sleet',
				'Ice pellets',
				'Light sleet showers',
				'Moderate or heavy sleet showers',
				'Moderate or heavy snow showers',
				'Light showers of ice pellets',
				'Moderate or heavy showers of ice pellets'
			],
			image: '/mobile/weather-icons/Blizzard.png',
			size: 100
		},
		'blowing-snow': {
			conditions: ['Blowing snow'],
			image: '/mobile/weather-icons/Blowing Snow.png',
			size: 100
		}
	}

	const SIZES: Record<string, string> = {
		100: 'w-20',
		125: 'w-24',
		150: 'w-28'
	}

	let weather: any = $state()
	let icon = $derived(
		ICONS[
			Object.keys(ICONS).find((k) =>
				ICONS[k].conditions.includes(weather?.current.condition.text)
			) as string
		]
	)
	let unit: 'C' | 'F' = $state('C')
	let selectedLocation = $state('Bangkok')

	const fetchWeather = async (coordinate: string) => {
		try {
			const url = `https://api.weatherapi.com/v1/current.json?q=${coordinate}&key=${PUBLIC_WEATHER_API_KEY}`
			const resp = await fetch(url)
			const data = await resp.json()
			weather = data
		} catch (error) {
			console.log(error)
		}
	}

	$effect(() => {
		;(async () => {
			if (!browser) return
			let coordinate = ''
			if (selectedLocation === 'LOCAL') {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(async (position) => {
						const latitude = position.coords.latitude
						const longitude = position.coords.longitude
						coordinate = `${latitude},${longitude}`
						return await fetchWeather(coordinate)
					})
				} else {
					console.log(
						"Geolocation is not supported by this browser or you don't give us the permission."
					)
				}
			} else {
				coordinate = LOCATIONS[selectedLocation]
				await fetchWeather(coordinate)
			}
		})()
	})

	const time = (node: HTMLElement) => {
		const id = setInterval(() => {
			const time = getDateAndTime(selectedLocation)
			node.innerHTML = time.split(' ')[1]
		}, 1000)

		return {
			destroy() {
				clearInterval(id)
			}
		}
	}

	const day = (node: HTMLElement) => {
		const time = getDateAndTime(selectedLocation)
		node.innerHTML = time.split(' ')[0]
	}
</script>

{#if weather}
	<div class="relative w-full border-[2px] border-light-4 dark:border-light-25">
		<NewPixelBorder />
		<div class="relative flex w-full flex-col justify-between">
			<div class="relative flex w-full justify-center gap-7 p-3 pl-0">
				<div class="flex shrink-0 flex-col items-center justify-center gap-2">
					<div class="relative aspect-square w-24">
						{#if icon}
							{#key icon}
								<img
									in:scale={{ delay: 300, duration: 300, start: 0.9 }}
									out:scale={{ duration: 300, start: 0.9 }}
									src={icon.image}
									alt="Weather Icon"
									class="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 dark:invert"
								/>
							{/key}
						{/if}
					</div>
					<div class="flex gap-1 font-sand-mobile-bold text-base leading-none">
						<div>
							{unit === 'C' ? weather.current.temp_c : weather.current.temp_f}
						</div>
						<div class="flex items-center gap-1">
							<button
								onclick={() => (unit = 'C')}
								class={twm(
									unit === 'C' ? 'text-black dark:text-white' : 'text-light-80 dark:text-light-25',
									'sand-transition'
								)}
							>
								°C
							</button>
							<div class="-mt-1 h-3 w-[1px] shrink-0 bg-light-80"></div>
							<button
								onclick={() => (unit = 'F')}
								class={twm(
									unit === 'F'
										? 'text-black dark:text-white'
										: 'text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100',
									'sand-transition'
								)}
							>
								°F
							</button>
						</div>
					</div>
				</div>

				<div class="flex flex-col gap-0">
					<div class="text-2xl">
						<div class="flex gap-2">
							<span class="whitespace-nowrap text-base leading-none" use:day></span>
							<span
								class="max-w-[5rem] overflow-hidden text-ellipsis whitespace-nowrap text-base leading-none"
							>
								{weather.current.condition.text}
							</span>
							<!-- <span class="whitespace-nowrap text-base leading-none">Partly Cloudy</span> -->
						</div>
						<div class="mt-1 whitespace-nowrap leading-none">
							<span
								class="whitespace-nowrap font-sand-mobile-bold text-[5rem] leading-[0.65]"
								use:time>00:00</span
							>
						</div>
					</div>

					<div class="flex flex-col gap-0 text-2xl text-black dark:text-white">
						<div class="flex items-center gap-1">
							<span class="whitespace-nowrap text-base leading-none">Precipitation:</span>
							<span class="whitespace-nowrap font-sand-mobile-bold text-base leading-none">
								{weather.current.precip_in} in
							</span>
						</div>
						<div class="flex items-center gap-1">
							<span class="whitespace-nowrap text-base leading-none">Humidity:</span>
							<span class="whitespace-nowrap font-sand-mobile-bold text-base leading-none">
								{weather.current.humidity}%
							</span>
						</div>
						<div class="flex items-center gap-1">
							<span class="whitespace-nowrap text-base leading-none">Wind:</span>
							<span class="whitespace-nowrap font-sand-mobile-bold text-base leading-none">
								{weather.current.wind_kph} km/h
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-3 gap-3 border-t-[2px] border-light-4 p-3 dark:border-light-25">
				{#each Object.keys(LOCATIONS) as location}
					<button
						onclick={() => (selectedLocation = location)}
						class="flex items-center gap-2 leading-none"
					>
						<div
							class={twm(
								'relative h-5 w-5 shrink-0 border-[2px] border-light-4 dark:border-light-25',
								selectedLocation === location ? 'bg-light-4 dark:bg-light-100' : 'bg-transparent'
							)}
						>
							<NewPixelBorder />
						</div>
						<div
							class={twm(
								'sand-transition whitespace-nowrap text-base leading-none',
								selectedLocation === location
									? 'text-black dark:text-white'
									: 'text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100'
							)}
						>
							{location}
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}
