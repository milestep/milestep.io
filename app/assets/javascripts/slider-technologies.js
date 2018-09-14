let left = 0;

function sliderLeft() {
  var polosa = document.getElementById('polosa');

  left = left - 300;

  if (left < -2400)
    left = 0;

  polosa.style.left = left + 'px';
}

function sliderRight() {
  var polosa = document.getElementById('polosa');

  left = left + 300;

  if (left > 0)
    left = -2400;

  polosa.style.left = left  + 'px';
}
