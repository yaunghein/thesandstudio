<script lang="ts">
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import gsap from "gsap";
  import { twMerge as twm } from "tailwind-merge";
  import { changeCursorType } from "$lib/stores/cursor";
  import LogoShape from "$lib/svgs/LogoShape.svelte";
  import IconLock from "$lib/svgs/IconLock.svelte";
  import ContactFormTopShape from "$lib/svgs/ContactFormTopShape.svelte";
  import ContactFormTubeAPhone from "$lib/svgs/ContactFormTubeAPhone.svelte";
  import ContactFormUpload from "$lib/svgs/ContactFormUpload.svelte";
  import {
    formSchema,
    filesToBase64,
    transformZodErrors,
  } from "$lib/utils/form";
  import type { FormInputs } from "$lib/utils/form";

  const defaults = { ease: "power4.inOut", duration: 1 };

  onMount(() => {
    const tl = gsap.timeline({ defaults });
    tl.from("#tube", { y: "115%", ease: "power4.out" }).to(
      "#paper",
      { x: "0%" },
      "<50%",
    );
  });

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
    gsap.to("#paper", { x: "79.5%", ...defaults });
  };

  const unlock = () => {
    formState = "idel";
    gsap.to("#paper", { x: "0%", ...defaults });
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
      .to("#paper", { x: "0%" }, "<50%");
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

<form on:submit|preventDefault class="relative text-xl h-full flex flex-col">
  <div class="relative z-10 w-full flex ml-[0.1rem] -mt-[0.1rem]">
    <ContactFormTopShape />
  </div>

  <div id="tube" class="px-2 h-full -mt-[7rem] flex flex-col">
    <div class="flex">
      <ContactFormTubeAPhone />
    </div>

    <div
      class="grow relative w-52 mx-auto bg-light-90 dark:bg-black bg-opacity-30"
    >
      <div
        class="absolute w-[56rem] right-3 top-3 h-[27rem] overflow-hidden rounded-lg"
      >
        <div
          id="paper"
          class="absolute w-[55rem] right-0 h-full bg-white dark:bg-light-7 rounded-lg translate-x-[79.5%] p-5 flex flex-col text-xl text-black dark:text-light-100"
        >
          <input
            autocomplete="off"
            type="text"
            name="name"
            bind:value={formInputs.name}
            placeholder="Name"
            class="h-8 placeholder:text-black dark:placeholder:text-light-100 outline-none bg-transparent"
            on:input={() =>
              formErrors?.name ? (formErrors.name = undefined) : null}
          />
          {#if formErrors?.name}
            <p class="animate-vibrate-once text-base text-sand-red mb-2">
              {formErrors.name[0]}
            </p>
          {/if}
          <input
            autocomplete="off"
            type="text"
            name="email"
            bind:value={formInputs.email}
            placeholder="Email"
            class="h-8 placeholder:text-black dark:placeholder:text-light-100 outline-none bg-transparent"
            on:input={() =>
              formErrors?.email ? (formErrors.email = undefined) : null}
          />
          {#if formErrors?.email}
            <p class="animate-vibrate-once text-base text-sand-red mb-2">
              {formErrors.email[0]}
            </p>
          {/if}
          <textarea
            name="message"
            placeholder="Message"
            bind:value={formInputs.message}
            class="h-full mt-5 placeholder:text-black dark:placeholder:text-light-100 outline-none resize-none bg-transparent"
            on:input={() =>
              formErrors?.message ? (formErrors.message = undefined) : null}
          />
          {#if formErrors?.message}
            <p class="animate-vibrate-once text-base text-sand-red mb-2">
              {formErrors.message[0]}
            </p>
          {/if}

          <div class="relative">
            <label
              use:changeCursorType={{
                inType: "upload-files",
                outType: "normal",
              }}
              for="attachments"
              class="relative w-24 h-20 flex items-center"
            >
              <ContactFormUpload hasAttachments={!!formInputs.attachments} />
            </label>

            {#if formInputs.attachments}
              <button
                use:changeCursorType={{
                  inType: "remove-files",
                  outType: "normal",
                }}
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
    class="relative w-[89%] mx-auto h-14 flex items-center justify-between rounded-full border-2 border-white dark:border-light-12 bg-light-90 dark:bg-black text-black dark:text-light-100 p-3 mb-4 mt-3"
  >
    {#if formState === "locked"}
      <button
        transition:scale={{ start: 0.5 }}
        on:click|stopPropagation={unlock}
        class="absolute left-[0.36rem] flex w-10 aspect-square"
      >
        <IconLock />
      </button>
    {/if}
    {#if formState === "idel"}
      <span
        transition:scale={{ start: 0.5 }}
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-medium text-xl"
      >
        Lock
      </span>
    {:else if formState === "locked"}
      <span
        transition:scale={{ start: 0.5 }}
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-medium text-xl"
      >
        Send
      </span>
    {:else}
      <span
        transition:scale={{ start: 0.5 }}
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sand-medium text-xl"
      >
        Sending...
      </span>
    {/if}
    <div
      id="btn-logo-shape"
      class={twm(
        "flex w-9 aspect-square ml-auto transition duration-[800ms] ease-out",
        formState === "idel" && "animate-spin-back-once",
        formState === "locked" && "animate-spin-once text-sand-green",
        formState === "sending" && "animate-spin text-sand-red",
      )}
    >
      <LogoShape />
    </div>
  </button>
</form>
