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
    "revision": "9604df434c2115b49bb6145f0a3db666"
  },
  {
    "url": "02_SOLID.html",
    "revision": "1153621b9c5b2f6bb9404dfddc8f1378"
  },
  {
    "url": "03_GOF.html",
    "revision": "0ff43f52941403d9df482f27ef219bfc"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "531c683d0090863ae38dd595be3edb31"
  },
  {
    "url": "404.html",
    "revision": "a2fa4195457496ca2a91cb726f15a017"
  },
  {
    "url": "assets/css/0.styles.db063fab.css",
    "revision": "7dc140481bebb9a58fa1466f3066ec00"
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
    "url": "assets/js/11.4f40904c.js",
    "revision": "4caf47d36ff55a4004dbf477733a68b5"
  },
  {
    "url": "assets/js/12.fe9bdc9a.js",
    "revision": "bf2da5954528b96340fb5216710c40a1"
  },
  {
    "url": "assets/js/13.a90adc68.js",
    "revision": "c8eb8016d66e3896cc5ba87a57f600ea"
  },
  {
    "url": "assets/js/14.67dca124.js",
    "revision": "1de6f936021fd71dc0cbdfd89d6eb417"
  },
  {
    "url": "assets/js/15.f38c60c5.js",
    "revision": "1962a73277e7775da580140412ac1d3c"
  },
  {
    "url": "assets/js/16.d313fc1b.js",
    "revision": "c8016a1cf84ca9b353beab86160a071d"
  },
  {
    "url": "assets/js/17.3d415271.js",
    "revision": "f5f4dc0ae251d5c5d3e1822ba06db92d"
  },
  {
    "url": "assets/js/18.40ee491d.js",
    "revision": "1870178fbd41b2dfd0f0e8eb3bdf06af"
  },
  {
    "url": "assets/js/19.ffd63aa1.js",
    "revision": "c5f9e4b92acc5d87f164d8c97bc46322"
  },
  {
    "url": "assets/js/2.9af12a35.js",
    "revision": "18a619d085621c9a31713073efa0a64e"
  },
  {
    "url": "assets/js/20.e8281a21.js",
    "revision": "0bbb613af2679ba7089f8541c5d4f88d"
  },
  {
    "url": "assets/js/21.05fff143.js",
    "revision": "d1b1ac4834dc705331ac8e9cffe3bf39"
  },
  {
    "url": "assets/js/3.6a601bc8.js",
    "revision": "b997573423e435c77bcca7b88243d9d5"
  },
  {
    "url": "assets/js/4.7876d50c.js",
    "revision": "bf9f14b6d4c0c22fb200ecd880c8a90d"
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
    "url": "assets/js/9.be36a7d7.js",
    "revision": "37959dc090f3a4588cbc3a671184b65a"
  },
  {
    "url": "assets/js/app.0fff2f57.js",
    "revision": "63fcb1e83ecb78e7d8dfb5e2d27861f7"
  },
  {
    "url": "gof/AbstractFactory.html",
    "revision": "bb7adb3335183e083877a7c7946dd2da"
  },
  {
    "url": "gof/FactoryMethod.html",
    "revision": "d4bf28ada7adb307be73f0b098984de5"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "3693afdce4f6ef509c414cec87dcfc99"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "693dc6815e418683509294d50f472fb3"
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
    "revision": "c35f43cba85aff92ffc5cce8c1fc19be"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "c79efeae97ea4903fb3be41bf919d748"
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
