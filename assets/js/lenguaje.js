/*
Este código crea una función que se ejecuta cuando se hace clic en un elemento HTML con la clase "check". 

Primero, se obtiene una referencia al elemento HTML con la clase "check" utilizando el método querySelector(). Luego se agrega un evento "click" al elemento utilizando addEventListener(). El evento "click" está vinculado a la función "idioma".

La función "idioma" se ejecuta cuando se hace clic en el elemento con la clase "check". Primero, se utiliza console.log() para imprimir en la consola si el elemento "check" está marcado o no (es decir, si su propiedad "checked" es verdadera o falsa).

Luego, se guarda el valor de la propiedad "checked" del elemento "check" en una variable llamada "id". Si el valor de "id" es verdadero (es decir, si el elemento "check" está marcado), la página se redirige a un archivo HTML en la carpeta "spanish". Si el valor de "id" es falso (es decir, si el elemento "check" no está marcado), la página se redirige a la página principal en la carpeta raíz del sitio web.
*/

var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  // Primero probamos si funciona y todo Ok!
  console.log(check.checked);

  // Guardamos el resultado (false (default) o true) en una nueva variable
  let id = check.checked;
  // Español?
  if (id == true) {
    location.href = "./spanish/spanish.html";
    // Inglés?
  } else {
    location.href = "../index.html";
  }
}
