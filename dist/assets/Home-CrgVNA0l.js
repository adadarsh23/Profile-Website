const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/Header-C0RO_1i1.js',
      'assets/vendor-iWomKbAA.js',
      'assets/utils-DfWtT5OB.js',
      'assets/Scroll-C5gxNfwa.js',
      'assets/index-Bkc3ae4Q.js',
      'assets/index-BpYHdyh6.css',
      'assets/Velocity-CxPypJi4.js',
      'assets/Loop-CmWR7Hqz.js',
      'assets/Video1--eKa7mqi.js',
      'assets/Music1-mvNXtFQP.js',
      'assets/CirclePhoto-DOYUpw-q.js',
    ])
) => i.map((i) => d[i]);
import { j as o, r as _, _ as s } from './vendor-iWomKbAA.js';
import { L as i } from './index-Bkc3ae4Q.js';
const r = _.lazy(() =>
    s(() => import('./Header-C0RO_1i1.js'), __vite__mapDeps([0, 1, 2]))
  ),
  t = _.lazy(() =>
    s(() => import('./Scroll-C5gxNfwa.js'), __vite__mapDeps([3, 1, 4, 5]))
  ),
  e = _.lazy(() =>
    s(() => import('./Velocity-CxPypJi4.js'), __vite__mapDeps([6, 1]))
  ),
  j = _.lazy(() =>
    s(() => import('./Loop-CmWR7Hqz.js'), __vite__mapDeps([7, 1]))
  ),
  a = _.lazy(() =>
    s(() => import('./Video1--eKa7mqi.js'), __vite__mapDeps([8, 1, 4, 5]))
  ),
  l = _.lazy(() =>
    s(() => import('./Music1-mvNXtFQP.js'), __vite__mapDeps([9, 1, 4, 5]))
  ),
  m = _.lazy(() =>
    s(() => import('./CirclePhoto-DOYUpw-q.js'), __vite__mapDeps([10, 1]))
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
        o.jsx(t, {}),
        o.jsx(a, {}),
        o.jsx(l, {}),
        o.jsx(e, {}),
        o.jsx(m, {}),
        o.jsx(j, {}),
      ],
    }),
  });
}
export { Home as default };
