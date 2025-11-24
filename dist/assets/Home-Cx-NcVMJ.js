const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/Header-CAJu5QZD.js',
      'assets/vendor-DEG5g0yW.js',
      'assets/utils-65uuWg0a.js',
      'assets/Scroll-DGxpujXH.js',
      'assets/index-Cxrg4Q2y.js',
      'assets/index-CrYdpk0W.css',
      'assets/Velocity-BDPewFmb.js',
      'assets/Loop-BnWgy_wa.js',
      'assets/Video1-0c7wjlez.js',
      'assets/Music1-eabTRt6d.js',
      'assets/CirclePhoto-DzIs6-5Z.js',
    ])
) => i.map((i) => d[i]);
import { j as o, r as _, _ as s } from './vendor-DEG5g0yW.js';
import { L as i } from './index-Cxrg4Q2y.js';
const r = _.lazy(() =>
    s(() => import('./Header-CAJu5QZD.js'), __vite__mapDeps([0, 1, 2]))
  ),
  e = _.lazy(() =>
    s(() => import('./Scroll-DGxpujXH.js'), __vite__mapDeps([3, 1, 4, 5]))
  ),
  t = _.lazy(() =>
    s(() => import('./Velocity-BDPewFmb.js'), __vite__mapDeps([6, 1]))
  ),
  j = _.lazy(() =>
    s(() => import('./Loop-BnWgy_wa.js'), __vite__mapDeps([7, 1]))
  ),
  a = _.lazy(() =>
    s(() => import('./Video1-0c7wjlez.js'), __vite__mapDeps([8, 1, 4, 5]))
  ),
  l = _.lazy(() =>
    s(() => import('./Music1-eabTRt6d.js'), __vite__mapDeps([9, 1, 4, 5]))
  ),
  m = _.lazy(() =>
    s(() => import('./CirclePhoto-DzIs6-5Z.js'), __vite__mapDeps([10, 1]))
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
        o.jsx(a, {}),
        o.jsx(l, {}),
        o.jsx(t, {}),
        o.jsx(m, {}),
        o.jsx(j, {}),
      ],
    }),
  });
}
export { Home as default };
