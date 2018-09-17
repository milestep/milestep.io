jQuery(document).ready(function() {
  document.querySelector('body').style.setProperty('--origin-width', window.devicePixelRatio * $(document).width())
  document.querySelector('body').style.setProperty('--font-size-offset', ((window.devicePixelRatio * $(document).width()) / 1920))
})
