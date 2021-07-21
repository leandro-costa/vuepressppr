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
    "revision": "f937c6512b432d60f175c836b7d67e49"
  },
  {
    "url": "02_SOLID.html",
    "revision": "548c08b61b363c2477748948bc3425ac"
  },
  {
    "url": "03_GOF.html",
    "revision": "acba6243958bbfd7099f2db689e54c69"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "575f7cfe8301b3224f5266f497f75bac"
  },
  {
    "url": "404.html",
    "revision": "b7630cc5d7c1f75d2ab79c1074e9ed03"
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
    "url": "assets/js/11.2014e4e5.js",
    "revision": "d1fe20afe7de2800092e19134dc80976"
  },
  {
    "url": "assets/js/12.77a3f822.js",
    "revision": "29b5deac5a046eeddd2b4d4acf2f570f"
  },
  {
    "url": "assets/js/13.0b2ef35b.js",
    "revision": "cae3fa1c211390a1a5b7b0a1cf155bec"
  },
  {
    "url": "assets/js/14.7f7f1087.js",
    "revision": "aeb19d5f425df7e5b3c964fa9918ef8f"
  },
  {
    "url": "assets/js/15.aa166330.js",
    "revision": "00041442b772109007f0b0269a979833"
  },
  {
    "url": "assets/js/16.9e0c2e0c.js",
    "revision": "a15c659a0a9637b1da7ba41297019a37"
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
    "url": "assets/js/4.89051406.js",
    "revision": "d80b1cb185744848f60660c5aa3a5f72"
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
    "url": "assets/js/9.38325309.js",
    "revision": "996bd046cde3a0cfeb0c1692ef54de57"
  },
  {
    "url": "assets/js/app.ca0b1bdb.js",
    "revision": "9faead0ab87912bc7037036d0d710b66"
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
    "revision": "5188cc99dc9827c2e2f66c46c0ee1d4a"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
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
