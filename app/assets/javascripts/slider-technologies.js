$(document).ready(function() {
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.arrow-prev-js'),
    nextArrow: $('.arrow-next-js')
  });
});
