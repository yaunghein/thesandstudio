<script lang="ts">
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";
  import gsap from "gsap";
  import { z } from "zod";
  import { twMerge as twm } from "tailwind-merge";
  import LogoShape from "$lib/svgs/LogoShape.svelte";
  import IconLock from "$lib/svgs/IconLock.svelte";
  import ContactFormTopShape from "$lib/svgs/ContactFormTopShape.svelte";
  import ContactFormTubeAPhone from "$lib/svgs/ContactFormTubeAPhone.svelte";

  const defaults = { ease: "power4.inOut", duration: 1 };

  onMount(() => {
    const tl = gsap.timeline({ defaults });
    tl.from("#tube", { y: "115%" }).to("#paper", { x: "0%" }, "<50%");
  });

  const initialFormInputs = {
    name: "",
    email: "",
    message: "",
  };
  let formInputs = { ...initialFormInputs };
  let formErrors: any;
  let formState: "idel" | "locked" | "sending" = "idel";

  const formSchema = z.object({
    name: z.string().trim().min(1, { message: "Please enter your name." }),
    email: z
      .string()
      .trim()
      .min(1, { message: "Please enter your email, we'll never share it." })
      .email({ message: "Please enter a valid email." }),
    message: z
      .string()
      .trim()
      .min(1, { message: "Please tell us how we can help you." }),
  });

  const lock = () => {
    const validatedInputs: any = formSchema.safeParse(formInputs);
    if (!validatedInputs.success) {
      const zodErrors = JSON.parse(validatedInputs.error);
      const transformedErrors: any = {};
      for (const error of zodErrors) {
        for (const path of error.path) {
          transformedErrors[path] = [
            ...(transformedErrors[path] || []),
            error.message,
          ];
        }
      }
      formErrors = transformedErrors;
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

    const resp = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formInputs),
    });
    if (resp.ok) {
      formState = "idel";
      // const data = await resp.json();
    }
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
      class="grow relative w-52 mx-auto bg-light-80 dark:bg-black bg-opacity-50 dark:bg-opacity-30"
    >
      <div
        class="absolute w-[56rem] right-3 top-3 h-[27rem] overflow-hidden rounded-lg"
      >
        <div
          id="paper"
          class="absolute w-[55rem] right-0 h-full bg-white dark:bg-light-7 rounded-lg translate-x-[79.5%] p-3 flex flex-col text-xl text-black dark:text-light-100"
        >
          <input
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
            placeholder="How can we help you?"
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
        </div>
      </div>
    </div>

    <div class="flex rotate-180">
      <ContactFormTubeAPhone />
    </div>
  </div>

  <button
    on:click={handleSubmit[formState]}
    id="submit-btn"
    class="relative w-[89%] mx-auto h-14 flex items-center justify-between rounded-full border-2 border-white dark:border-light-12 bg-black text-light-100 p-3 mb-4 mt-3"
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
        "flex w-9 aspect-square ml-auto sand-transition",
        formState === "idel" && "animate-spin-back-once",
        formState === "locked" && "animate-spin-once text-sand-green",
        formState === "sending" && "animate-spin text-sand-red",
      )}
    >
      <LogoShape />
    </div>
  </button>
</form>
