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
    "revision": "f08c75759245c160f8863b67c539ad7f"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "8c3b7e2f164c3dd7bd7e7061f0efadb9"
  },
  {
    "url": "03_GOF.html",
    "revision": "064c547a01961a97aa4acea8c61d0b14"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "addf26d20d06caead9e9f8b8149eb6e1"
  },
  {
    "url": "404.html",
    "revision": "8c343fb84628c9347499b0a8bf649f48"
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
    "url": "assets/js/13.97058f82.js",
    "revision": "0c2519b55a35433a5e225afaca902bf2"
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
    "url": "assets/js/17.f3abe831.js",
    "revision": "0c158840b8dab2de67499fd4fe794a9a"
  },
  {
    "url": "assets/js/18.aa42b649.js",
    "revision": "7738bde82c5763361aaf968042ca1e1d"
  },
  {
    "url": "assets/js/19.c99e69be.js",
    "revision": "50125e6a823b043622921f4fa743818e"
  },
  {
    "url": "assets/js/2.63c38da0.js",
    "revision": "a50b87af306d0f2aa5ca56d082e5ab15"
  },
  {
    "url": "assets/js/20.d06df924.js",
    "revision": "b73adf16a6651ec25318cf46fd3b2dd0"
  },
  {
    "url": "assets/js/21.84ee0397.js",
    "revision": "daf098bc23e3840b7d1a8b09ee8fdec0"
  },
  {
    "url": "assets/js/22.516a37df.js",
    "revision": "05d864f0196cf32668165184ba80a1b8"
  },
  {
    "url": "assets/js/23.8f0194bb.js",
    "revision": "7a1e692c1100c6c2d27a34b95e5c38f4"
  },
  {
    "url": "assets/js/24.144f32db.js",
    "revision": "60a6ed9b86154d44aa698c09e49775d8"
  },
  {
    "url": "assets/js/25.f68a9a8e.js",
    "revision": "2047fd892088ee0cca20aacc1a9cfe61"
  },
  {
    "url": "assets/js/26.399dec05.js",
    "revision": "2a9ed29962e9060fff9c0432fcf70e88"
  },
  {
    "url": "assets/js/27.2c60dd24.js",
    "revision": "ac12614940c186ed1162a378ff0ea093"
  },
  {
    "url": "assets/js/28.d0573de4.js",
    "revision": "fd1a693751c93e00a1b4e4a47b7625b1"
  },
  {
    "url": "assets/js/29.7932c762.js",
    "revision": "372f4a818ace4c9889f60d6898d53152"
  },
  {
    "url": "assets/js/3.5bc5870a.js",
    "revision": "d4ba3c40176850ea0d529b18da033361"
  },
  {
    "url": "assets/js/30.4d0659b0.js",
    "revision": "6779ebda622190fc2d247be8ee7b2b01"
  },
  {
    "url": "assets/js/31.6e0ebddd.js",
    "revision": "6ee64c1b57d1d56332f98d6a07772c22"
  },
  {
    "url": "assets/js/32.4322955d.js",
    "revision": "657673e7f5d80806f3371657685959f5"
  },
  {
    "url": "assets/js/33.ceeba0a9.js",
    "revision": "fc291bae695e84bcbcd6bded570436a8"
  },
  {
    "url": "assets/js/34.9d506680.js",
    "revision": "286c1847fb3483eba51930bbb69e7bde"
  },
  {
    "url": "assets/js/35.27d961a2.js",
    "revision": "43c4eb61d9feaadaeec29050ee0aed58"
  },
  {
    "url": "assets/js/36.c2d69ab1.js",
    "revision": "b13c71e33c639b03d1005a3e0b4eca85"
  },
  {
    "url": "assets/js/4.c3217327.js",
    "revision": "8a3dd59c1ff79c3d7e6196a3d254904b"
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
    "url": "assets/js/9.8f4229e8.js",
    "revision": "8ff4ab5e92ebcc78df5350e5dd2d5737"
  },
  {
    "url": "assets/js/app.a739d296.js",
    "revision": "5ea205e317a0743d415ee234579bcf16"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "d7deccad88ddc5abffb550f63098a380"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "dab2369f31e9136b5c5918e575b758f7"
  },
  {
    "url": "gof/Criacao/Prototype(Wanderson),/index.html",
    "revision": "56e9a56e88ba304edcea447932529e65"
  },
  {
    "url": "gof/Criacao/Singleton/index.html",
    "revision": "f60d589cbdc232c19d9ae0d215f3887e"
  },
  {
    "url": "gof/Estrutural.html",
    "revision": "f1f138a82ae32813727655da462634e2"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "eb9f7eabace44dd320ceb3b84a546b9b"
  },
  {
    "url": "gof/Prototype_Wanderson/index.html",
    "revision": "aaf8ee8d2c467cd289adda1f1a124250"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "5d46863529cdb6032df213888192f372"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "ae5c4c1e38b6369722249c1d1a7c1533"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "c22c1dd489f186d3c9fc7fee36c12da0"
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
    "revision": "435a54daf0540f826a2253f0247dc8d8"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "bcee69de08de8de56246031a3406d4e3"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "817a3ac1c2fab7bed9470fbdf2287bc4"
  },
  {
    "url": "ref.html",
    "revision": "100cca09c6678454ae9ba437a5f9741d"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "669732e5ab2d2a604852b72aaafd07d8"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "92a42a8f56c1f251f808ed7acfb43411"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "318fe8a6be4ab88e9dd01870222293d2"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "3c5a58a6c262ff94ce16a17719c1ed9a"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "9c7eaeb27f43de20852aa9c2f81021d0"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "8f47dce45883fd966cf0ebfdd1fb77c0"
  },
  {
    "url": "SOLID/index.html",
    "revision": "c29683db74694d5df3450765badeb4c8"
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
