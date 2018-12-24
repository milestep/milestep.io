function burgerAction(){
  var burgerPos = ($('.burger-button').css('left')).slice(0, -2)/ document.documentElement.clientWidth 
  burgerPos = burgerPos < 0.77 ? '76.3vw' : '74.3vw'
  //$('.burger-button').css('left', burgerPos)
  $('.burger-hidable').map((index, element) => {
    var style = $(element).css('display') == 'none' ? 'block' : 'none'
    $(element).css('display', style)
    if (style === 'block') {
      $('#burger')[0].src = 'assets/header/close.svg'
    } else {
      $('#burger')[0].src = 'assets/header/burger.png'
    }
  })
}
