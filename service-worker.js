if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"515fd0761d22e4f422f95c30ccdf96d4"},{url:"about/index.html",revision:"277a6f3c2c5022e4811acb256c9d7466"},{url:"arch-1/index.html",revision:"427a797c3e1cf72c6ff57df6358eb3dd"},{url:"arch-2/index.html",revision:"d1d90d3ba9aa238714fe6b96c60b0d19"},{url:"archives/2021/07/index.html",revision:"8951b80da04c5e61104015ed3fd0ff00"},{url:"archives/2021/08/index.html",revision:"ef521abcaa713aad439144d9fa6b6431"},{url:"archives/2021/index.html",revision:"757c9b1ac377aade5fe841c3573b6287"},{url:"archives/index.html",revision:"ad03a0f0fd0f2e0c2ffb690f06256c12"},{url:"bangumis/index.html",revision:"f2fc2e7f3656ff5084fb9b7bf0df81bb"},{url:"categories/index.html",revision:"14f0eaa02886fdaffa9f6a404d27d2f0"},{url:"categories/教程/index.html",revision:"5f032f1e4c132fe70dd3011af207ecc6"},{url:"categories/泠鸢yousa/index.html",revision:"9f5699a4a72af35df3dbdb96a245366c"},{url:"css/custom.css",revision:"550eebf309ee3bf077af898dcb84d459"},{url:"css/index.css",revision:"282bc46244c192710438ecbf7d79a9a9"},{url:"css/must.css",revision:"507773f428ebd6b6401accb3835375dc"},{url:"css/poss.css",revision:"35b36f595a0cb1483eaf52285214f35a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"hello-world/index.html",revision:"b3a7a1ac8c559db1f112c35c331804e0"},{url:"hexo/index.html",revision:"1d1200d590eb2d9716dda239c235973a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"4e597f7b73327411351979da02f6f2a6"},{url:"img/favicon.png",revision:"fb8acf41c1c8766f37493a2add73fc10"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d048608d543b55df997675195552f887"},{url:"img/siteicon/android-chrome-144x144.png",revision:"d413a7755cc1672dc9a9eeb6d1946076"},{url:"img/siteicon/android-chrome-192x192.png",revision:"c8ef14659023a5770edf2abc8b092091"},{url:"img/siteicon/android-chrome-256x256.png",revision:"1a9d06121a07390b03e0b92e3c926d2e"},{url:"img/siteicon/android-chrome-36x36.png",revision:"9b302de11c1e1c717107160686068b51"},{url:"img/siteicon/android-chrome-384x384.png",revision:"052e5704e6547487201856537b957f32"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3ebc50442fd4a300218c2bfb7a063a5e"},{url:"img/siteicon/android-chrome-72x72.png",revision:"547d34592800157b094594d3a75bc7bb"},{url:"img/siteicon/android-chrome-96x96.png",revision:"92cf2e34055623ee35ae1e7ce6605b91"},{url:"img/siteicon/apple-touch-icon.png",revision:"62a608e030e858ec181ca69e0edb2c01"},{url:"img/siteicon/favicon-16x16.png",revision:"1d8e59fc7a5a60a0bb23a5a330154256"},{url:"img/siteicon/favicon-32x32.png",revision:"dfab3bf6b35e870741a7f6323bf5ad50"},{url:"img/siteicon/mstile-150x150.png",revision:"2c1dde91f64ba22e898a9fce1c4999d2"},{url:"img/siteicon/README.html",revision:"f6d870b467b72ef3e8fb5a8c4b674af2"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"208f55dd202874e58e7234ae3a2ed01c"},{url:"index.html",revision:"43e88608920813e25e4a0df837237017"},{url:"info/index.html",revision:"b3fad197200e014e8c466d10c3869ff0"},{url:"js/Lete.js",revision:"a80782a7072bc41d66dffb5673e3d2e2"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/poss.js",revision:"5f7052cb701bda6097eaad5b180aa0e9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"0f927bc965df13e882e74d4b617f822f"},{url:"tags/Arch/index.html",revision:"70dde71d67caa0cc6d49aed4c4f73a32"},{url:"tags/HEXO/index.html",revision:"0d3f47b04901e65f0a86e9e2a492a589"},{url:"tags/index.html",revision:"7313ba122c9d6345d1bcc92379db2c54"},{url:"tags/Linux/index.html",revision:"45453e3b117ea1a2470af63970f9bf4b"},{url:"tags/termux/index.html",revision:"56524513e3cb7901c20b0e8f9680598b"},{url:"tags/博客/index.html",revision:"943307267d53a748e48cb3dc6883f8d0"},{url:"tags/教程/index.html",revision:"36fdca4ca6d83c9f3f5b9dddf89b8ae1"},{url:"tags/泠鸢yousa/index.html",revision:"56e170281a8e6ef52517da69a548f4f2"},{url:"talk/index.html",revision:"be061fab115f47a435364dd1ade54b31"},{url:"termux-xmr/index.html",revision:"9cea9e3395f2226792979e3fc8be6cf3"},{url:"yousa/index.html",revision:"bd461d784fb6d291b239b2ec2b915239"}],{})}));