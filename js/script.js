document.body.style.overflow = "hidden";

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").classList.add("navbar-scrolled");
  } else {
    document.querySelector("nav").classList.remove("navbar-scrolled");
  }
};

//recuperer tout les a dans la class .mid
const mid = document.querySelectorAll(".mid a");

//pour chaque a on ajoute un event
mid.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    //recuperer uniquement le texte de l'a et le mettre en majuscule et le mettre dans #hover-text
    document.querySelector("#hover-text").innerHTML = e.target.innerText.toUpperCase();
    document.querySelector("nav").classList.add("navbar-hover");
    document.querySelector("nav").classList.remove("navbar-scrolled");
    document.querySelector(".nav-hover").classList.add("active-hover");
  });
  item.addEventListener("mouseout", (e) => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("nav").classList.add("navbar-scrolled");
    } else {
      document.querySelector("nav").classList.remove("navbar-scrolled");
    }
    document.querySelector("nav").classList.remove("navbar-hover");
    document.querySelector(".nav-hover").classList.remove("active-hover");
  });
});

let elements = document.querySelectorAll('.rolling-text');

elements.forEach(element => {
  let innerText = element.innerText;
  element.innerHTML = '';

  let textContainer = document.createElement('div');
  textContainer.classList.add('block');

  for (let letter of innerText) {
    let span = document.createElement('span');
    span.innerText = letter.trim() === '' ? '\xa0' : letter;
    span.classList.add('letter');
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.remove('play');
  });
});