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
    "revision": "06bd4680109117bd31ae2786e5b8bcb9"
  },
  {
    "url": "02_SOLID.html",
    "revision": "8e45489fe74c43ab5561f3adcf010c52"
  },
  {
    "url": "03_GOF.html",
    "revision": "03b26a998992a319681d2393f613e73a"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "2e5f9d40f8652e3c4b21e1989d9589dc"
  },
  {
    "url": "404.html",
    "revision": "853d5c03a1252544cd50dbaf6f0e5ffe"
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
    "url": "assets/js/11.a34fa059.js",
    "revision": "6db55ba4cf46a99d1644ffc7af5ab256"
  },
  {
    "url": "assets/js/12.4be18eab.js",
    "revision": "80e73fe10a9b90c7839fd76783a0fd66"
  },
  {
    "url": "assets/js/13.50a69951.js",
    "revision": "3516505036aa8a367157dbdd8d5cc2e3"
  },
  {
    "url": "assets/js/14.77172f79.js",
    "revision": "1e0269adc7a0fe9e530a402df0e67047"
  },
  {
    "url": "assets/js/15.d9f7bce3.js",
    "revision": "81f0f2d17aa9b7f158a18e0cb8a3c94e"
  },
  {
    "url": "assets/js/16.62b40c52.js",
    "revision": "f92e307bb44293c5174e6fe12c83d187"
  },
  {
    "url": "assets/js/17.23744b32.js",
    "revision": "2d6d7d4982eacd162c6494f968d62173"
  },
  {
    "url": "assets/js/18.58e0d5b7.js",
    "revision": "9ee125dae039bbb8130801b204ebbba3"
  },
  {
    "url": "assets/js/19.b77f9077.js",
    "revision": "12f9ebc7cecf3f86602a3cb834143ea4"
  },
  {
    "url": "assets/js/2.c734147e.js",
    "revision": "4669f56f32995eb1657cb3aaab5ad7f7"
  },
  {
    "url": "assets/js/20.3ea45df6.js",
    "revision": "6169ff6b91e41aceca39403ea178f1de"
  },
  {
    "url": "assets/js/21.27cb1590.js",
    "revision": "31aba389a10d5f09447ac71ab58590e0"
  },
  {
    "url": "assets/js/22.8c6a7104.js",
    "revision": "0d915f3affea5f4b588a3dc3fdc57565"
  },
  {
    "url": "assets/js/23.31801bca.js",
    "revision": "009509f89b41d2e640ebcf08ed8c5334"
  },
  {
    "url": "assets/js/3.8fef2960.js",
    "revision": "a2c6e0a36d374a4953c6e6f72115e839"
  },
  {
    "url": "assets/js/4.78ef4b59.js",
    "revision": "8d245576b903c23f0e84c491d4cb0a94"
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
    "url": "assets/js/9.d53cccfb.js",
    "revision": "95fc4496e9ba0c78d7fa1ee3a69a75e6"
  },
  {
    "url": "assets/js/app.ce4f41d5.js",
    "revision": "692bc7665da01a3a4190dc37aeb70aac"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "f4f15020b72be566e43b2041b5006623"
  },
  {
    "url": "gof/DiscusssoPadroesCriacao.html",
    "revision": "2b6b726e71df1f07124451d4087e073b"
  },
  {
    "url": "gof/FactoryMethod.html",
    "revision": "5c69a68a67ebaf58d43d0c70cc6b72a6"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "80b211a0c7c1f09dd6173ab6c91a1241"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "82008cfafdae3742994382fa2e44e793"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "8ac7e7bfe57ce828401713f3f3b11066"
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
    "revision": "80fe51af3aba00db15ab4a5ac6f1d41a"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "98ae72cf4b2684cb6b3337c9cfecf587"
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
