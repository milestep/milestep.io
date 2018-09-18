jQuery(document).ready(function() {
  applyZoom()
  $('.main-container').css('display', 'block')
})

function applyZoom() {
  document.querySelector('body').style.setProperty('--origin-width', window.devicePixelRatio * window.screen.width)
  document.querySelector('body').style.setProperty('--font-size-offset', ((window.devicePixelRatio * window.screen.width) / 1935))
}

$(window).bind('hashchange', function (e) { 
  location.reload(false)
});
