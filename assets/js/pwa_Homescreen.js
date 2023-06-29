/*
Este código define una función que se ejecuta cuando se carga la página. 

Primero, se utiliza el evento "onload" del objeto window para asegurarse de que todos los elementos HTML se hayan cargado antes de que se ejecute el código.

Luego, se obtiene una referencia al elemento HTML con el ID "buttonAdd" utilizando el método querySelector().

A continuación, se define una variable llamada "deferredPrompt". Se agrega un evento "beforeinstallprompt" al objeto window que se utiliza para almacenar la solicitud de instalación diferida para que se pueda mostrar más tarde.

Se agrega un evento "click" al elemento con ID "buttonAdd". Cuando se hace clic en este botón, se muestra la solicitud de instalación diferida utilizando el método prompt() en la variable "deferredPrompt". Se utiliza la propiedad "userChoice" para esperar la respuesta del usuario a la solicitud de instalación diferida.

Si el usuario acepta la solicitud, se imprime un mensaje en la consola que indica que el usuario ha aceptado la instalación. Si el usuario cancela o rechaza la solicitud, se imprime un mensaje en la consola que indica que el usuario ha rechazado la instalación. Finalmente, se establece la variable "deferredPrompt" en null.
*/

window.onload = (e) => {
  // Declare init HTML elements
  const buttonAdd = document.querySelector("#buttonAdd");

  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
  });

  // Add event click function for Add button
  buttonAdd.addEventListener("click", (e) => {
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
};
