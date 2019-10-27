$(document).on('turbolinks:load', function() {
  $('#opend').on('click', function () {
    $('.nav-bar').slideToggle();
    $('.nav-bar').toggleClass('active');
  });
});