const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


  // NAV ON SCROLL 
const nav = document.querySelector('nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 1) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

// APPARITION DU BURGER AU CLICK
var burger_menu = document.querySelector('.burger');
var menu = document.querySelector('.sider');
var cross = document.querySelector('.cross');

burger_menu.addEventListener('click', function () {
	menu.classList.toggle('active');
});

cross.addEventListener('click', function () {
	menu.classList.toggle('active');
});

