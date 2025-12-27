import {
  r as e,
  j as t,
  S as a,
  g as r,
  m as s,
  A as i,
  Y as n,
  Z as l,
  aN as o,
  aO as c,
  aP as d,
} from './vendor-iWomKbAA.js';
import { c as u } from './utils-DfWtT5OB.js';
const m = r(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline:
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  ),
  h = e.forwardRef(
    ({ className: e, variant: r, size: s, asChild: i = !1, ...n }, l) => {
      const o = i ? a : 'button';
      return t.jsx(o, {
        className: u(m({ variant: r, size: s, className: e })),
        ref: l,
        ...n,
      });
    }
  );
h.displayName = 'Button';
const formatTime = (e) =>
    `${Math.floor(e / 60)}:${Math.floor(e % 60)
      .toString()
      .padStart(2, '0')}`,
  CustomSlider = ({ value: e, onChange: a, className: r }) =>
    t.jsx(s.div, {
      className: u(
        'relative w-full h-1 bg-white/20 rounded-full cursor-pointer',
        r
      ),
      onClick: (e) => {
        const t = e.currentTarget.getBoundingClientRect(),
          r = ((e.clientX - t.left) / t.width) * 100;
        a(Math.min(Math.max(r, 0), 100));
      },
      children: t.jsx(s.div, {
        className: 'absolute top-0 left-0 h-full bg-white rounded-full',
        style: { width: `${e}%` },
        initial: { width: 0 },
        animate: { width: `${e}%` },
        transition: { type: 'spring', stiffness: 300, damping: 30 },
      }),
    }),
  VideoPlayer = ({ src: a }) => {
    const r = e.useRef(null),
      [m, x] = e.useState(!1),
      [p, f] = e.useState(1),
      [v, g] = e.useState(0),
      [b, w] = e.useState(!1),
      [y, j] = e.useState(1),
      [N, k] = e.useState(!1),
      [S, C] = e.useState(0),
      [T, z] = e.useState(0),
      togglePlay = () => {
        r.current &&
          r.current &&
          (m ? r.current.pause() : r.current.play(), x(!m));
      };
    return a.includes('youtube.com/embed/')
      ? t.jsx(s.div, {
          className:
            'relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm p-1',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: t.jsx('iframe', {
            className: 'w-full rounded-lg shadow-2xl',
            style: { aspectRatio: '16/9' },
            src: a,
            title: 'YouTube video player',
            frameBorder: '0',
            allow:
              'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            allowFullScreen: !0,
          }),
        })
      : t.jsxs(s.div, {
          className:
            'relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          onMouseEnter: () => k(!0),
          onMouseLeave: () => k(!1),
          children: [
            t.jsx('video', {
              ref: r,
              className: 'w-full',
              onTimeUpdate: () => {
                if (r.current) {
                  const e = (r.current.currentTime / r.current.duration) * 100;
                  (g(isFinite(e) ? e : 0),
                    C(r.current.currentTime),
                    z(r.current.duration));
                }
              },
              src: a,
              onClick: togglePlay,
            }),
            t.jsx(i, {
              children:
                N &&
                t.jsxs(s.div, {
                  className:
                    'absolute bottom-0 mx-auto max-w-xl left-0 right-0 p-4 m-2 bg-[#11111198] backdrop-blur-md rounded-2xl',
                  initial: { y: 20, opacity: 0, filter: 'blur(10px)' },
                  animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
                  exit: { y: 20, opacity: 0, filter: 'blur(10px)' },
                  transition: {
                    duration: 0.6,
                    ease: 'circInOut',
                    type: 'spring',
                  },
                  children: [
                    t.jsxs('div', {
                      className: 'flex items-center gap-2 mb-2',
                      children: [
                        t.jsx('span', {
                          className: 'text-white text-sm',
                          children: formatTime(S),
                        }),
                        t.jsx(CustomSlider, {
                          value: v,
                          onChange: (e) => {
                            if (r.current && r.current.duration) {
                              const t = (e / 100) * r.current.duration;
                              isFinite(t) &&
                                ((r.current.currentTime = t), g(e));
                            }
                          },
                          className: 'flex-1',
                        }),
                        t.jsx('span', {
                          className: 'text-white text-sm',
                          children: formatTime(T),
                        }),
                      ],
                    }),
                    t.jsxs('div', {
                      className: 'flex items-center justify-between',
                      children: [
                        t.jsxs('div', {
                          className: 'flex items-center gap-4',
                          children: [
                            t.jsx(s.div, {
                              whileHover: { scale: 1.1 },
                              whileTap: { scale: 0.9 },
                              children: t.jsx(h, {
                                onClick: togglePlay,
                                variant: 'ghost',
                                size: 'icon',
                                className:
                                  'text-white hover:bg-[#111111d1] hover:text-white',
                                children: m
                                  ? t.jsx(n, { className: 'h-5 w-5' })
                                  : t.jsx(l, { className: 'h-5 w-5' }),
                              }),
                            }),
                            t.jsxs('div', {
                              className: 'flex items-center gap-x-1',
                              children: [
                                t.jsx(s.div, {
                                  whileHover: { scale: 1.1 },
                                  whileTap: { scale: 0.9 },
                                  children: t.jsx(h, {
                                    onClick: () => {
                                      r.current &&
                                        ((r.current.muted = !b),
                                        w(!b),
                                        b
                                          ? (f(1), (r.current.volume = 1))
                                          : f(0));
                                    },
                                    variant: 'ghost',
                                    size: 'icon',
                                    className:
                                      'text-white hover:bg-[#111111d1] hover:text-white',
                                    children: b
                                      ? t.jsx(o, { className: 'h-5 w-5' })
                                      : p > 0.5
                                        ? t.jsx(c, { className: 'h-5 w-5' })
                                        : t.jsx(d, { className: 'h-5 w-5' }),
                                  }),
                                }),
                                t.jsx('div', {
                                  className: 'w-24',
                                  children: t.jsx(CustomSlider, {
                                    value: 100 * p,
                                    onChange: (e) => {
                                      if (r.current) {
                                        const t = e / 100;
                                        ((r.current.volume = t),
                                          f(t),
                                          w(0 === t));
                                      }
                                    },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        t.jsx('div', {
                          className: 'flex items-center gap-2',
                          children: [0.5, 1, 1.5, 2].map((e) =>
                            t.jsx(
                              s.div,
                              {
                                whileHover: { scale: 1.1 },
                                whileTap: { scale: 0.9 },
                                children: t.jsxs(h, {
                                  onClick: () =>
                                    ((e) => {
                                      r.current &&
                                        ((r.current.playbackRate = e), j(e));
                                    })(e),
                                  variant: 'ghost',
                                  size: 'icon',
                                  className: u(
                                    'text-white hover:bg-[#111111d1] hover:text-white',
                                    y === e && 'bg-[#111111d1]'
                                  ),
                                  children: [e, 'x'],
                                }),
                              },
                              e
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
            }),
          ],
        });
  };
export { VideoPlayer as default };
