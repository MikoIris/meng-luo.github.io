if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,a)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=a(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4ea7bbb88d9b6db9be5fa07aaf67438a"},{url:"about/index.html",revision:"30cfc5e8ac8182eb282f08f47577c905"},{url:"archives/2021/07/index.html",revision:"735124fd94a71552901c3ecd5ea0fb00"},{url:"archives/2021/08/index.html",revision:"95abd4268d394858aea1585b9710bedf"},{url:"archives/2021/10/index.html",revision:"c26d7575f527d801c5229260237779d7"},{url:"archives/2021/index.html",revision:"6624333c7ec0ca5910bfc381ac05a45d"},{url:"archives/2021/page/2/index.html",revision:"07cff047fb9573cb4c833e8ca1745c47"},{url:"archives/index.html",revision:"a7c47dcd4fda8e49ebe65bb45920af7c"},{url:"archives/page/2/index.html",revision:"9cabea2351d69b8601ba68adcb7a2bff"},{url:"bangumis/index.html",revision:"ccc4551aaef42ed73a9b1dae3a73272f"},{url:"categories/index.html",revision:"2f68913fe07d78b347f205ddfb9fcb77"},{url:"categories/教程/index.html",revision:"074e57651c6ab3ef72b4d84a8f49c70c"},{url:"categories/泠鸢yousa/index.html",revision:"e300a99a848cb495e336c451a1b0d562"},{url:"categories/笔记/index.html",revision:"48ce0fd039561a4cf6344885e870ed68"},{url:"comments/index.html",revision:"c82d2053b6dd2073ebfa5b263bf07141"},{url:"css/custom.css",revision:"41f53ff7561af2105701412b6f1147fd"},{url:"css/index.css",revision:"552fb73bb00954feb93a80135697461a"},{url:"css/must.css",revision:"534554e05779b3ef27835fb89923ab27"},{url:"css/poss.css",revision:"e829d3e904f0f96c2b2b1381478fa1cf"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"daodao/index.html",revision:"23d21c0fb99024ec1951428d4b0f14f8"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"4e597f7b73327411351979da02f6f2a6"},{url:"img/favicon.png",revision:"fb8acf41c1c8766f37493a2add73fc10"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d048608d543b55df997675195552f887"},{url:"img/siteicon/android-chrome-144x144.png",revision:"d413a7755cc1672dc9a9eeb6d1946076"},{url:"img/siteicon/android-chrome-192x192.png",revision:"c8ef14659023a5770edf2abc8b092091"},{url:"img/siteicon/android-chrome-256x256.png",revision:"1a9d06121a07390b03e0b92e3c926d2e"},{url:"img/siteicon/android-chrome-36x36.png",revision:"9b302de11c1e1c717107160686068b51"},{url:"img/siteicon/android-chrome-384x384.png",revision:"052e5704e6547487201856537b957f32"},{url:"img/siteicon/android-chrome-48x48.png",revision:"3ebc50442fd4a300218c2bfb7a063a5e"},{url:"img/siteicon/android-chrome-72x72.png",revision:"547d34592800157b094594d3a75bc7bb"},{url:"img/siteicon/android-chrome-96x96.png",revision:"92cf2e34055623ee35ae1e7ce6605b91"},{url:"img/siteicon/apple-touch-icon.png",revision:"62a608e030e858ec181ca69e0edb2c01"},{url:"img/siteicon/favicon-16x16.png",revision:"1d8e59fc7a5a60a0bb23a5a330154256"},{url:"img/siteicon/favicon-32x32.png",revision:"dfab3bf6b35e870741a7f6323bf5ad50"},{url:"img/siteicon/mstile-150x150.png",revision:"2c1dde91f64ba22e898a9fce1c4999d2"},{url:"img/siteicon/README.html",revision:"c45d0c711a1e8f40052cab895081de5f"},{url:"img/siteicon/safari-pinned-tab.svg",revision:"208f55dd202874e58e7234ae3a2ed01c"},{url:"index.html",revision:"aadc22bcf0449975007b46beb93f0381"},{url:"js/Lete.js",revision:"5bf2a875c3bb8ba82cbf4094e0ce3e0e"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/poss.js",revision:"5f7052cb701bda6097eaad5b180aa0e9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"999f7a22569490e72da3a7ed9f150e17"},{url:"music/index.html",revision:"35a9b15e7ef444e3dff0076bf0a89935"},{url:"page/2/index.html",revision:"6ab91f6e6e4ce4d69946383be59b2e7a"},{url:"post/arch-1/index.html",revision:"f8d3371be7cfbc369ca9bc2936a8b5b1"},{url:"post/arch-2/index.html",revision:"15a2375a0884bcfd2aabf6fffdc9654e"},{url:"post/arch-3/index.html",revision:"10ae3087ac5d73bf6b0f51ee7f00db3b"},{url:"post/arch-4/index.html",revision:"eb5e1d0665087b6c420ab888e66dcdf8"},{url:"post/hello-world/index.html",revision:"a6ec55c53652fd6ceddd045afad3f025"},{url:"post/hexo/index.html",revision:"89b32855a4257844b21189925eff264c"},{url:"post/info/index.html",revision:"fc9b78a7bc90394bdbc9ad4afb5b065c"},{url:"post/qq-bot/index.html",revision:"d39f6226905ee84465dc0a756cd3f8e7"},{url:"post/search/index.html",revision:"27bf0f556b199b59f60a66a0fbe76cfc"},{url:"post/termux-xmr/index.html",revision:"7a8c67e5a3e59281c9d015e43693c76c"},{url:"post/yousa/index.html",revision:"c29fcbc820c9c81c71722aa523c4901a"},{url:"tags/Arch/index.html",revision:"5b24bd30b81e425d9249d8b3b6c4972c"},{url:"tags/bot/index.html",revision:"6cd99ba6e10fc040d59799d10c3796d7"},{url:"tags/HEXO/index.html",revision:"b2debf94bb9c08d40acaf5977a6644c1"},{url:"tags/index.html",revision:"1c054c42f223fb8fa0ecc00763aa421d"},{url:"tags/Linux/index.html",revision:"495804f5cfa9d9fd7e2d68f846248c80"},{url:"tags/QQ/index.html",revision:"a5896bf94ebf1d4e076744e2f00affca"},{url:"tags/termux/index.html",revision:"55ed9b7c469393642af2b324dd66c02c"},{url:"tags/博客/index.html",revision:"0aa80d45a78a9c36b8056986d1830214"},{url:"tags/搜索引擎/index.html",revision:"bae4efb12cc511a83d02c797a38fa069"},{url:"tags/教程/index.html",revision:"43b5fec729c7100c5d7337cbd99dc876"},{url:"tags/泠鸢yousa/index.html",revision:"bbcab975ba9e2249d5649973e0e861b8"},{url:"tags/进阶/index.html",revision:"6b4cea755757ca27829b816a3e8db076"}],{})}));