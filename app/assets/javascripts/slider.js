$(document).ready(function() {
  $('.slider-technologies-slick-js').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.arrow-prev-js'),
    nextArrow: $('.arrow-next-js')
  });

  var $status = $('.slider-info-number-page-js');
  var $slickElement = $('.slider-team-slick-js');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text('0' + i + ' / ' + '0' + slick.slideCount);
  });

  $('.slider-team-slick-js').slick({
    rows: 2,
    slidesPerRow: 3,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    arrows: false
  });
});
