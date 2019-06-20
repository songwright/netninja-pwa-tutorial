const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v3';
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

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    })
  })
};

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
  // Only run fetch if firestore.googleapis.com is not in the request URL.
  if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
    evt.respondWith( // Fetch something from the cache, else
      // fetch original request from server.
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {
          // Return requests started by user, put them in cache.
          return caches.open(dynamicCacheName).then(cache => {
            // Put a clone of request in cache, original in application
            cache.put(evt.request.url, fetchRes.clone());
            limitCacheSize(dynamicCacheName, 15);
            return fetchRes;
          })
        });
      // If no page can load, use the fallback page.
      }).catch(() => {
        if(evt.request.url.indexOf('.html') > -1){
          return caches.match('/pages/fallback.html');
        }
      })
    );
  }
});