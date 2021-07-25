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
    "revision": "e02091edd89bf1c5b9fa22c8d4e086cd"
  },
  {
    "url": "02_SOLID.html",
    "revision": "60e3993393c69cea6b9becbe1957cd5f"
  },
  {
    "url": "03_GOF.html",
    "revision": "970689f6b51cce5637608d808745bd59"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "aacbcc1c2f729d0e51ace4ce8413a85a"
  },
  {
    "url": "404.html",
    "revision": "1fead55410cdaf10334e0c90b8bc694b"
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
    "url": "assets/js/13.2ba7da7f.js",
    "revision": "b5ba47f39ef5808349b6461d315a5350"
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
    "url": "assets/js/16.d0ccdda9.js",
    "revision": "b783291faed32693a79709fbba9039c6"
  },
  {
    "url": "assets/js/17.cf21864b.js",
    "revision": "8cb4e505a2c9c87938a67ab968ffa2d1"
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
    "url": "assets/js/app.ca184c73.js",
    "revision": "399ecc17ed8d1382aafdf18262fe205d"
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
    "revision": "8f4e632a4ae6e4185bece4dc72bd2e74"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ppr/Flyweight.html",
    "revision": "f27083b0aabc0f8248c093553e3070c2"
  },
  {
    "url": "ppr/Strategy.html",
    "revision": "3dfff6ed7d7ac0e1123b27ccc7343c98"
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
