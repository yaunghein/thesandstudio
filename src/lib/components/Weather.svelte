<script lang="ts">
  import { onMount } from "svelte";
  import { twMerge as twm } from "tailwind-merge";
  import getDateAndTime from "$lib/utils/getDateAndTime";
  import { PUBLIC_WEATHER_API_KEY } from "$env/static/public";
  import IconWeather from "$lib/svgs/IconWeather.svelte";
  // import a from "./weather.json"; // delete this file

  const LOCATIONS: Record<string, string> = {
    Bangkok: "13.6863144,100.60985628",
    London: "51.5285262,-0.2664025",
    "New York": "40.6973709,-74.144487",
    Singapore: "1.3139946,103.6794402",
    Yangon: "16.8390767,96.0167634",
    LOCAL: "",
  };

  let weather: any;
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

  $: (() => {
    onMount(async () => {
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
    });
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
      <div class="flex flex-col items-center justify-start">
        <div class="w-24 aspect-square -mt-3">
          <IconWeather />
        </div>
        <div class="flex text-4xl leading-none gap-2">
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
                "transition",
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
                  : "text-light-80 dark:text-light-25",
                "transition",
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
                  : "text-light-80 dark:text-light-25",
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
