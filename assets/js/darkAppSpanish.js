/*
Este código crea una función que se ejecuta cuando se hace clic en el elemento con id "icon". 

Primero, se obtienen algunas referencias a elementos HTML utilizando los métodos getElementById(). Se obtienen referencias a los elementos con id "icon", "darkTop", "darkBottom" y "topheader". 

Luego, se define la función que se ejecutará cuando se haga clic en el elemento con id "icon". La función cambia la clase del body de la página para alternar entre el tema claro y el tema oscuro. 

Si la clase "dark-theme" está presente en el body, se cambian las imágenes de los elementos con id "icon", "darkTop" y "darkBottom" para que se ajusten al tema oscuro. Además, se añade la clase "darkShadow" al elemento con id "topheader" para aplicar un efecto de sombra en el tema oscuro.

Si la clase "dark-theme" no está presente en el body, se cambian las imágenes de los elementos con id "icon", "darkTop" y "darkBottom" para que correspondan al tema claro. Además, se elimina la clase "darkShadow" del elemento con id "topheader" para eliminar el efecto de sombra en el tema claro.

Por último, hay algunas líneas de código que están comentadas. Éstas parecen estar relacionadas con la aplicación de algunas clases adicionales de estilo a diferentes elementos de la página cuando se cambia el tema, pero se encuentran actualmente desactivadas.
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
    icon.src = "./../assets/img/sol.png";
    darktop.src = "./../assets/img/wave2.svg";
    darkbottom.src = "./../assets/img/wave2.svg";

    topheader.classList.toggle("darkShadow");

    // mainframe.classList.toggle("darkSkill");
    // networking.classList.toggle("darkSkill");
    // security.classList.toggle("darkSkill");
  } else {
    icon.src = "./../assets/img/moon.png";
    darktop.src = "./../assets/img/wave.svg";
    darkbottom.src = "./../assets/img/wave.svg";

    topheader.classList.remove("darkShadow");

    // mainframe.classList.remove("darkSkill");
    // networking.classList.remove("darkSkill");
    // security.classList.remove("darkSkill");
  }
};
