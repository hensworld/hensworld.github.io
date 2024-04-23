//login
var password="reo";
var guess;
guess=prompt('try again :p','');
if(password==guess)
alert('have a great day :)');
else
{
  window.location="https://www.youtube.com/watch?v=NHpczegqMUI";
}
//login


function btnRed() {
  document.getElementById("Div1").style.backgroundColor="Red";
}
function btnGreen() {
  document.getElementById("Div1").style.backgroundColor="Green";
}
function btnBlue() {
  document.getElementById("Div1").style.backgroundColor="Blue";
}
function btnReset() {
  document.getElementById("Div1").style.backgroundColor="transparent";
  document.getElementById("Div2").style.backgroundColor="transparent";
  document.getElementById("Div3").style.backgroundColor="transparent";
}