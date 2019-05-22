function sendMail() {
  var form = document.querySelector('form.message-form')
  var formData = new FormData(form);

  var request = new XMLHttpRequest();
  request.open('POST', '/contact_us', true);
  request.onload = function () {
    console.log("Server responded with %o", request.responseText)
  };
  request.send(formData);

  $.each($('.content-page-7 input'), function( i, item ) {
    switch(item.name) {
      case 'name':
      case 'email':
      case 'message': item.value = ''; break
      default: return
    }
  })

  $.notiny({ text: "Mail sent!", position: 'right-top' })
}
