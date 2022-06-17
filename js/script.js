"use strict"
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());

   }
};


if (isMobile.any()) {
   document.body.classList.add('_touch');

   $('.menu__first-link').click(function () {
      if (!$(this).hasClass('active')) {
         $(".menu__first-link").find('.menu__sublist').slideUp();
         $(".menu__first-link").children('.menu__arrow').removeClass('_active');
         $(this).find('.menu__sublist').slideToggle();
         $(this).addClass('active');
         $(this).children('.menu__arrow').addClass('_active');
      } else {
         $('.menu__first-link').removeClass('active');
         $(".menu__first-link").find('.menu__sublist').slideUp()
         $(".menu__first-link").children('.menu__arrow').removeClass('_active');
      }
   });

   $(document).mouseup(function (e) {
      if (!$('.menu__first-link').is(e.target) && $('.menu__first-link').has(e.target).length === 0) {
         $('.menu__first-link').removeClass('active');
         $('.menu__first-link').children('.menu__arrow').removeClass('_active');
         $(".menu__first-link").find('.menu__sublist').slideUp()
      }
   });
} else {
   document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
   const menuBody = document.querySelector('.menu');
   const fromIcon = document.querySelector('.header__container');
   const iconFrom = document.querySelector('.header__logo');
   const wrapperBody = document.querySelector('body');

   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
      fromIcon.classList.toggle("_active");
      iconFrom.classList.toggle("_active");
      wrapperBody.classList.toggle("_lock");

   });
}

const iconImage = document.querySelector('.image');
if (iconImage) {

   const wrapperImage = document.querySelector('.headerone');
   const headerTenu = document.querySelector('.main__content');
   const headerMenu = document.querySelector('.header__icons');
   iconImage.addEventListener("click", function (e) {

      wrapperImage.classList.add("_close");
      headerTenu.classList.add("_close");
      headerMenu.classList.add("_close");
   });
}


$(document).ready(function () {

   $('.premium__body').slick({
      slidesToShow: 5,
      arrows: true,
      infinite: false,
      adaptiveHeight: true,
      autoplay: false,
      responsive: [{
         breakpoint: 992,
         settings: {
            slidesToShow: 4
         }
      }, {
         breakpoint: 768,
         settings: {
            slidesToShow: 2.99
         }
      }, {
         breakpoint: 580,
         settings: {
            slidesToShow: 2
         }
      }, {
         breakpoint: 430,
         settings: {
            autoplay: true,
            arrows: false,
            slidesToShow: 1.2,
            slidesToScroll: 1,

         }
      }
      ]

   });

});
