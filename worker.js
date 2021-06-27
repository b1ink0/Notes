var CACHE_NAME = 'NotesCache';
var urlsToCache = [
  '/Notes/index.html',
//   '/Notes/css/main.ea29826f.chunk.css',
//   '/Notes/js/2.e3e7fd3d.chunk.js',
//   '/Notesjs/main.248890e1.chunk.js',
//   '/Notes/favicon.ico',
//   '/Notes/manifest.json',
//   '/Notes/logo192.png',
//   '/Notes/media/gIcon.f1089448.svg', 
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = ['NotesCache'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});