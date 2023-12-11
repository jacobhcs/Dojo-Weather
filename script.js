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
  for (var i = 0; i < temp.length; i++) {
    if (select.value == 'F') {
      temp[i].innerText = Math.round((temp[i].innerText * (9 / 5)) + 32);
    } else if (select.value == 'C') {
      temp[i].innerText;
    } else {
      console.log('aint workin')
    }
  }
}