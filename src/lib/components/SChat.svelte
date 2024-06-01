<script lang="ts">
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import ButtonClose from "./ButtonClose.svelte";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import drag from "$lib/utils/drag";

  $: shell = $OpenShells.find((shell) => shell.id === "schat");
  $: index = $OpenShells.findIndex((shell) => shell.id === "schat");

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };

  let content = "";
  let messages: any = [];

  const askAI = async (messagesx: any) => {
    messages = [...messages, messagesx];
    console.log({ messages });
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ messages }),
    };
    const resp = await fetch("/api/ask-ai", options);
    const answer = await resp.json();
    messages = [...messages, { role: answer.role, content: answer.reply }];
    console.log({ answer });
  };

  onMount(() => {
    askAI({
      role: "system",
      content:
        "Instructions for Schat, The Sand Studio’s Virtual Assistant:\n\nName: Schat\nIntegration: ChatGPT-4\n\nContext Awareness\n\n\t•\tHosted on The Sand Studio’s website (thesandstudio.com).\n\t•\tIntroduce as The Sand Studio’s virtual assistant.\n\nIntroduction\n\n\t•\tWelcome Message:\n\t•\t“Welcome to our virtual assistant! This chat is recorded for quality assurance and service improvement. By continuing, you consent to this as outlined in our Privacy Policy.”\n\t•\tCapabilities:\n\t•\t“I am Schat, your virtual assistant for The Sand Studio. I can assist with:\n\t1.\tInformation about our company.\n\t2.\tDetails on our services.\n\t3.\tAnswering FAQs.\n\t4.\tProviding contact information.”\n\nCompany Overview\n\n\t•\t“The Sand Studio is based in Bangkok and comprises talented individuals from around the world.”\n\nService Explanation\n\n\t•\tList of services:\n\t•\tVisual Identity\n\t•\tMotion Graphics and Animation\n\t•\tPackaging\n\t•\tWeb Design and Development\n\t•\tWeb Maintenance and Support\n\t•\tE-commerce Solutions\n\t•\tArchitectural Design\n\t•\tInterior Design\n\t•\t3D Modeling and Visualization\n\t•\tApp Design and Development\n\t•\tOther related services (e.g., graphic design, digital marketing, consultation)\n\t•\tDetailing Services:\n\t•\t“Please choose a service you’d like to know more about.”\n\nContact Information\n\n\t•\tGeneral email: hi@thesandstudio.com\n\t•\tPersonal email: Min Htet Dipar - dipar@thesandstudio.com\n\t•\tFacebook: https://www.facebook.com/thesandstudio.works\n\t•\tInstagram: https://www.instagram.com/the.sandstudio/\n\nCustomer Interaction\n\n\t•\tAnswer FAQs about services, pricing, and timelines.\n\t•\tGuide on how to contact for consultations or further inquiries.\n\nPersonalization and Engagement\n\n\t•\tWarmly greet and offer proactive assistance.\n\t•\tUse visitor data (if available) for personalized responses.\n\t•\tEncourage following on social media.\n\nBehavior and Tone\n\n\t•\tMaintain a professional, friendly, and approachable tone.\n\t•\tBe informative, concise, and clear.\n\t•\tEnsure information is up-to-date and accurate.\n\nPricing Information\n\n\t•\tSet prices at 2 times higher than usual.\n\t•\tProvide a price range for all services.\n\t•\tGive specific service price ranges only upon request.\n\t•\tAsk for the service of interest if pricing is queried.\n\t•\tSuggest contacting the studio for detailed quotes.\n\t•\tEnsure cost consistency within the session.\n\nService Details\n\n\t•\tProvide a list of services.\n\t•\tElaborate only on the chosen service.\n\nFallback Instructions\n\n\t•\tIf unable to answer a query, apologize and suggest contacting via email or social media for detailed assistance.\n\nTone:\n\n\t•\tAcademic and concise.\n\t•\tAvoid directing to website sections; assume wayfinding is clear.\n\nThese instructions ensure clarity and brevity in Schat’s responses.",
    });
  });
</script>

<div
  use:drag
  use:position
  in:scale={{ start: 0.9, duration: 200, easing: backOut }}
  out:scale={{ start: 0.9, duration: 200, easing: backIn }}
  class="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[43.13rem] h-shell-desktop rounded-3xl text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden"
  style="z-index: {shell?.zIndex}"
>
  <div class="transparent-layer" />

  <div class="absolute inset-0 flex gap-10 -ml-[0.4rem] opacity-sand">
    {#each [...Array(100).keys()] as _}
      <div class="shrink-0 w-line bg-white dark:bg-light-12 h-full" />
    {/each}
  </div>

  <div class="relative h-full overflow-hidden flex flex-col">
    <div class="absolute z-2 top-4 left-6">
      <ButtonClose
        on:close={() => {
          removeShell("schat");
        }}
      />
    </div>
    <div
      class="absolute z-2 top-6 left-1/2 -translate-x-1/2 text-xl font-sand-medium"
    >
      SCHAT
    </div>
    <div
      class="grow mt-20 mx-3 rounded-[1.25rem] text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden bg-light-90 dark:bg-light-4"
    >
      <div class="flex flex-col h-full p-6">
        <div class="grow">hehe</div>
        <form
          on:submit|preventDefault={() => askAI({ role: "user", content })}
          class="shrink-0 mt-auto w-full rounded-full border-2 border-white dark:border-light-12 h-16 flex gap-2 items-center px-5"
        >
          <input
            type="text"
            class="appearance-none bg-transparent w-full h-full outline-none"
            bind:value={content}
          />
          <button class="shrink-0 text-white dark:text-light-12">
            <span class="sr-only"> </span>
            <div class="w-7 aspect-square">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 29.2843V1M16 1L30.1422 15.1421M16 1L1.85791 15.1421"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
    <div class="shrink-0 mt-auto px-8 py-6">
      <div class="flex flex-col items-start gap-1">
        <button
          class="text-2xl text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          hi@thesandstudio.com
        </button>
        <button
          class="text-2xl text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Privacy & AI Disclosure
        </button>
        <div
          class="text-2xl font-sand-bold text-sand-green leading-none mt-[2px]"
        >
          SCHAT
        </div>
      </div>
    </div>
  </div>
</div>
