const menuIcon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeNavBtn = document.querySelector('.close-btn');
const body = document.querySelector('body');
menuIcon.addEventListener('click', () => {
  mobileNav.style.opacity = '1';
  mobileNav.style.zIndex = '99';
  menuIcon.style.opacity = '0';
  body.style.overflow = 'hidden';
});
closeNavBtn.addEventListener('click', () => {
  mobileNav.style.opacity = '0';
  mobileNav.style.zIndex = '0';
  menuIcon.style.opacity = '1';
  body.style.overflow = 'auto';
});

//   carousel
var carousel = function () {
  $('.home-slider').owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 0,
    nav: true,
    dots: false,
    // autoplayHoverPause: true,
    smartSpeed: 500,
    items: 1,
    navText: [
      "<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
};
carousel();
