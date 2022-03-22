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
    "revision": "311f51bbfcad43cd0302607edbc39d30"
  },
  {
    "url": "03_GOF.html",
    "revision": "ef8a5d6086f62916660c24fd8e1d2a88"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "84949e6b855e642a0722b24b52a5a971"
  },
  {
    "url": "404.html",
    "revision": "8fbfec7ae80deff3ffdb89c136fbcdae"
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
    "url": "assets/js/12.c88329e4.js",
    "revision": "a17c6253593f73a64705922258f24efc"
  },
  {
    "url": "assets/js/13.b2bf4ab6.js",
    "revision": "0f4f6b75cc492c6bbd8228c63dde81c8"
  },
  {
    "url": "assets/js/14.c6fc985c.js",
    "revision": "210f7480b16c139e94c5d7a0991dfd26"
  },
  {
    "url": "assets/js/15.2c3d46a2.js",
    "revision": "de5ea3b8922bca698840a2be0a10e08a"
  },
  {
    "url": "assets/js/16.91c182e4.js",
    "revision": "eed24f6d19f2e675e6839fe6a55436ee"
  },
  {
    "url": "assets/js/17.804da0b0.js",
    "revision": "f92f013c660b6d685ba2db625f1d06b2"
  },
  {
    "url": "assets/js/18.748233f4.js",
    "revision": "6c90bd699429ceb1a410abc885eb8438"
  },
  {
    "url": "assets/js/19.58279f41.js",
    "revision": "7caa361b226e8b209eb280baae31146c"
  },
  {
    "url": "assets/js/2.63c38da0.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.9a27a3f3.js",
    "revision": "86b15ffdd8a5710cda37b6de20c5a263"
  },
  {
    "url": "assets/js/21.1ea42746.js",
    "revision": "62908741e8fd32cd839a897b7d931e8d"
  },
  {
    "url": "assets/js/22.590de762.js",
    "revision": "9c47a7dfcb5cb21a4f537823f76d0611"
  },
  {
    "url": "assets/js/23.1aac4d31.js",
    "revision": "eb29c8821fdff800183cdef5f51d9eab"
  },
  {
    "url": "assets/js/24.127dd2bd.js",
    "revision": "e79114ba9dda3c3881a437e0a277a99c"
  },
  {
    "url": "assets/js/25.29d15064.js",
    "revision": "d97ecd207f8ba7e508ba1e1fab6098ec"
  },
  {
    "url": "assets/js/26.a8072170.js",
    "revision": "ae2dbfe5532b56f3ff5f346286564115"
  },
  {
    "url": "assets/js/27.04fd3c24.js",
    "revision": "16458dd30d3f6da74598706fd39845c0"
  },
  {
    "url": "assets/js/28.fa87c2b8.js",
    "revision": "91be31b9abc8e3d8af234bb6b90e644a"
  },
  {
    "url": "assets/js/29.c3ae10b4.js",
    "revision": "695f0f68914d1a5e428a3a4ed1b83a62"
  },
  {
    "url": "assets/js/3.5bc5870a.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/4.97fbe56c.js",
    "revision": "4900343ebd96b8021aee66878b9b140b"
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
    "url": "assets/js/9.4e94b1fd.js",
    "revision": "9fd0c73a2d43b14639da7ea5eb85f402"
  },
  {
    "url": "assets/js/app.aafdb44e.js",
    "revision": "3cba4d88b98f124c9c099b0508faa241"
  },
  {
    "url": "gof/Criacao/AbstractFactory/index.html",
    "revision": "a1da3230150ab853284064337e795091"
  },
  {
    "url": "gof/Criacao/FactoryMethod/index.html",
    "revision": "24df8b27c1b5d5fc950cc72d3b5c82d1"
  },
  {
    "url": "gof/Criacao/index.html",
    "revision": "34b2f28bc064a930857a0789353e23fa"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "a1e1ea3c9bda6baa9bd77b7b903df027"
  },
  {
    "url": "gof/Criacao/Strategy.html",
    "revision": "0d667db49cc84c058b58cc44195c2926"
  },
  {
    "url": "gof/Criacao/TemplateMethod.html",
    "revision": "5f89cb2922fc1feea1a96d602d185043"
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
    "revision": "d452f0d6dae023b9baec50f8add559a7"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "799fa9bbb35f3f08b203beb478d037e2"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "848076a92be6d987e3883917d836727e"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "76005fddeef2b3fedc0e0a1230d9310f"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "3c06d39da05b40031af5c3d496336b49"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "22f058dc77d8162678ab0e3059aaa607"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "97fd0840e43d7d989372aa8ec36ebbbb"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "9e005cfbe2edbecd4e0adb35f0f5ff97"
  },
  {
    "url": "SOLID/index.html",
    "revision": "9d70fb71bfdff2d143cc18323a7cd29c"
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
