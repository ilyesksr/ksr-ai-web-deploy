'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84ca4decfffdc0ce6773f4768a82c62f",
"assets/AssetManifest.bin.json": "e415606c90b1e6069b30f52f7304956d",
"assets/AssetManifest.json": "8aedfd4e674d8ffe8075c65a2cc5f601",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/icons/Arrow_Left.svg": "1f3d717fc716e2a0777c034f952a685a",
"assets/assets/icons/Arrow_Right.svg": "b90cc7f2ed655f0f76040d013fb43849",
"assets/assets/icons/Chat.svg": "208ae7b0c052dc659616fd4c81201c16",
"assets/assets/icons/Edit.svg": "84ff936caead372f7d1ebe4ea322704f",
"assets/assets/icons/Explore.svg": "2acca2d51e09c7b54750953a8791fcf6",
"assets/assets/icons/Explore_light.svg": "47bb3d99b7eb0307f7a8cc518cf4fefa",
"assets/assets/icons/Filter.svg": "dd476c1f8a5dcdc6822af890045a8dfa",
"assets/assets/icons/Filter_light.svg": "32684fc9907d3756bc6da685a7663050",
"assets/assets/icons/google-gemini-icon-monochrom.svg": "f131abb6f00038f8688b3b265e2c6d67",
"assets/assets/icons/google-gemini-icon.svg": "e6fb2cbeb2e04a07cea631da18183c40",
"assets/assets/icons/Google_Bard_logo.svg": "00efa6d5e2bda6a29e9016f4bff270a9",
"assets/assets/icons/indecator.svg": "1bef38f13134ae7587bbe230a2352b63",
"assets/assets/icons/ksr_ai_icon.png": "845432dc3aed7bdb7bfb1d4e3bd8e9b4",
"assets/assets/icons/Logout.svg": "66b46785f61eb14b324d49590c3d5b0d",
"assets/assets/icons/Logout_light.svg": "4fcf75a90705d056614e747cc01dd3c7",
"assets/assets/icons/Manage_Subscription.svg": "df736a29456048ba3d437b70d75ba0e0",
"assets/assets/icons/Manage_Subscription_light.svg": "bbdd49ab9ca6635fee866fcd29b7de6d",
"assets/assets/icons/Microphone.svg": "707ad80d84b84c2c483ca5fcfa206e55",
"assets/assets/icons/more.svg": "acefc7430a47ac1352cc02a8304a7879",
"assets/assets/icons/More_light.svg": "747d5ce8b791c44597c06877877ce1e8",
"assets/assets/icons/New_Chat.svg": "43d87bbcd51275010c21e9bebc107deb",
"assets/assets/icons/Quick_Assistance.svg": "7c528b03812a42616981d791e9a9b9af",
"assets/assets/icons/Search.svg": "2677ba251ad6064479772071075d2fad",
"assets/assets/icons/Send.svg": "8c95242915ab3ee51423e0eb6be4ec4c",
"assets/assets/icons/Settings.svg": "391e923c4641cc24dbc296d99222a66a",
"assets/assets/icons/Settings_light.svg": "33fb155b332835db53fa21efa9f24d8a",
"assets/assets/icons/User_Avatar.svg": "f8786895111f3aaf9a39adc36c18a729",
"assets/assets/icons/Vector-1.svg": "10ebbf638184fcc39b7dfd7488ead47f",
"assets/assets/icons/Vector.svg": "51239d8e03beb3951f56f2813152b651",
"assets/FontManifest.json": "23095103a5d8368da44e16f2ac7cbef5",
"assets/fonts/MaterialIcons-Regular.otf": "630fee9b348e1fd89cbf6854d11565a7",
"assets/NOTICES": "c0ecf9dc6a6033fb87f30f68f358aaf0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eafdfd1fe143602951db6ff91b4e5b4e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "967c09b3a211c916071aa3ee33b55de4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0cf24e40172448a091d7f028c4f76c39",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "e9eae2472ea745810a5237b70d5fab63",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "99e9eafabc552092017d00b2fc1ab6e2",
"icons/Icon-192.png": "ee6e6a4c1ce689e6ff3abe2960afa438",
"icons/Icon-512.png": "11774584985017521db614f861e740b3",
"icons/Icon-maskable-192.png": "ee6e6a4c1ce689e6ff3abe2960afa438",
"icons/Icon-maskable-512.png": "11774584985017521db614f861e740b3",
"index.html": "c9768a73e7b8838ffd77eb54815166e9",
"/": "c9768a73e7b8838ffd77eb54815166e9",
"main.dart.js": "90fcc259d21b0d6edff815997a568335",
"manifest.json": "1d6f3d80c1f80c940e7ddf4cd505b6ee",
"version.json": "2a45f15fd6e696f895a939466bebd9ff"};
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
