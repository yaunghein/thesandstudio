<script lang="ts">
  import { goto } from "$app/navigation";
  import { twMerge as twm } from "tailwind-merge";
  import LogoShape from "$lib/svgs/LogoShape.svelte";

  let password = "";
  let isChecking = false;
  let error = "";
  $: if (password) error = "";
  $: console.log({ isChecking });

  const handleSubmit = async () => {
    isChecking = true;
    const resp = await fetch("/api/temp-auth-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await resp.json();
    setTimeout(() => {
      !data.success ? (error = data.message) : goto("/");
      isChecking = false;
    }, 1000);
  };
</script>

<div class="flex flex-col items-center justify-center h-[100dvh]">
  <form on:submit|preventDefault class="flex flex-col gap-4 w-96 relative">
    <input
      bind:value={password}
      type="password"
      placeholder="Password ..."
      class={twm(
        error[0] && password[0]
          ? "border-sand-red text-sand-red placeholder:text-sand-red animate-vibrate-once"
          : "border-black dark:border-light-100 text-white dark:text-light-100",
        "appearance-none outline-none bg-transparent  text-2xl p-3 border-b-2  sand-transition",
      )}
    />
    <button
      disabled={!password}
      on:click={handleSubmit}
      class="bg-black disabled:opacity-25 sand-transition dark:bg-light-100 flex items-center justify-between px-3 py-2 pl-5 rounded-full"
    >
      <span
        class="text-2xl sand-transition {!!error
          ? 'text-sand-red'
          : 'text-light-100 dark:text-black'}"
      >
        The Sand Studio
      </span>
      <div
        class={twm(
          password[0] && !isChecking && "animate-spin-once ",
          !password[0] && "animate-spin-back-once",
          isChecking && "animate-spin",
          !!error && "text-sand-red",
          "w-10 h-10 flex items-center sand-transition",
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
