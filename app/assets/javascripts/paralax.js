"use strict"
jQuery(document).ready(function () {
  //state
  const
    DEV = 1, //false = prod, true = dev
    DISABLE_WEEL = false,
    NUMBER_OF_PAGES = 7,
    SCROLL_SPEED = 1500;
  let screenRatio = 1; //initial value
  
  hideArrows();

  //listeners
  $(window).scroll(function(){
    if(currentPage() == 2) {
      $('.sprites .layer-4 img').removeClass('hiden')
    } else {
      $('.sprites .layer-4 img').addClass('hiden')
    }
    if(currentPage() == 5) {
      $('.content-page-4 .title').removeClass('mini')
    } else {
      $('.content-page-4 .title').addClass('mini')
    }
  });

  document.onkeydown = function(e) {
    let pressKey = new Keys(e);

    switch (e.keyCode) {
      case 38: pressKey.arrowUp(); break;
      case 40: pressKey.arrowDown(); break;
      case 37: pressKey.arrowLeft(); break;
      case 39: pressKey.arrowRight(); break;
      case 32: pressKey.space(); break;
      default: keysStatus(e.keyCode)
    }
  }

  if (document.addEventListener) {
    document.addEventListener(function(){
      if ('onwheel' in document) return "wheel" // IE9+, FF17+, Ch31+
      else if ('onmousewheel' in document) return "mousewheel" // устаревший вариант события
      else return 'MozMousePixelScroll' // Firefox < 17 
    }(), onWheel)
  } else { // IE8-
    document.attachEvent("onmousewheel", onWheel);
  }

  $('#paralax').ready(function() {
    screenRatio = $(document).height() - $(window).height();
  }).mousemove(function(e) {
    let x = e.clientX, y = e.clientY;
    if (DEV) $('.statusbar .cursor').text(`x: ${x} y: ${y}`)
    $('#backlight').css({top: y, left: x});
  });

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

  $('nav li').on('click', function (e) {
    e.preventDefault();
    let pos = (1 / (NUMBER_OF_PAGES - 1)) * 
              ($($(this).find('a').attr('href')).attr('id').substring(3) - 1); //#an-1, #an-2
    $('html, body').animate({scrollTop: Math.ceil(screenRatio*pos) + 'px'}, SCROLL_SPEED);
  });

  $('.navbar-btn, nav').on('click', function() {
    $('.navbar-btn').toggleClass('active');
    $('nav').toggleClass('hiden');
    $('.contact-us-btn, .perfect-circle').toggleClass('blur');
    $('.arrow-right').addClass('hide');
    $('.arrow-left').toggleClass('hide');
  })

  $('.arrow-left').on('click', function(){    
    scrollPage('<')
  })

  $('.arrow-right').on('click', function(){    
    scrollPage('>')
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
    trackerSummation: !!DEV
  });

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
  });

  $.jInvertScroll(['.scroll'],
    {
      height: $(window).width() * NUMBER_OF_PAGES,
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

        if (DEV) { $('.statusbar .paralax').text(Math.round(percent * 100) + '%') }

        currentPage();
        hideArrows();
      }
    }
  );

  //functions
  function currentPage() {
    let curScroll = $(window).scrollTop() + 1;
    for (let i = 0; i < NUMBER_OF_PAGES; i++) {
      if (Math.ceil($(window).width() * i) <= curScroll && curScroll < Math.ceil($(window).width() * (i + 1))) {
        if (DEV) $('.cur-page').text(`current page: ${++i}`);
        return ++i;
      }
    }
  }

  function onWheel(e) {
    let statusElem = $('.statusbar .wheel')
    e = e || window.event; //IE
    var delta = e.deltaY || e.detail || e.wheelDelta; //wheelDelta всегда 120/-120

    if (DEV) statusElem.text(Math.round(delta + +statusElem.text() || 0))
    if (DISABLE_WEEL) e.preventDefault ? e.preventDefault() : (e.returnValue = false); //отменяет прокрутку колесиком мыши
  }

  function scrollPage(direction) {
    function getPos() {
      let step = 1 / (NUMBER_OF_PAGES - 1);
      let curPos = step * (currentPage() - 2);

      return (direction == '<') ?
        screenRatio*(curPos+step) + 1:
        screenRatio*(curPos-step) + 1
    }

    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: getPos()
    }, 500);
  }

  function hideArrows() {
    $('.arrow-left').appendTo($('.arrow-left').parent()); //сброс анимаций
    $('.arrow-right').appendTo($('.arrow-right').parent());

    if ((currentPage() - 1) >= (NUMBER_OF_PAGES)) {
      $('.arrow-left').addClass('hide')
    } else {
      $('.arrow-left').removeClass('hide')
    }

    if ((currentPage() - 1) <= 1) {
      $('.arrow-right').addClass('hide')
    } else {
      $('.arrow-right').removeClass('hide')
    }      
  }

  if (DEV) {setInterval(function(){
    let d = new Date();
    let curTime = [cz(d.getHours()), cz(d.getMinutes()), cz(d.getSeconds())].join(':')

    function cz(i) {return i < 10 ? '0' + i : i}
    $('.time').text(curTime)
  }, SCROLL_SPEED)}

  function keysStatus(st) {
    if (DEV) $('.statusbar .keys').text(st)
  }

  //classes
  function Keys(e) {
    e.preventDefault()

    this.arrowUp = function(e) {
      scrollPage('>')
      keysStatus('up')      
    }
    
    this.arrowDown = function(e) {
      scrollPage('<')
      keysStatus('down')
    }
    
    this.arrowLeft = function(e) {
      scrollPage('<')
      keysStatus('left')
    }
    
    this.arrowRight = function(e) {
      scrollPage('>')
      keysStatus('right')
    }
    
    this.space = function(e) {
      scrollPage('<')
      keysStatus('space')
    }    
  }
})
