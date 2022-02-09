// Esta rutina oculta un "div" cuando el usuario hace Scroll Up sobre la página
// si quisiera que aparaciera solo se debe agregar la siguiente instrucción:
// else {document.getElementById("coverLetter").style.display = "block";}

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
  let Desplazamiento_Actual = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento_Actual) {
    document.getElementById("coverLetter").style.display = "none";
  }
  ubicacionPrincipal = Desplazamiento_Actual;
};
