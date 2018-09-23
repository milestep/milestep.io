function scroller(target) {
  if ($('.menu-container').css('display') == 'block')
    burgerAction()
  var position = $('#' + target).position().top
  $([document.documentElement, document.body]).animate({
    scrollTop: position
  }, 1000);
}
var passiveEvent = {
  setup: function( _, ns, handle ){
    if ( ns.includes("noPreventDefault") ) {
      this.addEventListener("touchstart", handle, { passive: false });
    } else {
      this.addEventListener("touchstart", handle, { passive: true });
    }
  }
};
jQuery.event.special.touchstart = passiveEvent;
jQuery.event.special.touchmove = passiveEvent;
jQuery.event.special.mousewheel = passiveEvent;
jQuery.event.special.wheel = passiveEvent;
