const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/LogoLoop-MRq4auzG.js',
      'assets/vendor-iWomKbAA.js',
      'assets/CurvedLoop-DPsr2-DA.js',
      'assets/index-Bkc3ae4Q.js',
      'assets/index-BpYHdyh6.css',
    ])
) => i.map((i) => d[i]);
import {
  j as e,
  x as t,
  y as a,
  z as s,
  D as o,
  E as r,
  G as d,
  H as i,
  I as n,
  J as h,
  K as l,
  M as c,
  N as p,
  O as m,
  P as f,
  Q as u,
  T as w,
  U as x,
  r as j,
  w as g,
  m as y,
  _ as v,
} from './vendor-iWomKbAA.js';
const _ = [
    {
      node: e.jsx(t, {}),
      title: 'Spotify',
      href: 'https://open.spotify.com/artist/7nd9x69ZcOpoft6TMDnXCa',
    },
    {
      node: e.jsx(a, {}),
      title: 'SoundCloud',
      href: 'https://soundcloud.com/adadarsh23',
    },
    {
      node: e.jsx(s, {}),
      title: 'Apple Music',
      href: 'https://music.apple.com/us/artist/%C3%A2d-adarsh/1794512299',
    },
    {
      node: e.jsx(o, {}),
      title: 'YouTube',
      href: 'https://www.youtube.com/@adadarsh23',
    },
    {
      node: e.jsx(r, {}),
      title: 'Instagram',
      href: 'https://www.instagram.com/adadarsh23/',
    },
    {
      node: e.jsx(d, {}),
      title: 'Facebook',
      href: 'https://www.facebook.com/adadarsh23',
    },
    {
      node: e.jsx(i, {}),
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/adadarsh23/',
    },
    {
      node: e.jsx(n, {}),
      title: 'Pinterest',
      href: 'https://in.pinterest.com/adadarsh23/',
    },
    {
      node: e.jsx(h, {}),
      title: 'Reddit',
      href: 'https://www.reddit.com/user/adadarsh23/',
    },
    {
      node: e.jsx(l, {}),
      title: 'Threads',
      href: 'https://www.threads.com/adadarsh23',
    },
    {
      node: e.jsx(c, {}),
      title: 'WhatsApp',
      href: 'https://www.whatsapp.com/channel/0029VbB809Y5a23uHr5XFz0a',
    },
    { node: e.jsx(p, {}), title: 'Telegram', href: 'https://t.me/adadarsh23' },
    { node: e.jsx(m, {}), title: 'Messenger', href: 'https://m.me/adadarsh23' },
    {
      node: e.jsx(f, {}),
      title: 'Discord',
      href: 'https://discord.com/invite/h2hwYue3',
    },
    {
      node: e.jsx(u, {}),
      title: 'Twitch',
      href: 'https://www.twitch.tv/adadarsh23',
    },
    {
      node: e.jsx(w, {}),
      title: 'Snapchat',
      href: 'https://www.snapchat.com/@adadarsh2.3',
    },
    {
      node: e.jsx(x, {}),
      title: 'Gamer',
      href: 'https://adadarsh23.github.io/Portfolio/game.html',
    },
  ],
  b = j.lazy(() =>
    v(() => import('./LogoLoop-MRq4auzG.js'), __vite__mapDeps([0, 1]))
  ),
  A = j.lazy(() =>
    v(() => import('./CurvedLoop-DPsr2-DA.js'), __vite__mapDeps([2, 1]))
  ),
  M = j.lazy(() =>
    v(
      () => import('./index-Bkc3ae4Q.js').then((e) => e.a),
      __vite__mapDeps([3, 1, 4])
    )
  ),
  T = 80,
  L = 150,
  shuffle = (e) => {
    for (let t = e.length - 1; t > 0; t--) {
      const a = Math.floor(Math.random() * (t + 1));
      [e[t], e[a]] = [e[a], e[t]];
    }
    return e;
  };
function Loop() {
  const t = j.useMemo(
      () =>
        Array.from({ length: 4 }).map(() => {
          return {
            speed:
              ((e = T), (t = L), Math.floor(Math.random() * (t - e + 1)) + e),
            direction: Math.random() > 0.5 ? 'left' : 'right',
            logos: shuffle([..._]),
          };
          var e, t;
        }),
      []
    ),
    a = j.useRef(null),
    s = g(a, { once: !0, amount: 0.2 });
  return e.jsx(y.section, {
    ref: a,
    className: 'bg-black text-white mb-30 flex flex-col space-y-10',
    initial: { opacity: 0, y: 50 },
    animate: s ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: 'easeOut' },
    children: e.jsxs(j.Suspense, {
      fallback: e.jsx(M, {}),
      children: [
        t.map((t, a) =>
          e.jsx(
            'div',
            {
              style: {
                height: '60px',
                position: 'relative',
                overflow: 'hidden',
              },
              className: 'relative overflow-hidden h-24 sm:h-32 md:h-48 w-full',
              children: e.jsx(b, {
                logos: t.logos,
                speed: t.speed,
                direction: t.direction,
                logoHeight: 48,
                gap: 40,
                pauseOnHover: !0,
                scaleOnHover: !0,
                fadeOut: !0,
                fadeOutColor: '#000000',
                ariaLabel: 'My Socials and Platforms',
              }),
            },
            a
          )
        ),
        e.jsx('div', {
          className: 'w-full flex flex-col gap-12',
          children: e.jsx(A, {
            marqueeText:
              'Be ✦ A Gamer Who Understands Strategy ✦ A Coder Who Solves Problems With Clarity ✦ A Producer Who Crafts Detailed Soundscapes ✦ A Creator Turning Ideas Into Functional Reality ✦',
            speed: 3,
            curveAmount: 300,
            direction: 'right',
            interactive: !0,
            className:
              'text-9xl font-semibold leading-none tracking-tight select-none',
          }),
        }),
      ],
    }),
  });
}
export { Loop as default };
