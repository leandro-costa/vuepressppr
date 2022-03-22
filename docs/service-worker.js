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
    "revision": "9bc8121522aad97b61ce7d1d2e707f72"
  },
  {
    "url": "03_GOF.html",
    "revision": "d1be0e4777ea9bea16f2a1c1043659f3"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "1ad016ca71898a9b37f08174e9bb5941"
  },
  {
    "url": "404.html",
    "revision": "f7c2109a11addb98db837fa59154d3f2"
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
    "url": "assets/js/12.c88329e4.js",
    "revision": "a17c6253593f73a64705922258f24efc"
  },
  {
    "url": "assets/js/13.31e4f6cd.js",
    "revision": "d06de999097e24539efa4f0d9b9f44fd"
  },
  {
    "url": "assets/js/14.921388cc.js",
    "revision": "c451427bd2f9cc9e3d7f00e0e022ad0d"
  },
  {
    "url": "assets/js/15.231e9ca1.js",
    "revision": "fd1b5663d3977dc0cf4a843e4172fae2"
  },
  {
    "url": "assets/js/16.991802d3.js",
    "revision": "a040b61d6e62a84c765ab9113dd6a98b"
  },
  {
    "url": "assets/js/17.e7691df1.js",
    "revision": "a360d8e093739ed13ceb812414eded31"
  },
  {
    "url": "assets/js/18.98381aae.js",
    "revision": "71ba5d635898e36075914dee7aec1e64"
  },
  {
    "url": "assets/js/19.0ebfbf97.js",
    "revision": "e1fe477c8b8783ecd05c7c042aab8e44"
  },
  {
    "url": "assets/js/2.63c38da0.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.1645c6c4.js",
    "revision": "f257bfe7df098a7c7dbb9d948292d0e1"
  },
  {
    "url": "assets/js/21.1ea42746.js",
    "revision": "62908741e8fd32cd839a897b7d931e8d"
  },
  {
    "url": "assets/js/22.590de762.js",
    "revision": "9c47a7dfcb5cb21a4f537823f76d0611"
  },
  {
    "url": "assets/js/23.1aac4d31.js",
    "revision": "eb29c8821fdff800183cdef5f51d9eab"
  },
  {
    "url": "assets/js/24.127dd2bd.js",
    "revision": "e79114ba9dda3c3881a437e0a277a99c"
  },
  {
    "url": "assets/js/25.29d15064.js",
    "revision": "d97ecd207f8ba7e508ba1e1fab6098ec"
  },
  {
    "url": "assets/js/26.a8072170.js",
    "revision": "ae2dbfe5532b56f3ff5f346286564115"
  },
  {
    "url": "assets/js/27.04fd3c24.js",
    "revision": "16458dd30d3f6da74598706fd39845c0"
  },
  {
    "url": "assets/js/28.fa87c2b8.js",
    "revision": "91be31b9abc8e3d8af234bb6b90e644a"
  },
  {
    "url": "assets/js/29.c3ae10b4.js",
    "revision": "695f0f68914d1a5e428a3a4ed1b83a62"
  },
  {
    "url": "assets/js/3.5bc5870a.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/4.97fbe56c.js",
    "revision": "4900343ebd96b8021aee66878b9b140b"
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
    "url": "assets/js/9.4e94b1fd.js",
    "revision": "9fd0c73a2d43b14639da7ea5eb85f402"
  },
  {
    "url": "assets/js/app.3b236a18.js",
    "revision": "b23097758de2bb0a1fd4e67a5f073aa8"
  },
  {
    "url": "gof/Criacao/AbstractFactory/index.html",
    "revision": "22ff9a4d26fd285ff3335d92d3ac2a8f"
  },
  {
    "url": "gof/Criacao/FactoryMethod/index.html",
    "revision": "6287794af0b0534914beb71cef22e95e"
  },
  {
    "url": "gof/Criacao/index.html",
    "revision": "c8c5e4c5ebbf0b1b7dd60262145f8e32"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "36f8a56bc3549e91e881ce06ecdf69c6"
  },
  {
    "url": "gof/Criacao/Strategy.html",
    "revision": "9cd8386742cd2fe62a6bee0b7f8b8362"
  },
  {
    "url": "gof/Criacao/TemplateMethod.html",
    "revision": "4afc636048d847b6ff61f8aa4ed4ee3c"
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
    "revision": "eb477114295330fa4a97506e23f300ad"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "a7769b74ab78f7717ca4762673b80168"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "39b55d23e19f0de1ee94c1dd504abbdd"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "faee1c37f5a1c359cc656b101d7bc785"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "908e4356fe82330d3c1e68a3fee1a949"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "a07895a71aff94f289903cf76bc2486d"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "18e33bf84d1c96c8a734ad4cf1f1cf3a"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "51a9d581fbb2895721b2fccdc68e2948"
  },
  {
    "url": "SOLID/index.html",
    "revision": "61019d1f9846d2e48c5ba3618eaa68ee"
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
