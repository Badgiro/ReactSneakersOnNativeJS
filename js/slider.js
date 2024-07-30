const sliderElements = document.querySelectorAll(".slider-element");
const sliderButton = document.querySelector(".slider-arrow");
const sliderHolder = document.getElementById("slider-holder");

sliderElements[0].classList.add("active-slider__element");

let counter = 0;

function sliderActivation() {
  for (let i = 0; i < sliderElements.length; i++) {
    sliderElements[i].classList.remove("active-slider__element");
  }
  counter++;
  if (counter >= sliderElements.length) {
    counter = 0;
  }
  sliderElements[counter].classList.add("active-slider__element");
}

sliderButton.addEventListener("click", sliderActivation);

const second = 1000 * 5;

let timerForSlider = setInterval(() => sliderActivation(), second);

sliderHolder.addEventListener("mouseover", () => {
  clearInterval(timerForSlider);
});
sliderHolder.addEventListener("mouseout", () => {
  timerForSlider = setInterval(() => sliderActivation(), second);
});
