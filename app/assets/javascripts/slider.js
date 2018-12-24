$(document).ready(function() {
  let sizeWindow = $( window ).width()

  var $status = $('.slider-info-number-page-js');
  var $slickElement = $('.slider-team-slick-js');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' / ' + slick.slideCount);
  });

  if (sizeWindow >= 1024) {
    $('.slider-team-slick-js').slick({
      rows: 2,
      slidesPerRow: 3,
      autoplay: true,
      dots: true,
      autoplaySpeed: 2000,
      arrows: false
    });
  } else if (768 <= sizeWindow && sizeWindow <= 960) {
    $('.slider-team-slick-js').slick({
      rows: 2,
      slidesPerRow: 2,
      autoplay: true,
      dots: true,
      autoplaySpeed: 2000,
      arrows: false,
      swipe: true
    });
    $('.slider-project-slick-js').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 21
          }
        }
      ]
    });
  } else if (320 <= sizeWindow && sizeWindow <= 768) {

    $('.slider-team-slick-js').slick({
      centerMode: true,
      centerPadding: '60px',
      rows: 1,
      slidesPerRow: 1,
      autoplay: true,
      dots: true,
      autoplaySpeed: 2000,
      arrows: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    $('.slider-project-slick-js').slick({
      centerMode: true,
      centerPadding: '60px',
      rows: 1,
      slidesPerRow: 1,
      autoplay: true,
      dots: true,
      autoplaySpeed: 2000,
      arrows: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  }
});
