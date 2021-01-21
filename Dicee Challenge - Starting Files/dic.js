function luck() {
  var a = Math.random();
  a *= 6;
  a = Math.floor(a);
  return a + 1;
}
var p1 = luck();
var p2 = luck();

var dicep1 = "images/dice" + p1 + ".png";
var dicep2 = "images/dice" + p2 + ".png";
document.querySelector("img.img1").setAttribute("src", dicep1);
document.querySelector("img.img2").setAttribute("src", dicep2);
if (p1 == p2) {
  document.querySelector("h1").innerText = " Draw !!!";
} else if (p1 > p2) {
  document.querySelector("h1").innerText = " Player 1 Wins !!!";
} else {
  document.querySelector("h1").innerText = " Player 2 Wins !!!";
}
