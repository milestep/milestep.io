function sendMessage() {
  var formElement = document.querySelector(".message-form");
  var form = $(formElement);
  // console.log($('#attachment').prop('files'))
  var myFile = $('#attachment').prop('files');
  console.log($('#attachment').val())
  var dt = new FormData();
  dt.append('attach', myFile);
  // console.log(dt)
  var data = getData();

  if (!formElement.checkValidity()) {
    return
  }

  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: 'contact',
    processData: false,
    contentType: 'multipart/form-data',
    type: 'POST',
    data: { contact: dt },
    success: function () {
      toastr({ type: "success", message: 'Message was successfully delivered!' });
      form.trigger("reset");
    },
    error: function () {
      toastr({ type: "error", message: 'Unable to deliver your message!' })
    }
  })

  function getData() {
    var dataArray = form.serializeArray();
    var transformedData = {}
    dataArray.map((value) => {
      transformedData[value.name] = value.value;
    })
    return transformedData;
  }
}

function toastr(params) {
  var toastr = $('.toastr')

  initializeToast();
  startAnimation();

  function initializeToast() {
    resetStyle();
    setStyle();
    toastr.text(params.message)
  }

  function resetStyle() {
    toastr.removeClass();
    toastr.addClass("toastr")
  }

  function setStyle() {
    switch (params.type) {
      case "success": toastr.addClass("success"); break;
      case "error": toastr.addClass("error"); break;
      default: toastr.addClass("warning");
    }
  }

  function startAnimation() {
    toastr.slideDown(500, function () {
      setTimeout(function () {
        $(this).show();
        toastr.slideUp(500, function () {
        });
      }, 3000);
    });
  }
}
