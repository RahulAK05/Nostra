var slidePosition = 0;
var slideItems = document.querySelectorAll(".slide-items");
var slideContainer = document.querySelector(".slide-container");
var prevBtn = document.getElementById("btn-prev");
var nextBtn = document.getElementById("btn-next");

nextBtn.addEventListener("click", function () {
  nextSlide();
});

prevBtn.addEventListener("click", function () {
  prevSlide();
});

function updatePosition() {
  var offset = -slidePosition * 800; // 800 is the width of each slide
  slideContainer.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  if (slidePosition === slideItems.length - 1) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }
  updatePosition();
}

function prevSlide() {
  if (slidePosition === 0) {
    slidePosition = slideItems.length - 1;
  } else {
    slidePosition -= 1;
  }
  updatePosition();
}
