document.addEventListener("DOMContentLoaded", function () {
  mostrar_DivOculto("profile-details-sec");
  mostrar_DivOculto("coverletter");
});

function mostrar_DivOculto(id) {
  if (document.getElementById) {
    var el = document.getElementById(id);
    el.classList.add("transition-class");
    el.style.display = el.style.display == "none" ? "block" : "none";
  }
}
