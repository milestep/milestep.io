jQuery(document).ready(function () {
  // document.onkeydown = document.onkeyup = document.onkeypress = handle;
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: arrowUp(); break;
      case 40: arrowDown(); break;
      case 37: arrowLeft(); break;
      case 39: arrowRight(); break;
      default: keysStatus(e.keyCode)
    }
  }

  function keysStatus(st) {
    $('.keys-status').text(st)
  }

  function arrowUp(){
    console.log('up')
    keysStatus('up')
  }

  function arrowDown(){
    console.log('down')
    keysStatus('down')
  }

  function arrowLeft(){
    console.log('left')
    keysStatus('left')
  }

  function arrowRight(){
    console.log('right')
    keysStatus('right')
  }

  $.jInvertScroll(['.scroll'],
    {
    onScroll: function(percent) {
      $('.paralax-status').text(Math.round(percent * 3840) + 'px')
    }
  });

  // console.log($('.scroll-4').css('left'))
})


