const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/LogoLoop-CC5HDfzB.js',
      'assets/vendor-DEG5g0yW.js',
      'assets/CurvedLoop-CrGY98v5.js',
      'assets/index-Cxrg4Q2y.js',
      'assets/index-CrYdpk0W.css',
    ])
) => i.map((i) => d[i]);
import {
  j as e,
  a8 as a,
  a9 as t,
  aa as s,
  ab as o,
  ac as r,
  ad as d,
  ae as i,
  af as n,
  ag as h,
  ah as l,
  ai as c,
  aj as p,
  ak as m,
  al as f,
  am as u,
  an as w,
  ao as x,
  r as j,
  a7 as g,
  m as y,
  _ as v,
} from './vendor-DEG5g0yW.js';
const _ = [
    {
      node: e.jsx(a, {}),
      title: 'Spotify',
      href: 'https://open.spotify.com/artist/7nd9x69ZcOpoft6TMDnXCa',
    },
    {
      node: e.jsx(t, {}),
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
    v(() => import('./LogoLoop-CC5HDfzB.js'), __vite__mapDeps([0, 1]))
  ),
  A = j.lazy(() =>
    v(() => import('./CurvedLoop-CrGY98v5.js'), __vite__mapDeps([2, 1]))
  ),
  L = j.lazy(() =>
    v(
      () => import('./index-Cxrg4Q2y.js').then((e) => e.a),
      __vite__mapDeps([3, 1, 4])
    )
  ),
  M = 80,
  T = 150,
  shuffle = (e) => {
    for (let a = e.length - 1; a > 0; a--) {
      const t = Math.floor(Math.random() * (a + 1));
      [e[a], e[t]] = [e[t], e[a]];
    }
    return e;
  };
function Loop() {
  const a = j.useMemo(
      () =>
        Array.from({ length: 4 }).map(() => {
          return {
            speed:
              ((e = M), (a = T), Math.floor(Math.random() * (a - e + 1)) + e),
            direction: Math.random() > 0.5 ? 'left' : 'right',
            logos: shuffle([..._]),
          };
          var e, a;
        }),
      []
    ),
    t = j.useRef(null),
    s = g(t, { once: !0, amount: 0.2 });
  return e.jsx(y.section, {
    ref: t,
    className: 'bg-black text-white mb-30 flex flex-col space-y-10',
    initial: { opacity: 0, y: 50 },
    animate: s ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, ease: 'easeOut' },
    children: e.jsxs(j.Suspense, {
      fallback: e.jsx(L, {}),
      children: [
        a.map((a, t) =>
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
                logos: a.logos,
                speed: a.speed,
                direction: a.direction,
                logoHeight: 48,
                gap: 40,
                pauseOnHover: !0,
                scaleOnHover: !0,
                fadeOut: !0,
                fadeOutColor: '#000000',
                ariaLabel: 'My Socials and Platforms',
              }),
            },
            t
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
