if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"226cae6cc9d0443b6a8d15973a0de5c1"},{url:"about/index.html",revision:"3fbc807b01e64b2add61bd0dfadeef0e"},{url:"archives/2021/07/index.html",revision:"a2559609848eec9721e86fe6341f7990"},{url:"archives/2021/index.html",revision:"898595300b32206494971562e4a37a33"},{url:"archives/index.html",revision:"d1e97defd1bf2293b63049cbad347f22"},{url:"bangumis/index.html",revision:"36ab2e74ad5c1573316a7f8097db3088"},{url:"categories/index.html",revision:"1871ff3c5f4e131593611cb34e67591b"},{url:"categories/教程/index.html",revision:"cda2b4a8aefa18394692836e5a1b7fae"},{url:"categories/泠鸢yousa/index.html",revision:"b4530f02e7633f18d5f3325bb2c9c529"},{url:"css/custom.css",revision:"89eaa346c9993c8f1aebcf95ffce2473"},{url:"css/fast.css",revision:"8a60e94af627b7220a352fd9a493d88e"},{url:"css/index.css",revision:"e7b6ac0e6d497aed4d4a981a8c3ff1ad"},{url:"css/must.css",revision:"949173ad70676203604682df9dc016ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"hello-world/index.html",revision:"b42d7d4a5897ec220419e961a8e06d37"},{url:"hexo/index.html",revision:"1b204ad11dc3de01c1b8eb1eda292fa5"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/favicon.png",revision:"fb8acf41c1c8766f37493a2add73fc10"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d048608d543b55df997675195552f887"},{url:"img/siteicon/android-chrome-144x144.png",revision:"d413a7755cc1672dc9a9eeb6d1946076"},{url:"img/siteicon/android-chrome-192x192.png",revision:"c8ef14659023a5770edf2abc8b092091"},{url:"img/siteicon/android-chrome-256x256.png",revision:"1a9d06121a07390b03e0b92e3c926d2e"},{url:"img/siteicon/android-chrome-36x36.png",revision:"9b302de11c1e1c717107160686068b51"},{url:"img/siteicon/android-chrome-384x384.png",revision:"052e5704e6547487201856537b957f32"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3ebc50442fd4a300218c2bfb7a063a5e"},{url:"img/siteicon/android-chrome-72x72.png",revision:"547d34592800157b094594d3a75bc7bb"},{url:"img/siteicon/android-chrome-96x96.png",revision:"92cf2e34055623ee35ae1e7ce6605b91"},{url:"img/siteicon/apple-touch-icon.png",revision:"62a608e030e858ec181ca69e0edb2c01"},{url:"img/siteicon/favicon-16x16.png",revision:"1d8e59fc7a5a60a0bb23a5a330154256"},{url:"img/siteicon/favicon-32x32.png",revision:"dfab3bf6b35e870741a7f6323bf5ad50"},{url:"img/siteicon/mstile-150x150.png",revision:"2c1dde91f64ba22e898a9fce1c4999d2"},{url:"img/siteicon/README.html",revision:"fc3b008fffc694aae77286c79acdeb51"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"806b6af73f2d38d2d730bb355fa5da1e"},{url:"img/yousa.jpg",revision:"f1447df9c3080c29c1585bd3b3f0067c"},{url:"index.html",revision:"f221bd364d5037fe8353f473de3a5e8d"},{url:"info/index.html",revision:"8a731e228fcdfb97748c735309d11c95"},{url:"js/Lete.js",revision:"73d5302dcec253ee1ed419e55c38cc10"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/title.js",revision:"a36fcbc6618d25674a7a9499b921648f"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"92d022c7ef93d93f7b054d234ebce183"},{url:"tags/HEXO/index.html",revision:"66c5b04cb61757aefb5faf196ac7386e"},{url:"tags/index.html",revision:"7efd7989d921fdf790814c054390ea54"},{url:"tags/termux/index.html",revision:"83c79d16b000f664c8a4b0e9178d1523"},{url:"tags/博客/index.html",revision:"f522c52eda28635c2034dfeb62fb8b78"},{url:"tags/教程/index.html",revision:"4ba4c3b54608717451eb99f6667718f8"},{url:"tags/泠鸢yousa/index.html",revision:"4f4e9cacb05e5f6a8bf1476f5a825332"},{url:"talk/index.html",revision:"c5ee6307ad1b22b03098ea1e75df2f73"},{url:"termux-xmr/index.html",revision:"9dbc252751bedd00fde1e6bdde6e2332"},{url:"yousa/index.html",revision:"5779a1d048d5ea9ae3437b66909b0824"}],{})}));