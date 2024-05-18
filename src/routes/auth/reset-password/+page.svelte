<script>
  export let data;

  // let { supabase } = data;
  // $: ({ supabase } = data);

  let email = "";
  let isSent = false;

  const sendPasswordResetLink = async () => {
    // await supabase.auth.resetPasswordForEmail(email, {
    //   redirectTo: "http://localhost:5173/auth/callback?next=/auth/new-password",
    // });
    // isSent = true;
  };
</script>

<div class="h-[100dvh] grid place-items-center">
  <form on:submit={sendPasswordResetLink} class="w-[32rem] grid gap-4">
    <input
      type="email"
      name="email"
      bind:value={email}
      class="h-12 border border-black px-4"
    />
    <button class="h-12 bg-sky-500 text-white">Send Password Reset Link</button>
    <a href="/auth/login">Log in</a>
    {#if isSent}
      <p class="text-green-600 font-sand-bold">Password reset link sent.</p>
    {/if}
  </form>
</div>
