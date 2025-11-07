const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/Header-BM_2v3As.js',
      'assets/vendor_react-C8wG62CJ.js',
      'assets/vendor-Grk_15WJ.js',
      'assets/vendor_react-dom-DKAsGG5-.js',
      'assets/Scroll-kxC1LQEn.js',
      'assets/index-BtU_4mIL.js',
      'assets/index-BpajaV4b.css',
      'assets/Velocity-BVCDw_Fy.js',
      'assets/Loop-B7KAfhh7.js',
      'assets/Video-DTOfuPNl.js',
      'assets/bubble.module-Bdvz9-Ck.js',
      'assets/bubble-C_vl8Ga6.css',
      'assets/Music-Buixa2xT.js',
      'assets/CirclePhoto-BuY-i2d0.js',
    ])
) => i.map((i) => d[i]);
import { r as t, j as o, _ as e } from './vendor_react-C8wG62CJ.js';
import { L as _ } from './index-BtU_4mIL.js';
import './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const a = t.lazy(() =>
    e(() => import('./Header-BM_2v3As.js'), __vite__mapDeps([0, 1, 2, 3]))
  ),
  n = t.lazy(() =>
    e(() => import('./Scroll-kxC1LQEn.js'), __vite__mapDeps([4, 1, 2, 3, 5, 6]))
  ),
  d = t.lazy(() =>
    e(() => import('./Velocity-BVCDw_Fy.js'), __vite__mapDeps([7, 1, 2, 3]))
  ),
  l = t.lazy(() =>
    e(() => import('./Loop-B7KAfhh7.js'), __vite__mapDeps([8, 1, 2, 3]))
  ),
  c = t.lazy(() =>
    e(
      () => import('./Video-DTOfuPNl.js'),
      __vite__mapDeps([9, 1, 2, 3, 10, 11, 5, 6])
    )
  ),
  m = t.lazy(() =>
    e(
      () => import('./Music-Buixa2xT.js'),
      __vite__mapDeps([12, 1, 2, 3, 10, 11])
    )
  ),
  u = t.lazy(() =>
    e(
      () => import('./CirclePhoto-BuY-i2d0.js'),
      __vite__mapDeps([13, 1, 2, 3, 10, 11])
    )
  );
function L() {
  const [s, i] = t.useState(!1);
  return (
    t.useEffect(() => {
      if (s) {
        const r = setTimeout(() => {
          window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: 'smooth',
          });
        }, 800);
        return () => clearTimeout(r);
      }
    }, [s]),
    o.jsx('main', {
      children: o.jsxs(t.Suspense, {
        fallback: o.jsx(_, {}),
        children: [
          o.jsx(a, {}),
          o.jsx(n, {}),
          o.jsx(d, {}),
          o.jsx(u, {}),
          o.jsx(l, {}),
          o.jsx(c, {}),
          o.jsx(m, {}),
          o.jsx('div', { style: { display: 'none' }, onLoad: () => i(!0) }),
        ],
      }),
    })
  );
}
export { L as default };
