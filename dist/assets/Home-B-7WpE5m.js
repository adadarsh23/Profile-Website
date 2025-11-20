const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/Header-pB6ExHgX.js',
      'assets/vendor-C8sBI81f.js',
      'assets/index-BgDpI5-0.js',
      'assets/index-CxbfZ0V5.css',
      'assets/Header-DDofIuNV.css',
      'assets/Scroll-B04YiMGD.js',
      'assets/Velocity-CddvyT7e.js',
      'assets/Loop-v9U1k6tK.js',
      'assets/Video1-B3RVmybI.js',
      'assets/Music1-BynDsSmn.js',
      'assets/CirclePhoto-CIBl8WMV.js',
    ])
) => i.map((i) => d[i]);
import { j as o, r as _, _ as s } from './vendor-C8sBI81f.js';
import { L as i } from './index-BgDpI5-0.js';
const r = _.lazy(() =>
    s(() => import('./Header-pB6ExHgX.js'), __vite__mapDeps([0, 1, 2, 3, 4]))
  ),
  e = _.lazy(() =>
    s(() => import('./Scroll-B04YiMGD.js'), __vite__mapDeps([5, 1, 2, 3]))
  ),
  t = _.lazy(() =>
    s(() => import('./Velocity-CddvyT7e.js'), __vite__mapDeps([6, 1]))
  ),
  j = _.lazy(() =>
    s(() => import('./Loop-v9U1k6tK.js'), __vite__mapDeps([7, 1]))
  ),
  l = _.lazy(() =>
    s(() => import('./Video1-B3RVmybI.js'), __vite__mapDeps([8, 1, 2, 3]))
  ),
  a = _.lazy(() =>
    s(() => import('./Music1-BynDsSmn.js'), __vite__mapDeps([9, 1]))
  ),
  m = _.lazy(() =>
    s(() => import('./CirclePhoto-CIBl8WMV.js'), __vite__mapDeps([10, 1]))
  );
function Home() {
  return o.jsx('main', {
    children: o.jsxs(_.Suspense, {
      fallback: o.jsx(i, {}),
      children: [
        o.jsx(r, {
          onAnimationComplete: () => {
            window.scrollTo({
              top: 0 * window.innerHeight,
              behavior: 'smooth',
            });
          },
        }),
        o.jsx(e, {}),
        o.jsx(t, {}),
        o.jsx(m, {}),
        o.jsx(j, {}),
        o.jsx(a, {}),
        o.jsx(l, {}),
      ],
    }),
  });
}
export { Home as default };
