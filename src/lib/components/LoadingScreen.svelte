<script lang="ts">
  import { onMount } from "svelte";
  import lottie from "lottie-web";
  import gsap from "gsap";

  let logoShapeLottie: any;
  let helloLottie: any;
  let isLoading = true;

  const stayBetween = (value: number, range: number[]) =>
    Math.min(range[1], Math.max(range[0], value));

  const animateElements = (
    elements: NodeListOf<HTMLElement>,
    properties: object,
  ) => {
    elements.forEach((element) => {
      gsap.to(element, properties);
    });
  };

  const animateLogo = (e: MouseEvent) => {
    if (isLoading) return;

    const rect = document
      .querySelector(".loading_logo-container")!
      .getBoundingClientRect();
    const track = {
      x: e.clientX / (rect.left + rect.width / 2) - 1,
      y: e.clientY / (rect.top + rect.height / 2) - 1,
    };

    animateElements(document.querySelectorAll(".loading_logo-shape"), {
      rotate: `${+track.x * 200}deg`,
      transformOrigin: "center",
      duration: 0.7,
      ease: "power4",
    });

    animateElements(document.querySelectorAll(".loading_logo-mouth"), {
      rotate: `${stayBetween(+track.x * 10, [-20, 20])}deg`,
      transformOrigin: "center",
      duration: 0.7,
      ease: "power4",
    });

    animateElements(document.querySelectorAll(".loading_logo-eyes"), {
      x: `${stayBetween(+track.x * 5, [-10, 10])}px`,
      y: `${stayBetween(+track.y * 3, [-10, 10])}px`,
      duration: 0.7,
      ease: "power4",
    });
  };

  const blinkEyes = (node: SVGPathElement) => {
    const open = "M4 4L4 17.0967M21.5729 4V17.0967";
    const close = "M4 4L4 7M22 4V7";
    const y = "+=" + (17.0967 - 9) / 2;

    gsap
      .timeline({ repeat: -1, defaults: { duration: 0.1 } })
      .to(node, { attr: { d: close }, y, delay: 2 })
      .to(node, { attr: { d: open }, y: 0 })
      .to(node, { attr: { d: close }, y })
      .to(node, { attr: { d: open }, y: 0 })
      .to(node, { attr: { d: close }, y, delay: 4 })
      .to(node, { attr: { d: open }, y: 0 });
  };

  onMount(() => {
    // you have to see in darkmode initially 👻
    const rootClasses = document.documentElement.classList;
    if (!rootClasses.contains("dark")) {
      rootClasses.add("dark");
      localStorage.setItem("sand-theme", "dark");
    }

    let isReversing = false;
    const handleLogoShapeLottieLoop = () => {
      logoShapeLottie.setDirection(isReversing ? -1 : 1);
      isReversing = !isReversing;
      logoShapeLottie.play();
    };

    logoShapeLottie = lottie.loadAnimation({
      container: document.querySelector(
        ".loading_logo-shape",
      ) as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "https://res.cloudinary.com/dlhbpswom/raw/upload/v1715936557/lotties/logo-shape_nhorul.json",
    });
    logoShapeLottie.addEventListener("complete", handleLogoShapeLottieLoop);

    helloLottie = lottie.loadAnimation({
      container: document.querySelector(".loading_hello") as HTMLDivElement,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "https://res.cloudinary.com/dlhbpswom/raw/upload/v1717003653/lotties/Loading_Hello_ctwbiz.json",
    });
    helloLottie.addEventListener("complete", () =>
      gsap.to(".loading_click-me>div", { scale: 1, opacity: 1 }),
    );

    const progressTl = gsap.timeline({
      paused: true,
      defaults: { ease: "Power4.out", duration: 1 },
      onComplete: () => {
        isLoading = false;
        logoShapeLottie.removeEventListener(
          "complete",
          handleLogoShapeLottieLoop,
        );
        logoShapeLottie.goToAndStop(logoShapeLottie.totalFrames - 1, true);
        helloLottie.play();
        const postLoadingTl = gsap.timeline();
        postLoadingTl
          .to(".loading_hello", { opacity: 1 })
          .to(
            ".loading_logo-container",
            {
              width: "13rem",
              height: "13rem",
              top: "8rem",
              left: "50%",
              transform: "translateX(-50%)",
              duration: 2,
              ease: "power4.out",
            },
            "<",
          )
          .to(
            ".loading_logo-shape",
            {
              rotate: "180deg",
              duration: 2,
              ease: "power4.out",
            },
            "<",
          )
          .fromTo(
            ".loading_logo-mouth",
            { rotate: "-180deg", opacity: 0 },
            { rotate: "0deg", opacity: 1, duration: 1.5, ease: "power4.out" },
            "<10%",
          )
          .to(
            ".loading_logo-eyes",
            { opacity: 1, duration: 1.5, ease: "power4.out" },
            "<",
          );
      },
    });
    progressTl
      .to(".loading_progress", { width: "30%", delay: 1 })
      .to(".loading_progress", { width: "50%", delay: 0 })
      .to(".loading_progress", { width: "75%", delay: 0 })
      .to(".loading_progress", { width: "100%", delay: 1.95 })
      .to(".loading_bar", { opacity: 0 });
    logoShapeLottie.addEventListener("DOMLoaded", () => progressTl.play());

    window.addEventListener("mousemove", animateLogo);

    return () => {
      window.removeEventListener("mousemove", animateLogo);
    };
  });

  const handleClick = () => {
    if (isLoading) return;

    gsap.set(".loading_container", { pointerEvents: "none" });

    fetch("/api/set-cookie", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        key: "sand-showed-loading-screen",
        value: "yes",
        age: 600, // 10 minutes
      }),
    });

    gsap.set(".page-wrapper", { opacity: 0 });
    gsap.to(".loading_hello", { opacity: 0 });
    gsap.to(".loading_click-me", { opacity: 0, scale: 0.8 });
    logoShapeLottie.setDirection(-1);
    logoShapeLottie.play();
    setTimeout(() => {
      gsap.to(".loading_bg", { opacity: 0 });
      gsap.to(".page-wrapper", { opacity: 1, delay: 0.2 });
      gsap.fromTo(
        ".fade-up",
        {
          y: "2rem",
          opacity: 0,
        },
        {
          y: "0rem",
          opacity: 1,
          stagger: 0.08,
          ease: "power4.out",
          duration: 2,
        },
      );
    }, 2500);
    setTimeout(() => {
      document.querySelector(".loading_container")?.remove();
      window.removeEventListener("mousemove", animateLogo);
    }, 4000);
  };
</script>

<div
  class="loading_container fixed inset-0 w-full h-full z-50 grid place-items-center"
>
  <div class="loading_bg absolute inset-0 w-full h-full bg-light-4" />

  <button
    on:click={handleClick}
    class="loading_logo-container w-[9.75rem] aspect-square invert-0 absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div class="loading_logo-shape" />

    <div
      class="loading_click-me w-[5.88rem] h-[5.88rem] absolute top-0 -right-[5.88rem]"
    >
      <div class="scale-[0.8] opacity-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 94 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M93.2378 56.3719L86.0483 46.9979L93.2378 37.6239C93.9318 36.7188 94.165 35.5438 93.8712 34.4423C93.5757 33.3408 92.7862 32.4394 91.7324 32.0024L80.8196 27.4752L82.3453 15.7604C82.4922 14.6314 82.1066 13.4968 81.3025 12.6927C80.4965 11.8867 79.3637 11.5012 78.2346 11.6499L66.5196 13.1755L61.9922 2.26492C61.5552 1.21113 60.6538 0.421701 59.5522 0.126124C58.4507 -0.167616 57.2757 0.0655405 56.3706 0.759502L46.9963 7.94879L37.6221 0.757666C36.717 0.0637047 35.542 -0.169452 34.4404 0.124289C33.3389 0.419865 32.4374 1.20929 32.0005 2.26308L27.4731 13.1755L15.758 11.6499C14.6289 11.5031 13.4962 11.8886 12.6902 12.6927C11.8842 13.4986 11.4987 14.6314 11.6474 15.7604L13.173 27.4752L2.26211 32.0043C1.21013 32.4412 0.418842 33.3426 0.125094 34.4442C-0.170491 35.5457 0.0645083 36.7206 0.758489 37.6257L7.94798 46.9997L0.758489 56.3737C0.0645083 57.2788 -0.168655 58.4538 0.125094 59.5553C0.420678 60.6568 1.21013 61.5582 2.26395 61.9952L9.03669 64.8059L8.74294 66.1736L3.18191 85.6284C2.82574 86.875 3.15437 88.217 4.0448 89.1588C4.93706 90.1006 6.26077 90.5026 7.52388 90.2144L25.9309 86.0268L29.3163 85.2539L32.006 91.7364C32.4429 92.7883 33.3444 93.5796 34.4459 93.8733C35.5475 94.1689 36.7225 93.9339 37.6276 93.2399L47.0018 86.0507L56.3761 93.2418C57.0242 93.7393 57.8099 94 58.6086 94C58.9244 94 59.2438 93.9596 59.5578 93.8752C60.6593 93.5796 61.5607 92.7902 61.9977 91.7382L66.5251 80.8257L78.2402 82.3514C79.3711 82.5019 80.5039 82.1127 81.308 81.3086C82.114 80.5026 82.4995 79.3699 82.3508 78.2408L80.8251 66.5261L91.7361 61.9988C92.7899 61.5619 93.5793 60.6605 93.8749 59.559C94.1705 58.4574 93.9355 57.2825 93.2415 56.3774L93.2378 56.3719Z"
            fill="white"
          />
          <path
            d="M27.4481 47.384C24.9521 47.384 22.9121 46.552 21.3281 44.888C19.7601 43.208 18.9761 41.072 18.9761 38.48C18.9761 35.888 19.7521 33.744 21.3041 32.048C22.8561 30.352 24.8961 29.504 27.4241 29.504C29.3761 29.504 31.0081 30.008 32.3201 31.016C33.8081 32.136 34.6641 33.712 34.8881 35.744H30.6401C30.5281 34.96 30.1841 34.312 29.6081 33.8C29.0321 33.288 28.2961 33.032 27.4001 33.032C26.0561 33.032 25.0321 33.536 24.3281 34.544C23.6401 35.536 23.2961 36.848 23.2961 38.48C23.2961 40.08 23.6721 41.384 24.4241 42.392C25.1761 43.4 26.1761 43.904 27.4241 43.904C28.3521 43.904 29.1121 43.64 29.7041 43.112C30.3121 42.584 30.6641 41.896 30.7601 41.048H35.0081C34.8801 42.776 34.1921 44.24 32.9441 45.44C31.6001 46.736 29.7681 47.384 27.4481 47.384ZM36.3077 47V29.84H40.2677V47H36.3077ZM42.1665 47V34.712H46.0785V47H42.1665ZM42.1665 33.008V29.84H46.0785V33.008H42.1665ZM53.9315 47.384C51.9795 47.384 50.4035 46.768 49.2035 45.536C48.0035 44.304 47.4035 42.752 47.4035 40.88C47.4035 39.008 47.9955 37.456 49.1795 36.224C50.3635 34.992 51.9155 34.376 53.8355 34.376C55.4675 34.376 56.8035 34.808 57.8435 35.672C58.8835 36.536 59.4915 37.672 59.6675 39.08H55.8995C55.6275 37.864 54.9555 37.256 53.8835 37.256C53.0515 37.256 52.4195 37.576 51.9875 38.216C51.5715 38.856 51.3635 39.744 51.3635 40.88C51.3635 42 51.5795 42.88 52.0115 43.52C52.4435 44.144 53.0675 44.456 53.8835 44.456C55.1315 44.456 55.8435 43.752 56.0195 42.344H59.7635C59.7155 43.8 59.1555 45.008 58.0835 45.968C57.0275 46.912 55.6435 47.384 53.9315 47.384ZM61.0102 47V29.84H64.8742V38.864L68.5222 34.712H73.0342L68.7142 39.32L73.5382 47H69.0022L66.0502 41.984L64.8742 43.232V47H61.0102ZM27.2893 70V52.84H33.0013L35.0893 60.352L36.0733 64.264H36.1213C36.5693 62.376 36.8893 61.072 37.0813 60.352L39.1933 52.84H44.9533V70H41.0653V61.36L41.1373 57.928H41.0893C40.6893 59.64 40.4253 60.704 40.2973 61.12L37.8253 70H34.3213L31.8733 61.144L31.0813 57.928H31.0333C31.0813 59.768 31.1053 60.92 31.1053 61.384V70H27.2893ZM53.0649 70.36C51.0809 70.36 49.4889 69.752 48.2889 68.536C47.1049 67.304 46.5129 65.736 46.5129 63.832C46.5129 61.976 47.0969 60.432 48.2649 59.2C49.4489 57.968 50.9689 57.352 52.8249 57.352C54.5049 57.352 55.9049 57.864 57.0249 58.888C58.4969 60.232 59.2169 62.224 59.1849 64.864H50.3529C50.4809 65.712 50.7769 66.376 51.2409 66.856C51.7049 67.32 52.3289 67.552 53.1129 67.552C54.1209 67.552 54.8009 67.144 55.1529 66.328H58.9689C58.6809 67.512 57.9929 68.48 56.9049 69.232C55.8329 69.984 54.5529 70.36 53.0649 70.36ZM50.3769 62.536H55.2249C55.1609 61.8 54.9129 61.216 54.4809 60.784C54.0649 60.352 53.5369 60.136 52.8969 60.136C51.5049 60.136 50.6649 60.936 50.3769 62.536ZM61.7186 64.384L60.7106 56.896V52.84H64.7426V56.896L63.7346 64.384H61.7186ZM60.6866 70V65.968H64.7666V70H60.6866Z"
            fill="#050505"
          />
        </svg>
      </div>
    </div>

    <div class="loading_logo-mouth opacity-0 absolute inset-0 w-full h-full">
      <div
        class="text-black w-[40%] absolute left-1/2 -translate-x-1/2 bottom-[30%]"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 93 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M89 4C89 27.4967 69.9722 46.5444 46.5 46.5444C23.0278 46.5444 4 27.4967 4 4"
            stroke="currentColor"
            stroke-width="8"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>

    <div class="absolute inset-0 w-full h-full">
      <div
        class="text-black w-[12%] absolute left-1/2 -translate-x-1/2 bottom-[50%]"
      >
        <div class="loading_logo-eyes opacity-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 26 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              use:blinkEyes
              style="transform-origin: 50% 50%;"
              d="M4 4L4 17.0967M21.5729 4V17.0967"
              stroke="currentColor"
              stroke-width="8"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </button>

  <div
    class="loading_hello pointer-events-none opacity-0 w-[80rem] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  />

  <div
    class="loading_bar h-2 w-[22.5rem] rounded-full border border-white border-opacity-[0.15] bg-light-12 absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2"
  >
    <div
      class="absolute rounded-full -inset-[1px] h-2 w-[22.5rem] overflow-hidden"
    >
      <div
        class="loading_progress absolute inset-0 right-auto h-2 w-0 bg-white"
      />
    </div>
  </div>
</div>
