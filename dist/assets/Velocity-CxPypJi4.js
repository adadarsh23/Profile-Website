const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ['assets/ScrollVelocity-nL-VF1ZX.js', 'assets/vendor-iWomKbAA.js'])
) => i.map((i) => d[i]);
import { r as e, w as t, j as i, m as a, _ as o } from './vendor-iWomKbAA.js';
const s = e.lazy(() =>
    o(() => import('./ScrollVelocity-nL-VF1ZX.js'), __vite__mapDeps([0, 1]))
  ),
  l = ['Beat Maker', 'Track Producer', 'Mixing & Mastering', 'Studio Vibes'];
function Velocity() {
  const o = e.useRef(null),
    n = t(o, { once: !0, amount: 0.3 });
  return i.jsx(a.div, {
    ref: o,
    className: 'overflow-hidden flex flex-col space-y-10',
    variants: {
      hidden: { opacity: 0, y: 75 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
      },
    },
    initial: 'hidden',
    animate: n ? 'visible' : 'hidden',
    children: i.jsx(s, {
      texts: l,
      velocity: 100,
      className:
        'relative overflow-hidden text-7xl font-bold sm:text-7xl md:text-7xl lg:text-7xl text-white p-4 sm:p-6 z-10 drop-shadow-lg',
    }),
  });
}
export { Velocity as default };
