const CACHE_NAME = "yontakun-v7";

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

// fetch（オフライン音声再生対応版）
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 音声ファイル（.mp3）へのリクエストかチェック
  const isAudio = url.pathname.endsWith(".mp3");

  event.respondWith(
    (async () => {
      // 1. キャッシュを探す
      const cachedResponse = await caches.match(event.request);

      // 2. 音声ファイル、かつキャッシュがある場合のiOSバグ対策
      if (isAudio && cachedResponse) {
        // リクエストに Range ヘッダーがあるか確認
        const rangeHeader = event.request.headers.get("range");

        if (rangeHeader) {
          // キャッシュされたデータをバイナリ（Blob）として取得
          const audioBlob = await cachedResponse.blob();
          const size = audioBlob.size;

          // Rangeヘッダーから読み込み開始位置と終了位置を解析 (例: bytes=0-)
          const parts = rangeHeader.replace(/bytes=/, "").split("-");
          const start = parseInt(parts[0], 10);
          const end = parts[1] ? parseInt(parts[1], 10) : size - 1;

          // 対象の部分だけデータを切り出す
          const slicedBlob = audioBlob.slice(start, end + 1, audioBlob.type);

          // iOSが要求する「206 Partial Content」のレスポンスを擬似的に自作して返す
          return new Response(slicedBlob, {
            status: 206,
            statusText: "Partial Content",
            headers: {
              "Content-Range": `bytes ${start}-${end}/${size}`,
              "Content-Length": slicedBlob.size,
              "Content-Type": audioBlob.type,
            },
          });
        }
      }

      // 3. 通常のキャッシュがあればそれを返す（音声以外の画像やHTMLなど）
      if (cachedResponse) {
        return cachedResponse;
      }

      // 4. キャッシュがない場合はネットワークから取得
      try {
        const response = await fetch(event.request);

        // 正常な応答（200）であれば次回のためにキャッシュに保存
        if (response.ok && response.status === 200) {
          const copy = response.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, copy);
        }

        return response;
      } catch (error) {
        // オフラインかつキャッシュもない場合のネットワークエラー
        throw error;
      }
    })()
  );
});

