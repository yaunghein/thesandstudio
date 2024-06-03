<script lang="ts">
  import { scale } from "svelte/transition";
  import { backIn, backOut } from "svelte/easing";
  import ButtonClose from "./ButtonClose.svelte";
  import { OpenShells, removeShell, addShell } from "$lib/stores/shell";
  import drag from "$lib/utils/drag";
  import { openContactTab } from "$lib/stores/finder";

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
                Welcome to The Sand Studio's website. By accessing and using our
                website, you agree to comply with and be bound by the following
                terms and conditions. Please review them carefully. If you do
                not agree to these terms, you should not use our website.
              </p>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  1. Use of Website
                </div>
                <p>
                  You agree to use our website only for lawful purposes and in a
                  manner that does not infringe the rights of, restrict, or
                  inhibit the use and enjoyment of the website by any third
                  party. Prohibited behavior includes harassing or causing
                  distress or inconvenience to any other user, transmitting
                  obscene or offensive content, or disrupting the normal flow of
                  dialogue within our website.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  2. Intellectual Property
                </div>
                <p>
                  All content on this website, including text, graphics, logos,
                  icons, images, audio clips, video clips, data compilations,
                  and software, is the property of The Sand Studio or its
                  content suppliers and is protected by international copyright
                  laws. The compilation of all content on this website is the
                  exclusive property of The Sand Studio, with copyright
                  authorship for this collection by The Sand Studio, and
                  protected by international copyright laws.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  3. Third-Party Intellectual Property
                </div>
                <p>
                  The Sand Studio respects the intellectual property rights of
                  others. Our website may contain third-party fonts, emojis, and
                  other graphical elements that are not owned by The Sand
                  Studio. All such elements are the property of their respective
                  owners. The Sand Studio does not claim ownership of any
                  third-party intellectual property, and the use of such
                  elements is for illustrative and functional purposes only. If
                  you believe that your intellectual property rights have been
                  infringed by our website, please contact us so we can address
                  your concerns.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">4. Privacy</div>
                <p>
                  Your use of our website is also governed by our Privacy
                  Policy, which can be found here.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  5. Limitation of Liability
                </div>
                <p>
                  The Sand Studio will not be liable for any damages of any kind
                  arising from the use of this site, including but not limited
                  to direct, indirect, incidental, punitive, and consequential
                  damages.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">6. Disclaimers</div>
                <p>
                  The information provided on this website is for general
                  informational purposes only. While we strive to provide
                  accurate and up-to-date information, we make no warranties or
                  representations about the accuracy, reliability, completeness,
                  or timeliness of the content on this website. Your use of the
                  website and its content is at your own risk.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  7. Links to Other Websites
                </div>
                <p>
                  Our website may contain links to third-party websites that are
                  not owned or controlled by The Sand Studio. We have no control
                  over and assume no responsibility for the content, privacy
                  policies, or practices of any third-party websites. You should
                  read the terms and conditions and privacy policies of any
                  third-party websites you visit.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  8. Modification of Terms
                </div>
                <p>
                  The Sand Studio reserves the right to change or modify these
                  terms and conditions at any time. Any changes will be
                  effective immediately upon posting on our website. Your
                  continued use of the website after any changes signifies your
                  acceptance of the new terms and conditions.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  9. Governing Law
                </div>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Thailand, and you irrevocably
                  submit to the exclusive jurisdiction of the courts in that
                  location.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  10. Contact Information
                </div>
                <p>
                  If you have any questions about these terms and conditions,
                  please contact us at: The Sand Studio
                </p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Email: <button
                      on:click={() => {
                        addShell({ id: "finder", zIndex: 65 });
                        openContactTab();
                      }}
                      class="underline"
                    >
                      hi@thesandstudio.com
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  11. Additional Terms for Specific Services
                </div>
                <p>11.1 Schat Virtual Assistant</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    By using Schat, our virtual assistant, you agree to provide
                    accurate information and understand that the assistance
                    provided is based on the OpenAI model GPT-4, which may not
                    always be accurate or complete. The information collected
                    through Schat is used solely for the purpose of improving
                    our services and responding to your inquiries.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  12. User Conduct
                </div>
                <p>Users are prohibited from:</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Using our website in any way that is or may be damaging to
                    the website.
                  </li>
                  <li>
                    Using our website in any way that impacts user access to the
                    website.
                  </li>
                  <li>
                    Using our website contrary to applicable laws and
                    regulations, or in a way that causes, or may cause, harm to
                    the website or to any person or business entity.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  13. Termination
                </div>
                <p>
                  We may terminate or suspend access to our website immediately,
                  without prior notice or liability, for any reason whatsoever,
                  including without limitation if you breach the terms. All
                  provisions of the terms which by their nature should survive
                  termination shall survive termination, including, without
                  limitation, ownership provisions, warranty disclaimers,
                  indemnity, and limitations of liability.
                </p>
              </div>
            </div>
          </div>
        {:else if activeTab === tabsMap.PRIVACY_POLICY}
          <div
            class="leading-[1.35] p-9 text-[1.375rem] w-full overflow-scroll hide-scrollbar"
          >
            <div class="flex flex-col gap-9">
              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  1. Introduction
                </div>
                <p>
                  Welcome to The Sand Studio's website. We value your privacy
                  and are committed to protecting your personal information.
                  This privacy policy explains how we collect, use, and protect
                  your information when you visit our website and use our
                  services, including our Schat virtual assistant.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  2. Information We Collect
                </div>
                <p>We may collect the following types of information:</p>
                <p>2.1 Personal Information</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Contact information such as your name, email address (e.g.,
                    dipar@thesandstudio.com), and phone number when you fill out
                    contact forms or subscribe to our newsletters.
                  </li>
                  <li>
                    Information you provide when you communicate with us through
                    Schat or other means.
                  </li>
                  <p>2.2 Technical Information</p>
                  <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                    <li>IP addresses, browser types, and access times.</li>
                    <li>
                      Cookies and similar technologies to track user activity on
                      our site.
                    </li>
                  </ul>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  3. Use of Information
                </div>
                <p>We use your information to:</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>Provide and improve our services.</li>
                  <li>Respond to your inquiries and communicate with you.</li>
                  <li>Personalize your experience on our website.</li>
                  <li>Analyze website usage to improve our offerings.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  4. Sharing of Information
                </div>
                <p class="mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties except to trusted third parties
                  who assist us in operating our website, conducting our
                  business, or serving our users, as long as those parties agree
                  to keep this information confidential.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  5. Data Security
                </div>
                <p>
                  We implement a variety of security measures to maintain the
                  safety of your personal information. Your personal data is
                  contained behind secured networks and is only accessible by a
                  limited number of persons who have special access rights to
                  such systems and are required to keep the information
                  confidential.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">6. Your Rights</div>
                <p>You have the right to:</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>Access your personal information.</li>
                  <li>
                    Request correction of any incorrect or incomplete data.
                  </li>
                  <li>
                    Request deletion of your personal information, subject to
                    certain legal exceptions.
                  </li>
                  <li>
                    Object to the processing of your personal information.
                  </li>
                  <li>
                    Request the restriction of processing of your personal
                    information..
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  7. Third-Party Links
                </div>
                <p>
                  Our website may contain links to third-party sites. We are not
                  responsible for the privacy practices or the content of these
                  third-party sites.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">8. Cookies</div>
                <p>
                  Our website uses cookies to enhance user experience. You can
                  choose to disable cookies through your browser settings, but
                  this may affect your ability to use some features of our
                  website.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  9. Children's Privacy
                </div>
                <p>
                  We do not knowingly collect personal information from children
                  under the age of 13. If we become aware that we have
                  inadvertently received personal information from a child under
                  the age of 13, we will delete such information from our
                  records. If you are a parent or guardian and believe we have
                  collected personal information from your child, please contact
                  us at hi@thesandstudio.com so we can take appropriate action.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  10. Changes to Our Privacy Policy
                </div>
                <p>
                  We may update this privacy policy from time to time. We will
                  notify you of any changes by posting the new privacy policy on
                  this page. You are advised to review this privacy policy
                  periodically for any changes.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">11. Contact Us</div>
                <p>
                  If you have any questions about this privacy policy, please
                  contact us at:
                </p>
                <p>The Sand Studio</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>Email: hi@thesandstudio.com</li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  12. Additional Information for Specific Services
                </div>
                <p>12.1 Schat Virtual Assistant</p>
                <p>The Sand Studio</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Schat is a virtual assistant built on the OpenAI model
                    GPT-4. When you interact with Schat, we may collect
                    additional information to provide you with better
                    assistance. This includes any personal data you provide
                    during the chat session. The information collected through
                    Schat is used solely for the purpose of improving our
                    services and responding to your inquiries.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  13. Compliance with Laws
                </div>
                <p>
                  1We will disclose your personal information where required to
                  do so by law or subpoena.
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
                This Cookie Policy explains how The Sand Studio ("we", "us",
                "our") uses cookies and similar technologies to recognize you
                when you visit our website. It explains what these technologies
                are and why we use them, as well as your rights to control our
                use of them.
              </p>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  1. What Are Cookies?
                </div>
                <p>
                  Cookies are small data files that are placed on your computer
                  or mobile device when you visit a website. Cookies are widely
                  used by website owners to make their websites work, or to work
                  more efficiently, as well as to provide reporting information.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  2. Why Do We Use Cookies?
                </div>
                <p>
                  We use cookies for several reasons. Some cookies are required
                  for technical reasons for our website to operate, and we refer
                  to these as "essential" or "strictly necessary" cookies. Other
                  cookies also enable us to track and target the interests of
                  our users to enhance their experience on our website. Third
                  parties serve cookies through our website for advertising,
                  analytics, and other purposes.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  3. Types of Cookies We Use
                </div>
                <p>3.1 Essential Cookies</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4 mb-4">
                  <li>
                    These cookies are strictly necessary to provide you with
                    services available through our website and to use some of
                    its features, such as access to secure areas.
                  </li>
                </ul>
                <p>3.2 Performance and Functionality Cookies</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4 mb-4">
                  <li>
                    These cookies are used to enhance the performance and
                    functionality of our website but are non-essential to its
                    use. However, without these cookies, certain functionalities
                    may become unavailable.
                  </li>
                </ul>
                <p>3.3 Analytics and Customization Cookies</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4 mb-4">
                  <li>
                    These cookies collect information that is used either in
                    aggregate form to help us understand how our website is
                    being used or how effective our marketing campaigns are, or
                    to help us customize our website for you.
                  </li>
                </ul>
                <p>Advertising Cookies</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    These cookies are used to make advertising messages more
                    relevant to you. They perform functions like preventing the
                    same ad from continuously reappearing, ensuring that ads are
                    properly displayed for advertisers, and in some cases
                    selecting advertisements that are based on your interests.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  4. How Can You Control Cookies?
                </div>
                <p class="">
                  You have the right to decide whether to accept or reject
                  cookies. You can exercise your cookie preferences by clicking
                  on the appropriate opt-out links provided below. You can set
                  or amend your web browser controls to accept or refuse
                  cookies. If you choose to reject cookies, you may still use
                  our website, though your access to some functionality and
                  areas of our website may be restricted.
                </p>
                <p>4.1 Browser Controls</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4 mb-4">
                  <li>
                    You can set or modify your web browser controls to accept or
                    refuse cookies. If you choose to reject cookies, you may
                    still use our website, though your access to some
                    functionality and areas of our website may be restricted. As
                    the means by which you can refuse cookies through your web
                    browser controls vary from browser to browser, you should
                    visit your browser's help menu for more information.
                  </li>
                </ul>
                <p>4.2 Disabling Most Interest-Based Advertising</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
                  <li>
                    Most advertising networks offer you a way to opt out of
                    interest-based advertising. If you would like to find out
                    more information, please visit:
                    <p>Your Online Choices</p>
                    <ul class="list-disc pl-[1.85rem] flex flex-col">
                      <li>Network Advertising Initiative</li>
                      <li>Digital Advertising Alliance</li>
                    </ul>
                  </li>
                </ul>
                <p>4.3 Mobile Advertising</p>
                <ul class="list-disc pl-[1.85rem] flex flex-col gap-4 mb-4">
                  <li>
                    You can opt out of having your mobile advertising
                    identifiers used for certain types of interest-based
                    advertising, including those performed by us, by accessing
                    the settings on your Apple or Android mobile device and
                    following the most recent published instructions. If you opt
                    out, we will remove all data about you and no further data
                    collection or tracking will occur.
                  </li>
                </ul>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">
                  5. Changes to This Cookie Policy
                </div>
                <p>
                  We may update this Cookie Policy from time to time to reflect,
                  for example, changes to the cookies we use or for other
                  operational, legal, or regulatory reasons. Please revisit this
                  Cookie Policy regularly to stay informed about our use of
                  cookies and related technologies.
                </p>
              </div>

              <div>
                <div class="text-3xl font-sand-medium mb-4">6. Contact Us</div>
                <p>
                  If you have any questions about our use of cookies or other
                  technologies, please email us at hi@thesandstudio.com.
                </p>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<!-- <ul class="list-disc pl-[1.85rem] flex flex-col gap-4">
  <li>Pages visited</li>
</ul> -->
