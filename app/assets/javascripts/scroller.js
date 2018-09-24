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

$(document).on('turbolinks:load', function() {
  var w = $('.main-container').width()
  if(w != screen.width && screen.width > 800) {
    var query = `
      @media screen and (min-width: ${window.innerWidth}px) {
        :root {
          --origin-width: ${window.innerWidth};
          --font-size-offset: ${window.innerWidth/1920.0};
          --statc-font-size-offset: ${window.innerWidth/1920.0};
        }
      }
    `
    $( `<style>${query}</style>` ).appendTo( "head" )
  }
});
