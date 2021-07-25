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
    "revision": "a7dd70313c4fa98364f99ef4fc39c462"
  },
  {
    "url": "02_SOLID.html",
    "revision": "781837314ed0d9fa3b888ec0a47d6ab8"
  },
  {
    "url": "03_GOF.html",
    "revision": "2553c2d871c30b44e39044700a72f0b5"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "0c96c506a5f903b96077a7f86e7ce99e"
  },
  {
    "url": "404.html",
    "revision": "6135cbbeed1654f1a1270f2123aa9d29"
  },
  {
    "url": "assets/css/0.styles.716e4c57.css",
    "revision": "ee41fd1a3cb93dd5e4c3d47a61bd784d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.daaad698.js",
    "revision": "d43710ec89f0faf6b3dec8856bd8f269"
  },
  {
    "url": "assets/js/11.bbf627e8.js",
    "revision": "55174c94bac8df71e1f58a8d5d5b174f"
  },
  {
    "url": "assets/js/12.0475d1fd.js",
    "revision": "8097eb1c1a22fad56b7099f4dd3ac1df"
  },
  {
    "url": "assets/js/13.09bbe75b.js",
    "revision": "c0574336a0d622c9e6bc2c8881a6d008"
  },
  {
    "url": "assets/js/14.7f7f1087.js",
    "revision": "aeb19d5f425df7e5b3c964fa9918ef8f"
  },
  {
    "url": "assets/js/15.cd3b6378.js",
    "revision": "5e4ae28094a78f3d23be074a1254711c"
  },
  {
    "url": "assets/js/16.fbb71aae.js",
    "revision": "a825ee3162bec074185d06358ff0b052"
  },
  {
    "url": "assets/js/17.2fbfc381.js",
    "revision": "428d94b613688c21d9072aab22dbfe25"
  },
  {
    "url": "assets/js/18.65a5298b.js",
    "revision": "e96d626d511ab5ff4aaae551e9aa35d4"
  },
  {
    "url": "assets/js/19.8d9758ad.js",
    "revision": "3e5cb0dac807ed7b56368f230ff78df2"
  },
  {
    "url": "assets/js/2.1c6f101c.js",
    "revision": "18a619d085621c9a31713073efa0a64e"
  },
  {
    "url": "assets/js/20.f694536c.js",
    "revision": "420ab20d3bda8fc61077a3052474fc7f"
  },
  {
    "url": "assets/js/3.1bf2070f.js",
    "revision": "b997573423e435c77bcca7b88243d9d5"
  },
  {
    "url": "assets/js/4.f881f05d.js",
    "revision": "a44fdff666e8cbc51f9d8c5a6db9074a"
  },
  {
    "url": "assets/js/5.2d02247d.js",
    "revision": "719470b0a128fdb8ba1529ab6db992a2"
  },
  {
    "url": "assets/js/6.21ddd515.js",
    "revision": "581d60bd4dbec4713d785d9a39e7d3c9"
  },
  {
    "url": "assets/js/7.c0459fae.js",
    "revision": "f5264d956aa0956b2e23c4c42fd21853"
  },
  {
    "url": "assets/js/8.97a4833c.js",
    "revision": "46b0d16a51491e2f5325feecf973155a"
  },
  {
    "url": "assets/js/9.b9b26665.js",
    "revision": "9a0cb0a5688b846fed6d9e49089545c0"
  },
  {
    "url": "assets/js/app.3a031a01.js",
    "revision": "9655d25514c700a7b51d2dbf2bb13da4"
  },
  {
    "url": "gof/AbstractFactory.html",
    "revision": "83a36909b31c868e6ced5a48d5bb6671"
  },
  {
    "url": "gof/FactoryMethod.html",
    "revision": "d2e9914ff418fae3049fff1046a625af"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "5a9afaf62ca8152c6f89ea2c039e8bdc"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "fe4d610c760fbed01c39160706ddbe8d"
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
    "revision": "b1fbe08fd171a2b1ac9afec562ed5005"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
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
