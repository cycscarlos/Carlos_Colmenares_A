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
    icon.src = "./img/sol.png";
    darktop.src = "./img/wave2.svg";
    darkBottom.src = "./img/wave2.svg";

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
