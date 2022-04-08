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
    "revision": "adfeee23102423f5d2cc11a385e5083a"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "9a8deace81a96345e32c635f450b0942"
  },
  {
    "url": "03_GOF.html",
    "revision": "71811ad29e79b5cc97881b1a79581529"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "091fcfa545f1125c27233a415374d8ef"
  },
  {
    "url": "404.html",
    "revision": "8f0e7c8621d63cbf4209c47ffecbe7ce"
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
    "url": "assets/js/13.dfdfb877.js",
    "revision": "58c6f26b27512948e97946e7e593f5eb"
  },
  {
    "url": "assets/js/14.67dca124.js",
    "revision": "1de6f936021fd71dc0cbdfd89d6eb417"
  },
  {
    "url": "assets/js/15.6714cd73.js",
    "revision": "c9298ecb596962c19f3f04613d30f274"
  },
  {
    "url": "assets/js/16.c26d7a86.js",
    "revision": "e3f42c5b902598170afea7aea7642d6a"
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
    "url": "assets/js/29.de3bae29.js",
    "revision": "11727fc58a1857362f0d10697119558e"
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
    "url": "assets/js/app.e20ee580.js",
    "revision": "414a5facf2b5321317fbaefee8fd2016"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "0a0ed7bc03f2b16efe2eca7c1aa60d93"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "3cf8bea5c1cb8ab5cf6e8ac6745d0278"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "22d5cd7697089f8d82c9ce1154b7f548"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "d71299582d85402b566b92a4b1b0797a"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "89619e0e17cb7c6b009967260ef29c8d"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "4b842deeb24531dd61c95d83215dfcc5"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "b65edb33c2047adf979526c797fdfffb"
  },
  {
    "url": "gof/TemplatePadrao/index.html",
    "revision": "8fec84cc25e7c53b1d833a22f1ca646b"
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
    "revision": "13f586434e3c86b81d7d78bb2dcbf250"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "3e3ffed80ff0f257884c5ff42232c54b"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "e0e9e57a3e0e539b3d58fff058a241e4"
  },
  {
    "url": "ref.html",
    "revision": "f62b5dba010d2736232a0038a586c6cd"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "72599ea6110a23bd917cc18110a89536"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "544fbca20a5f2dcc459ce58f2e24b2b3"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "bb9aa5cc3283f6490e3eb518e0da00ec"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "11b0956bff71f7ab9145b6939b4a45de"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "7231b13ade4f63a5460f20d0d252f6fb"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "d57cf09bf3131a0e1da8134fec6d7891"
  },
  {
    "url": "SOLID/index.html",
    "revision": "86d09fa3639a5428ec966dba9601e61d"
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
