import {
  r as e,
  j as t,
  m as s,
  aN as n,
  aO as a,
  aP as i,
  at as o,
  aQ as r,
  A as l,
} from './vendor-C8sBI81f.js';
import { c as u } from './utils-BtE0PGZ8.js';
const c = e.memo(function ({
    value: n,
    onChange: a,
    className: i,
    onInteractionStart: o,
    onInteractionEnd: r,
  }) {
    const l = e.useRef(null),
      [c, d] = e.useState(!1),
      handleValueChange = (e) => {
        if (!l.current) return;
        const t = l.current.getBoundingClientRect(),
          s = ((e - t.left) / t.width) * 100;
        a(Math.min(Math.max(s, 0), 100));
      },
      handleInteractionStart = (e) => {
        (o?.(), d(!0));
        const t = 'touches' in e ? e.touches[0].clientX : e.clientX;
        handleValueChange(t);
      };
    return (
      e.useEffect(() => {
        const e = l.current,
          handleInteractionMove = (e) => {
            if (c) {
              const t = 'touches' in e ? e.touches[0].clientX : e.clientX;
              handleValueChange(t);
            }
          },
          handleInteractionEnd = () => {
            (d(!1), r?.());
          };
        c &&
          (window.addEventListener('mousemove', handleInteractionMove),
          window.addEventListener('touchmove', handleInteractionMove),
          window.addEventListener('mouseup', handleInteractionEnd),
          window.addEventListener('touchend', handleInteractionEnd));
        const handleKeyDown = (e) => {
          'ArrowLeft' === e.key || 'ArrowDown' === e.key
            ? (e.preventDefault(), a(Math.max(0, n - 5)))
            : ('ArrowRight' !== e.key && 'ArrowUp' !== e.key) ||
              (e.preventDefault(), a(Math.min(100, n + 5)));
        };
        return (
          e?.addEventListener('keydown', handleKeyDown),
          () => {
            (window.removeEventListener('mousemove', handleInteractionMove),
              window.removeEventListener('touchmove', handleInteractionMove),
              window.removeEventListener('mouseup', handleInteractionEnd),
              window.removeEventListener('touchend', handleInteractionEnd),
              e?.removeEventListener('keydown', handleKeyDown));
          }
        );
      }, [c, a, r, n, handleValueChange]),
      t.jsx(s.div, {
        ref: l,
        role: 'slider',
        'aria-orientation': 'horizontal',
        tabIndex: 0,
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-valuenow': n,
        'aria-label': 'Volume',
        className: u(
          'relative w-full h-1 bg-white/20 rounded-full cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50',
          i
        ),
        onMouseDown: handleInteractionStart,
        onTouchStart: handleInteractionStart,
        onClick: (e) => {
          const t = e.clientX;
          handleValueChange(t);
        },
        children: t.jsx(s.div, {
          className: 'absolute top-0 left-0 h-full bg-white rounded-full',
          style: { width: `${n}%` },
        }),
      })
    );
  }),
  d = e.memo(function ({
    isPlaying: e,
    hasPreview: s,
    isMuted: r,
    volume: l,
    onClick: u,
  }) {
    return e
      ? t.jsx('button', {
          type: 'button',
          className:
            'flex h-8 w-8 items-center justify-center rounded-full bg-transparent shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50',
          onClick: u,
          'aria-label': r || 0 === l ? 'Unmute' : e ? 'Mute' : 'Pause',
          children:
            r || 0 === l
              ? t.jsx(n, { className: 'h-5 w-5 text-white' })
              : l > 0.5
                ? t.jsx(a, { className: 'h-5 w-5 text-white' })
                : t.jsx(i, { className: 'h-5 w-5 text-white' }),
        })
      : t.jsx('button', {
          type: 'button',
          className:
            'flex h-8 w-8 items-center justify-center rounded-full bg-transparent shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50',
          onClick: u,
          'aria-label': s ? 'Play' : 'No preview available',
          children: t.jsx(o, {
            className: 'h-5 w-5 text-white fill-white ml-1',
          }),
        });
  }),
  m = e.memo(function ({
    isHovered: n,
    isVolumeInteracting: a,
    volume: i,
    playbackError: o,
    artist: r,
    music: l,
  }) {
    const u = ((t) => {
      const [s, n] = e.useState({ x: 0, y: 0 });
      return (
        e.useEffect(() => {
          const handleMouseMove = (e) => {
            requestAnimationFrame(() => {
              let t = e.clientX + 20,
                s = e.clientY - 60 - 10;
              (t + 300 > window.innerWidth && (t = e.clientX - 300 - 20),
                s < 0 && (s = e.clientY + 20),
                s + 60 > window.innerHeight && (s = e.clientY - 60 - 20),
                n({ x: t, y: s }));
            });
          };
          return (
            t &&
              window.addEventListener('mousemove', handleMouseMove, {
                passive: !0,
              }),
            () => {
              window.removeEventListener('mousemove', handleMouseMove);
            }
          );
        }, [t]),
        s
      );
    })(n);
    return t.jsx(s.div, {
      className: 'fixed z-50 pointer-events-none hidden sm:block',
      style: { left: u.x, top: u.y },
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: n ? 1 : 0, scale: n ? 1 : 0.95 },
      transition: { duration: 0.2 },
      children: t.jsx('div', {
        className:
          'bg-neutral-900/90 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border border-neutral-700/50',
        children: a
          ? t.jsxs('span', {
              className: 'font-bold',
              children: ['Volume: ', Math.round(100 * i), '%'],
            })
          : o
            ? t.jsx('span', { className: 'text-red-400', children: o })
            : t.jsxs(t.Fragment, {
                children: [
                  t.jsx('span', { className: 'font-bold', children: r }),
                  '  •  ',
                  l,
                ],
              }),
      }),
    });
  }),
  v = e.memo(function ({
    artist: n,
    music: a,
    albumArt: i,
    isSong: o,
    isLoading: u = !1,
    previewUrl: v,
  }) {
    const [h, f] = e.useState(!1),
      [p, w] = e.useState(!1),
      [x, b] = e.useState(!1),
      g = r(),
      y = e.useRef(null),
      {
        isPlaying: j,
        play: N,
        pause: k,
        progress: E,
        volume: L,
        isMuted: C,
        handleVolumeChange: P,
        toggleMute: M,
        playbackError: S,
      } = (function (t) {
        const [s, n] = e.useState(!1),
          [a, i] = e.useState(0),
          [o, r] = e.useState(1),
          [l, u] = e.useState(!1),
          [c, d] = e.useState(1),
          [m, v] = e.useState(null),
          handleVolumeChange = (e) => {
            const s = t.current;
            s && ((s.volume = e), r(e), u(0 === e));
          };
        return (
          e.useEffect(() => {
            const e = t.current;
            if (!e) return;
            const onAudioEnd = () => {
                (n(!1), i(0));
              },
              onTimeUpdate = () => {
                e.duration && i((e.currentTime / e.duration) * 100);
              };
            return (
              e.addEventListener('ended', onAudioEnd),
              e.addEventListener('timeupdate', onTimeUpdate),
              () => {
                (e.removeEventListener('ended', onAudioEnd),
                  e.removeEventListener('timeupdate', onTimeUpdate));
              }
            );
          }, [t]),
          {
            isPlaying: s,
            play: (e) => {
              if (!e)
                return (
                  v('No preview available'),
                  void setTimeout(() => v(null), 2e3)
                );
              const s = t.current;
              if (!s) return;
              s.src !== e && (s.src = e);
              const a = s.play();
              void 0 !== a &&
                a
                  .then(() => {
                    n(!0);
                  })
                  .catch((e) => {
                    (v('Playback failed'),
                      setTimeout(() => v(null), 2e3),
                      n(!1));
                  });
            },
            pause: () => {
              const e = t.current;
              e && (e.pause(), n(!1));
            },
            progress: a,
            volume: o,
            isMuted: l,
            handleVolumeChange: handleVolumeChange,
            toggleMute: () => {
              const e = t.current;
              if (!e) return;
              const s = !l;
              ((e.muted = s),
                u(s),
                s
                  ? (d(o), handleVolumeChange(0))
                  : handleVolumeChange(c > 0 ? c : 1));
            },
            playbackError: m,
            setPlaybackError: v,
          }
        );
      })(y),
      A = o ? 1 / 0.75 : 1 / 0.55;
    e.useEffect(() => {
      j
        ? g.start({
            rotate: 360,
            transition: { duration: A, ease: 'linear', repeat: 1 / 0 },
          })
        : g.stop();
    }, [j, g, A]);
    const I = e.useCallback(() => {
        j ? k() : N(v);
      }, [j, k, N, v]),
      V = e.useCallback(() => {
        v && (j ? M() : I());
      }, [v, j, M, I]);
    return u
      ? t.jsx('div', {
          className: 'relative',
          children: t.jsx('div', {
            className: 'relative group',
            children: t.jsx('div', {
              className:
                'w-48 h-48 sm:w-64 sm:h-64 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse',
            }),
          }),
        })
      : t.jsxs('div', {
          className: 'relative',
          children: [
            t.jsx('audio', { ref: y, src: v, preload: 'metadata' }),
            t.jsx(m, {
              isHovered: h,
              isVolumeInteracting: x,
              volume: L,
              playbackError: S,
              artist: n,
              music: a,
            }),
            t.jsxs('div', {
              className: 'relative group',
              onMouseEnter: () => f(!0),
              onMouseLeave: () => f(!1),
              children: [
                t.jsx(s.div, {
                  className:
                    'absolute -left-16 sm:-left-24 top-1/2 -translate-y-1/2',
                  initial: { opacity: 0, x: 48 },
                  animate: { opacity: h ? 1 : 0, x: h ? 0 : 48 },
                  transition: { duration: 0.5, ease: 'easeOut' },
                  children: t.jsx('div', {
                    className: 'relative w-45 h-45 sm:w-65 sm:h-65',
                    children: t.jsx(s.div, {
                      animate: g,
                      className: 'w-full h-full',
                      children: t.jsx('img', {
                        src: '/assets/topvinyl-CvgmgTDP.png',
                        alt: 'Vinyl Record',
                        className: 'w-full h-full object-contain',
                        loading: 'eager',
                      }),
                    }),
                  }),
                }),
                t.jsxs('div', {
                  type: 'button',
                  className:
                    'relative overflow-hidden rounded-lg shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl cursor-pointer w-48 h-48 sm:w-64 sm:h-64 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
                  onClick: I,
                  'aria-label': `Play/Pause ${a} by ${n}`,
                  children: [
                    t.jsx('img', {
                      src: i,
                      alt: `${a} Cover`,
                      className:
                        'absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-110 ' +
                        (p ? 'opacity-100' : 'opacity-0'),
                      onLoad: () => w(!0),
                    }),
                    !p &&
                      t.jsx('div', {
                        className:
                          'absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse',
                      }),
                    t.jsx(l, {
                      children:
                        h &&
                        v &&
                        t.jsx(s.div, {
                          className:
                            'absolute bottom-1 left-0  z-10 flex h-6 items-center justify-start rounded-lg px-1 backdrop-blur-md',
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 10 },
                          transition: { duration: 0.3, ease: 'easeInOut' },
                          onClick: (e) => e.stopPropagation(),
                          children: t.jsxs('div', {
                            className:
                              'flex items-center justify-start gap-0.3',
                            children: [
                              t.jsx(d, {
                                isPlaying: j,
                                hasPreview: !!v,
                                isMuted: C,
                                volume: L,
                                onClick: V,
                              }),
                              t.jsx('div', {
                                className: 'w-24 flex-shrink',
                                children: t.jsx(c, {
                                  value: 100 * L,
                                  onChange: (e) => P(e / 100),
                                  onInteractionStart: () => b(!0),
                                  onInteractionEnd: () => b(!1),
                                }),
                              }),
                            ],
                          }),
                        }),
                    }),
                    h &&
                      !v &&
                      t.jsx('div', {
                        className:
                          'sm:hidden absolute bottom-2 left-2 right-2 z-10',
                        children: t.jsx('div', {
                          className:
                            'flex h-12 items-center justify-center rounded-lg bg-black/50 px-4 backdrop-blur-md',
                          children: t.jsx('div', {
                            className: 'text-white text-sm font-medium',
                            children: 'No Preview',
                          }),
                        }),
                      }),
                    j &&
                      t.jsx('div', {
                        className:
                          'absolute bottom-0 left-0 w-full h-0.5 bg-white/20',
                        children: t.jsx('div', {
                          className: 'h-full bg-white',
                          style: { width: `${E}%` },
                        }),
                      }),
                    t.jsx('div', {
                      className:
                        'absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300',
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  });
export { v as default };
