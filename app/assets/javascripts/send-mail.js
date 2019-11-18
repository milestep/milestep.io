function sendMail(e) {
  e.preventDefault()
  let data = validation($('.message-form')[0])
  if (!data) return

  fetch('/contact_us', { method: 'POST', body: new FormData(data) })
    .then(function(response) {clearInputs('Message was successfully delivered!')})
    .catch(function(e) {notify('Unable to deliver your message!', 'error')})
}

function clearInputs(text) {
  $.each($('.message-form input'), function(i, item) {
    if (item.name == 'name' || item.name == 'email' || item.name == 'message') {
      item.value = ''
    }
  })
  notify(text, 'success')
}

function notify(text, type) {
  let params = { position: 'right-top', theme: type }
  $.notiny({ text: text, ...params })
}

const validEmailRegex = RegExp(
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
);

function validation(obj) {
  let inputs = obj.getElementsByTagName('input')

  if (!inputs.name.value) {
    notify('Name is required!', 'warning')
    return null
  }

  if (!inputs.email.value) {
    notify('Email is required!', 'warning')
    return null
  }

  if (!validEmailRegex.test(inputs.email.value)) {
    notify('Email is incorrect!', 'warning')
    return null
  }

  if (!inputs.message.value) {
    notify('Message is required!', 'warning')
    return null
  }

  if (inputs.message.value.length < 10) {
    notify('Message must be 10 characters long!', 'warning')
    return null
  }

  if (inputs.message.value.length > 255) {
    notify('Message is too long!', 'warning')
    return null
  }

  return obj
}
