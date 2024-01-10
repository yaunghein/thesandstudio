<script>
  import IconWeather from "./IconWeather.svelte";
</script>

<div
  class="absolute bottom-[3.75rem] left-[3.75rem] dark:text-light-100 bg-light-90 dark:bg-light-20 border-3 border-light-95 dark:border-light-25 rounded-3xl p-6"
>
  <div class="flex gap-10">
    <div class="flex flex-col items-center justify-end">
      <div class="w-44 aspect-square -mt-3">
        <IconWeather />
      </div>
      <div class="flex text-5xl leading-none gap-2">
        <div>35</div>
        <div class="flex items-center gap-2">
          <button class="text-light-10 dark:text-light-100">°C</button>
          <div class="w-[0.25rem] h-10 shrink-0 bg-light-50 -mt-1"></div>
          <button class="text-light-50">°F</button>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-0">
      <div class="text-[1.375rem]">
        <div class="flex gap-2">
          <span class="leading-none">Monday</span>
          <span class="leading-none">23:00</span>
        </div>
        <div class="leading-none mt-2">Mostly Cloudy</div>
      </div>

      <div class="text-light-50 text-[1.375rem] mt-auto flex flex-col gap-2">
        <div class="flex items-center gap-1">
          <span class="leading-none">Precipitation:</span>
          <span class="leading-none">0%</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="leading-none">Humidity:</span>
          <span class="leading-none">78%</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="leading-none">Wind:</span>
          <span class="leading-none">6 km/h</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <button class="flex items-center gap-2">
        <div
          class="shrink-0 w-[6px] aspect-square rounded-full bg-light-10 dark:bg-light-100"
        />
        <div class="leading-none text-[1.375rem]">Bangkok</div>
      </button>
      <button class="flex items-center gap-2">
        <div
          class="shrink-0 w-[6px] aspect-square rounded-full bg-light-10 opacity-0"
        />
        <div class="leading-none text-[1.375rem] text-light-50">London</div>
      </button>
      <button class="flex items-center gap-2">
        <div
          class="shrink-0 w-[6px] aspect-square rounded-full bg-light-10 opacity-0"
        />
        <div class="leading-none text-[1.375rem] text-light-50">New York</div>
      </button>
      <button class="flex items-center gap-2">
        <div
          class="shrink-0 w-[6px] aspect-square rounded-full bg-light-10 opacity-0"
        />
        <div class="leading-none text-[1.375rem] text-light-50">Singapore</div>
      </button>
      <button class="flex items-center gap-2">
        <div
          class="shrink-0 w-[6px] aspect-square rounded-full bg-light-10 opacity-0"
        />
        <div class="leading-none text-[1.375rem] text-light-50">Yangon</div>
      </button>
      <button class="flex items-center gap-2">
        <div
          class="shrink-0 w-[6px] aspect-square rounded-full bg-light-10 opacity-0"
        />
        <div class="leading-none text-[1.375rem] text-light-50">LOCAL</div>
      </button>
    </div>
  </div>
</div>
