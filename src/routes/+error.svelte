<script lang="ts">
  import { page } from "$app/stores";
  import AppShell from "$lib/components/AppShell.svelte";
</script>

<AppShell>
  <div class="grid place-items-center h-full">
    {#if $page.status === 404}
      <div class="text-center">
        <div>{$page.status}</div>
        <div>{$page.error?.message}</div>
      </div>
    {:else}
      <div class="text-center">
        <div>{$page.status}</div>
        <div>{$page.error?.message}</div>
      </div>
    {/if}
  </div>
</AppShell>
