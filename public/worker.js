var CACHE_NAME = "NotesCache";
var urlsToCache = [
  "/Notes/index.html",
  "/Notes/asset-manifest.json",
  "/Notes/favicon.ico",
  "/Notes/logo192.png",
  "/Notes/logo512.png",
  "/Notes/manifest.json",
  "/Notes/maskable192.png",
  "/Notes/maskable512.png",
  "/Notes/robots.txt",
  "/Notes/worker.js",
  "/Notes/static/css/main.5d9620eb.chunk.css",
  "/Notes/static/css/main.5d9620eb.chunk.css.map",
  "/Notes/static/js/2.67015ee5.chunk.js",
  "/Notes/static/js/2.67015ee5.chunk.js.LICENSE.txt",
  "/Notes/static/js/2.67015ee5.chunk.js.map",
  "/Notes/static/js/main.cbf9f8fe.chunk.js",
  "/Notes/static/js/main.cbf9f8fe.chunk.js.map",
  "/Notes/static/js/runtime-main.badecaba.js",
  "/Notes/static/js/runtime-main.badecaba.js.map",
  "/Notes/static/media/ContactImg.b80a2194.jpeg",
  "/Notes/static/media/CustomizeImg.d1b7aad7.svg",
  "/Notes/static/media/EncryptedImg.2a82b95d.svg",
  "/Notes/static/media/GithubIcon.bcbc735a.svg",
  "/Notes/static/media/InstagramIcon.a9f8538b.svg",
  "/Notes/static/media/Linkedin.70903239.svg",
  "/Notes/static/media/SourceCodeIcon.c915e722.svg",
  "/Notes/static/media/ThemeChange.91d956b8.svg",
  "/Notes/static/media/bg.b9946741.svg",
  "/Notes/static/media/YoutubeIcon.632d83c5.svg",
  "/Notes/static/media/gIcon.f1089448.svg",
];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["NotesCache"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
