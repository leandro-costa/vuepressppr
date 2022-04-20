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
    "revision": "1d655379a5e420264a26cd38fbf13e97"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "f70e29706fc376d9872ef3bae4fe8ebb"
  },
  {
    "url": "03_GOF.html",
    "revision": "1ac94aa06d554890707a16a324b50bce"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "563d3c3d5a013ee0f8f0d04efa6c6844"
  },
  {
    "url": "404.html",
    "revision": "cfb23275658e644903d6551358f21a78"
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
    "url": "assets/js/13.97058f82.js",
    "revision": "0c2519b55a35433a5e225afaca902bf2"
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
    "url": "assets/js/23.b5a77527.js",
    "revision": "4399313ee325beca975ea9eba125558e"
  },
  {
    "url": "assets/js/24.4be54c70.js",
    "revision": "c1cb1579b6fb28ad519d391e6dfe326e"
  },
  {
    "url": "assets/js/25.f9ee66c9.js",
    "revision": "813c589a8b891c27ab84eccf0e74a94b"
  },
  {
    "url": "assets/js/26.bc89d51e.js",
    "revision": "cbf47fc8aea4b77ed69de216ce69f849"
  },
  {
    "url": "assets/js/27.a99cdeff.js",
    "revision": "7e24d56b7585a58d5d87612869e505aa"
  },
  {
    "url": "assets/js/28.129ad7dd.js",
    "revision": "60224f29d24facf1cbac1da41379ec78"
  },
  {
    "url": "assets/js/29.0c29a930.js",
    "revision": "920f89c20253f553acac212ece0033af"
  },
  {
    "url": "assets/js/3.5bc5870a.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.8d7a6ff3.js",
    "revision": "222d3cb5589671e7321d4ad002f620a0"
  },
  {
    "url": "assets/js/31.b0503c3a.js",
    "revision": "fa444ec9da3353587648f201c028b6a2"
  },
  {
    "url": "assets/js/32.f69ecabf.js",
    "revision": "ad90d3f47feb168e733f0371a3410ef1"
  },
  {
    "url": "assets/js/33.c3577a4b.js",
    "revision": "bace60213c54e8bcab6bf9dc92dbb44b"
  },
  {
    "url": "assets/js/34.2f256cec.js",
    "revision": "10fe4260818258db615a7806138d2a25"
  },
  {
    "url": "assets/js/35.6eb48dac.js",
    "revision": "b82f86d71353095a14036157c77458b6"
  },
  {
    "url": "assets/js/4.c6574830.js",
    "revision": "9701cec663c33466d22768f174875d34"
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
    "url": "assets/js/9.d3526d0f.js",
    "revision": "02a6174a0894224f31005eac16164c95"
  },
  {
    "url": "assets/js/app.432d2354.js",
    "revision": "0d298b11e3f8b6e10712d4806aedc8e7"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "b3b78541b11a1230805d09880901b9c3"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "9fcc4c46511b1f8473433a3c6d0e6706"
  },
  {
    "url": "gof/Estrutural.html",
    "revision": "62f4d9bbe32bab25f4ef4efbd0a5d3f3"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "5e6c7c6b22a0cead051fdd4d62c29e74"
  },
  {
    "url": "gof/Prototype_Wanderson/index.html",
    "revision": "13c42bdc08fb160f397efe615b866eac"
  },
  {
    "url": "gof/PrototypeRichard/Prototype.html",
    "revision": "e97f74a83ea8663e153073117179e848"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "322c6c172129796960485676fb2cdd8c"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "0dba3c613f8a4d2e893636ec90a75654"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "0b060f59fb92318dc382746281104b4c"
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
    "revision": "bfbc4375b53fd089d35737a8315b3725"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "eb1dd4d350d94b4f2fe46b4e6a8b7eaf"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "c949abef54a1a6220aacffe881208442"
  },
  {
    "url": "ref.html",
    "revision": "989c7d277fb4fa4648b561afc474076e"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "7f53260d56b0b39235bef34029cb226a"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "0b1a7d6f9c0729ffcc75a67a1e057b70"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "07de1a46d242b5029de5519861295302"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "104e184667ecf50e9c34111679e9f484"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "fd4454785bb1fa00ed418598e081fc65"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "8576272a0595b1d864e8ab85c6b264d0"
  },
  {
    "url": "SOLID/index.html",
    "revision": "a112177d6427300eae11a48b6bc30f24"
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
