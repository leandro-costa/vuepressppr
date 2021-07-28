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
    "revision": "f14dd355c83b39e098283422877b96ca"
  },
  {
    "url": "02_SOLID.html",
    "revision": "8540d67b5ebc1d86c0bb6defd87772f9"
  },
  {
    "url": "03_GOF.html",
    "revision": "9313e3d7ff2f20964f9207a1c7f5fd95"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "b295883fdf40f3aaa5ad5f2e98ec0623"
  },
  {
    "url": "404.html",
    "revision": "60b4f063dee734d8eafd964487a56239"
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
    "url": "assets/js/13.a8b1f016.js",
    "revision": "359fc2bdb53c61d2199d69e02419d099"
  },
  {
    "url": "assets/js/14.77172f79.js",
    "revision": "1e0269adc7a0fe9e530a402df0e67047"
  },
  {
    "url": "assets/js/15.0518014d.js",
    "revision": "5e4ae28094a78f3d23be074a1254711c"
  },
  {
    "url": "assets/js/16.b9049372.js",
    "revision": "acda3a31baae4bd402ac26a697bfaf92"
  },
  {
    "url": "assets/js/17.51bdd965.js",
    "revision": "d02f377e6644c68e50098b6f12788969"
  },
  {
    "url": "assets/js/18.9d90625d.js",
    "revision": "1bccc3164574375749937606e5984ced"
  },
  {
    "url": "assets/js/19.ffd63aa1.js",
    "revision": "c5f9e4b92acc5d87f164d8c97bc46322"
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
    "url": "assets/js/app.ae842f44.js",
    "revision": "bae5580b03a7d80b8c84ed360321fb8e"
  },
  {
    "url": "gof/AbstractFactory.html",
    "revision": "e5542b7f4b50c85ebd979c4215b94ffb"
  },
  {
    "url": "gof/FactoryMethod.html",
    "revision": "2027ff3906da3eb3fd82e3086b91c0ae"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "5ad881f7c45eb810033428a66b23eef6"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "6e5423db87f19f30433350e11ed42d48"
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
    "revision": "e39d4a87bf406cac1bda6ce4f19b3d91"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "88836286cdd947b2d986857231cb9121"
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
