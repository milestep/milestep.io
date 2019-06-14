function sendMail(e) {
  e.preventDefault()
  let data = validation($('.message-form')[0])
  if (!data) return

  fetch('/contact_us', { method: 'POST', body: new FormData(data) })
    .then(function(response) {clearInputs(response.statusText)})
    .catch(function(e) {notify('Error sending message', 'error')})
}

function clearInputs(text) {
  $.each($('.message-form input'), function(i, item) {
    if (item.name == 'name' || item.name == 'email' || item.name == 'message') {
      item.value = ''
  }})

  notify(text, 'success')
}

function notify(text, type) {
  let params = { position: 'right-top', theme: type }
  $.notiny({ text: text, ...params })
}

function validation(obj) {
  let inputs = obj.getElementsByTagName('input')

  if (!(/[a-zA-Zа-яА-ЯёЁ]{3,25}/).test(inputs.name.value)) {
   notify('Name is incorect!', 'warning')
    return null
  }

  if (!(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,10}/).test(inputs.email.value)) {
    notify('Email is incorect!', 'warning')
    return null
  }

  if (!(/^[а-яА-ЯёЁa-zA-Z0-9]{3,255}/).test(inputs.message.value)) {
    notify('Message is incorect!', 'warning')
    return null
  }

  return obj
}
