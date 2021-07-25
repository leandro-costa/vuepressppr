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
    "revision": "e6ef3aec3a26e379ee2028b48c1bd9f9"
  },
  {
    "url": "02_SOLID.html",
    "revision": "c07eafcacc29e48a32376d416d724907"
  },
  {
    "url": "03_GOF.html",
    "revision": "1224e927bd3d005630f12939f217c0f3"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "a1604dd167bc0fc2fdddda10cbb0d931"
  },
  {
    "url": "404.html",
    "revision": "763b61cd4ce8b6fa332b65f127396726"
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
    "url": "assets/js/13.d95b55cf.js",
    "revision": "0e0efff03237cc8d024ce51d326910df"
  },
  {
    "url": "assets/js/14.7f7f1087.js",
    "revision": "aeb19d5f425df7e5b3c964fa9918ef8f"
  },
  {
    "url": "assets/js/15.17cdea2c.js",
    "revision": "44cf16413e4e818f9fc5fe4d4a5bd76d"
  },
  {
    "url": "assets/js/16.541cd8f4.js",
    "revision": "56ad5554cccac55926788a7c3c4ca6f8"
  },
  {
    "url": "assets/js/17.7d3838ba.js",
    "revision": "020abc71286432ea28192cc75eea18a3"
  },
  {
    "url": "assets/js/18.e4dd401c.js",
    "revision": "42a9cbb47a339918bb1633337a1291c7"
  },
  {
    "url": "assets/js/19.7c648de8.js",
    "revision": "b501eae685c7e2c61b47c1f44c010002"
  },
  {
    "url": "assets/js/2.c7e67aad.js",
    "revision": "6fca69fe1c9ed46546b8b364e34a1ed4"
  },
  {
    "url": "assets/js/3.190bb28f.js",
    "revision": "37505fb7cdf33444eb1c4404206d672d"
  },
  {
    "url": "assets/js/4.d0df1cb4.js",
    "revision": "d2d91734ba810089d4b1c49ad404de44"
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
    "url": "assets/js/9.d6459e8e.js",
    "revision": "5dbd6b1120da3db504c5f32f3648ffb8"
  },
  {
    "url": "assets/js/app.98548ce9.js",
    "revision": "fe6efb3f3150f9249a00aeb4b2908c7e"
  },
  {
    "url": "gof/Flyweight.html",
    "revision": "96b8d994687cd213559bb30d913daeb5"
  },
  {
    "url": "gof/index.html",
    "revision": "9a1c89601d91468a55edaf4a3db6130b"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "25cbcf41c41e7cb400389e472482f839"
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
    "revision": "6c65a6479c0db672973b99ce5fc8ac93"
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
