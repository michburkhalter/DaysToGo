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

self.addEventListener(’fetch’, function (event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request)
        })
    )
})