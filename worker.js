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
  "/Notes/static/css/main.f504639e.chunk.css",
  "/Notes/static/css/main.f504639e.chunk.css.map",
  "/Notes/static/js/2.67015ee5.chunk.js",
  "/Notes/static/js/2.67015ee5.chunk.js.map",
  "/Notes/static/js/main.7bc73389.chunk.js",
  "/Notes/static/js/main.7bc73389.chunk.js.map",
  "/Notes/static/js/runtime-main.badecaba.js",
  "/Notes/static/js/runtime-main.badecaba.js.map",
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
