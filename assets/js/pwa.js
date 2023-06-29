/*
Este código comprueba si el navegador del usuario admite el uso de Service Workers. Si es así, se agrega un evento "load" al objeto window que se ejecutará cuando la página se haya cargado completamente.

Dentro de la función del evento "load", se utiliza el método register() del objeto navigator.serviceWorker para registrar un archivo llamado "serviceWorker.js" como Service Worker para la página actual. 

Si la operación de registro tiene éxito, se imprime un mensaje de confirmación en la consola indicando que el Service Worker se ha registrado correctamente, junto con el objeto "reg" que devuelve el método register().

Si la operación de registro falla, se imprime un mensaje de error en la consola indicando que el registro del Service Worker ha fallado, junto con el objeto "err" que contiene información sobre el error.
*/

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(function (reg) {
        console.log("ServiceWorker registered!😎", reg);
      })
      .catch(function (err) {
        console.log("🤨ServiceWorker failed :(", err);
      });
  });
}
