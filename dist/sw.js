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
define(['./workbox-5bbf8303'], function (s) {
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
        { url: 'assets/About-dF-Wuv8d.js', revision: null },
        { url: 'assets/Adarsh-BDG0zI57.png', revision: null },
        { url: 'assets/ai-chat-kUgo_fpA.js', revision: null },
        { url: 'assets/AnalyticsTracker-B8mDhV9P.js', revision: null },
        { url: 'assets/Beats-BV5M0bxO.js', revision: null },
        { url: 'assets/Blog-DtDBu3yS.js', revision: null },
        { url: 'assets/BlurText-aIIrJdMN.js', revision: null },
        { url: 'assets/bubble-C_vl8Ga6.css', revision: null },
        { url: 'assets/bubble.module-Bdvz9-Ck.js', revision: null },
        { url: 'assets/button-MMdNCqjI.js', revision: null },
        { url: 'assets/CacheClean-5lIHUlWD.js', revision: null },
        { url: 'assets/card-DQ-fVX4b.js', revision: null },
        { url: 'assets/ChromaGrid-KFCe3sRO.js', revision: null },
        { url: 'assets/CirclePhoto-BuY-i2d0.js', revision: null },
        { url: 'assets/Contact-Dl-yo5U5.js', revision: null },
        { url: 'assets/FuzzyText-D8xXALiU.js', revision: null },
        { url: 'assets/Header-BM_2v3As.js', revision: null },
        { url: 'assets/Home-DbgBXsib.js', revision: null },
        { url: 'assets/Hyperspeed-DKyRrFij.js', revision: null },
        { url: 'assets/index-BpajaV4b.css', revision: null },
        { url: 'assets/index-BtU_4mIL.js', revision: null },
        { url: 'assets/insta-DfgTjsCq.png', revision: null },
        { url: 'assets/InternetStatus-CnLxz9iE.js', revision: null },
        { url: 'assets/IpLogger-MPu9KPUk.js', revision: null },
        { url: 'assets/LiquidCursor-DALQkbVo.js', revision: null },
        { url: 'assets/Loop-B7KAfhh7.js', revision: null },
        { url: 'assets/Map-BbP92-Ad.js', revision: null },
        { url: 'assets/monitoring-BZ7egMF9.js', revision: null },
        { url: 'assets/Music-Buixa2xT.js', revision: null },
        { url: 'assets/NotFound-2lqlNOTu.js', revision: null },
        { url: 'assets/PillNav-BUfJtngY.js', revision: null },
        { url: 'assets/RobotFace-CtYroGWF.js', revision: null },
        { url: 'assets/RobotFaceWrapper-CxGE9MKh.js', revision: null },
        { url: 'assets/RobotHead-DZ_fjAOB.js', revision: null },
        { url: 'assets/Sample-D3FbdwkF.js', revision: null },
        { url: 'assets/Scroll-kxC1LQEn.js', revision: null },
        { url: 'assets/ScrollToTopButton-DBdOncsn.js', revision: null },
        { url: 'assets/SmoothScrollProvider-O5822lEx.js', revision: null },
        { url: 'assets/SplashCursor-Bn-LssCJ.js', revision: null },
        { url: 'assets/spotify-D_PSz9Uq.png', revision: null },
        { url: 'assets/utils-x720GUhr.js', revision: null },
        { url: 'assets/Velocity-BVCDw_Fy.js', revision: null },
        { url: 'assets/vendor_react-C8wG62CJ.js', revision: null },
        { url: 'assets/vendor_react-dom-DKAsGG5-.js', revision: null },
        { url: 'assets/vendor-Grk_15WJ.js', revision: null },
        { url: 'assets/Video-DTOfuPNl.js', revision: null },
        { url: 'assets/WebSocket-hSlT2FKG.js', revision: null },
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
        { url: 'index.html', revision: 'e9e446a895e7d646f5b978b339ada3f8' },
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
      /\/api\/.*\/*.json/,
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
