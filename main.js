const slide = document.getElementById("slide");
const right = document.getElementById("right");
const left = document.getElementById("left");

//使う画像
const campImages = ["url(./image/Camp-1.png)", "url(./image/camp-2.png)"];

//はいれつのがじお
let count = 0;

//画像を変更する
const imgChange = function () {
  slide.style.backgroundImage = campImages[count];
};
// ＞をクリックするとカウントを変更
right.onclick = function () {
  // 配列の最後まで行ったら最初に戻す
  if (count === campImages.length) {
    count = 0;
  } else {
    count++;
  }
  imgChange();
};
// ＜をクリックするとカウントを変更
left.onclick = function () {
  //配列の最初まで行ったら最後に戻す
  if (count === 0) {
    count = campImages.length;
  } else {
    count--;
  }
  imgChange();
};
