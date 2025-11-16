import { r as e, j as t } from './vendor-CLKqtzgM.js';
function Map({
  src: a = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30775411.42752087!2d60.945340066964576!3d19.680067559539204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1759911699414!5m2!1sen!2sin',
  title: s = 'Location Map',
  height: r = 350,
  interactive: o = !0,
  className: i = '',
  showLabel: l = !0,
}) {
  const [n, d] = e.useState(!1),
    [c, m] = e.useState(!1),
    [b, h] = e.useState(o);
  return !('string' == typeof a && a.trim().startsWith('https://')) || c
    ? t.jsx('div', {
        className: `w-full rounded-2xl border border-gray-700/50 bg-black/40 text-white p-4 text-sm ${i}`,
        children: t.jsxs('p', {
          className: 'opacity-90',
          children: [
            'Map unavailable. Please provide a valid Google Maps embed URL using the ',
            t.jsx('code', { className: 'font-mono', children: 'src' }),
            ' prop.',
          ],
        }),
      })
    : t.jsxs('div', {
        className: `w-full rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg bg-black ${i}`,
        style: { height: r },
        children: [
          t.jsx('button', {
            onClick: () => h((e) => !e),
            className:
              'absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-md text-white text-xs sm:text-sm px-4 py-2 rounded-lg border border-gray-600 hover:bg-white/10 transition-all active:scale-95',
            children: b ? 'Static' : 'Interactive',
          }),
          !n &&
            t.jsx('div', {
              className:
                'absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white text-sm animate-pulse z-10',
              children: t.jsx('span', { children: 'Loading map...' }),
            }),
          t.jsx('iframe', {
            title: s,
            src: a,
            onLoad: () => d(!0),
            onError: () => m(!0),
            style: {
              border: 0,
              width: '100%',
              height: '100%',
              filter: 'grayscale(1) invert(1) contrast(0.9) brightness(1.1)',
              pointerEvents: b ? 'auto' : 'none',
              transition: 'opacity 0.4s ease',
              opacity: n ? 1 : 0,
            },
            loading: 'lazy',
            referrerPolicy: 'no-referrer-when-downgrade',
            allowFullScreen: !0,
          }),
          !b &&
            n &&
            t.jsx('div', {
              className: 'absolute inset-0 bg-black/20 cursor-not-allowed z-10',
            }),
        ],
      });
}
export { Map as default };
