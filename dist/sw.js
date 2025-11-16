if (!self.define) {
  let s,
    e = {};
  const i = (i, n) => (
    (i = new URL(i + '.js', n).href),
    e[i] ||
      new Promise((e) => {
        if ('document' in self) {
          const s = document.createElement('script');
          ((s.src = i), (s.onload = e), document.head.appendChild(s));
        } else ((s = i), importScripts(i), e());
      }).then(() => {
        let s = e[i];
        if (!s) throw new Error(`Module ${i} didn’t register its module`);
        return s;
      })
  );
  self.define = (n, l) => {
    const r =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[r]) return;
    let o = {};
    const a = (s) => i(s, r),
      u = { module: { uri: r }, exports: o, require: a };
    e[r] = Promise.all(n.map((s) => u[s] || a(s))).then((s) => (l(...s), o));
  };
}
define(['./workbox-e20531c6'], function (s) {
  'use strict';
  (self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        {
          url: 'android-icon-144x144.png',
          revision: '562c68d971c1c83233b40e45799b979c',
        },
        {
          url: 'android-icon-192x192.png',
          revision: '8b346a02e79277cfbc1434bac92ebf90',
        },
        {
          url: 'android-icon-36x36.png',
          revision: '8bc122ebe8323b1a5189a241ac099f36',
        },
        {
          url: 'android-icon-48x48.png',
          revision: '90ae290b1f2b75548e6a5ca4174f3867',
        },
        {
          url: 'android-icon-72x72.png',
          revision: 'fae4675e183766d8b96fb9c3d852749f',
        },
        {
          url: 'android-icon-96x96.png',
          revision: '3a18f23eca25ade55d09e907a6eaae10',
        },
        {
          url: 'apple-icon-114x114.png',
          revision: 'eaeb8ef945123f9badbaa023cff9fd62',
        },
        {
          url: 'apple-icon-120x120.png',
          revision: '4a9c9a3eecbfa7c3903acef655b18696',
        },
        {
          url: 'apple-icon-144x144.png',
          revision: '562c68d971c1c83233b40e45799b979c',
        },
        {
          url: 'apple-icon-152x152.png',
          revision: 'af0386af9509f6a241f8a3e5e21404f5',
        },
        {
          url: 'apple-icon-180x180.png',
          revision: 'ee90b32c5af4dd82e1338f34c61fe7cf',
        },
        {
          url: 'apple-icon-57x57.png',
          revision: '5d9b9a0577d00d3b87325893f0dc739f',
        },
        {
          url: 'apple-icon-60x60.png',
          revision: '8e1f06ed7838c83f5060a4837600a212',
        },
        {
          url: 'apple-icon-72x72.png',
          revision: 'fae4675e183766d8b96fb9c3d852749f',
        },
        {
          url: 'apple-icon-76x76.png',
          revision: '69c7593817355bd918f3e51970b5fff9',
        },
        {
          url: 'apple-icon-precomposed.png',
          revision: '2484acaaf914001c648ffb60d5b6c540',
        },
        { url: 'apple-icon.png', revision: '2484acaaf914001c648ffb60d5b6c540' },
        { url: 'assets/About-DQgcrjj6.js', revision: null },
        { url: 'assets/Adarsh-BDG0zI57.png', revision: null },
        { url: 'assets/AIChatCard-DOoxck43.js', revision: null },
        { url: 'assets/AnalyticsTracker-DzozmFLe.js', revision: null },
        { url: 'assets/Beats-BF8vLKt6.js', revision: null },
        { url: 'assets/Blog-WkFDN6uV.js', revision: null },
        { url: 'assets/BlurText-CTgl2Lwq.js', revision: null },
        { url: 'assets/bubble-C_vl8Ga6.css', revision: null },
        { url: 'assets/bubble.module-BuxepTIR.js', revision: null },
        { url: 'assets/button-wiFhq-Fa.js', revision: null },
        { url: 'assets/CacheClean-CbJ1EAiP.js', revision: null },
        { url: 'assets/card-B3bMxOxK.js', revision: null },
        { url: 'assets/ChatInput-DYvQGbE1.js', revision: null },
        { url: 'assets/ChatMessageBubble-B7fN8Swi.js', revision: null },
        { url: 'assets/ChromaGrid-CTzzi9ao.js', revision: null },
        { url: 'assets/CirclePhoto-Bft_VBRz.js', revision: null },
        { url: 'assets/Contact-7f9QxZE1.js', revision: null },
        { url: 'assets/CurvedLoop-DpKI00ki.js', revision: null },
        { url: 'assets/FuzzyText-DzVyT4tM.js', revision: null },
        { url: 'assets/GradualBlur-CnHNIQO0.js', revision: null },
        { url: 'assets/Header-D-4ebVpJ.js', revision: null },
        { url: 'assets/Home-DvZ0iKcg.js', revision: null },
        { url: 'assets/Hyperspeed-D85R5eE0.js', revision: null },
        { url: 'assets/index-D4Pt6dGf.css', revision: null },
        { url: 'assets/index-TjyNd_uT.js', revision: null },
        { url: 'assets/insta-DfgTjsCq.png', revision: null },
        { url: 'assets/InternetStatus-NWtgnt5d.js', revision: null },
        { url: 'assets/IpLogger-DLtlyMed.js', revision: null },
        { url: 'assets/LiquidCursor-CeduH2pW.js', revision: null },
        { url: 'assets/LogoLoop-DC5LWDF0.js', revision: null },
        { url: 'assets/Loop-CvDDRKI1.js', revision: null },
        { url: 'assets/Map-DvHmQio8.js', revision: null },
        { url: 'assets/Music-mISgQpWk.js', revision: null },
        { url: 'assets/NotFound-57DbUpCI.js', revision: null },
        { url: 'assets/PillNav-ByrOCC8d.js', revision: null },
        { url: 'assets/RobotFace-BLJ6FyLb.css', revision: null },
        { url: 'assets/RobotFace-DQjs1nwg.js', revision: null },
        { url: 'assets/RobotFaceWrapper-RjHChjcB.js', revision: null },
        { url: 'assets/RobotHead-CuFjD1ge.js', revision: null },
        { url: 'assets/Sample-CfizvW7p.js', revision: null },
        { url: 'assets/Scroll-Dm476rWI.js', revision: null },
        { url: 'assets/ScrollToTopButton-tbqPC26y.js', revision: null },
        { url: 'assets/SmoothScrollProvider-DWpafgfC.js', revision: null },
        { url: 'assets/SplashCursor-BWLcdjKe.js', revision: null },
        { url: 'assets/spotify-D_PSz9Uq.png', revision: null },
        { url: 'assets/utils-xZivFseN.js', revision: null },
        { url: 'assets/Velocity-C5HYXOR8.js', revision: null },
        { url: 'assets/vendor-CLKqtzgM.js', revision: null },
        { url: 'assets/Video-ThFbNV-2.js', revision: null },
        { url: 'assets/WebSocket-TIG6YOOE.js', revision: null },
        {
          url: 'favicon-16x16.png',
          revision: '10792ce25679ad503a91b657c4f68077',
        },
        {
          url: 'favicon-32x32.png',
          revision: '4eb9d2da4b242cc2ffd8e50cf02fbfa6',
        },
        {
          url: 'favicon-96x96.png',
          revision: '3a18f23eca25ade55d09e907a6eaae10',
        },
        { url: 'index.html', revision: 'f3c2ceebdcf3eea20146f1e47666f391' },
        {
          url: 'ms-icon-144x144.png',
          revision: '562c68d971c1c83233b40e45799b979c',
        },
        {
          url: 'ms-icon-150x150.png',
          revision: '265b4269b23b47e09fbb9798f18e2bf9',
        },
        {
          url: 'ms-icon-310x310.png',
          revision: '65cad6ec9f2dd8a8e72a98efbff70b8a',
        },
        {
          url: 'ms-icon-70x70.png',
          revision: '9d231c94483f09b7a2509802c323df69',
        },
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        {
          url: 'favicon-16x16.png',
          revision: '10792ce25679ad503a91b657c4f68077',
        },
        {
          url: 'favicon-32x32.png',
          revision: '4eb9d2da4b242cc2ffd8e50cf02fbfa6',
        },
        { url: 'favicon.ico', revision: 'a337660878d8cac4314889e55df5704a' },
        { url: 'robots.txt', revision: '8590ab3cae7cd602bd8eefc2285efb9b' },
        {
          url: 'manifest.webmanifest',
          revision: '0281d0e91cb3ad0fa81543bf771ae54e',
        },
      ],
      {}
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL('index.html'))
    ),
    s.registerRoute(
      /\/api\/.*\.json$/,
      new s.NetworkFirst({
        cacheName: 'api-cache',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 300 }),
        ],
      }),
      'GET'
    ),
    s.registerRoute(
      /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
      new s.CacheFirst({
        cacheName: 'image-cache',
        plugins: [
          new s.ExpirationPlugin({ maxEntries: 100, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ));
});
