const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/js/app.js',
  '/js/ui.js',
  '/index.html',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2'
];
// install service worker
self.addEventListener('install', evt => {
  // Add responses for assets to cache, but wait until caching
  // is done before installing the service worker.
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('Caching shell assests');
      cache.addAll(assets);
    })
  );
});

// activate service worker
self.addEventListener('activate', evt => {
  // console.log('Service worker has been activated')
  // Keys are static caches.
  evt.waitUntil(
    caches.keys().then(keys => {
      // console.log(keys);
      // This returns an array of promises.
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      )
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt);
  evt.respondWith( // Fetch something from the cache, but
    // if the request is empty use original fetch request.
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
})