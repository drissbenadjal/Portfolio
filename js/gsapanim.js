gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("img");

const allGsap = () => {

  gsap.timeline({ delay: 0.2 })
    .timeScale(1.45)

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  document.scrollingElement.scrollTo(0, 0);
  setTimeout(() => {
    tl.to(".loading", {
      y: "-200%",
      duration: 1
    }); /* , "-=1" */
  }, 1000);
  setTimeout(() => {
    document.body.style.overflowY = "auto";
    tl.to(".text", {
      y: "0%",
      duration: 1.65,
      stagger: 0.25
    });
    setTimeout(() => {
      document.querySelector('.tags-cloud').classList.add('-loaded');
    }, 1000);
  }, 1000);

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

  gsap.to("#container-scroll", {
    "--target": "0%",
    ease: "none",
    scrollTrigger: {
      trigger: "#container-scroll",
      start: "top top",
      end: "+=1500",
      pin: true,
      scrub: 1
    },
  });

  gsap.to("#container-scroll .stretch-text", {
    scale: 1.8,
    scrollTrigger: {
      trigger: "#container-scroll .stretch-text",
      scrub: 1,
    },
  });

  let sections = gsap.utils.toArray(".projet");
  gsap.to(sections, {
    xPercent: -115.5 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".projets-container",
      pin: true,
      scrub: 0.5,
      start: "center center",
      end: "+=3500"
    }
  });

};


window.addEventListener("load", allGsap);


