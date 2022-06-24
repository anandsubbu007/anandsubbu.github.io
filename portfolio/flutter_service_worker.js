'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bf7e12ca99dfb3db7f5bc28ab1e27f62",
"assets/assets/fonts/circe/Circe-Bold.ttf": "22f16521a7d16c7f8342680cf30b46bd",
"assets/assets/fonts/circe/Circe-Light.ttf": "9fd3216596f21252abbdbc053769134e",
"assets/assets/fonts/circe/Circe-Thin.ttf": "8a6928dabfc92fdf4fa5fa4f53534cab",
"assets/assets/fonts/proxima_nova/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/proxima_nova/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/fonts/proxima_nova/ProximaNova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/images/anand_subbu.png": "687dd9cb3d2352c4faa58e9ea48077ab",
"assets/assets/images/bord_infinity.png": "f6ebd25bd67f556984cbb62f306c1203",
"assets/assets/images/data_science_spec.jpg": "699c03fc5ed2b81403b59cabe03139e4",
"assets/assets/images/deep_learning.jpg": "21f47d43e30dec43d1a62feda0eeda21",
"assets/assets/images/Flutter_cred.png": "75e1391281a1cc46c429cd51b40edf01",
"assets/assets/images/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/images/project/app_direct/dash.jpg": "e85cc00d497628f810b68ba22852a129",
"assets/assets/images/project/app_direct/drop.jpg": "1363365ab2c47436178fabeb240a08e5",
"assets/assets/images/project/app_direct/pop.jpg": "64d6d7babd47843c8c85fb3f035a3062",
"assets/assets/images/project/app_direct/share.jpg": "28ebb06b638955ec7c83866a572d1ec3",
"assets/assets/images/project/billing_app/android/bill_batch.jpg": "efab12fbbfcf318a0274b938c046cf4e",
"assets/assets/images/project/billing_app/android/inv_history.jpg": "c3267c80379a6e6d38ae93ae16983632",
"assets/assets/images/project/billing_app/android/order_details.jpg": "a6a138e06c10b8f4d91263a45964b770",
"assets/assets/images/project/billing_app/android/order_entry.jpg": "5cabaaa53d385dceeb247c1c2ea1472d",
"assets/assets/images/project/billing_app/android/party_trans_enrty.jpg": "b9c694ac4e6175afaa69f07ad4f7ef5f",
"assets/assets/images/project/billing_app/android/party_trans_history.jpg": "d60a6b1c98cef7084514c1d91556fc84",
"assets/assets/images/project/billing_app/android/party_trans_history2.jpg": "92ad0f79a81d3b8a1cabc74f45b700f1",
"assets/assets/images/project/billing_app/android/product_group.jpg": "b9ffd554a37d47c66e69051ac2acb356",
"assets/assets/images/project/billing_app/android/prod_stock_req.jpg": "e0d88cf790574c4ac91ee7f0a0779215",
"assets/assets/images/project/billing_app/android/sale_note.jpg": "58c57ba91fa6554e51fa1bc7f11b84e3",
"assets/assets/images/project/billing_app/desktop/app_login.png": "c76f95b8ba5281366b2bec02423c7a98",
"assets/assets/images/project/billing_app/desktop/dash.png": "e1d173599beb0b4cc367cfd36f1ad7aa",
"assets/assets/images/project/billing_app/desktop/entry_page.png": "eed4bc0c3b43b414fbf06e3875e81832",
"assets/assets/images/project/billing_app/desktop/invoice_pdf.png": "20590ca30ae85d077cb82220a6e767fb",
"assets/assets/images/project/billing_app/desktop/party_trans.png": "c5660a8b172af5d9f81c540ea198d324",
"assets/assets/images/project/billing_app/desktop/product_report.png": "eb87e815079ecab0d9900e77b67ae6ae",
"assets/assets/images/project/billing_app/desktop/report_dash.png": "1f150c8d11479ea4b37e2a68ffaabb4f",
"assets/assets/images/project/exp_gen/dash.jpg": "44b776fe8040270bc1abaa14fa3ccf1c",
"assets/assets/images/project/exp_gen/module.jpg": "875091050f1c0746c8030523473348b2",
"assets/assets/images/project/ledger_app/dash.jpg": "160344fb6b5f41477ced85e283a96e0d",
"assets/assets/images/project/ledger_app/party_chq.jpg": "0c3e94232b9957c7c9bdbb000216d0f0",
"assets/assets/images/project/ledger_app/party_detail.jpg": "b152661e2ad5f2525402c746a0a63721",
"assets/assets/images/project/ledger_app/party_list.jpg": "1582cab91192ba5b43fa3a7718d3a2d1",
"assets/assets/images/project/ledger_app/party_trans.jpg": "819811d1d91551885ce90cb475910655",
"assets/assets/images/project/pawn_shop/android/dash.jpg": "c3d614c5a16084d8c6bfd17610893e0f",
"assets/assets/images/project/pawn_shop/android/login.jpg": "c68dab35ca7b0dbe16efb6ec2da49339",
"assets/assets/images/project/pawn_shop/android/parties.jpg": "75e29182570c0ba3f7e6cf81c0ec8caa",
"assets/assets/images/project/pawn_shop/android/profile.jpg": "a65928461701c3b71007de2ff0ffb5cf",
"assets/assets/images/project/pawn_shop/android/report.jpg": "5c8d4495fd2a9e5a895125f4ca5ab792",
"assets/assets/images/project/pawn_shop/android/scheme.jpg": "a0038d34d86b46c1e2d38670707eacf7",
"assets/assets/images/project/pawn_shop/android/ticket.jpg": "77f5fff55995c7ce79bc2685cea421a5",
"assets/assets/images/project/pawn_shop/android/tickets.jpg": "cb1cd1087b91fefc37590539a7724346",
"assets/assets/images/project/pawn_shop/android/tick_detail.jpg": "db19f7b9347052c1c9a84c03ac48397a",
"assets/assets/images/project/pawn_shop/android/vou_detail.jpg": "0cfa824583c9e51a8f336a32ed946bf5",
"assets/assets/images/project/pawn_shop/desktop/dash.png": "bf2cdc3c57e777e09b585b51fb19e32f",
"assets/assets/images/project/pawn_shop/desktop/report.png": "f51ca4c4793795b8264c7d51db83123c",
"assets/assets/images/project/pawn_shop/desktop/ticket.png": "3562a62fb5b5b31c74a475d7df4ef90d",
"assets/assets/images/project/product_catalog/pdf_1.jpg": "d13093999accbfcbefb274247d5456a2",
"assets/assets/images/project/product_catalog/pdf_2.jpg": "6f8d423f2c760ac38071e0e193736046",
"assets/assets/images/project/product_catalog/pdf_3.jpg": "b4c5ae71f7a6c95ea2ca3524bc18b189",
"assets/assets/images/project/product_catalog/pdf_4.jpg": "6a309287bf18ec414144b65490c87b2a",
"assets/assets/images/project/product_catalog/pdf_5.jpg": "62723adea125d0ea8523253dabc94239",
"assets/assets/images/project/product_catalog/prod_detail.jpg": "aa093089c6e372bcd2107a689a26b8de",
"assets/assets/images/project/product_catalog/prod_list.jpg": "bf844d96f259c43925da043b6b8d2b85",
"assets/FontManifest.json": "bdd5ce6f199dd9c206f745254bec9bfd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8998eead18d796aaf93e624e71a830d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/logo-192.png": "8472e146aff1512cd95ec82bbef134b3",
"icons/logo-512.png": "6452466ecd0b39a157a8d08513fa2f2c",
"icons/logo_2-192.png": "c8546a6439017a9fd7ee754afa885376",
"icons/logo_2-512.png": "b8a51b668b2d913897df6b8f94cfdd3b",
"index.html": "331a1d87d35c02ad30a44cc3c2607420",
"/": "331a1d87d35c02ad30a44cc3c2607420",
"main.dart.js": "4293b2acab91fb37a0ae2b76f074a2a9",
"manifest.json": "34f944bf6b2b8703b0f7455c9899d1b6",
"version.json": "2acd6787bab7012cf4fc8022abef81a9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
