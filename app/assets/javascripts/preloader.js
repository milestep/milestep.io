(new Promise((resolve, reject) => {
  window.onload = resolve
}))
.then(() => {
  let preloaderEl = document.getElementById('preloader')
  preloaderEl.classList.add('hiden')
  setTimeout(function(){
    preloaderEl.remove()
    if(document.location.href.split('#').length > 1) {
      const id = document.location.href.split('#')[1]
      const offset = document.getElementById(id).offsetParent.offsetWidth - document.getElementById(id).offsetLeft - document.getElementById(id).offsetWidth
      window.scrollTo({top: offset, behavior: "smooth"})
    }
  }, 500)
})
