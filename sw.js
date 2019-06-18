const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v1';
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
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2',
  '/pages/fallback.html'
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
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      )
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt);
  evt.respondWith( // Fetch something from the cache, else
    // fetch original request from server.
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        // Return requests started by user, put them in cache.
        return caches.open(dynamicCacheName).then(cache => {
          // Put a clone of request in cache, original in application
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    }).catch(() => caches.match('/pages/fallback.html'))
  );
});