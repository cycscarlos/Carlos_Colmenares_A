var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var lightbox1 = document.querySelector(".lista-proyectos-1");
var lightbox2 = document.querySelector(".lista-proyectos-2");
var lightbox3 = document.querySelector(".lista-proyectos-3");
var close1 = document.querySelector(".close1");
var close2 = document.querySelector(".close2");
var close3 = document.querySelector(".close3");

btn1.addEventListener("click", function () {
  lightbox1.classList.toggle("active");
});
btn2.addEventListener("click", function () {
  lightbox2.classList.toggle("active");
});
btn3.addEventListener("click", function () {
  lightbox3.classList.toggle("active");
});

close1.addEventListener("click", function () {
  lightbox1.classList.toggle("active");
});
close2.addEventListener("click", function () {
  lightbox2.classList.toggle("active");
});
close3.addEventListener("click", function () {
  lightbox3.classList.toggle("active");
});
