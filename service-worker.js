if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/hello-world/index.html",revision:"c5870ca50107db9f9a67cf7f8bb8a995"},{url:"2021/hexo/index.html",revision:"c6178f09b9fa9fa06e1d3e83eeca7b30"},{url:"2021/info/index.html",revision:"0507afc93015f4e55ba48c74396f6e17"},{url:"2021/termux-xmr/index.html",revision:"13a55c6e2abe0538ca313cfbb35bbeeb"},{url:"2021/yousa/index.html",revision:"f6b270993aa6d94e0f6636e7e4c756e6"},{url:"404.html",revision:"6f0aea78ef25338b76b9565ff9b9d279"},{url:"about/index.html",revision:"5cc4b0f719f1f850f563a2f5899d7fe1"},{url:"archives/2021/07/index.html",revision:"996a2b42142b3db2c097b7b8a710bb87"},{url:"archives/2021/index.html",revision:"6fe3ae38e2867b809a3eb094dc2ad65b"},{url:"archives/index.html",revision:"82c26725fa74149f4220587641e1b7fa"},{url:"bangumis/index.html",revision:"e75c45a0d4cf5c632fae73a227bd8305"},{url:"categories/index.html",revision:"459f3aa48767b600145bf67837448e22"},{url:"categories/教程/index.html",revision:"1880b550f36d0bbaf6bbf9a029d33558"},{url:"categories/泠鸢yousa/index.html",revision:"92883a7b78a3f796488db7b3abbab3b2"},{url:"css/custom.css",revision:"89eaa346c9993c8f1aebcf95ffce2473"},{url:"css/fast.css",revision:"8a60e94af627b7220a352fd9a493d88e"},{url:"css/index.css",revision:"c6273c79cd964281152111c97db7c9f5"},{url:"css/must.css",revision:"949173ad70676203604682df9dc016ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"fb8acf41c1c8766f37493a2add73fc10"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d048608d543b55df997675195552f887"},{url:"img/siteicon/android-chrome-144x144.png",revision:"d413a7755cc1672dc9a9eeb6d1946076"},{url:"img/siteicon/android-chrome-192x192.png",revision:"c8ef14659023a5770edf2abc8b092091"},{url:"img/siteicon/android-chrome-256x256.png",revision:"1a9d06121a07390b03e0b92e3c926d2e"},{url:"img/siteicon/android-chrome-36x36.png",revision:"9b302de11c1e1c717107160686068b51"},{url:"img/siteicon/android-chrome-384x384.png",revision:"052e5704e6547487201856537b957f32"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3ebc50442fd4a300218c2bfb7a063a5e"},{url:"img/siteicon/android-chrome-72x72.png",revision:"547d34592800157b094594d3a75bc7bb"},{url:"img/siteicon/android-chrome-96x96.png",revision:"92cf2e34055623ee35ae1e7ce6605b91"},{url:"img/siteicon/apple-touch-icon.png",revision:"62a608e030e858ec181ca69e0edb2c01"},{url:"img/siteicon/favicon-16x16.png",revision:"1d8e59fc7a5a60a0bb23a5a330154256"},{url:"img/siteicon/favicon-32x32.png",revision:"dfab3bf6b35e870741a7f6323bf5ad50"},{url:"img/siteicon/mstile-150x150.png",revision:"2c1dde91f64ba22e898a9fce1c4999d2"},{url:"img/siteicon/README.html",revision:"d9969658ba538f91c4c03aa8aaf69610"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"806b6af73f2d38d2d730bb355fa5da1e"},{url:"img/yousa.jpg",revision:"f1447df9c3080c29c1585bd3b3f0067c"},{url:"index.html",revision:"48e53d9249642fa6d6b7a08fa4203921"},{url:"js/Lete.js",revision:"73d5302dcec253ee1ed419e55c38cc10"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/title.js",revision:"a36fcbc6618d25674a7a9499b921648f"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"bdb351c8c3c6d1e865ea6cce1cc1bd47"},{url:"tags/HEXO/index.html",revision:"7ddef8c3b6014ab687dd7e2b260c8b62"},{url:"tags/index.html",revision:"92aa58fb91624c2e3d4e0b8183806520"},{url:"tags/termux/index.html",revision:"e69265b7a2b61aee1088590761326241"},{url:"tags/博客/index.html",revision:"7f50f07810a9b431a868482450c7f735"},{url:"tags/教程/index.html",revision:"c45e90dd4a195626121d31c3dbdb508b"},{url:"tags/泠鸢yousa/index.html",revision:"3f93f57bec01eb9a6fee0f806e4a7b08"},{url:"talk/index.html",revision:"17ce1e91823f8ce8825d8dfde5d004d7"}],{})}));