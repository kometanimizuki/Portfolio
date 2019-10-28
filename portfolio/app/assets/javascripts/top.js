$(document).on('turbolinks:load', function() {
  $('#opend').on('click', function () {
    $('.toggle').slideToggle();
    $('.toggle').toggleClass('active');
  });
});