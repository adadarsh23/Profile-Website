const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/RobotHead-DZ_fjAOB.js',
      'assets/vendor_react-C8wG62CJ.js',
      'assets/vendor-Grk_15WJ.js',
      'assets/vendor_react-dom-DKAsGG5-.js',
      'assets/ai-chat-kUgo_fpA.js',
      'assets/utils-x720GUhr.js',
    ])
) => i.map((i) => d[i]);
import {
  r as o,
  j as e,
  I as j,
  T as N,
  J as S,
  K as b,
  X as R,
  M as E,
  N as C,
  O as I,
  Q as T,
  U as L,
  V as O,
  _ as y,
} from './vendor_react-C8wG62CJ.js';
import './index-BtU_4mIL.js';
import { c as f } from './utils-x720GUhr.js';
import { Z as g } from './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const w = 0.008,
  v = 0.85;
function _() {
  const a = o.useRef({ x: 0, y: 0 }),
    s = o.useRef({ x: 0, y: 0 }),
    t = o.useRef({ x: 0, y: 0 }),
    n = o.useRef(null);
  return (
    o.useEffect(() => {
      const r = (i) => {
          const d = i.touches?.[0] || i;
          if (!d) return;
          const c = d.clientX,
            x = d.clientY,
            u = window.innerWidth,
            m = window.innerHeight,
            p = (c - u) / (window.innerWidth / 2),
            h = (x - m) / (window.innerHeight / 2);
          ((s.current.x = p), (s.current.y = -h));
        },
        l = () => {
          const i = s.current.x - a.current.x,
            d = s.current.y - a.current.y;
          ((t.current.x = t.current.x * v + i * w),
            (t.current.y = t.current.y * v + d * w),
            (a.current.x += t.current.x),
            (a.current.y += t.current.y),
            (n.current = requestAnimationFrame(l)));
        };
      return (
        window.addEventListener('mousemove', r, { passive: !0 }),
        window.addEventListener('touchmove', r, { passive: !0 }),
        (n.current = requestAnimationFrame(l)),
        () => {
          (cancelAnimationFrame(n.current),
            window.removeEventListener('mousemove', r),
            window.removeEventListener('touchmove', r));
        }
      );
    }, []),
    { cursor: a, velocity: t }
  );
}
const A = o.forwardRef(function (s, t) {
    return e.jsx(j, { ref: t, 'data-slot': 'sheet', ...s });
  }),
  z = o.forwardRef(function (s, t) {
    return e.jsx(N, { ref: t, 'data-slot': 'sheet-trigger', ...s });
  });
o.forwardRef(function (s, t) {
  return e.jsx(b, { ref: t, 'data-slot': 'sheet-close', ...s });
});
const k = o.forwardRef(function (s, t) {
    return e.jsx(I, { ref: t, 'data-slot': 'sheet-portal', ...s });
  }),
  H = o.forwardRef(function ({ className: s, ...t }, n) {
    return e.jsx(T, {
      ref: n,
      'data-slot': 'sheet-overlay',
      className: f(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        s
      ),
      ...t,
    });
  }),
  P = o.forwardRef(function (
    { className: s, children: t, side: n = 'right', ...r },
    l
  ) {
    return e.jsxs(k, {
      children: [
        e.jsx(H, {}),
        e.jsxs(S, {
          ref: l,
          'data-slot': 'sheet-content',
          className: f(
            'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
            n === 'right' &&
              'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
            n === 'left' &&
              'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
            n === 'top' &&
              'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
            n === 'bottom' &&
              'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
            s
          ),
          ...r,
          children: [
            t,
            e.jsxs(b, {
              className:
                'ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none',
              children: [
                e.jsx(R, { className: 'size-4' }),
                e.jsx('span', { className: 'sr-only', children: 'Close' }),
              ],
            }),
          ],
        }),
      ],
    });
  });
o.forwardRef(function ({ className: s, ...t }, n) {
  return e.jsx('div', {
    ref: n,
    'data-slot': 'sheet-header',
    className: f('flex flex-col gap-1.5 p-4', s),
    ...t,
  });
});
o.forwardRef(function ({ className: s, ...t }, n) {
  return e.jsx('div', {
    ref: n,
    'data-slot': 'sheet-footer',
    className: f('mt-auto flex flex-col gap-2 p-4', s),
    ...t,
  });
});
const D = o.forwardRef(function ({ className: s, ...t }, n) {
    return e.jsx(E, {
      ref: n,
      'data-slot': 'sheet-title',
      className: f('text-foreground font-semibold', s),
      ...t,
    });
  }),
  F = o.forwardRef(function ({ className: s, ...t }, n) {
    return e.jsx(C, {
      ref: n,
      'data-slot': 'sheet-description',
      className: f('text-muted-foreground text-sm', s),
      ...t,
    });
  }),
  W = o.memo(() =>
    e.jsxs('div', {
      className:
        'w-full h-full bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 flex flex-col animate-pulse',
      children: [
        e.jsxs('div', {
          className:
            'px-4 py-3 border-b border-white/10 flex items-center gap-2',
          children: [
            e.jsx('div', { className: 'w-6 h-6 bg-gray-700/50 rounded-md' }),
            e.jsx('div', { className: 'h-5 w-1/3 bg-gray-700/50 rounded-md' }),
          ],
        }),
        e.jsxs('div', {
          className: 'flex-1 p-4 space-y-4',
          children: [
            e.jsx('div', {
              className: 'h-10 w-3/4 bg-gray-700/50 rounded-lg self-start',
            }),
            e.jsx('div', {
              className:
                'h-12 w-2/3 bg-gray-600/50 rounded-lg self-end ml-auto',
            }),
            e.jsx('div', {
              className: 'h-8 w-1/2 bg-gray-700/50 rounded-lg self-start',
            }),
          ],
        }),
        e.jsxs('div', {
          className: 'flex items-center gap-2 p-3 border-t border-white/10',
          children: [
            e.jsx('div', {
              className: 'flex-1 h-10 bg-gray-800/60 rounded-lg',
            }),
            e.jsx('div', { className: 'w-10 h-10 bg-gray-700/50 rounded-lg' }),
          ],
        }),
      ],
    })
  ),
  X = o.lazy(() =>
    y(() => import('./RobotHead-DZ_fjAOB.js'), __vite__mapDeps([0, 1, 2, 3]))
  ),
  Y = o.lazy(() =>
    y(
      () => import('./ai-chat-kUgo_fpA.js'),
      __vite__mapDeps([4, 1, 2, 3, 5])
    ).then((a) => ({ default: a.default || a.AIChatCard }))
  );
function J() {
  const { cursor: a, velocity: s } = _(),
    [t, n] = o.useState(!1),
    [r, l] = o.useState(!1),
    [i, d] = o.useState(typeof window < 'u' ? window.innerWidth : 1024),
    [c, x] = o.useState(!1);
  (o.useEffect(() => {
    typeof window < 'u' && x('ontouchstart' in window);
  }, []),
    o.useEffect(() => {
      const h = () => d(window.innerWidth);
      return (
        window.addEventListener('resize', h, { passive: !0 }),
        () => window.removeEventListener('resize', h)
      );
    }, []));
  const u = i < 640 ? 40 : i < 1024 ? 60 : 75,
    m = t
      ? '0 0 40px #ffffff, 0 0 80px #ffffff50, inset 0 0 20px #ffffff30'
      : '0 0 25px #ffffff, 0 0 50px #ffffff40, inset 0 0 15px #ffffff20',
    p = o.useMemo(
      () =>
        e.jsxs(L, {
          style: { pointerEvents: 'none' },
          camera: { position: [0, 0, 3.5], fov: 50 },
          gl: { antialias: !0, alpha: !0, powerPreference: 'high-performance' },
          dpr: [1, 2],
          children: [
            e.jsx('ambientLight', { intensity: 0.6 }),
            e.jsx('pointLight', { position: [5, 5, 5], intensity: 1.1 }),
            e.jsx('pointLight', {
              position: [-5, -5, -5],
              intensity: 0.4,
              color: '#ffffff',
            }),
            e.jsx('spotLight', {
              position: [0, 10, 0],
              angle: 0.3,
              penumbra: 1,
              intensity: 0.6,
              color: '#ffffff',
            }),
            e.jsxs(o.Suspense, {
              fallback: null,
              children: [
                e.jsx(X, { cursor: a, velocity: s, isHovered: t }),
                e.jsx(O, { preset: 'city' }),
              ],
            }),
          ],
        }),
      [a, s, t]
    );
  return e.jsx('div', {
    className: 'fixed bottom-4 right-14 sm:bottom-6 sm:right-18 z-50',
    children: e.jsxs(A, {
      open: r,
      onOpenChange: l,
      children: [
        e.jsx(z, {
          asChild: !0,
          children: e.jsxs(g.div, {
            whileHover: { scale: 1.08 },
            whileTap: { scale: 0.92 },
            onHoverStart: c ? void 0 : () => n(!0),
            onHoverEnd: c ? void 0 : () => n(!1),
            onTouchStart: c ? () => n(!0) : void 0,
            onTouchEnd: c ? () => n(!1) : void 0,
            className:
              'cursor-pointer rounded-full overflow-hidden flex items-center justify-center relative',
            style: { width: `${u}px`, height: `${u}px`, boxShadow: m },
            transition: { type: 'spring', stiffness: 300, damping: 20 },
            'aria-label': 'Open AI Chat',
            role: 'button',
            tabIndex: 0,
            children: [
              e.jsx(g.div, {
                className: 'absolute inset-0 rounded-full bg-white',
                animate: { scale: [1, 1.3], opacity: [0.2, 0] },
                transition: { duration: 1.5, repeat: 1 / 0, ease: 'easeOut' },
              }),
              p,
            ],
          }),
        }),
        e.jsxs(P, {
          side: 'right',
          className:
            'bg-transparent border-none p-0 w-full sm:w-[400px] md:w-[450px]',
          style: { boxShadow: '0 0 60px #ffffff40, inset 0 0 40px #ffffff10' },
          children: [
            e.jsx(D, { className: 'sr-only', children: 'AI Assistant Chat' }),
            e.jsx(F, {
              className: 'sr-only',
              children:
                'An interactive chat with an AI assistant. You can ask questions about the portfolio or have a general conversation.',
            }),
            e.jsx(g.div, {
              initial: { opacity: 0, x: 50 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5, ease: 'easeOut' },
              className: 'w-full h-full',
              children: e.jsx(o.Suspense, {
                fallback: e.jsx(W, {}),
                children: e.jsx(Y, {}),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { J as default };
