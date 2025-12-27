import { r as e, j as t, C as r } from './vendor-iWomKbAA.js';
const ScrollToTopButton = () => {
  const [a, o] = e.useState(!1),
    [s, n] = e.useState(0),
    l = e.useRef(null),
    c = e.useRef(0),
    i = e.useCallback(() => {
      c.current =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    }, []),
    u = e.useCallback(() => {
      (l.current && cancelAnimationFrame(l.current),
        (l.current = requestAnimationFrame(() => {
          0 === c.current && i();
          const e =
              document.body.scrollTop || document.documentElement.scrollTop,
            t = c.current > 0 ? (e / c.current) * 100 : 0;
          (n(t), o(e > 300));
        })));
    }, [i]);
  e.useEffect(
    () => (
      window.addEventListener('scroll', u, { passive: !0 }),
      window.addEventListener('resize', i, { passive: !0 }),
      () => {
        (window.removeEventListener('scroll', u),
          l.current && cancelAnimationFrame(l.current));
      }
    ),
    [u]
  );
  const d = e.useCallback(() => {
      const e = window.scrollY,
        t = performance.now(),
        r = Math.max(400, Math.min(800, e / 2)),
        scroll = (a) => {
          const o = a - t,
            s = Math.min(o / r, 1),
            n = ((l = s), 1 - Math.pow(1 - l, 3));
          var l;
          (window.scrollTo(0, e * (1 - n)),
            s < 1 && requestAnimationFrame(scroll));
        };
      requestAnimationFrame(scroll);
    }, []),
    m = 2 * Math.PI * 22,
    h = m - (s / 100) * m;
  return t.jsxs('button', {
    onClick: d,
    'aria-label': 'Scroll to top',
    className:
      'group fixed z-50 flex items-center justify-center rounded-full\n      bg-white-900/80 dark:bg-gray-900/80 backdrop-blur-md\n      border-2 border-gray-200 dark:border-gray-700\n      shadow-lg dark:shadow-2xl dark:shadow-black/25\n      transition-all duration-300 ease-out\n      hover:scale-110 hover:shadow-xl hover:border-black dark:hover:border-white\n      active:scale-100      \n      w-6 h-6 bottom-4 right-4 sm:w-8 sm:h-8 sm:bottom-6 sm:right-6 lg:w-8 lg:h-8 lg:bottom-8 lg:right-8\n      ' +
      (a
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10 pointer-events-none'),
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
            r: 22,
            cx: '25',
            cy: '25',
          }),
          t.jsx('circle', {
            className:
              'text-black dark:text-white transition-colors duration-300',
            stroke: 'currentColor',
            strokeWidth: '3',
            fill: 'transparent',
            r: 22,
            cx: '25',
            cy: '25',
            strokeDasharray: m,
            strokeDashoffset: h,
            strokeLinecap: 'round',
          }),
        ],
      }),
      t.jsxs('div', {
        className: 'relative flex items-center justify-center w-full h-full',
        children: [
          t.jsx(r, {
            className:
              'absolute w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-200 dark:text-gray-800 transition-all duration-200 ease-in-out group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-y-1',
          }),
          t.jsxs('span', {
            className:
              'absolute text-xs sm:text-sm lg:text-base font-bold text-white dark:text-gray-200 opacity-0 scale-75 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-100',
            children: [Math.round(s), '%'],
          }),
        ],
      }),
    ],
  });
};
export { ScrollToTopButton as default };
