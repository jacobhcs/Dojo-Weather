var cookie = document.querySelector('.remove');

function removeCookies() {
  if (cookie) {
    cookie.remove();
  } else {
    console.log('no cookies here');
  }
}

var temp = document.querySelectorAll('.temp');
var select = document.querySelector('#change-temp');

function changeMeasure() {
  var celsiustemps = [24, 18, 27, 19, 21, 16, 26, 21];
  for (var i = 0; i < temp.length; i++) {
    if (select.value == 'F') {
      temp[i].innerText = Math.round((temp[i].innerText * (9 / 5)) + 32);
    } else if (select.value == 'C') {
      temp[i].innerText = celsiustemps[i];
    } else {
      console.log('aint workin')
    }
  }
}