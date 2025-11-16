const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/Beats-BF8vLKt6.js', 'assets/vendor-CLKqtzgM.js'])
) => i.map((i) => d[i]);
import { j as e, r as t, m as a, _ as l } from './vendor-CLKqtzgM.js';
import { s as m } from './bubble.module-BuxepTIR.js';
import { L as s } from './index-TjyNd_uT.js';
const i = [
    {
      id: 1,
      title: 'Midnight Chill',
      artist: 'Adarsh',
      genre: 'Lo-fi',
      bpm: 85,
      duration: '2:45',
      image: 'https://placehold.co/400x300/png?text=Midnight+Chill',
      url: 'https://example.com/midnight-chill.mp3',
      price: 'Free',
      download: 'https://example.com/midnight-chill.mp3',
    },
    {
      id: 2,
      title: 'Trap Energy',
      artist: 'BeatMaster',
      genre: 'Trap',
      bpm: 140,
      duration: '3:15',
      image: 'https://placehold.co/400x300/png?text=Trap+Energy',
      url: 'https://example.com/trap-energy.mp3',
      price: '$19.99',
      download: 'https://example.com/trap-energy.mp3',
    },
    {
      id: 3,
      title: 'Summer Vibes',
      artist: 'DJ Wave',
      genre: 'House',
      bpm: 120,
      duration: '4:05',
      image: 'https://placehold.co/400x300/png?text=Summer+Vibes',
      url: 'https://example.com/summer-vibes.mp3',
      price: '$14.99',
      download: 'https://example.com/summer-vibes.mp3',
    },
    {
      id: 4,
      title: 'Dark Mode',
      artist: 'SynthLord',
      genre: 'EDM',
      bpm: 128,
      duration: '3:50',
      image: 'https://placehold.co/400x300/png?text=Dark+Mode',
      url: 'https://example.com/dark-mode.mp3',
      price: 'Free',
      download: 'https://example.com/dark-mode.mp3',
    },
  ],
  r = t.lazy(() =>
    l(() => import('./Beats-BF8vLKt6.js'), __vite__mapDeps([0, 1]))
  ),
  BubbleText = () =>
    e.jsx(a.h2, {
      className:
        'text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg',
      initial: { y: -20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: 'easeOut' },
      children: 'Free Sample'
        .split('')
        .map((t, a) =>
          e.jsx('span', { className: m.hoverText, children: t }, a)
        ),
    });
function Sample() {
  return e.jsxs('section', {
    className:
      'relative bg-black text-white min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8',
    children: [
      e.jsx(BubbleText, {}),
      e.jsx('div', {
        className: 'w-full max-w-7xl mt-10 md:mt-16',
        children:
          i.length > 0
            ? e.jsx(t.Suspense, {
                fallback: e.jsx(s, {}),
                children: e.jsx(r, { items: i }),
              })
            : e.jsx('p', {
                className: 'text-center text-gray-400 text-lg md:text-xl',
                children: 'No Beats available.',
              }),
      }),
    ],
  });
}
export { Sample as default };
