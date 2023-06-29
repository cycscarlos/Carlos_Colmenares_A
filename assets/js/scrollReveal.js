/*
Este código utiliza la biblioteca ScrollReveal para realizar animaciones en la página web cuando el usuario hace scroll hacia abajo. 

Primero, se crea una instancia de ScrollReveal con algunas opciones de configuración, como la distancia de desplazamiento y la duración de la animación.

Luego, se utilizan los métodos reveal() de ScrollReveal para aplicar efectos de animación a diferentes secciones de la página. 

Las secciones con las clases "experiences" y "contact" se animan desde la parte superior de la pantalla con un intervalo de 100 milisegundos entre cada elemento.

Las secciones con las clases "profile-details" y "skills" se animan desde la izquierda de la pantalla con un intervalo de 100 milisegundos entre cada elemento.

Las secciones con las clases "profile-img-section" y "otherSkills" se animan desde la derecha de la pantalla con un intervalo de 100 milisegundos entre cada elemento.

En resumen, este código utiliza ScrollReveal para aplicar efectos de animación a diferentes secciones de la página cuando el usuario hace scroll hacia abajo.
*/

//: SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "60px",
  duration: 4800,
  // reset: true,
});

sr.reveal(`.experiences, .contact`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.profile-details, .skills`, {
  origin: "left",
  interval: 100,
});

sr.reveal(`.profile-img-section, .otherSkills`, {
  origin: "right",
  interval: 100,
});
