const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/Dialog09-DcnQ_HEF.js',
      'assets/vendor-iWomKbAA.js',
      'assets/utils-DfWtT5OB.js',
    ])
) => i.map((i) => d[i]);
import { r as e, j as t, m as i, _ as a } from './vendor-iWomKbAA.js';
import { L as s } from './index-Bkc3ae4Q.js';
const n = e.lazy(() =>
  a(() => import('./Dialog09-DcnQ_HEF.js'), __vite__mapDeps([0, 1, 2]))
);
function SocialShare() {
  const [a, o] = e.useState(!1),
    [r, d] = e.useState('');
  return (
    e.useEffect(() => {
      d(window.location.href);
      const handleResize = () => o(window.innerWidth < 768);
      return (
        handleResize(),
        window.addEventListener('resize', handleResize),
        () => window.removeEventListener('resize', handleResize)
      );
    }, []),
    t.jsx(i.div, {
      style: {
        position: 'fixed',
        bottom: '20px',
        left: a ? '20px' : '120px',
        zIndex: 48,
      },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' },
      children: t.jsx(e.Suspense, {
        fallback: t.jsx(s, {}),
        children: t.jsx(n, {
          shareUrl: r,
          platforms: [
            'twitter',
            'facebook',
            'linkedin',
            'whatsapp',
            'reddit',
            'telegram',
            'email',
          ],
        }),
      }),
    })
  );
}
export { SocialShare as default };
