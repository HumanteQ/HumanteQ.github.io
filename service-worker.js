"use strict";var precacheConfig=[["/index.html","1b956dfc88b74828425a5ad47a3f3b5e"],["/static/css/main.885ddd20.css","d01e2f8afa4f2ae60334d895424efac2"],["/static/js/main.708dcc4a.js","83415c5d4458e7aa586bd1a2f580a6b1"],["/static/media/GraphikLC-Bold.9f3c54e2.eot","9f3c54e2dad78dc3f278eb4aec9712e1"],["/static/media/GraphikLC-Bold.ab55cf97.woff2","ab55cf9787f959b4dd2eebfb13187399"],["/static/media/GraphikLC-Bold.adb234d2.ttf","adb234d2faf3497abc5b5d148b7fde3c"],["/static/media/GraphikLC-Bold.ae393b88.woff","ae393b88a8f732b633ec9139c95b6d59"],["/static/media/GraphikLC-Regular.0d5f6193.eot","0d5f61931e59583eae80a651c10c0f45"],["/static/media/GraphikLC-Regular.43316669.ttf","433166697911c08af65accbf9f0285c5"],["/static/media/GraphikLC-Regular.794237cb.woff2","794237cbce72fabb5a7218c9ce4100f9"],["/static/media/GraphikLC-Regular.fe388fd4.woff","fe388fd43492399f4fb2fc320db1b8b2"],["/static/media/Sequel100Wide-95Wide.539b4926.ttf","539b49269e48e9555b94e9538cfa7809"],["/static/media/Sequel100Wide-95Wide.57061dd1.eot","57061dd1a1cae40126112d84083a3e8f"],["/static/media/Sequel100Wide-95Wide.94f7ede5.woff2","94f7ede5c7b4203cccf32d921f7c0b4d"],["/static/media/Sequel100Wide-95Wide.958e06a4.woff","958e06a4d02c8b58190d478a7b8f90a7"],["/static/media/photo-1.90e407a3.png","90e407a3d60cd256d6176a4b5cf97f13"],["/static/media/photo-2.ce861311.png","ce86131184eb61383f2457733f058bd7"],["/static/media/photo-3.3c1cf0a0.png","3c1cf0a0677765bd5bf8e122ea63cd68"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});