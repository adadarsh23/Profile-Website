const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/ChromaGrid-KFCe3sRO.js',
      'assets/vendor_react-C8wG62CJ.js',
      'assets/vendor-Grk_15WJ.js',
      'assets/vendor_react-dom-DKAsGG5-.js',
    ])
) => i.map((i) => d[i]);
import { j as e, r as a, _ as i } from './vendor_react-C8wG62CJ.js';
import { s as l } from './bubble.module-Bdvz9-Ck.js';
import { L as o } from './index-BtU_4mIL.js';
import { Z as n } from './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const t = [
    {
      image: 'https://i.pravatar.cc/300?img=1',
      title: 'Sarah Johnson',
      subtitle: 'Music Producer & Beatmaker',
      handle: '@sarahbeats',
      borderColor: '#FF4D6D',
      gradient: 'linear-gradient(145deg, #FF4D6D, #000)',
      url: 'https://soundcloud.com/sarahjohnson',
    },
    {
      image: 'https://i.pravatar.cc/300?img=2',
      title: 'Mike Chen',
      subtitle: 'Electronic Music Producer',
      handle: '@mikeelectro',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(180deg, #F59E0B, #000)',
      url: 'https://spotify.com/artist/mikechen',
    },
  ],
  m = a.lazy(() =>
    i(() => import('./ChromaGrid-KFCe3sRO.js'), __vite__mapDeps([0, 1, 2, 3]))
  ),
  x = () =>
    e.jsx(n.h2, {
      className:
        'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: 'easeOut' },
      children: 'Blog Posts'
        .split('')
        .map((s, r) =>
          e.jsx('span', { className: l.hoverText, children: s }, r)
        ),
    });
function g() {
  return e.jsxs('div', {
    className: `relative bg-black text-white min-h-screen flex flex-col items-center justify-center
                px-4 sm:px-6 md:px-12 py-12
                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
                overflow-hidden`,
    children: [
      e.jsx(x, {}),
      e.jsx('div', {
        className: 'relative w-full max-w-7xl',
        children:
          t.length > 0
            ? e.jsx(a.Suspense, {
                fallback: e.jsx('div', { children: e.jsx(o, {}) }),
                children: e.jsx(m, {
                  items: t,
                  radius: 300,
                  damping: 1,
                  fadeOut: 0.9,
                  ease: 'power3.out',
                }),
              })
            : e.jsx('p', {
                className: 'text-center text-gray-400 text-lg md:text-xl',
                children: 'No blog posts available.',
              }),
      }),
    ],
  });
}
export { g as default };
