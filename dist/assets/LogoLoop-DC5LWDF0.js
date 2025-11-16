import { r as e, j as o } from './vendor-CLKqtzgM.js';
const r = 0.25,
  t = 2,
  n = 2,
  cx = (...e) => e.filter(Boolean).join(' '),
  l = e.memo(
    ({
      logos: l,
      speed: a = 120,
      direction: i = 'left',
      width: s = '100%',
      logoHeight: c = 28,
      gap: u = 32,
      pauseOnHover: d = !0,
      fadeOut: f = !1,
      fadeOutColor: g,
      scaleOnHover: m = !1,
      ariaLabel: p = 'Partner logos',
      className: h,
      style: v,
    }) => {
      const b = e.useRef(null),
        x = e.useRef(null),
        w = e.useRef(null),
        [y, M] = e.useState(0),
        [j, C] = e.useState(t),
        [E, z] = e.useState(!1),
        L = e.useMemo(
          () => Math.abs(a) * ('left' === i ? 1 : -1) * (a < 0 ? -1 : 1),
          [a, i]
        ),
        N = e.useCallback(() => {
          const e = b.current?.clientWidth ?? 0,
            o = w.current?.getBoundingClientRect?.()?.width ?? 0;
          if (o > 0) {
            M(Math.ceil(o));
            const r = Math.ceil(e / o) + n;
            C(Math.max(t, r));
          }
        }, []);
      var k, R, A;
      ((k = N),
        (R = [b, w]),
        (A = [l, u, c]),
        e.useEffect(() => {
          if (!window.ResizeObserver) {
            const handleResize = () => k();
            return (
              window.addEventListener('resize', handleResize),
              k(),
              () => window.removeEventListener('resize', handleResize)
            );
          }
          const e = R.map((e) => {
            if (!e.current) return null;
            const o = new ResizeObserver(k);
            return (o.observe(e.current), o);
          });
          return (
            k(),
            () => {
              e.forEach((e) => e?.disconnect());
            }
          );
        }, A),
        ((o, r, t) => {
          e.useEffect(() => {
            const e = o.current?.querySelectorAll('img') ?? [];
            if (0 === e.length) return void r();
            let t = e.length;
            const handleImageLoad = () => {
              ((t -= 1), 0 === t && r());
            };
            return (
              e.forEach((e) => {
                const o = e;
                o.complete
                  ? handleImageLoad()
                  : (o.addEventListener('load', handleImageLoad, { once: !0 }),
                    o.addEventListener('error', handleImageLoad, { once: !0 }));
              }),
              () => {
                e.forEach((e) => {
                  (e.removeEventListener('load', handleImageLoad),
                    e.removeEventListener('error', handleImageLoad));
                });
              }
            );
          }, t);
        })(w, N, [l, u, c]),
        ((o, t, n, l, a) => {
          const i = e.useRef(null),
            s = e.useRef(null),
            c = e.useRef(0),
            u = e.useRef(0);
          e.useEffect(() => {
            const e = o.current;
            if (!e) return;
            const d =
              'undefined' != typeof window &&
              window.matchMedia &&
              window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (
              (n > 0 &&
                ((c.current = ((c.current % n) + n) % n),
                (e.style.transform = `translate3d(${-c.current}px, 0, 0)`)),
              d)
            )
              return (
                (e.style.transform = 'translate3d(0, 0, 0)'),
                () => {
                  s.current = null;
                }
              );
            const animate = (o) => {
              null === s.current && (s.current = o);
              const d = Math.max(0, o - s.current) / 1e3;
              s.current = o;
              const f = a && l ? 0 : t,
                g = 1 - Math.exp(-d / r);
              if (((u.current += (f - u.current) * g), n > 0)) {
                let o = c.current + u.current * d;
                ((o = ((o % n) + n) % n), (c.current = o));
                const r = -c.current;
                e.style.transform = `translate3d(${r}px, 0, 0)`;
              }
              i.current = requestAnimationFrame(animate);
            };
            return (
              (i.current = requestAnimationFrame(animate)),
              () => {
                (null !== i.current &&
                  (cancelAnimationFrame(i.current), (i.current = null)),
                  (s.current = null));
              }
            );
          }, [t, n, l, a, o]);
        })(x, L, y, E, d));
      const H = e.useMemo(
          () => ({
            '--logoloop-gap': `${u}px`,
            '--logoloop-logoHeight': `${c}px`,
            ...(g && { '--logoloop-fadeColor': g }),
          }),
          [u, c, g]
        ),
        $ = e.useMemo(
          () =>
            cx(
              'relative overflow-x-hidden group',
              '[--logoloop-gap:32px]',
              '[--logoloop-logoHeight:28px]',
              '[--logoloop-fadeColorAuto:#ffffff]',
              'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
              m && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
              h
            ),
          [m, h]
        ),
        _ = e.useCallback(() => {
          d && z(!0);
        }, [d]),
        O = e.useCallback(() => {
          d && z(!1);
        }, [d]),
        S = e.useCallback(
          (e, r) => {
            const t = 'node' in e,
              n = t
                ? o.jsx('span', {
                    className: cx(
                      'inline-flex items-center',
                      'motion-reduce:transition-none',
                      m &&
                        'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
                    ),
                    'aria-hidden': !!e.href && !e.ariaLabel,
                    children: e.node,
                  })
                : o.jsx('img', {
                    className: cx(
                      'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
                      '[-webkit-user-drag:none] pointer-events-none',
                      '[image-rendering:-webkit-optimize-contrast]',
                      'motion-reduce:transition-none',
                      m &&
                        'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
                    ),
                    src: e.src,
                    srcSet: e.srcSet,
                    sizes: e.sizes,
                    width: e.width,
                    height: e.height,
                    alt: e.alt ?? '',
                    title: e.title,
                    loading: 'lazy',
                    decoding: 'async',
                    draggable: !1,
                  }),
              l = t ? (e.ariaLabel ?? e.title) : (e.alt ?? e.title),
              a = e.href
                ? o.jsx('a', {
                    className: cx(
                      'inline-flex items-center no-underline rounded',
                      'transition-opacity duration-200 ease-linear',
                      'hover:opacity-80',
                      'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
                    ),
                    href: e.href,
                    'aria-label': l || 'logo link',
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    children: n,
                  })
                : n;
            return o.jsx(
              'li',
              {
                className: cx(
                  'flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]',
                  m && 'overflow-visible group/item'
                ),
                role: 'listitem',
                children: a,
              },
              r
            );
          },
          [m]
        ),
        F = e.useMemo(
          () =>
            Array.from({ length: j }, (e, r) =>
              o.jsx(
                'ul',
                {
                  className: 'flex items-center',
                  role: 'list',
                  'aria-hidden': r > 0,
                  ref: 0 === r ? w : void 0,
                  children: l.map((e, o) => S(e, `${r}-${o}`)),
                },
                `copy-${r}`
              )
            ),
          [j, l, S]
        ),
        q = e.useMemo(() => {
          return {
            width:
              ((e = s),
              ('number' == typeof e ? `${e}px` : (e ?? void 0)) ?? '100%'),
            ...H,
            ...v,
          };
          var e;
        }, [s, H, v]);
      return o.jsxs('div', {
        ref: b,
        className: $,
        style: q,
        role: 'region',
        'aria-label': p,
        onMouseEnter: _,
        onMouseLeave: O,
        children: [
          f &&
            o.jsxs(o.Fragment, {
              children: [
                o.jsx('div', {
                  'aria-hidden': !0,
                  className: cx(
                    'pointer-events-none absolute inset-y-0 left-0 z-[1]',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  ),
                }),
                o.jsx('div', {
                  'aria-hidden': !0,
                  className: cx(
                    'pointer-events-none absolute inset-y-0 right-0 z-[1]',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  ),
                }),
              ],
            }),
          o.jsx('div', {
            className: cx(
              'flex w-max will-change-transform select-none',
              'motion-reduce:transform-none'
            ),
            ref: x,
            children: F,
          }),
        ],
      });
    }
  );
l.displayName = 'LogoLoop';
export { l as LogoLoop, l as default };
