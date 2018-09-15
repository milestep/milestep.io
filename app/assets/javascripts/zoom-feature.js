jQuery(document).ready(function() {
  applyFontSize()
  zoomBlock()
})

jQuery(window).resize(function() {
  zoomBlock()
});

function zoomBlock() {
  if (window.devicePixelRatio <= 1) {
    var block = $('.about-us')
    $(block).css('width', window.devicePixelRatio * 100 + '%')
    $(block).css('height', (window.devicePixelRatio * 42.7) + 'vw')
    $(block).css('margin-left', (((1 - window.devicePixelRatio) * 100) / 2) + '%')
    $('.vertical-text-image').css('font-size', window.devicePixelRatio * 1.25 + 'vw')
    $('.about-us-title').css('font-size', window.devicePixelRatio * 3 + 'vw')
    $('.milestep-description > p').css('font-size', window.devicePixelRatio + 'vw')
    $('.milestep-description > p').css('width', (window.devicePixelRatio * 21) + 'vw')
  } 
}

function applyFontSize() {
  // window.fontMultiplyer = window.devicePixelRatio * (screen.width / 1920);
  // $('*').map((_, el) => {
  //   $(el).css('font-size', (parseInt($(el).css('font-size')) * window.fontMultiplyer) + 'px')
  // })
}