import {
  r as e,
  j as t,
  m as a,
  F as s,
  e as r,
  f as i,
} from './vendor-DEG5g0yW.js';
const l = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  },
  n = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  },
  d = [
    {
      href: 'https://github.com/adadarsh23',
      label: 'Github',
      icon: t.jsx(s, { size: 22 }),
    },
    {
      href: 'https://linkedin.com/in/adadarsh23',
      label: 'Linkedin',
      icon: t.jsx(r, { size: 22 }),
    },
    {
      href: 'https://twitter.com/adadarsh23',
      label: 'Twitter',
      icon: t.jsx(i, { size: 22 }),
    },
  ],
  c = e.memo(() =>
    t.jsxs(a.span, {
      className: 'text-sm text-gray-300 text-center md:text-left',
      variants: n,
      children: [
        '© ',
        new Date().getFullYear() + 1,
        ' - Built by',
        ' ',
        t.jsx('a', {
          href: 'https://github.com/adadarsh23',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'text-white font-semibold hover:text-gray-400',
          children: 'Âd Adarsh',
        }),
        '. All Rights Reserved.',
      ],
    })
  ),
  x = e.memo(() =>
    t.jsx(a.div, {
      className: 'flex space-x-4',
      variants: n,
      children: d.map((e) =>
        t.jsx(
          a.a,
          {
            href: e.href,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'text-white hover:text-gray-400',
            'aria-label': e.label,
            whileHover: { y: -2, scale: 1.1 },
            whileTap: { scale: 0.9 },
            children: e.icon,
          },
          e.href
        )
      ),
    })
  ),
  o = e.memo(() =>
    t.jsx(a.div, {
      className: 'w-full flex mt-4 items-center justify-center',
      variants: n,
      children: t.jsx('h1', {
        className:
          'text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-900 select-none',
        'aria-hidden': 'true',
        children: 'Âd Adarsh',
      }),
    })
  ),
  h = e.memo(function () {
    return t.jsxs(a.footer, {
      className: 'bg-black text-white py-8',
      variants: l,
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: !0, amount: 0.3 },
      children: [
        t.jsxs('div', {
          className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
          children: [
            t.jsxs('div', {
              className:
                'flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0',
              children: [t.jsx(c, {}), t.jsx(x, {})],
            }),
            t.jsx('hr', { className: 'my-6 border-gray-700' }),
            t.jsx(a.p, {
              className: 'text-xs text-gray-400 text-center',
              variants: n,
              children: 'Designed with ❤️ by Ad Adarsh',
            }),
          ],
        }),
        t.jsx(o, {}),
      ],
    });
  });
export { h as default };
