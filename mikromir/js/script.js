document.addEventListener("DOMContentLoaded", function () {
  let burger = document.querySelector('.burger');
  burger.addEventListener('click', function () {
    this.closest('.header').classList.toggle('active');
  });

  let overlay = document.querySelector('.overlay');
  overlay.addEventListener('click', function () {
    this.closest('.header').classList.remove('active');
  });

  new Swiper('.js-projects-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      prevEl: '.js-projects-slider__prev',
      nextEl: '.js-projects-slider__next',
    },
    breakpoints: {
      769: {
        slidesPerView: 1.78,
        spaceBetween: 32,
        speed: 0,
      }
    }
  });

  new Swiper('.js-about', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      prevEl: '.js-about__prev',
      nextEl: '.js-about__next',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });

  let swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      375: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      500: {
        slidesPerView: 4,
        spaceBetween: 32
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1441: {
        slidesPerView: 4,
        spaceBetween: 32
      }
    }
  });
  let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: ".detail__arrow_prev",
      nextEl: ".detail__arrow_next",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  new Swiper('.small-slider', {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });

  let card = document.querySelectorAll('.card');
  card.forEach(card => {
    let toFavBtn = card.querySelector('.card__tofav');
    toFavBtn.addEventListener('click', function () {
      card.classList.toggle('js-inFav');
    });
  });

  let tabsBtns = document.querySelectorAll('.js-tabs-btn');
  tabsBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      let id = this.getAttribute('data-tab');
      let tabWrapper = this.closest('.js-tabs');
      let content = tabWrapper.querySelector('.js-tabs-item[data-tab="' + id + '"]');

      if (tabWrapper.querySelector('.js-tabs-btn.active')) {
        tabWrapper.querySelector('.js-tabs-btn.active').classList.remove('active');
      };
      this.classList.add('active');

      tabWrapper.querySelector('.js-tabs-item.active').classList.remove('active');
      content.classList.add('active');
    });
  });
});