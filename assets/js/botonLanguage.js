const hamburguerBtn = document.querySelector(".open-menu");
const xBtn = document.querySelector(".close-menu");
const langBtn = document.querySelector(".lenguaje");

hamburguerBtn.addEventListener("click", toggleLang);
xBtn.addEventListener("click", toggleLang);

function toggleLang() {
  langBtn.classList.toggle("appears");
}
