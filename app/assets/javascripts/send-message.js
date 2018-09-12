function sendMessage() {
  $('.btn-contact').attr("disabled", true)
  var dataArray = $('#message-form').serializeArray();
  var data = {}
  dataArray.map((value) => {
    data[value.name] = value.value;
  })

  $.ajax({
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    url: 'contact',
    type: 'POST',
    data: {contact: data},
    success: function(result){
      toastr('message was successfully delivered')
    },
    error: function(result){
      toastr('unable to deliver your message')
      $('.btn-contact').attr("disabled", false)
    }
  })
}

function toastr(message) {
  var toastr = $('.toastr')
  toastr.text(message)
  toastr.slideDown( 500, function() {
    setTimeout(function() {
      toastr.slideUp( 500, function() {
      });
    }, 3000);
  });
}