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
    "revision": "abcf701f3bfefe657c33c2420ec595b7"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "3416eafa0491470cddce38ca0bb7808d"
  },
  {
    "url": "03_GOF.html",
    "revision": "2bde43bd35a7382bc1e7b7d8a727461a"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "b569da1a01030bec8146340ff193aa9b"
  },
  {
    "url": "404.html",
    "revision": "243c3f7e6aa30cebfa6ad70e25c97140"
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
    "url": "assets/js/23.a54206d7.js",
    "revision": "3adee4de061640e98eaee6bda00c06fc"
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
    "url": "assets/js/26.8fe55c2f.js",
    "revision": "de5e72727a34dff0d0ced4b964aaedb9"
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
    "url": "assets/js/app.09c8aa59.js",
    "revision": "393289799cf5ad8973085bf83e16fff9"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "44c0b1e7c4e98ac4f6bf9cc290256423"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "42d8966c8f6b15db6dc916b3e17879f0"
  },
  {
    "url": "gof/Estrutural.html",
    "revision": "78bedcd8a7caee5c47950db3c02a0727"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "f048895f34af97dcb1fe024320d46a09"
  },
  {
    "url": "gof/Prototype_Wanderson/index.html",
    "revision": "bcd6007d6c369a062015f711896e79a3"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "8f21f85d878f18f53af69ca8ca6f54fd"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "0ad24d2ca8e3b1e90c04785a64cdef71"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "c9a93298c5bbc9bbc8e85e5e5a23239e"
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
    "revision": "37de9c8393075ff856b4bbfb81fc3c49"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "110e3d5394a92b26b3ad8058ec73815e"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "6b64e1294250657b0be4d0c0a4f09a9e"
  },
  {
    "url": "ref.html",
    "revision": "0ad834aaab429e2d0f94f3e2d8d62ae0"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "edb153b1bba9ea5e0d7b6eb7edd34822"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "df7f29a569a9841eff019ca57da5900e"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "8cc3d657f81c40e2448a262ced76a655"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "6f57bdc4b825c261b9a17787fbed97a2"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "62d520e45f422864feca8c89b26a93bd"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "1cd9bf0fb941d27378d7056bbed2461c"
  },
  {
    "url": "SOLID/index.html",
    "revision": "c18a177303abe246c50d371a1d92092b"
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
