'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "678a4b115c94156e6292728ba7e72c83",
"assets/AssetManifest.bin.json": "7c2f63f2796b5e4a0e985e52229b9057",
"assets/AssetManifest.json": "9fe58d256fade01239520cf422b2b96f",
"assets/assets/images/prepic/100_prepic.webp": "3a062c6b42cc047412ef443d4d308bb0",
"assets/assets/images/prepic/101_prepic.webp": "e228bd241740497602cd83d8c8096aa1",
"assets/assets/images/prepic/102_prepic.webp": "b7f77293aeceb1223442ad965a2d8737",
"assets/assets/images/prepic/103_prepic.webp": "6ca94fd26d1020b69c5483411ce1f357",
"assets/assets/images/prepic/104_prepic.webp": "da3efdec262fef39f259c388fed4981a",
"assets/assets/images/prepic/105_prepic.webp": "49b03950c8dbff6e3cb1e80f734ed191",
"assets/assets/images/prepic/106_prepic.webp": "e6c6aaf64e2c85b9d5c0bdb08a605030",
"assets/assets/images/prepic/107_prepic.webp": "688521472e2f4d9c99a19e9f53cb8661",
"assets/assets/images/prepic/108_prepic.webp": "6496a36dce19adb17c6162d3553220d2",
"assets/assets/images/prepic/109_prepic.webp": "3b2df8093a385813e0f7c47bbead9d10",
"assets/assets/images/prepic/10_prepic.webp": "32a209b4ba363e5670c146eb3c34428b",
"assets/assets/images/prepic/110_prepic.webp": "9b43ef9ba8558ea15327c26d57a6194a",
"assets/assets/images/prepic/111_prepic.webp": "2df679eaf53d0b94b8e861ee6e58458c",
"assets/assets/images/prepic/112_prepic.webp": "79be89a5e6b244aa11eea2ce9251d165",
"assets/assets/images/prepic/113_prepic.webp": "a90226f35a3132d31fc9d7df54b58933",
"assets/assets/images/prepic/114_prepic.webp": "d9d111abce695d595f55647963d913cf",
"assets/assets/images/prepic/115_prepic.webp": "8fa844b37ac76698270da3f1644e352b",
"assets/assets/images/prepic/116_prepic.webp": "fd8d602f293a71b2d98bddb9259eb0af",
"assets/assets/images/prepic/117_prepic.webp": "950f56fffbf273267c6fd25a42192da9",
"assets/assets/images/prepic/118_prepic.webp": "d516fc3da24918e75a95f3b68fedd501",
"assets/assets/images/prepic/119_prepic.webp": "f1e2710ea2f5eb23d845afe0fadaca74",
"assets/assets/images/prepic/11_prepic.webp": "e499f636f0b721c66e43d7f7e63b10a5",
"assets/assets/images/prepic/120_prepic.webp": "c62a2a737cc79f42c5c90e193760a992",
"assets/assets/images/prepic/12_prepic.webp": "4193cf0204853b793174e5769f61cf48",
"assets/assets/images/prepic/13_prepic.webp": "fd417e1e60ffba73978efe736bbeb470",
"assets/assets/images/prepic/14_prepic.webp": "8bd935e2bc677998be2d66ef4129d5e0",
"assets/assets/images/prepic/15_prepic.webp": "90873981a347d721b59767dc90ddaec7",
"assets/assets/images/prepic/16_prepic.webp": "9667287893f49799794fa05d945f046a",
"assets/assets/images/prepic/17_prepic.webp": "bf6bff8826687d500783239640cb8de2",
"assets/assets/images/prepic/18_prepic.webp": "e90ec87a4755d6242601681ec0de0a85",
"assets/assets/images/prepic/19_prepic.webp": "2ddf08e8a2915c2043f97351aad6c583",
"assets/assets/images/prepic/1_prepic.webp": "0553a8b1dd9364291056d5f9481b5252",
"assets/assets/images/prepic/20_prepic.webp": "265825a219dc9d36295a53a3ed55bfc8",
"assets/assets/images/prepic/21_prepic.webp": "f51b2c77e5e74b06a7c87ed87d66e901",
"assets/assets/images/prepic/22_prepic.webp": "697231ad60bfcc8023b98475cd2405ae",
"assets/assets/images/prepic/23_prepic.webp": "3c3c52ccb544d8fbedcc6af652cdcf73",
"assets/assets/images/prepic/24_prepic.webp": "b12e3a13e27b26da15fc08d20cba0c12",
"assets/assets/images/prepic/25_prepic.webp": "7cd0a59f42fe8ada8bd8d0498cf5445a",
"assets/assets/images/prepic/26_prepic.webp": "3853222be010b750cc9503ba2c31fc61",
"assets/assets/images/prepic/27_prepic.webp": "2613725123a89b6fbd0eba0cd175de9f",
"assets/assets/images/prepic/28_prepic.webp": "ac83d66207bd012ee3ff0a369f446afc",
"assets/assets/images/prepic/29_prepic.webp": "f7ceffdb1c33bf3b0fcc28c7ad4bd76d",
"assets/assets/images/prepic/2_prepic.webp": "856d2716130dc6ae63816b7241d82265",
"assets/assets/images/prepic/30_prepic.webp": "d507f393c5e98162581ccdb0378e806d",
"assets/assets/images/prepic/31_prepic.webp": "78a84109e5cfa1cebb44e2d7b8d06983",
"assets/assets/images/prepic/32_prepic.webp": "a823cbee36321327942da880339428a2",
"assets/assets/images/prepic/33_prepic.webp": "e38db06574a072140cb5aaf38c0d5333",
"assets/assets/images/prepic/34_prepic.webp": "e3ab7c9ae0a6d141e110586669ab5e4d",
"assets/assets/images/prepic/35_prepic.webp": "4cd29a5cbeec3e47a4d6805f9ae57585",
"assets/assets/images/prepic/36_prepic.webp": "16eaba0a00e7afd578b0590c4101727b",
"assets/assets/images/prepic/37_prepic.webp": "c1cbb5ddd4eeb14288849d3db105f771",
"assets/assets/images/prepic/38_prepic.webp": "839117c110098b3473a94467d1b2e304",
"assets/assets/images/prepic/39_prepic.webp": "e28c3016895d0f1f469fd92b8d521ebf",
"assets/assets/images/prepic/3_prepic.webp": "61351fe4d61f582eb8d84f12ceeb4ed8",
"assets/assets/images/prepic/40_prepic.webp": "fe950d719764efdd342289d2a4fe78cc",
"assets/assets/images/prepic/41_prepic.webp": "98986b2b31a115d987076de68ae0c04e",
"assets/assets/images/prepic/42_prepic.webp": "cae903c5d17aa24837a17f6cbd3c1356",
"assets/assets/images/prepic/43_prepic.webp": "8d9fd3b527cbda75b4dab1c6335f154b",
"assets/assets/images/prepic/44_prepic.webp": "8edfe7472103c4c35d1337c81f3f61ea",
"assets/assets/images/prepic/45_prepic.webp": "6b274fc0ade812ce2ed6c6f47a3c0927",
"assets/assets/images/prepic/46_prepic.webp": "2fc802b1e61df3cfa328e0652fee704d",
"assets/assets/images/prepic/47_prepic.webp": "32cad4905566c790596a422f85835ad2",
"assets/assets/images/prepic/48_prepic.webp": "bed47aff33815ffd2ef2e90567a7fa33",
"assets/assets/images/prepic/49_prepic.webp": "489b3382fe87cb029aba5364e795fdef",
"assets/assets/images/prepic/4_prepic.webp": "878be8e885bfe01a4b3284af24266cf8",
"assets/assets/images/prepic/50_prepic.webp": "95f9a00c0e549c9bc9e3abe34266dfb9",
"assets/assets/images/prepic/51_prepic.webp": "8f9261df88fd70abdafc5a77d01415e8",
"assets/assets/images/prepic/52_prepic.webp": "3a67eef21f449c5b7c774b98ffc850d4",
"assets/assets/images/prepic/53_prepic.webp": "c1d16cd1f276440b67abb598e1d1828a",
"assets/assets/images/prepic/54_prepic.webp": "b17451802ba810e55c23754a84e2d25e",
"assets/assets/images/prepic/55_prepic.webp": "cbd4e3f10623618d983614df72c4d269",
"assets/assets/images/prepic/56_prepic.webp": "7f71fb7670f56a123096fe34b932944e",
"assets/assets/images/prepic/57_prepic.webp": "8d33fa2bb53e5676b64e1b31f7e5d65b",
"assets/assets/images/prepic/58_prepic.webp": "e97b599445bfad7d7ba9f69b53244c5a",
"assets/assets/images/prepic/59_prepic.webp": "b79cead15cd4159cace2f93cb13fd2e5",
"assets/assets/images/prepic/5_prepic.webp": "4083c69be59c2bd5658851df608a357b",
"assets/assets/images/prepic/60_prepic.webp": "bdd7a54339bfa99886f78cdf05ca01ab",
"assets/assets/images/prepic/61_prepic.webp": "c2dafa4cce022c572d618e565d803bd8",
"assets/assets/images/prepic/62_prepic.webp": "f4d99e8486a144ed00a33d85c44fbe71",
"assets/assets/images/prepic/63_prepic.webp": "13e6cbe2dd993455e6b53b65c3a252a2",
"assets/assets/images/prepic/64_prepic.webp": "089cef57bafc572a72899c2ab8456f06",
"assets/assets/images/prepic/65_prepic.webp": "cf83a19f9ba6692237b539d4c58b891b",
"assets/assets/images/prepic/66_prepic.webp": "fa5ca97c8ddc06aec07d0a8b7ca2c4e1",
"assets/assets/images/prepic/67_prepic.webp": "ff892b9759cd56a2f71565093c495aed",
"assets/assets/images/prepic/68_prepic.webp": "c21ebb112a5730cc7256d5f39a176cab",
"assets/assets/images/prepic/69_prepic.webp": "c38a330bf7163bdab9b3a9a97a24001f",
"assets/assets/images/prepic/6_prepic.webp": "8258c68d8e94da9c2a9eb1f43b709a65",
"assets/assets/images/prepic/70_prepic.webp": "0fca9c884324e9c495102d081fb15265",
"assets/assets/images/prepic/71_prepic.webp": "68e8ef850ceb8540bd6f1f27db52ab86",
"assets/assets/images/prepic/72_prepic.webp": "cccfb222c6b051ebbb56fe4bbbeadf1a",
"assets/assets/images/prepic/73_prepic.webp": "be2553f71e7034f429465dc4af092781",
"assets/assets/images/prepic/74_prepic.webp": "598714bc396ab5e59c6abe1c2359d35c",
"assets/assets/images/prepic/75_prepic.webp": "e692dc224c0d2d0265e7b9adfd61c79a",
"assets/assets/images/prepic/76_prepic.webp": "8dd74057516cc421bb98c1f98e73fc4b",
"assets/assets/images/prepic/77_prepic.webp": "c14a17d82ffe8fac2b38e8e2d5f58088",
"assets/assets/images/prepic/78_prepic.webp": "25fb943a50a21e3419cdfd7ab87a3434",
"assets/assets/images/prepic/79_prepic.webp": "3c6b5067743ebb69d50daf9f2813c640",
"assets/assets/images/prepic/7_prepic.webp": "63bba5e02ace5da4d73e90ab32d7dbc9",
"assets/assets/images/prepic/80_prepic.webp": "c2f551fea425571658ac279b76e15024",
"assets/assets/images/prepic/81_prepic.webp": "2a423f3a11eafdfe155a175271855570",
"assets/assets/images/prepic/82_prepic.webp": "bcb400c1f4d13c23bd9921fb54d0a187",
"assets/assets/images/prepic/83_prepic.webp": "96e8b39e5fb87cb15b2a860139d2fc93",
"assets/assets/images/prepic/84_prepic.webp": "09c96efd0792c1d9d416a08df9a11866",
"assets/assets/images/prepic/85_prepic.webp": "49c5cefdb549080ad1148743e0a6cfcb",
"assets/assets/images/prepic/86_prepic.webp": "987a60ec2f694941d4a4dff02be1b6ec",
"assets/assets/images/prepic/87_prepic.webp": "0fe02d5717e56f9f62028666058fc9d9",
"assets/assets/images/prepic/88_prepic.webp": "20776bd55556726f43d3ff6324bd498a",
"assets/assets/images/prepic/89_prepic.webp": "4332d022a97f358092645de1feca1ff2",
"assets/assets/images/prepic/8_prepic.webp": "65ccdd2f6e4e21ecb5c74838016a3145",
"assets/assets/images/prepic/90_prepic.webp": "9733c093f8886e9489c14232bf321025",
"assets/assets/images/prepic/91_prepic.webp": "cb66ae430d4154a86a3c545383d1e109",
"assets/assets/images/prepic/92_prepic.webp": "74a56f30eaed4d65b96937513b1091f3",
"assets/assets/images/prepic/93_prepic.webp": "fe3a6100394ee4b6b3f748ad6f42e95e",
"assets/assets/images/prepic/94_prepic.webp": "53650f25c4bf8e7c8d72c88fb1fff23e",
"assets/assets/images/prepic/95_prepic.webp": "f81f1d0204b4bd5dd02015c920a711ee",
"assets/assets/images/prepic/96_prepic.webp": "ff6ccd18b9a104c556c8202df6c018c3",
"assets/assets/images/prepic/97_prepic.webp": "97c36088e4933791f6bc3f3eff63a324",
"assets/assets/images/prepic/98_prepic.webp": "374fc50279f66196520e00886be61c94",
"assets/assets/images/prepic/99_prepic.webp": "24de8dbd5f443c9d57715249b18f14b0",
"assets/assets/images/prepic/9_prepic.webp": "eae87eec19703f90a581acbfa6645c9f",
"assets/assets/images/splash.png": "f8715ffe16ad18de93f6d65181a99d6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "09f96b1838d1148c53b0d5aa07cd4771",
"assets/NOTICES": "56e5371d75ecd022ac927a921bf51c78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a87efe749fba1091c3e3e8c70bb418b2",
"/": "a87efe749fba1091c3e3e8c70bb418b2",
"main.dart.js": "0ea9514f14f9dc6ea31f9d3ddf9eef83",
"manifest.json": "54dc663d32959184ad829f414e495329",
"version.json": "ef6899b2154635d97dee56b4472135d9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
