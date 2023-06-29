/*
Este código es una sección de un script que probablemente se utiliza para cambiar el tema de un sitio web de claro a oscuro y viceversa. 

Primero, el código verifica si el body de la página tiene la clase "dark-theme". Si es así, se cambian las imágenes del icono y de las olas en la parte superior e inferior de la página para que se ajusten al tema oscuro. También se añade la clase "darkShadow" al elemento con id "topheader" para aplicar un efecto de sombra en el tema oscuro.

Si el body no tiene la clase "dark-theme", se cambian las imágenes del icono y de las olas para que correspondan al tema claro y se elimina la clase "darkShadow" del elemento con id "topheader" para eliminar el efecto de sombra en el tema claro.

Además, hay algunas líneas de código que están comentadas. Éstas parecen estar relacionadas con la aplicación de algunas clases adicionales de estilo a diferentes elementos de la página cuando se cambia el tema, pero se encuentran actualmente desactivadas.
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
    icon.src = "./assets/img/sol.png";
    darktop.src = "./assets/img/wave2.svg";
    darkbottom.src = "./assets/img/wave2.svg";

    topheader.classList.toggle("darkShadow");

    // mainframe.classList.toggle("darkSkill");
    // networking.classList.toggle("darkSkill");
    // security.classList.toggle("darkSkill");
  } else {
    icon.src = "./assets/img/moon.png";
    darktop.src = "./assets/img/wave.svg";
    darkbottom.src = "./assets/img/wave.svg";

    topheader.classList.remove("darkShadow");

    // mainframe.classList.remove("darkSkill");
    // networking.classList.remove("darkSkill");
    // security.classList.remove("darkSkill");
  }
};
