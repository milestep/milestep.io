"use strict"
function hideCookiesBlock(args = {force: false}){
  if(document.cookie.includes("accepted=true")){
    const element = document.getElementById("accept_cookies_block")
    if(args.force)
      element.style.display = "none"
    else {
      element.classList.add("hint");
      setTimeout(() => {
        element.style.display = "none"
      },2000)
    }
  }
}
function acceptCookies(){
  var date = new Date()
  date.setFullYear(date.getFullYear() + 1);
  document.cookie = "accepted=true; expires=" + date.toUTCString();
  hideCookiesBlock()
}
jQuery(document).ready(function() {
  hideCookiesBlock({force: true})
  $('.contact-us-button').on('click', function () {
    $(window).off('scroll');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(document).height()
    }, 1000);
  })
})