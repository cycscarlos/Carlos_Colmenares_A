// Carga la página originalmente con el tema oscuro activado.

// Para definir el modo oscuro como predeterminado cuando la página se carga por primera vez, puedes agregar la clase "dark-theme" al elemento body en el archivo darkApp.js.

// Este código escucha el evento "DOMContentLoaded" que se dispara cuando la página ha terminado de cargarse, y luego agrega la clase "dark-theme" al elemento body, lo que activará el modo oscuro por defecto.

// Debes colocar este código dentro del archivo darkApp.js, preferiblemente antes de la función onclick para asegurarte de que se ejecute antes de que se haga clic en el botón de cambio de tema.

// Recuerda que también debes asegurarte de que la clase "dark-theme" tenga los estilos de CSS adecuados para que el tema oscuro se muestre correctamente. Puedes encontrar los estilos correspondientes en el archivo main.css o en cualquier otro archivo CSS que estés utilizando para el tema oscuro.

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("dark-theme");
  topheader.classList.toggle("darkShadow");
});
