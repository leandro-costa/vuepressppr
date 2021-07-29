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
    "revision": "26a536b74cf9a90a8a1c9c57dcbf3773"
  },
  {
    "url": "02_SOLID.html",
    "revision": "4cb9753441f39c6f549f955c168ff8af"
  },
  {
    "url": "03_GOF.html",
    "revision": "ea98df252a30e017e18a94640e5c1738"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "cf0111b0453d0a4187bf2e7a59c65452"
  },
  {
    "url": "404.html",
    "revision": "08969358af529e3d9d1cc0926147ec0d"
  },
  {
    "url": "assets/css/0.styles.db063fab.css",
    "revision": "7dc140481bebb9a58fa1466f3066ec00"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2686d00a.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.a34fa059.js",
    "revision": "6db55ba4cf46a99d1644ffc7af5ab256"
  },
  {
    "url": "assets/js/12.4be18eab.js",
    "revision": "80e73fe10a9b90c7839fd76783a0fd66"
  },
  {
    "url": "assets/js/13.3b095311.js",
    "revision": "2120dfc1a008b4d2977edf63d278aed4"
  },
  {
    "url": "assets/js/14.77172f79.js",
    "revision": "1e0269adc7a0fe9e530a402df0e67047"
  },
  {
    "url": "assets/js/15.b1579a28.js",
    "revision": "a0c196575aa3fcea8c35f1a745cb3484"
  },
  {
    "url": "assets/js/16.451d89bb.js",
    "revision": "aa1fa7bf93c8d3a1194cc4ac61051073"
  },
  {
    "url": "assets/js/17.200cc9cd.js",
    "revision": "16d06688cb369168b63b9fecf3472d94"
  },
  {
    "url": "assets/js/18.0bf5be7c.js",
    "revision": "3a62d0ba0d6ee51e80a3cdfe1fef9dce"
  },
  {
    "url": "assets/js/19.ffb546a9.js",
    "revision": "3e5cb0dac807ed7b56368f230ff78df2"
  },
  {
    "url": "assets/js/2.9af12a35.js",
    "revision": "18a619d085621c9a31713073efa0a64e"
  },
  {
    "url": "assets/js/20.b9e0cd9f.js",
    "revision": "02e471fb1bbf3cf96e649f7a561ddf47"
  },
  {
    "url": "assets/js/21.05fff143.js",
    "revision": "d1b1ac4834dc705331ac8e9cffe3bf39"
  },
  {
    "url": "assets/js/3.6a601bc8.js",
    "revision": "b997573423e435c77bcca7b88243d9d5"
  },
  {
    "url": "assets/js/4.7876d50c.js",
    "revision": "bf9f14b6d4c0c22fb200ecd880c8a90d"
  },
  {
    "url": "assets/js/5.2b7133b0.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.28e79f91.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.a41c72a8.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.c3a503dd.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.be36a7d7.js",
    "revision": "37959dc090f3a4588cbc3a671184b65a"
  },
  {
    "url": "assets/js/app.bbe71492.js",
    "revision": "7370647c7cd349c7d1aaed97ede17883"
  },
  {
    "url": "gof/AbstractFactory.html",
    "revision": "b20d20abe1424989363051965fe9c3f7"
  },
  {
    "url": "gof/FactoryMethod.html",
    "revision": "527972e186506b0ae337377d0fa40e86"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "d956718feaf7d007cbbe307dad260600"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "095ecb1ee9cd3254bd3b2a333d7e1e81"
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
    "revision": "3bbe926757da380f26fe6c62e42e942a"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "7207fd21b380587dbc68feed53289149"
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
