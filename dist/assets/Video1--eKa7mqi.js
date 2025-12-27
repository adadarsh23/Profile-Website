const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/VideoPlay-B_kCEmdd.js',
      'assets/vendor-iWomKbAA.js',
      'assets/utils-DfWtT5OB.js',
      'assets/bubble.module-YQKLPTNq.js',
      'assets/bubble-C_vl8Ga6.css',
    ])
) => i.map((i) => d[i]);
import { r as e, _ as t, j as s, m as a, V as l } from './vendor-iWomKbAA.js';
import { L as i } from './index-Bkc3ae4Q.js';
const o = e.lazy(() =>
    t(() => import('./VideoPlay-B_kCEmdd.js'), __vite__mapDeps([0, 1, 2]))
  ),
  BubbleText = ({ styles: e }) =>
    e
      ? s.jsx(a.h2, {
          className:
            'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
          initial: { y: -20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6, ease: 'easeOut' },
          children: 'Latest Video'
            .split('')
            .map((t, a) =>
              s.jsx('span', { className: e.hoverText, children: t }, a)
            ),
        })
      : null;
function Video1() {
  const [n, r] = e.useState({ status: 'loading', videoId: null, error: null }),
    [c, d] = e.useState(null);
  return (
    e.useEffect(() => {
      t(
        () => import('./bubble.module-YQKLPTNq.js'),
        __vite__mapDeps([3, 4])
      ).then(d);
      (async () => {
        try {
          const e = 'AIzaSyDb3c4sF37URQp55MPZvLnjy4W9P1ew0lM',
            t = 'UCBxHHe4o1uNKKDcJZMjPAhQ',
            s = (
              await l.get(
                `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${t}&key=${e}`
              )
            ).data.items;
          if (!s || 0 === s.length)
            throw new Error('YouTube channel not found.');
          const a = s[0].contentDetails.relatedPlaylists.uploads,
            i = (
              await l.get(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${a}&maxResults=1&key=${e}`,
                { timeout: 8e3 }
              )
            ).data.items;
          if (!i || 0 === i.length)
            return void r({ status: 'success', videoId: null, error: null });
          r({
            status: 'success',
            videoId: i[0].snippet.resourceId.videoId,
            error: null,
          });
        } catch (e) {
          r({ status: 'error', videoId: null, error: e.message });
        }
      })();
    }, []),
    s.jsxs('section', {
      className:
        'bg-black text-white  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8  mt-3 sm:mt-6 lg:mt-8  mb-8 sm:mb-12 lg:mb-20',
      children: [
        s.jsx('section', {
          className:
            'bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mt-8 mb-8 sm:mt-12 sm:mb-12 lg:mt-20 lg:mb-20',
        }),
        s.jsx(BubbleText, { styles: c }),
        s.jsxs('div', {
          className:
            'w-full max-w-4xl aspect-video flex items-center justify-center',
          children: [
            'loading' === n.status && s.jsx(i, {}),
            'error' === n.status &&
              s.jsxs('div', {
                className: 'text-center text-red-500',
                children: [
                  s.jsx('p', { children: 'Could not load video.' }),
                  s.jsx('p', {
                    className: 'text-sm text-gray-400',
                    children: 'Please try again later.',
                  }),
                ],
              }),
            'success' === n.status &&
              n.videoId &&
              s.jsx(a.div, {
                className: 'w-full h-full',
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: 'easeOut' },
                children: s.jsx(o, {
                  src: `https://www.youtube.com/embed/${n.videoId}`,
                }),
              }),
            'success' === n.status &&
              !n.videoId &&
              s.jsx('div', {
                className: 'text-center text-white text-xl',
                children: 'No video found.',
              }),
          ],
        }),
      ],
    })
  );
}
export { Video1 as default };
