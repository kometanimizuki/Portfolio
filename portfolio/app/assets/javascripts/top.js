$(document).on('turbolinks:load', function() {
  $('.opend').on('click', function () {
    $('.nav-bar').fadeToggle();
    $('.nav-bar').toggleClass('active');
  });
});