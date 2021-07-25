/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01_padroes.html",
    "revision": "8c89d453b93d4c89aafbdaac22ca866c"
  },
  {
    "url": "02_SOLID.html",
    "revision": "d00b6e914ecae3cf5eeca5b2a022f736"
  },
  {
    "url": "03_GOF.html",
    "revision": "7dfd5b072adc2c2eb958d566d90c9ec7"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "c55e7ef1c13bfc4f3b19532cce9d25fa"
  },
  {
    "url": "404.html",
    "revision": "47f5f8ad63a13929eb6025a2e7941a93"
  },
  {
    "url": "assets/css/0.styles.716e4c57.css",
    "revision": "ee41fd1a3cb93dd5e4c3d47a61bd784d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.daaad698.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.bbf627e8.js",
    "revision": "55174c94bac8df71e1f58a8d5d5b174f"
  },
  {
    "url": "assets/js/12.0475d1fd.js",
    "revision": "8097eb1c1a22fad56b7099f4dd3ac1df"
  },
  {
    "url": "assets/js/13.01a04d04.js",
    "revision": "9bbe6f6f3c3992dd82ebac21016df930"
  },
  {
    "url": "assets/js/14.8617bd84.js",
    "revision": "6c8116f3de7322a5a9608be1faa35ab5"
  },
  {
    "url": "assets/js/15.6f6dec20.js",
    "revision": "e94e44b4aef20e659c17b8ee4d3a0cca"
  },
  {
    "url": "assets/js/16.a1162ba7.js",
    "revision": "4f8ea473cb710b244aabedd40b96bdc8"
  },
  {
    "url": "assets/js/17.41de8f14.js",
    "revision": "afa45ca68f15bea3288557e6aa2b6c4d"
  },
  {
    "url": "assets/js/18.5e9b91d1.js",
    "revision": "651eb72ae544bc83a014beea38bb2fd9"
  },
  {
    "url": "assets/js/2.c7e67aad.js",
    "revision": "6fca69fe1c9ed46546b8b364e34a1ed4"
  },
  {
    "url": "assets/js/3.190bb28f.js",
    "revision": "37505fb7cdf33444eb1c4404206d672d"
  },
  {
    "url": "assets/js/4.3d0c16ac.js",
    "revision": "49622cb1bfa43393ecdf18ab76b63b30"
  },
  {
    "url": "assets/js/5.2d02247d.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.21ddd515.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.c0459fae.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.97a4833c.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.26c184f4.js",
    "revision": "9656eead4588ead5df5c930a89b7d5fa"
  },
  {
    "url": "assets/js/app.3e398299.js",
    "revision": "a2809a5ab9b354dd3a4fc6a5164e6296"
  },
  {
    "url": "icon-192x192.png",
    "revision": "5ece80f031902e56942acad6fb63133d"
  },
  {
    "url": "icon-256x256.png",
    "revision": "43304b267b884bcbc582bc60bb3e16c8"
  },
  {
    "url": "icon-384x384.png",
    "revision": "67a9c81ecdf0ba691d4e38fffa903a11"
  },
  {
    "url": "icon-512x512.png",
    "revision": "efbd3ec066773aeba25d9a5248e9217e"
  },
  {
    "url": "index.html",
    "revision": "5c19b334ac5f90887648fb373ef25cbe"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ppr/Flyweight.html",
    "revision": "5dc98c0df2d5be96a62be2fa8b6e14f2"
  },
  {
    "url": "ppr/Strategy.html",
    "revision": "737867f2fe06db6a00fd904e774ffe09"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
