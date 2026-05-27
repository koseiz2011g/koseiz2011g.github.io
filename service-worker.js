const CACHE_NAME = "yontakun-v4";

const urlsToCache = [
  "/shin4ta/",
  "/shin4ta/index.html",
  "/shin4ta/style.css",
  "/shin4ta/script.js",
  "/shin4ta/manifest.json",
  "/shin4ta/icon-192.png",
  "/shin4ta/icon-512.png",

  // 画像
"/shin4ta/images/4c002.png",
"/shin4ta/images/4cats.png",
"/shin4ta/images/cat00.jpg",
"/shin4ta/images/cb01.png",
"/shin4ta/images/cb02.png",
"/shin4ta/images/cm_perfect.png",
"/shin4ta/images/cm01.png",
"/shin4ta/images/cm02.png",
"/shin4ta/images/cm03.png",
"/shin4ta/images/cm04.png",
"/shin4ta/images/cm05.png",
"/shin4ta/images/cm06.png",
"/shin4ta/images/cm07.png",
"/shin4ta/images/cm08.png",
"/shin4ta/images/cmi01.png",
"/shin4ta/images/cmi02.png",
"/shin4ta/images/cmi03.png",
"/shin4ta/images/cs01.png",
"/shin4ta/images/cs02.png",
"/shin4ta/images/cs03.png",
"/shin4ta/images/cs03new.png",
"/shin4ta/images/cs04.png",
"/shin4ta/images/cw01.png",
"/shin4ta/images/cw02.png",
"/shin4ta/images/cw03.png",

// 効果音
  "/shin4ta/sounds/correct.mp3",
  "/shin4ta/sounds/wrong.mp3",
  "/shin4ta/sounds/select.mp3",
  "/shin4ta/sounds/finish.mp3",
  "/shin4ta/sounds/next.mp3",
  "/shin4ta/sounds/tryagain.mp3",
  "/shin4ta/sounds/result.mp3",
  "/shin4ta/sounds/milestone.mp3",
  "/shin4ta/sounds/record.mp3",
  "/shin4ta/sounds/perfect.mp3",
  "/shin4ta/sounds/mew01.mp3"
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
      if (response) {
        return response;
      }

      return fetch(e.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});
