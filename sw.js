const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"梦璃雨落"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"515fd0761d22e4f422f95c30ccdf96d4",url:"./404.html"},{revision:"277a6f3c2c5022e4811acb256c9d7466",url:"./about/index.html"},{revision:"427a797c3e1cf72c6ff57df6358eb3dd",url:"./arch-1/index.html"},{revision:"d1d90d3ba9aa238714fe6b96c60b0d19",url:"./arch-2/index.html"},{revision:"8951b80da04c5e61104015ed3fd0ff00",url:"./archives/2021/07/index.html"},{revision:"ef521abcaa713aad439144d9fa6b6431",url:"./archives/2021/08/index.html"},{revision:"757c9b1ac377aade5fe841c3573b6287",url:"./archives/2021/index.html"},{revision:"ad03a0f0fd0f2e0c2ffb690f06256c12",url:"./archives/index.html"},{revision:"f9e8d7c2a45c6b0fbfbb1cb50a82f16c",url:"./atom.xml"},{revision:"dbb2fb24eb2cc843728054a2478ac8a6",url:"./baidusitemap.xml"},{revision:"f2fc2e7f3656ff5084fb9b7bf0df81bb",url:"./bangumis/index.html"},{revision:"14f0eaa02886fdaffa9f6a404d27d2f0",url:"./categories/index.html"},{revision:"5f032f1e4c132fe70dd3011af207ecc6",url:"./categories/教程/index.html"},{revision:"9f5699a4a72af35df3dbdb96a245366c",url:"./categories/泠鸢yousa/index.html"},{revision:"550eebf309ee3bf077af898dcb84d459",url:"./css/custom.css"},{revision:"282bc46244c192710438ecbf7d79a9a9",url:"./css/index.css"},{revision:"507773f428ebd6b6401accb3835375dc",url:"./css/must.css"},{revision:"35b36f595a0cb1483eaf52285214f35a",url:"./css/poss.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"b3a7a1ac8c559db1f112c35c331804e0",url:"./hello-world/index.html"},{revision:"1d1200d590eb2d9716dda239c235973a",url:"./hexo/index.html"},{revision:"f6d870b467b72ef3e8fb5a8c4b674af2",url:"./img/siteicon/README.html"},{revision:"bd0cc866e5abd03e673366aaa0b3760a",url:"./index.html"},{revision:"b3fad197200e014e8c466d10c3869ff0",url:"./info/index.html"},{revision:"a80782a7072bc41d66dffb5673e3d2e2",url:"./js/Lete.js"},{revision:"01f62452fd05335569c6341d3ac0f52b",url:"./js/main.js"},{revision:"5f7052cb701bda6097eaad5b180aa0e9",url:"./js/poss.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"12cef07c2e9bc8841a5380df4fd342f5",url:"./js/utils.js"},{revision:"0f927bc965df13e882e74d4b617f822f",url:"./link/index.html"},{revision:"73379c16f3a14e7d47d71b78a321bdf8",url:"./manifest.json"},{revision:"df4c96daf7bc223307a6391c06b5fb0a",url:"./page-sitemap.xml"},{revision:"f7fbf5e190352de6f9ed26350f0d9e06",url:"./post-sitemap.xml"},{revision:"503d8b3d3883e1311abbd51272dcd7df",url:"./search.xml"},{revision:"e2fbe217a4e9ed149a9d814e5f8f3ef4",url:"./service-worker.js"},{revision:"69d3e02dfac5e7987285ea1fc73264a3",url:"./sitemap.xml"},{revision:"70dde71d67caa0cc6d49aed4c4f73a32",url:"./tags/Arch/index.html"},{revision:"0d3f47b04901e65f0a86e9e2a492a589",url:"./tags/HEXO/index.html"},{revision:"7313ba122c9d6345d1bcc92379db2c54",url:"./tags/index.html"},{revision:"45453e3b117ea1a2470af63970f9bf4b",url:"./tags/Linux/index.html"},{revision:"56524513e3cb7901c20b0e8f9680598b",url:"./tags/termux/index.html"},{revision:"943307267d53a748e48cb3dc6883f8d0",url:"./tags/博客/index.html"},{revision:"36fdca4ca6d83c9f3f5b9dddf89b8ae1",url:"./tags/教程/index.html"},{revision:"56e170281a8e6ef52517da69a548f4f2",url:"./tags/泠鸢yousa/index.html"},{revision:"be061fab115f47a435364dd1ade54b31",url:"./talk/index.html"},{revision:"9cea9e3395f2226792979e3fc8be6cf3",url:"./termux-xmr/index.html"},{revision:"0497fcadf6b83c75ec4df94ab5067d20",url:"./workbox-f7715658.js"},{revision:"bd461d784fb6d291b239b2ec2b915239",url:"./yousa/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();