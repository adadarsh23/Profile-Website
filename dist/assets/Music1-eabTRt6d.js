const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/MusicArt-mnphBFwk.js',
      'assets/vendor-DEG5g0yW.js',
      'assets/utils-65uuWg0a.js',
      'assets/bubble.module-YQKLPTNq.js',
      'assets/bubble-C_vl8Ga6.css',
    ])
) => i.map((i) => d[i]);
import { r as i, _ as s, j as t, m as e } from './vendor-DEG5g0yW.js';
import { L as a } from './index-Cxrg4Q2y.js';
const r = [
    {
      id: 1,
      artist: 'Âd Adarsh',
      music: 'Silent Ritual',
      albumArt:
        'https://i1.sndcdn.com/artworks-P4DbVfnvKwyNYl4y-2qAruQ-t1080x1080.png',
      isSong: !0,
      isLoading: !1,
      previewUrl: '/Audio/Silent.mp3',
    },
    {
      id: 2,
      artist: 'Âd Adarsh',
      music: 'Haqeeqat',
      albumArt:
        'https://i1.sndcdn.com/artworks-WyygoNytrVM35zM8-e0lpEg-t1080x1080.png',
      isSong: !0,
      isLoading: !1,
      previewUrl: '/Audio/Haqeeqat.mp3',
    },
    {
      id: 3,
      artist: 'Âd Adarsh',
      music: 'NUmber 2',
      albumArt:
        'https://i1.sndcdn.com/artworks-lJpQmt2g4vYhTHzf-IKxLfg-t1080x1080.jpg',
      isSong: !0,
      isLoading: !1,
      previewUrl: '/Audio/NUmBer.mp3',
    },
    {
      id: 4,
      artist: 'Âd Adarsh',
      music: 'Unfelling',
      albumArt:
        'https://i1.sndcdn.com/artworks-bomjdi0cYLIK2ise-FqxckA-t1080x1080.png',
      isSong: !0,
      isLoading: !1,
      previewUrl: '/Audio/Unfelling.mp3',
    },
    {
      id: 5,
      artist: 'Âd Adarsh',
      music: 'Phaser',
      albumArt:
        'https://i1.sndcdn.com/artworks-njDMD8VzFGzRePRy-vDyuoA-t1080x1080.png',
      isSong: !0,
      isLoading: !1,
      previewUrl: '/Audio/Phaser.mp3',
    },
  ],
  n = i.lazy(() =>
    s(() => import('./MusicArt-mnphBFwk.js'), __vite__mapDeps([0, 1, 2]))
  ),
  BubbleText = ({ styles: i }) =>
    i
      ? t.jsx(e.h2, {
          className:
            'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
          initial: { y: -20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6, ease: 'easeOut' },
          children: 'Music Albums'
            .split('')
            .map((s, e) =>
              t.jsx('span', { className: i.hoverText, children: s }, e)
            ),
        })
      : null;
function Music1() {
  const [l, d] = i.useState(null);
  i.useEffect(() => {
    s(
      () => import('./bubble.module-YQKLPTNq.js'),
      __vite__mapDeps([3, 4])
    ).then((i) => d(i.default));
  }, []);
  const o = i.useMemo(
      () => ({
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
      }),
      []
    ),
    m = i.useMemo(
      () => ({
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeOut' },
        },
      }),
      []
    ),
    c = Array.isArray(r) ? r : [];
  return t.jsxs('section', {
    className:
      'bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20',
    children: [
      l && t.jsx(BubbleText, { styles: l }),
      t.jsx(e.div, {
        className:
          'flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-24 xl:gap-32',
        variants: o,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: !0, amount: 0.2 },
        children: c.map((s) =>
          t.jsx(
            e.div,
            {
              variants: m,
              children: t.jsx(i.Suspense, {
                fallback: t.jsx('div', { children: t.jsx(a, {}) }),
                children: t.jsx(n, { ...s }),
              }),
            },
            s.id || s.music
          )
        ),
      }),
    ],
  });
}
export { Music1 as default };
