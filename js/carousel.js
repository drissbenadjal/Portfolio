const slider = document.querySelector('.carousel .carousel--wrap');
//recuperer le fichier projets.json
fetch('js/projets.json')
.then(response => response.json())
.then(data => {
  data.forEach((projet) => {
    let carouselItems = document.createElement('div');
    carouselItems.classList.add('carousel--item');
    carouselItems.innerHTML = `<a data-id="${projet.id}"><img src="${projet.image}" alt="" /></a>
    <h2>${projet.nom}</h2>`;
    slider.appendChild(carouselItems);
  });

  let carouselItems = document.querySelectorAll('.carousel--item a');
  carouselItems.forEach((item) => {
    let id = item.dataset.id;
    item.addEventListener('click', (e) => {
      data.forEach((projetAffiche) => {
        if (projetAffiche.id !== id) return;
        if (document.querySelector('#afficheProjet')) {
          document.querySelector('#afficheProjet').remove();
        }
        const divAfficheProjet = document.createElement('div');
        divAfficheProjet.id = 'afficheProjet';
        divAfficheProjet.innerHTML = `
        <button id="closeAfficheProjet">
          <svg width="25px" height="25px" viewBox="0 0 25 25" fill="#fff">
            <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"></path>
          </svg>
          <p>Retour aux projets</p>
        </button>
        <div class="affiche-projet-containers">
          <div class="affiche-projet-left">
            <img src="${projetAffiche.image}" alt="" />
          </div>
          <div class="affiche-projet-right">
            <h2>${projetAffiche.nom}</h2>
            <div class="affiche-projet-lien">
              <a href="${projetAffiche.lien}" target="_blank">Voir la page projet</a>
              <a href="${projetAffiche.github}" target="_blank">Voir la page Github</a>
            </div>
            <p>${projetAffiche.description}</p>
          </div>
        </div>
        `;
        document.querySelector('main').appendChild(divAfficheProjet);
        document.body.style.overflowY = 'hidden';
        document.querySelector('#closeAfficheProjet').addEventListener('click', (e) => {
          document.querySelector('#afficheProjet').remove();
          document.body.style.overflowY = 'auto';
        });
      });
    });
  });


  const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
  const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

  class DragScroll {
    constructor(obj) {
      this.$el = document.querySelector(obj.el);
      this.$wrap = this.$el.querySelector(obj.wrap);
      this.$items = this.$el.querySelectorAll(obj.item);
      this.$bar = this.$el.querySelector(obj.bar);
      this.init();
    }

    init() {
      this.progress = 0;
      this.speed = 0;
      this.oldX = 0;
      this.x = 0;
      this.playrate = 0;
      //
      this.bindings();
      this.events();
      this.calculate();
      this.raf();
    }

    bindings() {
      [
      'events',
      'calculate',
      'raf',
      'handleWheel',
      'move',
      'raf',
      'handleTouchStart',
      'handleTouchMove',
      'handleTouchEnd'].
      forEach(i => {this[i] = this[i].bind(this);});
    }

    calculate() {
      this.progress = 0;
      this.wrapWidth = this.$items[0].clientWidth * this.$items.length;
      this.$wrap.style.width = `${this.wrapWidth}px`;
      this.maxScroll = this.wrapWidth - this.$el.clientWidth;
    }

    handleWheel(e) {
      this.progress += e.deltaY;
      this.move();
    }

    handleTouchStart(e) {
      e.preventDefault();
      this.dragging = true;
      this.startX = e.clientX || e.touches[0].clientX;
      this.$el.classList.add('dragging');
    }

    handleTouchMove(e) {
      if (!this.dragging) return false;
      const x = e.clientX || e.touches[0].clientX;
      this.progress += (this.startX - x) * 2.5;
      this.startX = x;
      this.move();
    }

    handleTouchEnd() {
      this.dragging = false;
      this.$el.classList.remove('dragging');
    }

    move() {
      this.progress = clamp(this.progress, 0, this.maxScroll);
    }

    events() {
      window.addEventListener('resize', this.calculate);
      
      this.$el.addEventListener('touchstart', this.handleTouchStart);
      this.$el.addEventListener('touchmove', this.handleTouchMove);
      this.$el.addEventListener('touchend', this.handleTouchEnd);
      this.$el.addEventListener('wheel', this.handleWheel);

      this.$el.addEventListener('mousedown', this.handleTouchStart);
      this.$el.addEventListener('mousemove', this.handleTouchMove);
      this.$el.addEventListener('mouseup', this.handleTouchEnd);
      document.body.addEventListener('mouseleave', this.handleTouchEnd);
    }

    raf() {
      // requestAnimationFrame(this.raf)
      this.x = lerp(this.x, this.progress, 0.1);
      this.playrate = this.x / this.maxScroll;
      //
      this.$wrap.style.transform = `translateX(${-this.x}px)`;
      this.$bar.style.transform = `scaleX(${.18 + this.playrate * .82})`;
      //
      this.speed = Math.min(100, this.oldX - this.x);
      this.oldX = this.x;
      //
      this.scale = lerp(this.scale, this.speed, 0.1);
      this.$items.forEach(i => {
        i.style.transform = `scale(${1 - Math.abs(this.speed) * 0.002})`;
        i.querySelector('img').style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`;
      });
    }}



  /*--------------------
  Instances
  --------------------*/
  const scroll = new DragScroll({
    el: '.carousel',
    wrap: '.carousel--wrap',
    item: '.carousel--item',
    bar: '.carousel--progress-bar' });



  /*--------------------
  One raf to rule em all
  --------------------*/
  const raf = () => {
    requestAnimationFrame(raf);
    scroll.raf();
  };
  raf();
});