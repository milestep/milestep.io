if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/serviceworker.js', {scope: './'}).then(() => {
    return navigator.serviceWorker.ready;
  }).then(req => {
    console.log('Service worker registered!', req);
  }).catch(error => {
    console.log('Service Worker error', error);
  });
}

