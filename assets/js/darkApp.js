/* 
Este código implementa un botón de interruptor de tema oscuro/luz en una página web. Cuando se hace clic en el botón, el tema de la página cambia entre oscuro y claro.

El código comienza seleccionando algunos elementos del DOM utilizando el método `getElementById`. En particular, se seleccionan tres elementos con los IDs "icon", "darkTop" y "darkBottom", que se utilizan para cambiar el aspecto del botón de interruptor de tema oscuro/luz. También se selecciona un elemento con el ID "topheader", que se utiliza para cambiar la apariencia de la cabecera de la página.

Luego, se define una función que se ejecutará cada vez que se haga clic en el botón de interruptor de tema oscuro/luz. La función agrega o quita la clase "dark-theme" del elemento `body` del documento, que se utiliza para cambiar el tema de la página.

Si la clase "dark-theme" se agrega, se cambian las imágenes del botón de interruptor de tema oscuro/luz y se agrega o quita la clase "darkShadow" del elemento `topheader`. Además, se comenta un bloque de código que se utiliza para cambiar la apariencia de algunos elementos adicionales de la página (`mainframe`, `networking`, `security`) al tema oscuro. 

Si la clase "dark-theme" se quita, se restauran las imágenes originales del botón de interruptor de tema oscuro/luz y se elimina la clase "darkShadow" del elemento `topheader`. Además, se comenta el mismo bloque de código que se comentó anteriormente.

En resumen, este código implementa un botón de interruptor de tema oscuro/luz que cambia la apariencia de la página al hacer clic en él. Se utilizan clases CSS para cambiar el aspecto de los elementos de la página, y se utilizan imágenes diferentes para el botón de interruptor de tema oscuro/luz dependiendo del tema actual de la página.
*/
let icon = document.getElementById("icon");
let darktop = document.getElementById("darkTop");
let darkbottom = document.getElementById("darkBottom");

const topheader = document.getElementById("topheader");

// const mainframe = document.getElementById("mainframe");
// const networking = document.getElementById("networking");
// const security = document.getElementById("security");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./img/sun.png";
    darktop.src = "./img/wave2.svg";
    darkbottom.src = "./img/wave2.svg";

    topheader.classList.toggle("darkShadow");

    // mainframe.classList.toggle("darkSkill");
    // networking.classList.toggle("darkSkill");
    // security.classList.toggle("darkSkill");
  } else {
    icon.src = "./img/moon.png";
    darktop.src = "./img/wave.svg";
    darkbottom.src = "./img/wave.svg";

    topheader.classList.remove("darkShadow");

    // mainframe.classList.remove("darkSkill");
    // networking.classList.remove("darkSkill");
    // security.classList.remove("darkSkill");
  }
};
