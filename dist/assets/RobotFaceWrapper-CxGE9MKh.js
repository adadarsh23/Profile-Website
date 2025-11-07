const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/RobotFace-CtYroGWF.js',
      'assets/vendor_react-C8wG62CJ.js',
      'assets/vendor-Grk_15WJ.js',
      'assets/vendor_react-dom-DKAsGG5-.js',
      'assets/index-BtU_4mIL.js',
      'assets/index-BpajaV4b.css',
      'assets/utils-x720GUhr.js',
    ])
) => i.map((i) => d[i]);
import { r as e, _ as u, j as r } from './vendor_react-C8wG62CJ.js';
import { L as l } from './index-BtU_4mIL.js';
import './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
function x() {
  const [a, s] = e.useState(null),
    [c, i] = e.useState(null);
  return (
    e.useEffect(() => {
      let t = !0;
      return (
        u(
          () => import('./RobotFace-CtYroGWF.js'),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])
        )
          .then((o) => {
            const n = o.default || o.RobotFace;
            if (!n)
              throw new Error(
                'RobotFace module does not export a component as default or named RobotFace'
              );
            t && s(() => n);
          })
          .catch((o) => {
            (console.error('Failed to load RobotFace:', o), t && i(o));
          }),
        () => {
          t = !1;
        }
      );
    }, []),
    c
      ? null
      : a
        ? r.jsx('div', {
            className: 'robot-face-container',
            children: r.jsx(a, {}),
          })
        : r.jsx(l, {})
  );
}
export { x as default };
