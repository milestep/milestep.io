function scroller(target) {
  if ($('.menu-container').css('display') == 'block')
    burgerAction()
  var position = $('#' + target).position().top
  $([document.documentElement, document.body]).animate({
    scrollTop: position
  }, 1000);
}
