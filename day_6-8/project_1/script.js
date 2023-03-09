const menuIcon = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const closeNavBtn = document.querySelector('.close-btn');
const mainOverlay = document.querySelector('.main-overlay');
menuIcon.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(0)';
  menuIcon.style.opacity = '0';
  mainOverlay.classList.add('active');
});
closeNavBtn.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(200px)';
  menuIcon.style.opacity = '1';
  mainOverlay.classList.remove('active');
});
mainOverlay.addEventListener('click', () => {
  mobileNav.style.transform = 'translateX(200px)';
  menuIcon.style.opacity = '1';
  mainOverlay.classList.remove('active');
});

VanillaTilt.init(document.querySelectorAll('.card'), {
  max: 25,
  speed: 400,
});

$('.mix__block').mixItUp();
