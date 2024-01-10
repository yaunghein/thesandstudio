<script lang="ts">
  export let data;

  let { supabase } = data;
  $: ({ supabase } = data);

  let email = "";
  let password = "";

  const handleSignUp = async () => {
    const data = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
</script>

<div class="h-[100dvh] grid place-items-center">
  <form on:submit={handleSignUp} class="w-[32rem] grid gap-4">
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
    <button class="h-12 bg-sky-500 text-white">Sign up</button>
    <a href="/auth/login">Log in</a>
  </form>
</div>
