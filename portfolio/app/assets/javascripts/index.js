$(document).on('turbolinks:load', function() {
  $('.modal-open').each(function() {
    $(this).on('click', function(){
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.modal-close').on('click', function(){
    $('.modal').fadeOut();
    return false;
  });
});