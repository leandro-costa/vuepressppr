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
    "revision": "e26e5c6f5c3a5475375564e03a8c0b23"
  },
  {
    "url": "02_SOLID.html",
    "revision": "fcf6a7d07f894fd2e6877f0b283d4cd4"
  },
  {
    "url": "03_GOF.html",
    "revision": "bba03be500686ac639653279fbbb2979"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "52988ca27a443b87b4894c1a05220114"
  },
  {
    "url": "404.html",
    "revision": "f2b2d28b06b56c2260c8f7c5a71b649c"
  },
  {
    "url": "assets/css/0.styles.47a93a5c.css",
    "revision": "de12224e2d9908711081ece9d8365c1c"
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
    "url": "assets/js/13.8ba631bd.js",
    "revision": "38a5b3bd97f7f5d6513c0d95316f05eb"
  },
  {
    "url": "assets/js/14.77172f79.js",
    "revision": "1e0269adc7a0fe9e530a402df0e67047"
  },
  {
    "url": "assets/js/15.d9f7bce3.js",
    "revision": "81f0f2d17aa9b7f158a18e0cb8a3c94e"
  },
  {
    "url": "assets/js/16.48f9ac64.js",
    "revision": "5e389041d920a295160ffbc8415f9ba1"
  },
  {
    "url": "assets/js/17.dd5f8868.js",
    "revision": "b9ccd242edab06510de26caf768f1e71"
  },
  {
    "url": "assets/js/18.ce945b9c.js",
    "revision": "99eac787c01d5370424fca52f8a84536"
  },
  {
    "url": "assets/js/19.198c7258.js",
    "revision": "7ceb34930c115bcb93feb951d179ac78"
  },
  {
    "url": "assets/js/2.c734147e.js",
    "revision": "4669f56f32995eb1657cb3aaab5ad7f7"
  },
  {
    "url": "assets/js/20.e484b1d8.js",
    "revision": "37c29821b01e6479d26501579cdcf4cf"
  },
  {
    "url": "assets/js/21.9e403545.js",
    "revision": "1fb3358b6d2f85f97d777d5f40867ff3"
  },
  {
    "url": "assets/js/22.2f60a305.js",
    "revision": "784fc67d72a467e36af92c5cf29516fc"
  },
  {
    "url": "assets/js/3.8fef2960.js",
    "revision": "a2c6e0a36d374a4953c6e6f72115e839"
  },
  {
    "url": "assets/js/4.c876829f.js",
    "revision": "4ff8ae7ed8937d6d09fa1c18fb6a68f6"
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
    "url": "assets/js/9.bc98176b.js",
    "revision": "3114c2533a7cbea286309fa956995971"
  },
  {
    "url": "assets/js/app.f9ce8805.js",
    "revision": "c2fb184d3258fd7ea107ef8e48a1ec80"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "806f3fe287abd942032194c351f8678f"
  },
  {
    "url": "gof/FactoryMethod.html",
    "revision": "211f35d95ed9f13043352e179a4e1721"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "e57fb0327bc656447e30637de50ddb01"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "08da201e458a7d5d6aa97ee24a3ce866"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "ddf0ad1b0a0a971d1e6ffdb87e7177b8"
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
    "revision": "f02a6be83a17b69a7a548e6b8d3d6c0e"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "c75470f3235f958e8928f6ff64d7d4b1"
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
