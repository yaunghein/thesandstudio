<script>
  import { onMount } from "svelte";
  import gsap from "gsap";

  const options = { ease: "power4.out", duration: 2 };

  onMount(() => {
    gsap.from("#about-heading, #about-tldr span, #services h2, #services p", {
      y: "2rem",
      opacity: 0,
      stagger: 0.05,
      ...options,
    });
    gsap.fromTo(
      "#starwar-text-wrapper",
      { paddingTop: "150rem", ...options },
      { paddingTop: "105rem", ...options },
    );
  });
</script>

<div class="relative -mt-[100rem] mx-auto w-full h-[120rem] starwar-text">
  <div data-simplebar class="h-full scale-x-[1.2]">
    <div
      id="starwar-text-wrapper"
      class="relative flex flex-col gap-20 text-center pt-[58rem] mb-[8rem]"
    >
      <p class="text-5xl leading-normal">
        We are more than just a design studio; we are a collective of innovative
        spirits venturing where most have traveled less.
      </p>
      <p class="text-5xl leading-normal">
        Our team embodies a fusion of talents in Architecture, Design, Motion,
        and Code. We are the home for the curious, the thinkers, the makers, and
        the doers who are passionate about transforming bold ideas into tangible
        realities.
      </p>
      <p class="text-5xl leading-normal">
        Our ethos is rooted in pushing boundaries and delving into the
        intersections of diverse fields. We don't just create; we collaborate,
        innovate, and inspire. SAND is where like-minded individuals unite to
        challenge the conventional and explore uncharted territories in design
        and technology.
      </p>
      <p class="text-5xl leading-normal">
        We are on a journey to a destination unknown, driven by the belief that
        it takes a multitude of fields and diversity to achieve something truly
        groundbreaking. Our projects are collaborative explorations, valuing
        each unique voice and idea, igniting the potential for extraordinary
        innovation.
      </p>
      <p class="text-5xl leading-normal">
        Join us at SAND, where your passion for creativity and diversity finds
        its purpose. Here, we're not just designing for today; we're pioneering
        the future through interdisciplinary collaboration and collective
        ingenuity. We are going where most have traveled less, because it takes
        a rich tapestry of skills and perspectives to uncover what we have yet
        to even imagine.
      </p>
    </div>
  </div>
  <div
    class="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-80 bg-starwar-gradient-light dark:bg-starwar-gradient-dark pointer-events-none"
  />
  <div
    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-40 bg-starwar-gradient-light dark:bg-starwar-gradient-dark pointer-events-none rotate-180"
  />
</div>
