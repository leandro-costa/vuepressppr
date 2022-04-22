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
    "revision": "3c1db6feb5c123359fdbd89091481c89"
  },
  {
    "url": "02_AntiPadroes.html",
    "revision": "8ff23f63fae9f48b37940a50d135f988"
  },
  {
    "url": "03_GOF.html",
    "revision": "6529ae85c9fcb275911e09efd8d6a837"
  },
  {
    "url": "04_nao_GOF.html",
    "revision": "2741f2adeee7826aa1afec36674d328a"
  },
  {
    "url": "404.html",
    "revision": "941e8bc7bb1506d0c9ea77253af3b78d"
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
    "url": "assets/js/22.cf73c051.js",
    "revision": "513bac1112ee9bd18be3ce0061982b8e"
  },
  {
    "url": "assets/js/23.c3257d4b.js",
    "revision": "3604b3b785b625211896421cff937713"
  },
  {
    "url": "assets/js/24.0b15f6dd.js",
    "revision": "00b5ebe3c881ad555aad91d1d2b2de16"
  },
  {
    "url": "assets/js/25.1ef9c9c6.js",
    "revision": "f7f5af80f2b5f50f51e1615035b9af21"
  },
  {
    "url": "assets/js/26.2fc3b743.js",
    "revision": "2120ea1b38e2b9a1581e27d0b6880045"
  },
  {
    "url": "assets/js/27.2b5225b3.js",
    "revision": "c613d808aa7b0abad55b4bec2e645c60"
  },
  {
    "url": "assets/js/28.e068ff34.js",
    "revision": "1ef5eca844f2297019ecec69d75080ad"
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
    "url": "assets/js/app.8addea83.js",
    "revision": "c6357b498328e16f4d1ed145b83031a9"
  },
  {
    "url": "gof/AbstractFactory/index.html",
    "revision": "179251406a63d2e4fc5e39dc15e6be6b"
  },
  {
    "url": "gof/Builder/index.html",
    "revision": "f8ae4722c178051bea3f88e5919f367c"
  },
  {
    "url": "gof/Criacao.html",
    "revision": "2ce255b1a97c6a3f0b99d7dbcfe60371"
  },
  {
    "url": "gof/Estrutural.html",
    "revision": "003b0d58932e77d935da70416cd24123"
  },
  {
    "url": "gof/FactoryMethod/index.html",
    "revision": "693866567f872b6d071e34f7dbfece56"
  },
  {
    "url": "gof/Prototype_Wanderson/index.html",
    "revision": "df9b3e790340def43ca96db30bb4c2d9"
  },
  {
    "url": "gof/PrototypeRichard/Prototype.html",
    "revision": "9a5f0d021e2bef1d544e95253b206ef6"
  },
  {
    "url": "gof/Singleton/index.html",
    "revision": "a61038e0e9dae1e1d26b68400a69d34b"
  },
  {
    "url": "gof/Strategy.html",
    "revision": "8890bed5dd641fdfbaac725f4cfa8771"
  },
  {
    "url": "gof/TemplateMethod.html",
    "revision": "0c4fe581645d3398d1e4701098933f19"
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
    "revision": "017611902924843843d3a4b0837c8e3c"
  },
  {
    "url": "logo.png",
    "revision": "4e2606b85367dfca225aefb22c29ead6"
  },
  {
    "url": "nao_gof/Multiton/index.html",
    "revision": "eb01bdb660a1e1f0252cb816049249ca"
  },
  {
    "url": "nao_gof/ObjectPool/index.html",
    "revision": "ca118c841689823a557b0b2509cbd515"
  },
  {
    "url": "ref.html",
    "revision": "b5078d765243bf1c47276fb039b63988"
  },
  {
    "url": "SOLID/1_SRP.html",
    "revision": "01eed16bca9f9044062f59073e98cf9f"
  },
  {
    "url": "SOLID/2_OCP.html",
    "revision": "bc7e0e46cb182f76d6cb763992354442"
  },
  {
    "url": "SOLID/3_LSP.html",
    "revision": "a27c4b8ccf214b9de3e301d9467137c6"
  },
  {
    "url": "SOLID/4_ISP.html",
    "revision": "8950a9f67f4dc702fe54710138aa6739"
  },
  {
    "url": "SOLID/5_DIP.html",
    "revision": "c4b1f067ad8cd5d4db8af022f154935c"
  },
  {
    "url": "SOLID/buffer.html",
    "revision": "1fb07a74595fe8409ab0b14d61fbf3a6"
  },
  {
    "url": "SOLID/index.html",
    "revision": "443113d8f0ffc05152ea63d5ecf2ac9a"
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
