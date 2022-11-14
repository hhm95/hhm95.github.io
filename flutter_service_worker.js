'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0aa055d383d819751e90a2deb8766b4b",
"assets/assets/data/banner.json": "aabce14bbba52619069bdaedb17efecf",
"assets/assets/data/category.json": "5ca1bd3adde8a0a38fb3a9b9ccc9499b",
"assets/assets/data/news.json": "06e476983e526e9963571e443b8567a9",
"assets/assets/images/image1.png": "348b445ac28f4fb9cacca993bebfa429",
"assets/assets/images/image2.png": "f0b35f83fc42ee417d2883695cc38824",
"assets/assets/images/image3.png": "30b9eb99ffd9327f847f37aa4cbaad35",
"assets/assets/images/image4.png": "bee497a2cfd9c4815064aaddbb97ce5b",
"assets/assets/images/name1.png": "402da3c7e310f6d84c32a5d35eef7288",
"assets/assets/images/name2.png": "2c1221990d5aab49fcc7d0f14adc1096",
"assets/assets/images/name3.png": "f86b9683c3094ffccfca24d9edb48051",
"assets/assets/images/name4.png": "31ec6eb5715ee5552405cb8143149951",
"assets/assets/images/new1.jpg": "9377966d5bfaeed9742f218df2e2e8f1",
"assets/assets/images/new2.jpg": "b870bb7a15898e55e542dea4edd6b934",
"assets/assets/images/new3.jpg": "a935e3369d2f08f6e30ba9dc63b125ba",
"assets/assets/images/new4.jpg": "8cfb1bb24c19020bb4a6de07534da888",
"assets/assets/images/pic0.jpg": "86bfae29b00652e843a19e7c80a014dd",
"assets/assets/images/pic1.jpg": "ed171c503da641419556bc3de1adb37f",
"assets/assets/images/pic2.jpg": "c194a3c813bda66b4e7755389b4212e8",
"assets/assets/images/pic3.jpg": "6758038a8e8294ee9d36610b7205c0a5",
"assets/assets/images/pic4.jpg": "e4a339c6731ccb9a77f5f054499066d1",
"assets/assets/images/pic5.jpg": "637694fba4e05177d2c10b619a63ecc3",
"assets/assets/images/pic6.jpg": "993733512f05c54b592af0d2d5cfc8c9",
"assets/assets/images/pic7.jpg": "3b5be0c273ebd7fed8e48f8569d32007",
"assets/assets/images/sp0.jpg": "518318888ebc0343a502da04720b5c7a",
"assets/assets/images/sp1.jpg": "2991930a57de0b01a3b26f181f47da52",
"assets/assets/images/sp2.jpg": "26fe3c18ec53378ebdf7054638ff8828",
"assets/assets/images/sp3.jpg": "24004d99280f743b6965a6d65e65f2ca",
"assets/assets/images/sp4.jpg": "ee13e95475c6c1556d352963cda7c9d3",
"assets/assets/images/sp5.jpg": "6c4f15c78a55a792127196279515eeef",
"assets/assets/images/sp6.jpg": "593b1ae66f6f46cae5188a5662d80169",
"assets/assets/images/sp7.jpg": "35f1b21ca62a8441fca9258d36a4b3e2",
"assets/FontManifest.json": "c2c8dd7addd857eaec6d67c87d2fbf72",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/fonts/Roboto-Italic.ttf": "cebd892d1acfcc455f5e52d4104f2719",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/NOTICES": "95f0085a2212985d3a041f7c0ed5c697",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e46de0b4a84c0afaa163d77b9abcef27",
"/": "e46de0b4a84c0afaa163d77b9abcef27",
"main.dart.js": "80d8a9cae0f33f0acdbfd2acb7d27754",
"manifest.json": "f0b699f1aa7ebc1bfe9d115746565929",
"version.json": "3da52b333a17e6f176ce40c60bf88d53"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
