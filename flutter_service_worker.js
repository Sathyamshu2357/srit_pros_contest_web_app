'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f27eb6a499e1a03ff00d40eb67492f05",
".git/config": "0355f002ab4bfc8c778414ced863ba86",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4fd518c25643b5a7e2db6e39bdd1a775",
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
".git/index": "25dd32a980051e297d720acae4bb4094",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29bfe49585381f7ecc54f59770543ec2",
".git/logs/refs/heads/buttonFixer": "64dc14627aa4461cdc21fe12776f949f",
".git/logs/refs/heads/main": "eeb874da899d2b57cf2affda34082c6b",
".git/logs/refs/remotes/origin/main": "89042c3cf7ae3cb1c56a8a4ec960b683",
".git/objects/02/14293b4b2631a44a7a4c1451b773d0a54f9567": "aa4b838557b66b6995befdcf3698f148",
".git/objects/03/710cc720f19de6999e00f39eaedd0e2217f332": "28a527547024ff31ced6b01f9f06aff5",
".git/objects/03/a936ec264c4a4a9a7884239b344ae0f2ade991": "52815f7654a03787473427d6c29d0afd",
".git/objects/03/acd4ed115280ffb599a1b75f5b92eca7b51d93": "5dc5d9eaf1739761d65215e4d36e30cc",
".git/objects/04/7ed8734edca6c17f8c32ea30aa2d61c8fd07bb": "44a9ea485db7f0dca3cb112fc1490341",
".git/objects/08/1239cc193c562d1e01c5b8dc66ed069cac0bf0": "c54948b2af47472a29681cff51526544",
".git/objects/08/6aaecaacf961cc88d1a404c9f42bbf4d54c73b": "7e8a16f3849d63a0eecd161cedd11d75",
".git/objects/09/66edc38cbc86515d82be70e528d28eb1e11975": "7ed45927b17d340872c88a383b0b4d22",
".git/objects/0c/0686693db204f190c6b3d8af7bb00588dd6f38": "34ed9e82fa7beddbbf8c4c3256cd367d",
".git/objects/0d/35fb54dac24d9760d284c99955bcc8a9c38071": "43b88fd472ec2f8199909093cd5d415f",
".git/objects/0d/7adec35ff8935a34bd661c7c91694bdec6f1c6": "9537c538b38c5d2cc81c0c233dd3f80b",
".git/objects/0e/51a8cef6dd5b5e8ef4277ed6238cc6c5afde48": "7d8fc12b46c79ab4291d2de34c2f46c9",
".git/objects/10/bbf47f41b3b3e81280c5208ab45e51687a330c": "514944847513f2aa8cac56b38a52e786",
".git/objects/11/e60d9e86b1c0f7c69312d24e6d63a717e66894": "70f4a3a112314ce57b37cd0ebcc64277",
".git/objects/12/97ed8e3c70c480a11c2bfb139f55b3f181a632": "8ec428304b0d0e76a866f3951c8d6f27",
".git/objects/13/84754dd79717ec374bc554b1b583a39200d891": "5f27be45857b510af5dc8bd9e40b7e09",
".git/objects/14/9bafe07eeff708439ed6cdb4831e515725d0c9": "daf613f4e1183c44515c901b22bd69ee",
".git/objects/16/c23306872964a1fceecca0ea2d8b7f56ab16bb": "cfed19ce7b00ef423f6c602f5cabc7e1",
".git/objects/17/930979c8101a1817bcd66e1afea49736476d15": "bcbc84e0b1807181525b19e0b4fa49a4",
".git/objects/18/147a7e117954904ea4a3392077769a7f74da7f": "05fb6012b52111e7ec29380377f4af0a",
".git/objects/19/26223548d49a532301d4665e7084fe6f318b64": "5e31bb9d29314e06cc0fb8d60983e5d0",
".git/objects/19/3d0675f844771ba5c31911bd8ea069235edc7c": "57b92c131e65ffc9a78c7d6ea11e1163",
".git/objects/19/9dd95813e7214b039b5e17332782f3b62ad8f8": "c4df93fd7158a85b6847f7492dd10757",
".git/objects/1a/817c7c446761321aa10432343c279999228f19": "9ec7ca042400be9acf8ee2641222c267",
".git/objects/1a/a0fa1cd9f4eb713b745f14b9a89a0016534b8f": "68eef9f5378c7175d43c779012877aec",
".git/objects/1d/ef37c754ea0f9391c55ab9847b6843df2e8737": "24f2a5244ef17b1ddc16fd7ce430f839",
".git/objects/1f/66d25c314cc7a8a4831c259da37ba9256bccaa": "d89a6cfc0248be3cc3a1d47dce563c67",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/9cd2c2f77a3f8a7b65249eb9b87975b8459ecd": "bc38edbe61e6d4ab4a69108d2e1ec89e",
".git/objects/22/c91cb3a500b586139617dfab851cbebe36fb24": "1bdc4c4462c04217f41c0ce759a265c8",
".git/objects/23/565c2819ef353a93124d8c9effa22d1d8c6ba0": "4dec4584a231159e47bf931669c9f6e7",
".git/objects/25/935ee6a28b34a3bcbf67391fb5490baf1f161d": "5d147a5d97eb6cccc76da1233f3c559a",
".git/objects/27/7d8858b4e83c0bc8415e8a19975d2cd3177bae": "70250332458855d08fda48c0534b1f35",
".git/objects/2a/c2b97ac0171a0f7457ed3de11821552b3567dc": "90a41cb90b6efc20c88df4d4ff9ef281",
".git/objects/2c/2a29a65410d4010ac50da7f8b1117761b0e000": "cef76dc0aa0485f8970f545773774b26",
".git/objects/2d/5005564fd9877a472b883cc04b9dd5fb5379b2": "ed434f94ff113b081c3e2a43ced3b723",
".git/objects/2f/ac51b1fcdbdc390dd584e981480074aa23d98c": "b74918431ab4eb1c2dc893b27f9d3bbd",
".git/objects/30/838ea1090ad3cdd627709aa2fba23c4d2c0e40": "3cc7188ebccd5226e486bd430f277ddd",
".git/objects/31/577f649c17902dd245b800eca7e0eb926a672b": "d5f05e70a5d97cf5b2af13dbc95ad852",
".git/objects/31/ff3c260f5fd8e21fff20897b2586f5073b61ed": "7e27d1e8e965caeadd7fb0b30f2106a7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/7f2eef522d88c8da308254828691f5e4f09c35": "2ae9ea867ab929ab2184f1c1f4f9042e",
".git/objects/35/acc66f68cf7e46315e34ca235026841ef6d973": "ac10ae399f5ed7d764e0be0a8651029d",
".git/objects/36/4d767221eb484be38feee405057cc8a9318d94": "f62aff3c7a6f3b57047017473c892d08",
".git/objects/36/d7aa51badc3999ffc86289dbde6a53be7a9145": "fb54389dbc2ebc1593f166225d431703",
".git/objects/37/bbf75d9318bc7a2d3c2619e92c31fe71cd96e8": "d8dbf1ccdce973fd049e28a34c57fcff",
".git/objects/3c/68a6c4368f3b88087066906e99d777f15706fc": "b351fd37f123e8013c59492411bfe7d8",
".git/objects/3c/80bdcc2d0e09faa0a872db7450db4162e5eccb": "8a98ebc19e65f00aa15428cded954f7f",
".git/objects/3d/2621a5857c71a0a4c06d0ba1ed469dd32026dc": "b3b2af0ad3718464621ec58cf727f992",
".git/objects/3d/6f53f7a3632ebb19579fa921c6810a8f8a7462": "27175c9c0179f13ffc96bcc6ae1eca96",
".git/objects/3d/7287053a06e16cfab683fab696147a2365f606": "2f2df3cd52c6b7a1ab4e088ff947b41d",
".git/objects/3e/95a48662c5b1afcd98b9814832437d71e18a25": "e10bd474791536b240520f7b95d0fe33",
".git/objects/40/07155f1cab8de88ac242d4203142d6a156780a": "4752c5b56b5c4c78589c369b92a7c8cd",
".git/objects/42/4fcf3bade161867c95828d8d22c09b955551b5": "0d1c2ff8c87f6e8afad36626adc79c14",
".git/objects/43/8cabe1dfe878754d198a4ba722ee135aab8246": "583b43ea2caaa0060d17cf18a6fdb861",
".git/objects/44/fe2fc3085cc942c638cadf23da373007659673": "902944dfefa5a4d99756856541a7c1a1",
".git/objects/45/c5952136791e40077b3809b166125bcb50fe02": "b174855fd2da97eb1619f9a89f6b76a2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c74b301c172bfb00de5334103a7ca3335b9090": "1e85f617fb1abf752d66d0624cdd3622",
".git/objects/46/fa86c7e1b0627cf352255ddfdefe04a8094123": "8267ad48c6b42c41c5bfd6136fec39a9",
".git/objects/47/2f22f6dc98f75b8151909964ca2bcd19d56af7": "e32a81cb85db91c3dbac0b79e42f8dd7",
".git/objects/4b/0f4fef2b0b9e9af72fc281de90818d26eb5bc1": "0859846f0430967260e040e01cabf73a",
".git/objects/4c/9ef0e4ea0630f361835c08f905ba7f1fb897f7": "80f31519f40d73776fbc83434c19ff7b",
".git/objects/4e/242a7b57bb9469512dc8b7ff70ce5f5be634c3": "3f4d458bd001ffecf2d5687dfcf74fc3",
".git/objects/4e/31660a918a29118ea6cf8f4e4715b6c0bddaac": "604c021b346dd87660d6f217d3d0392c",
".git/objects/4f/f80b1974105a24e7d91a8cdf8cdf21e149fd2b": "783e0ed5a258507e74e7014bd031f6d1",
".git/objects/51/6d97b249a30cf2265bc5f08c3c3c3a373a0797": "29e6caee2603a293b377535335a9da16",
".git/objects/52/19e3904e9d5966048a0646af39701a9b2712f6": "50805a1e3b0adecc71fcbe21182d7853",
".git/objects/52/64c7f50a75f8f146673f37d8c04930d3ec04de": "161578521f12b1ef109dbc978577ed94",
".git/objects/52/77648e193389544cbbd5ea7e91e1e5bbb11de7": "32330ac17d8314fe9f76b2a42dedcd92",
".git/objects/53/0ed0f0073ddb248564ec2a5615587c4ccd4b97": "4f543f850186c2f9802ab033bf4cd846",
".git/objects/53/ddfcd90975b3abce76ade919588ab45083d6aa": "fc8df642a878604dfcbb12ed747c5c1b",
".git/objects/55/0a8e6b6bbb19d94f3d97baf208702e71725e66": "c5bc20826fc357a01b083deb2c704fd6",
".git/objects/55/34519dd6cd0f06842c0b17023946b6c70d2fed": "f4bb1ee803b731ad897f814abad8d654",
".git/objects/55/89169b8b87fcfe246cbe11c9ffa878c3f71b78": "5039294e531b9b86828c144b92dd744e",
".git/objects/56/05ebf92b347233dbaf545b2d6cd8d365691aa8": "1bfa22515abb2fb37d92eee6369ec4da",
".git/objects/5a/686286695df0fe71a248d6165bbe49f32b69f9": "7607f8549058d18b24a994bd395e57bc",
".git/objects/5b/0b3d218cd3a7d6211bf0087fa9fb15c27c80eb": "7bbdc1cbd46cda78ab4ea5094ba782ff",
".git/objects/5b/a504e673f504ce832f63316ce1bc2b18ee7ee7": "4aba2f5bb9f65b1a64f7d3e23c116826",
".git/objects/5c/03dd9eda1d76ebccb34a1d313267eb66cc2571": "2cecbb08bc5c08c5bece7c31259e4fac",
".git/objects/5c/49185952ab9d1bf88fc60013944a4a1d58b996": "93d33ed60fb3f9dec7ed40c64a703680",
".git/objects/5c/c693404cf91dd576f0ac31b48a82368b50edf6": "041cfb17271e95fda931238526785803",
".git/objects/5c/ed8efd0abf8b0cff5a678887b4166c208d490a": "b3a6f4dc71b3e5f6a7fc14ed1175337c",
".git/objects/5d/7769f85cbb192c40248ce995ea3b72a22afee3": "e50c0dde187d38011c9f0b5e35c2471b",
".git/objects/5e/46f4c3b9eee9946ec6ea7ee296b7d12f76929a": "bd4cc936a2481c2592d29b76d8943ff1",
".git/objects/5e/6d172224e43594cdda7e90839232d081ceae4f": "d0c00ce158b94216d39ba70fe6be006a",
".git/objects/5f/9eb583d99d45b699886d04133b71b79270a5bc": "73997d7b746c847a7eb1e857e204f4c9",
".git/objects/60/77f639e9686111cef026a651f4fc1e47620ffd": "d4a6c59b17d6c37d97127160b6a2c8f6",
".git/objects/63/d4e86b6a69fd6b31dac168a144e1be0268a584": "ce100acef8679be63b622d0097cedf47",
".git/objects/65/134301aa7846e8bc7edbe8bed776f011be8ec1": "58ddd36aeb5cd68e57d91b91adb06f1e",
".git/objects/65/94f9d4472f179cbc394088be0d2eae6e01b31d": "c7b886a0c7f96eeff25da0b5d1d0d2f9",
".git/objects/67/0739193714b5331fcd2b5053be4dedee9af754": "d78d2c16769331ce225c6bbb325e97f8",
".git/objects/68/61e8562ee6a87b2be9cc9da17af506867f09e8": "08f8d98ab1393a4f74a294fb8f1e5d8b",
".git/objects/69/a2d3c404d91234e7ca92464d465a4c6b78e4fc": "2ecbd0b87d44b1777d1f270681fc1870",
".git/objects/6c/12f758e7979b5f5d6c54a4ec84d961b1b3d412": "6d7cdbb63b4897f1d069cf12a9e02cd8",
".git/objects/6e/46dcf879d308b72939d85716cb5d4399715d89": "d54e67a060fe8d57400889996c04f28d",
".git/objects/6e/a94ba0cf82da808ce9d41a52c0c15ba5d74995": "97c00835ccc571288a9828d53bc18217",
".git/objects/6e/ac29d4821a3854e8798fe12fdccd46161cbe5f": "91d790a42d2efa24dcac7bf7855a596a",
".git/objects/6e/d061dfcc532e30bd0d9c455be79aef72a21ab7": "080d9d0cc7c5ecff5cd32f2c61f83575",
".git/objects/70/d89565e309f41505edc96ab0bc22f9be4ef9d4": "f1156ad1c9c03c6b4fe42d159923f27d",
".git/objects/71/875f1f4caa8691a3d15f5eda744912346af8d7": "07d36bf5941d3e0c294fee8719dd8647",
".git/objects/73/1327d73d68cec34c1b91bba06cac97e0291e08": "e0c3e0bb0a89af63b86a2568c7ff0c80",
".git/objects/73/85ac580214a67c58bdbf730221f59d210131e5": "429a7d24d5d1baea316d707a6df436a5",
".git/objects/75/599897189ba147a343ba3f5d9f249b84f8a09e": "cb65e4fbc91f3f74ee623e59feafc0b6",
".git/objects/76/149b5df9e63c49b74e594e06a05039dd187d0c": "32915b68fd249a86a2f8d14152d4c56c",
".git/objects/76/63da1768f354a3933bea21fe38627bcb006a45": "75322cc169da7cd88d5cdea15ada6303",
".git/objects/76/7e9beed0bc7170899bf00b09c36968a3551cc0": "848ae958ec294871cf512c4ccd1a41d5",
".git/objects/76/e549ac2ac780f4544e86e6db84def0ea8ae008": "ddbcbbcf3247b64f6812733d190e335c",
".git/objects/77/56a5060f441eca5ae31e828678c493ec8bbd06": "608073ec8053b0c46edd79a919c9d7f6",
".git/objects/77/9e61eb13baf0c3b82033e08a73511aa53a4d8b": "892a0d7369b41ea1ae46837a3d21160a",
".git/objects/77/f1ca198a59462ac882647a061225ce0a9a3f32": "5c3333bcb5132afe59691b00242a1bb5",
".git/objects/78/5ef8f345f843be5c7f1fa7216a77157fea1d6b": "f1448058ee1a121efdc703cd747a2580",
".git/objects/78/73e4a42130ea08c19f6ef5e684da0d990447a7": "b74bcdde747f78743f5930bb3e46c4c8",
".git/objects/79/32a96e023f0d3a54b3f44dd72a5e9a4d1dcd40": "1265fd760e94367ca0b6aa06861127b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/b22ef7b8e00c62308a4b8e17259d203f4bb341": "f09a97f5cd4d40a36eb0b0afad3cd4ff",
".git/objects/7a/d681c706719af50d9810c18d8bb2b91dac472a": "15d5fff2fd8938f6138e626099f66760",
".git/objects/7a/ec5cd96905dacb2cc5492d17800986f02c458d": "252e4c946fa27b18979f358b4e900e93",
".git/objects/7b/a403e2ba8bd8c5d8ca4b0cc3b97272f57be59c": "49a0c6a2d4b26d7e6633ad72ad2b4b16",
".git/objects/7e/c1c5f5e612644f775b02e71fea5bae3a054fbd": "7a988d62e816996dbdb514ef362df9c2",
".git/objects/7e/ddae8ea6078f59c18f4c4389c3f9a5846ae132": "af8633f739b5355de6f2fad0af57424c",
".git/objects/7f/68d95d9d6becef3d025de9c15fa311fcafbd67": "86ee7718715de9dc496c0fffbef24ebe",
".git/objects/81/085f3d06ba8fd6df36a31903f4b0aa7845cd93": "3dfcb9de5faae13a65a53847dec364b8",
".git/objects/81/f0493480c50862c5374c08efa13cdc13b43266": "6aa3f38b4b44eb89a7bda5f15767b2a4",
".git/objects/88/54f0a65b294af4eed360ef5ac219213e63979c": "f4c692f019b25645f0d1c1f1f82b5308",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/df6c36ac6e90f1e8e030e2c503273538923bab": "81a43776227dcda007f1e2bfa7e71cbd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/74b4e01b0033806d4e7c71d362e66e9a8d3b03": "8a1bea2ed28bcd89e026f918d2140d19",
".git/objects/8b/77c2887c7f32495aabf3029bede971cbf98b83": "5fb7cf36598f54ae8d9cb36d54d30044",
".git/objects/8b/867f5e64f42e01f76d6eec31d33a16388af4d1": "432f3658142b6e8cef6ea6eb69838b14",
".git/objects/8c/fb7bd15150f4c4a7f6a332de972f9ed64cc8b1": "1d0b3cec161309bfa3b0949637f92973",
".git/objects/90/c8abfc6c415115412e880f2e29317d6dfce4ca": "1c0f01c6f7a9cf45adc24ee0368ea6b1",
".git/objects/90/ca3b7661444eb36be4211c64c48016764cf9a2": "8e73026031070dd520c813ccd3cea111",
".git/objects/90/dcde350efe7137145eb3d4013efe0b357db80c": "fbf5ddf6ccf1e1f33291b4818bea0df2",
".git/objects/91/41d3d020bd4dd1155299a379f350a38b1ee951": "8a52fc724431c8ace9905528e81d020a",
".git/objects/91/4720c19ea1621f6a7888d37aa8e58faed2b6ea": "e65008de8b66fd3b48764534317c7102",
".git/objects/93/8c7580e6d692eeeb4f8db77003ac6dd7893382": "e6b2d714c23dbba21e868a569ab06b63",
".git/objects/94/bd844ca80c2bfb51ebe6a8ccbfd8708a2b6ef5": "19cc5fdecb0177476246c945fbce7173",
".git/objects/98/07fec0f613913d0555e448f139279e75c00535": "67831d40be1fb1d68eac4b2d59d80dde",
".git/objects/98/3a0444526d22691aee168bbda480325a38f5b9": "7b90559678e6ea01b328ae4c9cbc8649",
".git/objects/98/c240d956c814bd5882b44d6f44b5899ca51599": "e572c333b41bfc143181c7f25993870a",
".git/objects/9b/a9b858c42741d26376e3d8ab456399fcf3be07": "3f857d57905760102bc6dcd9e15395e5",
".git/objects/9c/c550c3584bf589d71b4e2734c6188d616d81f7": "d830d18de97d55254ea52f92894de857",
".git/objects/9d/0a692c115865d9be308c782f9d925e4eb5ee83": "4a12251cc55af5536949b97441e9f80f",
".git/objects/9e/27b10d887c969cffbab5764a9b17d52eea17c5": "86e019a60463d96a911f81304e602b47",
".git/objects/9e/d6ad669a5d719784038fe321f2decbfedc45d5": "3a7da1fb0091c530845fabfc2bedd2a3",
".git/objects/a0/200a519a6b95524048d86c5e710ad33f00ab66": "5937b7c403a1277af94d45bcb493ab37",
".git/objects/a0/7638614c2ab6121635417eb3c69b08184fbdbc": "a6f92b0b77b3aeaad3e6d4edc2e0c24f",
".git/objects/a1/0974c9c55e7a76255107184924bd86391f8a66": "2efc7736aa29c8be1dfc22cfbb64f6e5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/b6465755f63f00773d94104e8b3d7f8f29c64f": "fb8b72301c388d0db25b538db7aa7542",
".git/objects/a3/e6efbf6ae8ba163b04a4c8145c1c70828d6480": "d8a5cb157722d75dcfd1ad253df4bbf4",
".git/objects/a4/baca3ea61402fe58a649a631b65218a40ffee3": "845c0658f662db4119186b361c2ac959",
".git/objects/a6/12fd7cb43a9d1641908c90d5b692caac3ae0eb": "dcafa87d79bd85369a8fae58bc3f8fa8",
".git/objects/a6/59ac7cf2ad076091e0b06eb3556e3d3fb15fd8": "ef9fb0759fc46e2a03a2c2e97c9603ea",
".git/objects/a8/223a3cff50494e64a8f4bd9cc3b3716e885e06": "0d5a316cdda499a7012d3906b5e88d3c",
".git/objects/a8/3c4d1f8ca4a21cf02eb6862a3854898b662022": "ac9f00272a2982a63fbaa37f3e052f1d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/af789c08b2fadfa558bfac7e8a65c3fde20a02": "f2a6ec946968f15a7d22193c686fe0b8",
".git/objects/b1/5ef5f6bb292ad46778eee198f1240fe5ec0c1c": "d99e4994e39b0a017d316f901cd99c6b",
".git/objects/b1/6745d76d74f0c0aca4ef912e094f6269e16012": "6b63404ec3ed21e17282e30752d44512",
".git/objects/b1/6cc32d8bcabc99d81085c5dd54519f4ed6b0de": "1134eb0013f92963504629331cb6ecc9",
".git/objects/b1/7e1435c7ac38e3bc1dcccce9ccea15391ad933": "3633d5c5ea0041ac30de086ee51a7676",
".git/objects/b2/ad48855f746aef23325556d27a394f31a740de": "aeda8ff06606e3ce95eb756f43a9ff37",
".git/objects/b2/c60884156559a164410ee18c0049c792ec507f": "7300dc01238b07636db0452a63708c63",
".git/objects/b4/58ecb975de97fd874411b64d419f49e97b9a7f": "9aa1618a141b1c0a6e7a867f58238e4b",
".git/objects/b4/a80ebfae10eb076a39dd6510cee1069e179ca9": "89b09b0df7aa10308869345bc1cf6332",
".git/objects/b4/fefd09424e20f496a519f17995aeba9c4a302d": "55a91cb0712b670711b8d502fd1663ad",
".git/objects/b5/7c6881529a2282b12efbef199224b7f1ae1704": "537ef9eaf33b4377fea51d765a8e1ae5",
".git/objects/b6/265da577cd713caae91076f20353cc3eee172a": "de201412eb8a9cf796ee56d4066b988d",
".git/objects/b6/42b2a5cc61c924bb16cdfeabfa5c3c87ffc206": "838d64d84953b2a41a4511487d3dc67a",
".git/objects/b6/982d96170cb94ebc57327d5389123352f3d80e": "01a6e908112a675563704b788dd8b0c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/689db24f358652a587de04c326db09b1376c9b": "57fb9b166f8f7349dd6d0a8ee76260a3",
".git/objects/ba/845c504778dbcecae5d5b20bf8da1be6f94300": "e3694c94c7d694a321bad2e76ab6a42f",
".git/objects/bb/4759c39ecb579963b0e7158c527647c201cb81": "08e716f5fd5efac8ce7f118cc72a2a28",
".git/objects/bd/0e8ba9efe3caa8df366edfb7bf7fd9925f156a": "e5efd6d1b48c09ccc1c1d22a6f759368",
".git/objects/be/cb14833e62692ab544d0168479a6bd4bb9b054": "6a1261c2a77f5a0cf40abce9406dcdea",
".git/objects/be/d6c0104e0ec24b6904aa8311d944e0a5977df4": "746d0b377ab421a702cdb9b71c768e18",
".git/objects/bf/3c83e989102e6c7e75bca792421b944d9c5694": "ce6c0b93b67ef73d9e0a1e3e15db66c8",
".git/objects/bf/9aa6589113c02d4a13eae2eaf61a9dc7bf0ada": "43ef292ff01a464c1c304f4b8a24c285",
".git/objects/bf/9ce868f2c19cad0d1b7a17c311f93dd672e664": "8059600914f5aa6af5c8af148d2b234f",
".git/objects/c1/65b09e983706dc84993414e97030735442d718": "926808a3afd497c0bfa7a6a0448b5e92",
".git/objects/c1/8d72da882178253caada1080b621b3ac77ed4f": "8eb90f8ac93579fa3531612f829e9aef",
".git/objects/c1/ebf5cbc1fa366d53185545c71fbd979affffa2": "01956ef5a9ebd516cbfa933c30034d71",
".git/objects/c2/a0f77e243c4398e8a25e4d5311de9d508290b9": "8ec422cb04dc8d4eb48e2e2267ebc699",
".git/objects/c4/49ee2b4503381984b835341b0777c56b76eb1f": "bebcf28d92b779dc48f5f6b9874a1db7",
".git/objects/c4/9dc99879ae176b7e9c95f749fe1412aaf0d7fd": "026a325ac0453ded8a0549f514daa1f8",
".git/objects/c5/1236fc4e83c81c6afe29626e7b243b8ffc2942": "2290caafa39299c0e1874f7e9f6028a0",
".git/objects/c5/2251f5d52dae8d56b7028c48191eff3b45053b": "96f0efe290200cc57d69d57214667e02",
".git/objects/c6/3edf050d0f7fd4c4f5e4b804760bfd46273699": "a3653d1d90459e9afb7cea2b192b3973",
".git/objects/c9/ef101c817043de036ae14e6b8c5a26a48f4f4b": "0ecf642c5f0a52b21b9d51f748c2a7a4",
".git/objects/ca/e4040e31a2b3225cff984ee679bd1988107df2": "0e37af79085c0bbdaa46c072b48a02ab",
".git/objects/cd/182f2f01a70daa06d9ea61e83a7dec14196023": "8c9d28e303fc65c49c70cd2ae23d5836",
".git/objects/cd/cfadc28a034f42739b3f04fcf10911a432f98a": "bdaa7f583fdf441f0c10f3cef9bf2d7b",
".git/objects/cd/e91ce82ab558dae61d4aee7c17a3b08a8d757e": "8ab2da1ff720e30e5fafc3be89d94c0a",
".git/objects/cf/8145ca6d5c6979967a7de464e160202466a42a": "31d098cbc1e275ee058802912fcf853e",
".git/objects/cf/c9b2e7dab9518d0bf68c2c4261ae8bc3c31ba3": "0ff7179846e25f6867012fb33d8a75a4",
".git/objects/d0/a3d00428b192648d220c559f2fe5dd7d043113": "063b65b76a8df9eb6210874669a7dbc1",
".git/objects/d3/84a88dd06f92ac5a714a485e7dc7cb185f7bf5": "44bba58b548211f8932818a16fe618ed",
".git/objects/d4/33b010027545beb666e28f960a21ae1766fa65": "34ca49ad69387e8820cf75aff0f62392",
".git/objects/d4/3a6f2ad4d9caf0cfb9486fd98a4a3d14e40e86": "5b96545ef6025629f03b92387f1b2760",
".git/objects/d4/b895ef81a230dcc1aa0d95895ff1f72d8a06ba": "fe45e79187b38b28ba653c3de5cbcacb",
".git/objects/d5/8aec03e2a13cebd651f958475469755c093dc6": "0a64fd5ad48fc5ac2b402f49ef4c5a37",
".git/objects/d5/c4b731370be0de529f1115f6b14e53c06ac862": "4ffec2d521362f299197b65c14433a03",
".git/objects/d6/2e7419baf3a4334949bc0abfb182d37b9ea62d": "d66f279caca99376dd03f548230e64ef",
".git/objects/d6/9822cbe8cc255de17ee7ab418469ca321b9b55": "c9216dbe99d97023c4f09910810c669b",
".git/objects/d7/e552a74e57dfd3373fb6e5d36a08057fe42fd1": "eafbc3d55f4020b02a2ee7ff9d81bfc4",
".git/objects/da/7267a45cb2c495d325943913557c6f5dffe5a8": "928a3b73f0e7b601a99365642976ae16",
".git/objects/db/3eb7b7923f86bbb47e770a1299e9ea0ce1496a": "0aa31652721031e97b08da83ddb12c76",
".git/objects/dc/00050c39873f325c6315c7a50a24dd5a0ee7d8": "8a06d666213b0e1f599014d7e7481ea6",
".git/objects/dc/ee1f83e59dcd63109f15b1001a3f94656fe415": "cbe3d9eb6a9c14f6424f19e02c5e63e8",
".git/objects/dd/89f05990233d6c77221c38bc54e22fd6c26c54": "69551fa316e0e389400045c7e63a2e59",
".git/objects/dd/b94e2d8117748d9ed525b2e2ceafe5cd629463": "941dfcf6b2735206878dfdda234c476f",
".git/objects/df/6af26f8c461107aa74956e7bedaad66e6b9d24": "d4f5192a3c732f0c0e3c488f19ab3c45",
".git/objects/e2/1a713f41334d1251a525b89b071e1c8266868b": "d198e29b7313e2f2da50ad2d92c26107",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b87f94fd5a774eda3b6b07d5d7eff529ca5ede": "1b0dab28b1aa9bc55ce51537de6dcd46",
".git/objects/e5/c94b530c0d6e73102400c3ce36a82eca1d4aa8": "7bf512903db38c552b494aca6fb74a5b",
".git/objects/e6/723ab9f9c3ab567f7cacfa767d5ad5a5461511": "f17e3e51cb54a8add283c94852e383af",
".git/objects/e8/26629780f6a709821da0f708d63c026d5885ff": "abceea716ad280d1c0de41bb47a94a72",
".git/objects/e8/4f1e3bc0efa7222bdba6b8d555d28175b4b610": "0252f6f415d7d877b4af16f75002ed39",
".git/objects/ef/195f4863e290696d630d1d8344ebae9ef808fa": "f0cf607de73023c9df19c3256804eca5",
".git/objects/f0/d3c35208cebb74ad8a8958fc831e57a958f89f": "1418d84604bc98c1787508eee13af3d9",
".git/objects/f0/dcfe8d58b24409a80d833263d074e20c3f3a9c": "4e00e63970de74296d0d29bd1266aea0",
".git/objects/f1/4747eb7d3e31fbf0514ba642874f0ab58dd766": "f3bb0a4a1c77ee13642ac5c516a2bf35",
".git/objects/f2/0adf90a54013f8ba1ead6acfba1e8239f5d0e3": "d3fb6a50d00eeea2eb4a7f18cf83154d",
".git/objects/f2/7bf310a05bdad302d2d5fe1f46073b75b55564": "f8053b9160d5070bf3f35196cd56054d",
".git/objects/f3/8e0d3deacbb8390dcfea6bda1dae178645c656": "18d59b22933059d7b8c71f97f935f383",
".git/objects/f3/aad781953cfa67182c4c04c58e63ff0044ac0e": "daf5a4f131cd2e3b6afbb0e10184401b",
".git/objects/f6/453eb5a3e05274145796ba7549e54c67c3f7f9": "72befc4ef6076d512ed68564b5703c71",
".git/objects/f8/1ace3bdd2fc2848966d2493d45982b71a32c80": "3768771a986f6fa6354f2b596010813d",
".git/objects/f8/3749b10ee322027c71aefea261fa81a3a8bf56": "994ab54a41d183cabf37e763d37beed4",
".git/objects/f9/5abb8b960221dd7666627870832a3b52ba3d1c": "d5767f469bf41126a466b7667a2df77a",
".git/objects/f9/a497e82b94fa6ce532c9ea3b858b75ade8cc11": "b2731ec67e979ea32a07b40110b88e3e",
".git/objects/fb/0bde14b5799606abc8db5220b0d917ee6ff0d7": "51fd3e3000be7ca15e8b083f0059c69c",
".git/objects/fc/fee5f0062e26ddbf859874590038a5c20689c1": "43de14fdd384a75a6b2c878f2ffa4901",
".git/objects/fd/594a018492da3580c5c34872f7273056093d2a": "e76dc4cbdf764420b3263d5d5273900b",
".git/objects/fe/a78edf469c87f69e063d161cb5d9d8437efb9e": "d193c30b961dd340c2349246edd4e7e3",
".git/objects/ff/5c4379bc062b204f2873cabf4b4a41e78f542e": "52675a2289f43c329f8c6ec2b93c84bc",
".git/objects/ff/617931118696b8c0376d0c8d72e187960df08a": "314714d48c49d83ede737978c00e4bef",
".git/ORIG_HEAD": "6087d829664c63927a483fcaf3195a40",
".git/refs/heads/buttonFixer": "6087d829664c63927a483fcaf3195a40",
".git/refs/heads/main": "99d5e1e6a72c5fac70e7f9f0f32c981c",
".git/refs/remotes/origin/main": "f2af27d471a637f55da55df40e25886a",
".git/refs/tags/1.0.0": "e030e8f7eb264997d605bcacfbbde150",
"assets/AssetManifest.json": "2d4fd686a39d44bdb526ce9a7278726b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/website_logo.jpg": "0bdc733ee57eb82abbb1c5866b1901fc",
"assets/NOTICES": "cfa3784b453525557acc5c333ce596b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "1564f83d5bd9df5a4a583a071feb4cce",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "173898a4ff61d88ad4a29c13ce1bb98c",
"/": "173898a4ff61d88ad4a29c13ce1bb98c",
"main.dart.js": "fe2369741b8949d7a1fada96894a7d73",
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
