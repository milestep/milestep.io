(new Promise((resolve, reject) => {
  window.onload = resolve
}))
.then(() => {
  let preloaderEl = document.getElementById('preloader')
  preloaderEl.classList.add('hiden')
  setTimeout(function(){preloaderEl.remove()}, 500)
})
