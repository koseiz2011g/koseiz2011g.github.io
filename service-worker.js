const CACHE_NAME = "yontakun-v5";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",

  // 画像
"/images/4cats.png",
"/images/cat00.jpg",
"/images/cb01.png",
"/images/cb02.png",
"/images/cm_perfect.png",
"/images/cm01.png",
"/images/cm02.png",
"/images/cm03.png",
"/images/cm04.png",
"/images/cm05.png",
"/images/cm06.png",
"/images/cm07.png",
"/images/cm08.png",
"/images/cmi01.png",
"/images/cmi02.png",
"/images/cmi03.png",
"/images/cs01.png",
"/images/cs02.png",
"/images/cs03.png",
"/images/cs04.png",
"/images/cw01.png",
"/images/cw02.png",
"/images/cw03.png",

// 効果音
   "/sounds/correct.mp3",
"/sounds/finish.mp3",
"/sounds/mew01.mp3",
"/sounds/mile.mp3",
"/sounds/milestone.mp3",
"/sounds/next.mp3",
"/sounds/perfect.mp3",
"/sounds/record.mp3",
"/sounds/result.mp3",
"/sounds/shakiin.mp3",
"/sounds/tryagain.mp3",
"/sounds/wrong.mp3"
];

// インストール
self.addEventListener("install", (event) => {
  console.log("SW install start");

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      for (const url of urlsToCache) {
        try {
          await cache.add(url);
          console.log("OK:", url);
        } catch (err) {
          console.error("NG:", url, err);
        }
      }
    })()
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
