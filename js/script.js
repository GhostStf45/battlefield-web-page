'use strict'
$(document).ready(function () {
   /* Nav fixed */
   $(window).scroll(function () {

      console.log($(window).scrollTop());

      if ($(window).scrollTop() > 150) {
         $('.navbar').addClass('fixed-top');
      }

      if ($(window).scrollTop() < 151) {
         $('.navbar').removeClass('fixed-top');
      }
   });
   window.sr = ScrollReveal();
   sr.reveal('.navbar-brand', {
      duration: 500,
      origin: 'left',
      distance: '300px'
   })
   /* Alert info animation */
   sr.reveal('.alert-game', {
      duration: 2000,
      origin: 'right',
      distance: '300px'
   });
   /* company logos */
   sr.reveal('.secondary-title', {
      duration: 2000,
      origin: 'left',
      distance: '300px'
   });
   sr.reveal('.logo-normal-size', {
      duration: 2000,
      origin: 'bottom',
      distance: '300px'
   });
   // Add slideDown animation to Bootstrap dropdown when expanding.
   $('.dropdown').on('show.bs.dropdown', function () {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
   });
   // Add slideUp animation to Bootstrap dropdown when collapsing.
   $('.dropdown').on('hide.bs.dropdown', function () {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
   });
   
});