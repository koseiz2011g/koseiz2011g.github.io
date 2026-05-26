const CACHE_NAME = "yontakun-v3";

const urlsToCache = [
  "/shin4ta/",
  "/shin4ta/index.html",
  "/shin4ta/style.css",
  "/shin4ta/script.js",
  "/shin4ta/manifest.json",
  "/shin4ta/icon-192.png",
  "/shin4ta/icon-512.png"
];

// インストール
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// 有効化
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// fetch
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
