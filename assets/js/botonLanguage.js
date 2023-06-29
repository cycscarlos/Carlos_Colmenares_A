/* 
Este código implementa un botón de hamburguesa (`hamburguerBtn`) que al hacer clic en él, muestra un menú de navegación o realiza alguna otra acción. Además, hay un botón de "x" (`xBtn`) que se utiliza para cerrar el menú de navegación o deshacer la acción que se realizó al hacer clic en el botón de hamburguesa.

El código también selecciona un elemento del DOM con la clase "lenguaje" (`langBtn`) y agrega un evento de clic a los botones de hamburguesa y de "x" utilizando la función `addEventListener`. Cuando se hace clic en cualquiera de estos botones, se llama a la función `toggleLang`.

La función `toggleLang` agrega o quita la clase "appears" del elemento `langBtn` utilizando el método `classList.toggle()`. La clase "appears" se utiliza para mostrar u ocultar el elemento `langBtn` en la pantalla.

En resumen, este código implementa un botón de hamburguesa y un botón de "x" que muestran u ocultan un elemento con la clase "lenguaje" cuando se hace clic en ellos.
*/
const hamburguerBtn = document.querySelector(".open-menu");
const xBtn = document.querySelector(".close-menu");
const langBtn = document.querySelector(".lenguaje");

hamburguerBtn.addEventListener("click", toggleLang);
xBtn.addEventListener("click", toggleLang);

function toggleLang() {
  langBtn.classList.toggle("appears");
}
