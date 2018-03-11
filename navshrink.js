$(window).scroll(function () {
  if ($(document).scrollTop() > 10) {
    $('nav').addClass('change');
    $('.nav-link').addClass('change');
  }
  else {
    $('nav').removeClass('change');
    $('.nav-link').removeClass('change');
  }
});