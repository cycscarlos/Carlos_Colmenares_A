// Esta rutina oculta un "div" cuando el usuario hace Scroll Up sobre la página
// si quisiera que aparaciera solo se debe agregar la siguiente instrucción:
// else {document.getElementById("coverLetter").style.display = "block";}

/*
Este código crea una función que se ejecuta cada vez que se desplaza la página. 

Primero, se define una variable llamada "ubicacionPrincipal" que almacena la posición actual de desplazamiento de la página, que se obtiene utilizando el método window.pageYOffset.

Luego, se define la función que se ejecutará cuando se produzca el evento de desplazamiento de la página. Dentro de esta función, se obtiene la posición actual de desplazamiento de la página utilizando el método window.pageYOffset y se almacena en una variable llamada "Desplazamiento_Actual".

A continuación, se verifica si la "ubicacionPrincipal" es mayor o igual a la "Desplazamiento_Actual". Si es así, se establece la propiedad de estilo "display" del elemento con ID "coverLetter" en "none", lo que significa que se oculta el elemento. Esto se utiliza para ocultar un cuadro de carta de presentación cuando el usuario comienza a desplazarse hacia arriba en la página.

Por último, se actualiza el valor de "ubicacionPrincipal" para que sea igual a la "Desplazamiento_Actual", lo que significa que la función se volverá a ejecutar con la nueva posición de desplazamiento en el siguiente evento de desplazamiento.
*/

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
  let Desplazamiento_Actual = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento_Actual) {
    document.getElementById("coverLetter").style.display = "none";
  }
  ubicacionPrincipal = Desplazamiento_Actual;
};
