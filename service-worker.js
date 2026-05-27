const CACHE_NAME = "yontakun-v9";

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
  "/sounds/select.mp3", // 💡ここに1行追加する
  "/sounds/finish.mp3",
  "/sounds/mew01.mp3",
  "/sounds/mile.mp3",
  "/sounds/milestone.mp3",
  "/sounds/next.mp3",
  "/sounds/perfect.mp3",
  "/sounds/record.mp3",
  "/sounds/result.mp3",
  "/sounds/tryagain.mp3",
  "/sounds/wrong.mp3"
];

// インストール
self.addEventListener("install", (event) => {
  console.log("SW install start");

  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // ループで1つずつ追加する現在の方法は、エラー検知しやすいためそのままでOKです
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

// 有効化（古いキャッシュの削除）
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
      await self.clients.claim();
    })()
  );
});

// fetch（Android / Windows / iOS 完全対応・修正版）
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const isAudio = url.pathname.endsWith(".mp3");

  event.respondWith(
    (async () => {
      // 1. まず通常のキャッシュマッチを試みる（音声の場合はURL文字列だけで再検索できるようにする）
      let cachedResponse = await caches.match(event.request);

      if (cachedResponse) {
        const rangeHeader = event.request.headers.get("range");

        // 音声ファイル、かつ Range 要求がある場合
        if (isAudio && rangeHeader) {
          try {
            // 原因①＆②対策：URLを指定して新しくフレッシュなレスポンスを取得し、blob化する
            const cache = await caches.open(CACHE_NAME);
            const freshCachedResponse = await cache.match(event.request.url);
            
            if (!freshCachedResponse) return cachedResponse.clone();

            const audioBlob = await freshCachedResponse.blob();
            const size = audioBlob.size;

            // Rangeヘッダーの解析
            const parts = rangeHeader.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : size - 1;

            // 安全にデータを切り出す
            const slicedBlob = audioBlob.slice(start, end + 1, audioBlob.type);

            // 206 Partial Content レスポンスを返却
            return new Response(slicedBlob, {
              status: 206,
              statusText: "Partial Content",
              headers: {
                "Content-Range": `bytes ${start}-${end}/${size}`,
                "Content-Length": slicedBlob.size,
                "Content-Type": audioBlob.type,
                "Accept-Ranges": "bytes"
              },
            });
          } catch (e) {
            console.error("Audio cache process error:", e);
            return cachedResponse.clone();
          }
        }

        // 音声以外、またはRange要求がない場合はそのままクローンを返す
        return cachedResponse.clone();
      }

      // 2. キャッシュがない場合はネットワークから取得（オンライン時）
      try {
        const response = await fetch(event.request);

        if (response.ok && response.status === 200) {
          const copy = response.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, copy);
        }

        return response;
      } catch (error) {
        // オフライン時のフォールバック
        const cache = await caches.open(CACHE_NAME);
        const fallbackResponse = await cache.match(event.request.url);
        if (fallbackResponse) {
          return fallbackResponse.clone();
        }
        throw error;
      }
    })()
  );
});


