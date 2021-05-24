'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e52805421d316ca06dabbb3e4c305bc3",
".git/config": "0355f002ab4bfc8c778414ced863ba86",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5b8f7670da512a553342db55bfe2adfd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "df5ef538e20be16a416bc38a8a06fef0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a731811c0caf0ddb2df073c95066e7f5",
".git/logs/refs/heads/main": "87270d7c32aad9bd09ecfd62349a506a",
".git/logs/refs/remotes/origin/main": "e07dc556c48d7c637f2fea6c95458faa",
".git/objects/02/14293b4b2631a44a7a4c1451b773d0a54f9567": "aa4b838557b66b6995befdcf3698f148",
".git/objects/03/a936ec264c4a4a9a7884239b344ae0f2ade991": "52815f7654a03787473427d6c29d0afd",
".git/objects/03/acd4ed115280ffb599a1b75f5b92eca7b51d93": "5dc5d9eaf1739761d65215e4d36e30cc",
".git/objects/08/1239cc193c562d1e01c5b8dc66ed069cac0bf0": "c54948b2af47472a29681cff51526544",
".git/objects/09/66edc38cbc86515d82be70e528d28eb1e11975": "7ed45927b17d340872c88a383b0b4d22",
".git/objects/0d/7adec35ff8935a34bd661c7c91694bdec6f1c6": "9537c538b38c5d2cc81c0c233dd3f80b",
".git/objects/12/97ed8e3c70c480a11c2bfb139f55b3f181a632": "8ec428304b0d0e76a866f3951c8d6f27",
".git/objects/16/c23306872964a1fceecca0ea2d8b7f56ab16bb": "cfed19ce7b00ef423f6c602f5cabc7e1",
".git/objects/1f/66d25c314cc7a8a4831c259da37ba9256bccaa": "d89a6cfc0248be3cc3a1d47dce563c67",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/c91cb3a500b586139617dfab851cbebe36fb24": "1bdc4c4462c04217f41c0ce759a265c8",
".git/objects/27/7d8858b4e83c0bc8415e8a19975d2cd3177bae": "70250332458855d08fda48c0534b1f35",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/d7aa51badc3999ffc86289dbde6a53be7a9145": "fb54389dbc2ebc1593f166225d431703",
".git/objects/3e/95a48662c5b1afcd98b9814832437d71e18a25": "e10bd474791536b240520f7b95d0fe33",
".git/objects/42/4fcf3bade161867c95828d8d22c09b955551b5": "0d1c2ff8c87f6e8afad36626adc79c14",
".git/objects/45/c5952136791e40077b3809b166125bcb50fe02": "b174855fd2da97eb1619f9a89f6b76a2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/f80b1974105a24e7d91a8cdf8cdf21e149fd2b": "783e0ed5a258507e74e7014bd031f6d1",
".git/objects/52/77648e193389544cbbd5ea7e91e1e5bbb11de7": "32330ac17d8314fe9f76b2a42dedcd92",
".git/objects/53/ddfcd90975b3abce76ade919588ab45083d6aa": "fc8df642a878604dfcbb12ed747c5c1b",
".git/objects/55/0a8e6b6bbb19d94f3d97baf208702e71725e66": "c5bc20826fc357a01b083deb2c704fd6",
".git/objects/55/34519dd6cd0f06842c0b17023946b6c70d2fed": "f4bb1ee803b731ad897f814abad8d654",
".git/objects/5a/686286695df0fe71a248d6165bbe49f32b69f9": "7607f8549058d18b24a994bd395e57bc",
".git/objects/5e/6d172224e43594cdda7e90839232d081ceae4f": "d0c00ce158b94216d39ba70fe6be006a",
".git/objects/60/77f639e9686111cef026a651f4fc1e47620ffd": "d4a6c59b17d6c37d97127160b6a2c8f6",
".git/objects/63/d4e86b6a69fd6b31dac168a144e1be0268a584": "ce100acef8679be63b622d0097cedf47",
".git/objects/65/134301aa7846e8bc7edbe8bed776f011be8ec1": "58ddd36aeb5cd68e57d91b91adb06f1e",
".git/objects/65/94f9d4472f179cbc394088be0d2eae6e01b31d": "c7b886a0c7f96eeff25da0b5d1d0d2f9",
".git/objects/6e/46dcf879d308b72939d85716cb5d4399715d89": "d54e67a060fe8d57400889996c04f28d",
".git/objects/6e/ac29d4821a3854e8798fe12fdccd46161cbe5f": "91d790a42d2efa24dcac7bf7855a596a",
".git/objects/75/599897189ba147a343ba3f5d9f249b84f8a09e": "cb65e4fbc91f3f74ee623e59feafc0b6",
".git/objects/76/e549ac2ac780f4544e86e6db84def0ea8ae008": "ddbcbbcf3247b64f6812733d190e335c",
".git/objects/77/56a5060f441eca5ae31e828678c493ec8bbd06": "608073ec8053b0c46edd79a919c9d7f6",
".git/objects/77/f1ca198a59462ac882647a061225ce0a9a3f32": "5c3333bcb5132afe59691b00242a1bb5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/b22ef7b8e00c62308a4b8e17259d203f4bb341": "f09a97f5cd4d40a36eb0b0afad3cd4ff",
".git/objects/7a/d681c706719af50d9810c18d8bb2b91dac472a": "15d5fff2fd8938f6138e626099f66760",
".git/objects/7f/68d95d9d6becef3d025de9c15fa311fcafbd67": "86ee7718715de9dc496c0fffbef24ebe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/fb7bd15150f4c4a7f6a332de972f9ed64cc8b1": "1d0b3cec161309bfa3b0949637f92973",
".git/objects/91/41d3d020bd4dd1155299a379f350a38b1ee951": "8a52fc724431c8ace9905528e81d020a",
".git/objects/98/3a0444526d22691aee168bbda480325a38f5b9": "7b90559678e6ea01b328ae4c9cbc8649",
".git/objects/9c/c550c3584bf589d71b4e2734c6188d616d81f7": "d830d18de97d55254ea52f92894de857",
".git/objects/9d/0a692c115865d9be308c782f9d925e4eb5ee83": "4a12251cc55af5536949b97441e9f80f",
".git/objects/9e/d6ad669a5d719784038fe321f2decbfedc45d5": "3a7da1fb0091c530845fabfc2bedd2a3",
".git/objects/a0/7638614c2ab6121635417eb3c69b08184fbdbc": "a6f92b0b77b3aeaad3e6d4edc2e0c24f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/689db24f358652a587de04c326db09b1376c9b": "57fb9b166f8f7349dd6d0a8ee76260a3",
".git/objects/bd/0e8ba9efe3caa8df366edfb7bf7fd9925f156a": "e5efd6d1b48c09ccc1c1d22a6f759368",
".git/objects/be/cb14833e62692ab544d0168479a6bd4bb9b054": "6a1261c2a77f5a0cf40abce9406dcdea",
".git/objects/be/d6c0104e0ec24b6904aa8311d944e0a5977df4": "746d0b377ab421a702cdb9b71c768e18",
".git/objects/bf/3c83e989102e6c7e75bca792421b944d9c5694": "ce6c0b93b67ef73d9e0a1e3e15db66c8",
".git/objects/bf/9aa6589113c02d4a13eae2eaf61a9dc7bf0ada": "43ef292ff01a464c1c304f4b8a24c285",
".git/objects/c1/8d72da882178253caada1080b621b3ac77ed4f": "8eb90f8ac93579fa3531612f829e9aef",
".git/objects/c6/3edf050d0f7fd4c4f5e4b804760bfd46273699": "a3653d1d90459e9afb7cea2b192b3973",
".git/objects/cd/182f2f01a70daa06d9ea61e83a7dec14196023": "8c9d28e303fc65c49c70cd2ae23d5836",
".git/objects/cf/8145ca6d5c6979967a7de464e160202466a42a": "31d098cbc1e275ee058802912fcf853e",
".git/objects/d0/a3d00428b192648d220c559f2fe5dd7d043113": "063b65b76a8df9eb6210874669a7dbc1",
".git/objects/d4/3a6f2ad4d9caf0cfb9486fd98a4a3d14e40e86": "5b96545ef6025629f03b92387f1b2760",
".git/objects/d4/b895ef81a230dcc1aa0d95895ff1f72d8a06ba": "fe45e79187b38b28ba653c3de5cbcacb",
".git/objects/d5/c4b731370be0de529f1115f6b14e53c06ac862": "4ffec2d521362f299197b65c14433a03",
".git/objects/d6/2e7419baf3a4334949bc0abfb182d37b9ea62d": "d66f279caca99376dd03f548230e64ef",
".git/objects/da/7267a45cb2c495d325943913557c6f5dffe5a8": "928a3b73f0e7b601a99365642976ae16",
".git/objects/db/3eb7b7923f86bbb47e770a1299e9ea0ce1496a": "0aa31652721031e97b08da83ddb12c76",
".git/objects/e2/1a713f41334d1251a525b89b071e1c8266868b": "d198e29b7313e2f2da50ad2d92c26107",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b87f94fd5a774eda3b6b07d5d7eff529ca5ede": "1b0dab28b1aa9bc55ce51537de6dcd46",
".git/objects/e5/c94b530c0d6e73102400c3ce36a82eca1d4aa8": "7bf512903db38c552b494aca6fb74a5b",
".git/objects/e6/723ab9f9c3ab567f7cacfa767d5ad5a5461511": "f17e3e51cb54a8add283c94852e383af",
".git/objects/f3/aad781953cfa67182c4c04c58e63ff0044ac0e": "daf5a4f131cd2e3b6afbb0e10184401b",
".git/objects/f6/453eb5a3e05274145796ba7549e54c67c3f7f9": "72befc4ef6076d512ed68564b5703c71",
".git/objects/f8/1ace3bdd2fc2848966d2493d45982b71a32c80": "3768771a986f6fa6354f2b596010813d",
".git/objects/f8/3749b10ee322027c71aefea261fa81a3a8bf56": "994ab54a41d183cabf37e763d37beed4",
".git/objects/ff/5c4379bc062b204f2873cabf4b4a41e78f542e": "52675a2289f43c329f8c6ec2b93c84bc",
".git/ORIG_HEAD": "f22a1b3fc327e87b5774bfc7d9a56aca",
".git/refs/heads/main": "32a9bb55cf2be32c21d4c8794edcc0ac",
".git/refs/remotes/origin/main": "32a9bb55cf2be32c21d4c8794edcc0ac",
"assets/AssetManifest.json": "2d4fd686a39d44bdb526ce9a7278726b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/website_logo.jpg": "0bdc733ee57eb82abbb1c5866b1901fc",
"assets/NOTICES": "66aa4fb52e1340b245c04a85252cba07",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "47f78b0bd8686265d62fef84bf9988ae",
"/": "47f78b0bd8686265d62fef84bf9988ae",
"main.dart.js": "a0aaeb622ffc4ee58cc1e9eb84ca4c91",
"manifest.json": "7df758569913c5f4b1ad4c3faf331c51",
"version.json": "f80ad0c1fcdc2d76594e8e959abd3900"
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
