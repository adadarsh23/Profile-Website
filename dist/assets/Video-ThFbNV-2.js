import { r as a, j as e, at as t, m as r } from './vendor-CLKqtzgM.js';
import { s as n } from './bubble.module-BuxepTIR.js';
import { L as o } from './index-TjyNd_uT.js';
function Video() {
  const [l, i] = a.useState(null),
    [s, d] = a.useState(!0);
  if (
    (a.useEffect(() => {
      (async () => {
        try {
          const a = 'AIzaSyDb3c4sF37URQp55MPZvLnjy4W9P1ew0lM',
            e = 'UCBxHHe4o1uNKKDcJZMjPAhQ',
            r = (
              await t.get(
                `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${e}&key=${a}`
              )
            ).data.items;
          if (!r || 0 === r.length) return;
          const n = r[0].contentDetails.relatedPlaylists.uploads,
            o = (
              await t.get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${n}&maxResults=1&key=${a}`
              )
            ).data.items;
          if (!o || 0 === o.length) return;
          i(o[0].snippet.resourceId.videoId);
        } catch (a) {
        } finally {
          d(!1);
        }
      })();
    }, []),
    s)
  )
    return e.jsx('div', {
      className: 'text-center text-white text-xl',
      children: e.jsx(o, {}),
    });
  if (!l)
    return e.jsx('div', {
      className: 'text-center text-white text-xl',
      children: 'No video found.',
    });
  const BubbleText = () =>
    e.jsx(r.h2, {
      className:
        'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: 'easeOut' },
      children: 'Latest Video'
        .split('')
        .map((a, t) =>
          e.jsx('span', { className: n.hoverText, children: a }, t)
        ),
    });
  return e.jsxs('section', {
    className:
      'bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20',
    children: [
      e.jsx(BubbleText, {}),
      e.jsxs('div', {
        className:
          'relative w-full max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto mb-10',
        children: [
          e.jsx('div', {
            className:
              'absolute -inset-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-3xl opacity-60 animate-pulse blur-xl',
          }),
          e.jsx('div', {
            className:
              'absolute -inset-3 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-3xl animate-spin-slow opacity-50 blur-lg',
          }),
          e.jsxs('div', {
            className:
              'relative p-2 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl backdrop-blur-md transition-all duration-700 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 hover:shadow-gray-500/50 hover:shadow-2xl group',
            children: [
              e.jsx('div', {
                className:
                  'relative p-1 rounded-xl bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 group-hover:from-gray-400 group-hover:via-gray-300 group-hover:to-gray-400 transition-all duration-700',
                children: e.jsx('div', {
                  className:
                    'relative p-1 rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-inner',
                  children: e.jsx('div', {
                    className:
                      'relative p-1 rounded-lg bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 group-hover:from-gray-500 group-hover:via-gray-400 group-hover:to-gray-500 transition-all duration-700',
                    children: e.jsx('iframe', {
                      className:
                        'w-full rounded-lg shadow-2xl hover:scale-[1.02] transition-all duration-700 hover:shadow-white/30 border-2 border-white/10 hover:border-white/30',
                      style: { aspectRatio: '16/9' },
                      src: `https://www.youtube.com/embed/${l}`,
                      title: 'Latest Video',
                      frameBorder: '0',
                      allow:
                        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                      allowFullScreen: !0,
                    }),
                  }),
                }),
              }),
              e.jsx('div', {
                className:
                  'absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-80 animate-bubble animate-bubble-rotate',
              }),
              e.jsx('div', {
                className:
                  'absolute top-4 right-2 w-1 h-1 bg-gray-400 rounded-full opacity-60 animate-bubble delay-200 animate-bubble-rotate',
              }),
              e.jsx('div', {
                className:
                  'absolute bottom-2 left-4 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-70 animate-bubble delay-400 animate-bubble-rotate',
              }),
              e.jsx('div', {
                className:
                  'absolute bottom-6 right-6 w-1 h-1 bg-gray-300 rounded-full opacity-80 animate-bubble delay-600 animate-bubble-rotate',
              }),
            ],
          }),
        ],
      }),
      e.jsx('style', {
        jsx: 'true',
        children:
          '\n        /* Slow rotation for outer elements */\n        .animate-spin-slow {\n          animation: spin-slow 10s linear infinite;\n        }\n\n        @keyframes bubble {\n          0% {\n            transform: translate(0, 0) scale(1);\n            opacity: 0.8;\n          }\n          25% {\n            transform: translate(2px, -4px) scale(1.2);\n            opacity: 0.6;\n          }\n          50% {\n            transform: translate(-2px, 2px) scale(1.5);\n            opacity: 0.5;\n          }\n          75% {\n            transform: translate(1px, -2px) scale(1.2);\n            opacity: 0.6;\n          }\n          100% {\n            transform: translate(0, 0) scale(1);\n            opacity: 0.8;\n          }\n        }\n\n        .animate-bubble {\n          animation: bubble 4s ease-in-out infinite;\n          will-change: transform, opacity;\n        }\n\n        /* Staggered delays for a natural look */\n        .delay-200 {\n          animation-delay: 0.2s;\n        }\n        .delay-400 {\n          animation-delay: 0.4s;\n        }\n        .delay-600 {\n          animation-delay: 0.6s;\n        }\n\n        /* Optional: subtle rotation for extra realism */\n        @keyframes bubble-rotate {\n          0%,\n          100% {\n            transform: rotate(0deg);\n          }\n          50% {\n            transform: rotate(15deg);\n          }\n        }\n\n        .animate-bubble-rotate {\n          animation: bubble-rotate 6s ease-in-out infinite;\n        }\n      ',
      }),
    ],
  });
}
export { Video as default };
