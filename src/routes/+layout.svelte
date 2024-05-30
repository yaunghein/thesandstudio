<script lang="ts">
  import "../app.css";
  import "simplebar";
  import { page } from "$app/stores";
  import gsap from "gsap";
  import "simplebar/dist/simplebar.css";
  import { onMount, onDestroy } from "svelte";
  import { invalidate, onNavigate } from "$app/navigation";
  import { browser } from "$app/environment";
  import Cursor from "$lib/components/Cursor.svelte";
  import Grains from "$lib/components/Grains.svelte";

  export let data;

  // let { supabase, session } = data;
  // $: ({ supabase, session } = data);

  // onMount(() => {
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((event: any, _session: any) => {
  //     if (_session?.expires_at !== session?.expires_at) {
  //       invalidate("supabase:auth");
  //     }
  //   });

  //   return () => subscription.unsubscribe();
  // });

  const duration = 1;
  let clickPos = { x: 0, y: 0 };
  $: clipPathIn = `circle(0% at ${clickPos.x}px ${clickPos.y}px)`;
  $: clipPathOut = `circle(150% at ${clickPos.x}px ${clickPos.y}px)`;

  const handleClick = (e: MouseEvent) => {
    clickPos = { x: e.clientX, y: e.clientY };
  };

  onMount(() => {
    if (!browser) return;
    document.addEventListener("click", handleClick);
    gsap.set(".page-wrapper", { opacity: 0 });
  });

  onDestroy(() => {
    if (!browser) return;
    document.removeEventListener("click", handleClick);
  });

  const delayNavigation = () => {
    return new Promise((res) => setTimeout(res, duration * 1000));
  };

  onNavigate(async (navigation) => {
    if (!document.startViewTransition) return;
    /**
     * adding timeline inside a setTimeout is kind of bad
     * but if i don't do this, by the time the timeline plays, clipPath In/Out variables(svelte states) are not ready
     * please let me know if you know better approach
     */
    const tl = gsap.timeline();
    setTimeout(() => {
      tl.to("#iris-container", {
        clipPath: clipPathIn,
        ease: "power4.out",
        duration,
      })
        .to("#iris-container", {
          clipPath: clipPathOut,
          ease: "power4.in",
          duration,
          delay: duration / 4,
        })
        .set("#iris-container", { clipPath: "circle(150% at 50% 100%)" });
    }, 0);

    await delayNavigation();

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  $: if ($page && browser) {
    gsap.set(".page-wrapper", { opacity: 0 });
    setTimeout(() => {
      gsap.to(".page-wrapper", { opacity: 1, delay: 0.2 });
      gsap.fromTo(
        ".fade-up",
        {
          y: "2rem",
          opacity: 0,
        },
        {
          y: "0rem",
          opacity: 1,
          stagger: 0.08,
          ease: "power4.out",
          duration: 2,
        },
      );
    }, duration * 1000);
  }
</script>

<div
  id="iris-container"
  style="clip-path: circle(150% at 50% 100%); display: block;"
>
  <slot />
</div>

{#if !data.isMobile}
  <Cursor />
  <Grains />
{/if}
