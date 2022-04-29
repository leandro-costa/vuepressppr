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
    "revision": "b7099e41c96364bacfcd5ee782c81b5b"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "359d4b3b2b641da35d28dc72056e6e4b"
  },
  {
    "url": "03_GOF.html",
    "revision": "a8ff800696ce96c5386a189c99e185f4"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "f2cffea197b2c1146c9872d1c2aec27a"
  },
  {
    "url": "404.html",
    "revision": "a15726c2a868d059c9f9ce7931ea788f"
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
    "url": "assets/js/23.74f1c03e.js",
    "revision": "3ca458ffe8464c50e9960d56c639469d"
  },
  {
    "url": "assets/js/24.45aab871.js",
    "revision": "267c1c01be43fc35328ebe3162d8a8e8"
  },
  {
    "url": "assets/js/25.b79a6340.js",
    "revision": "463dabed37e4d255831884475e1f8db1"
  },
  {
    "url": "assets/js/26.793e594c.js",
    "revision": "47f590d90e26e326233a9d97dd36143e"
  },
  {
    "url": "assets/js/27.d7af70d4.js",
    "revision": "29bbc3815c19fef6344bc9bf6d8cf444"
  },
  {
    "url": "assets/js/28.9bdac829.js",
    "revision": "adf13f84c2d7270b9ee2e35dcf0d9298"
  },
  {
    "url": "assets/js/29.f12628d0.js",
    "revision": "7a86b100d6de8b9cf504ddadcfa57b96"
  },
  {
    "url": "assets/js/3.5bc5870a.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.908e2c50.js",
    "revision": "85c3462ffab42ed8417b615ca8d9bc07"
  },
  {
    "url": "assets/js/31.f4ebc6d7.js",
    "revision": "956595afa75675a2ba5be64d8fd1f400"
  },
  {
    "url": "assets/js/32.1ad291b4.js",
    "revision": "74b14d2ce2692734156ed992a3f06e8b"
  },
  {
    "url": "assets/js/33.a15606af.js",
    "revision": "7996744fa120da81c583167dbcc71a87"
  },
  {
    "url": "assets/js/34.ccff6b5b.js",
    "revision": "b39972d68ca55116850ace10902222fa"
  },
  {
    "url": "assets/js/35.a8474c54.js",
    "revision": "2027b2e602892ef2a41164745105cd65"
  },
  {
    "url": "assets/js/36.8332203f.js",
    "revision": "2e0365e8e7a64d4e4c7f4115fab534b2"
  },
  {
    "url": "assets/js/37.c69b180a.js",
    "revision": "63553184873dd7626dd100860a21cddf"
  },
  {
    "url": "assets/js/38.cc034efa.js",
    "revision": "4ff5568334ac3e4e4c513405db4274ff"
  },
  {
    "url": "assets/js/4.552a1731.js",
    "revision": "53c090019c86c37963f75c803f554ecf"
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
    "url": "assets/js/9.a4cc5b73.js",
    "revision": "270b6e177e36e473070b371ad4298bc7"
  },
  {
    "url": "assets/js/app.c089e0e7.js",
    "revision": "84e3608d538249c46c4cd40bdc0f27cd"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "4d2b8e5296685c6a8453a704472713fc"
  },
  {
    "url": "gof/BridgeFagner/index.html",
    "revision": "89d9bfdc0a6b1384e694353b88c68b5b"
  },
  {
    "url": "gof/Builder/index.html",
    "revision": "619b3f0353c469703b6603eed5b0231d"
  },
  {
    "url": "gof/BuilderFagner/index.html",
    "revision": "4a8786514943ad43571855d53ce3c669"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "bb1c632606acd7abcd7aac2e19159af1"
  },
  {
    "url": "gof/Estrutural.html",
    "revision": "4685da7b9831a6c7f7acdc3f9114d450"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "eb0606be8712fc1634f0697925a5188b"
  },
  {
    "url": "gof/Prototype_Wanderson/index.html",
    "revision": "7467a01c0678721c4a4650bcc0ac8957"
  },
  {
    "url": "gof/PrototypeRichard/Prototype.html",
    "revision": "a86b818e43c7c2c945919ad852d34940"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "47642ac4f3560735362343ab200de3cb"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "03042f2958ea5a8ce6c6bad234bf73cd"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "866acd22ea2c88c33cf8c5d7ed60e765"
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
    "revision": "e64800a87804eff168b0f1b336b640cd"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "5669a89e30e7ad8bc0e1a85f3e419002"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "0390b6e0fabd6a2d6bc5a085cbfcac7b"
  },
  {
    "url": "ref.html",
    "revision": "b0016c32dde0be541f170742427d8327"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "d8a709edc15c001dd9722dc63f904d28"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "607003408d629fa4aa3a818ab2406127"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "c6ac42a22064543ef442e227be98731f"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "51e42220028bca5012a4dded5cdc3bb7"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "3ea968dfe443846b9991723262254c76"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "e26b873c55466c065204b9f68342dca6"
  },
  {
    "url": "SOLID/index.html",
    "revision": "f82e6d4459fc27d409eba783761602e9"
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
