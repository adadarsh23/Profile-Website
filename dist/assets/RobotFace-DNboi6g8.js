const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/RobotHead-DuUTlmgD.js',
      'assets/vendor-iWomKbAA.js',
      'assets/AIChatCard-Dz-Hdxef.js',
      'assets/utils-DfWtT5OB.js',
    ])
) => i.map((i) => d[i]);
import {
  r as e,
  a1 as t,
  a2 as a,
  j as s,
  a3 as n,
  a4 as i,
  a5 as o,
  X as r,
  g as l,
  a6 as d,
  a7 as f,
  a8 as c,
  a9 as u,
  aa as m,
  m as h,
  _ as p,
} from './vendor-iWomKbAA.js';
import { c as x } from './utils-DfWtT5OB.js';
import { E as g } from './index-Bkc3ae4Q.js';
const w = t,
  b = a,
  y = n,
  v = e.forwardRef(({ className: e, ...t }, a) =>
    s.jsx(c, {
      className: x(
        'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        e
      ),
      ...t,
      ref: a,
    })
  );
v.displayName = c.displayName;
const j = l(
    'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
    {
      variants: {
        side: {
          top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
          bottom:
            'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
          left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
          right:
            'inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        },
      },
      defaultVariants: { side: 'right' },
    }
  ),
  N = e.forwardRef(
    (
      {
        side: e = 'right',
        className: t,
        children: a,
        showCloseButton: n = !0,
        ...l
      },
      d
    ) =>
      s.jsxs(y, {
        children: [
          s.jsx(v, {}),
          s.jsxs(i, {
            ref: d,
            className: x(j({ side: e }), t),
            ...l,
            children: [
              a,
              n &&
                s.jsxs(o, {
                  className:
                    'absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
                  children: [
                    s.jsx(r, { className: 'h-4 w-4' }),
                    s.jsx('span', { className: 'sr-only', children: 'Close' }),
                  ],
                }),
            ],
          }),
        ],
      })
  );
N.displayName = i.displayName;
const E = e.forwardRef(({ className: e, ...t }, a) =>
  s.jsx(d, {
    ref: a,
    className: x('text-lg font-semibold text-foreground', e),
    ...t,
  })
);
E.displayName = d.displayName;
const R = e.forwardRef(({ className: e, ...t }, a) =>
  s.jsx(f, { ref: a, className: x('text-sm text-muted-foreground', e), ...t })
);
R.displayName = f.displayName;
const A = e.memo(() =>
    s.jsxs('div', {
      className:
        'w-full h-full bg-black/90 backdrop-blur-xl rounded-3xl border border-white/10 flex flex-col overflow-hidden animate-fadeIn',
      children: [
        s.jsxs('div', {
          className:
            'px-5 py-4 border-b border-white/10 flex items-center gap-4 animate-pulse',
          children: [
            s.jsx('div', {
              className: 'w-8 h-8 bg-gray-700/50 rounded-md animate-pulse',
            }),
            s.jsx('div', {
              className: 'h-5 w-1/3 bg-gray-700/50 rounded-md animate-pulse',
            }),
          ],
        }),
        s.jsx('div', {
          className: 'flex-1 p-5 flex flex-col gap-5 overflow-y-auto',
          children: [
            {
              width: 'w-3/4',
              height: 'h-10',
              align: 'self-start',
              color: 'bg-gray-700/50',
            },
            {
              width: 'w-2/3',
              height: 'h-12',
              align: 'self-end ml-auto',
              color: 'bg-gray-600/50',
            },
            {
              width: 'w-1/2',
              height: 'h-8',
              align: 'self-start',
              color: 'bg-gray-700/50',
            },
            {
              width: 'w-5/6',
              height: 'h-10',
              align: 'self-end ml-auto',
              color: 'bg-gray-600/50',
            },
            {
              width: 'w-2/3',
              height: 'h-8',
              align: 'self-start',
              color: 'bg-gray-700/50',
            },
          ].map((e, t) =>
            s.jsx(
              'div',
              {
                className: `${e.height} ${e.width} ${e.align} ${e.color} rounded-2xl relative overflow-hidden shimmer-ray`,
                children: s.jsx('div', {
                  className:
                    'absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer',
                }),
              },
              t
            )
          ),
        }),
        s.jsxs('div', {
          className: 'flex items-center gap-4 p-4 border-t border-white/10',
          children: [
            s.jsx('div', {
              className:
                'flex-1 h-12 bg-gray-800/60 rounded-2xl relative overflow-hidden',
              children: s.jsxs('div', {
                className: 'absolute bottom-3 left-4 flex gap-2',
                children: [
                  s.jsx('span', {
                    className:
                      'w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce delay-150',
                  }),
                  s.jsx('span', {
                    className:
                      'w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce delay-300',
                  }),
                  s.jsx('span', {
                    className:
                      'w-2.5 h-2.5 bg-gray-500 rounded-full animate-bounce delay-450',
                  }),
                ],
              }),
            }),
            s.jsx('div', { className: 'w-12 h-12 bg-gray-700/50 rounded-2xl' }),
          ],
        }),
      ],
    })
  ),
  L = e.lazy(() =>
    p(() => import('./RobotHead-DuUTlmgD.js'), __vite__mapDeps([0, 1]))
  ),
  C = e.lazy(() =>
    p(
      () => import('./AIChatCard-Dz-Hdxef.js'),
      __vite__mapDeps([2, 1, 3])
    ).then((e) => ({ default: e.default || e.AIChatCard }))
  );
function RobotFace() {
  const { cursor: t, velocity: a } = (function () {
      const t = e.useRef({ x: 0, y: 0 }),
        a = e.useRef({ x: 0, y: 0 }),
        s = e.useRef({ x: 0, y: 0 }),
        n = e.useRef(null);
      return (
        e.useEffect(() => {
          const handleMove = (e) => {
              const t = e.touches?.[0] || e;
              if (!t) return;
              const s = t.clientX,
                n = t.clientY,
                i = window.innerWidth,
                o = window.innerHeight,
                r = (s - i) / (window.innerWidth / 2),
                l = (n - o) / (window.innerHeight / 2);
              ((a.current.x = r), (a.current.y = -l));
            },
            animate = () => {
              const e = a.current.x - t.current.x,
                i = a.current.y - t.current.y;
              ((s.current.x = 0.85 * s.current.x + 0.008 * e),
                (s.current.y = 0.85 * s.current.y + 0.008 * i),
                (t.current.x += s.current.x),
                (t.current.y += s.current.y),
                (n.current = requestAnimationFrame(animate)));
            };
          return (
            window.addEventListener('mousemove', handleMove, { passive: !0 }),
            window.addEventListener('touchmove', handleMove, { passive: !0 }),
            (n.current = requestAnimationFrame(animate)),
            () => {
              (cancelAnimationFrame(n.current),
                window.removeEventListener('mousemove', handleMove),
                window.removeEventListener('touchmove', handleMove));
            }
          );
        }, []),
        { cursor: t, velocity: s }
      );
    })(),
    [n, i] = e.useState(!1),
    [o, r] = e.useState(!1),
    [l, d] = e.useState(
      'undefined' != typeof window ? window.innerWidth : 1024
    ),
    [f, c] = e.useState(!1);
  (e.useEffect(() => {
    'undefined' != typeof window && c('ontouchstart' in window);
  }, []),
    e.useEffect(() => {
      const handleResize = () => d(window.innerWidth);
      return (
        window.addEventListener('resize', handleResize, { passive: !0 }),
        () => window.removeEventListener('resize', handleResize)
      );
    }, []));
  const p = l < 640 ? 40 : l < 1024 ? 60 : 75,
    x = n
      ? '0 0 40px #ffffff, 0 0 80px #ffffff50, inset 0 0 20px #ffffff30'
      : '0 0 25px #ffffff, 0 0 50px #ffffff40, inset 0 0 15px #ffffff20',
    y = e.useMemo(
      () =>
        s.jsx(g, {
          fallback: s.jsx('div', {
            className: 'w-full h-full bg-black rounded-full',
          }),
          children: s.jsxs(u, {
            style: { pointerEvents: 'none' },
            camera: { position: [0, 0, 3.5], fov: 50 },
            gl: {
              antialias: !0,
              alpha: !0,
              powerPreference: 'high-performance',
            },
            dpr: [1, 2],
            children: [
              s.jsx('ambientLight', { intensity: 0.6 }),
              s.jsx('pointLight', { position: [5, 5, 5], intensity: 1.1 }),
              s.jsx('pointLight', {
                position: [-5, -5, -5],
                intensity: 0.4,
                color: '#ffffff',
              }),
              s.jsx('spotLight', {
                position: [0, 10, 0],
                angle: 0.3,
                penumbra: 1,
                intensity: 0.6,
                color: '#ffffff',
              }),
              s.jsxs(e.Suspense, {
                fallback: null,
                children: [
                  s.jsx(L, { cursor: t, velocity: a, isHovered: n }),
                  s.jsx(m, { preset: 'city' }),
                ],
              }),
            ],
          }),
        }),
      [t, a, n]
    );
  return s.jsx('div', {
    className: 'fixed bottom-4 right-14 sm:bottom-6 sm:right-18 z-50',
    children: s.jsxs(w, {
      open: o,
      onOpenChange: r,
      children: [
        s.jsx(b, {
          asChild: !0,
          children: s.jsxs(h.div, {
            whileHover: { scale: 1.08 },
            whileTap: { scale: 0.92 },
            onHoverStart: f ? void 0 : () => i(!0),
            onHoverEnd: f ? void 0 : () => i(!1),
            onTouchStart: f ? () => i(!0) : void 0,
            onTouchEnd: f ? () => i(!1) : void 0,
            className:
              'cursor-pointer rounded-full overflow-hidden flex items-center justify-center relative',
            style: { width: `${p}px`, height: `${p}px`, boxShadow: x },
            transition: { type: 'spring', stiffness: 300, damping: 20 },
            'aria-label': 'Open AI Chat',
            role: 'button',
            tabIndex: 0,
            children: [
              s.jsx(h.div, {
                className: 'absolute inset-0 rounded-full bg-white',
                animate: { scale: [1, 1.3], opacity: [0.2, 0] },
                transition: { duration: 1.5, repeat: 1 / 0, ease: 'easeOut' },
              }),
              y,
            ],
          }),
        }),
        s.jsxs(N, {
          side: 'right',
          className:
            'bg-transparent border-none p-0 w-full sm:w-[400px] md:w-[450px]',
          showCloseButton: !1,
          style: { boxShadow: '0 0 60px #ffffff40, inset 0 0 40px #ffffff10' },
          children: [
            s.jsx(E, { className: 'sr-only', children: 'AD Assistant' }),
            s.jsx(R, {
              className: 'sr-only',
              children: 'An interactive chat with an AD assistant.',
            }),
            s.jsx(h.div, {
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5, ease: 'easeOut' },
              className: 'w-full h-full',
              children: s.jsx(e.Suspense, {
                fallback: s.jsx(A, {}),
                children: s.jsx(C, { onClose: () => r(!1) }),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { RobotFace as default };
