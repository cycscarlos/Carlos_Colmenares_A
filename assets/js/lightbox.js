/*
 Este código define varias referencias a elementos HTML utilizando el método querySelector(). Se obtienen referencias a los elementos con clases "btn1", "btn2", "btn3", "lista-proyectos-1", "lista-proyectos-2", "lista-proyectos-3", "close1", "close2" y "close3".

Luego, se agregan eventos "click" a los elementos con las clases "btn1", "btn2" y "btn3". Cuando se hace clic en cualquiera de estos elementos, se añade o se elimina la clase "active" del elemento correspondiente con las clases "lista-proyectos-1", "lista-proyectos-2" o "lista-proyectos-3". Esto probablemente muestra o oculta una ventana emergente o un lightbox que contiene información adicional sobre los proyectos.

Además, se agregan eventos "click" a los elementos con las clases "close1", "close2" y "close3". Cuando se hace clic en cualquiera de estos elementos, se elimina la clase "active" del elemento correspondiente con las clases "lista-proyectos-1", "lista-proyectos-2" o "lista-proyectos-3". Esto probablemente oculta la ventana emergente o el lightbox que se abrió previamente.
*/

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
