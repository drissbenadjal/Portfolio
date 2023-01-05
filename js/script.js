AOS.init();

if (window.location.href.indexOf("index") == 1) {
  document.body.style.overflow = "hidden";
}


window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("nav").classList.add("navbar-scrolled");
  } else {
    document.querySelector("nav").classList.remove("navbar-scrolled");
  }
};

document.querySelector("#scroll").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({behavior: "smooth"});
});

let LienProjetFooter = document.querySelectorAll("#footer-projet");
function LienProjetFooterFonction() {
  LienProjetFooter.forEach((lien) => {
    if(window.innerWidth < 950) {
      lien.setAttribute("href", "#projets");
    } else {
      lien.setAttribute("href", "#container-scroll");
    }
  });
}
LienProjetFooterFonction();
window.addEventListener("resize", LienProjetFooterFonction);

let elements = document.querySelectorAll(".rolling-text");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for (let letter of innerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("play");
  });
});

let BurgerBtn = document.querySelector(".mobile");
let BurgerBtnActive = document.querySelector(".ham");
let MenuMobile = document.querySelector(".menu-mobile");
let MenuMobileLien = document.querySelectorAll(".menu-mobile #interne a");

BurgerBtn.addEventListener("click", () => {
  if (MenuMobile.classList.contains("menu-active")) {
    for (let i = 0; i < 300; i++) {
      setTimeout(() => {
        MenuMobile.style.opacity = 1 - i / 300;
      }, i * 1);
    }
    setTimeout(() => {
      MenuMobile.classList.remove("menu-active");
    }, 300);
  } else {
    MenuMobile.classList.add("menu-active");
    for (let i = 0; i < 300; i++) {
      setTimeout(() => {
        MenuMobile.style.opacity = i / 300;
      }, i * 1);
    }
  }
});

MenuMobileLien.forEach((lien) => {
  lien.addEventListener("click", () => {
    MenuMobile.classList.remove("menu-active");
    BurgerBtnActive.classList.remove("active");
  });
});

document.querySelector(".projets-container").addEventListener("mousemove", (event) => {
  document.addEventListener("mousemove", (event) => {
    document.querySelector(".link").style.left = event.clientX + "px";
    document.querySelector(".link").style.top = event.clientY + "px";
    document.querySelector(".link").style.transform =
      "translate(-50%, -50%) rotate(325deg)";
  });
  //quand on est au dessus du .carousel--item a on enleve la class link-hidden
  document.querySelectorAll(".projet").forEach((item) => {
    item.addEventListener("mouseover", () => {
      document.querySelector(".link").classList.remove("link-hidden");
    });
    item.addEventListener("mouseout", () => {
      document.querySelector(".link").classList.add("link-hidden");
    });
  });
});


const slider = document.querySelector('.projets-container');

fetch('js/projets.json')
.then(response => response.json())
.then(data => {
  // data.forEach((projet) => {
  //   let carouselItems = document.createElement('section');
  //   carouselItems.classList.add('projet');
  //   carouselItems.dataset.id = projet.id;
  //   carouselItems.innerHTML = `<img src="${projet.image}" alt="" />
  //   <h2>${projet.nom}</h2>`;
  //   slider.appendChild(carouselItems);
  // });

  let carouselItems = document.querySelectorAll('.projet');
  carouselItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        
      let id = item.dataset.id;
      data.forEach((projetAffiche) => {
        if (projetAffiche.id !== id) return;
        if (document.querySelector('#afficheProjet')) {
          document.querySelector('#afficheProjet').remove();
        }
        let lienSite = '';
        let lienGithub = '';
        if (projetAffiche.url) {
          lienSite = `<a href="${projetAffiche.url}" target="_blank">Aller sur le site <img src="assets/images/lien-externe.webp" alt=""></a>`;
        } else {
          lienSite = '';
        }
        if (projetAffiche.github) {
          lienGithub = `<a href="${projetAffiche.github}" target="_blank">Voir la page Github <img src="assets/images/githublogo.webp" alt=""></a>`;
        } else {
          lienGithub = '';
        }
        projetAffiche.description = projetAffiche.description.replace(/\. /g, '.<br><br>');
        const divAfficheProjet = document.createElement('div');
        divAfficheProjet.id = 'afficheProjet';
        divAfficheProjet.dataset.aos="fade-in-up"
        divAfficheProjet.innerHTML = `
        <button id="closeAfficheProjet">
          <svg width="25px" height="25px" viewBox="0 0 25 25" fill="#fff">
            <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"></path>
          </svg>
          <p>Retour aux projets</p>
        </button>
        <div class="affiche-projet-containers">
          <div class="affiche-projet-left">
            <img draggable="false" src="${projetAffiche.image}" alt=""/>
          </div>
          <div class="affiche-projet-right">
            <h2>${projetAffiche.nom}</h2>
            <div class="affiche-projet-lien">
              ${lienSite}
              ${lienGithub}
            </div>
            <p>${projetAffiche.description}</p>
          </div>
        </div>
        `;
        document.querySelector('.projet-affiche').appendChild(divAfficheProjet);
        document.body.style.overflowY = 'hidden';
        document.querySelector('#closeAfficheProjet').addEventListener('click', (e) => {
          for (let i = 0; i < 100; i++) {
            setTimeout(() => {
              divAfficheProjet.style.opacity = 1 - i / 100;
            }, i);
          }
          setTimeout(() => {
            divAfficheProjet.remove();
            document.body.style.overflowY = 'auto';
          }, 200);
        });
      });
    });
  });

  let carouselItemsMobile = document.querySelectorAll('.projets li');
  carouselItemsMobile.forEach((item) => {
    item.addEventListener('click', (e) => {
      let id = item.dataset.id;
      data.forEach((projetAffiche) => {
        if (projetAffiche.id !== id) return;
        if (document.querySelector('#afficheProjet')) {
          document.querySelector('#afficheProjet').remove();
        }
        let lienSite = '';
        let lienGithub = '';
        if (projetAffiche.url) {
          lienSite = `<a href="${projetAffiche.url}" target="_blank">Aller sur le site <img src="assets/images/lien-externe.webp" alt=""></a>`;
        } else {
          lienSite = '';
        }
        if (projetAffiche.github) {
          lienGithub = `<a href="${projetAffiche.github}" target="_blank">Voir la page Github <img src="assets/images/githublogo.webp" alt=""></a>`;
        } else {
          lienGithub = '';
        }
        projetAffiche.description = projetAffiche.description.replace(/\. /g, '.<br><br>');
        const divAfficheProjet = document.createElement('div');
        divAfficheProjet.id = 'afficheProjet';
        divAfficheProjet.dataset.aos="fade-in-up"
        divAfficheProjet.innerHTML = `
        <button id="closeAfficheProjet">
          <svg width="25px" height="25px" viewBox="0 0 25 25" fill="#fff">
            <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"></path>
          </svg>
          <p>Retour aux projets</p>
        </button>
        <div class="affiche-projet-containers">
          <div class="affiche-projet-left">
            <img draggable="false" src="${projetAffiche.image}" alt=""/>
          </div>
          <div class="affiche-projet-right">
            <h2>${projetAffiche.nom}</h2>
            <div class="affiche-projet-lien">
              ${lienSite}
              ${lienGithub}
            </div>
            <p>${projetAffiche.description}</p>
          </div>
        </div>
        `;
        document.querySelector('.projet-affiche').appendChild(divAfficheProjet);
        document.body.style.overflowY = 'hidden';
        document.querySelector('#closeAfficheProjet').addEventListener('click', (e) => {
          for (let i = 0; i < 100; i++) {
            setTimeout(() => {
              divAfficheProjet.style.opacity = 1 - i / 100;
            }, i);
          }
          setTimeout(() => {
            divAfficheProjet.remove();
            document.body.style.overflowY = 'auto';
          }, 200);
        });
      });
    });
  });
});