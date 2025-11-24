const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-Cxrg4Q2y.js',
      'assets/vendor-DEG5g0yW.js',
      'assets/index-CrYdpk0W.css',
      'assets/RobotFace-C-MvMxsg.js',
      'assets/utils-65uuWg0a.js',
      'assets/RobotFace-BLJ6FyLb.css',
    ])
) => i.map((i) => d[i]);
import { r as e, _ as o, j as t } from './vendor-DEG5g0yW.js';
const a = e.lazy(() =>
  o(
    () => import('./index-Cxrg4Q2y.js').then((e) => e.a),
    __vite__mapDeps([0, 1, 2])
  )
);
function RobotFaceWrapper() {
  const [r, n] = e.useState(null),
    [s, c] = e.useState(null);
  return (
    e.useEffect(() => {
      let e = !0;
      return (
        o(
          () => import('./RobotFace-C-MvMxsg.js'),
          __vite__mapDeps([3, 1, 4, 0, 2, 5])
        )
          .then((o) => {
            const t = o.default || o.RobotFace;
            if (!t)
              throw new Error(
                'RobotFace module does not export a component as default or named RobotFace'
              );
            e && n(() => t);
          })
          .catch((o) => {
            e && c(o);
          }),
        () => {
          e = !1;
        }
      );
    }, []),
    s
      ? null
      : r
        ? t.jsx('div', {
            className: 'robot-face-container',
            children: t.jsx(r, {}),
          })
        : t.jsx(a, {})
  );
}
export { RobotFaceWrapper as default };
