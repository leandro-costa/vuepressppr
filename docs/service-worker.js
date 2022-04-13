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
    "revision": "26863e5a1561603581f48ae49b33c3de"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "032a5b5ef6b9f12a3f848ef4d69296d1"
  },
  {
    "url": "03_GOF.html",
    "revision": "89cf56ac19697f9fed002ea04307c8e6"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "8ebfafd2ac624eeef9ee79aa3f64e547"
  },
  {
    "url": "404.html",
    "revision": "ba429bbdd4c0dabbac0317488d04d159"
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
    "url": "assets/js/app.a3cf7b6f.js",
    "revision": "f7b987c81b362c6bf2f0910003f2b2da"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "e6d79a630843fb536294e3d20cb64976"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "3026c085c2e5bab5369c74b73e4d845a"
  },
  {
    "url": "gof/Estrutural.html",
    "revision": "4f2ad4e465f04038dcc3cb135aadd6eb"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "1fc7b2e6b1769097842d5d481f60472f"
  },
  {
    "url": "gof/Prototype_Wanderson/index.html",
    "revision": "b72bbb6e9e30b81fe4cc6c7a3d6469eb"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "1bee1b6ff9ede7478a7feab0e9a825a2"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "afd49125985c3b5571afc920ea6f69b5"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "85fa09a7048cefb34046060f60f1c145"
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
    "revision": "818865e05e4356a02e6db7dfeeaab37e"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "8d56d839df34a7d2bf9b99a08cbce026"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "084079a7e53d8602d22c81f1cd2a929a"
  },
  {
    "url": "ref.html",
    "revision": "3a30e6435cb8d3dcf93a159ec42492c5"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "0a52c42e9ec4b492a3a75c6267bcd5c7"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "bb00a05aeb0e80ddb22c3814a8285490"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "83ea7691472a10f8f064d5a6f5c00697"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "d82689c06329313d643ed600443ed846"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "394e866c6c2683aad781a46c28c4b5cf"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "83e3d20e1812170394f873419fe4fefe"
  },
  {
    "url": "SOLID/index.html",
    "revision": "92485fe88bf1e64f61e539319ccc61b4"
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
