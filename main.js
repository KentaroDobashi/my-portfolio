/*const toMorseCode = function () {
  let str = "0101101";
  str.replaseAll("0", "・");
};*/

/*const toMorseCode = function (x) {
  return x.replaceAll("0", "・");
};*/

//toMorseCode(010110); // "・1・11・"と表示される

const slide = document.getElementById("slide");
const right = document.getElementById("right");
const left = document.getElementById("left");

const campImages = ["url(./image/Camp-1.png)", "./image/camp-2.png"];

let count = 0;

const imgChange = function () {
  slide.style.backgroundImage = campImages[count];
};
