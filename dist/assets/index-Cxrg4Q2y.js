const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/PillNav-v6nX9lP5.js',
      'assets/vendor-DEG5g0yW.js',
      'assets/Footer-DUMjLTrW.js',
      'assets/Home-Cx-NcVMJ.js',
      'assets/About-DyoqdCUM.js',
      'assets/Contact-Cq9rFyY_.js',
      'assets/Sample-C7DSPNpY.js',
      'assets/Blog-POQwqxO_.js',
      'assets/NotFound-rFVOAUg3.js',
      'assets/AnalyticsTracker-ClaJEPg8.js',
      'assets/IpLogger--IaKthPj.js',
      'assets/ScrollToTopButton-B0B0b-0J.js',
      'assets/InternetStatus-BaESMW1a.js',
      'assets/CacheClean-l89zd33i.js',
      'assets/WebSocket-C3KGGm_M.js',
      'assets/LiquidCursor-BCADq3AF.js',
      'assets/utils-65uuWg0a.js',
      'assets/SplashCursor-I2nnIqlv.js',
      'assets/SmoothScrollProvider-CbNHGIgY.js',
      'assets/RobotFaceWrapper-BPk5eQUm.js',
      'assets/GradualBlur-dZcJ9Aht.js',
    ])
) => i.map((i) => d[i]);
import {
  r as e,
  j as n,
  s as a,
  R as s,
  _ as t,
  m as r,
  a as o,
  b as i,
  L as l,
  i as c,
  c as d,
  d as p,
  B as m,
} from './vendor-DEG5g0yW.js';
!(function () {
  const e = document.createElement('link').relList;
  if (!(e && e.supports && e.supports('modulepreload'))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      processPreload(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ('childList' === n.type)
          for (const e of n.addedNodes)
            'LINK' === e.tagName &&
              'modulepreload' === e.rel &&
              processPreload(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function processPreload(e) {
    if (e.ep) return;
    e.ep = !0;
    const n = (function (e) {
      const n = {};
      return (
        e.integrity && (n.integrity = e.integrity),
        e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy),
        'use-credentials' === e.crossOrigin
          ? (n.credentials = 'include')
          : 'anonymous' === e.crossOrigin
            ? (n.credentials = 'omit')
            : (n.credentials = 'same-origin'),
        n
      );
    })(e);
    fetch(e.href, n);
  }
})();
const x = e.memo(() =>
    n.jsxs('div', {
      className:
        'flex justify-center items-center w-screen h-screen bg-black text-white',
      children: [
        n.jsxs('div', {
          'aria-label': 'Loading...',
          role: 'status',
          className: 'flex flex-col items-center space-y-10',
          children: [
            n.jsxs('div', {
              className: 'flex items-end space-x-2',
              children: [
                n.jsx('span', { className: 'eq-bar bar1' }),
                n.jsx('span', { className: 'eq-bar bar2' }),
                n.jsx('span', { className: 'eq-bar bar3' }),
                n.jsx('span', { className: 'eq-bar bar4' }),
                n.jsx('span', { className: 'eq-bar bar5' }),
                n.jsx('span', { className: 'eq-bar bar6' }),
                n.jsx('span', { className: 'eq-bar bar7' }),
              ],
            }),
            n.jsxs('div', {
              className:
                'flex space-x-2 text-xl font-semibold tracking-wider text-white',
              children: [
                n.jsx('span', {
                  className: 'animate-pulse-neon',
                  children: 'Loading',
                }),
                n.jsx('span', {
                  className: 'animate-bounce-neon delay-0',
                  children: '.',
                }),
                n.jsx('span', {
                  className: 'animate-bounce-neon delay-200',
                  children: '.',
                }),
                n.jsx('span', {
                  className: 'animate-bounce-neon delay-400',
                  children: '.',
                }),
              ],
            }),
          ],
        }),
        n.jsx('style', {
          jsx: 'true',
          children:
            '\n        /* Equalizer bars */\n        .eq-bar {\n          display: inline-block;\n          width: 6px;\n          background: white;\n          border-radius: 3px;\n          animation: eqAnim 1.5s infinite cubic-bezier(0.2, 0.7, 0.8, 1.1);\n          transform-origin: bottom;\n        }\n\n        .bar1 {\n          height: 15px;\n          animation-delay: 0s;\n        }\n        .bar2 {\n          height: 25px;\n          animation-delay: 0.15s;\n        }\n        .bar3 {\n          height: 30px;\n          animation-delay: 0.3s;\n        }\n        .bar4 {\n          height: 35px;\n          animation-delay: 0.45s;\n        }\n        .bar5 {\n          height: 30px;\n          animation-delay: 0.6s;\n        }\n        .bar6 {\n          height: 25px;\n          animation-delay: 0.75s;\n        }\n        .bar7 {\n          height: 15px;\n          animation-delay: 0.9s;\n        }\n\n        @keyframes eqAnim {\n          0%,\n          100% {\n            transform: scaleY(0.2);\n            opacity: 0.3;\n            box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);\n          }\n          25% {\n            transform: scaleY(0.7);\n            opacity: 0.8;\n          }\n          50% {\n            transform: scaleY(1);\n            opacity: 1;\n            box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);\n          }\n        }\n\n        /* Neon loading text animations stay same */\n        @keyframes pulse-neon {\n          0%,\n          100% {\n            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff;\n            opacity: 0.8;\n          }\n          50% {\n            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;\n            opacity: 1;\n          }\n        }\n        .animate-pulse-neon {\n          animation: pulse-neon 1.5s infinite;\n        }\n\n        @keyframes bounce-neon {\n          0%,\n          80%,\n          100% {\n            transform: scale(0);\n            opacity: 0.2;\n            text-shadow: 0 0 5px #fff;\n          }\n          40% {\n            transform: scale(1);\n            opacity: 1;\n            text-shadow: 0 0 10px #fff, 0 0 20px #fff;\n          }\n        }\n        .animate-bounce-neon {\n          animation: bounce-neon 1s infinite;\n        }\n\n        .delay-0 {\n          animation-delay: 0s;\n        }\n        .delay-200 {\n          animation-delay: 0.2s;\n        }\n        .delay-400 {\n          animation-delay: 0.4s;\n        }\n      ',
        }),
      ],
    })
  ),
  h = Object.freeze(
    Object.defineProperty({ __proto__: null, default: x }, Symbol.toStringTag, {
      value: 'Module',
    })
  ),
  f = {
    environment: { tier: 'production' },
    api: 'https://api.statsig.com/v1',
  },
  u = { userID: 'default-user-id', environment: f.environment };
function StatsigSetup({ children: e }) {
  return n.jsx(a.StatsigProvider, {
    sdkKey: 'client-oQshE1GJ6D2QX2ZxbBfTP3IuxFXs7YXypBgCIgwsepB',
    user: u,
    options: f,
    loadingComponent: n.jsx(x, {}),
    children: e,
  });
}
class ErrorBoundary extends s.Component {
  constructor(e) {
    (super(e), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(e) {
    return { hasError: !0, error: e };
  }
  componentDidCatch(e, n) {}
  render() {
    return this.state.hasError
      ? this.props.fallback ||
          n.jsxs('div', {
            className:
              'flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 text-center',
            role: 'alert',
            'aria-live': 'assertive',
            children: [
              n.jsx('h2', {
                className: 'text-2xl font-semibold text-red-500 mb-2',
                children: 'Oops! Something went wrong.',
              }),
              n.jsx('p', {
                className: 'mb-4 max-w-md',
                children:
                  "An unexpected error occurred. We've logged the issue and are looking into it. Please try reloading the page.",
              }),
              n.jsx('button', {
                onClick: () => window.location.reload(),
                className:
                  'px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition-colors',
                children: 'Reload Page',
              }),
            ],
          })
      : this.props.children;
  }
}
const _ = '/assets/Adarsh-BDG0zI57.png',
  j = e.lazy(() =>
    t(() => import('./PillNav-v6nX9lP5.js'), __vite__mapDeps([0, 1]))
  );
function Navbar() {
  return n.jsx(r.nav, {
    role: 'navigation',
    'aria-label': 'Main',
    className:
      'absolute top-0 left-0 w-full p-4 z-50 flex justify-center items-center',
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
    children: n.jsx(j, {
      logo: _,
      logoTitle: 'Adarsh',
      logoHref: '/',
      logoAlt: 'Adarsh Logo',
      items: [
        { label: 'Home', href: '/' },
        { label: 'Sample', href: '/sample' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' },
        { label: 'About', href: '/about' },
      ],
      activeHref: '/',
      className: 'custom-nav',
      ease: 'power2.easeOut',
      baseColor: '#000000',
      pillColor: '#ffffff',
      hoveredPillTextColor: '#ffffff',
      pillTextColor: '#000000',
    }),
  });
}
const b = s.lazy(() =>
    t(() => import('./Footer-DUMjLTrW.js'), __vite__mapDeps([2, 1]))
  ),
  loadComponent = (e) =>
    s.lazy(() => e.catch((e) => ({ default: () => null }))),
  g = loadComponent(
    t(() => import('./Home-Cx-NcVMJ.js'), __vite__mapDeps([3, 1]))
  ),
  y = loadComponent(
    t(() => import('./About-DyoqdCUM.js'), __vite__mapDeps([4, 1]))
  ),
  E = loadComponent(
    t(() => import('./Contact-Cq9rFyY_.js'), __vite__mapDeps([5, 1]))
  ),
  v = loadComponent(
    t(() => import('./Sample-C7DSPNpY.js'), __vite__mapDeps([6, 1]))
  ),
  P = loadComponent(
    t(() => import('./Blog-POQwqxO_.js'), __vite__mapDeps([7, 1]))
  ),
  A = loadComponent(
    t(() => import('./NotFound-rFVOAUg3.js'), __vite__mapDeps([8, 1]))
  ),
  N = loadComponent(
    t(() => import('./AnalyticsTracker-ClaJEPg8.js'), __vite__mapDeps([9, 1]))
  ),
  L = loadComponent(
    t(() => import('./IpLogger--IaKthPj.js'), __vite__mapDeps([10, 1]))
  ),
  T = loadComponent(
    t(() => import('./ScrollToTopButton-B0B0b-0J.js'), __vite__mapDeps([11, 1]))
  ),
  I = loadComponent(
    t(() => import('./InternetStatus-BaESMW1a.js'), __vite__mapDeps([12, 1]))
  ),
  O = loadComponent(
    t(() => import('./CacheClean-l89zd33i.js'), __vite__mapDeps([13, 1]))
  ),
  R = loadComponent(
    t(() => import('./WebSocket-C3KGGm_M.js'), __vite__mapDeps([14, 1]))
  ),
  w = loadComponent(
    t(
      () => import('./LiquidCursor-BCADq3AF.js'),
      __vite__mapDeps([15, 1, 16])
    ).then((e) => ({ default: e.LiquidCursor }))
  ),
  k = loadComponent(
    t(() => import('./SplashCursor-I2nnIqlv.js'), __vite__mapDeps([17, 1]))
  ),
  D = loadComponent(
    t(
      () => import('./SmoothScrollProvider-CbNHGIgY.js'),
      __vite__mapDeps([18, 1])
    )
  ),
  S = loadComponent(
    t(() => import('./RobotFaceWrapper-BPk5eQUm.js'), __vite__mapDeps([19, 1]))
  ),
  C = loadComponent(
    t(() => import('./GradualBlur-dZcJ9Aht.js'), __vite__mapDeps([20, 1]))
  );
function App() {
  return n.jsx(StatsigSetup, {
    children: n.jsx(ErrorBoundary, {
      children: n.jsxs('div', {
        className: 'app-container',
        children: [
          n.jsx(C, {
            target: 'page',
            position: 'top',
            height: '1.5rem',
            strength: 1,
            divCount: 10,
            curve: 'bezier',
            exponential: !0,
            opacity: 1,
          }),
          n.jsx('header', { children: n.jsx(Navbar, {}) }),
          n.jsx(ErrorBoundary, {
            fallback: null,
            children: n.jsx(e.Suspense, {
              fallback: null,
              children: n.jsxs(s.Fragment, {
                children: [
                  n.jsx(N, {}),
                  n.jsx(L, {}),
                  n.jsx(R, {}),
                  n.jsx('div', {
                    className: 'hidden md:block',
                    children: n.jsx(w, { size: 20 }),
                  }),
                  n.jsx(k, {}),
                  n.jsx(D, {}),
                  n.jsx(S, {}),
                  n.jsxs('div', {
                    className: 'enhancement-components',
                    children: [n.jsx(I, {}), n.jsx(T, {}), n.jsx(O, {})],
                  }),
                ],
              }),
            }),
          }),
          n.jsx('main', {
            children: n.jsx(ErrorBoundary, {
              fallback: n.jsxs('div', {
                className: 'error-fallback',
                children: [
                  n.jsx('h2', { children: 'Unable to load content' }),
                  n.jsx('p', { children: 'Please try refreshing the page.' }),
                ],
              }),
              children: n.jsx(e.Suspense, {
                fallback: n.jsx(x, {}),
                children: n.jsx(o, {
                  children: [
                    { path: '/', element: n.jsx(g, {}) },
                    { path: '/sample', element: n.jsx(v, {}) },
                    { path: '/contact', element: n.jsx(E, {}) },
                    { path: '/about', element: n.jsx(y, {}) },
                    { path: '/blog', element: n.jsx(P, {}) },
                    { path: '*', element: n.jsx(A, {}) },
                  ].map(({ path: a, element: s }) =>
                    n.jsx(
                      i,
                      {
                        path: a,
                        element: n.jsx(ErrorBoundary, {
                          children: n.jsx(e.Suspense, {
                            fallback: n.jsx(x, {}),
                            children: s,
                          }),
                        }),
                      },
                      a
                    )
                  ),
                }),
              }),
            }),
          }),
          n.jsx('footer', { children: n.jsx(b, {}) }),
          n.jsx(C, {
            target: 'page',
            position: 'bottom',
            height: '1.5rem',
            strength: 1,
            divCount: 10,
            curve: 'bezier',
            exponential: !0,
            opacity: 1,
          }),
        ],
      }),
    }),
  });
}
const V = parseFloat('1.0');
const initGA = () => {
    d.initialize('G-X34L2QSKRG');
  },
  trackPage = (e) => {
    d.send({ hitType: 'pageview', page: e });
  },
  B = document.getElementById('root'),
  q = p.createRoot(B);
if (!s.Children) throw new Error('React initialization failed');
(l.init('o4jvc9/adadarsh23'),
  l.identify('8n7x7x4nxn63837x3n83nx838xn3n3863x836n48638', {
    name: 'Adarsh',
    email: 'adrajpu523@gmail.com',
  }),
  c({
    dsn: 'https://1b9b9b168e26f53aeb5a256e2da0e591@o4510039017390081.ingest.us.sentry.io/4510039018766336',
    tracesSampleRate: V,
  }),
  initGA(),
  q.render(
    n.jsx(s.StrictMode, { children: n.jsx(m, { children: n.jsx(App, {}) }) })
  ));
export {
  ErrorBoundary as E,
  x as L,
  h as a,
  initGA as i,
  _ as l,
  trackPage as t,
};
