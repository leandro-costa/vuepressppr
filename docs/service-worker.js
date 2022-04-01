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
    "revision": "9d9eb145fb2437bee49dea05e9fba68c"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "df707bb6db38fd7f5e7c497e33fc4b23"
  },
  {
    "url": "03_GOF.html",
    "revision": "2393a7a3f966bb54fe36d1a7a9c7f8bd"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "e4ffbd0b164d770750e7a1e0aa7612bd"
  },
  {
    "url": "404.html",
    "revision": "3b3cb602958be2bed495825d62944e8c"
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
    "url": "assets/js/13.2b62df3a.js",
    "revision": "fb950e2415873466dc181016bfc6bfa3"
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
    "url": "assets/js/23.c9c01b65.js",
    "revision": "19e5bb00f750b355ada9c1dae06000db"
  },
  {
    "url": "assets/js/24.ecdeccbb.js",
    "revision": "dfee1918468f6d3c3f6cd5177e77f372"
  },
  {
    "url": "assets/js/25.f9ee66c9.js",
    "revision": "813c589a8b891c27ab84eccf0e74a94b"
  },
  {
    "url": "assets/js/26.899b34a1.js",
    "revision": "5b6856c460186d9f6dea9b5114478519"
  },
  {
    "url": "assets/js/27.13410821.js",
    "revision": "519bda7da6e9706fec116ed436c52f7c"
  },
  {
    "url": "assets/js/28.1096b8e4.js",
    "revision": "671c51cac41e50bd12bb6adfc75ccd6d"
  },
  {
    "url": "assets/js/29.94cce017.js",
    "revision": "909baff1858cbde8ec1879e0b076381f"
  },
  {
    "url": "assets/js/3.5bc5870a.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.80c83d74.js",
    "revision": "d334f3c413abe8ce96b3884b2656e4fb"
  },
  {
    "url": "assets/js/31.c54dfd54.js",
    "revision": "6147268f2e3812b4f45fdead0326eff9"
  },
  {
    "url": "assets/js/32.1779bda7.js",
    "revision": "a819caf134084664e962b4fae93785a4"
  },
  {
    "url": "assets/js/33.82d41f05.js",
    "revision": "5e102e62bac73872a3f7debe8abda798"
  },
  {
    "url": "assets/js/4.d8382e27.js",
    "revision": "2e5b52ad364139cc7e28735d22361889"
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
    "url": "assets/js/9.60f0f320.js",
    "revision": "1a2f58af9be533a2c628322a474cddbb"
  },
  {
    "url": "assets/js/app.1a8cc65c.js",
    "revision": "d653c8088c9baa64be2b65e5dbbbae60"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "04ff963631b2716129e2f6fcf37ba0bc"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "0c9f72da9ff0b61535be452a8f00695f"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "346dc455168f11de07189ef26aa42c77"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "328ccd6a69c33bdce4151a9d51a49db0"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "af40c804c9a3261e666347140fcee23c"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "6c47ee4cdea6e76ce617f16a2657005b"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "dabe9ee0e5b191817e6653bdf41f2d88"
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
    "revision": "ddf2a380c8d01a43e4ab299e086ddf4f"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "ad49643a08a7ebd450f5de095a603666"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "6f059b95d134272fd1903f78589b6e8f"
  },
  {
    "url": "ref.html",
    "revision": "34e10fb2c179c82d6e75154462efa62d"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "0947a2757d1bee96b693af847967a5b6"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "007cfa63f98f6ff46fbbf4a806086031"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "45ccbec21a197577c6c465eccc08134d"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "d1060494df01de9688e49c86f6e98970"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "674bbaa56203632be70e7750a3f7da7d"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "2ad8b63f6b6404c6aaa39143a7ef00a2"
  },
  {
    "url": "SOLID/index.html",
    "revision": "63acc59ab08652523de1b52f3e9110c3"
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
