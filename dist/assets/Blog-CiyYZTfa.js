const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/ChromaGrid-uk2CHQ0-.js',
      'assets/vendor-C8sBI81f.js',
      'assets/bubble.module-YQKLPTNq.js',
      'assets/bubble-C_vl8Ga6.css',
    ])
) => i.map((i) => d[i]);
import { r as e, _ as t, j as a, m as s } from './vendor-C8sBI81f.js';
import { L as i } from './index-BgDpI5-0.js';
const l = [
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
  r = e.lazy(() =>
    t(() => import('./ChromaGrid-uk2CHQ0-.js'), __vite__mapDeps([0, 1]))
  );
function Blog() {
  const [n, o] = e.useState(null);
  e.useEffect(() => {
    t(() => import('./bubble.module-YQKLPTNq.js'), __vite__mapDeps([2, 3]))
      .then((e) => o(e.default))
      .catch((e) => {});
  }, []);
  const BubbleText = () =>
    n
      ? a.jsx(s.h2, {
          className:
            'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
          initial: { y: -20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6, ease: 'easeOut' },
          children: 'Blog Posts'
            .split('')
            .map((e, t) =>
              a.jsx('span', { className: n.hoverText, children: e }, t)
            ),
        })
      : null;
  return a.jsxs('div', {
    className:
      'relative bg-black text-white min-h-screen flex flex-col items-center justify-center\n                px-4 sm:px-6 md:px-12 py-12\n                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16\n                overflow-hidden',
    children: [
      a.jsx(BubbleText, {}),
      a.jsx('div', {
        className: 'relative w-full max-w-7xl',
        children: a.jsx(s.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          children:
            l.length > 0
              ? a.jsx(e.Suspense, {
                  fallback: a.jsx('div', { children: a.jsx(i, {}) }),
                  children: a.jsx(r, {
                    items: l,
                    radius: 300,
                    damping: 1,
                    fadeOut: 0.9,
                    ease: 'power3.out',
                  }),
                })
              : a.jsx('p', {
                  className: 'text-center text-gray-400 text-lg md:text-xl',
                  children: 'No blog posts available.',
                }),
        }),
      }),
    ],
  });
}
export { Blog as default };
