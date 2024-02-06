<script lang="ts">
  import lottie from "lottie-web";
  import { addShell } from "$lib/stores/shell";

  const playLottie = (node: HTMLDivElement, path: string) => {
    lottie.loadAnimation({
      container: node,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });
  };
</script>

<div class="grid grid-cols-2 gap-5">
  <!-- ########## SAND Scan ########## -->
  <button
    on:click={() => addShell({ id: "sand-scan", zIndex: 65 })}
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white opacity-sand group-hover:opacity-100 sand-transition"
    />
    <!-- mix-blend-multiply group-hover:mix-blend-screen dark:mix-blend-screen dark:group-hover:mix-blend-multiply -->
    <div
      class="w-28 absolute group-hover:scale-[1.4] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] group-hover:-translate-y-[125%] sand-transition"
    >
      <div
        class="mix-blend-hard-light"
        use:playLottie={"/lotties/sand-scan.json"}
      />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
    >
      SAND Scan
    </div>
  </button>

  <!-- ########## For All Thingkind ########## -->
  <a
    href="/for-all-thingkind"
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-28 absolute scale-[1.3] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-1/2 -translate-x-1/2 -translate-y-[50%] sand-transition"
    >
      <div use:playLottie={"/lotties/fatk.json"} />
    </div>
  </a>

  <!-- ########## Works ########## -->
  <a
    href="/works"
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-28 absolute scale-[1.4] group-hover:scale-[2.3] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-[50%] -translate-x-1/2 -translate-y-[50%] group-hover:-translate-x-[40%] group-hover:-translate-y-[90%] group-hover:rotate-[75deg] sand-transition"
    >
      <div use:playLottie={"/lotties/works.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
    >
      Works
    </div>
  </a>

  <!-- ########## Not Works ########## -->
  <a
    href="/not-works"
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-28 absolute scale-[1] group-hover:scale-[1.6] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-[50%] -translate-x-1/2 -translate-y-[50%] group-hover:-translate-x-[0%] group-hover:-translate-y-[90%] rotate-[180deg] sand-transition"
    >
      <img src="/lotties/not-works.gif" alt="Not Works" />
    </div>
    <div
      class="text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
    >
      Not Works
    </div>
  </a>

  <!-- ########## Archives ########## -->
  <button
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-28 absolute scale-[1.6] group-hover:scale-[2.8] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-[50%] -translate-x-1/2 -translate-y-[50%] group-hover:-translate-x-[10%] group-hover:-translate-y-[90%] sand-transition"
    >
      <div use:playLottie={"/lotties/archives.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
    >
      Archives
    </div>
  </button>

  <!-- ########## About ########## -->
  <button
    class="overflow-hidden relative group text-light-100 border-2 border-white hover:border-black dark:border-light-12 dark:hover:border-white grid place-items-center p-2 rounded-3xl select-none w-40 aspect-square sand-transition"
  >
    <div
      class="absolute inset-0 bg-light-90 dark:bg-black group-hover:bg-black dark:group-hover:bg-white opacity-sand group-hover:opacity-100 sand-transition"
    />

    <div
      class="w-28 absolute scale-[1.2] group-hover:scale-[2.2] invert dark:invert-0 dark:group-hover:invert group-hover:invert-0 top-[50%] left-[50%] -translate-x-1/2 -translate-y-[50%] group-hover:-translate-x-[6%] group-hover:-translate-y-[95%] sand-transition"
    >
      <div use:playLottie={"/lotties/about.json"} />
    </div>
    <div
      class="w-20 text-2xl text-left group-hover:leading-[1] origin-right font-sand-medium absolute left-4 bottom-3 translate-y-[100%] text-light-100 dark:group-hover:text-light-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0%] sand-transition"
    >
      About
    </div>
  </button>
</div>
