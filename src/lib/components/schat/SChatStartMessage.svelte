<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="flex items-start gap-4">
  <div
    class="shrink-0 w-[2.13rem] aspect-square text-black dark:text-light-100"
  >
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
  </div>
  <div class="flex flex-col pt-1">
    <div
      class="text-xl font-sand-bold mb-[2px] text-sand-green dark:text-sand-green"
    >
      Schat
    </div>
    <p class="text-xl">
      Welcome to our virtual assistant! Please note that this chat is recorded
      for quality assurance and service improvement purposes. By continuing, you
      consent to the recording and use of your interactions as outlined in our
      <button on:click={() => dispatch("policyClick")} class="underline">
        Privacy Policy
      </button>.
    </p>
  </div>
</div>
