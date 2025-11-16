const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/Map-DvHmQio8.js', 'assets/vendor-CLKqtzgM.js'])
) => i.map((i) => d[i]);
import { r as e, j as t, m as a, A as s, _ as l } from './vendor-CLKqtzgM.js';
import { s as i } from './bubble.module-BuxepTIR.js';
const o = e.lazy(() =>
  l(() => import('./Map-DvHmQio8.js'), __vite__mapDeps([0, 1]))
);
function Contact() {
  const [l, n] = e.useState(!1),
    [r, c] = e.useState(!1),
    [m, d] = e.useState(null),
    BubbleText = () =>
      t.jsx(a.h2, {
        className:
          'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
        initial: { y: -20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: 'easeOut' },
        children: 'Get In Touch'
          .split('')
          .map((e, a) =>
            t.jsx('span', { className: i.hoverText, children: e }, a)
          ),
      }),
    FormInput = ({
      id: e,
      label: a,
      type: s,
      autoComplete: l,
      props: i = {},
    }) =>
      t.jsxs('div', {
        className: 'flex flex-col',
        children: [
          t.jsx('label', {
            htmlFor: e,
            className: 'block font-medium mb-1 text-gray-700',
            children: a,
          }),
          'textarea' === s
            ? t.jsx('textarea', {
                id: e,
                name: e,
                required: !0,
                className: `w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-black outline-none transition-all ${i.className}`,
                ...i,
              })
            : t.jsx('input', {
                id: e,
                type: s,
                name: e,
                required: !0,
                className:
                  'w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-black outline-none transition-all',
                autoComplete: l,
                ...i,
              }),
        ],
      });
  return t.jsxs('div', {
    className:
      'relative bg-black text-white min-h-screen flex flex-col items-center justify-center\n                px-4 sm:px-6 md:px-12 py-12\n                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16\n                overflow-hidden',
    children: [
      t.jsx(e.Suspense, {
        fallback: t.jsx('div', { className: 'absolute inset-0 bg-black' }),
        children: t.jsx(o, {
          interactive: !1,
          className: 'absolute inset-0 w-full h-full z-10',
          height: '100%',
        }),
      }),
      t.jsx('div', { className: 'absolute inset-0 bg-black/60 z-0' }),
      t.jsx(BubbleText, {}),
      t.jsx(a.div, {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.8 },
        className:
          'bg-white text-black p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-xl relative z-10 backdrop-blur-md bg-opacity-90',
        children: t.jsx(s, {
          mode: 'wait',
          children: l
            ? t.jsx(
                a.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5 },
                  className:
                    'text-center text-green-600 font-semibold text-lg sm:text-xl',
                  children:
                    '✅ Thank you for reaching out! We’ll get back to you soon.',
                },
                'thanks'
              )
            : t.jsxs(
                a.form,
                {
                  onSubmit: async (e) => {
                    (e.preventDefault(), d(null), c(!0));
                    const t = e.target,
                      a = new FormData(t);
                    try {
                      const e = await fetch('https://formspree.io/f/xjkeqraa', {
                        method: 'POST',
                        body: a,
                        headers: { Accept: 'application/json' },
                      });
                      if (e.ok) (n(!0), t.reset());
                      else {
                        const t = await e.json();
                        d(t.error || 'Something went wrong. Please try again.');
                      }
                    } catch {
                      d(
                        'Network error. Please check your connection and try again.'
                      );
                    }
                    c(!1);
                  },
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.5 },
                  className: 'flex flex-col space-y-5',
                  children: [
                    [
                      {
                        id: 'name',
                        label: 'Name',
                        type: 'text',
                        autoComplete: 'name',
                      },
                      {
                        id: 'email',
                        label: 'Email',
                        type: 'email',
                        autoComplete: 'email',
                      },
                      {
                        id: 'message',
                        label: 'Message',
                        type: 'textarea',
                        props: { rows: 5, className: 'resize-none' },
                      },
                    ].map((e) => t.jsx(FormInput, { ...e }, e.id)),
                    t.jsx(a.button, {
                      type: 'submit',
                      disabled: r,
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className:
                        'bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center',
                      children: r
                        ? t.jsxs(t.Fragment, {
                            children: [
                              t.jsxs('svg', {
                                className:
                                  'animate-spin -ml-1 mr-3 h-5 w-5 text-white',
                                xmlns: 'http://www.w3.org/2000/svg',
                                fill: 'none',
                                viewBox: '0 0 24 24',
                                children: [
                                  t.jsx('circle', {
                                    className: 'opacity-25',
                                    cx: '12',
                                    cy: '12',
                                    r: '10',
                                    stroke: 'currentColor',
                                    strokeWidth: '4',
                                  }),
                                  t.jsx('path', {
                                    className: 'opacity-75',
                                    fill: 'currentColor',
                                    d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z',
                                  }),
                                ],
                              }),
                              'Sending...',
                            ],
                          })
                        : 'Send',
                    }),
                    m &&
                      t.jsx('p', {
                        className:
                          'text-red-600 text-center mt-2 text-sm sm:text-base',
                        children: m,
                      }),
                  ],
                },
                'form'
              ),
        }),
      }),
    ],
  });
}
export { Contact as default };
