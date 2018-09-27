function sendMessage() {
  var form = $('#message-form');
  var error = null;
  var data = getData();

  validateData(data);
  if (error) {
    toastr({ type: "warning", message: error })
    return
  }

  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: 'contact',
    type: 'POST',
    data: { contact: data },
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

  function validateData(data) {
    var emailRegex = /^.+@.+\..+$/;
    if (!emailRegex.test(data.email)) {
      error = "Invalid email!"
      return
    }
    if (data.message.trim().length === 0) {
      error = "Message can't be blank!"
      return
    }
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