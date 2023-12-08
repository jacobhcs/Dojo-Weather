var cookie = document.querySelector('.remove');

function removeCookies(){
  if(cookie){
    cookie.remove();
  } else {
    console.log('no cookies here');
  }
}

var temp1 = document.querySelector('.temp1');
var temp2 = document.querySelector('.temp2');
var temp3 = document.querySelector('.temp3');
var temp4 = document.querySelector('.temp4');
var temp5 = document.querySelector('.temp5');
var temp6 = document.querySelector('.temp6');
var temp7 = document.querySelector('.temp7');
var temp8 = document.querySelector('.temp8');
var select = document.querySelector('#change-temp');


function changeMeasure() {
  if (select){
    temp1.innerText = 75 + '*';
    temp2.innerText = 65 + '*';
    temp3.innerText = 80 + '*';
    temp4.innerText = 66 + '*';
    temp5.innerText = 69 + '*';
    temp6.innerText = 61 + '*';
    temp7.innerText = 78 + '*';
    temp8.innerText = 70 + '*';
  } else {
    console.log('didnt work');
  }
}