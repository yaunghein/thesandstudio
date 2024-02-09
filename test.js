console.log("yaung");

const lenis = new Lenis({
  duration: 2,
});

window.lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu-container");
const menuWrapper = document.querySelector(".nav-menu-wrapper");
menu.style.overflow = "hidden";

const navTl = gsap.timeline({ defaults: { duration: 0.4 } });
gsap.set(menuWrapper, { opacity: 1 });
gsap.set(menu, { display: "block" });
navTl
  .fromTo(
    menu,
    { pointerEvents: "none" },
    { pointerEvents: "auto", duration: 0 },
  )
  .fromTo(
    menuWrapper,
    { width: "0%" },
    {
      width: window.innerWidth > 767 ? "33.33%" : "100%",
      ease: "power3.inOut",
    },
  )
  .to(
    menuButton,
    {
      width:
        window.innerWidth > 1000
          ? "16rem"
          : window.innerWidth > 360
          ? "8rem"
          : "5rem",
      ease: "power4.inOut",
      duration: 0.7,
    },
    "<",
  )
  .from(".nav-menu-image:nth-of-type(1)", {
    x: "-100%",
    opacity: 0,
    filter: "blur(32px)",
  })
  .from(
    ".nav-menu-image:nth-of-type(2)",
    { x: "100%", opacity: 0, filter: "blur(32px)" },
    "<",
  )
  .from(".nav-link-wrapper, .lang_select", {
    y: "100%",
    opacity: 0,
    filter: "blur(32px)",
    stagger: 0.08,
  })
  .reverse();

menuButton.addEventListener("click", () => {
  if (navTl.reversed()) {
    navTl.restart();
    // window.lenis.stop();
  } else {
    navTl.reverse();
    // window.lenis.start();
  }
});

menu.addEventListener("click", () => {
  navTl.reverse();
  //   window.lenis.start();
});

menuWrapper.addEventListener("click", (e) => {
  e.stopPropagation();
});

const langSelect = document.querySelector(".lang_select");
const langSelectTl = gsap.timeline({
  defaults: { ease: "power3.inOut", duration: 1.2 },
});
langSelectTl
  .to(".lang_select > div:nth-of-type(1)", {
    x: "-1rem",
    opacity: 0,
    filter: "blur(16px)",
  })
  .from(
    ".lang_select > div:nth-of-type(2)",
    { x: "1rem", opacity: 0, filter: "blur(16px)" },
    "<",
  )
  .reverse();
langSelect.addEventListener("mouseenter", () => langSelectTl.restart());
langSelect.addEventListener("mouseleave", () => langSelectTl.reverse());
