$(document).ready(function () {
  function analytics() {
    gtag('event', 'conversion', {
      'send_to': 'AW-766088469/hiq-CO_vn5QBEJWqpu0C',
      'value': 1.0,
      'currency': 'USD'
    });
  }
  $('#send-massage').on('click', analytics)
  $('.contact-us-button').on('click', analytics)
})
