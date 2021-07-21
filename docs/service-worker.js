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
    "revision": "080f3546ad92c97776188e7ed14e8705"
  },
  {
    "url": "02_SOLID.html",
    "revision": "505e89b4f0b086b26be65fcdf9b23fc0"
  },
  {
    "url": "03_GOF.html",
    "revision": "7302fea458d420f41fee6c496d713eaa"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "9dcb63cdfce7b1838c5a4ca6c9b21efe"
  },
  {
    "url": "404.html",
    "revision": "b3e55ea91209d9159de01a54a127323b"
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
    "url": "assets/js/app.c4b498ca.js",
    "revision": "700635eb057ac2cd8fbbd17379c1d44d"
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
    "revision": "1f1025477eabcf88d4299f691af67bbc"
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
