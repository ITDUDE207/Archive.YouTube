const CACHE_NAME = 'mo3-pwa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/public/manifest.json',
  '/public/icon.png',
  '/public/music.mo3' // You can completely cache the .mo3 file offline!
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
