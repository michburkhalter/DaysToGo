// The version of the cache.
const VERSION = "v3";

// The name of the cache
const CACHE_NAME = `days-to-go-${VERSION}`;

// The static resources that the app needs to function.
const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/date_calculation.js",
  "/styles.css",
  "/images/favicon.ico",
  "/images/icon512_rounded.png",
  "/images/icon144_rounded.png",
  "/images/icon512_maskable.png",
  "/images/icon144_maskable.png",
  "/manifest.json",

];

// Establish a cache name
const cacheName = 'MyFancyCacheName_v1';

self.addEventListener('fetch', (event) => {
  // Check if this is a navigation request
  if (event.request.mode === 'navigate') {
    // Open the cache
    event.respondWith(caches.open(cacheName).then((cache) => {
      // Go to the network first
      return fetch(event.request.url).then((fetchedResponse) => {
        cache.put(event.request, fetchedResponse.clone());

        return fetchedResponse;
      }).catch(() => {
        // If the network is unavailable, get
        return cache.match(event.request.url);
      });
    }));
  } else {
    return;
  }
});