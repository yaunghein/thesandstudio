<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { invalidate, onNavigate } from "$app/navigation";
  import gsap from "gsap";
  import Cursor from "$lib/components/Cursor.svelte";
  import Grains from "$lib/components/Grains.svelte";

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event: any, _session: any) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => subscription.unsubscribe();
  });

  const delayNavigation = () => {
    return new Promise((res) => setTimeout(res, 1000));
  };

  onNavigate(async (navigation) => {
    if (!document.startViewTransition) return;

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power4.inOut" },
    });
    tl.to("#reveal", { height: "100%" }).to("#reveal", {
      height: "0%",
      delay: 1,
    });

    await delayNavigation();

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <title>SAND Studio</title>
</svelte:head>

<slot />
<Cursor />
<Grains />
<div
  id="reveal"
  class="fixed z-[1000000000] top-0 left-0 right-0 w-full h-0 bg-light-100 dark:bg-light-10 sand-transition"
/>
