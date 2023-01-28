/**
 * @description 가로 스크롤
 * @deprecated
 */
// const scrollContainer = document.querySelector("main");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });

/**
 * @description 애니메이션 종료 후 두 번째 section 생성
 */
setTimeout(function () {
  let secondSec = document.querySelector(".sec-2");

  secondSec.style.display = "block";
}, 3000);

/**
 * @description tagify
 */
var input = document.querySelector(".tagify--outside");

// init Tagify script on the above inputs
var tagify = new Tagify(input, {});

/**
 * @description 추첨 버튼 기능
 */
function pick() {
  let lunchList = document.querySelectorAll(".tagify__tag .tagify__tag-text");
  alert(lunchList[Math.floor(Math.random() * lunchList.length)].innerText);
}
