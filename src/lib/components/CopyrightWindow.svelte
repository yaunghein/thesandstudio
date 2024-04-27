<script lang="ts">
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import ButtonClose from "./ButtonClose.svelte";
  import { OpenShells, removeShell } from "$lib/stores/shell";
  import drag from "$lib/utils/drag";

  $: shell = $OpenShells.find((shell) => shell.id === "copyright");
  $: index = $OpenShells.findIndex((shell) => shell.id === "copyright");

  const position = (node: HTMLDivElement) => {
    if (index < 0) return;
    node.style.top = `${50 + index * 5}%`;
    node.style.left = `${50 + index * 5}%`;
  };

  const tabsMap: Record<string, string> = {
    PRIVACY_POLICY: "Privacy Policy",
    TERMS_AND_CONDITIONS: "Terms & Conditions",
    COOKIES_POLICY: "Cookies Policy",
  };

  let activeTab = tabsMap.PRIVACY_POLICY;
</script>

<div
  use:drag
  use:position
  in:scale={{ start: 0.9, duration: 200, easing: backOut }}
  out:scale={{ start: 0.9, duration: 200, easing: backIn }}
  class="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-shell-desktop h-shell-desktop rounded-3xl text-light-10 dark:text-light-100 border-2 border-white dark:border-light-12 overflow-hidden"
  style="z-index: {shell?.zIndex}"
>
  <div class="transparent-layer" />

  <div class="absolute inset-0 flex gap-10 -ml-[0.4rem] opacity-sand">
    {#each [...Array(100).keys()] as _}
      <div class="shrink-0 w-line bg-white dark:bg-light-12 h-full" />
    {/each}
  </div>

  <div class="relative flex h-full overflow-hidden">
    <div class="relative w-[20.65rem] shrink-0">
      <div class="mt-6 ml-6">
        <ButtonClose
          on:close={() => {
            removeShell("copyright");
          }}
        />
      </div>
      <div class="flex flex-col mt-14 px-9">
        {#each Object.entries(tabsMap) as [_, value]}
          <button
            id={value.split(" ").join("-")}
            class="flex items-center gap-4 py-1"
            on:click={() => (activeTab = value)}
          >
            <div
              class="shrink-0 w-[1.65rem] h-[1.25rem] rounded border-[0.125rem] {value ===
              activeTab
                ? 'bg-light-10 dark:bg-light-100 border-light-10 dark:border-light-100'
                : 'bg-transparent border-light-70 dark:border-light-12'}"
            />
            <div class="text-2xl">{value}</div>
          </button>
        {/each}
      </div>
    </div>

    <div
      class="grow overflow-hidden rounded-3xl -m-[0.1875rem] ml-0 border-2 border-white dark:border-light-12 bg-light-90 dark:bg-black"
    >
      <div class="flex items-center h-20 px-9">
        <span class="text-2xl truncate" title={activeTab}>
          {activeTab}
        </span>
      </div>
      <div
        class="flex h-[calc(100%-5rem)] overflow-y-hidden rounded-3xl -m-[0.125rem] mt-0 border-2 border-b-0 border-white dark:border-light-12"
      >
        {#if activeTab === tabsMap.TERMS_AND_CONDITIONS}
          <div
            class="leading-[1.35] p-9 text-[1.375rem] w-full overflow-scroll hide-scrollbar"
          >
            <div class="flex flex-col gap-9">
              <p>
                Welcome to SAND! These Terms and Conditions ("Terms") govern the
                use of our services, which encompass a diverse range of
                innovative solutions including architecture, design, motion
                graphics, web development, and more. By engaging with our
                services, you agree to these Terms, so read them carefully. If
                you're into breaking the norm and exploring the new, you're in
                the right place. Let's get to it.
              </p>

              <div>
                <div class="text-3xl font-sand-bold mb-4">1. Definitions</div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    "Company": Refers to SAND, where we do all sorts of
                    incredible things.
                  </li>
                  <li>
                    "Client": The individual, group, or entity that contracts
                    our services.
                  </li>
                  <li>
                    Services": The scope of work we provide, which can range
                    from visual identity to web development and architectural
                    design.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  2. Scope of Services
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Our team offers a variety of services, including but not
                    limited to:

                    <ul
                      class="list-circle mt-4 pl-[1.85rem] flex flex-col gap-4"
                    >
                      <li>Visual Identity</li>
                      <li>Motion Graphics and Animation</li>
                      <li>Packaging Design</li>
                      <li>Web Design and Development</li>
                      <li>Web Maintenance and Support</li>
                      <li>E-commerce Solutions</li>
                      <li>Consultation and Strategy</li>
                      <li>Architectural Design</li>
                      <li>Interior Design</li>
                      <li>3D Modeling and Visualization</li>
                    </ul>
                  </li>
                  <li>
                    If you have a vision, we can help bring it to life. The
                    specifics of each Project will be detailed in a separate
                    agreement.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  3. Client Responsibilities
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Clients must provide the necessary information and materials
                    to keep projects moving smoothly.
                  </li>
                  <li>
                    You agree to use our work responsibly and in compliance with
                    applicable laws. Don't be that person who causes trouble.
                  </li>
                  <li>
                    Clear communication is key—let us know your thoughts,
                    feedback, and ideas as we go along.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  4. Payment and Pricing
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Pricing will be agreed upon in the contract or project
                    agreement.
                  </li>
                  <li>
                    Payments are due as specified in the contract, usually upon
                    hitting certain milestones.
                  </li>
                  <li>
                    Late payments could lead to additional charges or delayed
                    project timelines, and that's no fun for anyone.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  5. Intellectual Property Rights
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    We own all intellectual property until you've paid up. Once
                    that's done, it's all yours.
                  </li>
                  <li>
                    We do reserve the right to showcase our work for marketing
                    and portfolio purposes, unless we agree otherwise in
                    writing.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  6. Disclaimers and Limitation of Liability
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    We're not fortune tellers, so we can't guarantee specific
                    outcomes. We do our best, but there are no guarantees on
                    results.
                  </li>
                  <li>
                    Our liability is limited to the total amount paid by you for
                    the Project. We're not responsible for indirect or
                    consequential damages, like lost business or profits.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  7. Indemnification
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    If your use of our services leads to legal trouble, you're
                    on the hook. You agree to indemnify and hold us harmless
                    against any claims, damages, or losses arising from the use
                    of our work.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  8. Termination and Project Cancellation
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    If you or we need to end the Project, proper notice is
                    required as outlined in the contract.
                  </li>
                  <li>
                    If you terminate the Project, you are responsible for paying
                    for the work completed up to that point.
                  </li>
                  <li>
                    We can also terminate the Project if you're not meeting your
                    responsibilities or violating these Terms.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  9. Privacy Policy and Data Protection
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    We take your privacy seriously. We collect and use client
                    data according to our Privacy Policy, which you can find on
                    our website.
                  </li>
                  <li>
                    Make sure any personal or sensitive data you give us
                    complies with data protection laws.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  10. Governing Law and Dispute Resolution
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    These Terms are governed by the laws of [Your Jurisdiction].
                    Disputes will be resolved through mediation, arbitration, or
                    litigation, depending on what we agree on.
                  </li>
                  <li>
                    If we can't sort things out amicably, we'll follow the legal
                    procedures outlined in the contract.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  11. Changes to the Terms and Conditions
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    We reserve the right to change these Terms as needed. If we
                    do, we'll let you know via email or other appropriate means.
                  </li>
                  <li>
                    Your continued use of our services after changes are made
                    indicates your acceptance of the new Terms.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  12. Contact Information
                </div>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Got questions or need to chat? hi@thesandstudio.com. We're
                    here to help.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        {:else if activeTab === tabsMap.PRIVACY_POLICY}
          <div
            class="leading-[1.35] p-9 text-[1.375rem] w-full overflow-scroll hide-scrollbar"
          >
            <div class="flex flex-col gap-9">
              <p>
                At SAND, we respect the privacy of everyone who visits our
                website. This Privacy Policy ("Policy") explains how we collect,
                use, share, and protect your personal information. By using our
                website or services, you agree to the terms outlined in this
                Policy. We are committed to transparency and respecting your
                privacy.
              </p>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  1. Information Collection and Consent
                </div>
                <p>
                  We do not collect personal information about our users without
                  their knowledge and prior consent. We don't use scripts or
                  devices to gather personal data without your awareness.
                  Certain features of our website require you to register, which
                  involves providing some personal information. This information
                  is given voluntarily and used only as specified in this
                  Policy. It will not be shared, traded, or sold to third
                  parties without your prior consent.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  2. Use of Personal Information
                </div>
                <p>
                  The personal information provided during registration, except
                  for your email address, may be displayed on your user profile.
                  We reserve the right to use this information in other
                  publications produced by SAND. By registering on our website,
                  you accept these conditions. Additional information can be
                  provided at your discretion but is not mandatory.
                </p>
                <p class="mt-4">
                  If you submit a website or project to SAND for recognition or
                  publication, you may need to provide specific information
                  about the project. This information will be published on our
                  website, and we reserve the right to use it in other
                  publications produced by SAND. By submitting your site or
                  project, you accept these conditions.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  3. Data We Collect
                </div>
                <p class="mb-4">
                  In addition to personal information, we collect other data for
                  administrative purposes and to improve our website and
                  services. This includes:
                </p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>Pages visited</li>
                  <li>Clickstream data</li>
                  <li>Other browsing information</li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  4. Cookies and Third-Party Technologies
                </div>
                <p>
                  Our website does not use cookies, but we use third-party
                  technologies that employ cookies to provide useful features
                  and services. Cookies identify a user's device, not the
                  individual user. Most browsers accept cookies by default. You
                  can set your browser to refuse cookies, but this may limit
                  certain website features.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  5. Children's Privacy
                </div>
                <p>
                  SAND complies with the requirements of the Children's Online
                  Privacy Protection Act. We do not knowingly accept submissions
                  or correspondence from children under 13 without written
                  permission from a parent or legal guardian. If we discover
                  that we have collected personal information from a child under
                  13 without permission, we will delete it promptly.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">6. Data Security</div>
                <p>
                  We implement industry-standard security measures to protect
                  your personal information from unauthorized access, loss, or
                  misuse. However, no system is completely secure, and we cannot
                  guarantee absolute security. Be cautious when sharing personal
                  information online.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  7. Your Rights and Choices
                </div>
                <p>
                  You have the right to access, correct, or request deletion of
                  your personal information. You can also opt out of receiving
                  marketing communications at any time. To exercise these
                  rights, contact us at hi@thesandstudio.com.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  8. Changes to This Policy
                </div>
                <p>
                  We may update this Policy to reflect changes in our practices
                  or legal requirements. Significant changes will be
                  communicated through our website or by email. Continued use of
                  our website or services after changes indicates your
                  acceptance of the updated Policy.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">9. Contact Us</div>
                <p>
                  If you have questions about this Privacy Policy,
                  hi@thesandstudio.com. We're happy to assist with any
                  privacy-related inquiries.
                </p>
              </div>
            </div>
          </div>
        {:else}
          <div
            class="leading-[1.35] p-9 text-[1.375rem] w-full overflow-scroll hide-scrollbar"
          >
            <div class="flex flex-col gap-9">
              <p>
                Welcome to SAND! This Cookies Policy ("Policy") outlines how we
                use cookies on our website. By continuing to use our website,
                you agree to the use of cookies as described in this Policy.
              </p>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  1. What Are Cookies?
                </div>
                <p>
                  Cookies are small data files that websites place on your
                  device to remember your preferences and track your activity.
                  They are essential for our website to function and for us to
                  provide a personalized experience.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  2. Why We Use Cookies
                </div>
                <p class="mb-4">We use cookies to:</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>Ensure the website works as expected.</li>
                  <li>Analyze website usage to improve our services.</li>
                  <li>Deliver personalized content and advertisements.</li>
                  <li>Remember your preferences for future visits.</li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  3. Third-Party Cookies
                </div>
                <p>
                  We work with trusted third-party providers who may place
                  cookies on our website. These partners help us with analytics
                  and advertising. We recommend reviewing their policies to
                  understand their use of cookies.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  4. Managing Cookies
                </div>
                <p class="mb-4">
                  Most web browsers allow you to control or delete cookies. You
                  can:
                </p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>Block or allow specific cookies.</li>
                  <li>Clear existing cookies from your device.</li>
                  <li>
                    Adjust browser settings to alert you when cookies are in
                    use.
                  </li>
                </ul>
                <p class="mt-4">
                  Be aware that disabling cookies may affect your experience on
                  our website.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  5. Privacy Policy and Data Protection
                </div>
                <p>
                  Our use of cookies is in accordance with our Privacy Policy.
                  By using our website, you agree to our Privacy Policy, which
                  details how we collect and use your data.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">
                  6. Changes to This Policy
                </div>
                <p>
                  We may update this Policy from time to time. If we make
                  significant changes, we'll notify you through the website or
                  by email. Continued use of our website after changes indicates
                  acceptance of the updated Policy.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-bold mb-4">7. Contact Us</div>
                <p>
                  If you have questions about our Cookies Policy or need
                  assistance managing cookies, hi@thesandstudio.com. We're here
                  to help.
                </p>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
