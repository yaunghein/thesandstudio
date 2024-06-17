<script lang="ts">
  import { scale } from "svelte/transition";
  import { browser } from "$app/environment";
  import { twMerge as twm } from "tailwind-merge";
  import getDateAndTime from "$lib/utils/getDateAndTime";
  import { PUBLIC_WEATHER_API_KEY } from "$env/static/public";
  import Icon from "../sand-scan/Icon.svelte";
  // import a from "./weather.json"; // delete this file

  const LOCATIONS: Record<string, string> = {
    Bangkok: "13.6863144,100.60985628",
    London: "51.5285262,-0.2664025",
    "New York": "40.6973709,-74.144487",
    Singapore: "1.3139946,103.6794402",
    Yangon: "16.8390767,96.0167634",
    LOCAL: "",
  };

  const ICONS: Record<
    string,
    { conditions: string[]; image: string; size: number }
  > = {
    "sunny-clear": {
      conditions: ["Sunny", "Clear"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881781/weather-icons-mobile/sunny-clear_u28o34.webp",
      size: 100,
    },
    "partly-cloudy": {
      conditions: ["Partly cloudy"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881780/weather-icons-mobile/partly-cloudy_qvycz6.webp",
      size: 100,
    },
    cloudy: {
      conditions: ["Cloudy"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881778/weather-icons-mobile/cloudy_y6zbdz.webp",
      size: 100,
    },
    overcast: {
      conditions: ["Overcast"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881779/weather-icons-mobile/overcast_rpzuua.webp",
      size: 125,
    },
    "fog-mist": {
      conditions: ["Mist", "Fog"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881778/weather-icons-mobile/fog-mist_hqx5gg.webp",
      size: 125,
    },
    "freezing-fog": {
      conditions: ["Freezing fog"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881779/weather-icons-mobile/freezing-fog_y1j5mc.webp",
      size: 150,
    },
    "all-rain": {
      conditions: [
        "Patchy rain nearby",
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
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881777/weather-icons-mobile/all-rain_yebx51.webp",
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
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881776/weather-icons-mobile/all-freezing-rain_hb54qn.webp",
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
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881777/weather-icons-mobile/all-snow_kvdqox.webp",
      size: 100,
    },
    thunder: {
      conditions: ["Thundery outbreaks possible"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881782/weather-icons-mobile/thunder_mlheyx.webp",
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
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881781/weather-icons-mobile/rain-thunder_vk5vca.webp",
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
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881776/weather-icons-mobile/all-sleet-blizzard-pellets_grs5la.webp",
      size: 100,
    },
    "blowing-snow": {
      conditions: ["Blowing snow"],
      image:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715881777/weather-icons-mobile/blowing-snow_dep7kx.webp",
      size: 100,
    },
  };

  const SIZES: Record<string, string> = {
    100: "w-20",
    125: "w-24",
    150: "w-28",
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
  <div class="relative w-full pr-4">
    <div class="relative flex justify-between gap-4 w-full">
      <div class="flex flex-col items-center justify-start gap-2">
        <div class="relative w-10 aspect-square">
          {#if icon}
            {#key icon}
              <img
                in:scale={{ delay: 300, duration: 300, start: 0.9 }}
                out:scale={{ duration: 300, start: 0.9 }}
                src={icon.image}
                alt="Weather Icon"
                class=" aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            {/key}
          {/if}
        </div>
        <div class="flex text-2xl leading-none gap-1">
          <div>
            {unit === "C" ? weather.current.temp_c : weather.current.temp_f}
          </div>
          <div class="flex items-center gap-1">
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
            <div class="w-[1px] h-3 shrink-0 bg-light-80 -mt-1"></div>
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

      <div class="flex flex-col gap-0">
        <div class="text-2xl">
          <div class="flex gap-2">
            <span class="leading-none whitespace-nowrap" use:time>00:00</span>
          </div>
          <div class="leading-none mt-0 whitespace-nowrap">
            {weather.current.condition.text}
          </div>
        </div>

        <div class="text-black dark:text-white text-2xl flex flex-col gap-0">
          <div class="flex items-center gap-1">
            <span class="leading-none whitespace-nowrap">Precipitation:</span>
            <span class="leading-none whitespace-nowrap"
              >{weather.current.precip_in} in</span
            >
          </div>
          <div class="flex items-center gap-1">
            <span class="leading-none whitespace-nowrap">Humidity:</span>
            <span class="leading-none whitespace-nowrap"
              >{weather.current.humidity}%</span
            >
          </div>
          <div class="flex items-center gap-1">
            <span class="leading-none whitespace-nowrap">Wind:</span>
            <span class="leading-none whitespace-nowrap"
              >{weather.current.wind_kph} km/h</span
            >
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-0">
        {#each Object.keys(LOCATIONS) as location}
          <button
            on:click={() => (selectedLocation = location)}
            class="flex items-center gap-2 leading-none"
          >
            <!-- <div
              class={twm(
                selectedLocation !== location && "opacity-0",
                "shrink-0 w-[6px] aspect-square rounded-full bg-light-10 dark:bg-light-100 sand-transition",
              )}
            /> -->
            <div class="w-5 h-5 dark:invert">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class={twm(
                  selectedLocation === location ? "opacity-100" : "opacity-25",
                  "sand-transition",
                )}
              >
                <path
                  d="M16.4237 10.2308H17.8852V11.6923H16.4237V10.2308Z"
                  fill="black"
                />
                <path
                  d="M16.4237 11.6923H17.8852V13.1538H16.4237V11.6923Z"
                  fill="black"
                />
                <path
                  d="M16.4237 13.1538H17.8852V14.6154H16.4237V13.1538Z"
                  fill="black"
                />
                <path
                  d="M14.9621 14.6154H16.4237V16.0769H14.9621V14.6154Z"
                  fill="black"
                />
                <path
                  d="M12.039 16.0769H13.5006V17.5385H12.039V16.0769Z"
                  fill="black"
                />
                <path
                  d="M9.11597 17.5385H10.5775V19H9.11597V17.5385Z"
                  fill="black"
                />
                <path
                  d="M10.5775 16.0769H12.039V17.5385H10.5775V16.0769Z"
                  fill="black"
                />
                <path
                  d="M13.5006 16.0769H14.9621V17.5385H13.5006V16.0769Z"
                  fill="black"
                />
                <path
                  d="M17.8852 8.76923H19.3467V10.2308H17.8852V8.76923Z"
                  fill="black"
                />
                <path
                  d="M1.80828 10.2308H3.26982V11.6923H1.80828V10.2308Z"
                  fill="black"
                />
                <path
                  d="M0.346741 8.76923H1.80828V10.2308H0.346741V8.76923Z"
                  fill="black"
                />
                <path
                  d="M1.80828 11.6923H3.26982V13.1538H1.80828V11.6923Z"
                  fill="black"
                />
                <path
                  d="M1.80828 13.1538H3.26982V14.6154H1.80828V13.1538Z"
                  fill="black"
                />
                <path
                  d="M3.26982 14.6154H4.73136V16.0769H3.26982V14.6154Z"
                  fill="black"
                />
                <path
                  d="M6.19289 16.0769H7.65443V17.5385H6.19289V16.0769Z"
                  fill="black"
                />
                <path
                  d="M4.73136 16.0769H6.19289V17.5385H4.73136V16.0769Z"
                  fill="black"
                />
                <path
                  d="M7.65443 16.0769H9.11597V17.5385H7.65443V16.0769Z"
                  fill="black"
                />
                <path
                  d="M6.19289 1.46154H7.65443V2.92308H6.19289V1.46154Z"
                  fill="black"
                />
                <path
                  d="M3.26982 2.92308H4.73136V4.38462H3.26982V2.92308Z"
                  fill="black"
                />
                <path
                  d="M1.80828 4.38462H3.26982V5.84615H1.80828V4.38462Z"
                  fill="black"
                />
                <path
                  d="M1.80828 5.84615H3.26982V7.30769H1.80828V5.84615Z"
                  fill="black"
                />
                <path
                  d="M1.80828 7.30769H3.26982V8.76923H1.80828V7.30769Z"
                  fill="black"
                />
                <path
                  d="M4.73136 1.46154H6.19289V2.92308H4.73136V1.46154Z"
                  fill="black"
                />
                <path
                  d="M7.65443 1.46154H9.11597V2.92308H7.65443V1.46154Z"
                  fill="black"
                />
                <path
                  d="M12.039 1.46154H13.5006V2.92308H12.039V1.46154Z"
                  fill="black"
                />
                <path
                  d="M14.9621 2.92308H16.4237V4.38462H14.9621V2.92308Z"
                  fill="black"
                />
                <path
                  d="M16.4237 4.38462H17.8852V5.84615H16.4237V4.38462Z"
                  fill="black"
                />
                <path
                  d="M16.4237 5.84615H17.8852V7.30769H16.4237V5.84615Z"
                  fill="black"
                />
                <path
                  d="M16.4237 7.30769H17.8852V8.76923H16.4237V7.30769Z"
                  fill="black"
                />
                <path
                  d="M10.5775 1.46154H12.039V2.92308H10.5775V1.46154Z"
                  fill="black"
                />
                <path d="M9.11597 0H10.5775V1.46154H9.11597V0Z" fill="black" />
                <path
                  d="M13.5006 1.46154H14.9621V2.92308H13.5006V1.46154Z"
                  fill="black"
                />
                <mask
                  id="path-2-outside-1_1293_3"
                  maskUnits="userSpaceOnUse"
                  x="5.34674"
                  y="5"
                  width="9"
                  height="9"
                  fill="black"
                >
                  <rect fill="white" x="5.34674" y="5" width="9" height="9" />
                  <path d="M12.2698 9.76923H12.8083V10.3077H12.2698V9.76923Z" />
                  <path d="M12.2698 10.3077H12.8083V10.8462H12.2698V10.3077Z" />
                  <path d="M12.2698 10.8462H12.8083V11.3846H12.2698V10.8462Z" />
                  <path d="M11.7314 11.3846H12.2698V11.9231H11.7314V11.3846Z" />
                  <path d="M10.6544 11.9231H11.1929V12.4615H10.6544V11.9231Z" />
                  <path d="M9.57751 12.4615H10.116V13H9.57751V12.4615Z" />
                  <path d="M10.116 11.9231H10.6544V12.4615H10.116V11.9231Z" />
                  <path d="M11.1929 11.9231H11.7314V12.4615H11.1929V11.9231Z" />
                  <path d="M12.8083 9.23077H13.3467V9.76923H12.8083V9.23077Z" />
                  <path d="M6.8852 9.76923H7.42366V10.3077H6.8852V9.76923Z" />
                  <path d="M6.34674 9.23077H6.8852V9.76923H6.34674V9.23077Z" />
                  <path d="M6.8852 10.3077H7.42366V10.8462H6.8852V10.3077Z" />
                  <path d="M6.8852 10.8462H7.42366V11.3846H6.8852V10.8462Z" />
                  <path d="M7.42366 11.3846H7.96213V11.9231H7.42366V11.3846Z" />
                  <path d="M8.50059 11.9231H9.03905V12.4615H8.50059V11.9231Z" />
                  <path d="M7.96213 11.9231H8.50059V12.4615H7.96213V11.9231Z" />
                  <path d="M9.03905 11.9231H9.57751V12.4615H9.03905V11.9231Z" />
                  <path d="M8.50059 6.53846H9.03905V7.07692H8.50059V6.53846Z" />
                  <path d="M7.42366 7.07692H7.96213V7.61538H7.42366V7.07692Z" />
                  <path d="M6.8852 7.61538H7.42366V8.15385H6.8852V7.61538Z" />
                  <path d="M6.8852 8.15385H7.42366V8.69231H6.8852V8.15385Z" />
                  <path d="M6.8852 8.69231H7.42366V9.23077H6.8852V8.69231Z" />
                  <path d="M7.96213 6.53846H8.50059V7.07692H7.96213V6.53846Z" />
                  <path d="M9.03905 6.53846H9.57751V7.07692H9.03905V6.53846Z" />
                  <path d="M10.6544 6.53846H11.1929V7.07692H10.6544V6.53846Z" />
                  <path d="M11.7314 7.07692H12.2698V7.61538H11.7314V7.07692Z" />
                  <path d="M12.2698 7.61538H12.8083V8.15385H12.2698V7.61538Z" />
                  <path d="M12.2698 8.15385H12.8083V8.69231H12.2698V8.15385Z" />
                  <path d="M12.2698 8.69231H12.8083V9.23077H12.2698V8.69231Z" />
                  <path d="M10.116 6.53846H10.6544V7.07692H10.116V6.53846Z" />
                  <path d="M9.57751 6H10.116V6.53846H9.57751V6Z" />
                  <path d="M11.1929 6.53846H11.7314V7.07692H11.1929V6.53846Z" />
                  <path
                    d="M12.2698 9.76923H12.8083V9.23077H12.2698V8.69231V8.15385V7.61538H11.7314V7.07692H11.1929H10.6544H10.116V6.53846H9.57751V7.07692H9.03905H8.50059H7.96213V7.61538H7.42366V8.15385V8.69231V9.23077H6.8852V9.76923H7.42366V10.3077V10.8462V11.3846H7.96213V11.9231H8.50059H9.03905H9.57751V12.4615H10.116V11.9231H10.6544H11.1929H11.7314V11.3846H12.2698V10.8462V10.3077V9.76923Z"
                  />
                </mask>
                <g
                  class={twm(
                    selectedLocation === location ? "opacity-100" : "opacity-0",
                    "sand-transition",
                  )}
                >
                  <path
                    d="M12.2698 9.76923H12.8083V10.3077H12.2698V9.76923Z"
                    fill="black"
                  />
                  <path
                    d="M12.2698 10.3077H12.8083V10.8462H12.2698V10.3077Z"
                    fill="black"
                  />
                  <path
                    d="M12.2698 10.8462H12.8083V11.3846H12.2698V10.8462Z"
                    fill="black"
                  />
                  <path
                    d="M11.7314 11.3846H12.2698V11.9231H11.7314V11.3846Z"
                    fill="black"
                  />
                  <path
                    d="M10.6544 11.9231H11.1929V12.4615H10.6544V11.9231Z"
                    fill="black"
                  />
                  <path
                    d="M9.57751 12.4615H10.116V13H9.57751V12.4615Z"
                    fill="black"
                  />
                  <path
                    d="M10.116 11.9231H10.6544V12.4615H10.116V11.9231Z"
                    fill="black"
                  />
                  <path
                    d="M11.1929 11.9231H11.7314V12.4615H11.1929V11.9231Z"
                    fill="black"
                  />
                  <path
                    d="M12.8083 9.23077H13.3467V9.76923H12.8083V9.23077Z"
                    fill="black"
                  />
                  <path
                    d="M6.8852 9.76923H7.42366V10.3077H6.8852V9.76923Z"
                    fill="black"
                  />
                  <path
                    d="M6.34674 9.23077H6.8852V9.76923H6.34674V9.23077Z"
                    fill="black"
                  />
                  <path
                    d="M6.8852 10.3077H7.42366V10.8462H6.8852V10.3077Z"
                    fill="black"
                  />
                  <path
                    d="M6.8852 10.8462H7.42366V11.3846H6.8852V10.8462Z"
                    fill="black"
                  />
                  <path
                    d="M7.42366 11.3846H7.96213V11.9231H7.42366V11.3846Z"
                    fill="black"
                  />
                  <path
                    d="M8.50059 11.9231H9.03905V12.4615H8.50059V11.9231Z"
                    fill="black"
                  />
                  <path
                    d="M7.96213 11.9231H8.50059V12.4615H7.96213V11.9231Z"
                    fill="black"
                  />
                  <path
                    d="M9.03905 11.9231H9.57751V12.4615H9.03905V11.9231Z"
                    fill="black"
                  />
                  <path
                    d="M8.50059 6.53846H9.03905V7.07692H8.50059V6.53846Z"
                    fill="black"
                  />
                  <path
                    d="M7.42366 7.07692H7.96213V7.61538H7.42366V7.07692Z"
                    fill="black"
                  />
                  <path
                    d="M6.8852 7.61538H7.42366V8.15385H6.8852V7.61538Z"
                    fill="black"
                  />
                  <path
                    d="M6.8852 8.15385H7.42366V8.69231H6.8852V8.15385Z"
                    fill="black"
                  />
                  <path
                    d="M6.8852 8.69231H7.42366V9.23077H6.8852V8.69231Z"
                    fill="black"
                  />
                  <path
                    d="M7.96213 6.53846H8.50059V7.07692H7.96213V6.53846Z"
                    fill="black"
                  />
                  <path
                    d="M9.03905 6.53846H9.57751V7.07692H9.03905V6.53846Z"
                    fill="black"
                  />
                  <path
                    d="M10.6544 6.53846H11.1929V7.07692H10.6544V6.53846Z"
                    fill="black"
                  />
                  <path
                    d="M11.7314 7.07692H12.2698V7.61538H11.7314V7.07692Z"
                    fill="black"
                  />
                  <path
                    d="M12.2698 7.61538H12.8083V8.15385H12.2698V7.61538Z"
                    fill="black"
                  />
                  <path
                    d="M12.2698 8.15385H12.8083V8.69231H12.2698V8.15385Z"
                    fill="black"
                  />
                  <path
                    d="M12.2698 8.69231H12.8083V9.23077H12.2698V8.69231Z"
                    fill="black"
                  />
                  <path
                    d="M10.116 6.53846H10.6544V7.07692H10.116V6.53846Z"
                    fill="black"
                  />
                  <path d="M9.57751 6H10.116V6.53846H9.57751V6Z" fill="black" />
                  <path
                    d="M11.1929 6.53846H11.7314V7.07692H11.1929V6.53846Z"
                    fill="black"
                  />
                  <path
                    d="M12.2698 9.76923H12.8083V9.23077H12.2698V8.69231V8.15385V7.61538H11.7314V7.07692H11.1929H10.6544H10.116V6.53846H9.57751V7.07692H9.03905H8.50059H7.96213V7.61538H7.42366V8.15385V8.69231V9.23077H6.8852V9.76923H7.42366V10.3077V10.8462V11.3846H7.96213V11.9231H8.50059H9.03905H9.57751V12.4615H10.116V11.9231H10.6544H11.1929H11.7314V11.3846H12.2698V10.8462V10.3077V9.76923Z"
                    fill="black"
                  />
                  <path
                    d="M12.2698 9.76923V9.26923H11.7698V9.76923H12.2698ZM12.8083 9.76923V10.2692H13.3083V9.76923H12.8083ZM12.2698 11.3846V11.8846H12.7698V11.3846H12.2698ZM11.7314 11.3846V10.8846H11.2314V11.3846H11.7314ZM11.7314 11.9231V12.4231H12.2314V11.9231H11.7314ZM9.57751 12.4615H9.07751V12.9615H9.57751V12.4615ZM10.116 12.4615V12.9615H10.616V12.4615H10.116ZM10.116 11.9231V11.4231H9.61597V11.9231H10.116ZM12.8083 9.23077H13.3083V8.73077H12.8083V9.23077ZM6.8852 9.76923H6.3852V10.2692H6.8852V9.76923ZM7.42366 9.76923H7.92366V9.26923H7.42366V9.76923ZM6.8852 9.23077V8.73077H6.3852V9.23077H6.8852ZM7.42366 11.3846H6.92366V11.8846H7.42366V11.3846ZM7.96213 11.3846H8.46213V10.8846H7.96213V11.3846ZM7.96213 11.9231H7.46213V12.4231H7.96213V11.9231ZM9.57751 11.9231H10.0775V11.4231H9.57751V11.9231ZM7.96213 7.07692V6.57692H7.46213V7.07692H7.96213ZM7.96213 7.61538V8.11538H8.46213V7.61538H7.96213ZM7.42366 7.61538V7.11538H6.92366V7.61538H7.42366ZM7.42366 9.23077V9.73077H7.92366V9.23077H7.42366ZM9.57751 6.53846V6.03846H9.07751V6.53846H9.57751ZM9.57751 7.07692V7.57692H10.0775V7.07692H9.57751ZM11.7314 7.07692H12.2314V6.57692H11.7314V7.07692ZM12.2698 7.61538H12.7698V7.11538H12.2698V7.61538ZM11.7314 7.61538H11.2314V8.11538H11.7314V7.61538ZM12.2698 9.23077H11.7698V9.73077H12.2698V9.23077ZM10.116 6.53846H10.616V6.03846H10.116V6.53846ZM10.116 7.07692H9.61597V7.57692H10.116V7.07692ZM12.2698 10.2692H12.8083V9.26923H12.2698V10.2692ZM12.8083 9.80769H12.2698V10.8077H12.8083V9.80769ZM12.7698 10.3077V9.76923H11.7698V10.3077H12.7698ZM12.8083 10.3462H12.2698V11.3462H12.8083V10.3462ZM12.7698 10.8462V10.3077H11.7698V10.8462H12.7698ZM12.7698 11.3846V10.8462H11.7698V11.3846H12.7698ZM11.7314 11.8846H12.2698V10.8846H11.7314V11.8846ZM12.2314 11.9231V11.3846H11.2314V11.9231H12.2314ZM10.6544 12.4231H11.1929V11.4231H10.6544V12.4231ZM10.6929 11.9231V12.4615H11.6929V11.9231H10.6929ZM11.1544 12.4615V11.9231H10.1544V12.4615H11.1544ZM9.57751 12.9615H10.116V11.9615H9.57751V12.9615ZM10.116 12.4231H10.6544V11.4231H10.116V12.4231ZM10.616 12.4615V11.9231H9.61597V12.4615H10.616ZM11.1929 12.4231H11.7314V11.4231H11.1929V12.4231ZM13.3083 9.76923V9.23077H12.3083V9.76923H13.3083ZM6.8852 10.2692H7.42366V9.26923H6.8852V10.2692ZM6.92366 9.76923V10.3077H7.92366V9.76923H6.92366ZM7.42366 9.80769H6.8852V10.8077H7.42366V9.80769ZM6.3852 9.23077V9.76923H7.3852V9.23077H6.3852ZM6.92366 10.3077V10.8462H7.92366V10.3077H6.92366ZM7.42366 10.3462H6.8852V11.3462H7.42366V10.3462ZM6.92366 10.8462V11.3846H7.92366V10.8462H6.92366ZM7.42366 11.8846H7.96213V10.8846H7.42366V11.8846ZM7.46213 11.3846V11.9231H8.46213V11.3846H7.46213ZM8.50059 12.4231H9.03905V11.4231H8.50059V12.4231ZM8.53905 11.9231V12.4615H9.53905V11.9231H8.53905ZM9.00059 12.4615V11.9231H8.00059V12.4615H9.00059ZM7.96213 12.4231H8.50059V11.4231H7.96213V12.4231ZM9.03905 12.4231H9.57751V11.4231H9.03905V12.4231ZM9.07751 11.9231V12.4615H10.0775V11.9231H9.07751ZM8.53905 6.53846V7.07692H9.53905V6.53846H8.53905ZM9.03905 6.57692H8.50059V7.57692H9.03905V6.57692ZM9.00059 7.07692V6.53846H8.00059V7.07692H9.00059ZM7.46213 7.07692V7.61538H8.46213V7.07692H7.46213ZM7.96213 7.11538H7.42366V8.11538H7.96213V7.11538ZM6.92366 7.61538V8.15385H7.92366V7.61538H6.92366ZM7.42366 7.65385H6.8852V8.65385H7.42366V7.65385ZM6.92366 8.15385V8.69231H7.92366V8.15385H6.92366ZM7.42366 8.19231H6.8852V9.19231H7.42366V8.19231ZM6.92366 8.69231V9.23077H7.92366V8.69231H6.92366ZM7.42366 8.73077H6.8852V9.73077H7.42366V8.73077ZM8.50059 6.57692H7.96213V7.57692H8.50059V6.57692ZM9.07751 6.53846V7.07692H10.0775V6.53846H9.07751ZM9.57751 6.57692H9.03905V7.57692H9.57751V6.57692ZM10.6929 6.53846V7.07692H11.6929V6.53846H10.6929ZM11.1929 6.57692H10.6544V7.57692H11.1929V6.57692ZM11.1544 7.07692V6.53846H10.1544V7.07692H11.1544ZM12.2698 7.11538H11.7314V8.11538H12.2698V7.11538ZM12.2314 7.61538V7.07692H11.2314V7.61538H12.2314ZM12.8083 7.65385H12.2698V8.65385H12.8083V7.65385ZM12.7698 8.15385V7.61538H11.7698V8.15385H12.7698ZM12.8083 8.19231H12.2698V9.19231H12.8083V8.19231ZM12.7698 8.69231V8.15385H11.7698V8.69231H12.7698ZM12.8083 8.73077H12.2698V9.73077H12.8083V8.73077ZM12.7698 9.23077V8.69231H11.7698V9.23077H12.7698ZM10.6544 6.57692H10.116V7.57692H10.6544V6.57692ZM10.616 7.07692V6.53846H9.61597V7.07692H10.616ZM10.116 6.03846H9.57751V7.03846H10.116V6.03846ZM11.7314 6.57692H11.1929V7.57692H11.7314V6.57692ZM12.8083 9.76923V8.76923H11.8083V9.76923H12.8083ZM12.8083 11.3846V12.3846H13.8083V11.3846H12.8083ZM12.2698 11.3846V10.3846H11.2698V11.3846H12.2698ZM12.2698 11.9231V12.9231H13.2698V11.9231H12.2698ZM11.7314 11.9231V10.9231H10.7314V11.9231H11.7314ZM9.57751 12.4615H10.5775V11.4615H9.57751V12.4615ZM10.116 12.4615V11.4615H9.11597V12.4615H10.116ZM10.116 13V14H11.116V13H10.116ZM9.57751 13H8.57751V14H9.57751V13ZM11.7314 12.4615V13.4615H12.7314V12.4615H11.7314ZM12.8083 9.23077H11.8083V10.2308H12.8083V9.23077ZM13.3467 9.23077H14.3467V8.23077H13.3467V9.23077ZM13.3467 9.76923V10.7692H14.3467V9.76923H13.3467ZM6.8852 9.76923H7.8852V8.76923H6.8852V9.76923ZM6.34674 9.23077V8.23077H5.34674V9.23077H6.34674ZM6.8852 9.23077V10.2308H7.8852V9.23077H6.8852ZM6.34674 9.76923H5.34674V10.7692H6.34674V9.76923ZM7.42366 11.3846H8.42366V10.3846H7.42366V11.3846ZM6.8852 11.3846H5.8852V12.3846H6.8852V11.3846ZM7.96213 11.9231H8.96213V10.9231H7.96213V11.9231ZM7.42366 11.9231H6.42366V12.9231H7.42366V11.9231ZM7.96213 12.4615H6.96213V13.4615H7.96213V12.4615ZM7.42366 7.07692V6.07692H6.42366V7.07692H7.42366ZM7.96213 7.07692V8.07692H8.96213V7.07692H7.96213ZM7.42366 7.61538V8.61538H8.42366V7.61538H7.42366ZM6.8852 7.61538V6.61538H5.8852V7.61538H6.8852ZM7.96213 6.53846V5.53846H6.96213V6.53846H7.96213ZM9.57751 6.53846V7.53846H10.5775V6.53846H9.57751ZM11.7314 7.07692H10.7314V8.07692H11.7314V7.07692ZM12.2698 7.07692H13.2698V6.07692H12.2698V7.07692ZM12.2698 7.61538H11.2698V8.61538H12.2698V7.61538ZM12.8083 7.61538H13.8083V6.61538H12.8083V7.61538ZM10.116 6.53846H9.11597V7.53846H10.116V6.53846ZM9.57751 6V5H8.57751V6H9.57751ZM10.116 6H11.116V5H10.116V6ZM11.7314 6.53846H12.7314V5.53846H11.7314V6.53846ZM11.8083 9.76923V10.3077H13.8083V9.76923H11.8083ZM11.8083 10.3077V10.8462H13.8083V10.3077H11.8083ZM11.8083 10.8462V11.3846H13.8083V10.8462H11.8083ZM12.8083 10.3846H12.2698V12.3846H12.8083V10.3846ZM11.2698 11.3846V11.9231H13.2698V11.3846H11.2698ZM12.2698 10.9231H11.7314V12.9231H12.2698V10.9231ZM11.1929 11.4615H10.6544V13.4615H11.1929V11.4615ZM9.11597 12.4615V13H11.116V12.4615H9.11597ZM10.116 12H9.57751V14H10.116V12ZM10.5775 13V12.4615H8.57751V13H10.5775ZM10.6544 11.4615H10.116V13.4615H10.6544V11.4615ZM10.7314 11.9231V12.4615H12.7314V11.9231H10.7314ZM11.7314 11.4615H11.1929V13.4615H11.7314V11.4615ZM12.8083 10.2308H13.3467V8.23077H12.8083V10.2308ZM12.3467 9.23077V9.76923H14.3467V9.23077H12.3467ZM13.3467 8.76923H12.8083V10.7692H13.3467V8.76923ZM7.8852 10.3077V9.76923H5.8852V10.3077H7.8852ZM6.34674 10.2308H6.8852V8.23077H6.34674V10.2308ZM6.8852 8.76923H6.34674V10.7692H6.8852V8.76923ZM7.34674 9.76923V9.23077H5.34674V9.76923H7.34674ZM7.8852 10.8462V10.3077H5.8852V10.8462H7.8852ZM7.42366 10.3846H6.8852V12.3846H7.42366V10.3846ZM7.8852 11.3846V10.8462H5.8852V11.3846H7.8852ZM7.96213 10.9231H7.42366V12.9231H7.96213V10.9231ZM8.42366 11.9231V11.3846H6.42366V11.9231H8.42366ZM9.03905 11.4615H8.50059V13.4615H9.03905V11.4615ZM8.50059 11.4615H7.96213V13.4615H8.50059V11.4615ZM8.96213 12.4615V11.9231H6.96213V12.4615H8.96213ZM9.57751 11.4615H9.03905V13.4615H9.57751V11.4615ZM8.50059 7.53846H9.03905V5.53846H8.50059V7.53846ZM7.42366 8.07692H7.96213V6.07692H7.42366V8.07692ZM8.42366 7.61538V7.07692H6.42366V7.61538H8.42366ZM6.8852 8.61538H7.42366V6.61538H6.8852V8.61538ZM7.8852 8.15385V7.61538H5.8852V8.15385H7.8852ZM7.8852 8.69231V8.15385H5.8852V8.69231H7.8852ZM7.8852 9.23077V8.69231H5.8852V9.23077H7.8852ZM7.96213 7.53846H8.50059V5.53846H7.96213V7.53846ZM8.96213 7.07692V6.53846H6.96213V7.07692H8.96213ZM9.03905 7.53846H9.57751V5.53846H9.03905V7.53846ZM10.6544 7.53846H11.1929V5.53846H10.6544V7.53846ZM11.7314 8.07692H12.2698V6.07692H11.7314V8.07692ZM11.2698 7.07692V7.61538H13.2698V7.07692H11.2698ZM12.2698 8.61538H12.8083V6.61538H12.2698V8.61538ZM11.8083 7.61538V8.15385H13.8083V7.61538H11.8083ZM11.8083 8.15385V8.69231H13.8083V8.15385H11.8083ZM11.8083 8.69231V9.23077H13.8083V8.69231H11.8083ZM10.116 7.53846H10.6544V5.53846H10.116V7.53846ZM9.57751 7H10.116V5H9.57751V7ZM9.11597 6V6.53846H11.116V6H9.11597ZM10.5775 6.53846V6H8.57751V6.53846H10.5775ZM11.1929 7.53846H11.7314V5.53846H11.1929V7.53846ZM10.7314 6.53846V7.07692H12.7314V6.53846H10.7314Z"
                    fill="black"
                    mask="url(#path-2-outside-1_1293_3)"
                  />
                </g>
              </svg>
            </div>
            <div
              class={twm(
                "text-2xl leading-none sand-transition",
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
