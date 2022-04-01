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
    "revision": "b2e417463ab7f0bb9fad824eb1a51fbb"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "9b6af72838e110b8966a5183f2c18acb"
  },
  {
    "url": "03_GOF.html",
    "revision": "38a51f456b8860a783569a2704d99e84"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "6c50977b5573927184f064896b1286ab"
  },
  {
    "url": "404.html",
    "revision": "1dafe08d43caa46f99da405a32938730"
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
    "url": "assets/js/10.0cebac10.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.91d01f7f.js",
    "revision": "2106d8258dc6907bfd4780172022a38a"
  },
  {
    "url": "assets/js/12.2e0ffb47.js",
    "revision": "33bd380ae9390918d83db13b11f12c4e"
  },
  {
    "url": "assets/js/13.685e43fc.js",
    "revision": "ede0320e3a57b329f76540002fd0815e"
  },
  {
    "url": "assets/js/14.6924dc1c.js",
    "revision": "1de6f936021fd71dc0cbdfd89d6eb417"
  },
  {
    "url": "assets/js/15.5bbe9acc.js",
    "revision": "c9298ecb596962c19f3f04613d30f274"
  },
  {
    "url": "assets/js/16.9ec997f4.js",
    "revision": "3ae539a61268393c4aa6f53e959c9338"
  },
  {
    "url": "assets/js/17.6d06fbac.js",
    "revision": "0c158840b8dab2de67499fd4fe794a9a"
  },
  {
    "url": "assets/js/18.56150d27.js",
    "revision": "7738bde82c5763361aaf968042ca1e1d"
  },
  {
    "url": "assets/js/19.f57d1598.js",
    "revision": "50125e6a823b043622921f4fa743818e"
  },
  {
    "url": "assets/js/2.17e3e06e.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.22f74c8c.js",
    "revision": "5b547a94f366bd303d3eaad72704e63e"
  },
  {
    "url": "assets/js/21.ee586b46.js",
    "revision": "61ecaa27acc98d2bca297f07ef35024c"
  },
  {
    "url": "assets/js/22.6d93dc03.js",
    "revision": "d453cc411ecb58c6fa5a79c8e0a8fa43"
  },
  {
    "url": "assets/js/23.085f0ae1.js",
    "revision": "e2f8298e726d76ba9723a6e6606e04ca"
  },
  {
    "url": "assets/js/24.5803a2c8.js",
    "revision": "3c0d5c035457bc36c523747d6b0dcf46"
  },
  {
    "url": "assets/js/25.4bb0cd30.js",
    "revision": "b1408793cd4c58876117ad457344fe70"
  },
  {
    "url": "assets/js/26.fcefcb94.js",
    "revision": "5b6856c460186d9f6dea9b5114478519"
  },
  {
    "url": "assets/js/27.b936844c.js",
    "revision": "519bda7da6e9706fec116ed436c52f7c"
  },
  {
    "url": "assets/js/28.463e483a.js",
    "revision": "671c51cac41e50bd12bb6adfc75ccd6d"
  },
  {
    "url": "assets/js/29.1f6fd196.js",
    "revision": "909baff1858cbde8ec1879e0b076381f"
  },
  {
    "url": "assets/js/3.73385d4e.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.3922d4bc.js",
    "revision": "d334f3c413abe8ce96b3884b2656e4fb"
  },
  {
    "url": "assets/js/31.750feda0.js",
    "revision": "6147268f2e3812b4f45fdead0326eff9"
  },
  {
    "url": "assets/js/32.e962512e.js",
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
    "url": "assets/js/5.ec6a0565.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.2927981a.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.4a8553bf.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.561f518e.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.5b1e23e2.js",
    "revision": "1a2f58af9be533a2c628322a474cddbb"
  },
  {
    "url": "assets/js/app.46e4bdb7.js",
    "revision": "aadf63de891341c42625691bef47ac1c"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "af83ae792ca499ba6a9d9f9311d5f775"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "7852312ad74c9e9c6fbca4201503f9d8"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "ea43aad4b0e3bc968752019df8697846"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "ec20297b03efc317af469261217e6782"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "39272cfb0b93eb638ee905d7c8b3b87b"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "f77797779216630179cfa89d302d18fb"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "dd7baba812a69634cc9e0de140d8d734"
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
    "revision": "e060f5f3ea312884698c3c00ff05a721"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "11ac50f4f80f81ade06aa55f996bce75"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "1b1d0a2e3daf4f8faf119ae76d5a5296"
  },
  {
    "url": "ref.html",
    "revision": "893a3b618643a14d180869725aebda56"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "45ca9cef57c9bf94afb2eeda370d362a"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "d4e6abb0578e476a58cab6b1e5a96f82"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "2d8cf347b85f2f26682a186ea5ad8e91"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "9b1f1b681649d7016c405c20e50d77b8"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "681907a49827d2829aff3f7284237f5f"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "c74a92e02c2531660160601b1f6e4fa2"
  },
  {
    "url": "SOLID/index.html",
    "revision": "68e676cf5e7609f9c8722c3b0808d7df"
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
