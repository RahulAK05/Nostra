// Image-slider

const imageSlider = document.querySelector(".image-slider");
const slides = document.querySelectorAll(".slide-items");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = 3;
  } else {
    currentIndex = currentIndex - 1;
  }
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  if (currentIndex == slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
  updateSliderPosition();
});

function updateSliderPosition() {
  const newTransformValue = -currentIndex * 100 + "%";
  imageSlider.style.transform = `translateX(${newTransformValue})`;
}

//discount-close
var discountNavBar = document.getElementById("discount-bar");
var discountClose = document.getElementById("discount-close");

discountClose.addEventListener("click", function () {
  discountNavBar.style.display = "none";
});

//  side - navigation bar

var sidenav = document.getElementById("sidenav");
var menuicon = document.querySelector(".menu");
var menuclose = document.getElementById("menuclose");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});
menuclose.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
