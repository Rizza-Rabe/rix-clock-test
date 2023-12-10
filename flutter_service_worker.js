'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "419019e611c59f11d6f58420a21d01d4",
".git/config": "5645f20b057fcabd785dd645b44afda0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a3b8fe2f2470009fd9dbe3cc8c5b5ae1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b761cbb2abc71516d6ca300b06581721",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b67eb4fbc8a8d73305e48a04dc8d4a19",
".git/logs/refs/heads/main": "e04024b9ef1e04017f05a1ef4a7d8cab",
".git/logs/refs/remotes/origin/main": "f2ef58cd7cc07feb195186ccb30799ec",
".git/objects/00/5639bd120fc57ee2464ff5859e0e52c2b91177": "07e27bf1f3f621811add449939de7bc1",
".git/objects/00/767ecc10ef9d309cc6d43ffb94c4a30febac6a": "5b097544b628190b2f0aeea98f836560",
".git/objects/01/d10bec4f1def5878b0495f850b5870ef8d750b": "c171654c227b20d596f7b179446bd0f5",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/479650d875de40a3083f019b52a5b6844a59ef": "690fb56ecc2ff5c6e4b127cfaf3d5dbc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0a/d9de110e98ce0167c7be24184ab27fe6966945": "6fec639c592d9412fbd6888fde38c4f4",
".git/objects/0b/7e72c84276ca3c7cf86def3500d7bc518e7b7d": "782ce436ca894041a8cae371cba70eca",
".git/objects/0c/0c469ac5aa2aaff42638849eff002c6f98c27e": "dec5fdad8100fd83691ded0ac7c1f0b3",
".git/objects/0c/bdda6b3b715e83e0b73f5537c5b027aded6d33": "9f2e404cc922007328815b61d423260b",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/96284724c89501d537c0d0142003d8568e5e57": "3360ab2c0ae4d8877b5e6bf206394580",
".git/objects/0e/332c4536e8141aacec96463717fb3c4a298b70": "0d1d7fbaca76c545d0370c0b9dac4329",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/130a4e56ce26fa88e990481b265645df00f835": "fdd6e3ee90387490c39c362c967b9513",
".git/objects/0f/1312fa3d8394a4bfbf52af079d9d4b392c8d73": "a1d46474304d30fbe0e08006a531104f",
".git/objects/0f/9085f425e3674c919d75bef81bcb3d62304cd7": "5428bbb7c31cf3aae8e12bd85aa38de0",
".git/objects/10/0b27f74f6498ce9cd949c8d9b826294178d3cf": "b83c66af0b841286f56b837a570437f2",
".git/objects/11/dcefa1076a040c41467143c69f73da14c3daa3": "102c849e5df5a2341d101e7fc73afb9b",
".git/objects/16/13484695524be252cb089e1f633c91d2a47cb7": "48eb05a61e518eb93d17529fc0103d7d",
".git/objects/16/38cb45164c5f98faecff69a3adcb13918283cf": "d298aff2a8b8f3db7035c807cc203f4c",
".git/objects/1d/1c09e359de509c8665a870de2aea5564b0f170": "5056767cf5bedf35f825e9d8b198b873",
".git/objects/1d/31ed7b3972b60c0ebf2f277ee2c0fb7e56299a": "f4207a85c98522833ad12faec7826b93",
".git/objects/1d/5b23fe946ad234e3d0384ee5ad164619f3d22d": "0b1138a2ef882b9d785711b335d136cc",
".git/objects/1f/059776cacc79b6d12cc82be86237991945af32": "178f1e0b7b9f6e1b2264c6da08657b74",
".git/objects/1f/ab1ec05aa792605dbb50e9a3c4a452e9fdaf63": "f4bda588136129fba81834c235d932ad",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6971ac369371cfc14295ae42c5aa30169061a5": "5bfefc9cd143e1ba819df9baa01d4b07",
".git/objects/20/95b3f7f5ae023253667865533ce0e67e2efafe": "fb88c7dd2335015274dc63c357451a3b",
".git/objects/22/df24a79678e02241342c2641991edc252d3390": "3c54c16a88b28929069332d8d7fd02e8",
".git/objects/23/3641cd207c956670fccfc9c10627e6c1ea00dd": "025b92010055e047b2dc7ee40a91cb68",
".git/objects/27/4f9db56076d090b93bac6d072d28b4eb73fd54": "19c19d247b3ea679757d974f7d06aac6",
".git/objects/27/907b8913f7351faa0e239eb1c3cefd4ac9920b": "c40f408476c1c0b29f1dc7d8e06f606d",
".git/objects/27/cb516731e3c5a654a7e6e4c9a23f3b06d94031": "b3984924c4f6f4c6ca51d2e94fe63835",
".git/objects/28/a46b0e04887ba98f53868915403e8036fabd6c": "0274bc342c8ef3e342d458aadec3ea29",
".git/objects/2a/24d383bbe9155e9b38b87dca2312756720234d": "15dc11024e2050a8213834f12a525179",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/9b7235487b8d410a09e78610ec6efb2c379910": "ae31bcdbd2d075f96dd207dde2d0e0b0",
".git/objects/32/c0452c1753660c1cb0399e5b0702599428db95": "7f427c7ef4ff3d0ef90d3f4aada03fd6",
".git/objects/33/62c62dc6c81c91cc29a8defadcbf50f9e5c665": "25fd4e47743555ac31b4663868d63a3b",
".git/objects/35/48352e6d7f9cb7f6cfa35c85a8ceaff91a6c14": "54d5d1829c0b78d198a41ae7b91b3e98",
".git/objects/37/6587bdb80a3786e64fd8cc470d07032c1ed53e": "a87de2f8b8f82dbdd20194ece4441d71",
".git/objects/37/ccc7c52531ad71f65d341e66c2f87a80576943": "621e3f1de841a83592a12fbe9cc9d9f7",
".git/objects/37/ed92b7287eee54446a324c8b8f2aa61247d35e": "24b02e25794205daf413d09140e3c185",
".git/objects/38/a49440b6499826eda4cbd3a1d5c76ca8b72f6c": "d3e4b429ed8aa80359e200537ffa439b",
".git/objects/3a/44300f3c1c6ccca95e35084acf4ded173b8f45": "11376b8661374dac0f6cb8b3d68af349",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/ad6b04421b5883554d072cad31bed6f9b98c10": "2b2c40625f745541ddd1a35f583ff5d5",
".git/objects/3b/35edb84ffd58d443616da2b451d1f5a932162c": "4ff90777227c2f831efee8774bec5481",
".git/objects/3b/6014fc2977e640dec5d6ac27c4a5d415cb5554": "0e9317c7c179438e91762347370d7724",
".git/objects/3b/6246a82b48906e2de4b981798f0214b8b5b9cf": "12c483dda8821f4a31c0a33871199487",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/50aa9bd44083e9ae6fdf3f13861bb67ff047f4": "b877358283130bacb1c5054ccd396231",
".git/objects/3f/4b6411c0279c8870c1a1b941598f359e5e0f95": "df0806bce6c34cb1b213d3e0f5be44c6",
".git/objects/42/37bb2f77bafbd5415ada4f5c1282fb2046416f": "60668af0de0a84c980f277447be4784b",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/103b41d44e2dd267be2876233ede16ea547f96": "d92576a18aaa342f0d37668954b1b758",
".git/objects/45/4b84f6676443c37e4ddf35d86c90125edd4af5": "ec800493087c45140341d1c4a1f86298",
".git/objects/45/971392f076d96c64d589b8b540cd2073fc8ea3": "e7f139042162512a16969fb2997c1fa8",
".git/objects/45/caa9b8b5687325bb45072cc3fbac0e83d591ba": "b21851b5eb728b23d5d29e98f9f33d90",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f64d61064c62026217d4a4f1e3f148a2b98169": "3651d8e44c95e17df0c1951dd1993717",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/a36f6912ac6dbdd35449200a91d29ed090c717": "50e4bbf16e3c62a6ef96c62ddba221c5",
".git/objects/50/e4b698e23fbd50a1de4ae761a124f670734518": "72006a167702dbb08c9a4f576f031c49",
".git/objects/51/3ee77ffac7f46a25d63ecd0f86621a82fcf7c0": "35379efdc197694ca610b63093531339",
".git/objects/51/fcb2962779c4203fe5bcfbc3ba462ec234774c": "988a35e46c78854100cdcb752747aab6",
".git/objects/52/99313e3f8c6e103371c17860c11fe5192612ab": "b5fa5232b17d384838658613877244dc",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/8de84eaafdedd3552a5c0edd0432b6e839b9b6": "cb2d179271bf91030d460882b2b594ce",
".git/objects/54/6026432fda220aa5a3c3bd95c4eddbf404f4be": "96bb55f1211b95d8fa4f90f2266ff9fb",
".git/objects/56/c216cd5edcf93ea084b254948939290b998f54": "c9bd5681ad387fc2a79f0a5792d1d9ee",
".git/objects/59/1c9e2d03262fdd66861e78f570db54cbd27f98": "4c68aa08b30a53538f2ab2e7c9eddcd6",
".git/objects/5b/11054077888448311fd59e8f57158a08f83130": "143c8989d0a08679d01a0066a995c8d1",
".git/objects/5b/8bc0bc6c7af5eb4082e850aae0c01fe68c86f5": "cc81703fa0e5c913f11efa2a065f298f",
".git/objects/5c/d5925797e952e43099d15b59ee1a64da308835": "2b15cd26dfaa947b29f244e960be6f48",
".git/objects/5e/2384f120a90f4ed1e9393b57a2f8bc36eef4aa": "0df41e053be06082ac19e4f8cf550b84",
".git/objects/5e/a30154ead30488bd8f542f40a46701d501bf20": "14689bd90d1c291f261298f172fe5903",
".git/objects/5f/899f60cd53350638f3948670b7ae70437e07cb": "37512846912e37f69924bd6a96e0ccec",
".git/objects/5f/ef70cf32582e76b867bed7f0594b7ee7399a5c": "69ef6cef1107969162ccb364403b0bba",
".git/objects/60/73588b64d9d5c714bc860fb9e9e95a573cc4cb": "7ca094fc43df94ed5ebaf4683b1191b7",
".git/objects/66/74ff76f7124a6d15091386f528a7a3a6dab4f2": "eaea8993c68ee7fbc105be3615b3536a",
".git/objects/66/c945a5c4d562b2a457f8a077e87fbb20ddccee": "86ab57a180a74961926e7a492f3c6972",
".git/objects/66/e1efa62a9be1e6e4b901163538f6e7047948f6": "c3f28ce060b520056ba947f934b54362",
".git/objects/67/6f3413917ae698292ec5b2cfe8528e17272b8b": "210e6ab88c6346f6fcda6a968e12b9fe",
".git/objects/67/b8628effc6bca8b3e798e8da99015cbe59730c": "d0eb519e80f2ce50eb5aa79796d3ef5f",
".git/objects/6a/0d549f0271783d43c357dec1736b093d56d9e8": "1a1c906da5c7fb897e6837fb407ca4e9",
".git/objects/6a/7e10703833dad2283f9ff60b0aa61d02cff36d": "9d1d674e523bb5eb7764d247d79a41aa",
".git/objects/6c/e9bb7ea4724302c8f6fdbae5126a04486b7b0b": "0d2319a4c095c4ccf1f47f5d410651a1",
".git/objects/6d/ca70f1ae6bac2243d1e4771f23eca2460e0d04": "2ee589e610a6c953c37a22d94871bc82",
".git/objects/6f/218ea1b72a4d6117d74c8993670ee9d8c104fd": "40e308079fdc0643044d378706c96100",
".git/objects/6f/3338ec7274073f96fae15958ac25e93ce49c33": "f4e9f27eb690e917b2f141229e0ab968",
".git/objects/70/fe855852357958d6e4247759ad05e07de926f9": "a646352b7a49d262aa101586a4cd0355",
".git/objects/71/d29fea0d9a4771efde5a2b8ac533fb27fd9390": "b31d84a7caad944615716e383fe90918",
".git/objects/72/c85e0aba2d99d727bbdf98a03ef52ac1b6dfbe": "63e7c6b7a68a660a861e06cb55f32cd5",
".git/objects/72/e23e7503b61e02179fd56f95d16b42d6e75947": "bd2bff0d002edf1d1397a13617df24d4",
".git/objects/75/b82e2589c251e1fe16b8cf7a4cee8fac66d723": "250edbb12b87cbcb0b5a437e9a94fd16",
".git/objects/76/37bcf188eae57b67050f5dc22a0e33b7060042": "273c656ae431ac593b02c045a9fbee11",
".git/objects/77/7935120816fdb562c03e5edfdecaa04e080023": "4ae57752b9836ef93dcc520e281b3570",
".git/objects/7a/974dec10a2e4b827a510feca5fd46c98dac389": "9bb732880b07e61cdf666f00f02dcd8c",
".git/objects/7b/6e876cc7496c566699b3f3f477d65f09b66681": "f1b46ffdca3c1c68c606fc7ee6e5525e",
".git/objects/7f/ece2f3c675f5ecd48cca89c2a1c7b3c540e825": "d97ee4bac8056aa808b2500251213de1",
".git/objects/81/2fa0b2819dee4cfb9ac939cfb32356410f840c": "6ca4044054e422960ff8779e39460904",
".git/objects/81/68cb0d3aabd18679f59f8e5dcbf8bd0d392ae3": "ece775f7f0950b9d10009f84a4e43f3e",
".git/objects/82/7f57416ff10086ba89626f179692a0ba660866": "9d3edbebee717ba3c1638bac04f30f72",
".git/objects/83/7d95a4a9b99df82dca8ad153e7421930151a68": "2fad5a8ce6f649f41061d238b87689ef",
".git/objects/83/f4c83f3d58f9443890b327e556a8ffbc02b168": "b0d41b6f55387950c44a2dc3e09fb213",
".git/objects/84/8cadf4bc2b0f1876e89623a7cf6d71ea093b77": "1702ea83ff7dc5579f407fcf970bf7a6",
".git/objects/85/9eded815365c50a4363e81f35047dd6b30c43c": "f390d94a025efe0fcfaa1fcf297c6943",
".git/objects/87/bd8dfdf8c75eced94314383e4aeabc5243d4c3": "72fd666f29cca1f438dcc356ae48c482",
".git/objects/88/18cf613bf54ddaddf28d0c370af7f33e31c76d": "376152234b3c8b1c352a4a218fe243f8",
".git/objects/8c/001d514bff64fd9d8ca86cf2aaba056e9dbda4": "888d700a3c8ba56b1df50b4ad8bb8cde",
".git/objects/8c/84e9df0b60f333e17ccbe703427f16ba268619": "2524f018403a92187a18ddb21e9bd621",
".git/objects/8d/5d0b7c568fcd9a13482142e706723a88e6173c": "97a54260e36b6740d3f1b657f69dcb2e",
".git/objects/8e/840224d122a2b460e7c549c3c060b8ec1cc64e": "8a0729f41b96c60936f220ab353e9db1",
".git/objects/8e/fb19aa34fe381bfc598d8f54159c8bd2bcee0b": "29da109fcc06bbc9d1b7aa167519518c",
".git/objects/91/e735544e46f713560dec22d8065aad0a368901": "7b1b5c070539fd6b28a725c086f11cdb",
".git/objects/92/eac45e5390e22b0bbbe9238df0287470b14e3a": "11da5634628ea26758abef8ebc83ca27",
".git/objects/92/f739c7cd431a2a7a5c4c7f484d8c56fcc3f04f": "5c514b84325f3765cbc8937f7bd6ae1d",
".git/objects/94/4fe1ba29f4507c3452a7be2deea06970af33b9": "8c5823d12ee8d100f987f4f0e60908c3",
".git/objects/94/8117cd3f9adfa188cd7d861788c798b807793b": "adacbbe192437926f1f3ef68b1dc3696",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9b/2b7d7273129ae6ba63dc65b8e837a91e266043": "d393150468510484a002c76dc3695580",
".git/objects/9b/ad7e2db4064384d0bbf434d3b08fa9a19da2cf": "ce0d3e4687228596cf5d95f1e007b27e",
".git/objects/9d/135ce9c73b5d79df00e559825d45ed6f2f7d7d": "afd999c5f1bd5e28c7d28c8c26ac3f7c",
".git/objects/a1/7c5ba6ce9f669c4056ae37ec9b9472caf0574f": "34b9aa457969395d7a33dff2c383d57f",
".git/objects/a2/46411f5200ed6b91add62b554affe8621cea38": "49e461b127fafe37b5a5e8afc10ee435",
".git/objects/a2/9bf095493be72dc149da70506d03df7cfbecd3": "45339a5accc07a1f14ca8cc8e588fc91",
".git/objects/a3/d56410ca10167a9c129c27b537ec3181f0fbec": "1a3c76c36881c280c6b4a97c4595eb0d",
".git/objects/a3/dda6733a11b71b11b19927ff0ae15e1ad51acc": "9e59363a3748418f73b36912ddb9a67a",
".git/objects/a4/70e607d42a594a23c1bc1aee7257a194774b83": "7a096bcb132dfd79c2e3fe76d76fb998",
".git/objects/a4/7ea7d4797c7958d1e457934533e190d4031d41": "58788954177f182b1582e3c22f22f44c",
".git/objects/a4/d31177c1b690b72f9135865a7da00931fe2c50": "438b739a5f023d5c7415bf2c1ec76589",
".git/objects/a7/35bb9e9ce0c97e4aa94bf5c9ad989215ece780": "95c58fd02c47c523015ae75e1f2b4349",
".git/objects/a7/faabc86efe44e578145ac14be40a82aeaa640b": "dbecdf99a0f665b9f390c063c6d702f5",
".git/objects/a8/3d94bfca98f7e60c0c28069887256f2a130f8f": "0810c70d21e4e204709aae39b2a40287",
".git/objects/aa/97d9ef830c2f7c556ad59b0f83b196fe8516fb": "aea97f1a8a039c25a625ee57c5688a36",
".git/objects/aa/97fbbef0c2598563ff4e71f6fb8a5741bafcb9": "ddedd0f5414c31658eeea9593e031df2",
".git/objects/ab/e76898a4707baf4f4be8845f14adc7ddbc881a": "388d3ef954135f6a6e7b63603c2152cc",
".git/objects/ac/aa440b384cef7d3d624330eb5c515125f4969a": "e34cb584e51c5f82098274f33ac699d8",
".git/objects/ad/77eae70639c5e4de79081461d2e52ef8c5bd04": "ed59bce16762fa4b61346e5f0edd00c1",
".git/objects/ae/0017e7700e7a6447b92f347ab8d66462224918": "bffc63e60dcb4df7b0e8a7efb685e922",
".git/objects/ae/b5cf522ba77a7b746e72f3078c4fef27a69ba8": "d231751561f787e8ec9961a09ac72af9",
".git/objects/b4/ac3781cfa434622114f632db1f6fd493107e81": "94ef8d2838d218d3aba646cc4905d45a",
".git/objects/b5/aeeee3b8e3fa0ecbedf43424d8a3ca5c58da4d": "242ca2a0fba33df107045e3064bb36be",
".git/objects/b5/daa4557d4994383cc03278ebbed6d6fe8fb3b2": "3e6c3394c427be81c985652e0bcbfa10",
".git/objects/b8/c719d2f385180122b59221a512a0d543b1b418": "e2d09943f99294526b6f337d8f84e750",
".git/objects/b9/fc8866e4f671a1cc802ce1e585155bade0f8c0": "0709492c744795a5f7c5a0e1cacc4ac0",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/c674f0f4eba95e4a01bc6ac4d4f9bff5091bb2": "6ccebcf42a8963cebc61f9d509daa849",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/c1b5dfae23560592cf4a00b676cc0acc3c2229": "a9bed380628e21587580ace52d7297a3",
".git/objects/bd/7f481441cbd2d858ad29a947ddb388bf8b004f": "940d1854f5968cc55ad51379e4a96cd5",
".git/objects/bd/f909b6c7a88554c5d29fb7df0a31e34d4851c8": "cea515c6f583ef2e1665bb59de53a2a4",
".git/objects/bf/d4d943f05909618b32b95d9f755188448f8cb7": "b1bb83f85cdd25d580d2a652050eb925",
".git/objects/c2/2d1e7c359cebcb49efc586e17215f690385820": "5c7c646c801aa8e6747ea0b18fb5a6ac",
".git/objects/c6/95fa051d527ae08d427a61fb9f4578f61ce6fa": "2920d81c167a23754a86bc58ecc42420",
".git/objects/c7/3a7c12eecaf7ff1dbff9f0187740030dcf859c": "70b990ffbda985c64ba90e556d812a9e",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/7f7969a420017c30cd5f6ff6531a81b3c4a7ff": "54c1e50e2d10f491b7e8bd6594e65326",
".git/objects/c9/41e522c0c030bae4abeb3f6728bd10b4a749b7": "ddcac705a7a89d3c32e722b368c9b353",
".git/objects/cf/e4424c2295f8bf104f59e59c8c90db7757a356": "3c31425e0f3a8700bc16e032af582620",
".git/objects/d1/07d29f1ba405b2d9e992cd2c04877227b00027": "82cd860e9127988a93f29a3723c4812c",
".git/objects/d2/220cc9273c1a8de3d8c4caff6400fa3f6f4f13": "f33269c8662d5f0adc6fee447c81579c",
".git/objects/d5/ccfd317adb3cbd65eeb9b088d879147000b813": "7cc1c99cab5b6830a4f2e511e20d41b1",
".git/objects/d5/dd2a7fa8ac0f5f95694d49741ce9d0d3ddb470": "a5d8048aa1c66cbb086ff67dbefcfdbc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/4d90df1f01934aaed2194790b31185cff20876": "d0ceb474f468c1701265674dd77ca5ac",
".git/objects/d7/9eeb6017370f3b1ffa25fd3a22dfabee57ffeb": "78319a27f540bc622a5e14be214f6a6f",
".git/objects/db/21bd2dda242ad9f19228fbce28257993308735": "8f41e94ad8fa9a76c1e655cc78301737",
".git/objects/db/337eab4841b6279441b0e7269a6bf60659b54c": "ed48212a8e1621c354f58315c287c830",
".git/objects/de/d72a55cedbbd5c9d3ed3e4abceaf62a7ea4877": "d460520679836814b8102db49eafccf7",
".git/objects/df/5761fe47f2a21b4979e4d0a9dcebf2c32b8df1": "08f0e5a63519a82627e86b0f71a4cf2a",
".git/objects/e0/0688e5794a4134d6e8061d264761ea0408c066": "a0cd24816ccef04f9d3afc7c4fd14d4a",
".git/objects/e2/b0a85c6ef4474674f638c927ec21207df6e932": "29a55d0896e334eb83b8142c340c9cd6",
".git/objects/e2/daccd3fed110a1d5711aff83edb250cb645487": "a751c701525ef57fea7fccdaa32de4f3",
".git/objects/e3/6994cd480a8167e95a4c3f2d45cb820ba0108e": "927e479e5aab1201e4ef2a9d748f8c6a",
".git/objects/e5/e34f0736debf5b0c743595dd51f1fb278a8735": "17f2b48c9199f24e171d34e30b6308b1",
".git/objects/e6/16ef0d8c00caf45c17675b864399a7b20756d3": "610050d8e6a2b7c90d498cf75b6a4ed6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/08f3814ce194e8fed7be92031c02ae55c47fc0": "baed53abbfd0a6edf797813268aac735",
".git/objects/e7/cc605b1113d128fa9a329ebf5cda281a80ea7f": "6a144b3f45a7749a68840e07944e3bf7",
".git/objects/e9/0f4f3fe2407ec586466410eecaa3042840bfca": "ce8d46f9580824689f31d141e5f5d17a",
".git/objects/e9/57d5c41465a0aecd63bcb3ef4264e9275faeea": "f8b32b969d83ba1e6faa9cb2e8a7f7a5",
".git/objects/eb/98e881f8dfc1fd772ccd0e2344f42e956ad53d": "cd85d0526ecd3ee6938b40e32e32a482",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/5868d2c96ce4f4b5816c640cebcb6854332f51": "7af795d1000922fb541bdc015063bf28",
".git/objects/f1/9da2559c8b3ca441cb38e978ebd0505a6c36b1": "83cf1a3115b73858c6c583f3d81b67a2",
".git/objects/f2/24f62ea8f78f76e3ec92b7bf56775ccbf7a4fa": "805270570dd6040826e0cb24bdd8aac9",
".git/objects/f3/caf824ff5c6d2795b677a84b6cc6b6ce3567bd": "62d3df34fdf54707ccae529880abeff0",
".git/objects/f4/87b000aba67e1ea3d67613f26acf64323e4810": "606afb3b00c45a3993654bf4373f1938",
".git/objects/f6/040eafff3925ab7f7b367041bea2963338f53e": "2e18758bc24978245cfc3f9f7a26868d",
".git/objects/f8/2104776895a3a177f65fd36ab212f7433038d3": "f78d7eae724d1528bdf93e30f791f17a",
".git/objects/fd/e2eb46eeb264a17ac295f42baa7dfd3e4acbe8": "2b512140d2ec6a012ea620a3f13021b2",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/ORIG_HEAD": "2455a6ad0c22b8e6f158bf7ff2cdc1e7",
".git/refs/heads/main": "67b977d5fe754d10163fe771272c0de3",
".git/refs/remotes/origin/main": "67b977d5fe754d10163fe771272c0de3",
"assets/AssetManifest.bin": "64278b8bfb07569d63f40a876ef88453",
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
"index.html": "06cd7bd43e692825cccacb1e02737d6c",
"/": "06cd7bd43e692825cccacb1e02737d6c",
"main.dart.js": "7b266dd9eec5249a80dc7563cf8444e0",
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
