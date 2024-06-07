<script lang="ts">
  import { page } from "$app/stores";

  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", "G-SYB9G2WL7D", {
        page_title: document.title,
        page_path: $page.url.pathname,
      });
    }
  }
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SYB9G2WL7D">
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-SYB9G2WL7D");
  </script>
</svelte:head>
