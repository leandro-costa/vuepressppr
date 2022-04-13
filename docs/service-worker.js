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
    "revision": "25e417a977f26b05afe50849ef87ae2c"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "e1bef02fa86c56230558cfe5aa0b958a"
  },
  {
    "url": "03_GOF.html",
    "revision": "fbb2537eee7f06dbe3a349cc22d4d4ac"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "980d3bee682243e8d63433d12b021750"
  },
  {
    "url": "404.html",
    "revision": "8d8e46c0d42ac4474968f7c6ea5b8bce"
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
    "url": "assets/js/23.8f0194bb.js",
    "revision": "7a1e692c1100c6c2d27a34b95e5c38f4"
  },
  {
    "url": "assets/js/24.ecdeccbb.js",
    "revision": "dfee1918468f6d3c3f6cd5177e77f372"
  },
  {
    "url": "assets/js/25.a2af72c5.js",
    "revision": "657be14266fbe12b284019e0cef2b10b"
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
    "url": "assets/js/app.8ac43990.js",
    "revision": "ea3fd36f0832228e82fe3ad0a95f4188"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "d8fa998ba7ffedf1a013867254cf81e0"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "a5f4727aaae8982e38f56340fa27e6e8"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "4c81f3d32fa5d18348812e575e90f9c0"
  },
  {
    "url": "gof/Estrutural.html",
    "revision": "07897f36bd4ab34e8aa4757c0d99fe73"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "11de2524ac7c87b9c84ba53f984f2775"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "53ac8fb826826d98cc29e56ce67e37d9"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "b34cbc702229966d330edd5ced2cf69c"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "488cd0bad96bf8b66e0438162883375f"
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
    "revision": "a8b268072cfe1031c2147b73215c6c00"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "fdbed98e0ef7ac307fbf4a77d47bb74e"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "d9ed23d0d87e5670a2584be9a81454b8"
  },
  {
    "url": "ref.html",
    "revision": "5f2612aef9f73ea087e1aad39323d846"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "dbf5b3924796a78c52997e8ff75e9899"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "dc2c25d4d58f874eae08a4dc8e02946a"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "ae32992f601eac4358492d6d32d7b1ae"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "7cd4322b9d8f0cb27360452798a3b20f"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "9f2b589bacfa96b67dde7d1303703d8e"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "74f58f1980240b3db95bc81b57e62216"
  },
  {
    "url": "SOLID/index.html",
    "revision": "3c33c7602af0846a937c08e377cdb509"
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
