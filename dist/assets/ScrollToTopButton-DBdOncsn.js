import { r as e, j as t, C as j } from './vendor_react-C8wG62CJ.js';
import './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const S = () => {
  const [g, p] = e.useState(!1),
    [d, x] = e.useState(0),
    r = e.useRef(null),
    s = e.useRef(0),
    a = e.useCallback(() => {
      s.current =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    }, []),
    l = e.useCallback(() => {
      (r.current && cancelAnimationFrame(r.current),
        (r.current = requestAnimationFrame(() => {
          s.current === 0 && a();
          const o =
              document.body.scrollTop || document.documentElement.scrollTop,
            i = s.current > 0 ? (o / s.current) * 100 : 0;
          (x(i), p(o > 300));
        })));
    }, [a]);
  e.useEffect(
    () => (
      window.addEventListener('scroll', l, { passive: !0 }),
      window.addEventListener('resize', a, { passive: !0 }),
      () => {
        (window.removeEventListener('scroll', l),
          r.current && cancelAnimationFrame(r.current));
      }
    ),
    [l]
  );
  const b = e.useCallback(() => {
      const o = window.scrollY,
        i = performance.now(),
        w = Math.max(400, Math.min(800, o / 2)),
        k = (u) => 1 - Math.pow(1 - u, 3),
        m = (u) => {
          const v = u - i,
            h = Math.min(v / w, 1),
            y = k(h);
          (window.scrollTo(0, o * (1 - y)), h < 1 && requestAnimationFrame(m));
        };
      requestAnimationFrame(m);
    }, []),
    n = 22,
    c = 2 * Math.PI * n,
    f = c - (d / 100) * c;
  return t.jsxs('button', {
    onClick: b,
    'aria-label': 'Scroll to top',
    className: `group fixed z-50 flex items-center justify-center rounded-full
      bg-white-900/80 dark:bg-gray-900/80 backdrop-blur-md
      border-2 border-gray-200 dark:border-gray-700
      shadow-lg dark:shadow-2xl dark:shadow-black/25
      transition-all duration-300 ease-out
      hover:scale-110 hover:shadow-xl hover:border-black dark:hover:border-white
      active:scale-100
      
      /* Mobile devices */
      w-6 h-6 bottom-4 right-4
      /* Tablets */
      sm:w-8 sm:h-8 sm:bottom-6 sm:right-6
      /* Desktop */
      lg:w-8 lg:h-8 lg:bottom-8 lg:right-8
      ${g ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`,
    children: [
      t.jsxs('svg', {
        className: 'absolute w-full h-full -rotate-90',
        viewBox: '0 0 50 50',
        children: [
          t.jsx('circle', {
            className: 'text-gray-200/50 dark:text-gray-700/50',
            stroke: 'currentColor',
            strokeWidth: '3',
            fill: 'transparent',
            r: n,
            cx: '25',
            cy: '25',
          }),
          t.jsx('circle', {
            className:
              'text-black dark:text-white transition-colors duration-300',
            stroke: 'currentColor',
            strokeWidth: '3',
            fill: 'transparent',
            r: n,
            cx: '25',
            cy: '25',
            strokeDasharray: c,
            strokeDashoffset: f,
            strokeLinecap: 'round',
          }),
        ],
      }),
      t.jsxs('div', {
        className: 'relative flex items-center justify-center w-full h-full',
        children: [
          t.jsx(j, {
            className:
              'absolute w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-200 dark:text-gray-800 transition-all duration-200 ease-in-out group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-y-1',
          }),
          t.jsxs('span', {
            className:
              'absolute text-xs sm:text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 opacity-0 scale-75 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-100',
            children: [Math.round(d), '%'],
          }),
        ],
      }),
    ],
  });
};
export { S as default };
