function sendMessage() {
  var formElement = document.querySelector("#message-form");
  var form = $(formElement);
  var data = getData();
  gtag_report_conversion();

  if (!formElement.checkValidity()) {
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
}

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-766088469/hiq-CO_vn5QBEJWqpu0C',
    'value': 1.0,
    'currency': 'USD',
    'event_callback': callback
  });
  return false;
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
