'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "64278b8bfb07569d63f40a876ef88453",
"assets/AssetManifest.bin.json": "e8cac43cd6e639ba9079014ca37b67ca",
"assets/AssetManifest.json": "7370dca91c9010af4f508910d7b77a12",
"assets/assets/account_icon.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/add_white_icon.png": "ca9749263807fb890410905009ea586e",
"assets/assets/back_white_icon.png": "67a5bd706584ace07aad14ddf269992f",
"assets/assets/camera_icon.png": "33984f0debe7281b72d75baa8195132d",
"assets/assets/change_status_icon.png": "a7da0175994a0e779b3eb9ddc87cf582",
"assets/assets/clock_icon.png": "fbb2310c6403bbeeaff0047d9097365f",
"assets/assets/clock_in_icon.png": "fbb2310c6403bbeeaff0047d9097365f",
"assets/assets/close_white_icon.png": "9ff23f21b005f9448fdd302830e933f8",
"assets/assets/club_members_icon.png": "fc64a2ed0170a4dae9860575953736df",
"assets/assets/copy_icon.png": "71ba20ec298c6737abe27c80cfbc9b4a",
"assets/assets/create_icon_black.png": "2a1c72ff0f3a681eb93a3cf67991e99c",
"assets/assets/edit_member_icon.png": "0984ce78f88886e9064167f8caef6320",
"assets/assets/edit_pencil_icon.png": "f8bfdeb0ddc29268be8877cad2c272e4",
"assets/assets/emptybox_icon.png": "ac637a591d8d4ab26e600917fab242dc",
"assets/assets/encoder_icon.png": "a275517783a6de1993f7d6d071330267",
"assets/assets/entry_icon.png": "3679266b9df135962d8bf4b59a7b7f7c",
"assets/assets/firebase_logo.png": "cbba441819dedfd0d32e7ba009faee5e",
"assets/assets/gallery_icon.png": "3682496b6bb48ca7d64242a08157019f",
"assets/assets/hidden_eye_icon.png": "03ecf7e6e43fcff15c912ee223cd4931",
"assets/assets/id_icon.png": "c6ff3a01821fc4a68b8a860943d6d09c",
"assets/assets/info_icon.png": "cfd154ee2673dd57a0e887f4b28a5a77",
"assets/assets/key_icon.png": "fbc58eb206564dbd8f9f61c28a06f867",
"assets/assets/list_icon.png": "0b721e533aedc38aa39530818148fc99",
"assets/assets/location_icon.png": "cd4aff5d0037488d39e079b23fd2ec9a",
"assets/assets/location_white_icon.png": "4f1c677f31b32c2fcb76a956093a177d",
"assets/assets/logo.png": "c41191a8818ddbab8f1714478240d4d5",
"assets/assets/logout_white_icon.png": "793c523079c51af90c9fe1dada5fff4a",
"assets/assets/logs_icon.png": "2db0a2f7e4874388d2bc23e9f5ea345b",
"assets/assets/moderators_icon.png": "bdf596efff142c4a029dfb39af95b2e1",
"assets/assets/more_icon.png": "6df4089d3e91247ba0f200e4bd7f3768",
"assets/assets/numbers_icon.png": "59ed0175d80892bfa275b578797a5397",
"assets/assets/pigeon_background.png": "3ddb9d4d9ce7b5caec12da035a0d72cf",
"assets/assets/popup_add_normal_icon.png": "737ec290471f789e58b8e1e10cd45789",
"assets/assets/popup_search_normal_icon.png": "03bba07b9a6aa16f19ac92f11aaa60a3",
"assets/assets/popup_transfer_normal_icon.png": "025386434049891f4c905af04c7e13b7",
"assets/assets/qr_code_icon.png": "0e3c09c30fa77704c3ef1622fc4561a7",
"assets/assets/register_black_icon.png": "91d7cee01d50a3fa3e12ca026e03bd96",
"assets/assets/right_arrow_icon.png": "3b6e1869ac79ce4644bc6b83890c6357",
"assets/assets/search_grey_icon.png": "f0e9baaa0048c3daa2e58369d162de94",
"assets/assets/search_icon.png": "501c088bf114958e87ca413c6e3ebd93",
"assets/assets/show_eye_icon.png": "176d82aa8ca7d7def3f24f045f99646d",
"assets/assets/speed_icon.png": "592361b5b9668e8784d17dd682580b36",
"assets/assets/success_icon.png": "2d1ca6db06297c167a206d40d4d20b45",
"assets/assets/terms_icon.png": "ff29a57700ab3a4f7f0df0b028d2b035",
"assets/assets/tournament_category_white_icon.png": "ded05b1f2087c610e46cb307bdba9c6a",
"assets/assets/tournament_event_white_icon.png": "e670dcef623aab80e946c7c55fab1b82",
"assets/assets/transfer_icon.png": "bf0232dc032a1d8550f72dc10e5ffa18",
"assets/assets/trash_icon.png": "1cf691ccce511a1ee0cbf49ddeba0e67",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "80189d3b5412f7cdd61ca5f300688d8c",
"assets/NOTICES": "3085fe249e9b680199869804ced91721",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "95460dacf9dc5397725244c209085453",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "f53fdad3c2d8632e2b9b81453d3757ee",
"icons/Icon-512.png": "c41191a8818ddbab8f1714478240d4d5",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "932fb1778d6318332d9e47a047c74ee0",
"/": "932fb1778d6318332d9e47a047c74ee0",
"main.dart.js": "bb1ebc64d5e5f19ea55fa0a7c79fbbdf",
"manifest.json": "fd265ff837b40150e6b2dd5fa2609bda",
"version.json": "36cca072544aa09cb717d4db1e492d5b",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
