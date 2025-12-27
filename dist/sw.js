if (!self.define) {
  let s,
    e = {};
  const i = (i, l) => (
    (i = new URL(i + '.js', l).href),
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
  self.define = (l, n) => {
    const r =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[r]) return;
    let a = {};
    const o = (s) => i(s, r),
      u = { module: { uri: r }, exports: a, require: o };
    e[r] = Promise.all(l.map((s) => u[s] || o(s))).then((s) => (n(...s), a));
  };
}
define(['./workbox-354287e6'], function (s) {
  'use strict';
  (self.skipWaiting(),
    s.clientsClaim(),
    s.precacheAndRoute(
      [
        { url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
        {
          url: 'ms-icon-70x70.png',
          revision: '9d231c94483f09b7a2509802c323df69',
        },
        {
          url: 'ms-icon-310x310.png',
          revision: '65cad6ec9f2dd8a8e72a98efbff70b8a',
        },
        {
          url: 'ms-icon-150x150.png',
          revision: '265b4269b23b47e09fbb9798f18e2bf9',
        },
        {
          url: 'ms-icon-144x144.png',
          revision: '562c68d971c1c83233b40e45799b979c',
        },
        { url: 'index.html', revision: '2924070b8d968c65066acf654790371e' },
        {
          url: 'favicon-96x96.png',
          revision: '3a18f23eca25ade55d09e907a6eaae10',
        },
        {
          url: 'favicon-32x32.png',
          revision: '4eb9d2da4b242cc2ffd8e50cf02fbfa6',
        },
        {
          url: 'favicon-16x16.png',
          revision: '10792ce25679ad503a91b657c4f68077',
        },
        { url: 'apple-icon.png', revision: '2484acaaf914001c648ffb60d5b6c540' },
        {
          url: 'apple-icon-precomposed.png',
          revision: '2484acaaf914001c648ffb60d5b6c540',
        },
        {
          url: 'apple-icon-76x76.png',
          revision: '69c7593817355bd918f3e51970b5fff9',
        },
        {
          url: 'apple-icon-72x72.png',
          revision: 'fae4675e183766d8b96fb9c3d852749f',
        },
        {
          url: 'apple-icon-60x60.png',
          revision: '8e1f06ed7838c83f5060a4837600a212',
        },
        {
          url: 'apple-icon-57x57.png',
          revision: '5d9b9a0577d00d3b87325893f0dc739f',
        },
        {
          url: 'apple-icon-180x180.png',
          revision: 'ee90b32c5af4dd82e1338f34c61fe7cf',
        },
        {
          url: 'apple-icon-152x152.png',
          revision: 'af0386af9509f6a241f8a3e5e21404f5',
        },
        {
          url: 'apple-icon-144x144.png',
          revision: '562c68d971c1c83233b40e45799b979c',
        },
        {
          url: 'apple-icon-120x120.png',
          revision: '4a9c9a3eecbfa7c3903acef655b18696',
        },
        {
          url: 'apple-icon-114x114.png',
          revision: 'eaeb8ef945123f9badbaa023cff9fd62',
        },
        {
          url: 'android-icon-96x96.png',
          revision: '3a18f23eca25ade55d09e907a6eaae10',
        },
        {
          url: 'android-icon-72x72.png',
          revision: 'fae4675e183766d8b96fb9c3d852749f',
        },
        {
          url: 'android-icon-48x48.png',
          revision: '90ae290b1f2b75548e6a5ca4174f3867',
        },
        {
          url: 'android-icon-36x36.png',
          revision: '8bc122ebe8323b1a5189a241ac099f36',
        },
        {
          url: 'android-icon-192x192.png',
          revision: '8b346a02e79277cfbc1434bac92ebf90',
        },
        {
          url: 'android-icon-144x144.png',
          revision: '562c68d971c1c83233b40e45799b979c',
        },
        { url: 'assets/WebSocket-C54H5G00.js', revision: null },
        { url: 'assets/WebShare-C5XrsHHA.js', revision: null },
        { url: 'assets/VideoPlay-B_kCEmdd.js', revision: null },
        { url: 'assets/Video1--eKa7mqi.js', revision: null },
        { url: 'assets/vendor-iWomKbAA.js', revision: null },
        { url: 'assets/Velocity-CxPypJi4.js', revision: null },
        { url: 'assets/utils-DfWtT5OB.js', revision: null },
        {
          url: 'assets/UltraUltraSmartCacheCleaner-B8ZuogRA.js',
          revision: null,
        },
        { url: 'assets/topvinyl-CvgmgTDP.png', revision: null },
        { url: 'assets/Striper-Regular-BNb1stPC.woff2', revision: null },
        { url: 'assets/SplashCursor-pF5LT4jC.js', revision: null },
        { url: 'assets/SocialShare-B9j_x8Vq.js', revision: null },
        { url: 'assets/SmoothScrollProvider-CaxjcAfJ.js', revision: null },
        { url: 'assets/ScrollVelocity-nL-VF1ZX.js', revision: null },
        { url: 'assets/ScrollToTopButton-DY1s2fhS.js', revision: null },
        { url: 'assets/Scroll-C5gxNfwa.js', revision: null },
        { url: 'assets/Sample-BIcazaeI.js', revision: null },
        { url: 'assets/RobotHead-DuUTlmgD.js', revision: null },
        { url: 'assets/RobotFaceWrapper-CAoejEyp.js', revision: null },
        { url: 'assets/RobotFace-DNboi6g8.js', revision: null },
        { url: 'assets/RobotFace-BLJ6FyLb.css', revision: null },
        { url: 'assets/PillNav-B3kcD66J.js', revision: null },
        { url: 'assets/NotFound-CECEPyMI.js', revision: null },
        { url: 'assets/MusicArt-C5-AHeof.js', revision: null },
        { url: 'assets/Music1-mvNXtFQP.js', revision: null },
        { url: 'assets/Map-BVW5UTJi.js', revision: null },
        { url: 'assets/Loop-CmWR7Hqz.js', revision: null },
        { url: 'assets/LogoLoop-MRq4auzG.js', revision: null },
        { url: 'assets/LiquidCursor-HgCLibB8.js', revision: null },
        { url: 'assets/IpLogger-D3lqQRJC.js', revision: null },
        { url: 'assets/InternetStatus-SPM6esCI.js', revision: null },
        { url: 'assets/insta-DfgTjsCq.png', revision: null },
        { url: 'assets/InfiniteMenu-DG0VYYmZ.js', revision: null },
        { url: 'assets/index-BpYHdyh6.css', revision: null },
        { url: 'assets/index-Bkc3ae4Q.js', revision: null },
        { url: 'assets/ImageSpotlight-CocdH9bt.js', revision: null },
        { url: 'assets/Home-CrgVNA0l.js', revision: null },
        { url: 'assets/Header-C0RO_1i1.js', revision: null },
        { url: 'assets/GradualBlur-Co_pOVcU.js', revision: null },
        { url: 'assets/GalleryData-CGnx4Rfw.js', revision: null },
        { url: 'assets/Gallery-TqrSvaZf.js', revision: null },
        { url: 'assets/FuzzyText-D6zJffdH.js', revision: null },
        { url: 'assets/Footer-K2Nh8XGC.js', revision: null },
        { url: 'assets/Dialog09-DcnQ_HEF.js', revision: null },
        { url: 'assets/CurvedLoop-DPsr2-DA.js', revision: null },
        { url: 'assets/Contact-C8Tj_LVz.js', revision: null },
        { url: 'assets/CircularGallery-C-3n2yTO.js', revision: null },
        { url: 'assets/CirclePhoto-DOYUpw-q.js', revision: null },
        { url: 'assets/ChromaGrid-aSleXEzN.js', revision: null },
        { url: 'assets/ChatMessageBubble-axpUPKnW.js', revision: null },
        { url: 'assets/ChatInput-BafkuaZI.js', revision: null },
        { url: 'assets/CacheClean-BzqUSvwi.js', revision: null },
        { url: 'assets/bubble.module-YQKLPTNq.js', revision: null },
        { url: 'assets/bubble-C_vl8Ga6.css', revision: null },
        { url: 'assets/Blog-DDI5KC3i.js', revision: null },
        { url: 'assets/Beats-B5ihlLt4.js', revision: null },
        { url: 'assets/AnalyticsTracker-DAx124T-.js', revision: null },
        { url: 'assets/AIChatCard-Dz-Hdxef.js', revision: null },
        { url: 'assets/Adarsh-BDG0zI57.png', revision: null },
        { url: 'assets/About-BJIxR8Wh.js', revision: null },
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
      ({ url: s }) =>
        'https://ai-assistant-server-colf.onrender.com/api/gemini' === s.origin,
      new s.NetworkFirst({
        cacheName: 'ai-assistant-api-cache',
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
