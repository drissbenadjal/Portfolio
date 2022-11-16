
const loaderContainer = document.querySelector(".loader-container");

gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray("img");

const showDemo = () => {

  loaderContainer.innerHTML = `<span class="txt1">https://drissbenadjal.dev/</span><span class="txt2">portfolio</span><div class="bar"></div>`;

  var t2 = new SplitText('.txt2').chars,
    color2 = '#17c0fd',
    color1 = '#fff',
    moveBar = () => { gsap.set('.bar', { left: gsap.getProperty('.txt1', 'width') + 1 }) };

  gsap.timeline({ delay: 0.2 })
    .set('.txt1', { color: color1, fontWeight: 'regular' })
    .set('.txt2', { color: color2, fontWeight: 'bold', opacity: 0, x: gsap.getProperty('.txt1', 'width') - 2, immediateRender: true })
    .set('.bar', { left: 1, backgroundColor: color1, immediateRender: true })

    .to('.bar', { duration: 0.1, opacity: 0, ease: Expo.easeIn, yoyo: true, repeat: 5, repeatDelay: 0.3 }, 0)
    .from('.txt1', { duration: 1.1, width: 0, ease: SteppedEase.config(14), onUpdate: moveBar }, 2.5)
    .to('.bar', { duration: 0.05, backgroundColor: color2 }, '+=0.15')
    .to('.bar', { duration: 1.0, width: 160, ease: Power4.easeInOut }, '+=0.1')
    .from('.loader-container', { duration: 1.0, x: 135, ease: Power4.easeInOut }, '-=1.0')
    .to('.txt2', { duration: 0.01, opacity: 1 }, '-=0.1')
    .to('.bar', { duration: 0.4, x: 160, width: 0, ease: Power4.easeIn })
    .from(t2, { duration: 0.6, opacity: 0, ease: Power3.easeInOut, stagger: 0.02 }, '-=0.5')
    .to('.txt1', { duration: 1.5, opacity: 0.25, ease: Power3.easeInOut }, '-=1.2')
    .timeScale(1.45)

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
  document.scrollingElement.scrollTo(0, 0);
  setTimeout(() => {
    tl.to(".loading", {
      y: "-200%",
      duration: 1
    }); /* , "-=1" */
  }, 6200);
  setTimeout(() => {
    document.body.style.overflowY = "auto";
    tl.to(".text", {
      y: "0%",
      duration: 1.65,
      stagger: 0.25
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


