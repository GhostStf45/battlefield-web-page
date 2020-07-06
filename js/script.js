 'use strict'
 window.sr = ScrollReveal();
 sr.reveal('.navbar-brand',{
    duration: 2000,
    origin: 'left',
    distance: '300px'
 })
 /* Alert info animation */
 sr.reveal('.alert-game',{
    duration: 2000,
    origin: 'right',
    distance: '300px'
 });
 /* company logos */
 sr.reveal('.secondary-title',{
   duration: 2000,
   origin:'left',
   distance: '300px'
 });
 sr.reveal('.logo-normal-size',{
    duration: 2000,
    origin:'bottom',
    distance: '300px'
 });
 // Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });
// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });