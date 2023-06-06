function mostrar_DivOculto_letter(id) {
  if (document.getElementById) {
    // se obtiene el id y se define la variable "el" igual a nuestro div
    var el = document.getElementById(id);

    // damos un atributo display:none que oculta el div
    el.style.display = el.style.display == "none" ? "block" : "none";
  }
}

/* hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente */

window.onload = function () {
  mostrar_DivOculto_letter("coverLetter");
};
