document.body.style.overflow = "hidden";

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").classList.add("navbar-scrolled");
  } else {
    document.querySelector("nav").classList.remove("navbar-scrolled");
  }
};

const position = document.documentElement;
position.style.setProperty("--x", 1000 / 6 + "px");
position.style.setProperty("--y", 600 / 6 + "px");
position.addEventListener("mousemove", (e) => {
  position.style.setProperty("--x", e.clientX / 6 + "px");
  position.style.setProperty("--y", e.clientY / 6 + "px");
});
const random = () => {
  const text = document.querySelectorAll(".text h2");
  text.forEach((item) => {
    item.style.setProperty("--i", Math.random() * (3 - 0.35) + 0.35);
    item.style.setProperty(
      "--i",
      item.style.getPropertyValue("--i").slice(0, 4)
    );
  });
};
random();

const logoLoaderAll = document.querySelectorAll("#logoLoader path");
// for(let i = 0; i<logoLoaderAll.length; i++){
//   console.log(`Letter ${i} is ${logoLoaderAll[i].getTotalLength()}`);
// }
const logoLoader = document.querySelector("#logoLoader");
position.addEventListener("mousemove", (e) => {
  logoLoader.style.transform = `translate(${e.clientX / 300 - 50}%, ${
    e.clientY / 300 - 50
  }%)`;
});

document.querySelector("#home-nav").addEventListener("mouseover", () => {
  document.querySelector("nav").classList.add("navbar-hover");
  document.querySelector("nav").classList.remove("navbar-scrolled");
  document.querySelector(".nav-hover").classList.add("active-hover");
});

document.querySelector("#home-nav").addEventListener("mouseout", () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").classList.add("navbar-scrolled");
  } else {
    document.querySelector("nav").classList.remove("navbar-scrolled");
  }
  document.querySelector("nav").classList.remove("navbar-hover");
  document.querySelector(".nav-hover").classList.remove("active-hover");
});
