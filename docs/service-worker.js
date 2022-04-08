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
    "revision": "bb9204e589059bf4c4a8e8e99f72542d"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "c24517e991fd82461a464b7b3ccff432"
  },
  {
    "url": "03_GOF.html",
    "revision": "5079dfc627ebc6730ec47c57d62bdf48"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "c1b536db2d7e309e4e0621d1030fe2a4"
  },
  {
    "url": "404.html",
    "revision": "c204afb394c76e5b1b0f542ef23f2a80"
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
    "url": "assets/js/11.fd30b52b.js",
    "revision": "ec05b7da91cd715055e6b6ff7ba89ca4"
  },
  {
    "url": "assets/js/12.fb774cab.js",
    "revision": "ead44ea77b96935e8a014ec7835cd135"
  },
  {
    "url": "assets/js/13.41ab6839.js",
    "revision": "9f750bd19eec81992f706ee2a871ceed"
  },
  {
    "url": "assets/js/14.77172f79.js",
    "revision": "1e0269adc7a0fe9e530a402df0e67047"
  },
  {
    "url": "assets/js/15.c64e7f5a.js",
    "revision": "da3a4ab7f1a596a112c7d626414e1910"
  },
  {
    "url": "assets/js/16.3be1f0e5.js",
    "revision": "3ae539a61268393c4aa6f53e959c9338"
  },
  {
    "url": "assets/js/17.f3abe831.js",
    "revision": "0c158840b8dab2de67499fd4fe794a9a"
  },
  {
    "url": "assets/js/18.aa42b649.js",
    "revision": "7738bde82c5763361aaf968042ca1e1d"
  },
  {
    "url": "assets/js/19.c99e69be.js",
    "revision": "50125e6a823b043622921f4fa743818e"
  },
  {
    "url": "assets/js/2.63c38da0.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.d06df924.js",
    "revision": "b73adf16a6651ec25318cf46fd3b2dd0"
  },
  {
    "url": "assets/js/21.84ee0397.js",
    "revision": "daf098bc23e3840b7d1a8b09ee8fdec0"
  },
  {
    "url": "assets/js/22.516a37df.js",
    "revision": "05d864f0196cf32668165184ba80a1b8"
  },
  {
    "url": "assets/js/23.21ea7618.js",
    "revision": "0b41835657664f40e155de5589976f6a"
  },
  {
    "url": "assets/js/24.59c7d8b7.js",
    "revision": "5eac5a75f756e1a463b01703f2e6fa76"
  },
  {
    "url": "assets/js/25.f68a9a8e.js",
    "revision": "2047fd892088ee0cca20aacc1a9cfe61"
  },
  {
    "url": "assets/js/26.2fc3b743.js",
    "revision": "2120ea1b38e2b9a1581e27d0b6880045"
  },
  {
    "url": "assets/js/27.bc751e2b.js",
    "revision": "a9535179baf9148cc263a3a9f179d898"
  },
  {
    "url": "assets/js/28.c7f5e694.js",
    "revision": "e90ca297f416642bc59d75e125fa3377"
  },
  {
    "url": "assets/js/29.58bf1a2b.js",
    "revision": "dc1b3d9a30d875104429e07f1f5c2304"
  },
  {
    "url": "assets/js/3.5bc5870a.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.b0b7273e.js",
    "revision": "a02e33f650e31214758d077ed1342ed7"
  },
  {
    "url": "assets/js/31.3d7f955d.js",
    "revision": "8417d2dd6d5ba2b5b192a9cc1f07e754"
  },
  {
    "url": "assets/js/32.65d1262f.js",
    "revision": "a012618a6f536d192f8473c94a0ba3bf"
  },
  {
    "url": "assets/js/33.57f6c489.js",
    "revision": "383760678edad093bde6def0d8fd33fc"
  },
  {
    "url": "assets/js/34.62ba6309.js",
    "revision": "1b4272c71133cf54d6794eec1f2a281f"
  },
  {
    "url": "assets/js/4.5f801113.js",
    "revision": "ef6d9e11d45f17eab14538ab473a9053"
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
    "url": "assets/js/9.11f50ff4.js",
    "revision": "5e53fd12c9dfb756e2e4f60b3453c5be"
  },
  {
    "url": "assets/js/app.ef71fb70.js",
    "revision": "af0f29012419e991fc798a96700ed9f6"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "378a22f8d78c2cf04618489bbad6be65"
  },
  {
    "url": "gof/Builder/index.html",
    "revision": "8313ec1671b5bc0115de7df28ff09c4d"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "5d67454980396035e305b2c80886c304"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "c41dcb695fbadfa64dfdae13a62af4b6"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "3f0f535b338d6c92ac3b7efeaff5aba2"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "6799c5037c8d2e8d440ed46238fd10a2"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "89c9a37c54de544ae13bc590b3088abc"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "7f71d89c5ea29b92c1ac2728484ca6af"
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
    "revision": "964174dbdea5417e6f21a9453c7788d8"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "420767c6977758d503c7e9d49f019f92"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "d97eda7cf1457c1500f768b740bdfce0"
  },
  {
    "url": "ref.html",
    "revision": "d449369c259b08c678102e74f1bc2b6c"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "bd5f347ef8de870dd0f5d58fbbed7b1f"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "6ecc5dba7cb63286c67434b610f38e43"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "c07a2d9ac1e481f303c613636f11cce5"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "34cad1c3736bb04830e01cfa7c08d8e0"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "c7ac786af0b80344084a749c6f0bf714"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "dd913f7b73a5a9590d0d63cba4eb109b"
  },
  {
    "url": "SOLID/index.html",
    "revision": "91bfe7b131bc551b5f92a13e8de9769f"
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
