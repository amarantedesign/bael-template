importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2e90869527d8e69f3d45.css",
    "revision": "b77fde621a0f569c77b4d345dcf3fd6d"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/48ea1e1d5a8c6f6c4f2b.js",
    "revision": "110d02a518a974fbfc7c0330f1ba1782"
  },
  {
    "url": "/_nuxt/4cf58f0a4fab458760cf.css",
    "revision": "609974d35c8ba5651beb782e9c834752"
  },
  {
    "url": "/_nuxt/53ea88203155d167db45.js",
    "revision": "216009617ae44adce0891f25b5d300bf"
  },
  {
    "url": "/_nuxt/6014f528e7300c0cfb7a.js",
    "revision": "febfbb03686df638fefa00a3599c30e0"
  },
  {
    "url": "/_nuxt/7a08055efb558524c4f2.js",
    "revision": "18bb9df33f98dadf100f837c337fc81b"
  },
  {
    "url": "/_nuxt/7d2e73acf54959a81053.js",
    "revision": "cc890ddbbda7e6b14850139805af3d2a"
  },
  {
    "url": "/_nuxt/b0a33727fb38edd51e90.js",
    "revision": "41faa7a35bff7293a5ff618ecbac802e"
  },
  {
    "url": "/_nuxt/c6c09438a361721f91b0.css",
    "revision": "925509dc51d83848b4a347d5f8ff0757"
  },
  {
    "url": "/_nuxt/d2cf15ca1614d69d0149.js",
    "revision": "3b7bc56701deb3566a796b3945b14dfc"
  },
  {
    "url": "/_nuxt/e1784b31c2bd7c7e5a0a.js",
    "revision": "692fa937b7a76bc033de8fb079dabba4"
  },
  {
    "url": "/_nuxt/f014c02f529faca010ea.js",
    "revision": "d532dace08bec21e7fef2c6f3c9662e7"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
