const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-BtU_4mIL.js',
      'assets/vendor_react-C8wG62CJ.js',
      'assets/vendor-Grk_15WJ.js',
      'assets/vendor_react-dom-DKAsGG5-.js',
      'assets/index-BpajaV4b.css',
      'assets/card-DQ-fVX4b.js',
      'assets/utils-x720GUhr.js',
      'assets/button-MMdNCqjI.js',
    ])
) => i.map((i) => d[i]);
import { j as e, r as i, _ as r } from './vendor_react-C8wG62CJ.js';
import { s as o } from './bubble.module-Bdvz9-Ck.js';
import { Z as l } from './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const d = [
    {
      title: 'Our Mission',
      description:
        'Create high-quality, scalable, and impactful software solutions that solve real-world problems and delight users.',
    },
    {
      title: 'Our Vision',
      description:
        'Inspire and empower developers with intuitive tools, reusable components, and modern frameworks that accelerate innovation.',
    },
    {
      title: 'Our Values',
      description:
        'Commitment to innovation, simplicity, transparency, and continuous improvement in everything we build and deliver.',
    },
  ],
  n = i.lazy(() =>
    r(
      () => import('./index-BtU_4mIL.js').then((t) => t.a),
      __vite__mapDeps([0, 1, 2, 3, 4])
    )
  ),
  {
    Card: c,
    CardContent: m,
    CardHeader: x,
    CardTitle: u,
    CardDescription: h,
  } = {
    Card: i.lazy(() =>
      r(
        () => import('./card-DQ-fVX4b.js'),
        __vite__mapDeps([5, 1, 2, 3, 6])
      ).then((t) => ({ default: t.Card }))
    ),
    CardContent: i.lazy(() =>
      r(
        () => import('./card-DQ-fVX4b.js'),
        __vite__mapDeps([5, 1, 2, 3, 6])
      ).then((t) => ({ default: t.CardContent }))
    ),
    CardHeader: i.lazy(() =>
      r(
        () => import('./card-DQ-fVX4b.js'),
        __vite__mapDeps([5, 1, 2, 3, 6])
      ).then((t) => ({ default: t.CardHeader }))
    ),
    CardTitle: i.lazy(() =>
      r(
        () => import('./card-DQ-fVX4b.js'),
        __vite__mapDeps([5, 1, 2, 3, 6])
      ).then((t) => ({ default: t.CardTitle }))
    ),
    CardDescription: i.lazy(() =>
      r(
        () => import('./card-DQ-fVX4b.js'),
        __vite__mapDeps([5, 1, 2, 3, 6])
      ).then((t) => ({ default: t.CardDescription }))
    ),
  },
  p = i.lazy(() =>
    r(
      () => import('./button-MMdNCqjI.js'),
      __vite__mapDeps([7, 1, 2, 3, 6])
    ).then((t) => ({ default: t.Button }))
  );
function b() {
  const t = () =>
    e.jsx(l.h2, {
      className:
        'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: 'easeOut' },
      children: 'About Us'
        .split('')
        .map((a, s) =>
          e.jsx('span', { className: o.hoverText, children: a }, s)
        ),
    });
  return e.jsxs('div', {
    className: `relative bg-black text-white min-h-screen flex flex-col items-center justify-center
                px-4 sm:px-6 md:px-12 py-12
                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
                overflow-hidden`,
    children: [
      e.jsx(t, {}),
      e.jsxs('div', {
        className: 'w-full max-w-7xl mx-auto flex flex-col items-center',
        children: [
          e.jsx('p', {
            className:
              'max-w-3xl text-center text-base sm:text-lg md:text-xl mb-16 leading-relaxed',
            children:
              'Welcome to our platform. We focus on creating immersive music and beats using the latest production tools. Our mission is to deliver high-quality, engaging, and unique sound experiences while leveraging modern software and creative techniques.',
          }),
          e.jsx('div', {
            className:
              'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full',
            children: d.map((a, s) =>
              e.jsx(
                i.Suspense,
                {
                  fallback: e.jsx('div', { children: e.jsx(n, {}) }),
                  children: e.jsxs(c, {
                    className:
                      'bg-black-900 border border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg',
                    children: [
                      e.jsx(x, {
                        children: e.jsx(u, {
                          className: 'text-white text-xl',
                          children: a.title,
                        }),
                      }),
                      e.jsx(m, {
                        children: e.jsx(h, {
                          className: 'text-gray-300',
                          children: a.description,
                        }),
                      }),
                    ],
                  }),
                },
                s
              )
            ),
          }),
          e.jsx('div', {
            className: 'mt-16',
            children: e.jsx(i.Suspense, {
              fallback: e.jsx('div', { children: e.jsx(n, {}) }),
              children: e.jsx('a', {
                href: '/contact',
                children: e.jsx(p, {
                  variant: 'outline',
                  className:
                    'text-white bg-black border-white hover:bg-gray-800 hover:text-white transition-colors duration-300',
                  children: 'Contact Us',
                }),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
export { b as default };
