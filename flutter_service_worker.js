'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "906f985d90ddf850d4c5ed40968e33f1",
"assets/AssetManifest.bin.json": "ab25107eae2fb70b29b577111217820a",
"assets/AssetManifest.json": "3a1302bbe37d9a8e6dec5c5d1307bead",
"assets/assets/mahjong/d1.png": "869a131f57da72d395088fb774f9530a",
"assets/assets/mahjong/d2.png": "0cac113b98b013ea19eb6ca53511b512",
"assets/assets/mahjong/d3.png": "e5ab650b4acb7e05496f3231b58deacf",
"assets/assets/mahjong/f1.png": "94ee7de9c0692c339ae19fa080686dfc",
"assets/assets/mahjong/f2.png": "ea957c0ee9447d26a823ac4ea6b8b811",
"assets/assets/mahjong/f3.png": "3b7cc1b132ede49904d1e4555c1d2ecf",
"assets/assets/mahjong/f4.png": "4b7127e238f122dfa552264167dc44fd",
"assets/assets/mahjong/h1.png": "f987cc77ac803170d57ad6866d285c39",
"assets/assets/mahjong/h2.png": "04dffda5daf7d5823e8d8459463b8b01",
"assets/assets/mahjong/h3.png": "9babfec2bfd13457566142b18482a8ea",
"assets/assets/mahjong/h4.png": "adb81ae28514ec1252ebc9fd221fd38a",
"assets/assets/mahjong/h5.png": "1b32f1d522ac2ef07f0cb2f58698af2b",
"assets/assets/mahjong/h6.png": "33442fc653b52c573ef5bdd23385bf9c",
"assets/assets/mahjong/h7.png": "c8db586e9f961e85567e66c79fbeb9e1",
"assets/assets/mahjong/h8.png": "04cb353e8d881b4c5106b255e146a2ee",
"assets/assets/mahjong/hu.png": "4e770fad71f24c7b34d018dd3ba6d333",
"assets/assets/mahjong/s1.png": "11fa13c8441d799d57de035b1c5c0b31",
"assets/assets/mahjong/s2.png": "8119887e495c7fe165415141f29475db",
"assets/assets/mahjong/s3.png": "8b50398e3229f322e6088f87a74b4e64",
"assets/assets/mahjong/s4.png": "6224d326161cf140e02de621c191ef10",
"assets/assets/mahjong/s5.png": "55ca5752facbe48ad37c72529b489344",
"assets/assets/mahjong/s6.png": "c1bc1c49e2a1f22412014dd0063799ee",
"assets/assets/mahjong/s7.png": "d869232733e1c18b32d7701474e06406",
"assets/assets/mahjong/s8.png": "fd7ec2fab80a8cb2946463b5be834cb8",
"assets/assets/mahjong/s9.png": "09461a551bded42dd26f370f30b5b649",
"assets/assets/mahjong/self_win.png": "41e51818ec9cb56ec2d45a19eb87d495",
"assets/assets/mahjong/t1.png": "b8666414cbd3476489f635ed4edbfb1d",
"assets/assets/mahjong/t2.png": "45a074730516ae48998cb5c34a2be00d",
"assets/assets/mahjong/t3.png": "34742eae21f5e9f9c77931522c1b66d7",
"assets/assets/mahjong/t4.png": "7521cdd0726378def876608f2fb3e222",
"assets/assets/mahjong/t5.png": "cecd0f53b2aa6953a5550c385f66c061",
"assets/assets/mahjong/t6.png": "4c5b1b86d7f70954d04bdab9244a5247",
"assets/assets/mahjong/t7.png": "a5ee8214233218f4fc37ced12f88a5d2",
"assets/assets/mahjong/t8.png": "9a260f6c051f1dd1f35aa6bfe24f916e",
"assets/assets/mahjong/t9.png": "07cff1f70ff90fa2a23fed09fa225578",
"assets/assets/mahjong/transparent.png": "17404ad71b58400c3a27e3bc7e116db0",
"assets/assets/mahjong/w1.png": "4860048317e1c96feb849c4b3b1cb650",
"assets/assets/mahjong/w2.png": "b8323d0e1f51550a5998dcf7662fc5c3",
"assets/assets/mahjong/w3.png": "356ce4579340a5a95e13a5a8c9afaaf5",
"assets/assets/mahjong/w4.png": "8194486a7c465f9ba9749743cdf1fb43",
"assets/assets/mahjong/w5.png": "f541baada4fdffbf4247352c8ea29ee4",
"assets/assets/mahjong/w6.png": "414cb0bb371503e4d2dfeb61d6a3f2c9",
"assets/assets/mahjong/w7.png": "bcdaa46a119fe0aef763f851c1880060",
"assets/assets/mahjong/w8.png": "7843028d5539b598d667f10227502570",
"assets/assets/mahjong/w9.png": "6f3243b57f8d805d459682a1f92b3049",
"assets/assets/mahjong/x1.png": "4884949f4b66214d6a865011de26e1f2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "2cab58a5e478170199d7c9267bb9b4e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "7b6aefef05d82c86688cdfd8b7b91137",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "74504b8064a5238ca546aa4e3017befa",
"/": "74504b8064a5238ca546aa4e3017befa",
"main.dart.js": "10fbdc84604c55b9ca21289f722e23f3",
"manifest.json": "e4467ce6f28a97f7b51314aa71eb9e62",
"version.json": "70e902f46046b63aa2b0662980d410a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
