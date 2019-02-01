function scroller(target) {
  if ($('.menu-container').css('display') == 'block')
    burgerAction()

  var position = $('#' + target).offset().top

  $([document.documentElement, document.body]).animate({
    scrollTop: position
  }, 1000);

  gtag_report_conversion();

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-766088469/hiq-CO_vn5QBEJWqpu0C',
      'value': 1.0,
      'currency': 'USD',
      'event_callback': callback
    });
    return false;
  }

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
