const sliderItems = document.querySelectorAll(".slider-content-group");
const sliderContent = document.querySelectorAll(".slider-content");
const sliderLine = document.querySelector(".slider-line");

// ширина контента слайдера
const sliderW = sliderItems[0].offsetWidth;
const itemW = sliderContent[0].offsetWidth;

//Ширина всех слайдеров
const sliderLineW = sliderLine.offsetWidth;

// Функция по прокрутки слайдера

function sliderScrollRight() {
  const lineWidth = sliderLine.style
    .getPropertyValue("--elwidth")
    .replace(/\D/g, "");
  if (lineWidth == sliderW * (sliderItems.length - 1)) {
    sliderLine.style.setProperty("--elwidth", `0px`);
  } else {
    sliderLine.style.setProperty(
      "--elwidth",
      `${Number(lineWidth) + Number(sliderW)}px`
    );
  }
}
function sliderScrollLeft() {
  const lineWidth = sliderLine.style
    .getPropertyValue("--elwidth")
    .replace(/\D/g, "");

  console.log(sliderW * (sliderItems.length - 1));
  if (lineWidth == 0) {
    sliderLine.style.setProperty(
      "--elwidth",
      `${sliderW * (sliderItems.length - 1)}px`
    );
  } else {
    sliderLine.style.setProperty(
      "--elwidth",
      `${Number(lineWidth) - Number(sliderW)}px`
    );
  }
}
