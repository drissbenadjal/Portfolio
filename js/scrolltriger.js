gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("img");

const showDemo = () => {
  document.scrollingElement.scrollTo(0, 0);
  setTimeout(() => {
    // gsap.to(document.querySelector(".loading"), { autoAlpha: 0 });
    // gsap.to(".loading", { display: "none" });
    // gsap.to(".demo", { display: "block" });
    // document.body.style.overflowY = "auto";
    //reduire le .loading en carré et le faire disparaitre
    gsap.to(".loading", {
      duration: 1,
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      autoAlpha: 0,
      ease: "power4.out",
      onComplete: () => {
        document.body.style.overflowY = "auto";
      },
    });
  }, 6500);

  gsap.utils.toArray(".scroll-x").forEach((section, index) => {
    const w = section.querySelector(".wrapper");
    const [x, xEnd] =
      index % 2
        ? ["100%", (w.scrollWidth - section.offsetWidth) * -1]
        : [w.scrollWidth * -1, 0];
    gsap.fromTo(
      w,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
        },
      }
    );
  });

  gsap.to(".bg-write canvas", {
    scale: 1.35,
    scrollTrigger: {
      trigger: ".bg-write canvas",
      scrub: 1,
    },
  });

  gsap.to(".bg-write h2", {
    scale: 5,
    scrollTrigger: {
      trigger: ".bg-write h2",
      scrub: 1,
    },
  });
};

imagesLoaded(images).on("always", showDemo);
