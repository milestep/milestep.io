"use strict"
jQuery(document).ready(function () {
  //state
  const
    DEV = 1, //false = prod, true = dev
    DISABLE_WEEL = false,
    NUMBER_OF_PAGES = 7,
    DISPL_WIDTH = $(window).width(),
    SCROLL_SPEED = 1500;
  let screenRatio = 1; //default value

  //initial params
  if (DEV) {
    $('.statusbar .paralax').text('paralax %')
    $('.statusbar .keys').text('key')
    $('.statusbar .wheel').text('wheel px')
  }

  //listeners
  $('#paralax').ready(function(){
    screenRatio = $(document).height() - $(window).height();
  })

  $('.content-container').on('click', function(){
    $('.navbar-btn').removeClass('active');
    $('nav').addClass('hiden');
    $('.contact-us-btn, .perfect-circle').removeClass('blur');
    $('.arrow-right').removeClass('hide');
  })

  $('nav a').on('click', function (e) {
    e.preventDefault();
    let pos = (1 / (NUMBER_OF_PAGES - 1)) * ($($(this).attr('href')).attr('id').substring(3) - 1);
    console.log(NUMBER_OF_PAGES)
    $('html, body').animate({scrollTop: Math.ceil(screenRatio*pos) + 'px'}, SCROLL_SPEED);
  });

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: keyArrowUp(e); break;
      case 40: keyArrowDown(e); break;
      case 37: keyArrowLeft(e); break;
      case 39: keyArrowRight(e); break;
      case 32: keySpace(e); break;
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

  const perfectCircle = $('.perfect-circle')
  $.jInvertScroll(['.scroll'],
    {
      height: $(window).width() * NUMBER_OF_PAGES,
      onScroll: function(percent) {
        perfectCircle.circleProgress({
          value: percent,
          animation: false,
          fill: '#ff1e41',
          emptyFill: 'rgba(0, 0, 0, .8)',
          startAngle: Math.PI * 1.7,
          thickness: 2,
          lineCap: 'round',
          size: 77
        });

        if (DEV) $('.statusbar .paralax').text(Math.round(percent * 100) + '%')
      }
    }
  );

  $('#paralax').mousemove(function(e) {
    let x = e.clientX, y = e.clientY;

    if (DEV) $('.statusbar .cursor').text(`x: ${x} y: ${y}`)

    $('#backlight').css({top: y, left: x});
  });

  $('.navbar-btn, nav').on('click', function() {
    $('.navbar-btn').toggleClass('active');
    $('nav').toggleClass('hiden');
    $('.contact-us-btn, .perfect-circle').toggleClass('blur');
    $('.arrow-right').toggleClass('hide');
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
    // captionBelow: false
  });

  $('.arrow-right').on('click', function(){    
    scrollPage('>')
  })

  //functions
  function onWheel(e) {
    let statusElem = $('.statusbar .wheel')
    e = e || window.event; //IE
    var delta = e.deltaY || e.detail || e.wheelDelta; //wheelDelta всегда 120/-120

    if (DEV) statusElem.text(Math.round(delta + +statusElem.text() || 0))
    if (DISABLE_WEEL) e.preventDefault ? e.preventDefault() : (e.returnValue = false); //отменяет прокрутку колесиком мыши
  }

  function scrollPage(direction) {
    function getPos() {
      let curScroll = $(window).scrollTop() + 1;
      let step = 1 / (NUMBER_OF_PAGES - 1);

      for (let i = 0; i < NUMBER_OF_PAGES; i++) {
        if (Math.ceil(DISPL_WIDTH * i) <= curScroll && curScroll < Math.ceil(DISPL_WIDTH * (i + 1))) {
          let curPos = (1 / (NUMBER_OF_PAGES - 1)) * i;

          arrowHide(++i, direction);

          return (direction == '>') ?
            screenRatio*(curPos+step) + 1:
            screenRatio*(curPos-step) + 1
        }
      }
    }
    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: getPos()
    }, 500);
  }

  function arrowHide(curIndex, direction) {
    let curPage = (direction == '>') ?
                    curIndex + 1:
                    curIndex - 1;

    return (curPage >= (NUMBER_OF_PAGES)) ?
      $('.arrow-right').addClass('hide') :
      $('.arrow-right').removeClass('hide')
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

  function keyArrowUp(e){
    e.preventDefault()
    scrollPage('<')
    keysStatus('up')
  }

  function keyArrowDown(e){
    e.preventDefault()
    scrollPage('>')
    keysStatus('down')
  }

  function keyArrowLeft(e){
    e.preventDefault()
    scrollPage('<')
    keysStatus('left')
  }

  function keyArrowRight(e){
    e.preventDefault()
    scrollPage('>')
    keysStatus('right')
  }

  function keySpace(e){
    e.preventDefault()
    scrollPage('>')
    keysStatus('space')
  }
})
