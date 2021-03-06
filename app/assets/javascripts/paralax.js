"use strict"
jQuery(document).ready(function() {
  $('#paralax').ready(function() {
  if (~window.location.pathname.indexOf('/portfolio')) return

  let screenRatio = 1; // initial value
  const LOCATION_PATH = window.location.origin

  // listeners
  $(window).resize(function() { document.location.reload() })

  $(window).scroll(function() {
    currentPage() == 5 ? featureCarousel.start() : featureCarousel.pause()

    switch (currentPage()) {
      case 1:
      $('.sprites .layer-2 img').removeClass('hiden')
      break;

      case 7:
      $('.contact-us-btn').addClass('dissolve')
      break;

      default:
      $('.sprites .layer-2 img').addClass('hiden')
      $('.contact-us-btn').removeClass('dissolve')
    }
  })

  document.onkeydown = function(e) {
    let on = new Keys();

    switch (e.keyCode) {
      case 38: on.arrowUp(e); break;
      case 40: on.arrowDown(e); break;
      case 37: on.arrowLeft(e); break;
      case 39: on.arrowRight(e); break;
      case 32:
      if (currentPage() != window.env.NUMBER_OF_PAGES) on.space(e);
      break;
      default: keysStatus(e.keyCode)
    }
  }

  if (document.addEventListener) {
    document.addEventListener(function() {
      if ('onwheel' in document) return "wheel" // IE9+, FF17+, Ch31+
      else if ('onmousewheel' in document) return "mousewheel" // устаревший вариант события
      else return 'MozMousePixelScroll' // Firefox < 17 
    }(), onWheel)
  } else { // IE8-
    document.attachEvent("onmousewheel", onWheel);
  }

  $('#paralax').ready(function() {
    setScreenRatio()
    hideArrows()
  }).mousemove(function(e) {
    let x = e.clientX, y = e.clientY;
    if (window.env.DEV) $('.statusbar .cursor').text(`x: ${x} y: ${y}`)
    if (!window.env.DEV) $('#backlight').css({top: y, left: x})
  })

  $('#an-2, #an-3, #an-4, #an-5, #an-6').on('click', function() {
    $('.navbar-btn').removeClass('active');
    $('nav').addClass('hiden');
    $('.contact-us-btn, .perfect-circle').removeClass('blur');
    $('.arrow-left').removeClass('hide');
    $('.arrow-right').removeClass('hide');
  })

  $('#an-7').on('click', function() {
    $('.navbar-btn').removeClass('active');
    $('nav').addClass('hiden');
    $('.contact-us-btn, .perfect-circle').removeClass('blur');
    $('.arrow-left').addClass('hide');
  })

  $('#an-1').on('click', function() {
    $('.navbar-btn').removeClass('active');
    $('nav').addClass('hiden');
    $('.contact-us-btn, .perfect-circle').removeClass('blur');
    $('.arrow-right').addClass('hide');
  })

  $('nav li.desktop').on('click', function(e) {
    e.preventDefault();
    let pos = (1 / (window.env.NUMBER_OF_PAGES - 1)) *
              ($($(this).find('a').attr('href')).attr('id').substring(3) - 1); //#an-1, #an-2
    $('html, body').animate({scrollTop: Math.ceil(screenRatio*pos) + 'px'}, window.env.SCROLL_SPEED);
  })

  $('#paralax .contact-us-btn').on('click', function() { scrollPage(6) })

  $('#paralax .content-page-1 #portfolio-btn').on('click', function() { scrollPage(3) })

  $('#portfolio_page .header .main-logo').on('click', function() {
    $(location).attr('href', LOCATION_PATH + '/');
  })

  $('.navbar-btn, nav').on('click', function() {
    $('.navbar-btn').toggleClass('active');
    $('nav').toggleClass('hiden');
    if ($('.navbar-btn').hasClass('active')) {
      $('.contact-us-btn, .perfect-circle').addClass('blur');
    } else {
      $('.contact-us-btn, .perfect-circle').removeClass('blur');
    }
    $('.arrow-right').addClass('hide');
    $('.arrow-left').toggleClass('hide');
  })

  $('.arrow-left').on('click', function() { scrollPage('<') })

  $('.arrow-right').on('click', function() { scrollPage('>') })

  // $('#help').on('click',function(event){if(this.innerHTML=='/_ ')
  //   {let styles='background: #000; color: #c00; line-height: 30px; text-align: center';
  //   console.log("%c  Wait here  ",styles);this.remove();setTimeout(function(){console.clear();
  //     console.log("%c  Follow me http://pornhub.com ",styles)},10000)}
  //   if(this.innerHTML=='?  '){this.innerHTML='/_';this.style.color='#f00'}
  // this.innerHTML+=' '})

  let featureCarousel = $("#carousel").featureCarousel({
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

  setTimeout(function() {
    let i = 0;
    let timer = setInterval(function() {
      featureCarousel.pause(); ++i
      if (i == 10) {clearInterval(timer)}
    }, 50)
  }, 500)

  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.carousel-nav-btns'),
    appendDots: $('.carousel-nav-btns'),
    focusOnSelect: true,
    lazyLoad: 'ondemand', //Accepts 'ondemand' or 'progressive'
    swipeToSlide: true,
    zIndex: 99,
    // customPaging: function(_, i) { return ++i },
    focusOnSelect: false,
  })

  $.jInvertScroll(['.scroll'], {
    height: $(window).width() * window.env.NUMBER_OF_PAGES,
    onScroll: function(percent) {
      $('.perfect-circle').circleProgress({
        value: percent,
        animation: false,
        fill: '#ff1e41',
        emptyFill: 'rgba(0, 0, 0, .8)',
        startAngle: Math.PI * 1.7,
        thickness: 2,
        lineCap: 'round',
        size: 77
      });

      if (window.env.DEV) { $('.statusbar .paralax').text(Math.round(percent * 100) + '%') }

      currentPage()
      hideArrows()
    }
  })

  // functions
  function setScreenRatio() {
    screenRatio = $(document).height() - $(window).height()
  }

  function currentPage() {
    let curScroll = $(window).scrollTop() + 1;
    for (let i = 0; i < window.env.NUMBER_OF_PAGES; i++) {
      if (Math.ceil($(window).width() * i) <= curScroll && curScroll < Math.ceil($(window).width() * (i + 1))) {
        if (window.env.DEV) $('.cur-page').text(`current page: ${i + 1}`);
        return i + 1;
      }
    }
  }
  const ignoredPages = ['/cookie_policy', '/blog']

  function onWheel(e) {
    let statusElem = $('.statusbar .wheel')
    e = e || window.event; //IE
    var delta = e.deltaY || e.detail || e.wheelDelta; //wheelDelta всегда 120/-120
    if (!ignoredPages.includes(window.location.pathname))
      delta < 0 ? scrollPage('>') : scrollPage('<')

    if (window.env.DEV) statusElem.text(Math.round(delta + +statusElem.text() || 0))
    if (window.env.DISABLE_WEEL) e.preventDefault ? e.preventDefault() : (e.returnValue = false); //отменяет прокрутку колесиком мыши
  }

  function scrollPage(direction) {
    function getPos() {
      let step = 1 / (window.env.NUMBER_OF_PAGES - 1);
      if (typeof(direction) == "number") {
        return screenRatio*(direction*step) + 1;
      } else {
        let curPos = step * (currentPage() - 1);
        return (direction == '<') ?
        screenRatio * (curPos + step) + 1 :
        screenRatio * (curPos - step) + 1
      }
    }

    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: getPos()
    }, 500)
  }

  function hideArrows() {
    $('.arrow-left').appendTo($('.arrow-left').parent()); //reset animation
    $('.arrow-right').appendTo($('.arrow-right').parent());

    if ((currentPage()) >= (window.env.NUMBER_OF_PAGES)) {
      $('.arrow-left').addClass('hide')
    } else {
      $('.arrow-left').removeClass('hide')
    }

    if ((currentPage()) <= 1) {
      $('.arrow-right').addClass('hide')
    } else {
      $('.arrow-right').removeClass('hide')
    }
  }

  if (window.env.DEV) {setInterval(function(){
    let d = new Date();
    let curTime = [cz(d.getHours()), cz(d.getMinutes()), cz(d.getSeconds())].join(':')

    function cz(i) {return i < 10 ? '0' + i : i}
    $('.time').text(curTime)
  }, window.env.SCROLL_SPEED)}

  function keysStatus(st) {
    if (window.env.DEV) $('.statusbar .keys').text(st)
  }

  // classes
  function Keys() {
    this.arrowUp = function(e) {
      e.preventDefault()
      scrollPage('>')
      keysStatus('up')
    }
    
    this.arrowDown = function(e) {
      e.preventDefault()
      scrollPage('<')
      keysStatus('down')
    }
    
    this.arrowLeft = function(e) {
      e.preventDefault()
      scrollPage('<')
      keysStatus('left')
    }
    
    this.arrowRight = function(e) {
      e.preventDefault()
      scrollPage('>')
      keysStatus('right')
    }
    
    this.space = function(e) {
      e.preventDefault()
      scrollPage('<')
      keysStatus('space')
    }
  }
})})
