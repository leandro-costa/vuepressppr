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
    "revision": "44606d5bcadf6f3c10da15f93b9d7117"
  },
  {
    "url": "02_SOLID.html",
    "revision": "2d16b8284314af7eef3f80f30ab9cbec"
  },
  {
    "url": "03_GOF.html",
    "revision": "957ba7934ac09eb70116ebb5bc50f7b0"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "0f1bd4665c104cb33044a86ee78e5248"
  },
  {
    "url": "404.html",
    "revision": "dba93363fcdafb8aebc316e997f4716b"
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
    "url": "assets/js/13.f03b44d9.js",
    "revision": "2d3d47d2e0ebbe7cebe29c26fefc286b"
  },
  {
    "url": "assets/js/14.77172f79.js",
    "revision": "1e0269adc7a0fe9e530a402df0e67047"
  },
  {
    "url": "assets/js/15.c25677f2.js",
    "revision": "468925540e370d728dc4e16eb2fd83d0"
  },
  {
    "url": "assets/js/16.a09f68ef.js",
    "revision": "b6f3c6e30e5bdf3bb7ece0cf19682545"
  },
  {
    "url": "assets/js/17.1ac67810.js",
    "revision": "2bdbf4dd885e78bf5ec070416129265f"
  },
  {
    "url": "assets/js/18.79c217a6.js",
    "revision": "68fc524f2a9f84075c8cf19e4725bde9"
  },
  {
    "url": "assets/js/19.5b2e82bc.js",
    "revision": "02cfb719679c2013f4b00a89ed6a86e7"
  },
  {
    "url": "assets/js/2.c734147e.js",
    "revision": "4669f56f32995eb1657cb3aaab5ad7f7"
  },
  {
    "url": "assets/js/20.a356fe11.js",
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
    "url": "assets/js/app.047d6c81.js",
    "revision": "3e2d6b3c73043d908adff35521839b20"
  },
  {
    "url": "gof/Criacao/AbstractFactory/index.html",
    "revision": "dd6841e78ab68d2677a59e0b7033cab6"
  },
  {
    "url": "gof/Criacao/FactoryMethod/index.html",
    "revision": "3ee76075e05f11fc4e52084bad5e4788"
  },
  {
    "url": "gof/Criacao/index.html",
    "revision": "187f939576e4b9a5a66f6465582503e3"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "31e0a90773197e8499146f71bd8a465e"
  },
  {
    "url": "gof/Criacao/Strategy.html",
    "revision": "57b78af8888e2efb85b6466fce2f8033"
  },
  {
    "url": "gof/Criacao/TemplateMethod.html",
    "revision": "8c0136140674434c39817a3ac6d0a6ec"
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
    "revision": "1b6d4d28c18352b6028d2474e11b8d70"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
    "revision": "484765f5861d7bfbdba2001402315177"
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
