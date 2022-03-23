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
    "revision": "353b7346766e91de13799794bae06b6b"
  },
  {
    "url": "03_GOF.html",
    "revision": "5164862226ccf6b2c563e9514ef088b8"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "df6de32cf89bcdb6274a0fdebd83110f"
  },
  {
    "url": "404.html",
    "revision": "d5b0b920e9887ab8c714375410454530"
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
    "url": "assets/js/12.3633f32f.js",
    "revision": "fd2a0e6deca060feca38b3c49dad750d"
  },
  {
    "url": "assets/js/13.31e4f6cd.js",
    "revision": "d06de999097e24539efa4f0d9b9f44fd"
  },
  {
    "url": "assets/js/14.9c37828a.js",
    "revision": "d82f2d657afa5f9a2de8ee6f42fcb883"
  },
  {
    "url": "assets/js/15.a728bf44.js",
    "revision": "8a5e4eb64f0fd423b5a63c7237ea61f8"
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
    "url": "assets/js/19.4abd142b.js",
    "revision": "486b6da16af25aa3ba63f95dff01bb90"
  },
  {
    "url": "assets/js/2.63c38da0.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.c4e9abb8.js",
    "revision": "4e3225dc00a4762a09709712baf06dca"
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
    "url": "assets/js/app.5f32d716.js",
    "revision": "deb00c1e8df44eca1124f4edf34b41f3"
  },
  {
    "url": "gof/Criacao/AbstractFactory/index.html",
    "revision": "da64b7b6851ab4f0de7de1c820dd32f9"
  },
  {
    "url": "gof/Criacao/FactoryMethod/index.html",
    "revision": "fcdbf2df775a91023c29a05b27641ae3"
  },
  {
    "url": "gof/Criacao/index.html",
    "revision": "409af8a20faa783e41285b71d77ccb0b"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "bcf31216d25ad662be4a2c4f0ed5d456"
  },
  {
    "url": "gof/Criacao/Strategy.html",
    "revision": "3c2f66a4e143151af92d2c802099b1f0"
  },
  {
    "url": "gof/Criacao/TemplateMethod.html",
    "revision": "8cb55622b05de13b31d34645d32f713e"
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
    "revision": "a492bec1946306e93442ae70e1883cb3"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "ed0abcbc7df9ebc52caca46d65aa1858"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "2b24e2b72d43fb0d6206490a8813e237"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "8798dd10245253a83788eb4a5552eaf5"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "c4e64663ba7e54c1daa5a9a281a6f5f1"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "e72602f0eda4c08c0f79fd37a2c21070"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "3903d5795a152543dc919650e8fbfbcc"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "dd3c81a01304f6c9488d32c7470bc359"
  },
  {
    "url": "SOLID/index.html",
    "revision": "d952e4fb3808c95038bcf67ac33890fb"
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
