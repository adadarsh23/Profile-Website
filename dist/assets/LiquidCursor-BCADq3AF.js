import { r as e, h as r, j as n, k as t } from './vendor-DEG5g0yW.js';
import { c as a } from './utils-65uuWg0a.js';
const LiquidCursor = ({ size: s = 40, strong: o = !1, className: c, ...i }) => {
  const u = e.useRef(null),
    d = e.useRef({ x: 0, y: 0 }),
    l = e.useRef(0);
  r(() => {
    const moveDrop = (e) => {
      if (!u.current) return;
      const r = e.clientX - d.current.x,
        n = e.clientY - d.current.y,
        a = Math.sqrt(r * r + n * n);
      let o = Math.atan2(n, r) * (180 / Math.PI) - l.current;
      (o > 180 && (o -= 360), o < -180 && (o += 360));
      const c = l.current + 0.2 * o,
        i = Math.min(a / 30, 1.2),
        b = Math.abs(r),
        p = b / (b + Math.abs(n) || 1),
        x = 1 + p * i,
        g = 1 - p * i * 0.3;
      (t.to(u.current, {
        duration: 1,
        left: e.clientX - s / 2,
        top: e.clientY - s / 2,
        scaleX: x,
        scaleY: g,
        rotate: c,
        ease: 'power2.out',
      }),
        (l.current = c),
        (d.current = { x: e.clientX, y: e.clientY }));
    };
    return (
      window.addEventListener('click', () => {
        u.current &&
          t.to(u.current, {
            scale: 1.3,
            duration: 0.3,
            ease: 'power2.out',
            onComplete: () => {
              t.to(u.current, { scale: 1, duration: 0.4, ease: 'bounce.out' });
            },
          });
      }),
      window.addEventListener('mousemove', moveDrop),
      () => window.removeEventListener('mousemove', moveDrop)
    );
  }, []);
  const b = {
      background:
        '\n  radial-gradient(circle, \n    rgba(255, 255, 255, 0.25) 90%,  \n    rgba(255, 255, 255, 0.1) 70%, \n    transparent 20%                \n  )\n',
      border: '1px solid rgba(255, 255, 255, 0.25)',
    },
    p = {
      background:
        '\n    radial-gradient(125.95% 106.37% at 32.61% 3.41%,\n    rgba(255, 255, 255, 0.6) 0%,\n    rgba(255, 255, 255, 0.45) 28.13%,\n    rgba(252, 252, 252, 0.35) 45.31%,\n    rgba(248, 248, 248, 0.3) 66.67%,\n    rgba(243, 243, 243, 0.25) 100%)\n  ',
      boxShadow:
        '\n    0 8px 16px rgba(0, 0, 0, 0.1),\n    inset -4px -8px 12px rgba(255, 255, 255, 0.05),\n    inset 3px 3px 8px rgba(240, 240, 240, 0.04),\n    inset 5px 10px 14px rgba(255, 255, 255, 0.03)\n  ',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    };
  return n.jsx('div', {
    ...i,
    ref: u,
    className: a(
      'pointer-events-none fixed z-999 rounded-full saturate-[180%] backdrop-blur-[2px]',
      'dark:saturate-[160%] dark:backdrop-brightness-[0.8]',
      c
    ),
    style: { height: s, width: s, ...(o ? p : b) },
  });
};
export { LiquidCursor };
