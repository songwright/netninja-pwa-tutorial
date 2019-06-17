const staticCacheName = 'site-static';
const assets = [
  '/',
  '/js/app.js',
  '/js/ui.js',
  '/index.html',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/css/materialize.min.css',
  '/img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
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
})

// fetch event
self.addEventListener('fetch', evt => {
  // console.log('fetch event', evt);
})