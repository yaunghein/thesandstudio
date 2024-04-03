<script lang="ts">
  import { browser } from "$app/environment";
  import { scale } from "svelte/transition";
  import gsap from "gsap";
  import { twMerge as twm } from "tailwind-merge";
  import ContactFormTubeAPhone from "$lib/components/mobile/ContactFormTubeAPhone.svelte";
  import ContactFormUpload from "$lib/svgs/ContactFormUpload.svelte";
  import Lock from "$lib/svgs/mobile/Lock.svelte";
  import LogoShape from "./LogoShape.svelte";
  import {
    formSchema,
    filesToBase64,
    transformZodErrors,
  } from "$lib/utils/form";
  import type { FormInputs } from "$lib/utils/form";
  import PixelBorder from "./PixelBorder.svelte";

  export let swiperIndex: number = 0;

  const defaults = { ease: "power4.inOut", duration: 1 };

  let openTubeTl: any;
  $: if (swiperIndex === 3 && browser) {
    if (openTubeTl) {
      openTubeTl.restart();
    } else {
      openTubeTl = gsap.timeline({ defaults });
      openTubeTl
        .to("#tube", { y: "0%" })
        .from("#paper-wrapper", { width: "7.3rem" }, "<50%");
    }
  } else if (browser && swiperIndex !== 3) {
    openTubeTl?.reverse();
  }

  const initialFormInputs: FormInputs = {
    name: "",
    email: "",
    message: "",
    attachments: null,
  };
  let formInputs = { ...initialFormInputs };
  let formErrors: any;
  let formState: "idel" | "locked" | "sending" = "idel";

  const handleAttachmentChange = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    formInputs.attachments = input.files;
  };

  const lock = () => {
    const validatedInputs: any = formSchema.safeParse(formInputs);
    if (!validatedInputs.success) {
      formErrors = transformZodErrors(validatedInputs.error);
      return;
    }
    formState = "locked";
    gsap.to("#paper-wrapper", { width: "7.3rem", ...defaults });
  };

  const unlock = () => {
    formState = "idel";
    gsap.to("#paper-wrapper", { width: "76vw", ...defaults });
  };

  const sendTheTube = () => {
    const tl = gsap.timeline({
      defaults,
      onUpdate: () => {
        if (tl.progress() >= 0.4 && formInputs?.name) {
          formInputs = { ...initialFormInputs };
        }
      },
    });
    tl.to("#tube", { y: "-115%" })
      .set("#tube", { y: "115%" })
      .to("#tube", { y: "0%" })
      .to("#paper-wrapper", { width: "76vw" }, "<50%");
  };

  const submit = async () => {
    sendTheTube();
    formState = "sending";

    const { name, email, message, attachments } = formInputs;
    const respSand = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: `Website Form Submission: ${name}`,
        sender: { name, email },
        to: { name: "The SAND Studio", email: "yan@thesandstudio.com" }, // change to hi@
        htmlContent: `<html><body><div>${name}</div><div>${email}</div><div>${message}</div></body></html>`,
        attachments: attachments ? await filesToBase64(attachments) : null,
      }),
    });
    if (!respSand.ok) {
      const error = await respSand.json();
      console.log({ error: error.message });
      formState = "idel";
      return;
    }

    const respSender = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        subject: `The SAND Studio Received Your Message.`,
        sender: { name: "The SAND Studio", email: "yan@thesandstudio.com" }, // change to hi@
        to: { name, email },
        htmlContent: `<html><body><div>Hi, ${name},</div><div>We received your message.</div><div>${name}</div><div>${email}</div><div>${message}</div></body></html>`,
        attachments: attachments ? await filesToBase64(attachments) : null,
      }),
    });
    if (!respSender.ok) {
      const error = await respSender.json();
      console.log({ error: error.message });
      formState = "idel";
      return;
    }

    formState = "idel";
  };

  const handleSubmit: Record<string, () => void> = {
    idel: lock,
    locked: submit,
  };
</script>

<div class="swiper-slide h-full shrink-0 px-4">
  <div class="h-full w-full">
    <form
      on:submit|preventDefault
      class="relative text-xl h-[calc(100dvh-10rem)] w-full flex flex-col"
    >
      <PixelBorder />
      <div
        id="tube"
        class="px-1 pt-12 ml-auto w-[200px] h-[91%] flex flex-col translate-y-[115%]"
      >
        <div class="flex">
          <ContactFormTubeAPhone />
        </div>

        <div
          class="grow relative w-36 mx-auto bg-opacity-30 border-x-2 sm:border-0 border-black dark:border-white"
        >
          <div
            id="paper-wrapper"
            class="absolute w-[76vw] right-3 top-3 bottom-3 overflow-hidden rounded-lg border-2 sm:border-0 border-black dark:border-white"
          >
            <div
              id="paper"
              class="absolute w-100% left-0 right-0 h-full bg-white dark:bg-black sm:dark:bg-light-7 rounded-lg p-4 flex flex-col text-xl text-black dark:text-light-100"
            >
              <input
                autocomplete="off"
                type="text"
                name="name"
                bind:value={formInputs.name}
                placeholder="Name*"
                class={twm(
                  formErrors?.name
                    ? "placeholder:text-sand-red text-sand-red animate-vibrate-once"
                    : "placeholder:text-black dark:placeholder:text-light-100",
                  "h-8 text-xl outline-none bg-transparent sand-transition",
                )}
                on:input={() =>
                  formErrors?.name ? (formErrors.name = undefined) : null}
              />
              <!-- {#if formErrors?.name}
                <p class="animate-vibrate-once text-base text-sand-red mb-2">
                  {formErrors.name[0]}
                </p>
              {/if} -->
              <input
                autocomplete="off"
                type="text"
                name="email"
                bind:value={formInputs.email}
                placeholder="Email*"
                class={twm(
                  formErrors?.email
                    ? "placeholder:text-sand-red text-sand-red animate-vibrate-once"
                    : "placeholder:text-black dark:placeholder:text-light-100",
                  "h-8 text-xl outline-none bg-transparent sand-transition",
                )}
                on:input={() =>
                  formErrors?.email ? (formErrors.email = undefined) : null}
              />
              <!-- {#if formErrors?.email}
                <p class="animate-vibrate-once text-base text-sand-red mb-2">
                  {formErrors.email[0]}
                </p>
              {/if} -->
              <textarea
                name="message"
                placeholder="Message*"
                bind:value={formInputs.message}
                class={twm(
                  formErrors?.message
                    ? "placeholder:text-sand-red text-sand-red animate-vibrate-once"
                    : "placeholder:text-black dark:placeholder:text-light-100",
                  "h-full w-[70vw] text-xl mt-5 leading-none outline-none resize-none bg-transparent",
                )}
                on:input={() =>
                  formErrors?.message ? (formErrors.message = undefined) : null}
              />
              <!-- {#if formErrors?.message}
                <p class="animate-vibrate-once text-base text-sand-red mb-2">
                  {formErrors.message[0]}
                </p>
              {/if} -->

              <div class="relative flex items-center gap-3">
                <label
                  for="attachments"
                  class="relative w-auto h-10 flex items-center shrink-0"
                >
                  <ContactFormUpload
                    hasAttachments={!!formInputs.attachments}
                  />
                </label>

                <span
                  class="font-sand-mobile-regular text-xl whitespace-nowrap"
                >
                  {formInputs.attachments ? "Remove" : "Upload Files"}
                </span>

                {#if formInputs.attachments}
                  <button
                    on:click={() => (formInputs.attachments = null)}
                    class="absolute top-0 left-0 w-24 h-20 bg-transparent"
                  />
                {/if}

                <input
                  type="file"
                  multiple
                  id="attachments"
                  class="hidden"
                  on:change={handleAttachmentChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex rotate-180">
          <ContactFormTubeAPhone />
        </div>
      </div>

      <button
        disabled={formState === "sending"}
        on:click={handleSubmit[formState]}
        id="submit-btn"
        class="w-[15rem] h-10 flex items-center justify-between rounded-full bg-white dark:bg-black text-black dark:text-white p-[0.4rem] absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <PixelBorder />
        {#if formState === "locked"}
          <button
            transition:scale={{ start: 0.5 }}
            on:click|stopPropagation={unlock}
            class="absolute left-[0.6rem] flex h-6"
          >
            <Lock />
          </button>
        {/if}
        {#if formState === "idel"}
          <span
            transition:scale={{ start: 0.5 }}
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[49%] font-sand-mobile-bold text-2xl"
          >
            Lock
          </span>
        {:else if formState === "locked"}
          <span
            transition:scale={{ start: 0.5 }}
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[49%] font-sand-mobile-bold text-2xl"
          >
            Send
          </span>
        {:else}
          <span
            transition:scale={{ start: 0.5 }}
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-mobile-bold text-2xl"
          >
            Sending...
          </span>
        {/if}
        <div
          id="btn-logo-shape"
          class={twm(
            "flex w-6 aspect-square ml-auto transition duration-[800ms] ease-out",
            formState === "idel" && "animate-spin-back-once",
            formState === "locked" && "animate-spin-once text-sand-green",
            formState === "sending" && "animate-spin text-sand-red",
          )}
        >
          <LogoShape />
        </div>
      </button>

      <div
        class="absolute inset-0 w-full h-full font-sand-mobile-regular pointer-events-none"
      >
        <div
          class="font-sand-mobile-bold text-2xl absolute top-3 left-4 leading-none"
        >
          Contact
        </div>
        <div
          class="font-sand-mobile-bold text-2xl absolute top-[5.3rem] left-4 leading-[0.75]"
        >
          What do<br /> you have in<br /> mind?
        </div>
        <a
          href="mailto:hi@thesandstudio.com"
          class="text-2xl absolute top-3 right-4 leading-none"
        >
          hi@thesandstudio.com
        </a>
        <div class="flex items-center gap-6 absolute left-4 bottom-28">
          <a href="/" class="text-2xl leading-none">IG</a>
          <a href="/" class="text-2xl leading-none">FB</a>
        </div>
      </div>
    </form>
  </div>
</div>
