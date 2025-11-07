import {
  r as t,
  j as e,
  S as Y,
  h as U,
  k as B,
  l as H,
  m as X,
  n as V,
  o as Z,
  p as q,
  q as J,
  t as K,
  v as Q,
  w as W,
  x as ee,
  y as te,
  z as oe,
  A as ne,
  D as re,
} from './vendor_react-C8wG62CJ.js';
import './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const L = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 },
  se = (n) => (typeof n == 'number' ? `${n}px` : (n ?? void 0)),
  w = (...n) => n.filter(Boolean).join(' '),
  ae = (n, c, i) => {
    t.useEffect(() => {
      if (!window.ResizeObserver) {
        const s = () => n();
        return (
          window.addEventListener('resize', s),
          n(),
          () => window.removeEventListener('resize', s)
        );
      }
      const d = c.map((s) => {
        if (!s.current) return null;
        const r = new ResizeObserver(n);
        return (r.observe(s.current), r);
      });
      return (
        n(),
        () => {
          d.forEach((s) => s?.disconnect());
        }
      );
    }, i);
  },
  ie = (n, c, i) => {
    t.useEffect(() => {
      const d = n.current?.querySelectorAll('img') ?? [];
      if (d.length === 0) {
        c();
        return;
      }
      let s = d.length;
      const r = () => {
        ((s -= 1), s === 0 && c());
      };
      return (
        d.forEach((a) => {
          const l = a;
          l.complete
            ? r()
            : (l.addEventListener('load', r, { once: !0 }),
              l.addEventListener('error', r, { once: !0 }));
        }),
        () => {
          d.forEach((a) => {
            (a.removeEventListener('load', r),
              a.removeEventListener('error', r));
          });
        }
      );
    }, i);
  },
  le = (n, c, i, d, s) => {
    const r = t.useRef(null),
      a = t.useRef(null),
      l = t.useRef(0),
      p = t.useRef(0);
    t.useEffect(() => {
      const u = n.current;
      if (!u) return;
      const h =
        typeof window < 'u' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (
        (i > 0 &&
          ((l.current = ((l.current % i) + i) % i),
          (u.style.transform = `translate3d(${-l.current}px, 0, 0)`)),
        h)
      )
        return (
          (u.style.transform = 'translate3d(0, 0, 0)'),
          () => {
            a.current = null;
          }
        );
      const f = (g) => {
        a.current === null && (a.current = g);
        const b = Math.max(0, g - a.current) / 1e3;
        a.current = g;
        const S = s && d ? 0 : c,
          v = 1 - Math.exp(-b / L.SMOOTH_TAU);
        if (((p.current += (S - p.current) * v), i > 0)) {
          let M = l.current + p.current * b;
          ((M = ((M % i) + i) % i), (l.current = M));
          const A = -l.current;
          u.style.transform = `translate3d(${A}px, 0, 0)`;
        }
        r.current = requestAnimationFrame(f);
      };
      return (
        (r.current = requestAnimationFrame(f)),
        () => {
          (r.current !== null &&
            (cancelAnimationFrame(r.current), (r.current = null)),
            (a.current = null));
        }
      );
    }, [c, i, d, s, n]);
  },
  _ = t.memo(
    ({
      logos: n,
      speed: c = 120,
      direction: i = 'left',
      width: d = '100%',
      logoHeight: s = 28,
      gap: r = 32,
      pauseOnHover: a = !0,
      fadeOut: l = !1,
      fadeOutColor: p,
      scaleOnHover: u = !1,
      ariaLabel: h = 'Partner logos',
      className: f,
      style: g,
    }) => {
      const b = t.useRef(null),
        S = t.useRef(null),
        v = t.useRef(null),
        [M, A] = t.useState(0),
        [R, O] = t.useState(L.MIN_COPIES),
        [I, C] = t.useState(!1),
        T = t.useMemo(() => {
          const o = Math.abs(c),
            m = i === 'left' ? 1 : -1,
            x = c < 0 ? -1 : 1;
          return o * m * x;
        }, [c, i]),
        E = t.useCallback(() => {
          const o = b.current?.clientWidth ?? 0,
            m = v.current?.getBoundingClientRect?.()?.width ?? 0;
          if (m > 0) {
            A(Math.ceil(m));
            const x = Math.ceil(o / m) + L.COPY_HEADROOM;
            O(Math.max(L.MIN_COPIES, x));
          }
        }, []);
      (ae(E, [b, v], [n, r, s]), ie(v, E, [n, r, s]), le(S, T, M, I, a));
      const y = t.useMemo(
          () => ({
            '--logoloop-gap': `${r}px`,
            '--logoloop-logoHeight': `${s}px`,
            ...(p && { '--logoloop-fadeColor': p }),
          }),
          [r, s, p]
        ),
        k = t.useMemo(
          () =>
            w(
              'relative overflow-x-hidden group',
              '[--logoloop-gap:32px]',
              '[--logoloop-logoHeight:28px]',
              '[--logoloop-fadeColorAuto:#ffffff]',
              'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
              u && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
              f
            ),
          [u, f]
        ),
        z = t.useCallback(() => {
          a && C(!0);
        }, [a]),
        P = t.useCallback(() => {
          a && C(!1);
        }, [a]),
        N = t.useCallback(
          (o, m) => {
            const x = 'node' in o,
              j = x
                ? e.jsx('span', {
                    className: w(
                      'inline-flex items-center',
                      'motion-reduce:transition-none',
                      u &&
                        'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
                    ),
                    'aria-hidden': !!o.href && !o.ariaLabel,
                    children: o.node,
                  })
                : e.jsx('img', {
                    className: w(
                      'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
                      '[-webkit-user-drag:none] pointer-events-none',
                      '[image-rendering:-webkit-optimize-contrast]',
                      'motion-reduce:transition-none',
                      u &&
                        'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
                    ),
                    src: o.src,
                    srcSet: o.srcSet,
                    sizes: o.sizes,
                    width: o.width,
                    height: o.height,
                    alt: o.alt ?? '',
                    title: o.title,
                    loading: 'lazy',
                    decoding: 'async',
                    draggable: !1,
                  }),
              $ = x ? (o.ariaLabel ?? o.title) : (o.alt ?? o.title),
              G = o.href
                ? e.jsx('a', {
                    className: w(
                      'inline-flex items-center no-underline rounded',
                      'transition-opacity duration-200 ease-linear',
                      'hover:opacity-80',
                      'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
                    ),
                    href: o.href,
                    'aria-label': $ || 'logo link',
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    children: j,
                  })
                : j;
            return e.jsx(
              'li',
              {
                className: w(
                  'flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]',
                  u && 'overflow-visible group/item'
                ),
                role: 'listitem',
                children: G,
              },
              m
            );
          },
          [u]
        ),
        F = t.useMemo(
          () =>
            Array.from({ length: R }, (o, m) =>
              e.jsx(
                'ul',
                {
                  className: 'flex items-center',
                  role: 'list',
                  'aria-hidden': m > 0,
                  ref: m === 0 ? v : void 0,
                  children: n.map((x, j) => N(x, `${m}-${j}`)),
                },
                `copy-${m}`
              )
            ),
          [R, n, N]
        ),
        D = t.useMemo(
          () => ({ width: se(d) ?? '100%', ...y, ...g }),
          [d, y, g]
        );
      return e.jsxs('div', {
        ref: b,
        className: k,
        style: D,
        role: 'region',
        'aria-label': h,
        onMouseEnter: z,
        onMouseLeave: P,
        children: [
          l &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx('div', {
                  'aria-hidden': !0,
                  className: w(
                    'pointer-events-none absolute inset-y-0 left-0 z-[1]',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  ),
                }),
                e.jsx('div', {
                  'aria-hidden': !0,
                  className: w(
                    'pointer-events-none absolute inset-y-0 right-0 z-[1]',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  ),
                }),
              ],
            }),
          e.jsx('div', {
            className: w(
              'flex w-max will-change-transform select-none',
              'motion-reduce:transform-none'
            ),
            ref: S,
            children: F,
          }),
        ],
      });
    }
  );
_.displayName = 'LogoLoop';
const ce = [
  {
    node: e.jsx(Y, {}),
    title: 'Spotify',
    href: 'https://open.spotify.com/artist/7nd9x69ZcOpoft6TMDnXCa',
  },
  {
    node: e.jsx(U, {}),
    title: 'SoundCloud',
    href: 'https://soundcloud.com/adadarsh23',
  },
  {
    node: e.jsx(B, {}),
    title: 'Apple Music',
    href: 'https://music.apple.com/us/artist/%C3%A2d-adarsh/1794512299',
  },
  {
    node: e.jsx(H, {}),
    title: 'YouTube',
    href: 'https://www.youtube.com/@adadarsh23',
  },
  {
    node: e.jsx(X, {}),
    title: 'Instagram',
    href: 'https://www.instagram.com/adadarsh23/',
  },
  {
    node: e.jsx(V, {}),
    title: 'Facebook',
    href: 'https://www.facebook.com/adadarsh23',
  },
  {
    node: e.jsx(Z, {}),
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adadarsh23/',
  },
  {
    node: e.jsx(q, {}),
    title: 'Pinterest',
    href: 'https://in.pinterest.com/adadarsh23/',
  },
  {
    node: e.jsx(J, {}),
    title: 'Reddit',
    href: 'https://www.reddit.com/user/adadarsh23/',
  },
  {
    node: e.jsx(K, {}),
    title: 'Threads',
    href: 'https://www.threads.com/adadarsh23',
  },
  {
    node: e.jsx(Q, {}),
    title: 'WhatsApp',
    href: 'https://www.whatsapp.com/channel/0029VbB809Y5a23uHr5XFz0a',
  },
  { node: e.jsx(W, {}), title: 'Telegram', href: 'https://t.me/adadarsh23' },
  { node: e.jsx(ee, {}), title: 'Messenger', href: 'https://m.me/adadarsh23' },
  {
    node: e.jsx(te, {}),
    title: 'Discord',
    href: 'https://discord.com/invite/h2hwYue3',
  },
  {
    node: e.jsx(oe, {}),
    title: 'Twitch',
    href: 'https://www.twitch.tv/adadarsh23',
  },
  {
    node: e.jsx(ne, {}),
    title: 'Snapchat',
    href: 'https://www.snapchat.com/@adadarsh2.3',
  },
  {
    node: e.jsx(re, {}),
    title: 'Gamer',
    href: 'https://adadarsh23.github.io/Portfolio/game.html',
  },
];
function fe() {
  const c = { min: 80, max: 150 },
    i = 48,
    d = 40,
    s = '#000000',
    r = 'My Socials and Platforms',
    a = t.useMemo(() => {
      const l = (h, f) => Math.floor(Math.random() * (f - h + 1)) + h,
        p = () => (Math.random() > 0.5 ? 'left' : 'right'),
        u = (h) => {
          for (let f = h.length - 1; f > 0; f--) {
            const g = Math.floor(Math.random() * (f + 1));
            [h[f], h[g]] = [h[g], h[f]];
          }
          return h;
        };
      return Array.from({ length: 4 }).map(() => ({
        speed: l(c.min, c.max),
        direction: p(),
        logos: u([...ce]),
      }));
    }, []);
  return e.jsx('section', {
    className: 'bg-black text-white mb-30 flex flex-col space-y-10',
    children: e.jsx('div', {
      style: { width: '100%' },
      className: 'flex flex-col space-y-10',
      children: a.map((l, p) =>
        e.jsx(
          'div',
          {
            style: { height: '60px', position: 'relative', overflow: 'hidden' },
            className: 'relative overflow-hidden h-24 sm:h-32 md:h-48 w-full',
            children: e.jsx(_, {
              logos: l.logos,
              speed: l.speed,
              direction: l.direction,
              logoHeight: i,
              gap: d,
              pauseOnHover: !0,
              scaleOnHover: !0,
              fadeOut: !0,
              fadeOutColor: s,
              ariaLabel: r,
            }),
          },
          p
        )
      ),
    }),
  });
}
export { fe as default };
