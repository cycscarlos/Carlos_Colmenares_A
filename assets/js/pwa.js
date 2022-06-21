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
