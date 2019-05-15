jQuery(document).ready(function() {

  $('.navbar-btn, nav').on('click', function() {
    $('.navbar-btn').toggleClass('active');
    $('nav').toggleClass('hiden');
    $('.contact-us-btn, .perfect-circle').toggleClass('blur');
  })

  $("#carousel").featureCarousel({    
    largeFeatureWidth : $(window).height() / 1.65,
    largeFeatureHeight: $(window).height() / 1.65,
    smallFeatureWidth: $(window).height() / 3.3,
    smallFeatureHeight: $(window).height() / 3.3,
    topPadding: 0,
    smallFeatureOffset: $(window).height() / 8,
    carouselSpeed: 1000,
    autoPlay: 3000,
    stopOnHover: false,
    sidePadding: $(window).width() / 20,
    trackerSummation: !!window.env.DEV,
    leftButtonTag: '#carousel-left, #carousel-tiny-left',
    rightButtonTag: '#carousel-right, #carousel-tiny-right'
  })

  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.carousel-nav-btns'),
    appendDots: $('.carousel-nav-btns'),
    focusOnSelect: true,
    lazyLoad: 'ondemand', //Accepts 'ondemand' or 'progressive'
    swipeToSlide: true,
    zIndex: 99,
    customPaging: function(_, i) { return ++i },
    focusOnSelect: false,
  })
})
