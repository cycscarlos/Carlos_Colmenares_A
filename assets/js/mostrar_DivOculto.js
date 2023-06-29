/*
Este código define una función llamada "mostrar_DivOculto" que se utiliza para mostrar u ocultar un elemento HTML con un ID específico. La función toma un parámetro "id" que se utiliza para identificar el elemento HTML.

Dentro de la función, se utiliza el método getElementById() para obtener una referencia al elemento HTML con el ID especificado. Luego, se verifica si el elemento está oculto o no. Si está oculto (es decir, su propiedad de estilo display es "none"), se establece su propiedad de estilo display en "block" para mostrar el elemento. Si el elemento ya está visible (su propiedad de estilo display es "block"), se establece la propiedad de estilo display en "none" para ocultar el elemento.

Además, se define una función anónima que se ejecuta cuando se carga la página, utilizando el evento "onload" del objeto window. Esta función llama a la función "mostrar_DivOculto" con el ID "coverLetter" como parámetro. Esto significa que el elemento HTML con el ID "coverLetter" estará oculto cuando se cargue la página.
*/

function mostrar_DivOculto(id) {
  if (document.getElementById) {
    // se obtiene el id y se define la variable "el" igual a nuestro div
    var el = document.getElementById(id);

    // damos un atributo display:none que oculta el div
    el.style.display = el.style.display == "none" ? "block" : "none";
  }
}

/* hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente */

window.onload = function () {
  mostrar_DivOculto("coverLetter");
};
