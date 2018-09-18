$(document).ready(function() {
  $('.slider-technologies-slick-js').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.arrow-prev-js'),
    nextArrow: $('.arrow-next-js')
  });
});

$(document).ready(function() {
  $('.slider-team-slick-js').slick({
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
});
