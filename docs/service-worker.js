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
    "revision": "14e6ed903a0c0bcab5e758b54b109434"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "ae7dd2b2c15e7f23a54dabacdff84b04"
  },
  {
    "url": "03_GOF.html",
    "revision": "b2fad74738201ac86306ab580be5cd0d"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "d4fe9c80cf2cd53369c75e4f533290e2"
  },
  {
    "url": "404.html",
    "revision": "f5757cd00088adb4f04990fd9ba1b9d4"
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
    "url": "assets/js/app.1773010b.js",
    "revision": "44bc2ec56c1c3d525b9cab776e7f8a82"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "5dd84ecde9d5866e4184a131bf15c931"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "9e696a56ce33ae10fc626a4a8ba41e55"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "c85562c977a32fbba6652c4f4b53c9e6"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "ccf6ceedbcbb0ef86175d987ae8134aa"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "411726539a9d11dc5d7f362e5e97bf87"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "7fe543a1f7f4ce9e445b5b0e8720649c"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "13988359b27abaa634f6fcf7fa19c1e0"
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
    "revision": "88de4e7272f6eb06d272342aec0185f4"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "f1bf9d436de2c2c70fe8286a348e9792"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "9b27e1b9dec185b75c4c998fb135cfff"
  },
  {
    "url": "ref.html",
    "revision": "30e6feda62a9df213f6f1798f45bc887"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "d8eecae18320161a2b405ba35f8574f2"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "09005a955d176c4f22639c0907bf1d6e"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "c8b09ed3ba29ccd535a7c513fcd33106"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "56a45c0c22d0711c891bda67d2a566ec"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "cc3009faee79a64ff4a660436793e31c"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "1ac98f988db3f3d569171b7b8387f9b9"
  },
  {
    "url": "SOLID/index.html",
    "revision": "e05a409cdcf1a3e79b28033c3d6e50d2"
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
