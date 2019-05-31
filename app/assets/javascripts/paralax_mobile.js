jQuery(document).ready(function() {
  $('#mobile-content-container').ready(function() {
  const LOCATION_PATH = window.location.origin

  $(window).resize(function() {
    document.location.reload()
  })

  $('.navbar-btn, nav').on('click', function() {
    if ($('nav').hasClass('hiden')) {
      $('.navbar-btn').addClass('active');
      $('nav').removeClass('hiden');
    } else {
      $('.navbar-btn').removeClass('active');
      $('nav').addClass('hiden');
    }
  })

  $('button.contact-us-btn').on('click', function() {
    $(location).attr('href', LOCATION_PATH + '/mobile/contact_us');
  })

  $('#portfolio-btn').on('click', function() {
    $(location).attr('href', LOCATION_PATH + '/mobile/portfolio');
  })

  $('#carousel').featureCarousel({
    largeFeatureWidth : $(window).height() / 1.72,
    largeFeatureHeight: $(window).height() / 1.72,
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

  $('.regular').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.carousel-nav-btns'),
    appendDots: $('.carousel-nav-btns'),
    focusOnSelect: true,
    lazyLoad: 'ondemand',
    swipeToSlide: true,
    zIndex: 99,
    customPaging: function(_, i) { return ++i },
    focusOnSelect: false,
  })

  $('#mobile-content-container').on('touchstart', function(event){
    let xClick = event.originalEvent.touches[0].pageX
    $(this).one('touchmove', function(event){
      let xMove = event.originalEvent.touches[0].pageX
      if( xClick > (innerWidth - 20) && Math.floor(xClick - xMove) > 5 ) {
        $('.navbar-btn').addClass('active');
        $('nav').removeClass('hiden');
      } 
    })
  })

  $('.carousel-feature .carousel-image').on('touchstart', function(event){
    let xClick = event.originalEvent.touches[0].pageX
    $(this).one('touchmove', function(event){
      let xMove = event.originalEvent.touches[0].pageX

      if (Math.floor(xClick - xMove) > 5) {
        $('#carousel-tiny-right').click()
      } else {
        $('#carousel-tiny-left').click()
      }
    })
  })
})})
