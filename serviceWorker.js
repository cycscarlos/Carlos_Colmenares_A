//asignar un nombre y versión al cache
const CACHE_NAME = "cache_Carlos_Colmenares_A.",
  urlsToCache = [
    "./",
    "./index.html",
    "./css/all.min.css",
    "./css/normalize.css",
    "./css/main.css",
    "./css/navbar.css",
    "./css/profile.css",
    "./css/coverLetter.css",
    "./css/experiences.css",
    "./css/skills.css",
    "./css/otherSkills.css",
    "./css/contact.css",
    "./css/pwaModal.css",
    "./img/favicon.png",
    "./img/logoFoto.jpg",
    "./img/mainFoto.png",
    "./img/hamburguer.svg",
    "./img/moon.png",
    "./img/sol.png",
    "./img/close.svg",
    "./img/imgLetter2.png",
    "./img/instagram.png",
    "./img/wave.svg",
    "./img/wave2.svg",
    "./img/location.png",
    "./img/mail.png",
    "./img/phone.png",
    "./img/link.png",
    "./js/botonApp.js",
    "./js/darkApp.js",
    "./js/mostrar_DivOculto.js",
    "./js/ocultar_DivConScroll.js",
    "./js/pwa_Homescreen.js",
    "./js/pwa.js",
    "./img/careerSynthesis.pdf",
    "./manifest.json",
    "./img/iconWeb_512.png",
    "./img/iconWeb_256.png",
    "./img/iconWeb_192.png",
    "./img/iconWeb_144.png",
    "./img/iconWeb_128.png",
    "./img/iconWeb_96.png",
    "./img/iconWeb_64.png",
    "./img/iconWeb_48.png",
    "./img/iconWeb_32.png",
    "./webfonts/fa-brands-400.eot",
    "./webfonts/fa-brands-400.ttf",
    "./webfonts/fa-brands-400.woff",
    "./webfonts/fa-brands-400.woff2",
    "./webfonts/fa-regular-400.eot",
    "./webfonts/fa-regular-400.ttf",
    "./webfonts/fa-regular-400.woff",
    "./webfonts/fa-regular-400.woff2",
    "./webfonts/fa-solid-900.eot",
    "./webfonts/fa-solid-900.ttf",
    "./webfonts/fa-solid-900.woff",
    "./webfonts/fa-solid-900.woff2",
    // "./enviarCorreo.php",
    // "https://carlos-colmenares-a.netlify.app",
    // "https://carlos-colmenares-a.netlify.app/img/mainFoto.png",
    // "https://github.com/cycscarlos",
    // "https://cycs.netlify.app",
    // "https://twitter.com/@cycsingenieria?lang=en",
    // "https://api.whatsapp.com/send?phone=0414.324.63.96&text=¡Hola, soy Carlos Colmenares A., y en la redes ¡zCoder! como te puedo servir? Escríbeme, y conversamos... Saludos!",
    // "https://use.fontawesome.com/698a367122.js",
    // "https://linkedin.com/in/carlos-colmenares-a-5a717375",
    // "https://www.instagram.com/cycsingenieria",
  ];

// Evento1. Durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Falló registro de cache", err))
  );
});

// Evento2. Cuando se cae la conexión a INternet (offline), se activa este evento y busca los recursos para hacer que funcione sin conexión
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  );
});

//Evento3. Cuando se recupere la conexión a Internet; el navegador recupera una url sino esta en la cache
self.addEventListener("fetch", (e) => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        //recuperar del cache
        return res;
      }
      //recuperar de la petición a la url
      return fetch(e.request);
    })
  );
});
