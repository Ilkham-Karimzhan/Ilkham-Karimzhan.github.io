var portfolioSwiper = new Swiper(".portfolio-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        mousewheel: true,
        keyboard: true,
      });
var testimonialsSwiper = new Swiper(".testimonials-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".testimonials-swiper-button--next",
          prevEl: ".testimonials-swiper-button--prev",
        },
      });