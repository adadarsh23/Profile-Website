import { f as e, u as n, r as a } from './vendor_react-C8wG62CJ.js';
import './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const o = 'G-X34L2QSKRG',
  c = () => {
    e.initialize(o);
  },
  s = (t) => {
    e.send({ page: t });
  };
function u() {
  const t = n();
  return (
    a.useEffect(() => {
      c();
    }, []),
    a.useEffect(() => {
      s(t.pathname);
    }, [t]),
    null
  );
}
export { u as default };
