const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/BlurText-Cd7HcAnD.js',
      'assets/vendor-C8sBI81f.js',
      'assets/Vortex-XKo-yrB_.js',
      'assets/utils-BtE0PGZ8.js',
    ])
) => i.map((i) => d[i]);
import { j as e, r as t, _ as l } from './vendor-C8sBI81f.js';
import './index-BgDpI5-0.js';
const r = t.lazy(() =>
    l(() => import('./BlurText-Cd7HcAnD.js'), __vite__mapDeps([0, 1]))
  ),
  x = t.lazy(() =>
    l(() => import('./Vortex-XKo-yrB_.js'), __vite__mapDeps([2, 1, 3]))
  );
function Header() {
  return e.jsx('div', {
    className:
      'relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12',
    children: e.jsxs(x, {
      backgroundColor: 'black',
      rangeY: 1e3,
      particleCount: 1e3,
      baseHue: 1e3,
      className:
        'flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full',
      children: [
        e.jsx('h2', {
          className: 'text-white text-2xl md:text-6xl font-bold text-center',
          children: e.jsx(r, {
            text: 'Welcome To Âd Adarsh Profile',
            delay: 100,
            animateBy: 'words',
            direction: 'top',
            className:
              'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 sm:mb-8 flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 text-white striper-regular',
          }),
        }),
        e.jsx('p', {
          className:
            'text-white text-sm md:text-2xl max-w-xl mt-6 text-center striper-regular',
          children: 'Explore my projects, beats, and music production works.',
        }),
      ],
    }),
  });
}
export { Header as default };
