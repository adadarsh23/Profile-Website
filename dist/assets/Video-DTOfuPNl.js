import { r as o, j as e } from './vendor_react-C8wG62CJ.js';
import { aG as i, Z as b } from './vendor-Grk_15WJ.js';
import { s as y } from './bubble.module-Bdvz9-Ck.js';
import { L as g } from './index-BtU_4mIL.js';
import './vendor_react-dom-DKAsGG5-.js';
function I() {
  const [s, n] = o.useState(null),
    [d, m] = o.useState(!0);
  if (
    (o.useEffect(() => {
      (async () => {
        try {
          const t = 'AIzaSyDb3c4sF37URQp55MPZvLnjy4W9P1ew0lM',
            a = (
              await i.get(
                `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCBxHHe4o1uNKKDcJZMjPAhQ&key=${t}`
              )
            ).data.items;
          if (!a || a.length === 0) return;
          const u = a[0].contentDetails.relatedPlaylists.uploads,
            r = (
              await i.get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${u}&maxResults=1&key=${t}`
              )
            ).data.items;
          if (!r || r.length === 0) return;
          n(r[0].snippet.resourceId.videoId);
        } catch (t) {
          console.error('Failed to fetch YouTube data:', t);
        } finally {
          m(!1);
        }
      })();
    }, []),
    d)
  )
    return e.jsx('div', {
      className: 'text-center text-white text-xl',
      children: e.jsx(g, {}),
    });
  if (!s)
    return e.jsx('div', {
      className: 'text-center text-white text-xl',
      children: 'No video found.',
    });
  const c = () =>
    e.jsx(b.h2, {
      className:
        'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: 'easeOut' },
      children: 'Latest Video'
        .split('')
        .map((l, t) =>
          e.jsx('span', { className: y.hoverText, children: l }, t)
        ),
    });
  return e.jsxs('section', {
    className:
      'bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20',
    children: [
      e.jsx(c, {}),
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
                      src: `https://www.youtube.com/embed/${s}`,
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
        children: `
        /* Slow rotation for outer elements */
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        @keyframes bubble {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translate(2px, -4px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(-2px, 2px) scale(1.5);
            opacity: 0.5;
          }
          75% {
            transform: translate(1px, -2px) scale(1.2);
            opacity: 0.6;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
        }

        .animate-bubble {
          animation: bubble 4s ease-in-out infinite;
          will-change: transform, opacity;
        }

        /* Staggered delays for a natural look */
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }

        /* Optional: subtle rotation for extra realism */
        @keyframes bubble-rotate {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }

        .animate-bubble-rotate {
          animation: bubble-rotate 6s ease-in-out infinite;
        }
      `,
      }),
    ],
  });
}
export { I as default };
