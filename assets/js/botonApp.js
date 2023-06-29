/* Este código realiza varias cosas relacionadas con un menú de navegación en una página web. A continuación te explico en detalle lo que hace cada parte del código:

 1. `const menu = document.querySelector(".menu");`
 Este código selecciona el elemento del DOM con la clase "menu" y lo almacena en la variable `menu`. Se asume que este elemento es el contenedor del menú de navegación.

 2. `const openMenuBtn = document.querySelector(".open-menu");`
 Este código selecciona el elemento del DOM con la clase "open-menu" y lo almacena en la variable `openMenuBtn`. Se asume que este elemento es el botón que abre el menú de navegación.

 3. `const closeMenuBtn = document.querySelector(".close-menu");`
 Este código selecciona el elemento del DOM con la clase "close-menu" y lo almacena en la variable `closeMenuBtn`. Se asume que este elemento es el botón que cierra el menú de navegación.

  `function toggleMenu() {menu.classList.toggle("menu_opened");}`
 Esta es una función que se utiliza para cambiar el estado del menú de navegación. Cuando se llama a esta función, se agrega o se quita la clase "menu_opened" del elemento `menu`, dependiendo de si ya estaba presente o no. Esta clase se utiliza para mostrar u ocultar el menú de navegación.

 5. `openMenuBtn.addEventListener("click", toggleMenu);`
 Este código agrega un evento de clic al botón que abre el menú de navegación (`openMenuBtn`). Cuando se hace clic en este botón, se llama a la función `toggleMenu`, que cambia el estado del menú de navegación.

 6. `closeMenuBtn.addEventListener("click", toggleMenu);`
 Este código agrega un evento de clic al botón que cierra el menú de navegación (`closeMenuBtn`). Cuando se hace clic en este botón, se llama a la función `toggleMenu`, que cambia el estado del menú de navegación.

 7. `const menuLinks = document.querySelectorAll('.menu a[href^="#"]');`
 Este código selecciona todos los elementos `a` dentro del elemento `menu` que tienen un atributo `href` que comienza con el caracter `#`. Se asume que estos elementos son los enlaces del menú de navegación.

 8. `const observer = new IntersectionObserver(`
 Este código crea una instancia de `IntersectionObserver` que se utilizará para detectar cuando los elementos de la página que están relacionados con los enlaces del menú de navegación se vuelven visibles en la pantalla.

 9. `(entries) => {entries.forEach((entry) => {`
 Esta es una función de devolución de llamada que se pasa como primer parámetro al constructor de `IntersectionObserver`. Se ejecuta cada vez que uno de los elementos observados cambia su estado de visibilidad. La función recibe un arreglo de objetos `IntersectionObserverEntry`, uno por cada elemento observado.

 10. `const id = entry.target.getAttribute("id");`
 Este código obtiene el valor del atributo `id` del elemento observado actual.

 11. `const menuLink = document.querySelector(`.menu a[href="#${id}"]`);`
 Este código selecciona el elemento `a` del menú de navegación cuyo atributo `href` coincide con el valor del atributo `id` del elemento observado actual.

 12. `if (entry.isIntersecting) {document.querySelector(".menu a.selected").classList.remove("selected");menuLink.classList.add("selected");}`
 Este código comprueba si el elemento observado actual está visible en la pantalla (`entry.isIntersecting` es `true`). Si es así, busca el enlace del menú de navegación correspondiente (`menuLink`) y le agrega la clase "selected" para indicar que es el enlace activo actualmente. También quita la clase "selected" de cualquier otro enlace del menú que ya estuviera seleccionado.

 13. `menuLinks.forEach((menuLink) => {`
 Este código recorre todos los enlaces del menú de navegación (`menuLinks`) y agrega un evento de clic a cada uno. Cuando se hace clic en uno de estos enlaces, se llama a una función que cierra el menú de navegación (`menu.classList.remove("menu_opened")`).

 14. `const hash = menuLink.getAttribute("href");`
 Este código obtiene el valor del atributo `href` del enlace del menú actual.

 15. `const target = document.querySelector(hash);`
 Este código busca el elemento del DOM cuyo atributo `id` coincide con el valor del atributo `href` del enlace del menú actual.

 16. `if (target) {observer.observe(target);`
 Este código comprueba si se ha encontrado un elemento del DOM que coincide con el valor del atributo `href` del enlace del menú actual. Si se ha encontrado un elemento, se agrega a la lista de elementos observados por el objeto `IntersectionObserver` (`observer.observe(target)`). Esto permite que el menú de navegación se actualice automáticamente cuando el usuario desplaza la página y los elementos relacionados con los enlaces del menú se vuelven visibles o invisibles en la pantalla.

 En resumen, este código implementa un menú de navegación que se puede abrir y cerrar haciendo clic en un botón. Cuando se hace clic en uno de los enlaces del menú, el menú se cierra automáticamente y se resalta el enlace activo actualmente. Además, el menú de navegación se actualiza automáticamente cuando el usuario desplaza la página y los elementos relacionados con los enlaces del menú se vuelven visibles o invisibles en la pantalla.
 
*/

/*
Este código tiene varias funciones que interactúan con el menú de navegación de un sitio web.

Primero, se definen variables para los elementos HTML que se utilizarán en el código, como el menú, los botones para abrir y cerrar el menú y los enlaces del menú.

Luego, se define una función llamada "toggleMenu" que se utiliza para abrir y cerrar el menú al hacer clic en el botón correspondiente. La función agrega o elimina la clase "menu_opened" del menú.

Se agrega un evento "click" a los botones para abrir y cerrar el menú, que llama a la función "toggleMenu" cuando se hace clic.

A continuación, se utiliza el método querySelectorAll() para obtener una lista de todos los enlaces del menú que apuntan a secciones dentro de la misma página. Se crea un objeto IntersectionObserver que se utiliza para detectar cuándo una sección específica está visible en la pantalla. 

Cuando una sección se vuelve visible en la pantalla, se agrega la clase "selected" al enlace correspondiente del menú y se elimina la clase "selected" del enlace que estaba previamente seleccionado. 

Finalmente, se agrega un evento "click" a cada enlace del menú para cerrar el menú cuando se hace clic en un enlace y se define un objeto "hash" y "target" para cada enlace, que se utiliza para observar las diferentes secciones de la página.
*/

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) {
        document.querySelector(".menu a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
      }
    });
  },
  { rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });
  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
