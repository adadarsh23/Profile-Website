import { u as e, r as t, k as r, j as a, o as l } from './vendor-DEG5g0yW.js';
const PillNav = ({
  logo: n,
  logoAlt: s = 'Logo',
  items: o,
  className: i = '',
  ease: c = 'power3.easeOut',
  baseColor: u = '#fff',
  pillColor: d = '#060010',
  hoveredPillTextColor: f = '#060010',
  pillTextColor: h,
  onMobileMenuClick: p,
  initialLoadAnimation: m = !0,
}) => {
  const b = e(),
    x = h ?? u,
    [v, g] = t.useState(!1),
    y = t.useRef([]),
    w = t.useRef([]),
    j = t.useRef([]),
    k = t.useRef(null),
    N = t.useRef(null),
    M = t.useRef(null),
    C = t.useRef(null),
    z = t.useRef(null),
    E = t.useRef(null);
  t.useEffect(() => {
    const layout = () => {
      y.current.forEach((e) => {
        if (!e?.parentElement) return;
        const t = e.parentElement,
          a = t.getBoundingClientRect(),
          { width: l, height: n } = a,
          s = ((l * l) / 4 + n * n) / (2 * n),
          o = Math.ceil(2 * s) + 2,
          i = Math.ceil(s - Math.sqrt(Math.max(0, s * s - (l * l) / 4))) + 1,
          u = o - i;
        ((e.style.width = `${o}px`),
          (e.style.height = `${o}px`),
          (e.style.bottom = `-${i}px`),
          r.set(e, { xPercent: -50, scale: 0, transformOrigin: `50% ${u}px` }));
        const d = t.querySelector('.pill-label'),
          f = t.querySelector('.pill-label-hover');
        (d && r.set(d, { y: 0 }), f && r.set(f, { y: n + 12, opacity: 0 }));
        const h = y.current.indexOf(e);
        if (-1 === h) return;
        w.current[h]?.kill();
        const p = r.timeline({ paused: !0 });
        (p.to(
          e,
          {
            scale: 1.2,
            xPercent: -50,
            duration: 2,
            ease: c,
            overwrite: 'auto',
          },
          0
        ),
          d &&
            p.to(
              d,
              { y: -(n + 8), duration: 2, ease: c, overwrite: 'auto' },
              0
            ),
          f &&
            (r.set(f, { y: Math.ceil(n + 100), opacity: 0 }),
            p.to(
              f,
              { y: 0, opacity: 1, duration: 2, ease: c, overwrite: 'auto' },
              0
            )),
          (w.current[h] = p));
      });
    };
    layout();
    const onResize = () => layout();
    (window.addEventListener('resize', onResize),
      document.fonts?.ready &&
        document.fonts.ready.then(layout).catch(() => {}));
    const e = C.current;
    if (
      (e && r.set(e, { visibility: 'hidden', opacity: 0, scaleY: 1, y: 0 }), m)
    ) {
      const e = E.current,
        t = z.current;
      (e &&
        (r.set(e, { scale: 0 }), r.to(e, { scale: 1, duration: 0.6, ease: c })),
        t &&
          (r.set(t, { width: 0, overflow: 'hidden' }),
          r.to(t, { width: 'auto', duration: 0.6, ease: c })));
    }
    return () => window.removeEventListener('resize', onResize);
  }, [o, c, m]);
  const handleEnter = (e) => {
      const t = w.current[e];
      t &&
        (j.current[e]?.kill(),
        (j.current[e] = t.tweenTo(t.duration(), {
          duration: 0.3,
          ease: c,
          overwrite: 'auto',
        })));
    },
    handleLeave = (e) => {
      const t = w.current[e];
      t &&
        (j.current[e]?.kill(),
        (j.current[e] = t.tweenTo(0, {
          duration: 0.2,
          ease: c,
          overwrite: 'auto',
        })));
    },
    handleLogoEnter = () => {
      const e = k.current;
      e &&
        (N.current?.kill(),
        r.set(e, { rotate: 0 }),
        (N.current = r.to(e, {
          rotate: 360,
          duration: 0.2,
          ease: c,
          overwrite: 'auto',
        })));
    },
    toggleMobileMenu = () => {
      const e = !v;
      g(e);
      const t = M.current,
        a = C.current;
      if (t) {
        const a = t.querySelectorAll('.hamburger-line');
        e
          ? (r.to(a[0], { rotation: 45, y: 3, duration: 0.3, ease: c }),
            r.to(a[1], { rotation: -45, y: -3, duration: 0.3, ease: c }))
          : (r.to(a[0], { rotation: 0, y: 0, duration: 0.3, ease: c }),
            r.to(a[1], { rotation: 0, y: 0, duration: 0.3, ease: c }));
      }
      (a &&
        (e
          ? (r.set(a, { visibility: 'visible' }),
            r.fromTo(
              a,
              { opacity: 0, y: 10, scaleY: 1 },
              {
                opacity: 1,
                y: 0,
                scaleY: 1,
                duration: 0.3,
                ease: c,
                transformOrigin: 'top center',
              }
            ))
          : r.to(a, {
              opacity: 0,
              y: 10,
              scaleY: 1,
              duration: 0.2,
              ease: c,
              transformOrigin: 'top center',
              onComplete: () => {
                r.set(a, { visibility: 'hidden' });
              },
            })),
        p?.());
    },
    isRouterLink = (e) =>
      e &&
      !((e) =>
        e.startsWith('http://') ||
        e.startsWith('https://') ||
        e.startsWith('//') ||
        e.startsWith('mailto:') ||
        e.startsWith('tel:') ||
        e.startsWith('#'))(e),
    L = {
      '--base': u,
      '--pill-bg': d,
      '--hover-text': f,
      '--pill-text': x,
      '--nav-h': '42px',
      '--logo': '36px',
      '--pill-pad-x': '18px',
      '--pill-gap': '3px',
    };
  return a.jsxs('div', {
    className:
      'absolute top-[1em] z-[1000] w-full left-0 md:w-auto md:left-auto',
    children: [
      a.jsxs('nav', {
        className: `w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0 ${i} custom-nav`,
        'aria-label': 'Primary',
        style: L,
        children: [
          isRouterLink(o?.[0]?.href)
            ? a.jsx(l, {
                to: o[0].href,
                'aria-label': 'Home',
                onMouseEnter: handleLogoEnter,
                ref: (e) => {
                  E.current = e;
                },
                className:
                  'rounded-full p-2 inline-flex items-center justify-center overflow-hidden',
                style: {
                  width: 'var(--nav-h)',
                  height: 'var(--nav-h)',
                  background: 'var(--base, #000)',
                },
                children: a.jsx('img', {
                  src: n,
                  alt: s,
                  ref: k,
                  className: 'w-full h-full object-cover block',
                }),
              })
            : a.jsx('a', {
                href: o?.[0]?.href || '#',
                'aria-label': 'Home',
                onMouseEnter: handleLogoEnter,
                ref: E,
                className:
                  'rounded-full p-2 inline-flex items-center justify-center overflow-hidden',
                style: {
                  width: 'var(--nav-h)',
                  height: 'var(--nav-h)',
                  background: 'var(--base, #000)',
                },
                children: a.jsx('img', {
                  src: n,
                  alt: s,
                  ref: k,
                  className: 'w-full h-full object-cover block',
                }),
              }),
          a.jsx('div', {
            ref: z,
            className: 'relative items-center rounded-full hidden md:flex ml-2',
            style: { height: 'var(--nav-h)', background: 'var(--base, #000)' },
            children: a.jsx('ul', {
              role: 'menu',
              className: 'list-none flex items-stretch m-0 p-[3px] h-full',
              style: { gap: 'var(--pill-gap)' },
              children: o.map((e, t) => {
                const r = b.pathname === e.href,
                  n = {
                    background: 'var(--pill-bg, #fff)',
                    color: 'var(--pill-text, var(--base, #000))',
                    paddingLeft: 'var(--pill-pad-x)',
                    paddingRight: 'var(--pill-pad-x)',
                  },
                  s = a.jsxs(a.Fragment, {
                    children: [
                      a.jsx('span', {
                        className:
                          'hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none',
                        style: {
                          background: 'var(--base, #000)',
                          willChange: 'transform',
                        },
                        'aria-hidden': 'true',
                        ref: (e) => {
                          y.current[t] = e;
                        },
                      }),
                      a.jsxs('span', {
                        className:
                          'label-stack relative inline-block leading-[1] z-[2]',
                        children: [
                          a.jsx('span', {
                            className:
                              'pill-label relative z-[2] inline-block leading-[1]',
                            style: { willChange: 'transform' },
                            children: e.label,
                          }),
                          a.jsx('span', {
                            className:
                              'pill-label-hover absolute left-0 top-0 z-[3] inline-block',
                            style: {
                              color: 'var(--hover-text, #fff)',
                              willChange: 'transform, opacity',
                            },
                            'aria-hidden': 'true',
                            children: e.label,
                          }),
                        ],
                      }),
                      r &&
                        a.jsx('span', {
                          className:
                            'absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4] ',
                          style: { background: 'var(--base, #000)' },
                          'aria-hidden': 'true',
                        }),
                    ],
                  }),
                  o =
                    'relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0';
                return a.jsx(
                  'li',
                  {
                    role: 'none',
                    className: 'flex h-full',
                    children: isRouterLink(e.href)
                      ? a.jsx(l, {
                          role: 'menuitem',
                          to: e.href,
                          className: o,
                          style: n,
                          'aria-label': e.ariaLabel || e.label,
                          onMouseEnter: () => handleEnter(t),
                          onMouseLeave: () => handleLeave(t),
                          children: s,
                        })
                      : a.jsx('a', {
                          role: 'menuitem',
                          href: e.href,
                          className: o,
                          style: n,
                          'aria-label': e.ariaLabel || e.label,
                          onMouseEnter: () => handleEnter(t),
                          onMouseLeave: () => handleLeave(t),
                          children: s,
                        }),
                  },
                  e.href
                );
              }),
            }),
          }),
          a.jsxs('button', {
            ref: M,
            onClick: toggleMobileMenu,
            'aria-label': 'Toggle menu',
            'aria-expanded': v,
            className:
              'md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative',
            style: {
              width: 'var(--nav-h)',
              height: 'var(--nav-h)',
              background: 'var(--base, #000)',
            },
            children: [
              a.jsx('span', {
                className:
                  'hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]',
                style: { background: 'var(--pill-bg, #fff)' },
              }),
              a.jsx('span', {
                className:
                  'hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]',
                style: { background: 'var(--pill-bg, #fff)' },
              }),
            ],
          }),
        ],
      }),
      a.jsx('div', {
        ref: C,
        className:
          'md:hidden absolute top-[3em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top',
        style: { ...L, background: 'var(--base, #f0f0f0)' },
        children: a.jsx('ul', {
          className: 'list-none m-0 p-[3px] flex flex-col gap-[3px]',
          children: o.map((e) => {
            const t = {
                background: 'var(--pill-bg, #fff)',
                color: 'var(--pill-text, #fff)',
              },
              hoverIn = (e) => {
                ((e.currentTarget.style.background = 'var(--base)'),
                  (e.currentTarget.style.color = 'var(--hover-text, #fff)'));
              },
              hoverOut = (e) => {
                ((e.currentTarget.style.background = 'var(--pill-bg, #fff)'),
                  (e.currentTarget.style.color = 'var(--pill-text, #fff)'));
              },
              r =
                'block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]';
            return a.jsx(
              'li',
              {
                role: 'none',
                children: isRouterLink(e.href)
                  ? a.jsx(l, {
                      to: e.href,
                      className: r,
                      style: t,
                      onMouseEnter: hoverIn,
                      onMouseLeave: hoverOut,
                      onClick: toggleMobileMenu,
                      children: e.label,
                    })
                  : a.jsx('a', {
                      href: e.href,
                      className: r,
                      style: t,
                      onMouseEnter: hoverIn,
                      onMouseLeave: hoverOut,
                      onClick: toggleMobileMenu,
                      children: e.label,
                    }),
              },
              e.href
            );
          }),
        }),
      }),
    ],
  });
};
export { PillNav as default };
