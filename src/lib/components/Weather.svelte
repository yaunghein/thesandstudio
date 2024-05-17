<script lang="ts">
  import { scale } from "svelte/transition";
  import { browser } from "$app/environment";
  import { twMerge as twm } from "tailwind-merge";
  import getDateAndTime from "$lib/utils/getDateAndTime";
  import { PUBLIC_WEATHER_API_KEY } from "$env/static/public";
  // import a from "./weather.json"; // delete this file

  const LOCATIONS: Record<string, string> = {
    Bangkok: "13.6863144,100.60985628",
    London: "51.5285262,-0.2664025",
    "New York": "40.6973709,-74.144487",
    Singapore: "1.3139946,103.6794402",
    Yangon: "16.8390767,96.0167634",
    LOCAL: "",
  };

  const SIZES: Record<string, string> = {
    100: "w-[4.5rem]",
    125: "w-24",
    150: "w-28",
  };

  const MARGIN_TOPS: Record<string, string> = {
    100: "-mt-3",
    125: "-mt-5",
    150: "-mt-3",
  };

  const ICONS: Record<
    string,
    { conditions: string[]; image: string; size: number }
  > = {
    "sunny-clear": {
      conditions: ["Sunny", "Clear"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881624/weather-icons/sunny-clear_axxrgx.webp",
      size: 100,
    },
    "partly-cloudy": {
      conditions: ["Partly cloudy"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881623/weather-icons/partly-cloudy_en5jdk.webp",
      // "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881623/weather-icons/overcast_r8j36z.webp",
      // "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881620/weather-icons/all-freezing-rain_reta7o.webp",
      size: 100,
      // size: 125,
      // size: 150,
    },
    cloudy: {
      conditions: ["Cloudy"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881621/weather-icons/cloudy_pd0fcc.webp",
      size: 100,
    },
    overcast: {
      conditions: ["Overcast"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881623/weather-icons/overcast_r8j36z.webp",
      size: 125,
    },
    "fog-mist": {
      conditions: ["Mist", "Fog"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881622/weather-icons/fog-mist_vspnpu.webp",
      size: 125,
    },
    "freezing-fog": {
      conditions: ["Freezing fog"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881622/weather-icons/freezing-fog_zlsszg.webp",
      size: 150,
    },
    "all-rain": {
      conditions: [
        "Patchy rain possible",
        "Patchy light rain",
        "Light rain",
        "Moderate rain at times",
        "Moderate rain",
        "Heavy rain at times",
        "Heavy rain",
        "Light rain shower",
        "Moderate or heavy rain shower",
        "Torrential rain shower",
        "Patchy light drizzle",
        "Light drizzle",
      ],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881620/weather-icons/all-rain_xuo3jn.webp",
      size: 100,
    },
    "all-freezing-rain": {
      conditions: [
        "Light freezing rain",
        "Moderate or heavy freezing rain",
        "Patchy freezing drizzle possible",
        "Freezing drizzle",
        "Heavy freezing drizzle",
      ],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881620/weather-icons/all-freezing-rain_reta7o.webp",
      size: 150,
    },
    "all-snow": {
      conditions: [
        "Patchy snow possible",
        "Patchy light snow",
        "Light snow",
        "Patchy moderate snow",
        "Moderate snow",
        "Patchy heavy snow",
        "Heavy snow",
        "Light snow showers",
      ],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881621/weather-icons/all-snow_lveczp.webp",
      size: 100,
    },
    thunder: {
      conditions: ["Thundery outbreaks possible"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881625/weather-icons/thunder_nctdfs.webp",
      size: 100,
    },
    "snow-thunder": {
      conditions: [
        "Patchy light snow with thunder",
        "Moderate or heavy snow with thunder",
      ],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881624/weather-icons/snow-thunder_dgwoyz.webp",
      size: 100,
    },
    "rain-thunder": {
      conditions: [
        "Patchy light rain with thunder",
        "Moderate or heavy rain with thunder",
      ],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881624/weather-icons/rain-thunder_eys85o.webp",
      size: 100,
    },
    "all-sleet-blizzard-pellets": {
      conditions: [
        "Patchy sleet possible",
        "Blizzard",
        "Light sleet",
        "Moderate or heavy sleet",
        "Ice pellets",
        "Light sleet showers",
        "Moderate or heavy sleet showers",
        "Moderate or heavy snow showers",
        "Light showers of ice pellets",
        "Moderate or heavy showers of ice pellets",
      ],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881620/weather-icons/all-sleet-blizzard-pellets_jbof6i.webp",
      size: 100,
    },
    "blowing-snow": {
      conditions: ["Blowing snow"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881621/weather-icons/blowing-snow_kprzge.webp",
      size: 100,
    },
  };

  let weather: any;
  $: icon =
    ICONS[
      Object.keys(ICONS).find((k) =>
        ICONS[k].conditions.includes(weather?.current.condition.text),
      ) as string
    ];
  let unit: "C" | "F" = "C";
  let selectedLocation = "Bangkok";

  const fetchWeather = async (coordinate: string) => {
    try {
      const url = `https://api.weatherapi.com/v1/current.json?q=${coordinate}&key=${PUBLIC_WEATHER_API_KEY}`;
      const resp = await fetch(url);
      const data = await resp.json();
      weather = data;
    } catch (error) {
      console.log(error);
    }
  };

  $: (async () => {
    if (!browser) return;
    let coordinate = "";
    if (selectedLocation === "LOCAL") {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          coordinate = `${latitude},${longitude}`;
          return await fetchWeather(coordinate);
        });
      } else {
        console.log(
          "Geolocation is not supported by this browser or you don't give us the permission.",
        );
      }
    } else {
      coordinate = LOCATIONS[selectedLocation];
      await fetchWeather(coordinate);
    }
  })();

  const time = (node: HTMLElement) => {
    const id = setInterval(() => {
      const time = getDateAndTime(selectedLocation);
      node.innerHTML = time;
    }, 1000);

    return {
      destroy() {
        clearInterval(id);
      },
    };
  };
</script>

{#if weather}
  <div class="relative">
    <div class="relative flex gap-10">
      <div class="flex flex-col items-center justify-start gap-2">
        <div class="w-28 aspect-square overflow-hidden -mt-5 relative">
          {#key icon}
            <img
              in:scale={{ delay: 300, duration: 300, start: 0.9 }}
              out:scale={{ duration: 300, start: 0.9 }}
              src={icon.image}
              alt="Weather Icon"
              class="{SIZES[
                icon.size
              ]} aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          {/key}
        </div>
        <div class="flex text-4xl leading-none gap-2 {MARGIN_TOPS[icon.size]}">
          <div>
            {unit === "C" ? weather.current.temp_c : weather.current.temp_f}
          </div>
          <div class="flex items-center gap-2">
            <button
              on:click={() => (unit = "C")}
              class={twm(
                unit === "C"
                  ? "text-black dark:text-white"
                  : "text-light-80 dark:text-light-25",
                "sand-transition",
              )}
            >
              °C
            </button>
            <div class="w-[0.25rem] h-8 shrink-0 bg-light-80 -mt-1"></div>
            <button
              on:click={() => (unit = "F")}
              class={twm(
                unit === "F"
                  ? "text-black dark:text-white"
                  : "text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100",
                "sand-transition",
              )}
            >
              °F
            </button>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="text-[1.375rem]">
          <div class="flex gap-2">
            <span class="leading-none" use:time>00:00</span>
          </div>
          <div class="leading-none mt-2">{weather.current.condition.text}</div>
        </div>

        <div
          class="text-black dark:text-white text-[1.375rem] flex flex-col gap-2"
        >
          <div class="flex items-center gap-1">
            <span class="leading-none">Precipitation:</span>
            <span class="leading-none">{weather.current.precip_in} in</span>
          </div>
          <div class="flex items-center gap-1">
            <span class="leading-none">Humidity:</span>
            <span class="leading-none">{weather.current.humidity}%</span>
          </div>
          <div class="flex items-center gap-1">
            <span class="leading-none">Wind:</span>
            <span class="leading-none">{weather.current.wind_kph} km/h</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        {#each Object.keys(LOCATIONS) as location}
          <button
            on:click={() => (selectedLocation = location)}
            class="flex items-center gap-2 leading-none"
          >
            <div
              class={twm(
                selectedLocation !== location && "opacity-0",
                "shrink-0 w-[6px] aspect-square rounded-full bg-light-10 dark:bg-light-100 sand-transition",
              )}
            />
            <div
              class={twm(
                "text-[1.375rem] sand-transition",
                selectedLocation === location
                  ? "text-black dark:text-white"
                  : "text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100",
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
