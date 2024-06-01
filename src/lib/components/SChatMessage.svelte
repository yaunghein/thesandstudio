<script lang="ts">
  import { twMerge as twm } from "tailwind-merge";

  export let role: "user" | "assistant" = "assistant";
  export let content: string = `In the context of our company, "The Sand Studio" is a creative agency crafted by talented individuals from around the globe, based in Bangkok. We offer a wide range of design, development, and consultation services.\n\nIf you\'re inquiring about the material "sand," it commonly refers to granular material composed of finely divided rock and mineral particles, typically found on beaches and deserts.\n\nHow else may I assist you today?`;
  const isAI = role === "assistant";
</script>

<div class="flex items-start gap-4">
  <div
    class="shrink-0 w-[2.13rem] aspect-square text-black dark:text-light-100"
  >
    {#if isAI}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 0C17.9962 0 19.0652 7.90094 19.413 7.99357C19.7607 8.0862 24.6367 1.7782 25.4992 2.2778C26.3618 2.77588 23.3384 10.1529 23.592 10.408C23.8471 10.6632 31.2241 7.63823 31.7222 8.50076C32.2203 9.36329 25.9123 14.2408 26.0064 14.587C26.0991 14.9348 34 16.0038 34 17C34 17.9962 26.0991 19.0652 26.0064 19.413C25.9138 19.7607 32.2218 24.6367 31.7222 25.4992C31.2241 26.3618 23.8471 23.3384 23.592 23.592C23.3368 23.8471 26.3618 31.2241 25.4992 31.7222C24.6367 32.2203 19.7592 25.9123 19.413 26.0064C19.0652 26.0991 17.9962 34 17 34C16.0038 34 14.9348 26.0991 14.587 26.0064C14.2393 25.9138 9.36329 32.2218 8.50076 31.7222C7.63823 31.2241 10.6616 23.8471 10.408 23.592C10.1529 23.3368 2.77588 26.3618 2.2778 25.4992C1.77972 24.6367 8.08772 19.7592 7.99357 19.413C7.90094 19.0652 0 17.9962 0 17C0 16.0038 7.90094 14.9348 7.99357 14.587C8.0862 14.2393 1.7782 9.36329 2.2778 8.50076C2.77588 7.63823 10.1529 10.6616 10.408 10.408C10.6632 10.1529 7.63823 2.77588 8.50076 2.2778C9.36329 1.77972 14.2408 8.08772 14.587 7.99357C14.9348 7.90094 16.0038 0 17 0Z"
          fill="currentColor"
        />
      </svg>
    {:else}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.1511 29.3022C23.862 29.3022 29.3022 23.862 29.3022 17.1511C29.3022 10.4402 23.862 5 17.1511 5C10.4402 5 5 10.4402 5 17.1511C5 23.862 10.4402 29.3022 17.1511 29.3022Z"
          fill="currentColor"
        />
      </svg>
    {/if}
  </div>
  <div class="flex flex-col pt-1">
    <div
      class={twm(
        isAI
          ? "text-sand-green dark:text-sand-green"
          : "text-black dark:text-light-100",
        "text-xl font-sand-bold mb-[2px]",
      )}
    >
      {isAI ? "Schat" : "You"}
    </div>
    <p class="text-xl">
      {@html content?.replace(/\n/g, "<br>") ||
        "Error. Please contact to hi@thesandstudio.com for this error if you have some times."}
    </p>
  </div>
</div>
