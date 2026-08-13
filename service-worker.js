const CACHE_NAME = "yontakun-v24";

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
 "/images/ev001.png",
 "/images/ev002.png",
 "/images/ev003.png",
 "/images/ev004.png",
 "/images/ev005.png",
 "/images/ev006.png",
 "/images/ev007.png",
 "/images/ev008.png",
 "/images/ev009.png",
 "/images/ev010.png",
 "/images/ev011.png",
 "/images/ev012.png",
 "/images/ev013.png",
 "/images/ev014.png",
 "/images/ev015.png",
 "/images/ev016.png",
 "/images/ev017.png",

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
  "/sounds/wrong.mp3",

  // 英文音声
  "sounds/basic/01tense/01t001.mp3",
  "sounds/basic/01tense/01t002.mp3",
  "sounds/basic/01tense/01t003.mp3",
  "sounds/basic/01tense/01t004.mp3",
  "sounds/basic/01tense/01t005.mp3",
  "sounds/basic/01tense/01t006.mp3",
  "sounds/basic/01tense/01t007.mp3",
  "sounds/basic/01tense/01t008.mp3",
  "sounds/basic/01tense/01t009.mp3",
  "sounds/basic/01tense/01t010.mp3",
  "sounds/basic/01tense/01t011.mp3",
  "sounds/basic/02modal/02m001.mp3",
  "sounds/basic/02modal/02m002.mp3",
  "sounds/basic/02modal/02m003.mp3",
  "sounds/basic/02modal/02m004.mp3",
  "sounds/basic/02modal/02m005.mp3",
  "sounds/basic/02modal/02m006.mp3",
  "sounds/basic/02modal/02m007.mp3",
  "sounds/basic/02modal/02m008.mp3",
  "sounds/basic/02modal/02m009.mp3",
  "sounds/basic/02modal/02m010.mp3",
  "sounds/basic/02modal/02m011.mp3",
  "sounds/basic/03pre/03p001.mp3",
  "sounds/basic/03pre/03p002.mp3",
  "sounds/basic/03pre/03p003.mp3",
  "sounds/basic/03pre/03p004.mp3",
  "sounds/basic/03pre/03p005.mp3",
  "sounds/basic/03pre/03p006.mp3",
  "sounds/basic/03pre/03p007.mp3",
  "sounds/basic/03pre/03p008.mp3",
  "sounds/basic/03pre/03p009.mp3",
  "sounds/basic/03pre/03p010.mp3",
  "sounds/basic/03pre/03p011.mp3",
  "sounds/basic/04pronoun/04pro001.mp3",
  "sounds/basic/04pronoun/04pro002.mp3",
  "sounds/basic/04pronoun/04pro003.mp3",
  "sounds/basic/04pronoun/04pro004.mp3",
  "sounds/basic/04pronoun/04pro005.mp3",
  "sounds/basic/04pronoun/04pro006.mp3",
  "sounds/basic/04pronoun/04pro007.mp3",
  "sounds/basic/04pronoun/04pro008.mp3",
  "sounds/basic/04pronoun/04pro009.mp3",
  "sounds/basic/04pronoun/04pro010.mp3",
  "sounds/basic/05que/05q001.mp3",
  "sounds/basic/05que/05q002.mp3",
  "sounds/basic/05que/05q003.mp3",
  "sounds/basic/05que/05q004.mp3",
  "sounds/basic/05que/05q005.mp3",
  "sounds/basic/05que/05q006.mp3",
  "sounds/basic/05que/05q007.mp3",
  "sounds/basic/05que/05q008.mp3",
  "sounds/basic/06conjunction/06c001.mp3",
  "sounds/basic/06conjunction/06c002.mp3",
  "sounds/basic/06conjunction/06c003.mp3",
  "sounds/basic/06conjunction/06c004.mp3",
  "sounds/basic/06conjunction/06c005.mp3",
  "sounds/basic/06conjunction/06c006.mp3",
  "sounds/basic/06conjunction/06c007.mp3",
  "sounds/basic/06conjunction/06c008.mp3",
  "sounds/basic/06conjunction/06c009.mp3",
  "sounds/basic/06conjunction/06c010.mp3",
  "sounds/basic/07verb/07v001.mp3",
  "sounds/basic/07verb/07v002.mp3",
  "sounds/basic/07verb/07v003.mp3",
  "sounds/basic/07verb/07v004.mp3",
  "sounds/basic/07verb/07v005.mp3",
  "sounds/basic/07verb/07v006.mp3",
  "sounds/basic/07verb/07v007.mp3",
  "sounds/basic/07verb/07v008.mp3",
  "sounds/basic/07verb/07v009.mp3",
  "sounds/basic/07verb/07v010.mp3",
  "sounds/basic/08adjective/08adj001.mp3",
  "sounds/basic/08adjective/08adj002.mp3",
  "sounds/basic/08adjective/08adj003.mp3",
  "sounds/basic/08adjective/08adj004.mp3",
  "sounds/basic/08adjective/08adj005.mp3",
  "sounds/basic/08adjective/08adj006.mp3",
  "sounds/basic/08adjective/08adj007.mp3",
  "sounds/basic/08adjective/08adj008.mp3",
  "sounds/basic/08adjective/08adj009.mp3",
  "sounds/basic/08adjective/08adj010.mp3",
  "sounds/basic/09adverb/09adv001.mp3",
  "sounds/basic/09adverb/09adv002.mp3",
  "sounds/basic/09adverb/09adv003.mp3",
  "sounds/basic/09adverb/09adv004.mp3",
  "sounds/basic/09adverb/09adv005.mp3",
  "sounds/basic/09adverb/09adv006.mp3",
  "sounds/basic/09adverb/09adv007.mp3",
  "sounds/basic/09adverb/09adv008.mp3",
  "sounds/basic/09adverb/09adv009.mp3",
  "sounds/basic/09adverb/09adv010.mp3",
  "sounds/basic/10infinitive/10in001.mp3",
  "sounds/basic/10infinitive/10in002.mp3",
  "sounds/basic/10infinitive/10in003.mp3",
  "sounds/basic/10infinitive/10in004.mp3",
  "sounds/basic/10infinitive/10in005.mp3",
  "sounds/basic/10infinitive/10in006.mp3",
  "sounds/basic/10infinitive/10in007.mp3",
  "sounds/basic/10infinitive/10in008.mp3",
  "sounds/basic/11passive/11pa001.mp3",
  "sounds/basic/11passive/11pa002.mp3",
  "sounds/basic/11passive/11pa003.mp3",
  "sounds/basic/11passive/11pa004.mp3",
  "sounds/basic/11passive/11pa005.mp3",
  "sounds/basic/11passive/11pa006.mp3",
  "sounds/basic/11passive/11pa007.mp3",
  "sounds/basic/11passive/11pa008.mp3",
  "sounds/basic/11passive/11pa009.mp3",
  "sounds/basic/12relative/12re001.mp3",
  "sounds/basic/12relative/12re002.mp3",
  "sounds/basic/12relative/12re003.mp3",
  "sounds/basic/12relative/12re004.mp3",
  "sounds/basic/12relative/12re005.mp3",
  "sounds/basic/12relative/12re006.mp3",
  "sounds/basic/12relative/12re007.mp3",
  "sounds/basic/12relative/12re008.mp3",
  "sounds/basic/12relative/12re009.mp3",
  "sounds/chosi.mp3",
  "sounds/correct.mp3",
  "sounds/finish.mp3",
  "sounds/mew01.mp3",
  "sounds/mile.mp3",
  "sounds/milestone.mp3",
  "sounds/next.mp3",
  "sounds/normal/01modal2/H01m2001.mp3",
  "sounds/normal/01modal2/H01m2002.mp3",
  "sounds/normal/01modal2/H01m2003.mp3",
  "sounds/normal/01modal2/H01m2004.mp3",
  "sounds/normal/01modal2/H01m2005.mp3",
  "sounds/normal/01modal2/H01m2006.mp3",
  "sounds/normal/01modal2/H01m2007.mp3",
  "sounds/normal/02pre2/H02p2001.mp3",
  "sounds/normal/02pre2/H02p2002.mp3",
  "sounds/normal/02pre2/H02p2003.mp3",
  "sounds/normal/02pre2/H02p2004.mp3",
  "sounds/normal/02pre2/H02p2005.mp3",
  "sounds/normal/02pre2/H02p2006.mp3",
  "sounds/normal/02pre2/H02p2007.mp3",
  "sounds/normal/02pre2/H02p2008.mp3",
  "sounds/normal/03pronoun2/H03pro2001.mp3",
  "sounds/normal/03pronoun2/H03pro2002.mp3",
  "sounds/normal/03pronoun2/H03pro2003.mp3",
  "sounds/normal/03pronoun2/H03pro2004.mp3",
  "sounds/normal/03pronoun2/H03pro2005.mp3",
  "sounds/normal/03pronoun2/H03pro2006.mp3",
  "sounds/normal/03pronoun2/H03pro2007.mp3",
  "sounds/normal/03pronoun2/H03pro2008.mp3",
  "sounds/normal/03pronoun2/H03pro2009.mp3",
  "sounds/normal/03pronoun2/H03pro2010.mp3",
  "sounds/normal/04pronoun3/H04pro3001.mp3",
  "sounds/normal/04pronoun3/H04pro3002.mp3",
  "sounds/normal/04pronoun3/H04pro3003.mp3",
  "sounds/normal/04pronoun3/H04pro3004.mp3",
  "sounds/normal/04pronoun3/H04pro3005.mp3",
  "sounds/normal/04pronoun3/H04pro3006.mp3",
  "sounds/normal/04pronoun3/H04pro3007.mp3",
  "sounds/normal/04pronoun3/H04pro3008.mp3",
  "sounds/normal/04pronoun3/H04pro3009.mp3",
  "sounds/normal/04pronoun3/H04pro3010.mp3",
  "sounds/normal/05pronoun4/H05pro4001.mp3",
  "sounds/normal/05pronoun4/H05pro4002.mp3",
  "sounds/normal/05pronoun4/H05pro4003.mp3",
  "sounds/normal/05pronoun4/H05pro4004.mp3",
  "sounds/normal/05pronoun4/H05pro4005.mp3",
  "sounds/normal/05pronoun4/H05pro4006.mp3",
  "sounds/normal/05pronoun4/H05pro4007.mp3",
  "sounds/normal/05pronoun4/H05pro4008.mp3",
  "sounds/normal/05pronoun4/H05pro4009.mp3",
  "sounds/normal/05pronoun4/H05pro4010.mp3",
  "sounds/normal/06conjunction2/H06con2001.mp3",
  "sounds/normal/06conjunction2/H06con2002.mp3",
  "sounds/normal/06conjunction2/H06con2003.mp3",
  "sounds/normal/06conjunction2/H06con2004.mp3",
  "sounds/normal/06conjunction2/H06con2005.mp3",
  "sounds/normal/06conjunction2/H06con2006.mp3",
  "sounds/normal/06conjunction2/H06con2007.mp3",
  "sounds/normal/06conjunction2/H06con2008.mp3",
  "sounds/normal/06conjunction2/H06con2009.mp3",
  "sounds/normal/06conjunction2/H06con2010.mp3",
  "sounds/normal/06conjunction2/H06con2011.mp3",
  "sounds/normal/07infinitive2/H07inf2001.mp3",
  "sounds/normal/07infinitive2/H07inf2002.mp3",
  "sounds/normal/07infinitive2/H07inf2003.mp3",
  "sounds/normal/07infinitive2/H07inf2004.mp3",
  "sounds/normal/07infinitive2/H07inf2005.mp3",
  "sounds/normal/07infinitive2/H07inf2006.mp3",
  "sounds/normal/07infinitive2/H07inf2007.mp3",
  "sounds/normal/07infinitive2/H07inf2008.mp3",
  "sounds/normal/07infinitive2/H07inf2009.mp3",
  "sounds/normal/07infinitive2/H07inf2010.mp3",
  "sounds/normal/08infinitive3/H08inf3001.mp3",
  "sounds/normal/08infinitive3/H08inf3002.mp3",
  "sounds/normal/08infinitive3/H08inf3003.mp3",
  "sounds/normal/08infinitive3/H08inf3004.mp3",
  "sounds/normal/08infinitive3/H08inf3005.mp3",
  "sounds/normal/08infinitive3/H08inf3006.mp3",
  "sounds/normal/08infinitive3/H08inf3007.mp3",
  "sounds/normal/08infinitive3/H08inf3008.mp3",
  "sounds/normal/09passive2/H09pa2001.mp3",
  "sounds/normal/09passive2/H09pa2002.mp3",
  "sounds/normal/09passive2/H09pa2003.mp3",
  "sounds/normal/09passive2/H09pa2004.mp3",
  "sounds/normal/09passive2/H09pa2005.mp3",
  "sounds/normal/09passive2/H09pa2006.mp3",
  "sounds/normal/09passive2/H09pa2007.mp3",
  "sounds/normal/09passive2/H09pa2008.mp3",
  "sounds/normal/09passive2/H09pa2009.mp3",
  "sounds/normal/10indirect/H10ind001.mp3",
  "sounds/normal/10indirect/H10ind002.mp3",
  "sounds/normal/10indirect/H10ind003.mp3",
  "sounds/normal/10indirect/H10ind004.mp3",
  "sounds/normal/10indirect/H10ind005.mp3",
  "sounds/normal/10indirect/H10ind006.mp3",
  "sounds/normal/10indirect/H10ind007.mp3",
  "sounds/normal/10indirect/H10ind008.mp3",
  "sounds/normal/11indirect2/H11ind2001.mp3",
  "sounds/normal/11indirect2/H11ind2002.mp3",
  "sounds/normal/11indirect2/H11ind2003.mp3",
  "sounds/normal/11indirect2/H11ind2004.mp3",
  "sounds/normal/11indirect2/H11ind2005.mp3",
  "sounds/normal/11indirect2/H11ind2006.mp3",
  "sounds/normal/11indirect2/H11ind2007.mp3",
  "sounds/normal/12relative2/H12rel2001.mp3",
  "sounds/normal/12relative2/H12rel2002.mp3",
  "sounds/normal/12relative2/H12rel2003.mp3",
  "sounds/normal/12relative2/H12rel2004.mp3",
  "sounds/normal/12relative2/H12rel2005.mp3",
  "sounds/normal/12relative2/H12rel2006.mp3",
  "sounds/normal/12relative2/H12rel2007.mp3",
  "sounds/normal/12relative2/H12rel2008.mp3",
  "sounds/normal/12relative2/H12rel2009.mp3",
  "sounds/normal/13clause/H13clau001.mp3",
  "sounds/normal/13clause/H13clau002.mp3",
  "sounds/normal/13clause/H13clau003.mp3",
  "sounds/normal/13clause/H13clau004.mp3",
  "sounds/normal/13clause/H13clau005.mp3",
  "sounds/normal/13clause/H13clau006.mp3",
  "sounds/normal/13clause/H13clau007.mp3",
  "sounds/normal/13clause/H13clau008.mp3",
  "sounds/normal/14clause2/H14clau2001.mp3",
  "sounds/normal/14clause2/H14clau2002.mp3",
  "sounds/normal/14clause2/H14clau2003.mp3",
  "sounds/normal/14clause2/H14clau2004.mp3",
  "sounds/normal/14clause2/H14clau2005.mp3",
  "sounds/normal/14clause2/H14clau2006.mp3",
  "sounds/normal/14clause2/H14clau2007.mp3",
  "sounds/normal/15verb2/H15ver2001.mp3",
  "sounds/normal/15verb2/H15ver2002.mp3",
  "sounds/normal/15verb2/H15ver2003.mp3",
  "sounds/normal/15verb2/H15ver2004.mp3",
  "sounds/normal/15verb2/H15ver2005.mp3",
  "sounds/normal/15verb2/H15ver2006.mp3",
  "sounds/normal/15verb2/H15ver2007.mp3",
  "sounds/normal/15verb2/H15ver2008.mp3",
  "sounds/normal/15verb2/H15ver2009.mp3",
  "sounds/normal/16adjective2/H16adj2001.mp3",
  "sounds/normal/16adjective2/H16adj2002.mp3",
  "sounds/normal/16adjective2/H16adj2003.mp3",
  "sounds/normal/16adjective2/H16adj2004.mp3",
  "sounds/normal/16adjective2/H16adj2005.mp3",
  "sounds/normal/16adjective2/H16adj2006.mp3",
  "sounds/normal/16adjective2/H16adj2007.mp3",
  "sounds/normal/17adverb2/H17adv2001.mp3",
  "sounds/normal/17adverb2/H17adv2002.mp3",
  "sounds/normal/17adverb2/H17adv2003.mp3",
  "sounds/normal/17adverb2/H17adv2004.mp3",
  "sounds/normal/17adverb2/H17adv2005.mp3",
  "sounds/normal/17adverb2/H17adv2006.mp3",
  "sounds/normal/17adverb2/H17adv2007.mp3",
  "sounds/normal/17adverb2/H17adv2008.mp3",
  "sounds/normal/17adverb2/H17adv2009.mp3",
  "sounds/normal/18idiom/H18idi001.mp3",
  "sounds/normal/18idiom/H18idi002.mp3",
  "sounds/normal/18idiom/H18idi003.mp3",
  "sounds/normal/18idiom/H18idi004.mp3",
  "sounds/normal/18idiom/H18idi005.mp3",
  "sounds/normal/18idiom/H18idi006.mp3",
  "sounds/normal/18idiom/H18idi007.mp3",
  "sounds/normal/18idiom/H18idi008.mp3",
  "sounds/normal/18idiom/H18idi009.mp3",
  "sounds/normal/19idiom2/H19idi2001.mp3",
  "sounds/normal/19idiom2/H19idi2002.mp3",
  "sounds/normal/19idiom2/H19idi2003.mp3",
  "sounds/normal/19idiom2/H19idi2004.mp3",
  "sounds/normal/19idiom2/H19idi2005.mp3",
  "sounds/normal/19idiom2/H19idi2006.mp3",
  "sounds/normal/19idiom2/H19idi2007.mp3",
  "sounds/perfect.mp3",
  "sounds/record.mp3",
  "sounds/result.mp3",
  "sounds/shakiin.mp3",
  "sounds/tryagain.mp3",
  "sounds/wrong.mp3"
];

// インストール
self.addEventListener("install", (event) => {
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

        // 💡 拡張機能などの通信（chrome-extension://等）はキャッシュしないように除外する
        if (!url.protocol.startsWith('http')) {
          return response;
        }

        if (response.ok && response.status === 200) {
          const copy = response.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, copy); // ← ここでエラーが起きていました
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
