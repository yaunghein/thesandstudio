<script lang="ts">
  const handleSubmit = async () => {
    const resp = await fetch("/api/send-email", { method: "POST" });
    const data = await resp.text();
    console.log({ data });
  };
</script>

<form on:submit|preventDefault class="grid gap-4 text-2xl">
  <input
    class="bg-transparent outline-none border-b-2 border-white"
    type="text"
    placeholder="Enter your name"
  />
  <button on:click={handleSubmit}>Submit</button>
</form>
