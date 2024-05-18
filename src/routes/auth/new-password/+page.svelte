<script>
  import { goto } from "$app/navigation";

  export let data;

  // let { supabase } = data;
  // $: ({ supabase } = data);

  let password = "";

  const updatePassword = async () => {
    // const { data, error } = await supabase.auth.updateUser({ password });

    if (data) goto("/");

    // if (error) goto("/auth/login");
  };
</script>

<div class="h-[100dvh] grid place-items-center">
  <form on:submit={updatePassword} class="w-[32rem] grid gap-4">
    <input
      type="password"
      name="password"
      bind:value={password}
      class="h-12 border border-black px-4"
    />
    <button class="h-12 bg-sky-500 text-white">Reset Password</button>
    <a href="/auth/login">Log in</a>
  </form>
</div>
