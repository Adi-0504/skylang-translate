const CACHE_NAME = "skylang-v5-ui";

const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./engine.js",
  "./validator.js",
  "./syllable.js",
  "./glyphMap.js",
  "./i18n.js",
  "./tts.js",
  "./enn.js",
  "./manifest.json",
  "./icon/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
