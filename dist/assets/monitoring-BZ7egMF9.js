import { a3 as n } from './vendor-Grk_15WJ.js';
import { i as t } from './vendor_react-C8wG62CJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const o = 'o4jvc9/adadarsh23',
  a = '8n7x7x4nxn63837x3n83nx838xn3n3863x836n48638',
  i = 'Adarsh',
  e = 'adrajpu523@gmail.com',
  s =
    'https://1b9b9b168e26f53aeb5a256e2da0e591@o4510039017390081.ingest.us.sentry.io/4510039018766336',
  c = parseFloat('1.0');
function _() {
  (n.init(o), n.identify(a, { name: i, email: e }));
}
function m() {
  t({ dsn: s, tracesSampleRate: c });
}
export { _ as initLogRocket, m as initSentry };
