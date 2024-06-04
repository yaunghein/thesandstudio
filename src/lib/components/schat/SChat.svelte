<script lang="ts">
  import { onMount } from "svelte";
  import { scale, fade } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import gsap from "gsap";
  import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
  import drag from "$lib/utils/drag";
  import ButtonClose from "../ButtonClose.svelte";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import { twMerge as twm } from "tailwind-merge";
  import { addShell } from "$lib/stores/shell";
  import { openContactTab } from "$lib/stores/finder";
  import SChatMessage from "./SChatMessage.svelte";
  import SChatStartMessage from "./SChatStartMessage.svelte";
  import { PUBLIC_SCHAT_INSTRUCTIONS } from "$env/static/public";

  $: shell = $OpenShells.find((shell) => shell.id === "schat");
  $: index = $OpenShells.findIndex((shell) => shell.id === "schat");

  const openPrivacyPolicy = () => {
    addShell({ id: "copyright", zIndex: 65 });
    setTimeout(() => {
      const el = document.getElementById("Privacy-Policy") as HTMLElement;
      el.click();
    }, 0);
  };

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };

  let content = "";
  let messages: any = [];
  let isAsking = false;
  let isSchatPolicyOpen = false;
  let input: HTMLInputElement;

  $: if (messages.length > 3) {
    gsap.registerPlugin(ScrollToPlugin);
    setTimeout(() => {
      const chatEl = document.getElementById("chat-container") as HTMLElement;
      const chatElHeight = chatEl!.getBoundingClientRect().height;
      const messageEls = document.querySelectorAll(".message-container");
      const messageElHeight1 =
        messageEls[messageEls.length - 1].getBoundingClientRect().height; // last message
      const messageElHeight2 =
        messageEls[messageEls.length - 2].getBoundingClientRect().height; // second last message
      const messageElHeight = messageElHeight1 + messageElHeight2;
      const isUserMessage = messages[messages.length - 1].role === "user";

      let scroll: number = 0;
      if (messageElHeight > chatElHeight && !isUserMessage) {
        const offset = messageElHeight2 * 1.8; // messageElHeight2 will be user's message here
        scroll = chatEl.scrollHeight - messageElHeight - offset;
      } else {
        scroll = chatEl.scrollHeight;
      }

      gsap.to(chatEl, {
        scrollTo: { y: scroll },
        duration: 1.5,
        ease: "expo.out",
      });
    }, 0);
  }

  const askAI = async (message: any) => {
    messages = [...messages, message];
    content = "";
    isAsking = true;

    const options = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ messages }),
    };
    const resp = await fetch("/api/ask-ai", options);
    const reply = await resp.json();
    if (!reply.success) {
      messages = [
        ...messages,
        {
          role: "assistant",
          content: `Error: ${reply.message}. Please contact to hi@thesandstudio.com for this error if you have some times.`,
        },
      ];
      isAsking = false;
      return;
    }

    messages = [...messages, { role: "assistant", content: reply.content }];
    isAsking = false;
    setTimeout(() => input.focus(), 0); // to put this task in the queue, so that when this line runs, the input will not disable
  };

  onMount(() => askAI({ role: "system", content: PUBLIC_SCHAT_INSTRUCTIONS }));
</script>

<div
  use:drag
  use:position
  in:scale={{ start: 0.9, duration: 200, easing: backOut }}
  out:scale={{ start: 0.9, duration: 200, easing: backIn }}
  class="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45.5rem] h-shell-desktop rounded-3xl text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden"
  style="z-index: {shell?.zIndex}"
>
  <div class="transparent-layer" />

  <div
    class="absolute inset-0 bottom-auto h-[5.1rem] flex gap-10 -ml-[0.9rem] opacity-sand"
  >
    {#each [...Array(100).keys()] as _}
      <div
        class="shrink-0 w-line bg-white dark:bg-light-12 h-full ml-[0.26rem]"
      />
    {/each}
  </div>
  <div
    class="absolute inset-0 top-auto h-[8.3rem] flex gap-10 -ml-[0.9rem] opacity-sand"
  >
    {#each [...Array(100).keys()] as _}
      <div
        class="shrink-0 w-line bg-white dark:bg-light-12 h-full ml-[0.26rem]"
      />
    {/each}
  </div>

  <div class="relative h-full overflow-hidden flex flex-col">
    <div class="absolute z-2 top-5 left-6">
      <ButtonClose
        on:close={() => {
          removeShell("schat");
        }}
      />
    </div>
    <div
      class="absolute z-2 top-[1.6rem] left-1/2 -translate-x-1/2 text-xl font-sand-medium"
    >
      SCHAT
    </div>
    <div class="absolute top-[1.05rem] right-4 flex gap-3">
      {#if isSchatPolicyOpen}
        <button
          on:click={() => (isSchatPolicyOpen = false)}
          class="shrink-0 w-40 h-12 rounded-2xl bg-sand-yellow grid place-items-center text-xl text-black border-2 border-white dark:border-light-12"
        >
          Back
        </button>
      {/if}
    </div>
    <div
      class="non-draggable cursor-default select-text grow mt-20 mx-3 rounded-[1.25rem] text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden bg-light-90 dark:bg-light-4 bg-opacity-75 dark:bg-opacity-75"
    >
      <div class="flex flex-col h-full p-6 pt-0 pb-0">
        <div
          id="chat-container"
          class="pb-8 grow flex flex-col gap-5 pt-6 overflow-scroll hide-scrollbar"
        >
          {#if isSchatPolicyOpen}
            <div class="flex flex-col pt-1">
              <div
                class="text-xl font-sand-bold mb-1 text-black dark:text-light-100"
              >
                Privacy & AI Disclosure
              </div>
              <p class="text-xl">
                Welcome to our virtual assistant service. Your privacy and the
                security of your data are of utmost importance to us. This
                disclosure outlines how we handle your data and the AI
                technology powering our virtual assistant.
              </p>
            </div>
            <div class="flex flex-col pt-1">
              <div
                class="text-xl font-sand-bold mb-1 text-black dark:text-light-100"
              >
                Data Recording and Usage
              </div>
              <p class="text-xl">
                Your interactions with our virtual assistant are recorded for
                quality assurance and service improvement purposes. The data
                collected from these interactions may be used to enhance our
                services, improve response accuracy, and train our AI systems.
                We are committed to protecting your privacy and ensuring that
                your data is handled securely.
              </p>
            </div>
            <div class="flex flex-col pt-1">
              <div
                class="text-xl font-sand-bold mb-1 text-black dark:text-light-100"
              >
                AI Technology
              </div>
              <p class="text-xl">
                This virtual assistant utilizes advanced artificial intelligence
                technology based on OpenAI's GPT-4 model. The AI is designed to
                provide helpful and accurate responses based on the data it has
                been trained on. However, please note that the AI may not always
                provide complete or correct information. For critical or
                sensitive information, we recommend verifying with authoritative
                sources or seeking professional advice.
              </p>
            </div>
            <div class="flex flex-col pt-1">
              <div
                class="text-xl font-sand-bold mb-1 text-black dark:text-light-100"
              >
                User Consent
              </div>
              <p class="text-xl">
                By using this chatbot, you consent to the recording and use of
                your interactions as described above. Your continued use of the
                service implies acceptance of these terms.
              </p>
            </div>
            <div class="flex flex-col pt-1">
              <div
                class="text-xl font-sand-bold mb-1 text-black dark:text-light-100"
              >
                Data Security
              </div>
              <p class="text-xl">
                We employ robust security measures to safeguard your data
                against unauthorized access and breaches. For more information
                on our data handling practices and security measures, please
                refer to our
                <button on:click={openPrivacyPolicy} class="underline">
                  Privacy Policy
                </button>.
              </p>
            </div>
            <div class="flex flex-col pt-1">
              <div
                class="text-xl font-sand-bold mb-1 text-black dark:text-light-100"
              >
                Limitations of AI
              </div>
              <p class="text-xl">
                While our AI strives to provide accurate and helpful
                information, it is not infallible. The responses generated by
                the AI are based on the data it has been trained on and may not
                reflect the most current information or specific details of your
                unique situation. For critical information, please consult
                professional or authoritative sources.
              </p>
            </div>
            <div class="flex flex-col pt-1">
              <div
                class="text-xl font-sand-bold mb-1 text-black dark:text-light-100"
              >
                Contact Information
              </div>
              <p class="text-xl">
                If you have any questions or concerns about our Privacy & AI
                Disclosure or how your data is handled, please contact us at
                <button
                  on:click={() => {
                    addShell({ id: "finder", zIndex: 65 });
                    openContactTab();
                  }}
                  class="underline"
                >
                  hi@thesandstudio.com
                </button>
                or refer to our
                <button on:click={openPrivacyPolicy} class="underline">
                  Privacy Policy
                </button>
                for more details.
              </p>
            </div>
            <div class="flex flex-col pt-1">
              <p class="text-xl">
                Thank you for using our virtual assistant service. Your trust
                and satisfaction are important to us.
              </p>
            </div>
          {:else}
            <SChatStartMessage
              on:policyClick={() => (isSchatPolicyOpen = true)}
            />
            {#each messages.slice(2) as { role, content }}
              <div
                class="message-container origin-left"
                transition:fade={{ duration: 400 }}
              >
                <SChatMessage {role} {content} />
              </div>
            {/each}
          {/if}
        </div>
        {#if !isSchatPolicyOpen}
          <form
            on:submit|preventDefault={() => askAI({ role: "user", content })}
            class="shrink-0 mt-auto mb-6 w-full rounded-full border-2 border-white dark:border-light-12 h-16 flex gap-2 items-center px-5"
          >
            <input
              bind:this={input}
              disabled={isAsking}
              type="text"
              class="appearance-none bg-transparent text-xl placeholder:text-xl w-full h-full outline-none disabled:cursor-not-allowed placeholder:text-white dark:placeholder:text-light-12"
              placeholder={isAsking && messages.length < 2
                ? "Initializing Schat..."
                : ""}
              bind:value={content}
            />
            <button
              disabled={content.length === 0}
              class={twm(
                content.length > 0
                  ? "text-light-50 dark:text-light-50"
                  : "text-white dark:text-light-12",
                "shrink-0  aspect-square sand-transition relative",
                isAsking && messages.length > 2
                  ? "w-8 text-light-4 dark:text-light-100"
                  : "w-7",
              )}
            >
              <span class="sr-only">Ask</span>
              {#if isAsking && messages.length > 2}
                <div class="absolute inset-0">
                  <div transition:scale={{ start: 0.5 }} class="animate-spin">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 0C17.9962 0 19.0652 7.90094 19.413 7.99357C19.7607 8.0862 24.6367 1.7782 25.4992 2.2778C26.3618 2.77588 23.3384 10.1529 23.592 10.408C23.8471 10.6632 31.2241 7.63823 31.7222 8.50076C32.2203 9.36329 25.9123 14.2408 26.0064 14.587C26.0991 14.9348 34 16.0038 34 17C34 17.9962 26.0991 19.0652 26.0064 19.413C25.9138 19.7607 32.2218 24.6367 31.7222 25.4992C31.2241 26.3618 23.8471 23.3384 23.592 23.592C23.3368 23.8471 26.3618 31.2241 25.4992 31.7222C24.6367 32.2203 19.7592 25.9123 19.413 26.0064C19.0652 26.0991 17.9962 34 17 34C16.0038 34 14.9348 26.0991 14.587 26.0064C14.2393 25.9138 9.36329 32.2218 8.50076 31.7222C7.63823 31.2241 10.6616 23.8471 10.408 23.592C10.1529 23.3368 2.77588 26.3618 2.2778 25.4992C1.77972 24.6367 8.08772 19.7592 7.99357 19.413C7.90094 19.0652 0 17.9962 0 17C0 16.0038 7.90094 14.9348 7.99357 14.587C8.0862 14.2393 1.7782 9.36329 2.2778 8.50076C2.77588 7.63823 10.1529 10.6616 10.408 10.408C10.6632 10.1529 7.63823 2.77588 8.50076 2.2778C9.36329 1.77972 14.2408 8.08772 14.587 7.99357C14.9348 7.90094 16.0038 0 17 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              {:else}
                <div class="absolute inset-0">
                  <div transition:scale={{ start: 0.5 }}>
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
                </div>
              {/if}
            </button>
          </form>
        {/if}
      </div>
    </div>
    <div class="shrink-0 mt-auto flex items-end justify-between">
      <div class="flex flex-col items-start gap-1 pl-[2.35rem] py-6">
        <button
          on:click={() => {
            addShell({ id: "finder", zIndex: 65 });
            openContactTab();
          }}
          class="text-xl text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          hi@thesandstudio.com
        </button>
        <button
          on:click={() => (isSchatPolicyOpen = true)}
          class="text-xl text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          Privacy & AI Disclosure
        </button>
        <div
          class="text-2xl font-sand-bold text-sand-green leading-none mt-[2px]"
        >
          SCHAT
        </div>
      </div>
      <div class="flex flex-col pr-4 pb-4">
        <div
          class="ml-2 max-w-[8rem] text-xs text-light-80 hover:text-black dark:text-light-25 dark:hover:text-light-100 leading-none sand-transition"
        >
          This chatbot is powered by OpenAI’s GPT-4o.
        </div>
        <div class="w-[9.72rem] h-[1.88rem] mt-2 dark:invert">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 156 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1915_275)">
              <path
                d="M148.411 0H7.15C6.87778 0 6.60556 0 6.32778 0C6.1 0 5.87222 0.00555556 5.63889 0.0111111C5.13333 0.0166667 4.63334 0.0611111 4.13334 0.144444C3.63889 0.227778 3.15556 0.388889 2.70556 0.616667C2.25556 0.844444 1.85 1.14444 1.48889 1.5C1.13333 1.85556 0.833335 2.26667 0.605557 2.71667C0.377779 3.16667 0.222224 3.65 0.13889 4.14444C0.0555569 4.63889 0.0111125 5.14444 0.00555691 5.64444C1.35647e-06 5.87222 1.35647e-06 6.10556 -0.0055542 6.33333V23.6667C-0.0055542 23.9 -0.0055542 24.1278 0.00555691 24.3556C0.0111125 24.8611 0.0555569 25.3611 0.13889 25.8556C0.222224 26.35 0.377779 26.8333 0.605557 27.2833C0.833335 27.7333 1.13333 28.1389 1.48889 28.4944C1.84445 28.85 2.25556 29.15 2.70556 29.3778C3.15556 29.6056 3.63334 29.7667 4.13334 29.85C4.62778 29.9333 5.13333 29.9778 5.63889 29.9833C5.87222 29.9833 6.1 29.9889 6.32778 29.9889H7.15H148.406H149.217C149.444 29.9889 149.678 29.9889 149.906 29.9833C150.406 29.9778 150.911 29.9333 151.406 29.85C151.906 29.7667 152.383 29.6056 152.839 29.3778C153.289 29.15 153.7 28.85 154.05 28.4944C154.406 28.1389 154.706 27.7333 154.939 27.2833C155.167 26.8333 155.322 26.35 155.406 25.8556C155.489 25.3611 155.533 24.8556 155.544 24.3556C155.544 24.1222 155.544 23.8944 155.544 23.6667C155.55 23.3944 155.55 23.1222 155.55 22.8444V7.15C155.55 6.87778 155.55 6.60556 155.544 6.33333C155.544 6.10556 155.544 5.87222 155.544 5.64444C155.533 5.13889 155.489 4.63889 155.406 4.14444C155.322 3.65 155.167 3.16667 154.939 2.71667C154.478 1.81667 153.744 1.07778 152.839 0.616667C152.389 0.388889 151.906 0.233333 151.406 0.144444C150.911 0.0611111 150.406 0.0166667 149.906 0.0111111C149.678 0.0111111 149.444 0.00555556 149.217 0C148.944 0 148.672 0 148.406 0L148.411 0Z"
                fill="black"
              />
              <path
                d="M6.45556 29.1447C6.22778 29.1447 6.01112 29.1447 5.78889 29.1391C5.32778 29.1335 4.86112 29.0947 4.40556 29.0169C3.97778 28.9447 3.56667 28.8058 3.17778 28.6113C2.79445 28.4169 2.44445 28.1613 2.14445 27.8613C1.83889 27.5613 1.58334 27.2113 1.38889 26.828C1.19445 26.4447 1.05556 26.028 0.988894 25.6002C0.911116 25.1391 0.872227 24.678 0.866671 24.2113C0.866671 24.0558 0.85556 23.5336 0.85556 23.5336V6.45577C0.85556 6.45577 0.861116 5.94466 0.866671 5.79466C0.872227 5.32799 0.911116 4.86688 0.988894 4.41133C1.06112 3.98355 1.19445 3.56688 1.38889 3.18355C1.58334 2.80022 1.83334 2.45022 2.13889 2.15022C2.44445 1.84466 2.79445 1.58911 3.17778 1.39466C3.56112 1.20022 3.97778 1.06688 4.4 0.994661C4.86112 0.916884 5.32223 0.877995 5.78889 0.872439L6.45556 0.861328H149.094L149.772 0.872439C150.233 0.872439 150.694 0.916884 151.144 0.994661C151.572 1.06688 151.989 1.20577 152.378 1.40022C153.144 1.79466 153.772 2.42244 154.161 3.18911C154.356 3.57244 154.489 3.98355 154.556 4.40577C154.633 4.86688 154.678 5.33355 154.683 5.80022V6.45577C154.689 6.73355 154.689 6.99466 154.689 7.26133V22.7391C154.689 23.0058 154.689 23.2724 154.683 23.5336V24.2224C154.672 24.6835 154.633 25.1391 154.556 25.5947C154.489 26.0224 154.35 26.4391 154.156 26.828C153.961 27.2058 153.706 27.5502 153.406 27.8502C153.106 28.1558 152.756 28.4113 152.372 28.6058C151.983 28.8002 151.567 28.9391 151.139 29.0113C150.683 29.0835 150.222 29.128 149.756 29.1335C149.539 29.1335 149.311 29.1391 149.094 29.1391H148.294H6.45001L6.45556 29.1447Z"
                fill="white"
              />
              <path
                d="M101.522 14.6555C101.522 11.7499 103.389 9.72217 105.978 9.72217C108.567 9.72217 110.433 11.7499 110.433 14.6555C110.433 17.5611 108.567 19.5888 105.978 19.5888C103.389 19.5888 101.522 17.5611 101.522 14.6555ZM108.722 14.6555C108.722 12.5777 107.589 11.2277 105.978 11.2277C104.367 11.2277 103.233 12.5722 103.233 14.6555C103.233 16.7388 104.367 18.0833 105.978 18.0833C107.589 18.0833 108.722 16.7388 108.722 14.6555ZM115.233 19.5888C114.328 19.5888 113.661 19.2277 113.222 18.7111V21.8444H111.622V12.4444H113.222V13.1888C113.661 12.6666 114.328 12.3111 115.233 12.3111C117.194 12.3111 118.311 13.9666 118.311 15.9499C118.311 17.9333 117.189 19.5888 115.233 19.5888ZM113.178 15.7499V16.1611C113.178 17.4555 113.922 18.1888 114.911 18.1888C116.072 18.1888 116.7 17.2833 116.7 15.9499C116.7 14.6166 116.072 13.7111 114.911 13.7111C113.922 13.7111 113.178 14.4333 113.178 15.7499ZM122.639 19.5888C120.639 19.5888 119.239 18.1111 119.239 15.9499C119.239 13.7888 120.628 12.3111 122.572 12.3111C124.517 12.3111 125.678 13.8444 125.678 15.7666V16.2999H120.772C120.894 17.4999 121.611 18.2333 122.639 18.2333C123.428 18.2333 124.05 17.8333 124.267 17.1111L125.639 17.6333C125.144 18.8611 124.039 19.5944 122.639 19.5944V19.5888ZM122.561 13.6555C121.733 13.6555 121.094 14.1499 120.856 15.0944H124.067C124.056 14.3222 123.572 13.6555 122.561 13.6555ZM126.883 19.4444V12.4444H128.483V13.1888C128.883 12.7222 129.511 12.3111 130.417 12.3111C131.883 12.3111 132.761 13.3222 132.761 14.8333V19.4444H131.161V15.2999C131.161 14.4333 130.817 13.8055 129.933 13.8055C129.211 13.8055 128.478 14.3388 128.478 15.3388V19.4444H126.878H126.883ZM137.45 9.87217H139.383L143.011 19.4444H141.289L140.461 17.2555H136.328L135.517 19.4444H133.822L137.45 9.87217ZM138.383 11.7666L136.889 15.7666H139.9L138.378 11.7666H138.383ZM145.756 9.87217V19.4444H144.05V9.87217H145.756Z"
                fill="black"
              />
              <path
                d="M97.6111 13.3834C97.8111 12.7834 97.8778 12.1501 97.8167 11.5223C97.7556 10.8945 97.55 10.289 97.2334 9.74452C96.7611 8.9223 96.0389 8.2723 95.1722 7.88341C94.3056 7.49452 93.3389 7.39452 92.4111 7.59452C91.9945 7.1223 91.4778 6.74452 90.9 6.48897C90.3222 6.23341 89.7 6.10008 89.0667 6.10564C88.1167 6.10564 87.1945 6.40008 86.4222 6.96119C85.6556 7.51675 85.0833 8.30564 84.7889 9.20564C84.1722 9.33341 83.5889 9.58897 83.0778 9.96119C82.5667 10.3334 82.1389 10.8056 81.8278 11.3556C81.35 12.1779 81.15 13.1279 81.25 14.0723C81.35 15.0167 81.7445 15.9056 82.3833 16.6112C82.1833 17.2112 82.1167 17.8445 82.1778 18.4723C82.2445 19.1001 82.4445 19.7056 82.7611 20.2501C83.2334 21.0723 83.9556 21.7223 84.8222 22.1112C85.6889 22.5001 86.6556 22.6001 87.5833 22.4001C88 22.8723 88.5167 23.2501 89.0945 23.5056C89.6722 23.7612 90.2945 23.8945 90.9278 23.889C91.8778 23.889 92.8056 23.5945 93.5722 23.0334C94.3389 22.4779 94.9111 21.689 95.2056 20.7834C95.8222 20.6556 96.4056 20.4001 96.9167 20.0279C97.4278 19.6556 97.85 19.1834 98.1667 18.6334C98.6445 17.8112 98.8445 16.8612 98.7445 15.9167C98.6445 14.9723 98.25 14.0834 97.6111 13.3834ZM90.9667 22.7223C90.0834 22.7223 89.3945 22.4501 88.8 21.9501C88.8278 21.9334 88.8722 21.9112 88.9056 21.889L92.4445 19.8445C92.5333 19.7945 92.6056 19.7223 92.6556 19.6334C92.7056 19.5445 92.7333 19.4445 92.7333 19.3445V14.3556L94.2278 15.2223C94.2278 15.2223 94.2445 15.2334 94.25 15.239C94.25 15.2445 94.2556 15.2556 94.2611 15.2612V19.3945C94.2611 21.2667 92.7 22.7279 90.9667 22.7279V22.7223ZM83.7722 19.6667C83.3833 18.9945 83.2389 18.2001 83.3778 17.4334C83.4056 17.4501 83.45 17.4779 83.4834 17.4945L87.0222 19.539C87.1111 19.589 87.2111 19.6167 87.3111 19.6167C87.4111 19.6167 87.5111 19.589 87.6 19.539L91.9222 17.0445V18.7723C91.9222 18.7723 91.9222 18.789 91.9222 18.8001C91.9222 18.8056 91.9111 18.8167 91.9056 18.8223L88.3278 20.889C87.5611 21.3279 86.6556 21.4501 85.8 21.2223C84.9445 20.9945 84.2167 20.4334 83.7778 19.6723L83.7722 19.6667ZM82.8389 11.939C83.2278 11.2612 83.8445 10.7445 84.5722 10.4779V14.689C84.5722 14.789 84.6 14.889 84.65 14.9779C84.7 15.0667 84.7722 15.139 84.8611 15.189L89.1834 17.6834L87.6889 18.5501C87.6889 18.5501 87.6722 18.5556 87.6667 18.5612C87.6556 18.5612 87.65 18.5612 87.6389 18.5612L84.0611 16.4945C83.2945 16.0501 82.7389 15.3223 82.5111 14.4723C82.2834 13.6167 82.4 12.7112 82.8389 11.9445V11.939ZM95.1334 14.8001L90.8111 12.3056L92.3056 11.4445C92.3056 11.4445 92.3222 11.439 92.3278 11.4334H92.3556L95.9333 13.5001C96.4833 13.8167 96.9278 14.2834 97.2222 14.8445C97.5167 15.4056 97.6389 16.039 97.5889 16.6667C97.5334 17.3001 97.3 17.9001 96.9167 18.4001C96.5333 18.9056 96.0167 19.289 95.4222 19.5056V15.2945C95.4222 15.1945 95.3945 15.0945 95.3445 15.0056C95.2945 14.9167 95.2222 14.8445 95.1334 14.7945V14.8001ZM96.6222 12.5556C96.6222 12.5556 96.55 12.5112 96.5167 12.4945L92.9778 10.4501C92.8889 10.4001 92.7889 10.3723 92.6889 10.3723C92.5889 10.3723 92.4834 10.4001 92.4 10.4501L88.0778 12.9445V11.2167C88.0778 11.2167 88.0778 11.2001 88.0778 11.189C88.0778 11.1834 88.0889 11.1723 88.0945 11.1667L91.6722 9.10008C92.2222 8.78341 92.8445 8.62786 93.4778 8.65564C94.1111 8.68341 94.7222 8.88897 95.2389 9.25008C95.7556 9.61119 96.1611 10.1167 96.4056 10.7001C96.65 11.2834 96.7222 11.9279 96.6167 12.5501L96.6222 12.5556ZM87.2611 15.639L85.7667 14.7723C85.7667 14.7723 85.75 14.7612 85.7445 14.7556C85.7445 14.7501 85.7389 14.739 85.7334 14.7334V10.6001C85.7334 9.96675 85.9167 9.35008 86.2556 8.81119C86.5945 8.27786 87.0778 7.85008 87.6556 7.58341C88.2278 7.31675 88.8667 7.21675 89.4945 7.29452C90.1222 7.37786 90.7167 7.63341 91.2 8.03897C91.1722 8.05564 91.1278 8.07786 91.0945 8.10008L87.5556 10.1445C87.4667 10.1945 87.3945 10.2667 87.3445 10.3556C87.2945 10.4445 87.2667 10.5445 87.2667 10.6445V15.6334L87.2611 15.639ZM88.0722 13.889L89.9945 12.7779L91.9167 13.889V16.1112L89.9945 17.2223L88.0722 16.1112V13.889Z"
                fill="black"
              />
              <path
                d="M11.5 15.7389V19.4445H9.79443V9.87225H13.6222C15.7555 9.87225 17.0889 10.8723 17.0889 12.8056C17.0889 14.7389 15.7555 15.7389 13.6222 15.7389H11.5ZM11.5 14.2723H13.5278C14.7555 14.2723 15.4055 13.7389 15.4055 12.8056C15.4055 11.8723 14.75 11.3389 13.5278 11.3389H11.5V14.2723ZM24.05 15.95C24.05 18.1223 22.65 19.5889 20.6778 19.5889C18.7055 19.5889 17.3055 18.1223 17.3055 15.95C17.3055 13.7778 18.7055 12.3111 20.6778 12.3111C22.65 12.3111 24.05 13.7778 24.05 15.95ZM18.9167 15.95C18.9167 17.3778 19.5944 18.2445 20.6778 18.2445C21.7611 18.2445 22.4389 17.3778 22.4389 15.95C22.4389 14.5223 21.7611 13.6556 20.6778 13.6556C19.5944 13.6556 18.9167 14.5223 18.9167 15.95ZM28.4333 12.4445H29.7555L31.0111 17.0834L32.25 12.4445H33.8389L31.7333 19.4445H30.3444L29.0667 14.8556L27.7889 19.4445H26.4L24.2944 12.4445H25.9333L27.2 17.0834L28.4389 12.4445H28.4333ZM37.4611 19.5889C35.4611 19.5889 34.0611 18.1111 34.0611 15.95C34.0611 13.7889 35.45 12.3111 37.3944 12.3111C39.3389 12.3111 40.5 13.8445 40.5 15.7667V16.3H35.5944C35.7167 17.5 36.4333 18.2334 37.4611 18.2334C38.25 18.2334 38.8722 17.8334 39.0889 17.1111L40.4611 17.6334C39.9667 18.8611 38.8611 19.5945 37.4611 19.5945V19.5889ZM37.3833 13.6556C36.5555 13.6556 35.9167 14.15 35.6778 15.0945H38.8889C38.8778 14.3223 38.3944 13.6556 37.3833 13.6556ZM45.6111 12.4278V14.0278C45.4111 14 45.25 13.9889 45.0222 13.9889C44.0111 13.9889 43.2333 14.6445 43.2333 15.7611V19.4389H41.6333V12.4389H43.2333V13.4778C43.5389 12.8223 44.2611 12.4 45.1555 12.4C45.3444 12.4 45.4889 12.4111 45.6111 12.4278ZM49.2722 19.5889C47.2722 19.5889 45.8722 18.1111 45.8722 15.95C45.8722 13.7889 47.2611 12.3111 49.2055 12.3111C51.15 12.3111 52.3111 13.8445 52.3111 15.7667V16.3H47.4055C47.5278 17.5 48.2444 18.2334 49.2722 18.2334C50.0611 18.2334 50.6833 17.8334 50.9 17.1111L52.2722 17.6334C51.7778 18.8611 50.6722 19.5945 49.2722 19.5945V19.5889ZM49.1944 13.6556C48.3667 13.6556 47.7278 14.15 47.4889 15.0945H50.7C50.6889 14.3223 50.2056 13.6556 49.1944 13.6556ZM56.0889 19.5889C54.1278 19.5889 53.0111 17.9334 53.0111 15.95C53.0111 13.9667 54.1333 12.3111 56.0889 12.3111C56.9944 12.3111 57.6611 12.6723 58.1 13.1889V9.8667H59.7V19.4389H58.1V18.7056C57.6611 19.2278 56.9944 19.5834 56.0889 19.5834V19.5889ZM58.1444 15.75C58.1444 14.4278 57.4 13.7111 56.4111 13.7111C55.25 13.7111 54.6222 14.6167 54.6222 15.95C54.6222 17.2834 55.25 18.1889 56.4111 18.1889C57.4 18.1889 58.1444 17.4556 58.1444 16.1611V15.75ZM67.8055 19.5889C66.9 19.5889 66.2333 19.2278 65.7944 18.7111V19.4445H64.1944V9.87225H65.7944V13.1945C66.2333 12.6723 66.9 12.3167 67.8055 12.3167C69.7667 12.3167 70.8833 13.9723 70.8833 15.9556C70.8833 17.9389 69.7611 19.5945 67.8055 19.5945V19.5889ZM65.75 15.75V16.1611C65.75 17.4556 66.4944 18.1889 67.4833 18.1889C68.6444 18.1889 69.2722 17.2834 69.2722 15.95C69.2722 14.6167 68.6444 13.7111 67.4833 13.7111C66.4944 13.7111 65.75 14.4334 65.75 15.75ZM74.9611 20.0945C74.5611 21.1611 73.95 21.8945 72.4944 21.8945C72.1611 21.8945 72.0667 21.8834 71.8389 21.8556V20.5111C72.05 20.5389 72.1722 20.55 72.3722 20.55C72.9056 20.55 73.1611 20.4056 73.3833 19.8445L73.65 19.1889L71.1055 12.4445H72.7833L74.5055 17.35L76.1833 12.4445H77.8389L74.9611 20.1V20.0945Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1915_275">
                <rect width="155.556" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
