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
    "revision": "da6343bad71d0161392b80144e3b81a5"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "d81af5523945e6d8bfdce6a81a37ef1a"
  },
  {
    "url": "03_GOF.html",
    "revision": "3f73700b14414fde81f3852c7c112e1e"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "a6241c607eaafdd17b91c98ace9fd5f6"
  },
  {
    "url": "404.html",
    "revision": "40ca0cc6a2a9c852d2c2f1c42627c05d"
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
    "url": "assets/js/17.6af70c8b.js",
    "revision": "685938521dcb31f9fec71fae2f9b2b8b"
  },
  {
    "url": "assets/js/18.aa42b649.js",
    "revision": "7738bde82c5763361aaf968042ca1e1d"
  },
  {
    "url": "assets/js/19.bc43c532.js",
    "revision": "3e709122a6dcd09d14d00d98984ac442"
  },
  {
    "url": "assets/js/2.fd694179.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.2bab264f.js",
    "revision": "cfc2e1a1a9c8f24042704b7c54117ddf"
  },
  {
    "url": "assets/js/21.2356b627.js",
    "revision": "85f4dd756425062ad6c69c06c668c3b1"
  },
  {
    "url": "assets/js/22.72349944.js",
    "revision": "dc023f80d1ecbb6a85ac8c0a3e72d655"
  },
  {
    "url": "assets/js/23.7d221001.js",
    "revision": "9c9c0f749998054d0e168db530df9806"
  },
  {
    "url": "assets/js/24.918cdccd.js",
    "revision": "95af8efc400d9b1f7cb100a6e5e1e9a3"
  },
  {
    "url": "assets/js/25.f68a9a8e.js",
    "revision": "2047fd892088ee0cca20aacc1a9cfe61"
  },
  {
    "url": "assets/js/26.fe45b076.js",
    "revision": "8a13c93eacbb7e12b0140b94a6822328"
  },
  {
    "url": "assets/js/27.fd50f3f6.js",
    "revision": "b7923e39b0cd49674103011bc827706c"
  },
  {
    "url": "assets/js/28.66fa507d.js",
    "revision": "74061b204aff2cc54be08ab93c61fd1f"
  },
  {
    "url": "assets/js/29.37a86571.js",
    "revision": "f99a5b0b82ce015609355bc8905d0596"
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
    "url": "assets/js/app.c22798eb.js",
    "revision": "7b7efbad62d8cb2378541d22ad386dca"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "39627cbf5550253b4aa1bbbd4fcb7b1d"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "b65c0036d51aaf371bca97530d3bfd27"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "5df4c7593b8a69e958330af24b49af3f"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "e5e70102dc6139096ca2f22881986ec8"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "a14945f8173835e49eb1635a1da28ef1"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "8bfb0e4ad7c6a05fef0ae18eaa3c11f9"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "25d3bbe1a28655ec118e535d97060ccf"
  },
  {
    "url": "gof/TemplatePadrao/index.html",
    "revision": "8df3208c2923ad14c13de1a2babef72f"
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
    "revision": "05f23023951b87e5fa3ef29d86a84bc6"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "3e622128070a762337bc2ea9396b3467"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "9c0d12969c4dd7890a4ee3123a7a127f"
  },
  {
    "url": "ref.html",
    "revision": "29eb220582ba07a4a6a782be1c613e4f"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "5f0b9d41fe83033b0e8f478e7e592535"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "53ddb895b28ca9ab8f791f5630a4dfae"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "cf640b9ce44ad4d1d4c9d9eedd74e071"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "4900b50cb4488d15cc22ffb305458159"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "cf1b74a3842921b2eab260fbca4ac6d0"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "8a5b49e4874eb8927f1d3cfce5c8473c"
  },
  {
    "url": "SOLID/index.html",
    "revision": "f690b2ff0996a0d789c2d870de820033"
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
