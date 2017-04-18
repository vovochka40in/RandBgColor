var btn = document.querySelector(".btn__item");
var body = document.querySelector("body");

function randomBgColor() {
  var red = green = blue = opacity = 0;
  var min = 0, max = 255;
  var color = "";
  red = (Math.round((Math.random() * max))).toString();
  green = (Math.round((Math.random() * max))).toString();
  blue = (Math.round((Math.random() * max))).toString();
  color = "background-color: rgb("+red+", "+green+", "+blue+");";
  return color;
}

btn.addEventListener("click", function(event) {
  event.preventDefault();
  body.setAttribute('style', randomBgColor());
});
