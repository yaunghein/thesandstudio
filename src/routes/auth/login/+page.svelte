<script lang="ts">
  import { goto } from "$app/navigation";

  export let data;

  let { supabase } = data;
  $: ({ supabase } = data);

  let email = "";
  let password = "";

  const handleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data) goto("/");

    if (error) goto("/auth/login");
  };
</script>

<div class="h-[100dvh] grid place-items-center">
  <form on:submit={handleSignIn} class="w-[32rem] grid gap-4">
    <input
      name="email"
      bind:value={email}
      class="h-12 border border-black px-4"
    />
    <input
      type="password"
      name="password"
      bind:value={password}
      class="h-12 border border-black px-4"
    />
    <button class="h-12 bg-sky-500 text-white">Log in</button>
    <div class="flex items-center justify-between">
      <a href="/auth/signup">Sign up</a>
      <a href="/auth/reset-password">Forgot password?</a>
    </div>
  </form>
</div>
