/*
La función mostrar_DivOculto toma un parámetro id, que es el ID del elemento HTML que se va a mostrar u ocultar. La función utiliza la función getElementById para obtener una referencia al elemento y luego cambia el valor del estilo display del elemento para mostrar u ocultar el elemento.

La última línea del código window.onload = function() { mostrar_DivOculto("coverLetter"); }; se ejecuta cuando la página se carga completamente y llama a la función mostrar_DivOculto para ocultar el elemento con un ID de "coverLetter" por defecto.
*/

function mostrar_DivOculto(id) {
  if (document.getElementById) {
    // se obtiene el id y se define la variable "element" igual a nuestro div
    var element = document.getElementById(id);

    // damos un atributo display:none que oculta el div
    element.style.display = element.style.display == "none" ? "block" : "none";
  }
}

/* hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente */

window.onload = function () {
  mostrar_DivOculto("coverLetter");
  mostrar_DivOculto("profile-details-sec");
};
