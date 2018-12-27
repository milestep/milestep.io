$(document).ready(function () {
  let sizeWindow = $(window).width()

  var $status = $('.slider-info-number-page-js');
  var $slickElement = $('.slider-team-slick-js');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' / ' + slick.slideCount);
  });

  if (sizeWindow >= 1024) {
    $('.slider-team-slick-js').slick({
      dots: true,
      arrows: false,
      infinite: true,
      rows: 2,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
    });

  } else if (768 <= sizeWindow && sizeWindow <= 960) {
    $('.slider-team-slick-js').slick({
      rows: 2,
      infinite: true,
      slidesPerRow: 2,
      autoplay: true,
      dots: true,
      autoplaySpeed: 2000,
      arrows: false
    });

    $('.slider-project-slick-js').slick({
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 2,
      arrows: false,
    });

  } else if (320 <= sizeWindow && sizeWindow <= 768) {

    $('.slider-team-slick-js').slick({
      centerMode: true,
      centerPadding: '40px',
      rows: 1,
      slidesPerRow: 1,
      slidesToShow: 1,
      autoplay: true,
      dots: true,
      autoplaySpeed: 2000,
      arrows: false
    });

    $('.slider-project-slick-js').slick({
      centerMode: true,
      touchThreshold: 1,
      centerPadding: '40px',
      slidesToShow: 1,
      rows: 1,
      slidesPerRow: 1,
      autoplay: true,
      dots: false,
      autoplaySpeed: 2000,
      arrows: false,
    });
  }
});
