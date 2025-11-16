const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/PillNav-ByrOCC8d.js',
      'assets/vendor-CLKqtzgM.js',
      'assets/Home-DvZ0iKcg.js',
      'assets/About-DQgcrjj6.js',
      'assets/bubble.module-BuxepTIR.js',
      'assets/bubble-C_vl8Ga6.css',
      'assets/Contact-7f9QxZE1.js',
      'assets/Sample-CfizvW7p.js',
      'assets/Blog-WkFDN6uV.js',
      'assets/NotFound-57DbUpCI.js',
      'assets/AnalyticsTracker-DzozmFLe.js',
      'assets/IpLogger-DLtlyMed.js',
      'assets/ScrollToTopButton-tbqPC26y.js',
      'assets/InternetStatus-NWtgnt5d.js',
      'assets/CacheClean-CbJ1EAiP.js',
      'assets/WebSocket-TIG6YOOE.js',
      'assets/LiquidCursor-CeduH2pW.js',
      'assets/utils-xZivFseN.js',
      'assets/SplashCursor-BWLcdjKe.js',
      'assets/SmoothScrollProvider-DWpafgfC.js',
      'assets/RobotFaceWrapper-RjHChjcB.js',
      'assets/GradualBlur-CnHNIQO0.js',
    ])
) => i.map((i) => d[i]);
import {
  r as e,
  j as n,
  s as t,
  R as r,
  _ as s,
  F as a,
  a as o,
  b as i,
  c as l,
  d as c,
  L as d,
  i as p,
  e as m,
  f as x,
  B as h,
} from './vendor-CLKqtzgM.js';
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
const f = e.memo(() =>
    n.jsxs('div', {
      className:
        'flex justify-center items-center h-screen w-screen bg-black text-white',
      children: [
        n.jsxs('div', {
          'aria-label': 'Loading...',
          role: 'status',
          className: 'flex flex-col items-center space-y-8',
          children: [
            n.jsxs('div', {
              className: 'relative w-10 h-10',
              children: [
                n.jsx('div', {
                  className:
                    'absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(255,255,255,0.8)]',
                }),
                n.jsx('div', {
                  className:
                    'absolute inset-0 border-4 border-gray-400 border-b-transparent rounded-full animate-spin-slow shadow-[0_0_20px_rgba(255,255,255,0.6)]',
                }),
                n.jsx('div', {
                  className:
                    'absolute inset-0 border-2 border-white border-l-transparent rounded-full animate-spin-fast shadow-[0_0_25px_rgba(255,255,255,0.4)]',
                }),
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
            '\n        @keyframes spin-slow {\n          0% {\n            transform: rotate(360deg);\n          }\n          100% {\n            transform: rotate(0deg);\n          }\n        }\n        @keyframes spin-fast {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }\n        .animate-spin-slow {\n          animation: spin-slow 3s linear infinite;\n        }\n        .animate-spin-fast {\n          animation: spin-fast 1.5s linear infinite;\n        }\n\n        @keyframes pulse-neon {\n          0%,\n          100% {\n            text-shadow:\n              0 0 5px #fff,\n              0 0 10px #fff,\n              0 0 20px #fff;\n            opacity: 0.8;\n          }\n          50% {\n            text-shadow:\n              0 0 10px #fff,\n              0 0 20px #fff,\n              0 0 30px #fff;\n            opacity: 1;\n          }\n        }\n        .animate-pulse-neon {\n          animation: pulse-neon 1.5s infinite;\n        }\n\n        @keyframes bounce-neon {\n          0%,\n          80%,\n          100% {\n            transform: scale(0);\n            opacity: 0.2;\n            text-shadow: 0 0 5px #fff;\n          }\n          40% {\n            transform: scale(1);\n            opacity: 1;\n            text-shadow:\n              0 0 10px #fff,\n              0 0 20px #fff;\n          }\n        }\n        .animate-bounce-neon {\n          animation: bounce-neon 1s infinite;\n        }\n        .delay-0 {\n          animation-delay: 0s;\n        }\n        .delay-200 {\n          animation-delay: 0.2s;\n        }\n        .delay-400 {\n          animation-delay: 0.4s;\n        }\n      ',
        }),
      ],
    })
  ),
  u = Object.freeze(
    Object.defineProperty({ __proto__: null, default: f }, Symbol.toStringTag, {
      value: 'Module',
    })
  ),
  j = {
    environment: { tier: 'production' },
    api: 'https://api.statsig.com/v1',
  },
  _ = { userID: 'default-user-id', environment: j.environment };
function StatsigSetup({ children: e }) {
  return n.jsx(t.StatsigProvider, {
    sdkKey: 'client-oQshE1GJ6D2QX2ZxbBfTP3IuxFXs7YXypBgCIgwsepB',
    user: _,
    options: j,
    loadingComponent: n.jsx(f, {}),
    children: e,
  });
}
class ErrorBoundary extends r.Component {
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
const b = '/assets/Adarsh-BDG0zI57.png',
  g = e.lazy(() =>
    s(() => import('./PillNav-ByrOCC8d.js'), __vite__mapDeps([0, 1]))
  );
function Navbar() {
  return n.jsx('nav', {
    role: 'navigation',
    'aria-label': 'Main',
    className:
      'absolute top-0 left-0 w-full p-4 z-50 flex justify-center items-center',
    children: n.jsx(g, {
      logo: b,
      logoTitle: 'Adarsh',
      logoHref: '/',
      logoAlt: 'Adarsh Logo',
      items: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Sample', href: '/sample' },
        { label: 'Blog', href: '/blog' },
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
function Footer() {
  return n.jsx('footer', {
    className: 'bg-black text-white py-8',
    children: n.jsxs('div', {
      className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ',
      children: [
        n.jsxs('div', {
          className:
            ' mt-10.5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0',
          children: [
            n.jsxs('span', {
              className: 'text-sm text-gray-300 text-center md:text-left',
              children: [
                '© 2025 - Built by',
                ' ',
                n.jsx('a', {
                  href: 'https://github.com/adadarsh23',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'text-white font-semibold hover:text-gray-400 transition-colors duration-300',
                  children: 'Ad Adarsh',
                }),
                '. All Rights Reserved.',
              ],
            }),
            n.jsxs('div', {
              className: 'flex space-x-4',
              children: [
                n.jsx('a', {
                  href: 'https://github.com/adadarsh23',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'text-white hover:text-gray-400 transition-colors duration-300',
                  'aria-label': 'Github',
                  children: n.jsx(a, { size: 20 }),
                }),
                n.jsx('a', {
                  href: 'https://linkedin.com/in/adadarsh23',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'text-white hover:text-gray-400 transition-colors duration-300',
                  'aria-label': 'Linkedin',
                  children: n.jsx(o, { size: 20 }),
                }),
                n.jsx('a', {
                  href: 'https://twitter.com/adadarsh23',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'text-white hover:text-gray-400 transition-colors duration-300',
                  'aria-label': 'Twitter',
                  children: n.jsx(i, { size: 20 }),
                }),
              ],
            }),
          ],
        }),
        n.jsx('hr', { className: 'my-6 border-gray-700' }),
        n.jsx('p', {
          className: 'text-xs text-gray-400 text-center',
          children: 'Designed with ❤️ by Ad Adarsh',
        }),
      ],
    }),
  });
}
const loadComponent = (e) =>
    r.lazy(() => e.catch((e) => ({ default: () => null }))),
  y = loadComponent(
    s(() => import('./Home-DvZ0iKcg.js'), __vite__mapDeps([2, 1]))
  ),
  v = loadComponent(
    s(() => import('./About-DQgcrjj6.js'), __vite__mapDeps([3, 1, 4, 5]))
  ),
  E = loadComponent(
    s(() => import('./Contact-7f9QxZE1.js'), __vite__mapDeps([6, 1, 4, 5]))
  ),
  w = loadComponent(
    s(() => import('./Sample-CfizvW7p.js'), __vite__mapDeps([7, 1, 4, 5]))
  ),
  N = loadComponent(
    s(() => import('./Blog-WkFDN6uV.js'), __vite__mapDeps([8, 1, 4, 5]))
  ),
  A = loadComponent(
    s(() => import('./NotFound-57DbUpCI.js'), __vite__mapDeps([9, 1]))
  ),
  k = loadComponent(
    s(() => import('./AnalyticsTracker-DzozmFLe.js'), __vite__mapDeps([10, 1]))
  ),
  L = loadComponent(
    s(() => import('./IpLogger-DLtlyMed.js'), __vite__mapDeps([11, 1]))
  ),
  P = loadComponent(
    s(() => import('./ScrollToTopButton-tbqPC26y.js'), __vite__mapDeps([12, 1]))
  ),
  T = loadComponent(
    s(() => import('./InternetStatus-NWtgnt5d.js'), __vite__mapDeps([13, 1]))
  ),
  R = loadComponent(
    s(() => import('./CacheClean-CbJ1EAiP.js'), __vite__mapDeps([14, 1]))
  ),
  I = loadComponent(
    s(() => import('./WebSocket-TIG6YOOE.js'), __vite__mapDeps([15, 1]))
  ),
  O = loadComponent(
    s(
      () => import('./LiquidCursor-CeduH2pW.js'),
      __vite__mapDeps([16, 1, 17])
    ).then((e) => ({ default: e.LiquidCursor }))
  ),
  S = loadComponent(
    s(() => import('./SplashCursor-BWLcdjKe.js'), __vite__mapDeps([18, 1]))
  ),
  D = loadComponent(
    s(
      () => import('./SmoothScrollProvider-DWpafgfC.js'),
      __vite__mapDeps([19, 1])
    )
  ),
  C = loadComponent(
    s(() => import('./RobotFaceWrapper-RjHChjcB.js'), __vite__mapDeps([20, 1]))
  ),
  V = loadComponent(
    s(() => import('./GradualBlur-CnHNIQO0.js'), __vite__mapDeps([21, 1]))
  );
function App() {
  return n.jsx(StatsigSetup, {
    children: n.jsx(ErrorBoundary, {
      children: n.jsxs('div', {
        className: 'app-container',
        children: [
          n.jsx(V, {
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
            children: n.jsxs(e.Suspense, {
              fallback: null,
              children: [
                n.jsx(k, {}),
                n.jsx(L, {}),
                n.jsx(I, {}),
                n.jsx('div', {
                  className: 'hidden md:block',
                  children: n.jsx(O, { size: 20 }),
                }),
                n.jsx(S, {}),
                n.jsx(D, {}),
                n.jsx(C, {}),
              ],
            }),
          }),
          n.jsx('main', {
            children: n.jsx(ErrorBoundary, {
              fallback: n.jsxs('div', {
                className: 'error-fallback',
                children: [
                  n.jsx('h2', { children: 'Unable to load content' }),
                  n.jsx('button', {
                    onClick: () => window.location.reload(),
                    children: 'Try Again',
                  }),
                ],
              }),
              children: n.jsx(e.Suspense, {
                fallback: n.jsx(f, {}),
                children: n.jsx(l, {
                  children: [
                    { path: '/', element: n.jsx(y, {}) },
                    { path: '/about', element: n.jsx(v, {}) },
                    { path: '/contact', element: n.jsx(E, {}) },
                    { path: '/sample', element: n.jsx(w, {}) },
                    { path: '/blog', element: n.jsx(N, {}) },
                    { path: '*', element: n.jsx(A, {}) },
                  ].map(({ path: t, element: r }) =>
                    n.jsx(
                      c,
                      {
                        path: t,
                        element: n.jsx(ErrorBoundary, {
                          children: n.jsx(e.Suspense, {
                            fallback: n.jsx(f, {}),
                            children: r,
                          }),
                        }),
                      },
                      t
                    )
                  ),
                }),
              }),
            }),
          }),
          n.jsx(ErrorBoundary, {
            fallback: null,
            children: n.jsx(e.Suspense, {
              fallback: null,
              children: n.jsxs('div', {
                className: 'enhancement-components',
                children: [n.jsx(T, {}), n.jsx(P, {}), n.jsx(R, {})],
              }),
            }),
          }),
          n.jsx('footer', { children: n.jsx(Footer, {}) }),
          n.jsx(V, {
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
const B = parseFloat('1.0');
const initGA = () => {
    m.initialize('G-X34L2QSKRG');
  },
  trackPage = (e) => {
    m.send({ hitType: 'pageview', page: e });
  },
  z = document.getElementById('root'),
  F = x.createRoot(z);
if (!r.Children) throw new Error('React initialization failed');
(d.init('o4jvc9/adadarsh23'),
  d.identify('8n7x7x4nxn63837x3n83nx838xn3n3863x836n48638', {
    name: 'Adarsh',
    email: 'adrajpu523@gmail.com',
  }),
  p({
    dsn: 'https://1b9b9b168e26f53aeb5a256e2da0e591@o4510039017390081.ingest.us.sentry.io/4510039018766336',
    tracesSampleRate: B,
  }),
  initGA(),
  F.render(
    n.jsx(r.StrictMode, { children: n.jsx(h, { children: n.jsx(App, {}) }) })
  ));
export { f as L, u as a, initGA as i, b as l, trackPage as t };
