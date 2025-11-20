const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ['assets/FuzzyText-Dk5ksgXB.js', 'assets/vendor-C8sBI81f.js'])
) => i.map((i) => d[i]);
import { j as e, m as t, r as i, _ as n } from './vendor-C8sBI81f.js';
import { L as s } from './index-BgDpI5-0.js';
const a = i.lazy(() =>
  n(() => import('./FuzzyText-Dk5ksgXB.js'), __vite__mapDeps([0, 1]))
);
function NotFound() {
  return e.jsx(t.div, {
    className:
      'flex flex-col items-center justify-center min-h-screen px-4 bg-black text-white w-full',
    variants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
      },
    },
    initial: 'hidden',
    animate: 'visible',
    children: e.jsx('div', {
      className: 'text-center',
      children: e.jsx(t.span, {
        className:
          'block text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-black',
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        },
        children: e.jsx(i.Suspense, {
          fallback: e.jsx('span', { children: e.jsx(s, {}) }),
          children: e.jsx(a, {
            baseIntensity: 1,
            hoverIntensity: 1,
            enableHover: !0,
            fontSize: 200,
            fontWeight: 500,
            children: '404',
          }),
        }),
      }),
    }),
  });
}
export { NotFound as default };
