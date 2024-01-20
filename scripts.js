let circle = document.querySelector(".circle");
let myButton = document.querySelector(".myButton");
let span = document.querySelector(".span");
let bigCup = document.querySelector(".big-cup");
function pinkCopo(params) {
  bigCup.src = "./img/img2.png";
  circle.style.background = "#eb7495";
  myButton.style.background = "#eb7495";
  span.style.color = "#eb7495";
}
function greenCopo(params) {
  bigCup.src = "./img/img1.png";
  circle.style.background = "#009788";
  myButton.style.background = "#009788";
  span.style.color = "#009788";
}
function lilacCopo(params) {
  bigCup.src = "./img/img3.png";
  circle.style.background = "#d752b1";
  myButton.style.background = "#d752b1";
  span.style.color = "#d752b1";
}
