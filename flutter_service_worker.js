'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1c9fd7f667f0acc698c51d2e29e08cd7",
"index.html": "aa4465dab32df0ff1c9f340f973415c5",
"/": "aa4465dab32df0ff1c9f340f973415c5",
"main.dart.js": "9a35d5f77f206bd20a64cf912f6ac98c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "14533758d5adebb52c270151b0335f00",
".git/config": "ecaecefc626339f9ea0c682cba945373",
".git/objects/3e/f1c54b9c31f08107d5e298a3f929a92d0edafc": "44855af807b285421866d0562d79ba7f",
".git/objects/57/f2cbc98a586fdb87467d98a2cef12c8c8873d1": "db31de380e989c1df989c52a7e7428d5",
".git/objects/3b/4df511883fea2ab2169bf663b0b99ac50e05a8": "bc314d9428781e7cb126fe1ff06bcce2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/58/7b2629e61ed2e2ba43652e2053b78cb51dcf27": "f22a3e8d9191dcaf5695f9e56aedb9da",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/a4/06a1faafeec27081ea99be2d3446ee3e7ecc67": "70377073dd86832dcaa5fca2b8d1d28b",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/b5/6abe9caf093a4a22ff5531a6ef7968daee4a6c": "2040d971d0d85c9d3537366380a1600b",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/d9/f1157b02271af19ceac559e31329b2fc1d0f68": "1193db8670472ecd55343b129bf157e2",
".git/objects/d9/3eddcceb34dc68ba814826463752bade612881": "6b20e395e65a75ca57290d5a4237fbc6",
".git/objects/be/797acc664c6dd1814fe7959d66b846aebbce4b": "49d3b1f200df48e1977fae39ccd1fd4e",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/b4/387c91444c46833fb32253dbbad8ab8cf147a7": "09cd0395899f34aee0cab72f8a6aa6e6",
".git/objects/bc/a038f4bfa97364ec974a53750f11f1894aa5d5": "b67df682a5f3c4c51aa61bf6ea390b14",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c7/ea41e1a76b08821146032b1e8fdf9bedfe3193": "a0aead001b16b2ebda8d947f9d9434f7",
".git/objects/cf/a330ff07f213d47b28c3fd82940b61b01e6e79": "101a967a611a4d4ece4952eb62234bed",
".git/objects/fe/d738a5dd76580221d62adae9f9e6f96f2630e9": "a27e0c1c91da13cc2e40dc59dbac82c8",
".git/objects/c1/a887378516a601b2a3c54b9ea895ac14d29365": "e65f22eb15fae241b0cdd5365a95bf5f",
".git/objects/c6/467d6b387d3b8af978c94652035764beca4754": "6ad82be0ebf5a8a7cfa78986f9032943",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/ef2984e5c8f7fe71be72745b458aa1a99c534b": "438901e1abea1210d8c5714405fed566",
".git/objects/73/bd7855de6846cf49b1dcc371fcb4c73dc3b898": "b175e20c58e858163278200ad77d6670",
".git/objects/74/c3748c8d1370992c49003ea59109928e959987": "4b201de83034f0b915bbe5f61dcc1c7e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/603da68fdbe8d47a1d34b649d13d6c7c619be1": "f717b581d8842159e2ba481e0b9eba9b",
".git/objects/4c/c28e19963b291b2a6557f32fc6b4c02f6c9594": "15bdc923ffd9903306b3393ade2763d3",
".git/objects/75/2916c865d33d56beefb5981995dd605d6692f1": "8479e477ea823c399573edf0f9317984",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/2f3ee4383b0f4797d09d7b2bc64815a7d601f4": "405a12d1cd1d490abf815b43243d7937",
".git/objects/07/f5836216706c37e8dadb708ae305cc4590256c": "7ba4a0747d602c89cf49d5dbe628a0e6",
".git/objects/38/7fc097387cc54e59411ed9f257a8223c2ba941": "06524a9259aaf9c6e8a17811cfcde6d0",
".git/objects/00/40c672d60b5b0f3bb8c1e2ec76428790f6fb50": "e310ccb40ac49634bac36ec02a7fb2be",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/91/87f50d3fb33f40d5a57c9e7f2569c624f2bdfa": "80f2f4de6025b8585dfa84e0378c859d",
".git/objects/96/4cba93fb89fef0f52bcdc07599c63f65fcfdf1": "add782db2dfbd94bcc416677b0293682",
".git/objects/3f/aed3e36a4c4e82d40978e61566d1e933c61f42": "f23fcfb77ae2158d16c217f8dcda95c1",
".git/objects/5e/2128a9cb96ecaa5781d9a8817efa72e8467cda": "a917f767bc186ed7e92afb7ebf232fe8",
".git/objects/6d/3069e0ef15d43c6ba212227a7475294f953b27": "25479201a9af2939fd8e3cee6e1c98ee",
".git/objects/01/f667fa712ee5ea61d7e69cf16062d40a43dc5c": "60cf4d4db7044b1c8fab0e7dc8052fa4",
".git/objects/6c/0244b5d0e4d07483636ccba6ed47072ee04d39": "31547d8cb8a7e1823b0576954d53fc29",
".git/objects/0f/f7e1c06fc10bf1b450a3aa30edafd409d9aba3": "93ac40e00bdfbe43eeacd5bf8ce83ced",
".git/objects/90/310362e3b87198139608b83c52b0ff62bfa8f0": "f229028cdaead9a965dd706b0972659f",
".git/objects/a0/19c4c122055cf44718a9d3d37c30f78b0ab25a": "8fb329b5f2822038dcd2292e111bf1fe",
".git/objects/a0/d97ccb053b51750e169aa3fdc6d7176d500431": "d4b0a908345cd1b8c8e19f1aca9aea9f",
".git/objects/b8/f26177c6a9cf8cad2403aa1e7868a441393ceb": "3f73e40a34ca334ade2b9fac945e891d",
".git/objects/b6/9d5b865f99262f92b30a82b4166c7eee128ef4": "105c1940364a13b213c90098592bfeb2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/25617b0eb6ec9e098abeb9f8152158b962b229": "7a6bf9f5a382f5a8b9c4daaa455cad00",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/514169f83313bda8b34a245f3f4106f6d568a3": "22efd1dcc6375f97be5d517fd5434fbd",
".git/objects/cc/09250fc6d766fdadfc24ab8c8b8488b1ee953d": "5fcc63f45214452b06b1a60d7f6b40cb",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f7/24089439abe6c6ad571daaf81cd06d67911b62": "98c6d51af200fd493cdb6ce3b8ba889f",
".git/objects/ff/36ee4c9641ba41402295ddc7a182eb93a497ca": "fc5def51e8c19150a409456e26f0131c",
".git/objects/e9/922aabd7768458dbe58759986454c4c9b5edca": "48e46a3bd89bb373b148d58eaba0e0a0",
".git/objects/ce/4e5bc19686474d608af5d20d47a48ddb2b4163": "1b584d3d8f030e85a441bf3a2a7a1192",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/12/f82b3e3496a3b329bb3a92fbc0975aa4ea0a2a": "0263c8cc585da50f3817fd8ecda679ab",
".git/objects/1d/509eefe1ab39ebab230ab7ca4fc4dc413d42ee": "46e650676146e8dfb5bba7d8bd985193",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f96980952d9c68cf32b6324a50c9f8cc",
".git/logs/refs/heads/master": "f96980952d9c68cf32b6324a50c9f8cc",
".git/logs/refs/remotes/origin/master": "42d76beaaa3ce28f8eaccd8cdeb7dcda",
".git/logs/refs/remotes/orgin/master": "1235fb2d46b19c0a38c245bc94c72a3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "4b8540f45e2027917366fac678d4cef7",
".git/refs/remotes/origin/master": "4b8540f45e2027917366fac678d4cef7",
".git/refs/remotes/orgin/master": "4b8540f45e2027917366fac678d4cef7",
".git/index": "441f5e6da6d2a259c5fcbbf3a6dd25ba",
".git/COMMIT_EDITMSG": "bc6ef3f9a1ed9368b499ce89c190647e",
".git/FETCH_HEAD": "6b989e135955bc8cc1a9591faf5cc3ee",
".git/sourcetreeconfig": "fa318df1e16bab9c401e60945261d272",
"assets/AssetManifest.json": "3c904c4ef54c097d61bb3d6d850dd471",
"assets/NOTICES": "fd344e2313251b143ab54d2cc85add10",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/images/bg2.jpeg": "8197476180a4b35ef9b548cfcfb5759a",
"assets/assets/images/profile.jpeg": "06e0b07de7148e90009d4e4df9d58982",
"assets/assets/images/should_have_bought/1.jpeg": "8cd023fd8680d56b430675af1fc580c2",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/notion.svg": "0e708866e33d7c53011bc7b68127165e",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
