function sendMessage() {
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
      toastr('Success')
    },
    error: function(result){
        toastr('Error')
    }
  })
}

function toastr(message) {
  var toastr = $('.toastr')
  toastr.text(message)
  toastr.fadeIn( "slow", function() {
    toastr.fadeOut( "slow", function() {
    });
  });
}