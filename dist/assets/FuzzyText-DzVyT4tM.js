import { r as e, j as t, R as n } from './vendor-CLKqtzgM.js';
const FuzzyText = ({
  children: o,
  fontSize: i = 'clamp(2rem, 10vw, 10rem)',
  fontWeight: a = 900,
  fontFamily: r = 'inherit',
  color: c = '#fff',
  enableHover: s = !0,
  baseIntensity: l = 0.18,
  hoverIntensity: u = 0.5,
}) => {
  const d = e.useRef(null);
  return (
    e.useEffect(() => {
      let e,
        t = !1;
      const m = d.current;
      if (!m) return;
      return (
        (async () => {
          if ((document.fonts?.ready && (await document.fonts.ready), t))
            return;
          const d = m.getContext('2d');
          if (!d) return;
          const f =
              'inherit' === r
                ? window.getComputedStyle(m).fontFamily || 'sans-serif'
                : r,
            h = 'number' == typeof i ? `${i}px` : i;
          let v;
          if ('number' == typeof i) v = i;
          else {
            const e = document.createElement('span');
            ((e.style.fontSize = i), document.body.appendChild(e));
            const t = window.getComputedStyle(e).fontSize;
            ((v = parseFloat(t)), document.body.removeChild(e));
          }
          const p = n.Children.toArray(o).join(''),
            y = document.createElement('canvas'),
            g = y.getContext('2d');
          if (!g) return;
          ((g.font = `${a} ${h} ${f}`), (g.textBaseline = 'alphabetic'));
          const w = g.measureText(p),
            x = w.actualBoundingBoxLeft ?? 0,
            B = w.actualBoundingBoxRight ?? w.width,
            E = w.actualBoundingBoxAscent ?? v,
            z = w.actualBoundingBoxDescent ?? 0.2 * v,
            C = Math.ceil(x + B),
            F = Math.ceil(E + z),
            L = C + 10;
          ((y.width = L), (y.height = F));
          ((g.font = `${a} ${h} ${f}`),
            (g.textBaseline = 'alphabetic'),
            (g.fillStyle = c),
            g.fillText(p, 5 - x, E));
          ((m.width = L + 100), (m.height = F + 0), d.translate(50, 0));
          const b = 55 + C,
            $ = 0 + F;
          let R = !1;
          const run = () => {
            if (t) return;
            d.clearRect(-30, -30, L + 60, F + 60);
            const n = R ? u : l;
            for (let e = 0; e < F; e++) {
              const t = Math.floor(n * (Math.random() - 0.5) * 30);
              d.drawImage(y, 0, e, L, 1, t, e, L, 1);
            }
            e = window.requestAnimationFrame(run);
          };
          run();
          const isInsideTextArea = (e, t) =>
              e >= 55 && e <= b && t >= 0 && t <= $,
            handleMouseMove = (e) => {
              if (!s) return;
              const t = m.getBoundingClientRect(),
                n = e.clientX - t.left,
                o = e.clientY - t.top;
              R = isInsideTextArea(n, o);
            },
            handleMouseLeave = () => {
              R = !1;
            },
            handleTouchMove = (e) => {
              if (!s) return;
              e.preventDefault();
              const t = m.getBoundingClientRect(),
                n = e.touches[0],
                o = n.clientX - t.left,
                i = n.clientY - t.top;
              R = isInsideTextArea(o, i);
            },
            handleTouchEnd = () => {
              R = !1;
            };
          s &&
            (m.addEventListener('mousemove', handleMouseMove),
            m.addEventListener('mouseleave', handleMouseLeave),
            m.addEventListener('touchmove', handleTouchMove, { passive: !1 }),
            m.addEventListener('touchend', handleTouchEnd));
          m.cleanupFuzzyText = () => {
            (window.cancelAnimationFrame(e),
              s &&
                (m.removeEventListener('mousemove', handleMouseMove),
                m.removeEventListener('mouseleave', handleMouseLeave),
                m.removeEventListener('touchmove', handleTouchMove),
                m.removeEventListener('touchend', handleTouchEnd)));
          };
        })(),
        () => {
          ((t = !0),
            window.cancelAnimationFrame(e),
            m && m.cleanupFuzzyText && m.cleanupFuzzyText());
        }
      );
    }, [o, i, a, r, c, s, l, u]),
    t.jsx('canvas', { ref: d })
  );
};
export { FuzzyText as default };
