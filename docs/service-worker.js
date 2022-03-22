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
<<<<<<< HEAD
    "revision": "503a8116e0e5444dd8b6c5e92df0d813"
  },
  {
    "url": "03_GOF.html",
    "revision": "7ee94f2ae938f159006a537d0834261e"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "9444c67973b21cb79b2d31b599901eaf"
  },
  {
    "url": "404.html",
    "revision": "e4101f6ae593dd1807ad2403cc577252"
=======
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
>>>>>>> 582a08830bd1c4f82f18344f4d052be184ec2af3
  },
  {
    "url": "assets/css/0.styles.0fa43474.css",
    "revision": "3fbd76559aaa046667b89e998a822736"
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
    "url": "assets/js/11.e7b43091.js",
    "revision": "6db55ba4cf46a99d1644ffc7af5ab256"
  },
  {
    "url": "assets/js/12.6d92c980.js",
    "revision": "a17c6253593f73a64705922258f24efc"
  },
  {
    "url": "assets/js/13.3d00c961.js",
    "revision": "d06de999097e24539efa4f0d9b9f44fd"
  },
  {
    "url": "assets/js/14.b8fa3833.js",
    "revision": "c451427bd2f9cc9e3d7f00e0e022ad0d"
  },
  {
    "url": "assets/js/15.b529cb8c.js",
    "revision": "667d409d7e3a20484ff904755b2eb3a1"
  },
  {
    "url": "assets/js/16.c5095629.js",
    "revision": "60db489af5e40fdd002929bcf3735ccb"
  },
  {
    "url": "assets/js/17.9f1d7249.js",
    "revision": "7cb8b7215feac2e4d9d7b0f97962a2fb"
  },
  {
    "url": "assets/js/18.852c5b09.js",
    "revision": "727bcfd8f7a5b4db73bbca1134bf056f"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/19.6a4cb321.js",
    "revision": "e1fe477c8b8783ecd05c7c042aab8e44"
=======
    "url": "assets/js/13.f03b44d9.js",
    "revision": "2d3d47d2e0ebbe7cebe29c26fefc286b"
>>>>>>> 582a08830bd1c4f82f18344f4d052be184ec2af3
  },
  {
    "url": "assets/js/2.17e3e06e.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/20.19248d73.js",
    "revision": "f257bfe7df098a7c7dbb9d948292d0e1"
  },
  {
    "url": "assets/js/21.89af108b.js",
    "revision": "9fef5fac2e417b7309dc7a1f365b859a"
  },
  {
    "url": "assets/js/22.ddefb349.js",
    "revision": "9c47a7dfcb5cb21a4f537823f76d0611"
  },
  {
    "url": "assets/js/23.b67219a1.js",
    "revision": "eb29c8821fdff800183cdef5f51d9eab"
  },
  {
    "url": "assets/js/24.ddc5aae3.js",
    "revision": "3824a31223389deaa2bd471be7233d11"
=======
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
>>>>>>> 582a08830bd1c4f82f18344f4d052be184ec2af3
  },
  {
    "url": "assets/js/25.c004ad54.js",
    "revision": "250d8b23ee44cde1731c6e95feb6633c"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/26.28d026ef.js",
    "revision": "ae2dbfe5532b56f3ff5f346286564115"
=======
    "url": "assets/js/20.a356fe11.js",
    "revision": "6169ff6b91e41aceca39403ea178f1de"
>>>>>>> 582a08830bd1c4f82f18344f4d052be184ec2af3
  },
  {
    "url": "assets/js/27.2dabd76d.js",
    "revision": "16458dd30d3f6da74598706fd39845c0"
  },
  {
    "url": "assets/js/28.a2d6ad2d.js",
    "revision": "91be31b9abc8e3d8af234bb6b90e644a"
  },
  {
    "url": "assets/js/29.c3ae10b4.js",
    "revision": "695f0f68914d1a5e428a3a4ed1b83a62"
  },
  {
    "url": "assets/js/3.73385d4e.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/4.97fbe56c.js",
    "revision": "4900343ebd96b8021aee66878b9b140b"
  },
  {
    "url": "assets/js/5.df2cebc7.js",
    "revision": "70a01b83bd84f6f00ff6059862b34009"
  },
  {
    "url": "assets/js/6.414e3024.js",
    "revision": "fdae136d6efb660a3063a585fdf7bbf1"
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
    "url": "assets/js/9.9ad56b09.js",
    "revision": "9fd0c73a2d43b14639da7ea5eb85f402"
  },
  {
<<<<<<< HEAD
    "url": "assets/js/app.83a7d81d.js",
    "revision": "c50a24f0d198d83e469e7a94b6132fc0"
  },
  {
    "url": "gof/Criacao/AbstractFactory/index.html",
    "revision": "91f334b0213d372e76f9dc8a21c79b76"
  },
  {
    "url": "gof/Criacao/FactoryMethod/index.html",
    "revision": "b742f28ecdab4993ee520a612018cd60"
  },
  {
    "url": "gof/Criacao/index.html",
    "revision": "07ae8d4697f41b64b979f09b24d2563d"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "362616b155b9ffecf967ae756adba3dd"
  },
  {
    "url": "gof/Criacao/Strategy.html",
    "revision": "bf27dd07c41a2914af63de3722015b44"
  },
  {
    "url": "gof/Criacao/TemplateMethod.html",
    "revision": "b72a98d300e2801f1d82806220381734"
=======
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
>>>>>>> 582a08830bd1c4f82f18344f4d052be184ec2af3
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
<<<<<<< HEAD
    "revision": "097ff8a6bc74cf4346f49879fe3fd318"
=======
    "revision": "1b6d4d28c18352b6028d2474e11b8d70"
>>>>>>> 582a08830bd1c4f82f18344f4d052be184ec2af3
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "ref.html",
<<<<<<< HEAD
    "revision": "35e624007e138e1e9447a0417b7d02b8"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "cdcd206ed8bc6cd5ffdef1df483d2d9c"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "9d5f839e6b02ac52e18950043ef50ddc"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "791ac548b9e7696236f58e1dbc1792b8"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "d58abba86ef50506f478c3ed582a98f5"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "8cba7698695ff1077354580b8d3f8e9a"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "52358bc228fcbdd6f266eb60a6dc9123"
  },
  {
    "url": "SOLID/index.html",
    "revision": "6b9725c9373a37c5afff0bc3ab47f212"
=======
    "revision": "484765f5861d7bfbdba2001402315177"
>>>>>>> 582a08830bd1c4f82f18344f4d052be184ec2af3
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
