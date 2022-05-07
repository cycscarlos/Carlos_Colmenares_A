var check = document.querySelector(".check");
check.addEventListener("click", idioma);

function idioma() {
  // Primero probamos si funciona y todo Ok!
  //*   console.log(check.checked);

  // Guardamos el resultado (false (default) o true) en una nueva variable
  let id = check.checked;
  // Español?
  if (id == true) {
    location.href = "spanish/index.html";
    // Inglés?
  } else {
    location.href = "../index.html";
  }
}
