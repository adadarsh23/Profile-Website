const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-Bkc3ae4Q.js',
      'assets/vendor-iWomKbAA.js',
      'assets/index-BpYHdyh6.css',
      'assets/RobotFace-DNboi6g8.js',
      'assets/utils-DfWtT5OB.js',
      'assets/RobotFace-BLJ6FyLb.css',
    ])
) => i.map((i) => d[i]);
import { r as e, _ as o, j as t } from './vendor-iWomKbAA.js';
const a = e.lazy(() =>
  o(
    () => import('./index-Bkc3ae4Q.js').then((e) => e.a),
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
          () => import('./RobotFace-DNboi6g8.js'),
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
