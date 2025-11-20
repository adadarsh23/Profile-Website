import { r as e, j as t, m as r } from './vendor-C8sBI81f.js';
const BlurText = ({
  text: n = '',
  delay: o = 200,
  className: s = '',
  animateBy: a = 'words',
  direction: i = 'top',
  threshold: l = 0.1,
  rootMargin: c = '0px',
  animationFrom: p,
  animationTo: u,
  easing: m = (e) => e,
  onAnimationComplete: f,
  stepDuration: d = 0.35,
}) => {
  const y = 'words' === a ? n.split(' ') : n.split(''),
    [h, x] = e.useState(!1),
    b = e.useRef(null);
  e.useEffect(() => {
    if (!b.current) return;
    const e = new IntersectionObserver(
      ([t]) => {
        t.isIntersecting && (x(!0), e.unobserve(b.current));
      },
      { threshold: l, rootMargin: c }
    );
    return (e.observe(b.current), () => e.disconnect());
  }, [l, c]);
  const g = e.useMemo(
      () =>
        'top' === i
          ? { filter: 'blur(10px)', opacity: 0, y: -50 }
          : { filter: 'blur(10px)', opacity: 0, y: 50 },
      [i]
    ),
    w = e.useMemo(
      () => [
        { filter: 'blur(5px)', opacity: 0.5, y: 'top' === i ? 5 : -5 },
        { filter: 'blur(0px)', opacity: 1, y: 0 },
      ],
      [i]
    ),
    j = p ?? g,
    v = u ?? w,
    M = v.length + 1,
    k = d * (M - 1),
    A = Array.from({ length: M }, (e, t) => (1 === M ? 0 : t / (M - 1)));
  return t.jsx('p', {
    ref: b,
    className: `blur-text ${s} flex flex-wrap`,
    children: y.map((e, n) => {
      const s = ((e, t) => {
          const r = new Set([
              ...Object.keys(e),
              ...t.flatMap((e) => Object.keys(e)),
            ]),
            n = {};
          return (
            r.forEach((r) => {
              n[r] = [e[r], ...t.map((e) => e[r])];
            }),
            n
          );
        })(j, v),
        i = { duration: k, times: A, delay: (n * o) / 1e3 };
      return (
        (i.ease = m),
        t.jsxs(
          r.span,
          {
            className: 'inline-block will-change-[transform,filter,opacity]',
            initial: j,
            animate: h ? s : j,
            transition: i,
            onAnimationComplete: n === y.length - 1 ? f : void 0,
            children: [
              ' ' === e ? ' ' : e,
              'words' === a && n < y.length - 1 && ' ',
            ],
          },
          n
        )
      );
    }),
  });
};
export { BlurText as default };
