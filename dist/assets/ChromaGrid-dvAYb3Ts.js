import { r as e, k as r, j as t } from './vendor-DEG5g0yW.js';
const ChromaGrid = ({
  items: a,
  className: n = '',
  radius: s = 300,
  damping: i = 0.45,
  fadeOut: o = 0.6,
  ease: l = 'power3.out',
}) => {
  const c = e.useRef(null),
    g = e.useRef(null),
    u = e.useRef(null),
    d = e.useRef(null),
    p = e.useRef({ x: 0, y: 0 }),
    b = a?.length ? a : '';
  e.useEffect(() => {
    const e = c.current;
    if (!e) return;
    ((u.current = r.quickSetter(e, '--x', 'px')),
      (d.current = r.quickSetter(e, '--y', 'px')));
    const { width: t, height: a } = e.getBoundingClientRect();
    ((p.current = { x: t / 2, y: a / 2 }),
      u.current(p.current.x),
      d.current(p.current.y));
  }, []);
  const handleCardMove = (e) => {
    const r = e.currentTarget,
      t = r.getBoundingClientRect();
    (r.style.setProperty('--mouse-x', e.clientX - t.left + 'px'),
      r.style.setProperty('--mouse-y', e.clientY - t.top + 'px'));
  };
  return t.jsxs('div', {
    ref: c,
    onPointerMove: (e) => {
      const t = c.current.getBoundingClientRect();
      var a, n;
      ((a = e.clientX - t.left),
        (n = e.clientY - t.top),
        r.to(p.current, {
          x: a,
          y: n,
          duration: i,
          ease: l,
          onUpdate: () => {
            (u.current?.(p.current.x), d.current?.(p.current.y));
          },
          overwrite: !0,
        }),
        r.to(g.current, { opacity: 0, duration: 0.25, overwrite: !0 }));
    },
    onPointerLeave: () => {
      r.to(g.current, { opacity: 1, duration: o, overwrite: !0 });
    },
    className: `relative w-full h-full flex flex-wrap justify-center items-start gap-3 ${n}`,
    style: { '--r': `${s}px`, '--x': '50%', '--y': '50%' },
    children: [
      b.map((e, r) =>
        t.jsxs(
          'article',
          {
            onMouseMove: handleCardMove,
            onClick: () => {
              var r;
              (r = e.url) && window.open(r, '_blank', 'noopener,noreferrer');
            },
            className:
              'group relative flex flex-col w-[300px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer',
            style: {
              '--card-border': e.borderColor || 'transparent',
              background: e.gradient,
              '--spotlight-color': 'rgba(255,255,255,0.3)',
            },
            children: [
              t.jsx('div', {
                className:
                  'absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100',
                style: {
                  background:
                    'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)',
                },
              }),
              t.jsx('div', {
                className: 'relative z-10 flex-1 p-[10px] box-border',
                children: t.jsx('img', {
                  src: e.image,
                  alt: e.title,
                  loading: 'lazy',
                  className: 'w-full h-full object-cover rounded-[10px]',
                }),
              }),
              t.jsxs('footer', {
                className:
                  'relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1',
                children: [
                  t.jsx('h3', {
                    className: 'm-0 text-[1.05rem] font-semibold',
                    children: e.title,
                  }),
                  e.handle &&
                    t.jsx('span', {
                      className: 'text-[0.95rem] opacity-80 text-right',
                      children: e.handle,
                    }),
                  t.jsx('p', {
                    className: 'm-0 text-[0.85rem] opacity-85',
                    children: e.subtitle,
                  }),
                  e.location &&
                    t.jsx('span', {
                      className: 'text-[0.85rem] opacity-85 text-right',
                      children: e.location,
                    }),
                ],
              }),
            ],
          },
          r
        )
      ),
      t.jsx('div', {
        className: 'absolute inset-0 pointer-events-none z-30',
        style: {
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
        },
      }),
      t.jsx('div', {
        ref: g,
        className:
          'absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40',
        style: {
          backdropFilter: 'grayscale(1) brightness(0.78)',
          WebkitBackdropFilter: 'grayscale(1) brightness(0.78)',
          background: 'rgba(0,0,0,0.001)',
          maskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
          opacity: 1,
        },
      }),
    ],
  });
};
export { ChromaGrid as default };
