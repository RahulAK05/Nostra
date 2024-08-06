var sidenav = document.getElementById("sidenav");
var menuicon = document.querySelector(".menu");
var menuclose = document.getElementById("menuclose");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});
menuclose.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});
