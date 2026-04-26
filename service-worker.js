const CACHE_NAME = "app-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/icon-192.png",
  "/icon-512.png"
];

// インストール
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// 有効化
self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

// fetch（ここが重要🔥）
self.addEventListener("fetch", (e) => {
  // 👇 ページ遷移の場合
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).catch(() => caches.match("/index.html"))
    );
    return;
  }

  // 👇 それ以外（CSS, JSなど）
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
