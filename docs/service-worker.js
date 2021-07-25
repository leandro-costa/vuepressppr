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
    "revision": "4b855b2a9febe082b49879af7a72be8f"
  },
  {
    "url": "02_SOLID.html",
    "revision": "8c485073fa230bc72796b06d81c432e4"
  },
  {
    "url": "03_GOF.html",
    "revision": "4529a5c53615ed821036aa4d42c51ed1"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "b3beeac50338da3218f62a426f8170a7"
  },
  {
    "url": "404.html",
    "revision": "71b27e9604e4808962e5f82fe8f3536a"
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
    "url": "assets/js/13.89e8328d.js",
    "revision": "051bb73627890ccb8805e9db5d08476f"
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
    "url": "assets/js/app.be16b7ea.js",
    "revision": "1bc5cdae86fe85c766843abe41bcf2fc"
  },
  {
    "url": "gof/AbstractFactory.html",
    "revision": "368c0d272d65cd2a2f5648016807f170"
  },
  {
    "url": "gof/FactoryMethod.html",
    "revision": "72363e1896e970616a0f7981084b18c7"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "db72c0c95ba8c8f4b48362d32555738d"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "ea205196d077af88a8f4c649df4da8c0"
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
    "revision": "1d9f70c67b5afdff81323a05fb419ba6"
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
