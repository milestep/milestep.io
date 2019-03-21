"use strict"
jQuery(document).ready(function () {
  //state
  const
    DEV = 1, //false = prod, true = dev
    DisableWheel = false,
    numberOfPages = 5,
    _ = '#paralax ',
    displWidth = $(window).width(),
    displHeight = $(window).height(),
    docWidth = $(document).width(),
    docHeight = $(document).height();

  //initial params
  if (DEV) {
    $(_+'.statusbar .paralax').text('paralax %')
    $(_+'.statusbar .keys').text('key')
    $(_+'.statusbar .wheel').text('wheel px')
  }

  //listeners
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: keyArrowUp(); break;
      case 40: keyArrowDown(); break;
      case 37: keyArrowLeft(); break;
      case 39: keyArrowRight(); break;
      case 32: keySpace(); break;
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

  const perfectCircle = $(_+'.perfect-circle')
  $.jInvertScroll(['.scroll'],
    {
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

        if (DEV) $(_+'.statusbar .paralax').text(Math.round(percent * 100) + '%')
      }
    }
  );

  $('#paralax').mousemove(function(e) {
    let x = e.clientX, y = e.clientY;

    if (DEV) $(_+'.statusbar .cursor').text(`x: ${x} y: ${y}`)

    $('#backlight').css({top: y, left: x});
  });

  $(_+'.navbar-btn, nav').on('click', function(){
    $(_+'.navbar-btn').toggleClass('active')
    $(_+'nav').toggleClass('hiden')
    $(_+'.contact-us-btn').toggleClass('blur')
  })

  $("#carousel").featureCarousel({    
    largeFeatureWidth : docHeight / 1.65,
    largeFeatureHeight: docHeight / 1.65,
    smallFeatureWidth: docHeight / 3.3,
    smallFeatureHeight: docHeight / 3.3,
    topPadding: 0,
    smallFeatureOffset: docHeight / 8,
    carouselSpeed: 1000,
    autoPlay: 3000,
    stopOnHover: false,
    sidePadding: docWidth / 20,
  });

  //functions
  function onWheel(e) {
    let statusElem = $(_+'.statusbar .wheel')
    e = e || window.event; //IE
    var delta = e.deltaY || e.detail || e.wheelDelta; //wheelDelta всегда 120/-120

    if (DEV) statusElem.text(Math.round(delta + +statusElem.text() || 0))
    if (DisableWheel) e.preventDefault ? e.preventDefault() : (e.returnValue = false); //отменяет прокрутку колесиком мыши
  }

  //!!!!!!!!!!!!!!!!!! доделать!!!!!!!!!!!!!!!!!!!!!!!
  function scrollPage(direction) {
    function getPos() {
      let curScroll = $(window).scrollTop() + 1
      let curScrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

      // for (let i = 0; i < numberOfPages; i++) {
      //   if (Math.ceil(displWidth * i) <= curScroll && curScroll < Math.ceil(displWidth * (i + 1))) {
      //     return direction == '>' ?
      //       displWidth * (i + 1) :
      //       displWidth * (i - 1)
      //   }
      // }

      return direction == '>' ?
        $(window).scrollTop() + displWidth :
        $(window).scrollTop() - displWidth
    }

    $("html:not(:animated),body:not(:animated)").animate({
      scrollTop: getPos()
    }, 500);
    return false;
  }

  if (DEV) {setInterval(function(){
    let d = new Date();
    let curTime = [cz(d.getHours()), cz(d.getMinutes()), cz(d.getSeconds())].join(':')

    function cz(i) {return i < 10 ? '0' + i : i}
    $(_+'.time').text(curTime)
  }, 500)}

  function keysStatus(st) {
    if (DEV) $(_+'.statusbar .keys').text(st)
  }

  function keyArrowUp(){    
    scrollPage('<')
    keysStatus('up')
  }

  function keyArrowDown(){
    scrollPage('>')
    keysStatus('down')
  }

  function keyArrowLeft(){
    scrollPage('<')
    keysStatus('left')
  }

  function keyArrowRight(){
    scrollPage('>')
    keysStatus('right')
  }

  function keySpace(){    
    scrollPage('>')
    keysStatus('space')
  }
})
