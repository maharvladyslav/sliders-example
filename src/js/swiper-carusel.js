const swiper = new Swiper(".swiper", {
  // Параметри
  effect: "creative", //інші ефекти: "slide", "fade", "cube", "coverflow", "flip", "cards"
  // Для режиму "creative"
  creativeEffect: {
    prev: {
      translate: ["-80%", 0, 0],
      scale: 0.5,
    },
    next: {
      translate: ["80%", 0, 0],
      scale: 0.5,
    },
  },

  loop: true,
  //   Кількість слайдів на екрані
  slidesPerView: 3,
  //   Активний слайд в центрі
  centeredSlides: true,

  // Якщо потрібна пагінація
  pagination: {
    el: ".swiper-pagination",
    type: "bullets", // default, інші варіанти: "fraction", "progressbar", "custom"
    clickable: true, // щоб можна було клікати по крапках пагінації
  },

  // Якщо потрібні стрілки навігації
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Адаптив
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.2,
    },
    1200: {
      slidesPerView: 1.5,
    },
  },
});
