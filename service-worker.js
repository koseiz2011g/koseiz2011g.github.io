const CACHE_NAME = "yontakun-v1";
const urlsToCache = [
  "/shin4ta/",
  "/shin4ta/index.html",
  "/shin4ta/style.css",
  "/shin4ta/script.js",
  "/shin4ta/icon-192.png",
  "/shin4ta/icon-512.png"
];

// インストール時にキャッシュ
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// 有効化
self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

// fetch時（キャッシュ優先）
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
