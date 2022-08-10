const headerSwiper = new Swiper('.header-swiper', {
   // Optional parameters
   loop: true,
 
   // If we need pagination
   spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

});
const clientsSwiper = new Swiper('.clients-swiper', {
   // Optional parameters
   loop: true,
 
   // If we need pagination
   spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
   },

});
document.querySelector('.dropdown__btn').addEventListener('click', function() {
  document.querySelector('.dropdown-content').classList.toggle("dropdown--dis");
  document.querySelector('.dropdown-content').classList.toggle("dropdown--active");
});
