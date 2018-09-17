jQuery(document).ready(function() {
  console.log($(document).width())
  document.querySelector('body').style.setProperty('--origin-width', window.devicePixelRatio * $(document).width())
  document.querySelector('body').style.setProperty('--font-size-offset', ((window.devicePixelRatio * $(document).width()) / 1920))
  // $('.main-container').css('width', window.devicePixelRatio * $(document).width())
  // $('.main-container').css('max-width', window.devicePixelRatio * $(document).width())
  
})

jQuery(window).resize(function() {
  zoomBlock()
});

function zoomBlock() {
  if (window.devicePixelRatio <= 1) {
    // document.querySelector('body').style.setProperty('--font-size-offset', ((1 - window.devicePixelRatio) * screen.width) / 1920)
  } 
}

// $(document).scroll(() => {
//   document.querySelector('body').style.setProperty('--origin-width', window.devicePixelRatio * $(document).width())
//   document.querySelector('body').style.setProperty('--font-size-offset', ((window.devicePixelRatio * $(document).width()) / 1920))
// })
