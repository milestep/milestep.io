jQuery(document).ready(function() {
  applyZoom()
})

function applyZoom() {
  document.querySelector('body').style.setProperty('--origin-width', window.devicePixelRatio * $(document).width())
  document.querySelector('body').style.setProperty('--font-size-offset', ((window.devicePixelRatio * $(document).width()) / 1920))
}

$(window).bind('hashchange', function (e) { 
  location.reload(true)
});
