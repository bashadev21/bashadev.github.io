'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0071bb40361fa3b1eccba353e93ba9da",
"version.json": "df8269df6dad60ef4f429ade6a8c2540",
"index.html": "d38ccc70efce269ae4d34e57d858bddc",
"/": "d38ccc70efce269ae4d34e57d858bddc",
"main.dart.js": "2d7ea01de2388deb432b2969006e513d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d51a47322c0fe630839a2f9a030d0dc6",
"assets/AssetManifest.json": "6d20cb213ab9fa45601f8cfc9446f7da",
"assets/NOTICES": "fc18781b7347bcca4fccd825956674a4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f050f9c3d885a2162188e2fa409ba52f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4385c45821189fbe421c4ec84711fa8d",
"assets/fonts/MaterialIcons-Regular.otf": "d5ec19a78584ccf11c5c573d6df66fd1",
"assets/assets/svg/background.svg": "17bfaa2589c5eb33b53f4191a1fc1709",
"assets/assets/svg/edit2.svg": "388aaeac9dfd79021514bee9708b07a2",
"assets/assets/svg/circle.svg": "1343f7cd52e7ca39b1b0ab018405b5f1",
"assets/assets/svg/person.svg": "098494bb140bfd6aaff8ef8ecc34470a",
"assets/assets/svg/rotate.svg": "b8036ef9359a22f5779fb85d8cba7d3d",
"assets/assets/svg/down.svg": "cc6f41e98e8e047d26d1a20eb091084f",
"assets/assets/svg/heatmap_right_button.svg": "6a0659489066eb85d033382d7f69b26c",
"assets/assets/svg/back_arrow.svg": "8e2fa4d100dc6fc801bfbaf257980f97",
"assets/assets/svg/recap.svg": "ba34dd280e1f775e7a040813fe0b263c",
"assets/assets/svg/up.svg": "8cd0579e2dc62aad0d529e1d39cd1e79",
"assets/assets/svg/lock.svg": "fd29d50a7f891038ea98113b0dbd11d0",
"assets/assets/svg/health.svg": "75a43816167a773c964cbbbecba9f00e",
"assets/assets/svg/bills.svg": "11e0b0601ab1ac6591b2fb35c73f9399",
"assets/assets/svg/store.svg": "91fff3d4ac66ef92103a74d13d331c09",
"assets/assets/svg/invalid_ip.svg": "3c6318f7dbe12efe2e14b02d74924609",
"assets/assets/svg/archive.svg": "3e472369748bcc294cac149f516fb1c9",
"assets/assets/svg/arrow_up.svg": "f890394667972913c885953e8b4abd18",
"assets/assets/svg/heatmap_left_button.svg": "9a140b0b39dede01874e028aed32f95c",
"assets/assets/svg/warning.svg": "a7df97cd1105f3f2b5f86cfdb1b98098",
"assets/assets/svg/info.svg": "85a9db695cc8dd4b105e5fd456f18584",
"assets/assets/svg/logoname.svg": "00541273222ff2d0e85fd23e1d3f34e6",
"assets/assets/svg/close.svg": "22a7b5ca1a0126a2d95133afc97f4c92",
"assets/assets/svg/people.svg": "107f0194a4c9caa2c9b8eb64889a6f8c",
"assets/assets/svg/tango_eye.svg": "17b7856a2c2503ec3360bf2d9c578347",
"assets/assets/svg/buyers.svg": "d0f8bc991149a97aa70a9f23f090717b",
"assets/assets/svg/closemark.svg": "22a7b5ca1a0126a2d95133afc97f4c92",
"assets/assets/svg/dwell_time.svg": "acd0d3b7f5762077275584d34b0480cc",
"assets/assets/svg/down_time.svg": "680486d229f90e5613199aa9896d3f01",
"assets/assets/svg/edit.svg": "220f1f2d76495f30c28b53ee1141db5c",
"assets/assets/svg/chevron_down.svg": "de7170b7902c73124cf29644f6089131",
"assets/assets/svg/warning2.svg": "24e07e000fb2f025cf420056484d280b",
"assets/assets/svg/playbtn.svg": "e889d0ccf72ed33e3cbe58b8e4387149",
"assets/assets/svg/zap.svg": "73b7c2387d7149ebaa365ebaa6dbce80",
"assets/assets/svg/person_dot.svg": "13a325294aa7a24761964b25825e7af3",
"assets/assets/svg/filter.svg": "f33e997e62615f124ce7fb426d2a3283",
"assets/assets/svg/directory.svg": "325f114b18c788865faff894b89ab7a2",
"assets/assets/svg/calendar.svg": "88593a4b26e3185b2fc2fd2f8813c4e8",
"assets/assets/svg/folder.svg": "be24abb81babc5869c02f78914c4733f",
"assets/assets/svg/nodata.svg": "ca3b1d502922f9b10bbf3f4709197d9e",
"assets/assets/svg/foot_fall.svg": "d684c1a701ed574bad009a4e1a0ca92b",
"assets/assets/images/store_chart_double.png": "0ef654dfa4755b4b8f1ae814bfa837d7",
"assets/assets/images/2.0x/store_chart_double.png": "fe8d2e117c4e4d8221578c1f0e3d7b30",
"assets/assets/images/2.0x/store_chart_single.png": "c5d6ccfbe2f2fd8a1240ae73b8dfb0a4",
"assets/assets/images/broken-image.png": "298beb1d0c7abe554f3079a87be10d74",
"assets/assets/images/broken_image.png": "b9de81e5a8e02c2167e4a71e1abbf58d",
"assets/assets/images/3.0x/store_chart_double.png": "459c5cd2466037ffff65e991bdfa9319",
"assets/assets/images/3.0x/store_chart_single.png": "84b28796793e0209aa1f008e5f98d1da",
"assets/assets/images/logout_icon.png": "b90f8bcc0c125ec235f14566383a851e",
"assets/assets/images/store_chart_single.png": "52b46db2b7ca6cfc858d57fccdf0eedc",
"assets/assets/logo/logo_white.svg": "e8942315d863774f0fb46315f13cd7d9",
"assets/assets/logo/logo.svg": "c91df4424bcaeee8504d0087261ad9dc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
