jQuery(document).ready(function () {
  //state
  const DEV = 1 //false = prod, true = dev
  const DisableWheel = false

  //initial params
  if (DEV) {
    $('.statusbar .paralax').text('paralax %')
    $('.statusbar .keys').text('key')
    $('.statusbar .wheel').text('wheel px')    
  }

  //listeners
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: arrowUp(); break;
      case 40: arrowDown(); break;
      case 37: arrowLeft(); break;
      case 39: arrowRight(); break;
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

  $.jInvertScroll(['.scroll'],
    {
    onScroll: function(percent) {
      if (DEV) $('.statusbar .paralax').text(Math.round(percent * 100) + '%')
    }
  });

  //functions
  function onWheel(e) {
    let statusElem = $('.statusbar .wheel')
    e = e || window.event; //IE

    //wheelDelta всегда 120/-120
    var delta = e.deltaY || e.detail || e.wheelDelta;

    if (DEV) statusElem.text(Math.round(delta + +statusElem.text() || 0))

    //отменяет прокрутку колесиком мыши
    if (DisableWheel) e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }

  function keysStatus(st) {
    if (DEV) $('.statusbar .keys').text(st)
  }

  function arrowUp(){
    keysStatus('up')
  }

  function arrowDown(){
    keysStatus('down')
  }

  function arrowLeft(){
    keysStatus('left')
  }

  function arrowRight(){
    keysStatus('right')
  }





})
