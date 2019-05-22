function sendMail(e) {
  e.preventDefault()
  let formData = new FormData($('.message-form')[0])

  fetch('/contact_us', { method: 'POST', body: formData })
    .then(function(response) {clearInputs(response.statusText)})
    .catch(function(error) {notify(error)})

  function clearInputs(text) {
    $.each($('.content-page-7 input'), function(i, item) {
      if (item.name == 'name' || item.name == 'email' || item.name == 'message') {
        item.value = ''
    }})

    notify(text)
  }

  function notify(text) {
    $.notiny({ text: text, position: 'right-top' })
  }
}
