const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/Header-D-4ebVpJ.js',
      'assets/vendor-CLKqtzgM.js',
      'assets/Scroll-Dm476rWI.js',
      'assets/index-TjyNd_uT.js',
      'assets/index-D4Pt6dGf.css',
      'assets/Velocity-C5HYXOR8.js',
      'assets/Loop-CvDDRKI1.js',
      'assets/Video-ThFbNV-2.js',
      'assets/bubble.module-BuxepTIR.js',
      'assets/bubble-C_vl8Ga6.css',
      'assets/Music-mISgQpWk.js',
      'assets/CirclePhoto-Bft_VBRz.js',
    ])
) => i.map((i) => d[i]);
import { r as o, j as s, _ } from './vendor-CLKqtzgM.js';
import { L as e } from './index-TjyNd_uT.js';
const t = o.lazy(() =>
    _(() => import('./Header-D-4ebVpJ.js'), __vite__mapDeps([0, 1]))
  ),
  i = o.lazy(() =>
    _(() => import('./Scroll-Dm476rWI.js'), __vite__mapDeps([2, 1, 3, 4]))
  ),
  r = o.lazy(() =>
    _(() => import('./Velocity-C5HYXOR8.js'), __vite__mapDeps([5, 1]))
  ),
  a = o.lazy(() =>
    _(() => import('./Loop-CvDDRKI1.js'), __vite__mapDeps([6, 1]))
  ),
  l = o.lazy(() =>
    _(() => import('./Video-ThFbNV-2.js'), __vite__mapDeps([7, 1, 8, 9, 3, 4]))
  ),
  j = o.lazy(() =>
    _(() => import('./Music-mISgQpWk.js'), __vite__mapDeps([10, 1, 8, 9]))
  ),
  n = o.lazy(() =>
    _(() => import('./CirclePhoto-Bft_VBRz.js'), __vite__mapDeps([11, 1, 8, 9]))
  );
function Home() {
  const [_, m] = o.useState(!1);
  return (
    o.useEffect(() => {
      if (_) {
        const o = setTimeout(() => {
          window.scrollTo({
            top: 0.9 * window.innerHeight,
            behavior: 'smooth',
          });
        }, 800);
        return () => clearTimeout(o);
      }
    }, [_]),
    s.jsx('main', {
      children: s.jsxs(o.Suspense, {
        fallback: s.jsx(e, {}),
        children: [
          s.jsx(t, {}),
          s.jsx(i, {}),
          s.jsx(r, {}),
          s.jsx(n, {}),
          s.jsx(a, {}),
          s.jsx(l, {}),
          s.jsx(j, {}),
          s.jsx('div', { style: { display: 'none' }, onLoad: () => m(!0) }),
        ],
      }),
    })
  );
}
export { Home as default };
