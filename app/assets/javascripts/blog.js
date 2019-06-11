"use strict"
jQuery(document).ready(function() {
  $('.contact-us-button').on('click', function () {
    $(window).off('scroll');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(document).height()
    }, 1000);
  })
})