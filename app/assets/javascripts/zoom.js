jQuery(document).ready(function() {
  var scrollWidth = getScrollbarWidth()
  applyZoom()
  $('.main-container').css('display', 'block')
})

function applyZoom() {
  document.querySelector('body').style.setProperty('--origin-width', window.devicePixelRatio * (window.screen.width - getScrollbarWidth()))
  document.querySelector('body').style.setProperty('--font-size-offset', ((window.devicePixelRatio * window.screen.width) / 1920))
}

$(window).bind('hashchange', function (e) { 
  location.reload(false)
});

function getScrollbarWidth() { 
  var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>'); 
  $('body').append(div); 
  var w1 = $('div', div).innerWidth(); 
  div.css('overflow-y', 'scroll'); 
  var w2 = $('div', div).innerWidth(); 
  $(div).remove(); 
  return (w1 - w2); 
}