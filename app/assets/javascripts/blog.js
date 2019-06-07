"use strict"
jQuery(document).ready(function() {
  $('.blog-header .navigation-panel .contact-us-button').on('click', function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(document).height()
    }, 1000);
  })
})