<script lang="ts">
  import { goto } from "$app/navigation";
  import { twMerge as twm } from "tailwind-merge";
  import LogoShape from "$lib/svgs/LogoShape.svelte";

  let password = "";
  let isChecking = false;
  let isSuccess = false;
  let error = "";
  $: if (password) error = "";
  $: if (password) isSuccess = false;

  const handleSubmit = async () => {
    isChecking = true;
    const resp = await fetch("/api/temp-auth-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await resp.json();
    setTimeout(() => {
      if (!data.success) {
        error = data.message;
      } else {
        isSuccess = true;
        setTimeout(() => goto("/"), 500);
      }
      isChecking = false;
    }, 1000);
  };
</script>

<div class="flex flex-col items-center justify-center h-[100dvh]">
  <form
    on:submit|preventDefault
    class="flex flex-col gap-4 w-64 sm:w-96 relative"
  >
    <input
      bind:value={password}
      type="password"
      placeholder="Password ..."
      class={twm(
        error[0] && password[0]
          ? "border-sand-red text-sand-red placeholder:text-sand-red animate-vibrate-once"
          : "border-black dark:border-light-100 text-black dark:text-white",
        "appearance-none outline-none bg-transparent text-lg sm:text-2xl sm:p-3 border-b sm:border-b-2 sand-transition rounded-none",
      )}
    />
    <button
      disabled={!password}
      on:click={handleSubmit}
      class="bg-black disabled:opacity-25 sand-transition dark:bg-light-100 flex items-center justify-between px-3 py-2 pl-5 rounded-full"
    >
      <span
        class={twm(
          "text-lg sm:text-2xl sand-transition",
          error && password && "text-sand-red",
          isSuccess && "text-sand-green",
          !error && !isSuccess && "text-light-100 dark:text-black",
        )}
      >
        The Sand Studio
      </span>
      <div
        class={twm(
          "w-7 h-7 sm:w-10 sm:h-10 flex items-center sand-transition text-white dark:text-black",
          password[0] && !isChecking && "animate-spin-once ",
          !password[0] && "animate-spin-back-once",
          isChecking && "animate-spin",
          error && password && "text-sand-red dark:text-sand-red",
          isSuccess && "text-sand-green dark:text-sand-green",
        )}
      >
        <LogoShape />
      </div>
    </button>

    <!-- {#if error}
      <p
        class="animate-vibrate-once text-base text-sand-red mb-2 absolute -bottom-10"
      >
        {error}
      </p>
    {/if} -->
  </form>
</div>
