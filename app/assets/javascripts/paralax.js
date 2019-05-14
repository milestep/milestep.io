"use strict"
jQuery(document).ready(function() {
  // if (window.location.pathname != '/paralax') { return }
  //state
  const
    DEV = 1, //false = prod, true = dev
    DISABLE_WEEL = false,
    NUMBER_OF_PAGES = 7,
    SCROLL_SPEED = 1500,
    IS_MOBILE = false;
  let screenRatio = 1; //initial value
  
  hideArrows();

  //listeners
  $(window).scroll(function() {
    switch (currentPage()) {
      case 1: $('.sprites .layer-2 img').removeClass('hiden'); break;
      case 4: $('.content-page-4 .title').removeClass('mini'); break;
      default: $('.sprites .layer-2 img').addClass('hiden');        
               $('.content-page-4 .title').addClass('mini');
    }
  });

  document.onkeydown = function(e) {
    let on = new Keys();

    switch (e.keyCode) {
      case 38: on.arrowUp(e); break;
      case 40: on.arrowDown(e); break;
      case 37: on.arrowLeft(e); break;
      case 39: on.arrowRight(e); break;
      case 32: on.space(e); break;
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
    screenRatio = $(document).height() - $(window).height();
  }).mousemove(function(e) {
    let x = e.clientX, y = e.clientY;
    if (DEV) $('.statusbar .cursor').text(`x: ${x} y: ${y}`)
    $('#backlight').css({top: y, left: x});
  });

  $('#an-2, #an-3, #an-4, #an-5, #an-6').on('click', function() {     ///УЗНАТЬ ЧТО ДЕЛАЕТ
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

  $('nav li.desktop').on('click', function (e) {
    e.preventDefault();
    let pos = (1 / (NUMBER_OF_PAGES - 1)) *
              ($($(this).find('a').attr('href')).attr('id').substring(3) - 1); //#an-1, #an-2
    $('html, body').animate({scrollTop: Math.ceil(screenRatio*pos) + 'px'}, SCROLL_SPEED);
  });


  //Ripchanskiy functions

  $('#paralax .contact-us-btn').on('click', function () {
    scrollPage(7);
  });

  $('#paralax .content-page-1 #portfolio-btn').on('click', function () {
    scrollPage(4)
  });
//


  $('.navbar-btn, nav').on('click', function() {
    $('.navbar-btn').toggleClass('active');
    $('nav').toggleClass('hiden');
    $('.contact-us-btn, .perfect-circle').toggleClass('blur');
    $('.arrow-right').addClass('hide');
    $('.arrow-left').toggleClass('hide');
  })

  $('.arrow-left').on('click', function() {    
    scrollPage('<')
  })

  $('.arrow-right').on('click', function() {    
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
    trackerSummation: !!DEV,
    leftButtonTag: '#carousel-left, #carousel-tiny-left',
    rightButtonTag: '#carousel-right, #carousel-tiny-right'
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
    focusOnSelect: false,
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

  //*functions
  function currentPage() {
    let curScroll = $(window).scrollTop() + 1;
    for (let i = 0; i < NUMBER_OF_PAGES; i++) {
      if (Math.ceil($(window).width() * i) <= curScroll && curScroll < Math.ceil($(window).width() * (i + 1))) {
        if (DEV) $('.cur-page').text(`current page: ${i + 1}`);
        return i + 1;
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
      if (direction == 7) {
        return screenRatio*(direction*step) + 1;
      } else  if(direction == 4) {
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
    }, 500);
  }

  function hideArrows() {
    $('.arrow-left').appendTo($('.arrow-left').parent()); //reset animation
    $('.arrow-right').appendTo($('.arrow-right').parent());

    if ((currentPage()) >= (NUMBER_OF_PAGES)) {
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
})
