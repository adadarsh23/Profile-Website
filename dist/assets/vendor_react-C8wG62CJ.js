import {
  g as zo,
  r as Ct,
  a as Do,
  b as U0,
  c as H0,
  s as B0,
  i as L0,
  d as q0,
  e as V0,
  x as G0,
  f as Y0,
  W as Q0,
  R as Id,
  O as w0,
  P as K0,
  S as $d,
  h as Pr,
  V as Z0,
  j as X0,
  B as P0,
  L as J0,
  k as kd,
  N as W0,
  A as F0,
  l as e1,
  m as Vf,
  C as I0,
  n as $0,
  U as k0,
  o as t1,
  p as Cl,
  q as ev,
  t as tv,
  u as Gf,
  v as nv,
  T as av,
  w as lv,
  E as uv,
  y as iv,
  z as rv,
  D as ov,
  H as cv,
  G as sv,
  _ as fv,
  F as dv,
  I as pv,
  J as mv,
  K as bn,
  M as Cn,
  Q as n1,
  X as vv,
  Y as hv,
} from './vendor-Grk_15WJ.js';
import { r as yv, R as gv } from './vendor_react-dom-DKAsGG5-.js';
function Ev(n, l) {
  for (var i = 0; i < l.length; i++) {
    const c = l[i];
    if (typeof c != 'string' && !Array.isArray(c)) {
      for (const o in c)
        if (o !== 'default' && !(o in n)) {
          const s = Object.getOwnPropertyDescriptor(c, o);
          s &&
            Object.defineProperty(
              n,
              o,
              s.get ? s : { enumerable: !0, get: () => c[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' })
  );
}
var Jr = { exports: {} },
  dl = {};
var Yf;
function Sv() {
  if (Yf) return dl;
  Yf = 1;
  var n = Symbol.for('react.transitional.element'),
    l = Symbol.for('react.fragment');
  function i(c, o, s) {
    var p = null;
    if (
      (s !== void 0 && (p = '' + s),
      o.key !== void 0 && (p = '' + o.key),
      'key' in o)
    ) {
      s = {};
      for (var d in o) d !== 'key' && (s[d] = o[d]);
    } else s = o;
    return (
      (o = s.ref),
      { $$typeof: n, type: c, key: p, ref: o !== void 0 ? o : null, props: s }
    );
  }
  return ((dl.Fragment = l), (dl.jsx = i), (dl.jsxs = i), dl);
}
var Qf;
function a1() {
  return (Qf || ((Qf = 1), (Jr.exports = Sv())), Jr.exports);
}
var k = a1(),
  Wr = { exports: {} },
  ie = {};
var wf;
function Cv() {
  if (wf) return ie;
  wf = 1;
  var n = Symbol.for('react.transitional.element'),
    l = Symbol.for('react.portal'),
    i = Symbol.for('react.fragment'),
    c = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    s = Symbol.for('react.consumer'),
    p = Symbol.for('react.context'),
    d = Symbol.for('react.forward_ref'),
    m = Symbol.for('react.suspense'),
    h = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    E = Symbol.for('react.activity'),
    T = Symbol.iterator;
  function R(S) {
    return S === null || typeof S != 'object'
      ? null
      : ((S = (T && S[T]) || S['@@iterator']),
        typeof S == 'function' ? S : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    A = Object.assign,
    x = {};
  function _(S, U, J) {
    ((this.props = S),
      (this.context = U),
      (this.refs = x),
      (this.updater = J || j));
  }
  ((_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (S, U) {
      if (typeof S != 'object' && typeof S != 'function' && S != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, S, U, 'setState');
    }),
    (_.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, 'forceUpdate');
    }));
  function b() {}
  b.prototype = _.prototype;
  function B(S, U, J) {
    ((this.props = S),
      (this.context = U),
      (this.refs = x),
      (this.updater = J || j));
  }
  var G = (B.prototype = new b());
  ((G.constructor = B), A(G, _.prototype), (G.isPureReactComponent = !0));
  var Q = Array.isArray;
  function W() {}
  var w = { H: null, A: null, T: null, S: null },
    te = Object.prototype.hasOwnProperty;
  function F(S, U, J) {
    var Z = J.ref;
    return {
      $$typeof: n,
      type: S,
      key: U,
      ref: Z !== void 0 ? Z : null,
      props: J,
    };
  }
  function ne(S, U) {
    return F(S.type, U, S.props);
  }
  function fe(S) {
    return typeof S == 'object' && S !== null && S.$$typeof === n;
  }
  function $e(S) {
    var U = { '=': '=0', ':': '=2' };
    return (
      '$' +
      S.replace(/[=:]/g, function (J) {
        return U[J];
      })
    );
  }
  var re = /\/+/g;
  function q(S, U) {
    return typeof S == 'object' && S !== null && S.key != null
      ? $e('' + S.key)
      : U.toString(36);
  }
  function z(S) {
    switch (S.status) {
      case 'fulfilled':
        return S.value;
      case 'rejected':
        throw S.reason;
      default:
        switch (
          (typeof S.status == 'string'
            ? S.then(W, W)
            : ((S.status = 'pending'),
              S.then(
                function (U) {
                  S.status === 'pending' &&
                    ((S.status = 'fulfilled'), (S.value = U));
                },
                function (U) {
                  S.status === 'pending' &&
                    ((S.status = 'rejected'), (S.reason = U));
                }
              )),
          S.status)
        ) {
          case 'fulfilled':
            return S.value;
          case 'rejected':
            throw S.reason;
        }
    }
    throw S;
  }
  function V(S, U, J, Z, le) {
    var de = typeof S;
    (de === 'undefined' || de === 'boolean') && (S = null);
    var ve = !1;
    if (S === null) ve = !0;
    else
      switch (de) {
        case 'bigint':
        case 'string':
        case 'number':
          ve = !0;
          break;
        case 'object':
          switch (S.$$typeof) {
            case n:
            case l:
              ve = !0;
              break;
            case g:
              return ((ve = S._init), V(ve(S._payload), U, J, Z, le));
          }
      }
    if (ve)
      return (
        (le = le(S)),
        (ve = Z === '' ? '.' + q(S, 0) : Z),
        Q(le)
          ? ((J = ''),
            ve != null && (J = ve.replace(re, '$&/') + '/'),
            V(le, U, J, '', function (jl) {
              return jl;
            }))
          : le != null &&
            (fe(le) &&
              (le = ne(
                le,
                J +
                  (le.key == null || (S && S.key === le.key)
                    ? ''
                    : ('' + le.key).replace(re, '$&/') + '/') +
                  ve
              )),
            U.push(le)),
        1
      );
    ve = 0;
    var xe = Z === '' ? '.' : Z + ':';
    if (Q(S))
      for (var Qe = 0; Qe < S.length; Qe++)
        ((Z = S[Qe]), (de = xe + q(Z, Qe)), (ve += V(Z, U, J, de, le)));
    else if (((Qe = R(S)), typeof Qe == 'function'))
      for (S = Qe.call(S), Qe = 0; !(Z = S.next()).done; )
        ((Z = Z.value), (de = xe + q(Z, Qe++)), (ve += V(Z, U, J, de, le)));
    else if (de === 'object') {
      if (typeof S.then == 'function') return V(z(S), U, J, Z, le);
      throw (
        (U = String(S)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (U === '[object Object]'
              ? 'object with keys {' + Object.keys(S).join(', ') + '}'
              : U) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return ve;
  }
  function L(S, U, J) {
    if (S == null) return S;
    var Z = [],
      le = 0;
    return (
      V(S, Z, '', '', function (de) {
        return U.call(J, de, le++);
      }),
      Z
    );
  }
  function X(S) {
    if (S._status === -1) {
      var U = S._result;
      ((U = U()),
        U.then(
          function (J) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = J));
          },
          function (J) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = J));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = U)));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var P =
      typeof reportError == 'function'
        ? reportError
        : function (S) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var U = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof S == 'object' &&
                  S !== null &&
                  typeof S.message == 'string'
                    ? String(S.message)
                    : String(S),
                error: S,
              });
              if (!window.dispatchEvent(U)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', S);
              return;
            }
            console.error(S);
          },
    ce = {
      map: L,
      forEach: function (S, U, J) {
        L(
          S,
          function () {
            U.apply(this, arguments);
          },
          J
        );
      },
      count: function (S) {
        var U = 0;
        return (
          L(S, function () {
            U++;
          }),
          U
        );
      },
      toArray: function (S) {
        return (
          L(S, function (U) {
            return U;
          }) || []
        );
      },
      only: function (S) {
        if (!fe(S))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return S;
      },
    };
  return (
    (ie.Activity = E),
    (ie.Children = ce),
    (ie.Component = _),
    (ie.Fragment = i),
    (ie.Profiler = o),
    (ie.PureComponent = B),
    (ie.StrictMode = c),
    (ie.Suspense = m),
    (ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (ie.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return w.H.useMemoCache(S);
      },
    }),
    (ie.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (ie.cacheSignal = function () {
      return null;
    }),
    (ie.cloneElement = function (S, U, J) {
      if (S == null)
        throw Error(
          'The argument must be a React element, but you passed ' + S + '.'
        );
      var Z = A({}, S.props),
        le = S.key;
      if (U != null)
        for (de in (U.key !== void 0 && (le = '' + U.key), U))
          !te.call(U, de) ||
            de === 'key' ||
            de === '__self' ||
            de === '__source' ||
            (de === 'ref' && U.ref === void 0) ||
            (Z[de] = U[de]);
      var de = arguments.length - 2;
      if (de === 1) Z.children = J;
      else if (1 < de) {
        for (var ve = Array(de), xe = 0; xe < de; xe++)
          ve[xe] = arguments[xe + 2];
        Z.children = ve;
      }
      return F(S.type, le, Z);
    }),
    (ie.createContext = function (S) {
      return (
        (S = {
          $$typeof: p,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: s, _context: S }),
        S
      );
    }),
    (ie.createElement = function (S, U, J) {
      var Z,
        le = {},
        de = null;
      if (U != null)
        for (Z in (U.key !== void 0 && (de = '' + U.key), U))
          te.call(U, Z) &&
            Z !== 'key' &&
            Z !== '__self' &&
            Z !== '__source' &&
            (le[Z] = U[Z]);
      var ve = arguments.length - 2;
      if (ve === 1) le.children = J;
      else if (1 < ve) {
        for (var xe = Array(ve), Qe = 0; Qe < ve; Qe++)
          xe[Qe] = arguments[Qe + 2];
        le.children = xe;
      }
      if (S && S.defaultProps)
        for (Z in ((ve = S.defaultProps), ve))
          le[Z] === void 0 && (le[Z] = ve[Z]);
      return F(S, de, le);
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (S) {
      return { $$typeof: d, render: S };
    }),
    (ie.isValidElement = fe),
    (ie.lazy = function (S) {
      return { $$typeof: g, _payload: { _status: -1, _result: S }, _init: X };
    }),
    (ie.memo = function (S, U) {
      return { $$typeof: h, type: S, compare: U === void 0 ? null : U };
    }),
    (ie.startTransition = function (S) {
      var U = w.T,
        J = {};
      w.T = J;
      try {
        var Z = S(),
          le = w.S;
        (le !== null && le(J, Z),
          typeof Z == 'object' &&
            Z !== null &&
            typeof Z.then == 'function' &&
            Z.then(W, P));
      } catch (de) {
        P(de);
      } finally {
        (U !== null && J.types !== null && (U.types = J.types), (w.T = U));
      }
    }),
    (ie.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (ie.use = function (S) {
      return w.H.use(S);
    }),
    (ie.useActionState = function (S, U, J) {
      return w.H.useActionState(S, U, J);
    }),
    (ie.useCallback = function (S, U) {
      return w.H.useCallback(S, U);
    }),
    (ie.useContext = function (S) {
      return w.H.useContext(S);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (S, U) {
      return w.H.useDeferredValue(S, U);
    }),
    (ie.useEffect = function (S, U) {
      return w.H.useEffect(S, U);
    }),
    (ie.useEffectEvent = function (S) {
      return w.H.useEffectEvent(S);
    }),
    (ie.useId = function () {
      return w.H.useId();
    }),
    (ie.useImperativeHandle = function (S, U, J) {
      return w.H.useImperativeHandle(S, U, J);
    }),
    (ie.useInsertionEffect = function (S, U) {
      return w.H.useInsertionEffect(S, U);
    }),
    (ie.useLayoutEffect = function (S, U) {
      return w.H.useLayoutEffect(S, U);
    }),
    (ie.useMemo = function (S, U) {
      return w.H.useMemo(S, U);
    }),
    (ie.useOptimistic = function (S, U) {
      return w.H.useOptimistic(S, U);
    }),
    (ie.useReducer = function (S, U, J) {
      return w.H.useReducer(S, U, J);
    }),
    (ie.useRef = function (S) {
      return w.H.useRef(S);
    }),
    (ie.useState = function (S) {
      return w.H.useState(S);
    }),
    (ie.useSyncExternalStore = function (S, U, J) {
      return w.H.useSyncExternalStore(S, U, J);
    }),
    (ie.useTransition = function () {
      return w.H.useTransition();
    }),
    (ie.version = '19.2.0'),
    ie
  );
}
var Kf;
function nt() {
  return (Kf || ((Kf = 1), (Wr.exports = Cv())), Wr.exports);
}
var v = nt();
const _n = zo(v),
  xo = Ev({ __proto__: null, default: _n }, [v]),
  bv = 'modulepreload',
  _v = function (n) {
    return '/' + n;
  },
  Zf = {},
  Qg = function (l, i, c) {
    let o = Promise.resolve();
    if (i && i.length > 0) {
      let m = function (h) {
        return Promise.all(
          h.map((g) =>
            Promise.resolve(g).then(
              (E) => ({ status: 'fulfilled', value: E }),
              (E) => ({ status: 'rejected', reason: E })
            )
          )
        );
      };
      document.getElementsByTagName('link');
      const p = document.querySelector('meta[property=csp-nonce]'),
        d = p?.nonce || p?.getAttribute('nonce');
      o = m(
        i.map((h) => {
          if (((h = _v(h)), h in Zf)) return;
          Zf[h] = !0;
          const g = h.endsWith('.css'),
            E = g ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${h}"]${E}`)) return;
          const T = document.createElement('link');
          if (
            ((T.rel = g ? 'stylesheet' : bv),
            g || (T.as = 'script'),
            (T.crossOrigin = ''),
            (T.href = h),
            d && T.setAttribute('nonce', d),
            document.head.appendChild(T),
            g)
          )
            return new Promise((R, j) => {
              (T.addEventListener('load', R),
                T.addEventListener('error', () =>
                  j(new Error(`Unable to preload CSS for ${h}`))
                ));
            });
        })
      );
    }
    function s(p) {
      const d = new Event('vite:preloadError', { cancelable: !0 });
      if (((d.payload = p), window.dispatchEvent(d), !d.defaultPrevented))
        throw p;
    }
    return o.then((p) => {
      for (const d of p || []) d.status === 'rejected' && s(d.reason);
      return l().catch(s);
    });
  };
var wn = {},
  Ou = {},
  Kn = {},
  Xf;
function Rn() {
  if (Xf) return Kn;
  ((Xf = 1),
    Object.defineProperty(Kn, '__esModule', { value: !0 }),
    (Kn.isNoopClient = Kn.NoopEvaluationsClient = void 0));
  const n = Ct(),
    l = {
      success: !1,
      error: Error('NoClient'),
      duration: 0,
      source: 'Uninitialized',
      sourceUrl: null,
    },
    i = () => {},
    c = () => l,
    o = () => Promise.resolve(),
    s = () => Promise.resolve(l),
    p = { reason: 'Error:NoClient' },
    d =
      (T) =>
      (...R) => {
        const j = typeof R[0] == 'string' ? R[0] : R[1];
        switch (T) {
          case 'gate':
            return (0, n._makeFeatureGate)(j, p, null);
          case 'config':
            return (0, n._makeDynamicConfig)(j, p, null);
          case 'layer':
            return (0, n._makeLayer)(j, p, null);
          case 'param_store':
            return { name: j };
        }
      },
    m = {
      attach: i,
      getDataSync: () => null,
      getDataAsync: () => Promise.resolve(null),
      setData: i,
      setDataLegacy: i,
      prefetchData: o,
    },
    h = {
      sdkKey: '',
      options: {},
      values: null,
      user: { userID: '' },
      errorBoundary: {},
      session: {
        data: { sessionID: '', startTime: 0, lastUpdate: 0 },
        sdkKey: '',
      },
      stableID: '',
      storageProvider: n.Storage,
      sdkInstanceID: '',
    },
    g = {
      isNoop: !0,
      loadingStatus: 'Uninitialized',
      initializeSync: c,
      initializeAsync: s,
      shutdown: o,
      flush: o,
      updateRuntimeOptions: i,
      updateUserSync: c,
      updateUserAsync: s,
      getContext: () => Object.assign({}, h),
      checkGate: () => !1,
      getFeatureGate: d('gate'),
      getDynamicConfig: d('config'),
      getExperiment: d('config'),
      getLayer: d('layer'),
      getParameterStore: d('param_store'),
      logEvent: i,
      on: i,
      off: i,
      $on: i,
      $emt: i,
      dataAdapter: m,
    };
  Kn.NoopEvaluationsClient = g;
  function E(T) {
    return 'isNoop' in T;
  }
  return ((Kn.isNoopClient = E), Kn);
}
var Pf;
function Ut() {
  if (Pf) return Ou;
  ((Pf = 1), Object.defineProperty(Ou, '__esModule', { value: !0 }));
  const n = nt(),
    l = Rn();
  return (
    (Ou.default = (0, n.createContext)({
      renderVersion: 0,
      client: l.NoopEvaluationsClient,
      isLoading: !0,
    })),
    Ou
  );
}
var pl = {},
  ml = {},
  vl = {},
  Jf;
function l1() {
  if (Jf) return vl;
  ((Jf = 1),
    Object.defineProperty(vl, '__esModule', { value: !0 }),
    (vl.useStatsigInternalClientFactoryAsync = void 0));
  const n = nt(),
    l = Ct();
  function i(c, o) {
    const s = (0, n.useMemo)(() => {
        var m;
        return (m = (0, l._getInstance)(o.sdkKey)) !== null && m !== void 0
          ? m
          : c(o);
      }, []),
      [p, d] = (0, n.useState)(s.loadingStatus !== 'Ready');
    return (
      (0, n.useMemo)(() => {
        s.loadingStatus !== 'Ready' &&
          s
            .initializeAsync()
            .catch(l.Log.error)
            .finally(() => d(!1));
      }, []),
      { client: s, isLoading: p }
    );
  }
  return ((vl.useStatsigInternalClientFactoryAsync = i), vl);
}
var Wf;
function u1() {
  if (Wf) return ml;
  ((Wf = 1),
    Object.defineProperty(ml, '__esModule', { value: !0 }),
    (ml.useClientAsyncInit = void 0));
  const n = Do(),
    l = l1();
  function i(c, o, s = null) {
    return (0, l.useStatsigInternalClientFactoryAsync)(
      (p) => new n.StatsigClient(p.sdkKey, p.initialUser, p.statsigOptions),
      { sdkKey: c, initialUser: o, statsigOptions: s }
    );
  }
  return ((ml.useClientAsyncInit = i), ml);
}
var Ff;
function Rv() {
  if (Ff) return pl;
  ((Ff = 1),
    Object.defineProperty(pl, '__esModule', { value: !0 }),
    (pl.StatsigProvider = void 0));
  const n = a1(),
    l = nt(),
    i = Ct(),
    c = Ut(),
    o = u1();
  function s(g) {
    return 'client' in g
      ? (('sdkKey' in g || 'user' in g) &&
          i.Log.warn(
            'Both client and configuration props (sdkKey, user) were provided to StatsigProvider. The client prop will be used and the configuration props will be ignored.'
          ),
        (0, n.jsx)(d, Object.assign({}, g)))
      : (0, n.jsx)(p, Object.assign({}, g));
  }
  pl.StatsigProvider = s;
  function p(g) {
    const [E, T] = (0, l.useState)(0),
      R = (0, o.useClientAsyncInit)(g.sdkKey, g.user, g.options).client,
      [j, A] = (0, l.useState)(!h(R));
    m(R, T, A);
    const x = (0, l.useMemo)(
      () => ({ renderVersion: E, client: R, isLoading: j }),
      [E, R, j]
    );
    return (0, n.jsx)(c.default.Provider, {
      value: x,
      children:
        g.loadingComponent == null || !x.isLoading
          ? g.children
          : g.loadingComponent,
    });
  }
  function d(g) {
    const [E, T] = (0, l.useState)(0),
      R = g.client,
      [j, A] = (0, l.useState)(!h(R));
    m(R, T, A);
    const x = (0, l.useMemo)(
      () => ({ renderVersion: E, client: R, isLoading: j }),
      [E, R, j]
    );
    return (0, n.jsx)(c.default.Provider, {
      value: x,
      children:
        g.loadingComponent == null || !x.isLoading
          ? g.children
          : g.loadingComponent,
    });
  }
  function m(g, E, T) {
    (0, l.useEffect)(() => {
      const R = () => {
        (E((j) => j + 1), T(!h(g)));
      };
      return (
        i.SDKType._setBindingType('react'),
        g.$on('values_updated', R),
        () => {
          (g
            .flush()
            .catch((j) => i.Log.error('An error occurred during flush', j)),
            g.off('values_updated', R));
        }
      );
    }, [g, E]);
  }
  function h(g) {
    if ('isNoop' in g) return !0;
    switch (g.loadingStatus) {
      case 'Ready':
        return !0;
      default:
        return !1;
    }
  }
  return pl;
}
var hl = {},
  yl = {},
  If;
function i1() {
  if (If) return yl;
  ((If = 1),
    Object.defineProperty(yl, '__esModule', { value: !0 }),
    (yl.useStatsigInternalClientFactoryBootstrap = void 0));
  const n = nt(),
    l = Ct();
  function i(c, o) {
    const s = (0, n.useRef)((0, l._getInstance)(o.sdkKey));
    return (0, n.useMemo)(() => {
      if (s.current) return s.current;
      const p = c(o);
      return (
        (s.current = p),
        o.useLegacyFormat
          ? p.dataAdapter.setDataLegacy(o.initialValues, o.initialUser)
          : p.dataAdapter.setData(o.initialValues),
        p.initializeSync(),
        p
      );
    }, []);
  }
  return ((yl.useStatsigInternalClientFactoryBootstrap = i), yl);
}
var $f;
function Ov() {
  if ($f) return hl;
  (($f = 1),
    Object.defineProperty(hl, '__esModule', { value: !0 }),
    (hl.useClientBootstrapInit = void 0));
  const n = Do(),
    l = i1();
  function i(c, o, s, p = null, d) {
    return (0, l.useStatsigInternalClientFactoryBootstrap)(
      (m) => new n.StatsigClient(m.sdkKey, m.initialUser, m.statsigOptions),
      {
        sdkKey: c,
        initialUser: o,
        initialValues: s,
        statsigOptions: p,
        useLegacyFormat: d,
      }
    );
  }
  return ((hl.useClientBootstrapInit = i), hl);
}
var Tu = {},
  kf;
function Tv() {
  if (kf) return Tu;
  ((kf = 1), Object.defineProperty(Tu, '__esModule', { value: !0 }));
  const n = nt(),
    l = Ct(),
    i = Rn(),
    c = Ut();
  function o(s, p) {
    const { client: d, renderVersion: m } = (0, n.useContext)(c.default);
    return (0, n.useMemo)(
      () =>
        (0, i.isNoopClient)(d)
          ? (l.Log.warn(
              `useDynamicConfig hook failed to find a valid StatsigClient for dynamic config '${s}'.`
            ),
            i.NoopEvaluationsClient.getDynamicConfig(s, p))
          : d.getDynamicConfig(s, p),
      [s, d, m, ...(p ? Object.values(p) : [])]
    );
  }
  return ((Tu.default = o), Tu);
}
var Nu = {},
  ed;
function Nv() {
  if (ed) return Nu;
  ((ed = 1), Object.defineProperty(Nu, '__esModule', { value: !0 }));
  const n = nt(),
    l = Ct(),
    i = Rn(),
    c = Ut();
  function o(s, p) {
    const { client: d, renderVersion: m } = (0, n.useContext)(c.default);
    return (0, n.useMemo)(
      () =>
        (0, i.isNoopClient)(d)
          ? (l.Log.warn(
              `useExperiment hook failed to find a valid Statsig client for experiment '${s}'.`
            ),
            i.NoopEvaluationsClient.getExperiment(s, p))
          : d.getExperiment(s, p),
      [s, d, m, ...(p ? Object.values(p) : [])]
    );
  }
  return ((Nu.default = o), Nu);
}
var Au = {},
  td;
function Av() {
  if (td) return Au;
  ((td = 1), Object.defineProperty(Au, '__esModule', { value: !0 }));
  const n = nt(),
    l = Ct(),
    i = Rn(),
    c = Ut();
  function o(s, p) {
    const { client: d, renderVersion: m } = (0, n.useContext)(c.default);
    return (0, n.useMemo)(
      () =>
        (0, i.isNoopClient)(d)
          ? (l.Log.warn(
              `useFeatureGate hook failed to find a valid StatsigClient for gate '${s}'.`
            ),
            i.NoopEvaluationsClient.getFeatureGate(s, p))
          : d.getFeatureGate(s, p),
      [s, d, m, ...(p ? Object.values(p) : [])]
    );
  }
  return ((Au.default = o), Au);
}
var Mu = {},
  nd;
function Mv() {
  if (nd) return Mu;
  ((nd = 1), Object.defineProperty(Mu, '__esModule', { value: !0 }));
  const n = nt(),
    l = Ct(),
    i = Rn(),
    c = Ut();
  function o(s, p) {
    const { client: d, renderVersion: m } = (0, n.useContext)(c.default);
    return (0, n.useMemo)(
      () =>
        (0, i.isNoopClient)(d)
          ? (l.Log.warn(
              `useGateValue hook failed to find a valid StatsigClient for gate '${s}'.`
            ),
            i.NoopEvaluationsClient.checkGate(s, p))
          : d.checkGate(s, p),
      [s, d, m, ...(p ? Object.values(p) : [])]
    );
  }
  return ((Mu.default = o), Mu);
}
var zu = {},
  ad;
function zv() {
  if (ad) return zu;
  ((ad = 1), Object.defineProperty(zu, '__esModule', { value: !0 }));
  const n = nt(),
    l = Ct(),
    i = Rn(),
    c = Ut();
  function o(s, p) {
    const { client: d, renderVersion: m } = (0, n.useContext)(c.default);
    return (0, n.useMemo)(
      () =>
        (0, i.isNoopClient)(d)
          ? (l.Log.warn(
              `useLayer hook failed to find a valid Statsig client for layer '${s}'.`
            ),
            i.NoopEvaluationsClient.getLayer(s, p))
          : d.getLayer(s, p),
      [s, d, m, ...(p ? Object.values(p) : [])]
    );
  }
  return ((zu.default = o), zu);
}
var Du = {},
  ld;
function Dv() {
  if (ld) return Du;
  ((ld = 1), Object.defineProperty(Du, '__esModule', { value: !0 }));
  const n = nt(),
    l = Ct(),
    i = Rn(),
    c = Ut();
  function o(s, p) {
    const { client: d, renderVersion: m } = (0, n.useContext)(c.default);
    return (0, n.useMemo)(
      () =>
        (0, i.isNoopClient)(d)
          ? (l.Log.warn(
              `useParameterStore hook failed to find a valid StatsigClient for parameter store '${s}'.`
            ),
            i.NoopEvaluationsClient.getParameterStore(s, p))
          : d.getParameterStore(s, p),
      [s, d, m, ...(p ? Object.values(p) : [])]
    );
  }
  return ((Du.default = o), Du);
}
var gl = {},
  ud;
function r1() {
  if (ud) return gl;
  ((ud = 1),
    Object.defineProperty(gl, '__esModule', { value: !0 }),
    (gl.useStatsigClient = void 0));
  const n = nt(),
    l = Ct(),
    i = Rn(),
    c = Ut();
  function o() {
    const {
        client: s,
        renderVersion: p,
        isLoading: d,
      } = (0, n.useContext)(c.default),
      m = (0, n.useMemo)(
        () =>
          (0, i.isNoopClient)(s)
            ? (l.Log.warn(
                'Attempting to retrieve a StatsigClient but none was set.'
              ),
              i.NoopEvaluationsClient)
            : s,
        [s, p]
      ),
      h = [m, p],
      g = (0, n.useCallback)((_, b) => m.checkGate(_, b), h),
      E = (0, n.useCallback)((_, b) => m.getFeatureGate(_, b), h),
      T = (0, n.useCallback)((_, b) => m.getDynamicConfig(_, b), h),
      R = (0, n.useCallback)((_, b) => m.getExperiment(_, b), h),
      j = (0, n.useCallback)((_, b) => m.getLayer(_, b), h),
      A = (0, n.useCallback)((_, b) => m.getParameterStore(_, b), h),
      x = (0, n.useCallback)(
        (_, b, B) =>
          typeof _ == 'string' ? m.logEvent(_, b, B) : m.logEvent(_),
        h
      );
    return (0, n.useMemo)(
      () => ({
        client: m,
        checkGate: g,
        getFeatureGate: E,
        getDynamicConfig: T,
        getExperiment: R,
        getLayer: j,
        getParameterStore: A,
        logEvent: x,
        isLoading: d,
      }),
      [m, g, E, T, R, j, A, x, d]
    );
  }
  return ((gl.useStatsigClient = o), gl);
}
var El = {},
  id;
function xv() {
  if (id) return El;
  ((id = 1),
    Object.defineProperty(El, '__esModule', { value: !0 }),
    (El.useStatsigUser = void 0));
  const n = nt(),
    l = Ut(),
    i = r1();
  function c(s) {
    return s.getContext().user;
  }
  function o() {
    const { client: s } = (0, i.useStatsigClient)(),
      { renderVersion: p } = (0, n.useContext)(l.default);
    return {
      user: (0, n.useMemo)(() => c(s), [s, p]),
      updateUserSync: (0, n.useCallback)(
        (m) => (typeof m == 'function' && (m = m(c(s))), s.updateUserSync(m)),
        [s]
      ),
      updateUserAsync: (0, n.useCallback)(
        (m) => (typeof m == 'function' && (m = m(c(s))), s.updateUserAsync(m)),
        [s]
      ),
    };
  }
  return ((El.useStatsigUser = o), El);
}
var rd;
function jv() {
  return (
    rd ||
      ((rd = 1),
      (function (n) {
        var l =
            (wn && wn.__createBinding) ||
            (Object.create
              ? function (b, B, G, Q) {
                  Q === void 0 && (Q = G);
                  var W = Object.getOwnPropertyDescriptor(B, G);
                  ((!W ||
                    ('get' in W
                      ? !B.__esModule
                      : W.writable || W.configurable)) &&
                    (W = {
                      enumerable: !0,
                      get: function () {
                        return B[G];
                      },
                    }),
                    Object.defineProperty(b, Q, W));
                }
              : function (b, B, G, Q) {
                  (Q === void 0 && (Q = G), (b[Q] = B[G]));
                }),
          i =
            (wn && wn.__exportStar) ||
            function (b, B) {
              for (var G in b)
                G !== 'default' &&
                  !Object.prototype.hasOwnProperty.call(B, G) &&
                  l(B, b, G);
            };
        (Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.useStatsigUser =
            n.useStatsigInternalClientFactoryBootstrap =
            n.useStatsigInternalClientFactoryAsync =
            n.useStatsigClient =
            n.useParameterStore =
            n.useLayer =
            n.useGateValue =
            n.useFeatureGate =
            n.useExperiment =
            n.useDynamicConfig =
            n.useClientBootstrapInit =
            n.useClientAsyncInit =
            n.StatsigProvider =
            n.StatsigContext =
              void 0));
        const c = Ct(),
          o = Ut();
        n.StatsigContext = o.default;
        const s = Rv();
        Object.defineProperty(n, 'StatsigProvider', {
          enumerable: !0,
          get: function () {
            return s.StatsigProvider;
          },
        });
        const p = u1();
        Object.defineProperty(n, 'useClientAsyncInit', {
          enumerable: !0,
          get: function () {
            return p.useClientAsyncInit;
          },
        });
        const d = Ov();
        Object.defineProperty(n, 'useClientBootstrapInit', {
          enumerable: !0,
          get: function () {
            return d.useClientBootstrapInit;
          },
        });
        const m = Tv();
        n.useDynamicConfig = m.default;
        const h = Nv();
        n.useExperiment = h.default;
        const g = Av();
        n.useFeatureGate = g.default;
        const E = Mv();
        n.useGateValue = E.default;
        const T = zv();
        n.useLayer = T.default;
        const R = Dv();
        n.useParameterStore = R.default;
        const j = r1();
        Object.defineProperty(n, 'useStatsigClient', {
          enumerable: !0,
          get: function () {
            return j.useStatsigClient;
          },
        });
        const A = l1();
        Object.defineProperty(n, 'useStatsigInternalClientFactoryAsync', {
          enumerable: !0,
          get: function () {
            return A.useStatsigInternalClientFactoryAsync;
          },
        });
        const x = i1();
        Object.defineProperty(n, 'useStatsigInternalClientFactoryBootstrap', {
          enumerable: !0,
          get: function () {
            return x.useStatsigInternalClientFactoryBootstrap;
          },
        });
        const _ = xv();
        (Object.defineProperty(n, 'useStatsigUser', {
          enumerable: !0,
          get: function () {
            return _.useStatsigUser;
          },
        }),
          i(Do(), n),
          Object.assign((0, c._getStatsigGlobal)(), {
            StatsigContext: o.default,
            StatsigProvider: s.StatsigProvider,
            useClientAsyncInit: p.useClientAsyncInit,
            useClientBootstrapInit: d.useClientBootstrapInit,
            useDynamicConfig: m.default,
            useExperiment: h.default,
            useFeatureGate: g.default,
            useGateValue: E.default,
            useLayer: T.default,
            useParameterStore: R.default,
            useStatsigClient: j.useStatsigClient,
            useStatsigInternalClientFactoryAsync:
              A.useStatsigInternalClientFactoryAsync,
            useStatsigInternalClientFactoryBootstrap:
              x.useStatsigInternalClientFactoryBootstrap,
            useStatsigUser: _.useStatsigUser,
          }));
      })(wn)),
    wn
  );
}
var wg = jv();
var od = 'popstate';
function Uv(n = {}) {
  function l(c, o) {
    let { pathname: s, search: p, hash: d } = c.location;
    return So(
      '',
      { pathname: s, search: p, hash: d },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function i(c, o) {
    return typeof o == 'string' ? o : _l(o);
  }
  return Bv(l, i, null, n);
}
function Ae(n, l) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(l);
}
function jt(n, l) {
  if (!n) {
    typeof console < 'u' && console.warn(l);
    try {
      throw new Error(l);
    } catch {}
  }
}
function Hv() {
  return Math.random().toString(36).substring(2, 10);
}
function cd(n, l) {
  return { usr: n.state, key: n.key, idx: l };
}
function So(n, l, i = null, c) {
  return {
    pathname: typeof n == 'string' ? n : n.pathname,
    search: '',
    hash: '',
    ...(typeof l == 'string' ? Da(l) : l),
    state: i,
    key: (l && l.key) || c || Hv(),
  };
}
function _l({ pathname: n = '/', search: l = '', hash: i = '' }) {
  return (
    l && l !== '?' && (n += l.charAt(0) === '?' ? l : '?' + l),
    i && i !== '#' && (n += i.charAt(0) === '#' ? i : '#' + i),
    n
  );
}
function Da(n) {
  let l = {};
  if (n) {
    let i = n.indexOf('#');
    i >= 0 && ((l.hash = n.substring(i)), (n = n.substring(0, i)));
    let c = n.indexOf('?');
    (c >= 0 && ((l.search = n.substring(c)), (n = n.substring(0, c))),
      n && (l.pathname = n));
  }
  return l;
}
function Bv(n, l, i, c = {}) {
  let { window: o = document.defaultView, v5Compat: s = !1 } = c,
    p = o.history,
    d = 'POP',
    m = null,
    h = g();
  h == null && ((h = 0), p.replaceState({ ...p.state, idx: h }, ''));
  function g() {
    return (p.state || { idx: null }).idx;
  }
  function E() {
    d = 'POP';
    let x = g(),
      _ = x == null ? null : x - h;
    ((h = x), m && m({ action: d, location: A.location, delta: _ }));
  }
  function T(x, _) {
    d = 'PUSH';
    let b = So(A.location, x, _);
    h = g() + 1;
    let B = cd(b, h),
      G = A.createHref(b);
    try {
      p.pushState(B, '', G);
    } catch (Q) {
      if (Q instanceof DOMException && Q.name === 'DataCloneError') throw Q;
      o.location.assign(G);
    }
    s && m && m({ action: d, location: A.location, delta: 1 });
  }
  function R(x, _) {
    d = 'REPLACE';
    let b = So(A.location, x, _);
    h = g();
    let B = cd(b, h),
      G = A.createHref(b);
    (p.replaceState(B, '', G),
      s && m && m({ action: d, location: A.location, delta: 0 }));
  }
  function j(x) {
    return Lv(x);
  }
  let A = {
    get action() {
      return d;
    },
    get location() {
      return n(o, p);
    },
    listen(x) {
      if (m) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(od, E),
        (m = x),
        () => {
          (o.removeEventListener(od, E), (m = null));
        }
      );
    },
    createHref(x) {
      return l(o, x);
    },
    createURL: j,
    encodeLocation(x) {
      let _ = j(x);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: T,
    replace: R,
    go(x) {
      return p.go(x);
    },
  };
  return A;
}
function Lv(n, l = !1) {
  let i = 'http://localhost';
  (typeof window < 'u' &&
    (i =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    Ae(i, 'No window.location.(origin|href) available to create URL'));
  let c = typeof n == 'string' ? n : _l(n);
  return (
    (c = c.replace(/ $/, '%20')),
    !l && c.startsWith('//') && (c = i + c),
    new URL(c, i)
  );
}
function o1(n, l, i = '/') {
  return qv(n, l, i, !1);
}
function qv(n, l, i, c) {
  let o = typeof l == 'string' ? Da(l) : l,
    s = It(o.pathname || '/', i);
  if (s == null) return null;
  let p = c1(n);
  Vv(p);
  let d = null;
  for (let m = 0; d == null && m < p.length; ++m) {
    let h = Fv(s);
    d = Jv(p[m], h, c);
  }
  return d;
}
function c1(n, l = [], i = [], c = '', o = !1) {
  let s = (p, d, m = o, h) => {
    let g = {
      relativePath: h === void 0 ? p.path || '' : h,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: d,
      route: p,
    };
    if (g.relativePath.startsWith('/')) {
      if (!g.relativePath.startsWith(c) && m) return;
      (Ae(
        g.relativePath.startsWith(c),
        `Absolute route path "${g.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (g.relativePath = g.relativePath.slice(c.length)));
    }
    let E = Ft([c, g.relativePath]),
      T = i.concat(g);
    (p.children &&
      p.children.length > 0 &&
      (Ae(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${E}".`
      ),
      c1(p.children, l, T, E, m)),
      !(p.path == null && !p.index) &&
        l.push({ path: E, score: Xv(E, p.index), routesMeta: T }));
  };
  return (
    n.forEach((p, d) => {
      if (p.path === '' || !p.path?.includes('?')) s(p, d);
      else for (let m of s1(p.path)) s(p, d, !0, m);
    }),
    l
  );
}
function s1(n) {
  let l = n.split('/');
  if (l.length === 0) return [];
  let [i, ...c] = l,
    o = i.endsWith('?'),
    s = i.replace(/\?$/, '');
  if (c.length === 0) return o ? [s, ''] : [s];
  let p = s1(c.join('/')),
    d = [];
  return (
    d.push(...p.map((m) => (m === '' ? s : [s, m].join('/')))),
    o && d.push(...p),
    d.map((m) => (n.startsWith('/') && m === '' ? '/' : m))
  );
}
function Vv(n) {
  n.sort((l, i) =>
    l.score !== i.score
      ? i.score - l.score
      : Pv(
          l.routesMeta.map((c) => c.childrenIndex),
          i.routesMeta.map((c) => c.childrenIndex)
        )
  );
}
var Gv = /^:[\w-]+$/,
  Yv = 3,
  Qv = 2,
  wv = 1,
  Kv = 10,
  Zv = -2,
  sd = (n) => n === '*';
function Xv(n, l) {
  let i = n.split('/'),
    c = i.length;
  return (
    i.some(sd) && (c += Zv),
    l && (c += Qv),
    i
      .filter((o) => !sd(o))
      .reduce((o, s) => o + (Gv.test(s) ? Yv : s === '' ? wv : Kv), c)
  );
}
function Pv(n, l) {
  return n.length === l.length && n.slice(0, -1).every((c, o) => c === l[o])
    ? n[n.length - 1] - l[l.length - 1]
    : 0;
}
function Jv(n, l, i = !1) {
  let { routesMeta: c } = n,
    o = {},
    s = '/',
    p = [];
  for (let d = 0; d < c.length; ++d) {
    let m = c[d],
      h = d === c.length - 1,
      g = s === '/' ? l : l.slice(s.length) || '/',
      E = Xu(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: h },
        g
      ),
      T = m.route;
    if (
      (!E &&
        h &&
        i &&
        !c[c.length - 1].route.index &&
        (E = Xu(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          g
        )),
      !E)
    )
      return null;
    (Object.assign(o, E.params),
      p.push({
        params: o,
        pathname: Ft([s, E.pathname]),
        pathnameBase: e2(Ft([s, E.pathnameBase])),
        route: T,
      }),
      E.pathnameBase !== '/' && (s = Ft([s, E.pathnameBase])));
  }
  return p;
}
function Xu(n, l) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [i, c] = Wv(n.path, n.caseSensitive, n.end),
    o = l.match(i);
  if (!o) return null;
  let s = o[0],
    p = s.replace(/(.)\/+$/, '$1'),
    d = o.slice(1);
  return {
    params: c.reduce((h, { paramName: g, isOptional: E }, T) => {
      if (g === '*') {
        let j = d[T] || '';
        p = s.slice(0, s.length - j.length).replace(/(.)\/+$/, '$1');
      }
      const R = d[T];
      return (
        E && !R ? (h[g] = void 0) : (h[g] = (R || '').replace(/%2F/g, '/')),
        h
      );
    }, {}),
    pathname: s,
    pathnameBase: p,
    pattern: n,
  };
}
function Wv(n, l = !1, i = !0) {
  jt(
    n === '*' || !n.endsWith('*') || n.endsWith('/*'),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, '/*')}".`
  );
  let c = [],
    o =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, d, m) => (
            c.push({ paramName: d, isOptional: m != null }),
            m ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    n.endsWith('*')
      ? (c.push({ paramName: '*' }),
        (o += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : i
        ? (o += '\\/*$')
        : n !== '' && n !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, l ? void 0 : 'i'), c]
  );
}
function Fv(n) {
  try {
    return n
      .split('/')
      .map((l) => decodeURIComponent(l).replace(/\//g, '%2F'))
      .join('/');
  } catch (l) {
    return (
      jt(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`
      ),
      n
    );
  }
}
function It(n, l) {
  if (l === '/') return n;
  if (!n.toLowerCase().startsWith(l.toLowerCase())) return null;
  let i = l.endsWith('/') ? l.length - 1 : l.length,
    c = n.charAt(i);
  return c && c !== '/' ? null : n.slice(i) || '/';
}
function Iv(n, l = '/') {
  let {
    pathname: i,
    search: c = '',
    hash: o = '',
  } = typeof n == 'string' ? Da(n) : n;
  return {
    pathname: i ? (i.startsWith('/') ? i : $v(i, l)) : l,
    search: t2(c),
    hash: n2(o),
  };
}
function $v(n, l) {
  let i = l.replace(/\/+$/, '').split('/');
  return (
    n.split('/').forEach((o) => {
      o === '..' ? i.length > 1 && i.pop() : o !== '.' && i.push(o);
    }),
    i.length > 1 ? i.join('/') : '/'
  );
}
function Fr(n, l, i, c) {
  return `Cannot include a '${n}' character in a manually specified \`to.${l}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function kv(n) {
  return n.filter(
    (l, i) => i === 0 || (l.route.path && l.route.path.length > 0)
  );
}
function f1(n) {
  let l = kv(n);
  return l.map((i, c) => (c === l.length - 1 ? i.pathname : i.pathnameBase));
}
function d1(n, l, i, c = !1) {
  let o;
  typeof n == 'string'
    ? (o = Da(n))
    : ((o = { ...n }),
      Ae(
        !o.pathname || !o.pathname.includes('?'),
        Fr('?', 'pathname', 'search', o)
      ),
      Ae(
        !o.pathname || !o.pathname.includes('#'),
        Fr('#', 'pathname', 'hash', o)
      ),
      Ae(!o.search || !o.search.includes('#'), Fr('#', 'search', 'hash', o)));
  let s = n === '' || o.pathname === '',
    p = s ? '/' : o.pathname,
    d;
  if (p == null) d = i;
  else {
    let E = l.length - 1;
    if (!c && p.startsWith('..')) {
      let T = p.split('/');
      for (; T[0] === '..'; ) (T.shift(), (E -= 1));
      o.pathname = T.join('/');
    }
    d = E >= 0 ? l[E] : '/';
  }
  let m = Iv(o, d),
    h = p && p !== '/' && p.endsWith('/'),
    g = (s || p === '.') && i.endsWith('/');
  return (!m.pathname.endsWith('/') && (h || g) && (m.pathname += '/'), m);
}
var Ft = (n) => n.join('/').replace(/\/\/+/g, '/'),
  e2 = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/'),
  t2 = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
  n2 = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n);
function a2(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var p1 = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(p1);
var l2 = ['GET', ...p1];
new Set(l2);
var xa = v.createContext(null);
xa.displayName = 'DataRouter';
var ni = v.createContext(null);
ni.displayName = 'DataRouterState';
v.createContext(!1);
var m1 = v.createContext({ isTransitioning: !1 });
m1.displayName = 'ViewTransition';
var u2 = v.createContext(new Map());
u2.displayName = 'Fetchers';
var i2 = v.createContext(null);
i2.displayName = 'Await';
var Ht = v.createContext(null);
Ht.displayName = 'Navigation';
var Nl = v.createContext(null);
Nl.displayName = 'Location';
var $t = v.createContext({ outlet: null, matches: [], isDataRoute: !1 });
$t.displayName = 'Route';
var jo = v.createContext(null);
jo.displayName = 'RouteError';
function r2(n, { relative: l } = {}) {
  Ae(
    Al(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: i, navigator: c } = v.useContext(Ht),
    { hash: o, pathname: s, search: p } = Ml(n, { relative: l }),
    d = s;
  return (
    i !== '/' && (d = s === '/' ? i : Ft([i, s])),
    c.createHref({ pathname: d, search: p, hash: o })
  );
}
function Al() {
  return v.useContext(Nl) != null;
}
function Jn() {
  return (
    Ae(
      Al(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    v.useContext(Nl).location
  );
}
var v1 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function h1(n) {
  v.useContext(Ht).static || v.useLayoutEffect(n);
}
function o2() {
  let { isDataRoute: n } = v.useContext($t);
  return n ? C2() : c2();
}
function c2() {
  Ae(
    Al(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let n = v.useContext(xa),
    { basename: l, navigator: i } = v.useContext(Ht),
    { matches: c } = v.useContext($t),
    { pathname: o } = Jn(),
    s = JSON.stringify(f1(c)),
    p = v.useRef(!1);
  return (
    h1(() => {
      p.current = !0;
    }),
    v.useCallback(
      (m, h = {}) => {
        if ((jt(p.current, v1), !p.current)) return;
        if (typeof m == 'number') {
          i.go(m);
          return;
        }
        let g = d1(m, JSON.parse(s), o, h.relative === 'path');
        (n == null &&
          l !== '/' &&
          (g.pathname = g.pathname === '/' ? l : Ft([l, g.pathname])),
          (h.replace ? i.replace : i.push)(g, h.state, h));
      },
      [l, i, s, o, n]
    )
  );
}
v.createContext(null);
function Ml(n, { relative: l } = {}) {
  let { matches: i } = v.useContext($t),
    { pathname: c } = Jn(),
    o = JSON.stringify(f1(i));
  return v.useMemo(() => d1(n, JSON.parse(o), c, l === 'path'), [n, o, c, l]);
}
function s2(n, l) {
  return y1(n, l);
}
function y1(n, l, i, c, o) {
  Ae(
    Al(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: s } = v.useContext(Ht),
    { matches: p } = v.useContext($t),
    d = p[p.length - 1],
    m = d ? d.params : {},
    h = d ? d.pathname : '/',
    g = d ? d.pathnameBase : '/',
    E = d && d.route;
  {
    let b = (E && E.path) || '';
    g1(
      h,
      !E || b.endsWith('*') || b.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b === '/' ? '*' : `${b}/*`}">.`
    );
  }
  let T = Jn(),
    R;
  if (l) {
    let b = typeof l == 'string' ? Da(l) : l;
    (Ae(
      g === '/' || b.pathname?.startsWith(g),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${b.pathname}" was given in the \`location\` prop.`
    ),
      (R = b));
  } else R = T;
  let j = R.pathname || '/',
    A = j;
  if (g !== '/') {
    let b = g.replace(/^\//, '').split('/');
    A = '/' + j.replace(/^\//, '').split('/').slice(b.length).join('/');
  }
  let x = o1(n, { pathname: A });
  (jt(
    E || x != null,
    `No routes matched location "${R.pathname}${R.search}${R.hash}" `
  ),
    jt(
      x == null ||
        x[x.length - 1].route.element !== void 0 ||
        x[x.length - 1].route.Component !== void 0 ||
        x[x.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let _ = v2(
    x &&
      x.map((b) =>
        Object.assign({}, b, {
          params: Object.assign({}, m, b.params),
          pathname: Ft([
            g,
            s.encodeLocation
              ? s.encodeLocation(
                  b.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : b.pathname,
          ]),
          pathnameBase:
            b.pathnameBase === '/'
              ? g
              : Ft([
                  g,
                  s.encodeLocation
                    ? s.encodeLocation(
                        b.pathnameBase
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23')
                      ).pathname
                    : b.pathnameBase,
                ]),
        })
      ),
    p,
    i,
    c,
    o
  );
  return l && _
    ? v.createElement(
        Nl.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...R,
            },
            navigationType: 'POP',
          },
        },
        _
      )
    : _;
}
function f2() {
  let n = S2(),
    l = a2(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    i = n instanceof Error ? n.stack : null,
    c = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: c },
    s = { padding: '2px 4px', backgroundColor: c },
    p = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', n),
    (p = v.createElement(
      v.Fragment,
      null,
      v.createElement('p', null, '💿 Hey developer 👋'),
      v.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        v.createElement('code', { style: s }, 'ErrorBoundary'),
        ' or',
        ' ',
        v.createElement('code', { style: s }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    v.createElement(
      v.Fragment,
      null,
      v.createElement('h2', null, 'Unexpected Application Error!'),
      v.createElement('h3', { style: { fontStyle: 'italic' } }, l),
      i ? v.createElement('pre', { style: o }, i) : null,
      p
    )
  );
}
var d2 = v.createElement(f2, null),
  p2 = class extends v.Component {
    constructor(n) {
      (super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        }));
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, l) {
      return l.location !== n.location ||
        (l.revalidation !== 'idle' && n.revalidation === 'idle')
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : l.error,
            location: l.location,
            revalidation: n.revalidation || l.revalidation,
          };
    }
    componentDidCatch(n, l) {
      this.props.unstable_onError
        ? this.props.unstable_onError(n, l)
        : console.error(
            'React Router caught the following error during render',
            n
          );
    }
    render() {
      return this.state.error !== void 0
        ? v.createElement(
            $t.Provider,
            { value: this.props.routeContext },
            v.createElement(jo.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function m2({ routeContext: n, match: l, children: i }) {
  let c = v.useContext(xa);
  return (
    c &&
      c.static &&
      c.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (c.staticContext._deepestRenderedBoundaryId = l.route.id),
    v.createElement($t.Provider, { value: n }, i)
  );
}
function v2(n, l = [], i = null, c = null, o = null) {
  if (n == null) {
    if (!i) return null;
    if (i.errors) n = i.matches;
    else if (l.length === 0 && !i.initialized && i.matches.length > 0)
      n = i.matches;
    else return null;
  }
  let s = n,
    p = i?.errors;
  if (p != null) {
    let h = s.findIndex((g) => g.route.id && p?.[g.route.id] !== void 0);
    (Ae(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(p).join(',')}`
    ),
      (s = s.slice(0, Math.min(s.length, h + 1))));
  }
  let d = !1,
    m = -1;
  if (i)
    for (let h = 0; h < s.length; h++) {
      let g = s[h];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = h),
        g.route.id)
      ) {
        let { loaderData: E, errors: T } = i,
          R =
            g.route.loader &&
            !E.hasOwnProperty(g.route.id) &&
            (!T || T[g.route.id] === void 0);
        if (g.route.lazy || R) {
          ((d = !0), m >= 0 ? (s = s.slice(0, m + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((h, g, E) => {
    let T,
      R = !1,
      j = null,
      A = null;
    i &&
      ((T = p && g.route.id ? p[g.route.id] : void 0),
      (j = g.route.errorElement || d2),
      d &&
        (m < 0 && E === 0
          ? (g1(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (R = !0),
            (A = null))
          : m === E &&
            ((R = !0), (A = g.route.hydrateFallbackElement || null))));
    let x = l.concat(s.slice(0, E + 1)),
      _ = () => {
        let b;
        return (
          T
            ? (b = j)
            : R
              ? (b = A)
              : g.route.Component
                ? (b = v.createElement(g.route.Component, null))
                : g.route.element
                  ? (b = g.route.element)
                  : (b = h),
          v.createElement(m2, {
            match: g,
            routeContext: { outlet: h, matches: x, isDataRoute: i != null },
            children: b,
          })
        );
      };
    return i && (g.route.ErrorBoundary || g.route.errorElement || E === 0)
      ? v.createElement(p2, {
          location: i.location,
          revalidation: i.revalidation,
          component: j,
          error: T,
          children: _(),
          routeContext: { outlet: null, matches: x, isDataRoute: !0 },
          unstable_onError: c,
        })
      : _();
  }, null);
}
function Uo(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function h2(n) {
  let l = v.useContext(xa);
  return (Ae(l, Uo(n)), l);
}
function y2(n) {
  let l = v.useContext(ni);
  return (Ae(l, Uo(n)), l);
}
function g2(n) {
  let l = v.useContext($t);
  return (Ae(l, Uo(n)), l);
}
function Ho(n) {
  let l = g2(n),
    i = l.matches[l.matches.length - 1];
  return (
    Ae(
      i.route.id,
      `${n} can only be used on routes that contain a unique "id"`
    ),
    i.route.id
  );
}
function E2() {
  return Ho('useRouteId');
}
function S2() {
  let n = v.useContext(jo),
    l = y2('useRouteError'),
    i = Ho('useRouteError');
  return n !== void 0 ? n : l.errors?.[i];
}
function C2() {
  let { router: n } = h2('useNavigate'),
    l = Ho('useNavigate'),
    i = v.useRef(!1);
  return (
    h1(() => {
      i.current = !0;
    }),
    v.useCallback(
      async (o, s = {}) => {
        (jt(i.current, v1),
          i.current &&
            (typeof o == 'number'
              ? n.navigate(o)
              : await n.navigate(o, { fromRouteId: l, ...s })));
      },
      [n, l]
    )
  );
}
var fd = {};
function g1(n, l, i) {
  !l && !fd[n] && ((fd[n] = !0), jt(!1, i));
}
v.memo(b2);
function b2({ routes: n, future: l, state: i, unstable_onError: c }) {
  return y1(n, void 0, i, c, l);
}
function _2(n) {
  Ae(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function R2({
  basename: n = '/',
  children: l = null,
  location: i,
  navigationType: c = 'POP',
  navigator: o,
  static: s = !1,
}) {
  Ae(
    !Al(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let p = n.replace(/^\/*/, '/'),
    d = v.useMemo(
      () => ({ basename: p, navigator: o, static: s, future: {} }),
      [p, o, s]
    );
  typeof i == 'string' && (i = Da(i));
  let {
      pathname: m = '/',
      search: h = '',
      hash: g = '',
      state: E = null,
      key: T = 'default',
    } = i,
    R = v.useMemo(() => {
      let j = It(m, p);
      return j == null
        ? null
        : {
            location: { pathname: j, search: h, hash: g, state: E, key: T },
            navigationType: c,
          };
    }, [p, m, h, g, E, T, c]);
  return (
    jt(
      R != null,
      `<Router basename="${p}"> is not able to match the URL "${m}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    R == null
      ? null
      : v.createElement(
          Ht.Provider,
          { value: d },
          v.createElement(Nl.Provider, { children: l, value: R })
        )
  );
}
function Kg({ children: n, location: l }) {
  return s2(Co(n), l);
}
function Co(n, l = []) {
  let i = [];
  return (
    v.Children.forEach(n, (c, o) => {
      if (!v.isValidElement(c)) return;
      let s = [...l, o];
      if (c.type === v.Fragment) {
        i.push.apply(i, Co(c.props.children, s));
        return;
      }
      (Ae(
        c.type === _2,
        `[${typeof c.type == 'string' ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Ae(
          !c.props.index || !c.props.children,
          'An index route cannot have child routes.'
        ));
      let p = {
        id: c.props.id || s.join('-'),
        caseSensitive: c.props.caseSensitive,
        element: c.props.element,
        Component: c.props.Component,
        index: c.props.index,
        path: c.props.path,
        middleware: c.props.middleware,
        loader: c.props.loader,
        action: c.props.action,
        hydrateFallbackElement: c.props.hydrateFallbackElement,
        HydrateFallback: c.props.HydrateFallback,
        errorElement: c.props.errorElement,
        ErrorBoundary: c.props.ErrorBoundary,
        hasErrorBoundary:
          c.props.hasErrorBoundary === !0 ||
          c.props.ErrorBoundary != null ||
          c.props.errorElement != null,
        shouldRevalidate: c.props.shouldRevalidate,
        handle: c.props.handle,
        lazy: c.props.lazy,
      };
      (c.props.children && (p.children = Co(c.props.children, s)), i.push(p));
    }),
    i
  );
}
var Gu = 'get',
  Yu = 'application/x-www-form-urlencoded';
function ai(n) {
  return n != null && typeof n.tagName == 'string';
}
function O2(n) {
  return ai(n) && n.tagName.toLowerCase() === 'button';
}
function T2(n) {
  return ai(n) && n.tagName.toLowerCase() === 'form';
}
function N2(n) {
  return ai(n) && n.tagName.toLowerCase() === 'input';
}
function A2(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function M2(n, l) {
  return n.button === 0 && (!l || l === '_self') && !A2(n);
}
var xu = null;
function z2() {
  if (xu === null)
    try {
      (new FormData(document.createElement('form'), 0), (xu = !1));
    } catch {
      xu = !0;
    }
  return xu;
}
var D2 = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Ir(n) {
  return n != null && !D2.has(n)
    ? (jt(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yu}"`
      ),
      null)
    : n;
}
function x2(n, l) {
  let i, c, o, s, p;
  if (T2(n)) {
    let d = n.getAttribute('action');
    ((c = d ? It(d, l) : null),
      (i = n.getAttribute('method') || Gu),
      (o = Ir(n.getAttribute('enctype')) || Yu),
      (s = new FormData(n)));
  } else if (O2(n) || (N2(n) && (n.type === 'submit' || n.type === 'image'))) {
    let d = n.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = n.getAttribute('formaction') || d.getAttribute('action');
    if (
      ((c = m ? It(m, l) : null),
      (i = n.getAttribute('formmethod') || d.getAttribute('method') || Gu),
      (o =
        Ir(n.getAttribute('formenctype')) ||
        Ir(d.getAttribute('enctype')) ||
        Yu),
      (s = new FormData(d, n)),
      !z2())
    ) {
      let { name: h, type: g, value: E } = n;
      if (g === 'image') {
        let T = h ? `${h}.` : '';
        (s.append(`${T}x`, '0'), s.append(`${T}y`, '0'));
      } else h && s.append(h, E);
    }
  } else {
    if (ai(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((i = Gu), (c = null), (o = Yu), (p = n));
  }
  return (
    s && o === 'text/plain' && ((p = s), (s = void 0)),
    { action: c, method: i.toLowerCase(), encType: o, formData: s, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Bo(n, l) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(l);
}
function j2(n, l, i) {
  let c =
    typeof n == 'string'
      ? new URL(
          n,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : n;
  return (
    c.pathname === '/'
      ? (c.pathname = `_root.${i}`)
      : l && It(c.pathname, l) === '/'
        ? (c.pathname = `${l.replace(/\/$/, '')}/_root.${i}`)
        : (c.pathname = `${c.pathname.replace(/\/$/, '')}.${i}`),
    c
  );
}
async function U2(n, l) {
  if (n.id in l) return l[n.id];
  try {
    let i = await import(n.module);
    return ((l[n.id] = i), i);
  } catch (i) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`
      ),
      console.error(i),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function H2(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === 'preload' &&
        typeof n.imageSrcSet == 'string' &&
        typeof n.imageSizes == 'string'
      : typeof n.rel == 'string' && typeof n.href == 'string';
}
async function B2(n, l, i) {
  let c = await Promise.all(
    n.map(async (o) => {
      let s = l.routes[o.route.id];
      if (s) {
        let p = await U2(s, i);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return G2(
    c
      .flat(1)
      .filter(H2)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet'
          ? { ...o, rel: 'prefetch', as: 'style' }
          : { ...o, rel: 'prefetch' }
      )
  );
}
function dd(n, l, i, c, o, s) {
  let p = (m, h) => (i[h] ? m.route.id !== i[h].route.id : !0),
    d = (m, h) =>
      i[h].pathname !== m.pathname ||
      (i[h].route.path?.endsWith('*') && i[h].params['*'] !== m.params['*']);
  return s === 'assets'
    ? l.filter((m, h) => p(m, h) || d(m, h))
    : s === 'data'
      ? l.filter((m, h) => {
          let g = c.routes[m.route.id];
          if (!g || !g.hasLoader) return !1;
          if (p(m, h) || d(m, h)) return !0;
          if (m.route.shouldRevalidate) {
            let E = m.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin
              ),
              currentParams: i[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof E == 'boolean') return E;
          }
          return !0;
        })
      : [];
}
function L2(n, l, { includeHydrateFallback: i } = {}) {
  return q2(
    n
      .map((c) => {
        let o = l.routes[c.route.id];
        if (!o) return [];
        let s = [o.module];
        return (
          o.clientActionModule && (s = s.concat(o.clientActionModule)),
          o.clientLoaderModule && (s = s.concat(o.clientLoaderModule)),
          i &&
            o.hydrateFallbackModule &&
            (s = s.concat(o.hydrateFallbackModule)),
          o.imports && (s = s.concat(o.imports)),
          s
        );
      })
      .flat(1)
  );
}
function q2(n) {
  return [...new Set(n)];
}
function V2(n) {
  let l = {},
    i = Object.keys(n).sort();
  for (let c of i) l[c] = n[c];
  return l;
}
function G2(n, l) {
  let i = new Set();
  return (
    new Set(l),
    n.reduce((c, o) => {
      let s = JSON.stringify(V2(o));
      return (i.has(s) || (i.add(s), c.push({ key: s, link: o })), c);
    }, [])
  );
}
function E1() {
  let n = v.useContext(xa);
  return (
    Bo(
      n,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    n
  );
}
function Y2() {
  let n = v.useContext(ni);
  return (
    Bo(
      n,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    n
  );
}
var Lo = v.createContext(void 0);
Lo.displayName = 'FrameworkContext';
function S1() {
  let n = v.useContext(Lo);
  return (
    Bo(n, 'You must render this element inside a <HydratedRouter> element'),
    n
  );
}
function Q2(n, l) {
  let i = v.useContext(Lo),
    [c, o] = v.useState(!1),
    [s, p] = v.useState(!1),
    {
      onFocus: d,
      onBlur: m,
      onMouseEnter: h,
      onMouseLeave: g,
      onTouchStart: E,
    } = l,
    T = v.useRef(null);
  (v.useEffect(() => {
    if ((n === 'render' && p(!0), n === 'viewport')) {
      let A = (_) => {
          _.forEach((b) => {
            p(b.isIntersecting);
          });
        },
        x = new IntersectionObserver(A, { threshold: 0.5 });
      return (
        T.current && x.observe(T.current),
        () => {
          x.disconnect();
        }
      );
    }
  }, [n]),
    v.useEffect(() => {
      if (c) {
        let A = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(A);
        };
      }
    }, [c]));
  let R = () => {
      o(!0);
    },
    j = () => {
      (o(!1), p(!1));
    };
  return i
    ? n !== 'intent'
      ? [s, T, {}]
      : [
          s,
          T,
          {
            onFocus: Sl(d, R),
            onBlur: Sl(m, j),
            onMouseEnter: Sl(h, R),
            onMouseLeave: Sl(g, j),
            onTouchStart: Sl(E, R),
          },
        ]
    : [!1, T, {}];
}
function Sl(n, l) {
  return (i) => {
    (n && n(i), i.defaultPrevented || l(i));
  };
}
function w2({ page: n, ...l }) {
  let { router: i } = E1(),
    c = v.useMemo(() => o1(i.routes, n, i.basename), [i.routes, n, i.basename]);
  return c ? v.createElement(Z2, { page: n, matches: c, ...l }) : null;
}
function K2(n) {
  let { manifest: l, routeModules: i } = S1(),
    [c, o] = v.useState([]);
  return (
    v.useEffect(() => {
      let s = !1;
      return (
        B2(n, l, i).then((p) => {
          s || o(p);
        }),
        () => {
          s = !0;
        }
      );
    }, [n, l, i]),
    c
  );
}
function Z2({ page: n, matches: l, ...i }) {
  let c = Jn(),
    { manifest: o, routeModules: s } = S1(),
    { basename: p } = E1(),
    { loaderData: d, matches: m } = Y2(),
    h = v.useMemo(() => dd(n, l, m, o, c, 'data'), [n, l, m, o, c]),
    g = v.useMemo(() => dd(n, l, m, o, c, 'assets'), [n, l, m, o, c]),
    E = v.useMemo(() => {
      if (n === c.pathname + c.search + c.hash) return [];
      let j = new Set(),
        A = !1;
      if (
        (l.forEach((_) => {
          let b = o.routes[_.route.id];
          !b ||
            !b.hasLoader ||
            ((!h.some((B) => B.route.id === _.route.id) &&
              _.route.id in d &&
              s[_.route.id]?.shouldRevalidate) ||
            b.hasClientLoader
              ? (A = !0)
              : j.add(_.route.id));
        }),
        j.size === 0)
      )
        return [];
      let x = j2(n, p, 'data');
      return (
        A &&
          j.size > 0 &&
          x.searchParams.set(
            '_routes',
            l
              .filter((_) => j.has(_.route.id))
              .map((_) => _.route.id)
              .join(',')
          ),
        [x.pathname + x.search]
      );
    }, [p, d, c, o, h, l, n, s]),
    T = v.useMemo(() => L2(g, o), [g, o]),
    R = K2(g);
  return v.createElement(
    v.Fragment,
    null,
    E.map((j) =>
      v.createElement('link', {
        key: j,
        rel: 'prefetch',
        as: 'fetch',
        href: j,
        ...i,
      })
    ),
    T.map((j) =>
      v.createElement('link', { key: j, rel: 'modulepreload', href: j, ...i })
    ),
    R.map(({ key: j, link: A }) =>
      v.createElement('link', { key: j, nonce: i.nonce, ...A })
    )
  );
}
function X2(...n) {
  return (l) => {
    n.forEach((i) => {
      typeof i == 'function' ? i(l) : i != null && (i.current = l);
    });
  };
}
var C1 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  C1 && (window.__reactRouterVersion = '7.9.5');
} catch {}
function Zg({ basename: n, children: l, window: i }) {
  let c = v.useRef();
  c.current == null && (c.current = Uv({ window: i, v5Compat: !0 }));
  let o = c.current,
    [s, p] = v.useState({ action: o.action, location: o.location }),
    d = v.useCallback(
      (m) => {
        v.startTransition(() => p(m));
      },
      [p]
    );
  return (
    v.useLayoutEffect(() => o.listen(d), [o, d]),
    v.createElement(R2, {
      basename: n,
      children: l,
      location: s.location,
      navigationType: s.action,
      navigator: o,
    })
  );
}
var b1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _1 = v.forwardRef(function (
    {
      onClick: l,
      discover: i = 'render',
      prefetch: c = 'none',
      relative: o,
      reloadDocument: s,
      replace: p,
      state: d,
      target: m,
      to: h,
      preventScrollReset: g,
      viewTransition: E,
      ...T
    },
    R
  ) {
    let { basename: j } = v.useContext(Ht),
      A = typeof h == 'string' && b1.test(h),
      x,
      _ = !1;
    if (typeof h == 'string' && A && ((x = h), C1))
      try {
        let F = new URL(window.location.href),
          ne = h.startsWith('//') ? new URL(F.protocol + h) : new URL(h),
          fe = It(ne.pathname, j);
        ne.origin === F.origin && fe != null
          ? (h = fe + ne.search + ne.hash)
          : (_ = !0);
      } catch {
        jt(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let b = r2(h, { relative: o }),
      [B, G, Q] = Q2(c, T),
      W = F2(h, {
        replace: p,
        state: d,
        target: m,
        preventScrollReset: g,
        relative: o,
        viewTransition: E,
      });
    function w(F) {
      (l && l(F), F.defaultPrevented || W(F));
    }
    let te = v.createElement('a', {
      ...T,
      ...Q,
      href: x || b,
      onClick: _ || s ? l : w,
      ref: X2(R, G),
      target: m,
      'data-discover': !A && i === 'render' ? 'true' : void 0,
    });
    return B && !A
      ? v.createElement(v.Fragment, null, te, v.createElement(w2, { page: b }))
      : te;
  });
_1.displayName = 'Link';
var P2 = v.forwardRef(function (
  {
    'aria-current': l = 'page',
    caseSensitive: i = !1,
    className: c = '',
    end: o = !1,
    style: s,
    to: p,
    viewTransition: d,
    children: m,
    ...h
  },
  g
) {
  let E = Ml(p, { relative: h.relative }),
    T = Jn(),
    R = v.useContext(ni),
    { navigator: j, basename: A } = v.useContext(Ht),
    x = R != null && th(E) && d === !0,
    _ = j.encodeLocation ? j.encodeLocation(E).pathname : E.pathname,
    b = T.pathname,
    B =
      R && R.navigation && R.navigation.location
        ? R.navigation.location.pathname
        : null;
  (i ||
    ((b = b.toLowerCase()),
    (B = B ? B.toLowerCase() : null),
    (_ = _.toLowerCase())),
    B && A && (B = It(B, A) || B));
  const G = _ !== '/' && _.endsWith('/') ? _.length - 1 : _.length;
  let Q = b === _ || (!o && b.startsWith(_) && b.charAt(G) === '/'),
    W =
      B != null &&
      (B === _ || (!o && B.startsWith(_) && B.charAt(_.length) === '/')),
    w = { isActive: Q, isPending: W, isTransitioning: x },
    te = Q ? l : void 0,
    F;
  typeof c == 'function'
    ? (F = c(w))
    : (F = [
        c,
        Q ? 'active' : null,
        W ? 'pending' : null,
        x ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let ne = typeof s == 'function' ? s(w) : s;
  return v.createElement(
    _1,
    {
      ...h,
      'aria-current': te,
      className: F,
      ref: g,
      style: ne,
      to: p,
      viewTransition: d,
    },
    typeof m == 'function' ? m(w) : m
  );
});
P2.displayName = 'NavLink';
var J2 = v.forwardRef(
  (
    {
      discover: n = 'render',
      fetcherKey: l,
      navigate: i,
      reloadDocument: c,
      replace: o,
      state: s,
      method: p = Gu,
      action: d,
      onSubmit: m,
      relative: h,
      preventScrollReset: g,
      viewTransition: E,
      ...T
    },
    R
  ) => {
    let j = k2(),
      A = eh(d, { relative: h }),
      x = p.toLowerCase() === 'get' ? 'get' : 'post',
      _ = typeof d == 'string' && b1.test(d),
      b = (B) => {
        if ((m && m(B), B.defaultPrevented)) return;
        B.preventDefault();
        let G = B.nativeEvent.submitter,
          Q = G?.getAttribute('formmethod') || p;
        j(G || B.currentTarget, {
          fetcherKey: l,
          method: Q,
          navigate: i,
          replace: o,
          state: s,
          relative: h,
          preventScrollReset: g,
          viewTransition: E,
        });
      };
    return v.createElement('form', {
      ref: R,
      method: x,
      action: A,
      onSubmit: c ? m : b,
      ...T,
      'data-discover': !_ && n === 'render' ? 'true' : void 0,
    });
  }
);
J2.displayName = 'Form';
function W2(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function R1(n) {
  let l = v.useContext(xa);
  return (Ae(l, W2(n)), l);
}
function F2(
  n,
  {
    target: l,
    replace: i,
    state: c,
    preventScrollReset: o,
    relative: s,
    viewTransition: p,
  } = {}
) {
  let d = o2(),
    m = Jn(),
    h = Ml(n, { relative: s });
  return v.useCallback(
    (g) => {
      if (M2(g, l)) {
        g.preventDefault();
        let E = i !== void 0 ? i : _l(m) === _l(h);
        d(n, {
          replace: E,
          state: c,
          preventScrollReset: o,
          relative: s,
          viewTransition: p,
        });
      }
    },
    [m, d, h, i, c, l, n, o, s, p]
  );
}
var I2 = 0,
  $2 = () => `__${String(++I2)}__`;
function k2() {
  let { router: n } = R1('useSubmit'),
    { basename: l } = v.useContext(Ht),
    i = E2();
  return v.useCallback(
    async (c, o = {}) => {
      let { action: s, method: p, encType: d, formData: m, body: h } = x2(c, l);
      if (o.navigate === !1) {
        let g = o.fetcherKey || $2();
        await n.fetch(g, i, o.action || s, {
          preventScrollReset: o.preventScrollReset,
          formData: m,
          body: h,
          formMethod: o.method || p,
          formEncType: o.encType || d,
          flushSync: o.flushSync,
        });
      } else
        await n.navigate(o.action || s, {
          preventScrollReset: o.preventScrollReset,
          formData: m,
          body: h,
          formMethod: o.method || p,
          formEncType: o.encType || d,
          replace: o.replace,
          state: o.state,
          fromRouteId: i,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [n, l, i]
  );
}
function eh(n, { relative: l } = {}) {
  let { basename: i } = v.useContext(Ht),
    c = v.useContext($t);
  Ae(c, 'useFormAction must be used inside a RouteContext');
  let [o] = c.matches.slice(-1),
    s = { ...Ml(n || '.', { relative: l }) },
    p = Jn();
  if (n == null) {
    s.search = p.search;
    let d = new URLSearchParams(s.search),
      m = d.getAll('index');
    if (m.some((g) => g === '')) {
      (d.delete('index'),
        m.filter((E) => E).forEach((E) => d.append('index', E)));
      let g = d.toString();
      s.search = g ? `?${g}` : '';
    }
  }
  return (
    (!n || n === '.') &&
      o.route.index &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    i !== '/' && (s.pathname = s.pathname === '/' ? i : Ft([i, s.pathname])),
    _l(s)
  );
}
function th(n, { relative: l } = {}) {
  let i = v.useContext(m1);
  Ae(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = R1('useViewTransitionState'),
    o = Ml(n, { relative: l });
  if (!i.isTransitioning) return !1;
  let s = It(i.currentLocation.pathname, c) || i.currentLocation.pathname,
    p = It(i.nextLocation.pathname, c) || i.nextLocation.pathname;
  return Xu(o.pathname, p) != null || Xu(o.pathname, s) != null;
}
var O1 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  pd = _n.createContext && _n.createContext(O1),
  nh = ['attr', 'size', 'title'];
function ah(n, l) {
  if (n == null) return {};
  var i = lh(n, l),
    c,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    for (o = 0; o < s.length; o++)
      ((c = s[o]),
        !(l.indexOf(c) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(n, c) &&
          (i[c] = n[c]));
  }
  return i;
}
function lh(n, l) {
  if (n == null) return {};
  var i = {};
  for (var c in n)
    if (Object.prototype.hasOwnProperty.call(n, c)) {
      if (l.indexOf(c) >= 0) continue;
      i[c] = n[c];
    }
  return i;
}
function Pu() {
  return (
    (Pu = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var l = 1; l < arguments.length; l++) {
            var i = arguments[l];
            for (var c in i)
              Object.prototype.hasOwnProperty.call(i, c) && (n[c] = i[c]);
          }
          return n;
        }),
    Pu.apply(this, arguments)
  );
}
function md(n, l) {
  var i = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    (l &&
      (c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(n, o).enumerable;
      })),
      i.push.apply(i, c));
  }
  return i;
}
function Ju(n) {
  for (var l = 1; l < arguments.length; l++) {
    var i = arguments[l] != null ? arguments[l] : {};
    l % 2
      ? md(Object(i), !0).forEach(function (c) {
          uh(n, c, i[c]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
        : md(Object(i)).forEach(function (c) {
            Object.defineProperty(n, c, Object.getOwnPropertyDescriptor(i, c));
          });
  }
  return n;
}
function uh(n, l, i) {
  return (
    (l = ih(l)),
    l in n
      ? Object.defineProperty(n, l, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[l] = i),
    n
  );
}
function ih(n) {
  var l = rh(n, 'string');
  return typeof l == 'symbol' ? l : l + '';
}
function rh(n, l) {
  if (typeof n != 'object' || !n) return n;
  var i = n[Symbol.toPrimitive];
  if (i !== void 0) {
    var c = i.call(n, l);
    if (typeof c != 'object') return c;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (l === 'string' ? String : Number)(n);
}
function T1(n) {
  return (
    n &&
    n.map((l, i) =>
      _n.createElement(l.tag, Ju({ key: i }, l.attr), T1(l.child))
    )
  );
}
function Le(n) {
  return (l) =>
    _n.createElement(oh, Pu({ attr: Ju({}, n.attr) }, l), T1(n.child));
}
function oh(n) {
  var l = (i) => {
    var { attr: c, size: o, title: s } = n,
      p = ah(n, nh),
      d = o || i.size || '1em',
      m;
    return (
      i.className && (m = i.className),
      n.className && (m = (m ? m + ' ' : '') + n.className),
      _n.createElement(
        'svg',
        Pu(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          i.attr,
          c,
          p,
          {
            className: m,
            style: Ju(Ju({ color: n.color || i.color }, i.style), n.style),
            height: d,
            width: d,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        s && _n.createElement('title', null, s),
        n.children
      )
    );
  };
  return pd !== void 0
    ? _n.createElement(pd.Consumer, null, (i) => l(i))
    : l(O1);
}
function Xg(n) {
  return Le({
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        },
        child: [],
      },
    ],
  })(n);
}
function Pg(n) {
  return Le({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
        },
        child: [],
      },
    ],
  })(n);
}
function Jg(n) {
  return Le({
    attr: { viewBox: '0 0 640 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z',
        },
        child: [],
      },
    ],
  })(n);
}
function Wg(n) {
  return Le({
    attr: { viewBox: '0 0 448 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z',
        },
        child: [],
      },
    ],
  })(n);
}
var $r = {},
  kr = {},
  eo = {},
  vd;
function ch() {
  return (
    vd ||
      ((vd = 1),
      (function (n) {
        (Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.default = void 0));
        var l = function () {
            for (var o = arguments.length, s = new Array(o), p = 0; p < o; p++)
              s[p] = arguments[p];
            if (typeof window < 'u') {
              var d;
              (typeof window.gtag > 'u' &&
                ((window.dataLayer = window.dataLayer || []),
                (window.gtag = function () {
                  window.dataLayer.push(arguments);
                })),
                (d = window).gtag.apply(d, s));
            }
          },
          i = l;
        n.default = i;
      })(eo)),
    eo
  );
}
var to = {},
  hd;
function sh() {
  return (
    hd ||
      ((hd = 1),
      (function (n) {
        (Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.default = p));
        var l =
          /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
        function i(d) {
          return d
            .toString()
            .trim()
            .replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (m, h, g) {
              return h > 0 &&
                h + m.length !== g.length &&
                m.search(l) > -1 &&
                g.charAt(h - 2) !== ':' &&
                (g.charAt(h + m.length) !== '-' || g.charAt(h - 1) === '-') &&
                g.charAt(h - 1).search(/[^\s-]/) < 0
                ? m.toLowerCase()
                : m.substr(1).search(/[A-Z]|\../) > -1
                  ? m
                  : m.charAt(0).toUpperCase() + m.substr(1);
            });
        }
        function c(d) {
          return typeof d == 'string' && d.indexOf('@') !== -1;
        }
        var o = 'REDACTED (Potential Email Address)';
        function s(d) {
          return c(d)
            ? (console.warn('This arg looks like an email address, redacting.'),
              o)
            : d;
        }
        function p() {
          var d =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : '',
            m =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !0,
            h =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            g = d || '';
          return (m && (g = i(d)), h && (g = s(g)), g);
        }
      })(to)),
    to
  );
}
var yd;
function fh() {
  return (
    yd ||
      ((yd = 1),
      (function (n) {
        (Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.default = n.GA4 = void 0));
        var l = p(ch()),
          i = p(sh()),
          c = [
            'eventCategory',
            'eventAction',
            'eventLabel',
            'eventValue',
            'hitType',
          ],
          o = ['title', 'location'],
          s = ['page', 'hitType'];
        function p(q) {
          return q && q.__esModule ? q : { default: q };
        }
        function d(q, z) {
          if (q == null) return {};
          var V = m(q, z),
            L,
            X;
          if (Object.getOwnPropertySymbols) {
            var P = Object.getOwnPropertySymbols(q);
            for (X = 0; X < P.length; X++)
              ((L = P[X]),
                !(z.indexOf(L) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(q, L) &&
                  (V[L] = q[L]));
          }
          return V;
        }
        function m(q, z) {
          if (q == null) return {};
          var V = {},
            L = Object.keys(q),
            X,
            P;
          for (P = 0; P < L.length; P++)
            ((X = L[P]), !(z.indexOf(X) >= 0) && (V[X] = q[X]));
          return V;
        }
        function h(q) {
          '@babel/helpers - typeof';
          return (
            (h =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (z) {
                    return typeof z;
                  }
                : function (z) {
                    return z &&
                      typeof Symbol == 'function' &&
                      z.constructor === Symbol &&
                      z !== Symbol.prototype
                      ? 'symbol'
                      : typeof z;
                  }),
            h(q)
          );
        }
        function g(q) {
          return R(q) || T(q) || b(q) || E();
        }
        function E() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function T(q) {
          if (
            (typeof Symbol < 'u' && q[Symbol.iterator] != null) ||
            q['@@iterator'] != null
          )
            return Array.from(q);
        }
        function R(q) {
          if (Array.isArray(q)) return B(q);
        }
        function j(q, z) {
          var V = Object.keys(q);
          if (Object.getOwnPropertySymbols) {
            var L = Object.getOwnPropertySymbols(q);
            (z &&
              (L = L.filter(function (X) {
                return Object.getOwnPropertyDescriptor(q, X).enumerable;
              })),
              V.push.apply(V, L));
          }
          return V;
        }
        function A(q) {
          for (var z = 1; z < arguments.length; z++) {
            var V = arguments[z] != null ? arguments[z] : {};
            z % 2
              ? j(Object(V), !0).forEach(function (L) {
                  F(q, L, V[L]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    q,
                    Object.getOwnPropertyDescriptors(V)
                  )
                : j(Object(V)).forEach(function (L) {
                    Object.defineProperty(
                      q,
                      L,
                      Object.getOwnPropertyDescriptor(V, L)
                    );
                  });
          }
          return q;
        }
        function x(q, z) {
          return Q(q) || G(q, z) || b(q, z) || _();
        }
        function _() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function b(q, z) {
          if (q) {
            if (typeof q == 'string') return B(q, z);
            var V = Object.prototype.toString.call(q).slice(8, -1);
            if (
              (V === 'Object' && q.constructor && (V = q.constructor.name),
              V === 'Map' || V === 'Set')
            )
              return Array.from(q);
            if (
              V === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V)
            )
              return B(q, z);
          }
        }
        function B(q, z) {
          (z == null || z > q.length) && (z = q.length);
          for (var V = 0, L = new Array(z); V < z; V++) L[V] = q[V];
          return L;
        }
        function G(q, z) {
          var V =
            q == null
              ? null
              : (typeof Symbol < 'u' && q[Symbol.iterator]) || q['@@iterator'];
          if (V != null) {
            var L,
              X,
              P,
              ce,
              S = [],
              U = !0,
              J = !1;
            try {
              if (((P = (V = V.call(q)).next), z !== 0))
                for (
                  ;
                  !(U = (L = P.call(V)).done) &&
                  (S.push(L.value), S.length !== z);
                  U = !0
                );
            } catch (Z) {
              ((J = !0), (X = Z));
            } finally {
              try {
                if (
                  !U &&
                  V.return != null &&
                  ((ce = V.return()), Object(ce) !== ce)
                )
                  return;
              } finally {
                if (J) throw X;
              }
            }
            return S;
          }
        }
        function Q(q) {
          if (Array.isArray(q)) return q;
        }
        function W(q, z) {
          if (!(q instanceof z))
            throw new TypeError('Cannot call a class as a function');
        }
        function w(q, z) {
          for (var V = 0; V < z.length; V++) {
            var L = z[V];
            ((L.enumerable = L.enumerable || !1),
              (L.configurable = !0),
              'value' in L && (L.writable = !0),
              Object.defineProperty(q, ne(L.key), L));
          }
        }
        function te(q, z, V) {
          return (
            z && w(q.prototype, z),
            Object.defineProperty(q, 'prototype', { writable: !1 }),
            q
          );
        }
        function F(q, z, V) {
          return (
            (z = ne(z)),
            z in q
              ? Object.defineProperty(q, z, {
                  value: V,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (q[z] = V),
            q
          );
        }
        function ne(q) {
          var z = fe(q, 'string');
          return h(z) === 'symbol' ? z : String(z);
        }
        function fe(q, z) {
          if (h(q) !== 'object' || q === null) return q;
          var V = q[Symbol.toPrimitive];
          if (V !== void 0) {
            var L = V.call(q, z);
            if (h(L) !== 'object') return L;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return (z === 'string' ? String : Number)(q);
        }
        var $e = (function () {
          function q() {
            var z = this;
            (W(this, q),
              F(this, 'reset', function () {
                ((z.isInitialized = !1),
                  (z._testMode = !1),
                  z._currentMeasurementId,
                  (z._hasLoadedGA = !1),
                  (z._isQueuing = !1),
                  (z._queueGtag = []));
              }),
              F(this, '_gtag', function () {
                for (
                  var V = arguments.length, L = new Array(V), X = 0;
                  X < V;
                  X++
                )
                  L[X] = arguments[X];
                z._testMode || z._isQueuing
                  ? z._queueGtag.push(L)
                  : l.default.apply(void 0, L);
              }),
              F(this, '_loadGA', function (V, L) {
                var X =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : 'https://www.googletagmanager.com/gtag/js';
                if (
                  !(typeof window > 'u' || typeof document > 'u') &&
                  !z._hasLoadedGA
                ) {
                  var P = document.createElement('script');
                  ((P.async = !0),
                    (P.src = ''.concat(X, '?id=').concat(V)),
                    L && P.setAttribute('nonce', L),
                    document.body.appendChild(P),
                    (window.dataLayer = window.dataLayer || []),
                    (window.gtag = function () {
                      window.dataLayer.push(arguments);
                    }),
                    (z._hasLoadedGA = !0));
                }
              }),
              F(this, '_toGtagOptions', function (V) {
                if (V) {
                  var L = {
                      cookieUpdate: 'cookie_update',
                      cookieExpires: 'cookie_expires',
                      cookieDomain: 'cookie_domain',
                      cookieFlags: 'cookie_flags',
                      userId: 'user_id',
                      clientId: 'client_id',
                      anonymizeIp: 'anonymize_ip',
                      contentGroup1: 'content_group1',
                      contentGroup2: 'content_group2',
                      contentGroup3: 'content_group3',
                      contentGroup4: 'content_group4',
                      contentGroup5: 'content_group5',
                      allowAdFeatures: 'allow_google_signals',
                      allowAdPersonalizationSignals:
                        'allow_ad_personalization_signals',
                      nonInteraction: 'non_interaction',
                      page: 'page_path',
                      hitCallback: 'event_callback',
                    },
                    X = Object.entries(V).reduce(function (P, ce) {
                      var S = x(ce, 2),
                        U = S[0],
                        J = S[1];
                      return (L[U] ? (P[L[U]] = J) : (P[U] = J), P);
                    }, {});
                  return X;
                }
              }),
              F(this, 'initialize', function (V) {
                var L =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                if (!V) throw new Error('Require GA_MEASUREMENT_ID');
                var X = typeof V == 'string' ? [{ trackingId: V }] : V;
                z._currentMeasurementId = X[0].trackingId;
                var P = L.gaOptions,
                  ce = L.gtagOptions,
                  S = L.nonce,
                  U = L.testMode,
                  J = U === void 0 ? !1 : U,
                  Z = L.gtagUrl;
                if (
                  ((z._testMode = J),
                  J || z._loadGA(z._currentMeasurementId, S, Z),
                  z.isInitialized ||
                    (z._gtag('js', new Date()),
                    X.forEach(function (ve) {
                      var xe = A(
                        A(
                          A({}, z._toGtagOptions(A(A({}, P), ve.gaOptions))),
                          ce
                        ),
                        ve.gtagOptions
                      );
                      Object.keys(xe).length
                        ? z._gtag('config', ve.trackingId, xe)
                        : z._gtag('config', ve.trackingId);
                    })),
                  (z.isInitialized = !0),
                  !J)
                ) {
                  var le = g(z._queueGtag);
                  for (z._queueGtag = [], z._isQueuing = !1; le.length; ) {
                    var de = le.shift();
                    (z._gtag.apply(z, g(de)),
                      de[0] === 'get' && (z._isQueuing = !0));
                  }
                }
              }),
              F(this, 'set', function (V) {
                if (!V) {
                  console.warn('`fieldsObject` is required in .set()');
                  return;
                }
                if (h(V) !== 'object') {
                  console.warn('Expected `fieldsObject` arg to be an Object');
                  return;
                }
                (Object.keys(V).length === 0 &&
                  console.warn('empty `fieldsObject` given to .set()'),
                  z._gaCommand('set', V));
              }),
              F(this, '_gaCommandSendEvent', function (V, L, X, P, ce) {
                z._gtag(
                  'event',
                  L,
                  A(
                    A(
                      { event_category: V, event_label: X, value: P },
                      ce && { non_interaction: ce.nonInteraction }
                    ),
                    z._toGtagOptions(ce)
                  )
                );
              }),
              F(this, '_gaCommandSendEventParameters', function () {
                for (
                  var V = arguments.length, L = new Array(V), X = 0;
                  X < V;
                  X++
                )
                  L[X] = arguments[X];
                if (typeof L[0] == 'string')
                  z._gaCommandSendEvent.apply(z, g(L.slice(1)));
                else {
                  var P = L[0],
                    ce = P.eventCategory,
                    S = P.eventAction,
                    U = P.eventLabel,
                    J = P.eventValue;
                  P.hitType;
                  var Z = d(P, c);
                  z._gaCommandSendEvent(ce, S, U, J, Z);
                }
              }),
              F(this, '_gaCommandSendTiming', function (V, L, X, P) {
                z._gtag('event', 'timing_complete', {
                  name: L,
                  value: X,
                  event_category: V,
                  event_label: P,
                });
              }),
              F(this, '_gaCommandSendPageview', function (V, L) {
                if (L && Object.keys(L).length) {
                  var X = z._toGtagOptions(L),
                    P = X.title,
                    ce = X.location,
                    S = d(X, o);
                  z._gtag(
                    'event',
                    'page_view',
                    A(
                      A(
                        A(A({}, V && { page_path: V }), P && { page_title: P }),
                        ce && { page_location: ce }
                      ),
                      S
                    )
                  );
                } else
                  V
                    ? z._gtag('event', 'page_view', { page_path: V })
                    : z._gtag('event', 'page_view');
              }),
              F(this, '_gaCommandSendPageviewParameters', function () {
                for (
                  var V = arguments.length, L = new Array(V), X = 0;
                  X < V;
                  X++
                )
                  L[X] = arguments[X];
                if (typeof L[0] == 'string')
                  z._gaCommandSendPageview.apply(z, g(L.slice(1)));
                else {
                  var P = L[0],
                    ce = P.page;
                  P.hitType;
                  var S = d(P, s);
                  z._gaCommandSendPageview(ce, S);
                }
              }),
              F(this, '_gaCommandSend', function () {
                for (
                  var V = arguments.length, L = new Array(V), X = 0;
                  X < V;
                  X++
                )
                  L[X] = arguments[X];
                var P = typeof L[0] == 'string' ? L[0] : L[0].hitType;
                switch (P) {
                  case 'event':
                    z._gaCommandSendEventParameters.apply(z, L);
                    break;
                  case 'pageview':
                    z._gaCommandSendPageviewParameters.apply(z, L);
                    break;
                  case 'timing':
                    z._gaCommandSendTiming.apply(z, g(L.slice(1)));
                    break;
                  case 'screenview':
                  case 'transaction':
                  case 'item':
                  case 'social':
                  case 'exception':
                    console.warn('Unsupported send command: '.concat(P));
                    break;
                  default:
                    console.warn("Send command doesn't exist: ".concat(P));
                }
              }),
              F(this, '_gaCommandSet', function () {
                for (
                  var V = arguments.length, L = new Array(V), X = 0;
                  X < V;
                  X++
                )
                  L[X] = arguments[X];
                (typeof L[0] == 'string' && (L[0] = F({}, L[0], L[1])),
                  z._gtag('set', z._toGtagOptions(L[0])));
              }),
              F(this, '_gaCommand', function (V) {
                for (
                  var L = arguments.length,
                    X = new Array(L > 1 ? L - 1 : 0),
                    P = 1;
                  P < L;
                  P++
                )
                  X[P - 1] = arguments[P];
                switch (V) {
                  case 'send':
                    z._gaCommandSend.apply(z, X);
                    break;
                  case 'set':
                    z._gaCommandSet.apply(z, X);
                    break;
                  default:
                    console.warn("Command doesn't exist: ".concat(V));
                }
              }),
              F(this, 'ga', function () {
                for (
                  var V = arguments.length, L = new Array(V), X = 0;
                  X < V;
                  X++
                )
                  L[X] = arguments[X];
                if (typeof L[0] == 'string') z._gaCommand.apply(z, L);
                else {
                  var P = L[0];
                  (z._gtag(
                    'get',
                    z._currentMeasurementId,
                    'client_id',
                    function (ce) {
                      z._isQueuing = !1;
                      var S = z._queueGtag;
                      for (
                        P({
                          get: function (Z) {
                            return Z === 'clientId'
                              ? ce
                              : Z === 'trackingId'
                                ? z._currentMeasurementId
                                : Z === 'apiVersion'
                                  ? '1'
                                  : void 0;
                          },
                        });
                        S.length;

                      ) {
                        var U = S.shift();
                        z._gtag.apply(z, g(U));
                      }
                    }
                  ),
                    (z._isQueuing = !0));
                }
                return z.ga;
              }),
              F(this, 'event', function (V, L) {
                if (typeof V == 'string')
                  z._gtag('event', V, z._toGtagOptions(L));
                else {
                  var X = V.action,
                    P = V.category,
                    ce = V.label,
                    S = V.value,
                    U = V.nonInteraction,
                    J = V.transport;
                  if (!P || !X) {
                    console.warn(
                      'args.category AND args.action are required in event()'
                    );
                    return;
                  }
                  var Z = {
                    hitType: 'event',
                    eventCategory: (0, i.default)(P),
                    eventAction: (0, i.default)(X),
                  };
                  (ce && (Z.eventLabel = (0, i.default)(ce)),
                    typeof S < 'u' &&
                      (typeof S != 'number'
                        ? console.warn(
                            'Expected `args.value` arg to be a Number.'
                          )
                        : (Z.eventValue = S)),
                    typeof U < 'u' &&
                      (typeof U != 'boolean'
                        ? console.warn(
                            '`args.nonInteraction` must be a boolean.'
                          )
                        : (Z.nonInteraction = U)),
                    typeof J < 'u' &&
                      (typeof J != 'string'
                        ? console.warn('`args.transport` must be a string.')
                        : (['beacon', 'xhr', 'image'].indexOf(J) === -1 &&
                            console.warn(
                              '`args.transport` must be either one of these values: `beacon`, `xhr` or `image`'
                            ),
                          (Z.transport = J))),
                    z._gaCommand('send', Z));
                }
              }),
              F(this, 'send', function (V) {
                z._gaCommand('send', V);
              }),
              this.reset());
          }
          return (
            te(q, [
              {
                key: 'gtag',
                value: function () {
                  this._gtag.apply(this, arguments);
                },
              },
            ]),
            q
          );
        })();
        n.GA4 = $e;
        var re = new $e();
        n.default = re;
      })(kr)),
    kr
  );
}
var gd;
function dh() {
  return (
    gd ||
      ((gd = 1),
      (function (n) {
        function l(d) {
          '@babel/helpers - typeof';
          return (
            (l =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (m) {
                    return typeof m;
                  }
                : function (m) {
                    return m &&
                      typeof Symbol == 'function' &&
                      m.constructor === Symbol &&
                      m !== Symbol.prototype
                      ? 'symbol'
                      : typeof m;
                  }),
            l(d)
          );
        }
        (Object.defineProperty(n, '__esModule', { value: !0 }),
          (n.default = n.ReactGAImplementation = void 0));
        var i = o(fh());
        function c(d) {
          if (typeof WeakMap != 'function') return null;
          var m = new WeakMap(),
            h = new WeakMap();
          return (c = function (E) {
            return E ? h : m;
          })(d);
        }
        function o(d, m) {
          if (d && d.__esModule) return d;
          if (d === null || (l(d) !== 'object' && typeof d != 'function'))
            return { default: d };
          var h = c(m);
          if (h && h.has(d)) return h.get(d);
          var g = {},
            E = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var T in d)
            if (T !== 'default' && Object.prototype.hasOwnProperty.call(d, T)) {
              var R = E ? Object.getOwnPropertyDescriptor(d, T) : null;
              R && (R.get || R.set)
                ? Object.defineProperty(g, T, R)
                : (g[T] = d[T]);
            }
          return ((g.default = d), h && h.set(d, g), g);
        }
        var s = i.GA4;
        n.ReactGAImplementation = s;
        var p = i.default;
        n.default = p;
      })($r)),
    $r
  );
}
var ph = dh();
const Fg = zo(ph);
const mh = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  vh = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, i, c) =>
      c ? c.toUpperCase() : i.toLowerCase()
    ),
  Ed = (n) => {
    const l = vh(n);
    return l.charAt(0).toUpperCase() + l.slice(1);
  },
  N1 = (...n) =>
    n
      .filter((l, i, c) => !!l && l.trim() !== '' && c.indexOf(l) === i)
      .join(' ')
      .trim(),
  hh = (n) => {
    for (const l in n)
      if (l.startsWith('aria-') || l === 'role' || l === 'title') return !0;
  };
var yh = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
const gh = v.forwardRef(
  (
    {
      color: n = 'currentColor',
      size: l = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: c,
      className: o = '',
      children: s,
      iconNode: p,
      ...d
    },
    m
  ) =>
    v.createElement(
      'svg',
      {
        ref: m,
        ...yh,
        width: l,
        height: l,
        stroke: n,
        strokeWidth: c ? (Number(i) * 24) / Number(l) : i,
        className: N1('lucide', o),
        ...(!s && !hh(d) && { 'aria-hidden': 'true' }),
        ...d,
      },
      [
        ...p.map(([h, g]) => v.createElement(h, g)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
const zl = (n, l) => {
  const i = v.forwardRef(({ className: c, ...o }, s) =>
    v.createElement(gh, {
      ref: s,
      iconNode: l,
      className: N1(`lucide-${mh(Ed(n))}`, `lucide-${n}`, c),
      ...o,
    })
  );
  return ((i.displayName = Ed(n)), i);
};
const Eh = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
  Ig = zl('chevron-up', Eh);
const Sh = [
    [
      'rect',
      { x: '14', y: '3', width: '5', height: '18', rx: '1', key: 'kaeet6' },
    ],
    [
      'rect',
      { x: '5', y: '3', width: '5', height: '18', rx: '1', key: '1wsw3u' },
    ],
  ],
  $g = zl('pause', Sh);
const Ch = [
    [
      'path',
      {
        d: 'M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z',
        key: '10ikf1',
      },
    ],
  ],
  kg = zl('play', Ch);
const bh = [
    [
      'path',
      {
        d: 'M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z',
        key: '1ffxy3',
      },
    ],
    ['path', { d: 'm21.854 2.147-10.94 10.939', key: '12cjpa' }],
  ],
  e4 = zl('send', bh);
const _h = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  t4 = zl('x', _h);
let Sd = typeof document < 'u' ? v.useLayoutEffect : v.useEffect,
  Cd = (n) => n && !Array.isArray(n) && typeof n == 'object',
  ju = [],
  Rh = {},
  A1 = U0;
const M1 = (n, l = ju) => {
  let i = Rh;
  (Cd(n)
    ? ((i = n), (n = null), (l = 'dependencies' in i ? i.dependencies : ju))
    : Cd(l) && ((i = l), (l = 'dependencies' in i ? i.dependencies : ju)),
    n &&
      typeof n != 'function' &&
      console.warn('First parameter must be a function or config object'));
  const { scope: c, revertOnUpdate: o } = i,
    s = v.useRef(!1),
    p = v.useRef(A1.context(() => {}, c)),
    d = v.useRef((h) => p.current.add(null, h)),
    m = l && l.length && !o;
  return (
    m && Sd(() => ((s.current = !0), () => p.current.revert()), ju),
    Sd(() => {
      if ((n && p.current.add(n, c), !m || !s.current))
        return () => p.current.revert();
    }, l),
    { context: p.current, contextSafe: d.current }
  );
};
M1.register = (n) => {
  A1 = n;
};
M1.headless = !0;
function n4(n) {
  const l = { ...n };
  return (H0(l, 'react'), B0('react', { version: v.version }), L0(l));
}
function a4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701',
        },
        child: [],
      },
    ],
  })(n);
}
function l4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z',
        },
        child: [],
      },
    ],
  })(n);
}
function u4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
        },
        child: [],
      },
    ],
  })(n);
}
function i4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
        },
        child: [],
      },
    ],
  })(n);
}
function r4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
        },
        child: [],
      },
    ],
  })(n);
}
function o4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.389 0 01.002 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z',
        },
        child: [],
      },
    ],
  })(n);
}
function c4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z',
        },
        child: [],
      },
    ],
  })(n);
}
function s4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z',
        },
        child: [],
      },
    ],
  })(n);
}
function f4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z',
        },
        child: [],
      },
    ],
  })(n);
}
function d4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z',
        },
        child: [],
      },
    ],
  })(n);
}
function p4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
        },
        child: [],
      },
    ],
  })(n);
}
function m4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z',
        },
        child: [],
      },
    ],
  })(n);
}
function v4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z',
        },
        child: [],
      },
    ],
  })(n);
}
function h4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z',
        },
        child: [],
      },
    ],
  })(n);
}
function y4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z',
        },
        child: [],
      },
    ],
  })(n);
}
function g4(n) {
  return Le({
    attr: { role: 'img', viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
        },
        child: [],
      },
    ],
  })(n);
}
var bo = new Map(),
  Uu = new WeakMap(),
  bd = 0,
  Oh;
function Th(n) {
  return n
    ? (Uu.has(n) || ((bd += 1), Uu.set(n, bd.toString())), Uu.get(n))
    : '0';
}
function Nh(n) {
  return Object.keys(n)
    .sort()
    .filter((l) => n[l] !== void 0)
    .map((l) => `${l}_${l === 'root' ? Th(n.root) : n[l]}`)
    .toString();
}
function Ah(n) {
  const l = Nh(n);
  let i = bo.get(l);
  if (!i) {
    const c = new Map();
    let o;
    const s = new IntersectionObserver((p) => {
      p.forEach((d) => {
        var m;
        const h = d.isIntersecting && o.some((g) => d.intersectionRatio >= g);
        (n.trackVisibility && typeof d.isVisible > 'u' && (d.isVisible = h),
          (m = c.get(d.target)) == null ||
            m.forEach((g) => {
              g(h, d);
            }));
      });
    }, n);
    ((o =
      s.thresholds ||
      (Array.isArray(n.threshold) ? n.threshold : [n.threshold || 0])),
      (i = { id: l, observer: s, elements: c }),
      bo.set(l, i));
  }
  return i;
}
function Mh(n, l, i = {}, c = Oh) {
  if (typeof window.IntersectionObserver > 'u' && c !== void 0) {
    const m = n.getBoundingClientRect();
    return (
      l(c, {
        isIntersecting: c,
        target: n,
        intersectionRatio: typeof i.threshold == 'number' ? i.threshold : 0,
        time: 0,
        boundingClientRect: m,
        intersectionRect: m,
        rootBounds: m,
      }),
      () => {}
    );
  }
  const { id: o, observer: s, elements: p } = Ah(i),
    d = p.get(n) || [];
  return (
    p.has(n) || p.set(n, d),
    d.push(l),
    s.observe(n),
    function () {
      (d.splice(d.indexOf(l), 1),
        d.length === 0 && (p.delete(n), s.unobserve(n)),
        p.size === 0 && (s.disconnect(), bo.delete(o)));
    }
  );
}
function E4({
  threshold: n,
  delay: l,
  trackVisibility: i,
  rootMargin: c,
  root: o,
  triggerOnce: s,
  skip: p,
  initialInView: d,
  fallbackInView: m,
  onChange: h,
} = {}) {
  var g;
  const [E, T] = v.useState(null),
    R = v.useRef(h),
    j = v.useRef(d),
    [A, x] = v.useState({ inView: !!d, entry: void 0 });
  ((R.current = h),
    v.useEffect(() => {
      if ((j.current === void 0 && (j.current = d), p || !E)) return;
      let G;
      return (
        (G = Mh(
          E,
          (Q, W) => {
            const w = j.current;
            ((j.current = Q),
              !(w === void 0 && !Q) &&
                (x({ inView: Q, entry: W }),
                R.current && R.current(Q, W),
                W.isIntersecting && s && G && (G(), (G = void 0))));
          },
          {
            root: o,
            rootMargin: c,
            threshold: n,
            trackVisibility: i,
            delay: l,
          },
          m
        )),
        () => {
          G && G();
        }
      );
    }, [Array.isArray(n) ? n.toString() : n, E, o, c, s, p, i, m, l]));
  const _ = (g = A.entry) == null ? void 0 : g.target,
    b = v.useRef(void 0);
  !E &&
    _ &&
    !s &&
    !p &&
    b.current !== _ &&
    ((b.current = _), x({ inView: !!d, entry: void 0 }), (j.current = d));
  const B = [T, A.inView, A.entry];
  return ((B.ref = B[0]), (B.inView = B[1]), (B.entry = B[2]), B);
}
function _d(n, l) {
  if (typeof n == 'function') return n(l);
  n != null && (n.current = l);
}
function ja(...n) {
  return (l) => {
    let i = !1;
    const c = n.map((o) => {
      const s = _d(o, l);
      return (!i && typeof s == 'function' && (i = !0), s);
    });
    if (i)
      return () => {
        for (let o = 0; o < c.length; o++) {
          const s = c[o];
          typeof s == 'function' ? s() : _d(n[o], null);
        }
      };
  };
}
function Wn(...n) {
  return v.useCallback(ja(...n), n);
}
var zh = Symbol.for('react.lazy'),
  Wu = xo[' use '.trim().toString()];
function Dh(n) {
  return typeof n == 'object' && n !== null && 'then' in n;
}
function z1(n) {
  return (
    n != null &&
    typeof n == 'object' &&
    '$$typeof' in n &&
    n.$$typeof === zh &&
    '_payload' in n &&
    Dh(n._payload)
  );
}
function xh(n) {
  const l = jh(n),
    i = v.forwardRef((c, o) => {
      let { children: s, ...p } = c;
      z1(s) && typeof Wu == 'function' && (s = Wu(s._payload));
      const d = v.Children.toArray(s),
        m = d.find(Hh);
      if (m) {
        const h = m.props.children,
          g = d.map((E) =>
            E === m
              ? v.Children.count(h) > 1
                ? v.Children.only(null)
                : v.isValidElement(h)
                  ? h.props.children
                  : null
              : E
          );
        return k.jsx(l, {
          ...p,
          ref: o,
          children: v.isValidElement(h) ? v.cloneElement(h, void 0, g) : null,
        });
      }
      return k.jsx(l, { ...p, ref: o, children: s });
    });
  return ((i.displayName = `${n}.Slot`), i);
}
var S4 = xh('Slot');
function jh(n) {
  const l = v.forwardRef((i, c) => {
    let { children: o, ...s } = i;
    if (
      (z1(o) && typeof Wu == 'function' && (o = Wu(o._payload)),
      v.isValidElement(o))
    ) {
      const p = Lh(o),
        d = Bh(s, o.props);
      return (
        o.type !== v.Fragment && (d.ref = c ? ja(c, p) : p),
        v.cloneElement(o, d)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return ((l.displayName = `${n}.SlotClone`), l);
}
var Uh = Symbol('radix.slottable');
function Hh(n) {
  return (
    v.isValidElement(n) &&
    typeof n.type == 'function' &&
    '__radixId' in n.type &&
    n.type.__radixId === Uh
  );
}
function Bh(n, l) {
  const i = { ...l };
  for (const c in l) {
    const o = n[c],
      s = l[c];
    /^on[A-Z]/.test(c)
      ? o && s
        ? (i[c] = (...d) => {
            const m = s(...d);
            return (o(...d), m);
          })
        : o && (i[c] = o)
      : c === 'style'
        ? (i[c] = { ...o, ...s })
        : c === 'className' && (i[c] = [o, s].filter(Boolean).join(' '));
  }
  return { ...n, ...i };
}
function Lh(n) {
  let l = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    i = l && 'isReactWarning' in l && l.isReactWarning;
  return i
    ? n.ref
    : ((l = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (i = l && 'isReactWarning' in l && l.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var no = { exports: {} },
  Wt = {};
var Rd;
function qh() {
  return (
    Rd ||
      ((Rd = 1),
      (Wt.ConcurrentRoot = 1),
      (Wt.ContinuousEventPriority = 8),
      (Wt.DefaultEventPriority = 32),
      (Wt.DiscreteEventPriority = 2),
      (Wt.IdleEventPriority = 268435456),
      (Wt.LegacyRoot = 0),
      (Wt.NoEventPriority = 0)),
    Wt
  );
}
var Od;
function Vh() {
  return (Od || ((Od = 1), (no.exports = qh())), no.exports);
}
var Qu = Vh();
const Gh = (n) => typeof n == 'object' && typeof n.then == 'function',
  Zn = [];
function D1(n, l, i = (c, o) => c === o) {
  if (n === l) return !0;
  if (!n || !l) return !1;
  const c = n.length;
  if (l.length !== c) return !1;
  for (let o = 0; o < c; o++) if (!i(n[o], l[o])) return !1;
  return !0;
}
function x1(n, l = null, i = !1, c = {}) {
  l === null && (l = [n]);
  for (const s of Zn)
    if (D1(l, s.keys, s.equal)) {
      if (i) return;
      if (Object.prototype.hasOwnProperty.call(s, 'error')) throw s.error;
      if (Object.prototype.hasOwnProperty.call(s, 'response'))
        return (
          c.lifespan &&
            c.lifespan > 0 &&
            (s.timeout && clearTimeout(s.timeout),
            (s.timeout = setTimeout(s.remove, c.lifespan))),
          s.response
        );
      if (!i) throw s.promise;
    }
  const o = {
    keys: l,
    equal: c.equal,
    remove: () => {
      const s = Zn.indexOf(o);
      s !== -1 && Zn.splice(s, 1);
    },
    promise: (Gh(n) ? n : n(...l))
      .then((s) => {
        ((o.response = s),
          c.lifespan &&
            c.lifespan > 0 &&
            (o.timeout = setTimeout(o.remove, c.lifespan)));
      })
      .catch((s) => (o.error = s)),
  };
  if ((Zn.push(o), !i)) throw o.promise;
}
const Yh = (n, l, i) => x1(n, l, !1, i),
  Qh = (n, l, i) => void x1(n, l, !0, i),
  wh = (n) => {
    if (n === void 0 || n.length === 0) Zn.splice(0, Zn.length);
    else {
      const l = Zn.find((i) => D1(n, i.keys, i.equal));
      l && l.remove();
    }
  };
var ao = { exports: {} },
  lo = { exports: {} };
var Td;
function Kh() {
  return (
    Td ||
      ((Td = 1),
      (function (n) {
        ((n.exports = function (l) {
          function i(e, t, a, u) {
            return new Ip(e, t, a, u);
          }
          function c() {}
          function o(e) {
            var t = 'https://react.dev/errors/' + e;
            if (1 < arguments.length) {
              t += '?args[]=' + encodeURIComponent(arguments[1]);
              for (var a = 2; a < arguments.length; a++)
                t += '&args[]=' + encodeURIComponent(arguments[a]);
            }
            return (
              'Minified React error #' +
              e +
              '; visit ' +
              t +
              ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
            );
          }
          function s(e) {
            return e === null || typeof e != 'object'
              ? null
              : ((e = (lf && e[lf]) || e['@@iterator']),
                typeof e == 'function' ? e : null);
          }
          function p(e) {
            if (e == null) return null;
            if (typeof e == 'function')
              return e.$$typeof === am ? null : e.displayName || e.name || null;
            if (typeof e == 'string') return e;
            switch (e) {
              case aa:
                return 'Fragment';
              case na:
                return 'Portal';
              case mr:
                return 'Profiler';
              case tf:
                return 'StrictMode';
              case hr:
                return 'Suspense';
              case yr:
                return 'SuspenseList';
            }
            if (typeof e == 'object')
              switch (e.$$typeof) {
                case sn:
                  return (e.displayName || 'Context') + '.Provider';
                case nf:
                  return (e._context.displayName || 'Context') + '.Consumer';
                case vr:
                  var t = e.render;
                  return (
                    (e = e.displayName),
                    e ||
                      ((e = t.displayName || t.name || ''),
                      (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                  );
                case gr:
                  return (
                    (t = e.displayName || null),
                    t !== null ? t : p(e.type) || 'Memo'
                  );
                case fn:
                  ((t = e._payload), (e = e._init));
                  try {
                    return p(e(t));
                  } catch {}
              }
            return null;
          }
          function d(e) {
            if (Er === void 0)
              try {
                throw Error();
              } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                ((Er = (t && t[1]) || ''),
                  (uf =
                    -1 <
                    a.stack.indexOf(`
    at`)
                      ? ' (<anonymous>)'
                      : -1 < a.stack.indexOf('@')
                        ? '@unknown:0:0'
                        : ''));
              }
            return (
              `
` +
              Er +
              e +
              uf
            );
          }
          function m(e, t) {
            if (!e || Sr) return '';
            Sr = !0;
            var a = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
              var u = {
                DetermineComponentFrameRoot: function () {
                  try {
                    if (t) {
                      var I = function () {
                        throw Error();
                      };
                      if (
                        (Object.defineProperty(I.prototype, 'props', {
                          set: function () {
                            throw Error();
                          },
                        }),
                        typeof Reflect == 'object' && Reflect.construct)
                      ) {
                        try {
                          Reflect.construct(I, []);
                        } catch (oe) {
                          var $ = oe;
                        }
                        Reflect.construct(e, [], I);
                      } else {
                        try {
                          I.call();
                        } catch (oe) {
                          $ = oe;
                        }
                        e.call(I.prototype);
                      }
                    } else {
                      try {
                        throw Error();
                      } catch (oe) {
                        $ = oe;
                      }
                      (I = e()) &&
                        typeof I.catch == 'function' &&
                        I.catch(function () {});
                    }
                  } catch (oe) {
                    if (oe && $ && typeof oe.stack == 'string')
                      return [oe.stack, $.stack];
                  }
                  return [null, null];
                },
              };
              u.DetermineComponentFrameRoot.displayName =
                'DetermineComponentFrameRoot';
              var r = Object.getOwnPropertyDescriptor(
                u.DetermineComponentFrameRoot,
                'name'
              );
              r &&
                r.configurable &&
                Object.defineProperty(u.DetermineComponentFrameRoot, 'name', {
                  value: 'DetermineComponentFrameRoot',
                });
              var f = u.DetermineComponentFrameRoot(),
                y = f[0],
                C = f[1];
              if (y && C) {
                var N = y.split(`
`),
                  H = C.split(`
`);
                for (
                  r = u = 0;
                  u < N.length && !N[u].includes('DetermineComponentFrameRoot');

                )
                  u++;
                for (
                  ;
                  r < H.length && !H[r].includes('DetermineComponentFrameRoot');

                )
                  r++;
                if (u === N.length || r === H.length)
                  for (
                    u = N.length - 1, r = H.length - 1;
                    1 <= u && 0 <= r && N[u] !== H[r];

                  )
                    r--;
                for (; 1 <= u && 0 <= r; u--, r--)
                  if (N[u] !== H[r]) {
                    if (u !== 1 || r !== 1)
                      do
                        if ((u--, r--, 0 > r || N[u] !== H[r])) {
                          var K =
                            `
` + N[u].replace(' at new ', ' at ');
                          return (
                            e.displayName &&
                              K.includes('<anonymous>') &&
                              (K = K.replace('<anonymous>', e.displayName)),
                            K
                          );
                        }
                      while (1 <= u && 0 <= r);
                    break;
                  }
              }
            } finally {
              ((Sr = !1), (Error.prepareStackTrace = a));
            }
            return (a = e ? e.displayName || e.name : '') ? d(a) : '';
          }
          function h(e) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                return d(e.type);
              case 16:
                return d('Lazy');
              case 13:
                return d('Suspense');
              case 19:
                return d('SuspenseList');
              case 0:
              case 15:
                return ((e = m(e.type, !1)), e);
              case 11:
                return ((e = m(e.type.render, !1)), e);
              case 1:
                return ((e = m(e.type, !0)), e);
              default:
                return '';
            }
          }
          function g(e) {
            try {
              var t = '';
              do ((t += h(e)), (e = e.return));
              while (e);
              return t;
            } catch (a) {
              return (
                `
Error generating stack: ` +
                a.message +
                `
` +
                a.stack
              );
            }
          }
          function E(e) {
            var t = e,
              a = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
              e = t;
              do
                ((t = e),
                  (t.flags & 4098) !== 0 && (a = t.return),
                  (e = t.return));
              while (e);
            }
            return t.tag === 3 ? a : null;
          }
          function T(e) {
            if (E(e) !== e) throw Error(o(188));
          }
          function R(e) {
            var t = e.alternate;
            if (!t) {
              if (((t = E(e)), t === null)) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var a = e, u = t; ; ) {
              var r = a.return;
              if (r === null) break;
              var f = r.alternate;
              if (f === null) {
                if (((u = r.return), u !== null)) {
                  a = u;
                  continue;
                }
                break;
              }
              if (r.child === f.child) {
                for (f = r.child; f; ) {
                  if (f === a) return (T(r), e);
                  if (f === u) return (T(r), t);
                  f = f.sibling;
                }
                throw Error(o(188));
              }
              if (a.return !== u.return) ((a = r), (u = f));
              else {
                for (var y = !1, C = r.child; C; ) {
                  if (C === a) {
                    ((y = !0), (a = r), (u = f));
                    break;
                  }
                  if (C === u) {
                    ((y = !0), (u = r), (a = f));
                    break;
                  }
                  C = C.sibling;
                }
                if (!y) {
                  for (C = f.child; C; ) {
                    if (C === a) {
                      ((y = !0), (a = f), (u = r));
                      break;
                    }
                    if (C === u) {
                      ((y = !0), (u = f), (a = r));
                      break;
                    }
                    C = C.sibling;
                  }
                  if (!y) throw Error(o(189));
                }
              }
              if (a.alternate !== u) throw Error(o(190));
            }
            if (a.tag !== 3) throw Error(o(188));
            return a.stateNode.current === a ? e : t;
          }
          function j(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for (e = e.child; e !== null; ) {
              if (((t = j(e)), t !== null)) return t;
              e = e.sibling;
            }
            return null;
          }
          function A(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for (e = e.child; e !== null; ) {
              if (e.tag !== 4 && ((t = A(e)), t !== null)) return t;
              e = e.sibling;
            }
            return null;
          }
          function x(e) {
            return { current: e };
          }
          function _(e) {
            0 > ua || ((e.current = Tr[ua]), (Tr[ua] = null), ua--);
          }
          function b(e, t) {
            (ua++, (Tr[ua] = e.current), (e.current = t));
          }
          function B(e) {
            return ((e >>>= 0), e === 0 ? 32 : (31 - ((g0(e) / E0) | 0)) | 0);
          }
          function G(e) {
            var t = e & 42;
            if (t !== 0) return t;
            switch (e & -e) {
              case 1:
                return 1;
              case 2:
                return 2;
              case 4:
                return 4;
              case 8:
                return 8;
              case 16:
                return 16;
              case 32:
                return 32;
              case 64:
                return 64;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return e & 4194176;
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                return e & 62914560;
              case 67108864:
                return 67108864;
              case 134217728:
                return 134217728;
              case 268435456:
                return 268435456;
              case 536870912:
                return 536870912;
              case 1073741824:
                return 0;
              default:
                return e;
            }
          }
          function Q(e, t) {
            var a = e.pendingLanes;
            if (a === 0) return 0;
            var u = 0,
              r = e.suspendedLanes,
              f = e.pingedLanes,
              y = e.warmLanes;
            e = e.finishedLanes !== 0;
            var C = a & 134217727;
            return (
              C !== 0
                ? ((a = C & ~r),
                  a !== 0
                    ? (u = G(a))
                    : ((f &= C),
                      f !== 0
                        ? (u = G(f))
                        : e || ((y = C & ~y), y !== 0 && (u = G(y)))))
                : ((C = a & ~r),
                  C !== 0
                    ? (u = G(C))
                    : f !== 0
                      ? (u = G(f))
                      : e || ((y = a & ~y), y !== 0 && (u = G(y)))),
              u === 0
                ? 0
                : t !== 0 &&
                    t !== u &&
                    (t & r) === 0 &&
                    ((r = u & -u),
                    (y = t & -t),
                    r >= y || (r === 32 && (y & 4194176) !== 0))
                  ? t
                  : u
            );
          }
          function W(e, t) {
            return (
              (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
            );
          }
          function w(e, t) {
            switch (e) {
              case 1:
              case 2:
              case 4:
              case 8:
                return t + 250;
              case 16:
              case 32:
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return t + 5e3;
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                return -1;
              case 67108864:
              case 134217728:
              case 268435456:
              case 536870912:
              case 1073741824:
                return -1;
              default:
                return -1;
            }
          }
          function te() {
            var e = uu;
            return ((uu <<= 1), (uu & 4194176) === 0 && (uu = 128), e);
          }
          function F() {
            var e = iu;
            return ((iu <<= 1), (iu & 62914560) === 0 && (iu = 4194304), e);
          }
          function ne(e) {
            for (var t = [], a = 0; 31 > a; a++) t.push(e);
            return t;
          }
          function fe(e, t) {
            ((e.pendingLanes |= t),
              t !== 268435456 &&
                ((e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.warmLanes = 0)));
          }
          function $e(e, t, a, u, r, f) {
            var y = e.pendingLanes;
            ((e.pendingLanes = a),
              (e.suspendedLanes = 0),
              (e.pingedLanes = 0),
              (e.warmLanes = 0),
              (e.expiredLanes &= a),
              (e.entangledLanes &= a),
              (e.errorRecoveryDisabledLanes &= a),
              (e.shellSuspendCounter = 0));
            var C = e.entanglements,
              N = e.expirationTimes,
              H = e.hiddenUpdates;
            for (a = y & ~a; 0 < a; ) {
              var K = 31 - ot(a),
                I = 1 << K;
              ((C[K] = 0), (N[K] = -1));
              var $ = H[K];
              if ($ !== null)
                for (H[K] = null, K = 0; K < $.length; K++) {
                  var oe = $[K];
                  oe !== null && (oe.lane &= -536870913);
                }
              a &= ~I;
            }
            (u !== 0 && re(e, u, 0),
              f !== 0 &&
                r === 0 &&
                e.tag !== 0 &&
                (e.suspendedLanes |= f & ~(y & ~t)));
          }
          function re(e, t, a) {
            ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
            var u = 31 - ot(t);
            ((e.entangledLanes |= t),
              (e.entanglements[u] =
                e.entanglements[u] | 1073741824 | (a & 4194218)));
          }
          function q(e, t) {
            var a = (e.entangledLanes |= t);
            for (e = e.entanglements; a; ) {
              var u = 31 - ot(a),
                r = 1 << u;
              ((r & t) | (e[u] & t) && (e[u] |= t), (a &= ~r));
            }
          }
          function z(e) {
            return (
              (e &= -e),
              2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
            );
          }
          function V(e) {
            if (ct && typeof ct.onCommitFiberRoot == 'function')
              try {
                ct.onCommitFiberRoot(
                  el,
                  e,
                  void 0,
                  (e.current.flags & 128) === 128
                );
              } catch {}
          }
          function L(e) {
            if (
              (typeof R0 == 'function' && O0(e),
              ct && typeof ct.setStrictMode == 'function')
            )
              try {
                ct.setStrictMode(el, e);
              } catch {}
          }
          function X(e, t) {
            return (
              (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
            );
          }
          function P(e, t) {
            if (typeof e == 'object' && e !== null) {
              var a = xf.get(e);
              return a !== void 0
                ? a
                : ((t = { value: e, source: t, stack: g(t) }), xf.set(e, t), t);
            }
            return { value: e, source: t, stack: g(t) };
          }
          function ce(e, t) {
            ((ra[oa++] = cu), (ra[oa++] = ou), (ou = e), (cu = t));
          }
          function S(e, t, a) {
            ((vt[ht++] = wt), (vt[ht++] = Kt), (vt[ht++] = jn), (jn = e));
            var u = wt;
            e = Kt;
            var r = 32 - ot(u) - 1;
            ((u &= ~(1 << r)), (a += 1));
            var f = 32 - ot(t) + r;
            if (30 < f) {
              var y = r - (r % 5);
              ((f = (u & ((1 << y) - 1)).toString(32)),
                (u >>= y),
                (r -= y),
                (wt = (1 << (32 - ot(t) + r)) | (a << r) | u),
                (Kt = f + e));
            } else ((wt = (1 << f) | (a << r) | u), (Kt = e));
          }
          function U(e) {
            e.return !== null && (ce(e, 1), S(e, 1, 0));
          }
          function J(e) {
            for (; e === ou; )
              ((ou = ra[--oa]),
                (ra[oa] = null),
                (cu = ra[--oa]),
                (ra[oa] = null));
            for (; e === jn; )
              ((jn = vt[--ht]),
                (vt[ht] = null),
                (Kt = vt[--ht]),
                (vt[ht] = null),
                (wt = vt[--ht]),
                (vt[ht] = null));
          }
          function Z(e, t) {
            (b(pn, t), b(tl, e), b(Ke, null), (e = im(t)), _(Ke), b(Ke, e));
          }
          function le() {
            (_(Ke), _(tl), _(pn));
          }
          function de(e) {
            e.memoizedState !== null && b(su, e);
            var t = Ke.current,
              a = rm(t, e.type);
            t !== a && (b(tl, e), b(Ke, a));
          }
          function ve(e) {
            (tl.current === e && (_(Ke), _(tl)),
              su.current === e &&
                (_(su),
                Qt ? (xn._currentValue = la) : (xn._currentValue2 = la)));
          }
          function xe(e) {
            var t = Error(o(418, ''));
            throw (La(P(t, e)), Mr);
          }
          function Qe(e, t) {
            if (!pt) throw Error(o(175));
            e0(e.stateNode, e.type, e.memoizedProps, t, e) || xe(e);
          }
          function jl(e) {
            for (Fe = e.return; Fe; )
              switch (Fe.tag) {
                case 3:
                case 27:
                  At = !0;
                  return;
                case 5:
                case 13:
                  At = !1;
                  return;
                default:
                  Fe = Fe.return;
              }
          }
          function Ha(e) {
            if (!pt || e !== Fe) return !1;
            if (!ye) return (jl(e), (ye = !0), !1);
            var t = !1;
            if (
              (Pe
                ? e.tag !== 3 &&
                  e.tag !== 27 &&
                  (e.tag !== 5 ||
                    (Cf(e.type) && !lu(e.type, e.memoizedProps))) &&
                  (t = !0)
                : e.tag !== 3 &&
                  (e.tag !== 5 ||
                    (Cf(e.type) && !lu(e.type, e.memoizedProps))) &&
                  (t = !0),
              t && Je && xe(e),
              jl(e),
              e.tag === 13)
            ) {
              if (!pt) throw Error(o(316));
              if (
                ((e = e.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(317));
              Je = a0(e);
            } else Je = Fe ? Ef(e.stateNode) : null;
            return !0;
          }
          function Ba() {
            pt && ((Je = Fe = null), (ye = !1));
          }
          function La(e) {
            Rt === null ? (Rt = [e]) : Rt.push(e);
          }
          function Ul() {
            for (var e = ca, t = (zr = ca = 0); t < e; ) {
              var a = yt[t];
              yt[t++] = null;
              var u = yt[t];
              yt[t++] = null;
              var r = yt[t];
              yt[t++] = null;
              var f = yt[t];
              if (((yt[t++] = null), u !== null && r !== null)) {
                var y = u.pending;
                (y === null ? (r.next = r) : ((r.next = y.next), (y.next = r)),
                  (u.pending = r));
              }
              f !== 0 && $o(a, r, f);
            }
          }
          function Hl(e, t, a, u) {
            ((yt[ca++] = e),
              (yt[ca++] = t),
              (yt[ca++] = a),
              (yt[ca++] = u),
              (zr |= u),
              (e.lanes |= u),
              (e = e.alternate),
              e !== null && (e.lanes |= u));
          }
          function ci(e, t, a, u) {
            return (Hl(e, t, a, u), Bl(e));
          }
          function kt(e, t) {
            return (Hl(e, null, null, t), Bl(e));
          }
          function $o(e, t, a) {
            e.lanes |= a;
            var u = e.alternate;
            u !== null && (u.lanes |= a);
            for (var r = !1, f = e.return; f !== null; )
              ((f.childLanes |= a),
                (u = f.alternate),
                u !== null && (u.childLanes |= a),
                f.tag === 22 &&
                  ((e = f.stateNode),
                  e === null || e._visibility & 1 || (r = !0)),
                (e = f),
                (f = f.return));
            r &&
              t !== null &&
              e.tag === 3 &&
              ((f = e.stateNode),
              (r = 31 - ot(a)),
              (f = f.hiddenUpdates),
              (e = f[r]),
              e === null ? (f[r] = [t]) : e.push(t),
              (t.lane = a | 536870912));
          }
          function Bl(e) {
            if (50 < sl) throw ((sl = 0), (Xr = null), Error(o(185)));
            for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
            return e.tag === 3 ? e.stateNode : null;
          }
          function Nt(e) {
            (e !== sa &&
              e.next === null &&
              (sa === null ? (fu = sa = e) : (sa = sa.next = e)),
              (du = !0),
              Dr || ((Dr = !0), Ap(Np)));
          }
          function Fn(e, t) {
            if (!xr && du) {
              xr = !0;
              do
                for (var a = !1, u = fu; u !== null; ) {
                  if (e !== 0) {
                    var r = u.pendingLanes;
                    if (r === 0) var f = 0;
                    else {
                      var y = u.suspendedLanes,
                        C = u.pingedLanes;
                      ((f = (1 << (31 - ot(42 | e) + 1)) - 1),
                        (f &= r & ~(y & ~C)),
                        (f =
                          f & 201326677 ? (f & 201326677) | 1 : f ? f | 2 : 0));
                    }
                    f !== 0 && ((a = !0), tc(u, f));
                  } else
                    ((f = he),
                      (f = Q(u, u === _e ? f : 0)),
                      (f & 3) === 0 || W(u, f) || ((a = !0), tc(u, f)));
                  u = u.next;
                }
              while (a);
              xr = !1;
            }
          }
          function Np() {
            du = Dr = !1;
            var e = 0;
            fa !== 0 && (vm() && (e = fa), (fa = 0));
            for (var t = _t(), a = null, u = fu; u !== null; ) {
              var r = u.next,
                f = ko(u, t);
              (f === 0
                ? ((u.next = null),
                  a === null ? (fu = r) : (a.next = r),
                  r === null && (sa = a))
                : ((a = u), (e !== 0 || (f & 3) !== 0) && (du = !0)),
                (u = r));
            }
            Fn(e);
          }
          function ko(e, t) {
            for (
              var a = e.suspendedLanes,
                u = e.pingedLanes,
                r = e.expirationTimes,
                f = e.pendingLanes & -62914561;
              0 < f;

            ) {
              var y = 31 - ot(f),
                C = 1 << y,
                N = r[y];
              (N === -1
                ? ((C & a) === 0 || (C & u) !== 0) && (r[y] = w(C, t))
                : N <= t && (e.expiredLanes |= C),
                (f &= ~C));
            }
            if (
              ((t = _e),
              (a = he),
              (a = Q(e, e === t ? a : 0)),
              (u = e.callbackNode),
              a === 0 ||
                (e === t && Re === 2) ||
                e.cancelPendingCommit !== null)
            )
              return (
                u !== null && u !== null && Nr(u),
                (e.callbackNode = null),
                (e.callbackPriority = 0)
              );
            if ((a & 3) === 0 || W(e, a)) {
              if (((t = a & -a), t === e.callbackPriority)) return t;
              switch ((u !== null && Nr(u), z(a))) {
                case 2:
                case 8:
                  a = b0;
                  break;
                case 32:
                  a = Ar;
                  break;
                case 268435456:
                  a = _0;
                  break;
                default:
                  a = Ar;
              }
              return (
                (u = ec.bind(null, e)),
                (a = ru(a, u)),
                (e.callbackPriority = t),
                (e.callbackNode = a),
                t
              );
            }
            return (
              u !== null && u !== null && Nr(u),
              (e.callbackPriority = 2),
              (e.callbackNode = null),
              2
            );
          }
          function ec(e, t) {
            var a = e.callbackNode;
            if (Mn() && e.callbackNode !== a) return null;
            var u = he;
            return (
              (u = Q(e, e === _e ? u : 0)),
              u === 0
                ? null
                : (Us(e, u, t),
                  ko(e, _t()),
                  e.callbackNode != null && e.callbackNode === a
                    ? ec.bind(null, e)
                    : null)
            );
          }
          function tc(e, t) {
            if (Mn()) return null;
            Us(e, t, !0);
          }
          function Ap(e) {
            Cm
              ? bm(function () {
                  (be & 6) !== 0 ? ru(Df, e) : e();
                })
              : ru(Df, e);
          }
          function si() {
            return (fa === 0 && (fa = te()), fa);
          }
          function Mp(e, t) {
            if (nl === null) {
              var a = (nl = []);
              ((jr = 0),
                (da = si()),
                (pa = {
                  status: 'pending',
                  value: void 0,
                  then: function (u) {
                    a.push(u);
                  },
                }));
            }
            return (jr++, t.then(nc, nc), t);
          }
          function nc() {
            if (--jr === 0 && nl !== null) {
              pa !== null && (pa.status = 'fulfilled');
              var e = nl;
              ((nl = null), (da = 0), (pa = null));
              for (var t = 0; t < e.length; t++) (0, e[t])();
            }
          }
          function zp(e, t) {
            var a = [],
              u = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (r) {
                  a.push(r);
                },
              };
            return (
              e.then(
                function () {
                  ((u.status = 'fulfilled'), (u.value = t));
                  for (var r = 0; r < a.length; r++) (0, a[r])(t);
                },
                function (r) {
                  for (
                    u.status = 'rejected', u.reason = r, r = 0;
                    r < a.length;
                    r++
                  )
                    (0, a[r])(void 0);
                }
              ),
              u
            );
          }
          function fi(e) {
            e.updateQueue = {
              baseState: e.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: { pending: null, lanes: 0, hiddenCallbacks: null },
              callbacks: null,
            };
          }
          function di(e, t) {
            ((e = e.updateQueue),
              t.updateQueue === e &&
                (t.updateQueue = {
                  baseState: e.baseState,
                  firstBaseUpdate: e.firstBaseUpdate,
                  lastBaseUpdate: e.lastBaseUpdate,
                  shared: e.shared,
                  callbacks: null,
                }));
          }
          function en(e) {
            return {
              lane: e,
              tag: 0,
              payload: null,
              callback: null,
              next: null,
            };
          }
          function tn(e, t, a) {
            var u = e.updateQueue;
            if (u === null) return null;
            if (((u = u.shared), (be & 2) !== 0)) {
              var r = u.pending;
              return (
                r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
                (u.pending = t),
                (t = Bl(e)),
                $o(e, null, a),
                t
              );
            }
            return (Hl(e, u, t, a), Bl(e));
          }
          function qa(e, t, a) {
            if (
              ((t = t.updateQueue),
              t !== null && ((t = t.shared), (a & 4194176) !== 0))
            ) {
              var u = t.lanes;
              ((u &= e.pendingLanes), (a |= u), (t.lanes = a), q(e, a));
            }
          }
          function pi(e, t) {
            var a = e.updateQueue,
              u = e.alternate;
            if (u !== null && ((u = u.updateQueue), a === u)) {
              var r = null,
                f = null;
              if (((a = a.firstBaseUpdate), a !== null)) {
                do {
                  var y = {
                    lane: a.lane,
                    tag: a.tag,
                    payload: a.payload,
                    callback: null,
                    next: null,
                  };
                  (f === null ? (r = f = y) : (f = f.next = y), (a = a.next));
                } while (a !== null);
                f === null ? (r = f = t) : (f = f.next = t);
              } else r = f = t;
              ((a = {
                baseState: u.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: f,
                shared: u.shared,
                callbacks: u.callbacks,
              }),
                (e.updateQueue = a));
              return;
            }
            ((e = a.lastBaseUpdate),
              e === null ? (a.firstBaseUpdate = t) : (e.next = t),
              (a.lastBaseUpdate = t));
          }
          function Va() {
            if (Ur) {
              var e = pa;
              if (e !== null) throw e;
            }
          }
          function Ga(e, t, a, u) {
            Ur = !1;
            var r = e.updateQueue;
            mn = !1;
            var f = r.firstBaseUpdate,
              y = r.lastBaseUpdate,
              C = r.shared.pending;
            if (C !== null) {
              r.shared.pending = null;
              var N = C,
                H = N.next;
              ((N.next = null), y === null ? (f = H) : (y.next = H), (y = N));
              var K = e.alternate;
              K !== null &&
                ((K = K.updateQueue),
                (C = K.lastBaseUpdate),
                C !== y &&
                  (C === null ? (K.firstBaseUpdate = H) : (C.next = H),
                  (K.lastBaseUpdate = N)));
            }
            if (f !== null) {
              var I = r.baseState;
              ((y = 0), (K = H = N = null), (C = f));
              do {
                var $ = C.lane & -536870913,
                  oe = $ !== C.lane;
                if (oe ? (he & $) === $ : (u & $) === $) {
                  ($ !== 0 && $ === da && (Ur = !0),
                    K !== null &&
                      (K = K.next =
                        {
                          lane: 0,
                          tag: C.tag,
                          payload: C.payload,
                          callback: null,
                          next: null,
                        }));
                  e: {
                    var St = e,
                      fl = C;
                    $ = t;
                    var Qn = a;
                    switch (fl.tag) {
                      case 1:
                        if (((St = fl.payload), typeof St == 'function')) {
                          I = St.call(Qn, I, $);
                          break e;
                        }
                        I = St;
                        break e;
                      case 3:
                        St.flags = (St.flags & -65537) | 128;
                      case 0:
                        if (
                          ((St = fl.payload),
                          ($ =
                            typeof St == 'function' ? St.call(Qn, I, $) : St),
                          $ == null)
                        )
                          break e;
                        I = pr({}, I, $);
                        break e;
                      case 2:
                        mn = !0;
                    }
                  }
                  (($ = C.callback),
                    $ !== null &&
                      ((e.flags |= 64),
                      oe && (e.flags |= 8192),
                      (oe = r.callbacks),
                      oe === null ? (r.callbacks = [$]) : oe.push($)));
                } else
                  ((oe = {
                    lane: $,
                    tag: C.tag,
                    payload: C.payload,
                    callback: C.callback,
                    next: null,
                  }),
                    K === null ? ((H = K = oe), (N = I)) : (K = K.next = oe),
                    (y |= $));
                if (((C = C.next), C === null)) {
                  if (((C = r.shared.pending), C === null)) break;
                  ((oe = C),
                    (C = oe.next),
                    (oe.next = null),
                    (r.lastBaseUpdate = oe),
                    (r.shared.pending = null));
                }
              } while (!0);
              (K === null && (N = I),
                (r.baseState = N),
                (r.firstBaseUpdate = H),
                (r.lastBaseUpdate = K),
                f === null && (r.shared.lanes = 0),
                (yn |= y),
                (e.lanes = y),
                (e.memoizedState = I));
            }
          }
          function ac(e, t) {
            if (typeof e != 'function') throw Error(o(191, e));
            e.call(t);
          }
          function lc(e, t) {
            var a = e.callbacks;
            if (a !== null)
              for (e.callbacks = null, e = 0; e < a.length; e++) ac(a[e], t);
          }
          function Ll(e, t) {
            if (st(e, t)) return !0;
            if (
              typeof e != 'object' ||
              e === null ||
              typeof t != 'object' ||
              t === null
            )
              return !1;
            var a = Object.keys(e),
              u = Object.keys(t);
            if (a.length !== u.length) return !1;
            for (u = 0; u < a.length; u++) {
              var r = a[u];
              if (!T0.call(t, r) || !st(e[r], t[r])) return !1;
            }
            return !0;
          }
          function uc(e) {
            return ((e = e.status), e === 'fulfilled' || e === 'rejected');
          }
          function ql() {}
          function ic(e, t, a) {
            switch (
              ((a = e[a]),
              a === void 0 ? e.push(t) : a !== t && (t.then(ql, ql), (t = a)),
              t.status)
            ) {
              case 'fulfilled':
                return t.value;
              case 'rejected':
                throw ((e = t.reason), e === al ? Error(o(483)) : e);
              default:
                if (typeof t.status == 'string') t.then(ql, ql);
                else {
                  if (((e = _e), e !== null && 100 < e.shellSuspendCounter))
                    throw Error(o(482));
                  ((e = t),
                    (e.status = 'pending'),
                    e.then(
                      function (u) {
                        if (t.status === 'pending') {
                          var r = t;
                          ((r.status = 'fulfilled'), (r.value = u));
                        }
                      },
                      function (u) {
                        if (t.status === 'pending') {
                          var r = t;
                          ((r.status = 'rejected'), (r.reason = u));
                        }
                      }
                    ));
                }
                switch (t.status) {
                  case 'fulfilled':
                    return t.value;
                  case 'rejected':
                    throw ((e = t.reason), e === al ? Error(o(483)) : e);
                }
                throw ((ma = t), al);
            }
          }
          function rc() {
            if (ma === null) throw Error(o(459));
            var e = ma;
            return ((ma = null), e);
          }
          function Vl(e) {
            var t = ll;
            return ((ll += 1), va === null && (va = []), ic(va, e, t));
          }
          function Ya(e, t) {
            ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
          }
          function Gl(e, t) {
            throw t.$$typeof === em
              ? Error(o(525))
              : ((e = Object.prototype.toString.call(t)),
                Error(
                  o(
                    31,
                    e === '[object Object]'
                      ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                      : e
                  )
                ));
          }
          function oc(e) {
            var t = e._init;
            return t(e._payload);
          }
          function cc(e) {
            function t(M, O) {
              if (e) {
                var D = M.deletions;
                D === null ? ((M.deletions = [O]), (M.flags |= 16)) : D.push(O);
              }
            }
            function a(M, O) {
              if (!e) return null;
              for (; O !== null; ) (t(M, O), (O = O.sibling));
              return null;
            }
            function u(M) {
              for (var O = new Map(); M !== null; )
                (M.key !== null ? O.set(M.key, M) : O.set(M.index, M),
                  (M = M.sibling));
              return O;
            }
            function r(M, O) {
              return ((M = cn(M, O)), (M.index = 0), (M.sibling = null), M);
            }
            function f(M, O, D) {
              return (
                (M.index = D),
                e
                  ? ((D = M.alternate),
                    D !== null
                      ? ((D = D.index), D < O ? ((M.flags |= 33554434), O) : D)
                      : ((M.flags |= 33554434), O))
                  : ((M.flags |= 1048576), O)
              );
            }
            function y(M) {
              return (e && M.alternate === null && (M.flags |= 33554434), M);
            }
            function C(M, O, D, Y) {
              return O === null || O.tag !== 6
                ? ((O = sr(D, M.mode, Y)), (O.return = M), O)
                : ((O = r(O, D)), (O.return = M), O);
            }
            function N(M, O, D, Y) {
              var ee = D.type;
              return ee === aa
                ? K(M, O, D.props.children, Y, D.key)
                : O !== null &&
                    (O.elementType === ee ||
                      (typeof ee == 'object' &&
                        ee !== null &&
                        ee.$$typeof === fn &&
                        oc(ee) === O.type))
                  ? ((O = r(O, D.props)), Ya(O, D), (O.return = M), O)
                  : ((O = tu(D.type, D.key, D.props, null, M.mode, Y)),
                    Ya(O, D),
                    (O.return = M),
                    O);
            }
            function H(M, O, D, Y) {
              return O === null ||
                O.tag !== 4 ||
                O.stateNode.containerInfo !== D.containerInfo ||
                O.stateNode.implementation !== D.implementation
                ? ((O = fr(D, M.mode, Y)), (O.return = M), O)
                : ((O = r(O, D.children || [])), (O.return = M), O);
            }
            function K(M, O, D, Y, ee) {
              return O === null || O.tag !== 7
                ? ((O = zn(D, M.mode, Y, ee)), (O.return = M), O)
                : ((O = r(O, D)), (O.return = M), O);
            }
            function I(M, O, D) {
              if (
                (typeof O == 'string' && O !== '') ||
                typeof O == 'number' ||
                typeof O == 'bigint'
              )
                return ((O = sr('' + O, M.mode, D)), (O.return = M), O);
              if (typeof O == 'object' && O !== null) {
                switch (O.$$typeof) {
                  case nu:
                    return (
                      (D = tu(O.type, O.key, O.props, null, M.mode, D)),
                      Ya(D, O),
                      (D.return = M),
                      D
                    );
                  case na:
                    return ((O = fr(O, M.mode, D)), (O.return = M), O);
                  case fn:
                    var Y = O._init;
                    return ((O = Y(O._payload)), I(M, O, D));
                }
                if (au(O) || s(O))
                  return ((O = zn(O, M.mode, D, null)), (O.return = M), O);
                if (typeof O.then == 'function') return I(M, Vl(O), D);
                if (O.$$typeof === sn) return I(M, Wl(M, O), D);
                Gl(M, O);
              }
              return null;
            }
            function $(M, O, D, Y) {
              var ee = O !== null ? O.key : null;
              if (
                (typeof D == 'string' && D !== '') ||
                typeof D == 'number' ||
                typeof D == 'bigint'
              )
                return ee !== null ? null : C(M, O, '' + D, Y);
              if (typeof D == 'object' && D !== null) {
                switch (D.$$typeof) {
                  case nu:
                    return D.key === ee ? N(M, O, D, Y) : null;
                  case na:
                    return D.key === ee ? H(M, O, D, Y) : null;
                  case fn:
                    return (
                      (ee = D._init),
                      (D = ee(D._payload)),
                      $(M, O, D, Y)
                    );
                }
                if (au(D) || s(D))
                  return ee !== null ? null : K(M, O, D, Y, null);
                if (typeof D.then == 'function') return $(M, O, Vl(D), Y);
                if (D.$$typeof === sn) return $(M, O, Wl(M, D), Y);
                Gl(M, D);
              }
              return null;
            }
            function oe(M, O, D, Y, ee) {
              if (
                (typeof Y == 'string' && Y !== '') ||
                typeof Y == 'number' ||
                typeof Y == 'bigint'
              )
                return ((M = M.get(D) || null), C(O, M, '' + Y, ee));
              if (typeof Y == 'object' && Y !== null) {
                switch (Y.$$typeof) {
                  case nu:
                    return (
                      (M = M.get(Y.key === null ? D : Y.key) || null),
                      N(O, M, Y, ee)
                    );
                  case na:
                    return (
                      (M = M.get(Y.key === null ? D : Y.key) || null),
                      H(O, M, Y, ee)
                    );
                  case fn:
                    var Oe = Y._init;
                    return ((Y = Oe(Y._payload)), oe(M, O, D, Y, ee));
                }
                if (au(Y) || s(Y))
                  return ((M = M.get(D) || null), K(O, M, Y, ee, null));
                if (typeof Y.then == 'function') return oe(M, O, D, Vl(Y), ee);
                if (Y.$$typeof === sn) return oe(M, O, D, Wl(O, Y), ee);
                Gl(O, Y);
              }
              return null;
            }
            function St(M, O, D, Y) {
              for (
                var ee = null, Oe = null, ae = O, ge = (O = 0), Ye = null;
                ae !== null && ge < D.length;
                ge++
              ) {
                ae.index > ge ? ((Ye = ae), (ae = null)) : (Ye = ae.sibling);
                var Ee = $(M, ae, D[ge], Y);
                if (Ee === null) {
                  ae === null && (ae = Ye);
                  break;
                }
                (e && ae && Ee.alternate === null && t(M, ae),
                  (O = f(Ee, O, ge)),
                  Oe === null ? (ee = Ee) : (Oe.sibling = Ee),
                  (Oe = Ee),
                  (ae = Ye));
              }
              if (ge === D.length) return (a(M, ae), ye && ce(M, ge), ee);
              if (ae === null) {
                for (; ge < D.length; ge++)
                  ((ae = I(M, D[ge], Y)),
                    ae !== null &&
                      ((O = f(ae, O, ge)),
                      Oe === null ? (ee = ae) : (Oe.sibling = ae),
                      (Oe = ae)));
                return (ye && ce(M, ge), ee);
              }
              for (ae = u(ae); ge < D.length; ge++)
                ((Ye = oe(ae, M, ge, D[ge], Y)),
                  Ye !== null &&
                    (e &&
                      Ye.alternate !== null &&
                      ae.delete(Ye.key === null ? ge : Ye.key),
                    (O = f(Ye, O, ge)),
                    Oe === null ? (ee = Ye) : (Oe.sibling = Ye),
                    (Oe = Ye)));
              return (
                e &&
                  ae.forEach(function (En) {
                    return t(M, En);
                  }),
                ye && ce(M, ge),
                ee
              );
            }
            function fl(M, O, D, Y) {
              if (D == null) throw Error(o(151));
              for (
                var ee = null,
                  Oe = null,
                  ae = O,
                  ge = (O = 0),
                  Ye = null,
                  Ee = D.next();
                ae !== null && !Ee.done;
                ge++, Ee = D.next()
              ) {
                ae.index > ge ? ((Ye = ae), (ae = null)) : (Ye = ae.sibling);
                var En = $(M, ae, Ee.value, Y);
                if (En === null) {
                  ae === null && (ae = Ye);
                  break;
                }
                (e && ae && En.alternate === null && t(M, ae),
                  (O = f(En, O, ge)),
                  Oe === null ? (ee = En) : (Oe.sibling = En),
                  (Oe = En),
                  (ae = Ye));
              }
              if (Ee.done) return (a(M, ae), ye && ce(M, ge), ee);
              if (ae === null) {
                for (; !Ee.done; ge++, Ee = D.next())
                  ((Ee = I(M, Ee.value, Y)),
                    Ee !== null &&
                      ((O = f(Ee, O, ge)),
                      Oe === null ? (ee = Ee) : (Oe.sibling = Ee),
                      (Oe = Ee)));
                return (ye && ce(M, ge), ee);
              }
              for (ae = u(ae); !Ee.done; ge++, Ee = D.next())
                ((Ee = oe(ae, M, ge, Ee.value, Y)),
                  Ee !== null &&
                    (e &&
                      Ee.alternate !== null &&
                      ae.delete(Ee.key === null ? ge : Ee.key),
                    (O = f(Ee, O, ge)),
                    Oe === null ? (ee = Ee) : (Oe.sibling = Ee),
                    (Oe = Ee)));
              return (
                e &&
                  ae.forEach(function (j0) {
                    return t(M, j0);
                  }),
                ye && ce(M, ge),
                ee
              );
            }
            function Qn(M, O, D, Y) {
              if (
                (typeof D == 'object' &&
                  D !== null &&
                  D.type === aa &&
                  D.key === null &&
                  (D = D.props.children),
                typeof D == 'object' && D !== null)
              ) {
                switch (D.$$typeof) {
                  case nu:
                    e: {
                      for (var ee = D.key; O !== null; ) {
                        if (O.key === ee) {
                          if (((ee = D.type), ee === aa)) {
                            if (O.tag === 7) {
                              (a(M, O.sibling),
                                (Y = r(O, D.props.children)),
                                (Y.return = M),
                                (M = Y));
                              break e;
                            }
                          } else if (
                            O.elementType === ee ||
                            (typeof ee == 'object' &&
                              ee !== null &&
                              ee.$$typeof === fn &&
                              oc(ee) === O.type)
                          ) {
                            (a(M, O.sibling),
                              (Y = r(O, D.props)),
                              Ya(Y, D),
                              (Y.return = M),
                              (M = Y));
                            break e;
                          }
                          a(M, O);
                          break;
                        } else t(M, O);
                        O = O.sibling;
                      }
                      D.type === aa
                        ? ((Y = zn(D.props.children, M.mode, Y, D.key)),
                          (Y.return = M),
                          (M = Y))
                        : ((Y = tu(D.type, D.key, D.props, null, M.mode, Y)),
                          Ya(Y, D),
                          (Y.return = M),
                          (M = Y));
                    }
                    return y(M);
                  case na:
                    e: {
                      for (ee = D.key; O !== null; ) {
                        if (O.key === ee)
                          if (
                            O.tag === 4 &&
                            O.stateNode.containerInfo === D.containerInfo &&
                            O.stateNode.implementation === D.implementation
                          ) {
                            (a(M, O.sibling),
                              (Y = r(O, D.children || [])),
                              (Y.return = M),
                              (M = Y));
                            break e;
                          } else {
                            a(M, O);
                            break;
                          }
                        else t(M, O);
                        O = O.sibling;
                      }
                      ((Y = fr(D, M.mode, Y)), (Y.return = M), (M = Y));
                    }
                    return y(M);
                  case fn:
                    return (
                      (ee = D._init),
                      (D = ee(D._payload)),
                      Qn(M, O, D, Y)
                    );
                }
                if (au(D)) return St(M, O, D, Y);
                if (s(D)) {
                  if (((ee = s(D)), typeof ee != 'function'))
                    throw Error(o(150));
                  return ((D = ee.call(D)), fl(M, O, D, Y));
                }
                if (typeof D.then == 'function') return Qn(M, O, Vl(D), Y);
                if (D.$$typeof === sn) return Qn(M, O, Wl(M, D), Y);
                Gl(M, D);
              }
              return (typeof D == 'string' && D !== '') ||
                typeof D == 'number' ||
                typeof D == 'bigint'
                ? ((D = '' + D),
                  O !== null && O.tag === 6
                    ? (a(M, O.sibling), (Y = r(O, D)), (Y.return = M), (M = Y))
                    : (a(M, O),
                      (Y = sr(D, M.mode, Y)),
                      (Y.return = M),
                      (M = Y)),
                  y(M))
                : a(M, O);
            }
            return function (M, O, D, Y) {
              try {
                ll = 0;
                var ee = Qn(M, O, D, Y);
                return ((va = null), ee);
              } catch (ae) {
                if (ae === al) throw ae;
                var Oe = i(29, ae, null, M.mode);
                return ((Oe.lanes = Y), (Oe.return = M), Oe);
              } finally {
              }
            };
          }
          function sc(e, t) {
            ((e = Jt), b(mu, e), b(ha, t), (Jt = e | t.baseLanes));
          }
          function mi() {
            (b(mu, Jt), b(ha, ha.current));
          }
          function vi() {
            ((Jt = mu.current), _(ha), _(mu));
          }
          function nn(e) {
            var t = e.alternate;
            (b(qe, qe.current & 1),
              b(gt, e),
              Mt === null &&
                (t === null ||
                  ha.current !== null ||
                  t.memoizedState !== null) &&
                (Mt = e));
          }
          function fc(e) {
            if (e.tag === 22) {
              if ((b(qe, qe.current), b(gt, e), Mt === null)) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Mt = e);
              }
            } else an();
          }
          function an() {
            (b(qe, qe.current), b(gt, gt.current));
          }
          function Bt(e) {
            (_(gt), Mt === e && (Mt = null), _(qe));
          }
          function Yl(e) {
            for (var t = e; t !== null; ) {
              if (t.tag === 13) {
                var a = t.memoizedState;
                if (
                  a !== null &&
                  ((a = a.dehydrated), a === null || _r(a) || Rr(a))
                )
                  return t;
              } else if (
                t.tag === 19 &&
                t.memoizedProps.revealOrder !== void 0
              ) {
                if ((t.flags & 128) !== 0) return t;
              } else if (t.child !== null) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return null;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
            return null;
          }
          function je() {
            throw Error(o(321));
          }
          function hi(e, t) {
            if (t === null) return !1;
            for (var a = 0; a < t.length && a < e.length; a++)
              if (!st(e[a], t[a])) return !1;
            return !0;
          }
          function yi(e, t, a, u, r, f) {
            return (
              (vn = f),
              (se = t),
              (t.memoizedState = null),
              (t.updateQueue = null),
              (t.lanes = 0),
              (ue.H = e === null || e.memoizedState === null ? Bn : hn),
              (Hn = !1),
              (f = a(u, r)),
              (Hn = !1),
              ya && (f = pc(t, a, u, r)),
              dc(e),
              f
            );
          }
          function dc(e) {
            ue.H = zt;
            var t = Ce !== null && Ce.next !== null;
            if (
              ((vn = 0),
              (He = Ce = se = null),
              (vu = !1),
              (ul = 0),
              (ga = null),
              t)
            )
              throw Error(o(300));
            e === null ||
              Ve ||
              ((e = e.dependencies), e !== null && Jl(e) && (Ve = !0));
          }
          function pc(e, t, a, u) {
            se = e;
            var r = 0;
            do {
              if ((ya && (ga = null), (ul = 0), (ya = !1), 25 <= r))
                throw Error(o(301));
              if (((r += 1), (He = Ce = null), e.updateQueue != null)) {
                var f = e.updateQueue;
                ((f.lastEffect = null),
                  (f.events = null),
                  (f.stores = null),
                  f.memoCache != null && (f.memoCache.index = 0));
              }
              ((ue.H = Ln), (f = t(a, u)));
            } while (ya);
            return f;
          }
          function Dp() {
            var e = ue.H,
              t = e.useState()[0];
            return (
              (t = typeof t.then == 'function' ? Qa(t) : t),
              (e = e.useState()[0]),
              (Ce !== null ? Ce.memoizedState : null) !== e &&
                (se.flags |= 1024),
              t
            );
          }
          function gi() {
            var e = hu !== 0;
            return ((hu = 0), e);
          }
          function Ei(e, t, a) {
            ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a));
          }
          function Si(e) {
            if (vu) {
              for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                (t !== null && (t.pending = null), (e = e.next));
              }
              vu = !1;
            }
            ((vn = 0),
              (He = Ce = se = null),
              (ya = !1),
              (ul = hu = 0),
              (ga = null));
          }
          function ke() {
            var e = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null,
            };
            return (
              He === null ? (se.memoizedState = He = e) : (He = He.next = e),
              He
            );
          }
          function Ue() {
            if (Ce === null) {
              var e = se.alternate;
              e = e !== null ? e.memoizedState : null;
            } else e = Ce.next;
            var t = He === null ? se.memoizedState : He.next;
            if (t !== null) ((He = t), (Ce = e));
            else {
              if (e === null)
                throw se.alternate === null ? Error(o(467)) : Error(o(310));
              ((Ce = e),
                (e = {
                  memoizedState: Ce.memoizedState,
                  baseState: Ce.baseState,
                  baseQueue: Ce.baseQueue,
                  queue: Ce.queue,
                  next: null,
                }),
                He === null ? (se.memoizedState = He = e) : (He = He.next = e));
            }
            return He;
          }
          function Qa(e) {
            var t = ul;
            return (
              (ul += 1),
              ga === null && (ga = []),
              (e = ic(ga, e, t)),
              (t = se),
              (He === null ? t.memoizedState : He.next) === null &&
                ((t = t.alternate),
                (ue.H = t === null || t.memoizedState === null ? Bn : hn)),
              e
            );
          }
          function Ql(e) {
            if (e !== null && typeof e == 'object') {
              if (typeof e.then == 'function') return Qa(e);
              if (e.$$typeof === sn) return Ze(e);
            }
            throw Error(o(438, String(e)));
          }
          function Ci(e) {
            var t = null,
              a = se.updateQueue;
            if ((a !== null && (t = a.memoCache), t == null)) {
              var u = se.alternate;
              u !== null &&
                ((u = u.updateQueue),
                u !== null &&
                  ((u = u.memoCache),
                  u != null &&
                    (t = {
                      data: u.data.map(function (r) {
                        return r.slice();
                      }),
                      index: 0,
                    })));
            }
            if (
              (t == null && (t = { data: [], index: 0 }),
              a === null && ((a = Br()), (se.updateQueue = a)),
              (a.memoCache = t),
              (a = t.data[t.index]),
              a === void 0)
            )
              for (a = t.data[t.index] = Array(e), u = 0; u < e; u++) a[u] = nm;
            return (t.index++, a);
          }
          function Lt(e, t) {
            return typeof t == 'function' ? t(e) : t;
          }
          function wl(e) {
            var t = Ue();
            return bi(t, Ce, e);
          }
          function bi(e, t, a) {
            var u = e.queue;
            if (u === null) throw Error(o(311));
            u.lastRenderedReducer = a;
            var r = e.baseQueue,
              f = u.pending;
            if (f !== null) {
              if (r !== null) {
                var y = r.next;
                ((r.next = f.next), (f.next = y));
              }
              ((t.baseQueue = r = f), (u.pending = null));
            }
            if (((f = e.baseState), r === null)) e.memoizedState = f;
            else {
              t = r.next;
              var C = (y = null),
                N = null,
                H = t,
                K = !1;
              do {
                var I = H.lane & -536870913;
                if (I !== H.lane ? (he & I) === I : (vn & I) === I) {
                  var $ = H.revertLane;
                  if ($ === 0)
                    (N !== null &&
                      (N = N.next =
                        {
                          lane: 0,
                          revertLane: 0,
                          action: H.action,
                          hasEagerState: H.hasEagerState,
                          eagerState: H.eagerState,
                          next: null,
                        }),
                      I === da && (K = !0));
                  else if ((vn & $) === $) {
                    ((H = H.next), $ === da && (K = !0));
                    continue;
                  } else
                    ((I = {
                      lane: 0,
                      revertLane: H.revertLane,
                      action: H.action,
                      hasEagerState: H.hasEagerState,
                      eagerState: H.eagerState,
                      next: null,
                    }),
                      N === null ? ((C = N = I), (y = f)) : (N = N.next = I),
                      (se.lanes |= $),
                      (yn |= $));
                  ((I = H.action),
                    Hn && a(f, I),
                    (f = H.hasEagerState ? H.eagerState : a(f, I)));
                } else
                  (($ = {
                    lane: I,
                    revertLane: H.revertLane,
                    action: H.action,
                    hasEagerState: H.hasEagerState,
                    eagerState: H.eagerState,
                    next: null,
                  }),
                    N === null ? ((C = N = $), (y = f)) : (N = N.next = $),
                    (se.lanes |= I),
                    (yn |= I));
                H = H.next;
              } while (H !== null && H !== t);
              if (
                (N === null ? (y = f) : (N.next = C),
                !st(f, e.memoizedState) &&
                  ((Ve = !0), K && ((a = pa), a !== null)))
              )
                throw a;
              ((e.memoizedState = f),
                (e.baseState = y),
                (e.baseQueue = N),
                (u.lastRenderedState = f));
            }
            return (r === null && (u.lanes = 0), [e.memoizedState, u.dispatch]);
          }
          function _i(e) {
            var t = Ue(),
              a = t.queue;
            if (a === null) throw Error(o(311));
            a.lastRenderedReducer = e;
            var u = a.dispatch,
              r = a.pending,
              f = t.memoizedState;
            if (r !== null) {
              a.pending = null;
              var y = (r = r.next);
              do ((f = e(f, y.action)), (y = y.next));
              while (y !== r);
              (st(f, t.memoizedState) || (Ve = !0),
                (t.memoizedState = f),
                t.baseQueue === null && (t.baseState = f),
                (a.lastRenderedState = f));
            }
            return [f, u];
          }
          function mc(e, t, a) {
            var u = se,
              r = Ue(),
              f = ye;
            if (f) {
              if (a === void 0) throw Error(o(407));
              a = a();
            } else a = t();
            var y = !st((Ce || r).memoizedState, a);
            if (
              (y && ((r.memoizedState = a), (Ve = !0)),
              (r = r.queue),
              Ti(yc.bind(null, u, r, e), [e]),
              r.getSnapshot !== t ||
                y ||
                (He !== null && He.memoizedState.tag & 1))
            ) {
              if (
                ((u.flags |= 2048),
                In(9, hc.bind(null, u, r, a, t), { destroy: void 0 }, null),
                _e === null)
              )
                throw Error(o(349));
              f || (vn & 60) !== 0 || vc(u, t, a);
            }
            return a;
          }
          function vc(e, t, a) {
            ((e.flags |= 16384),
              (e = { getSnapshot: t, value: a }),
              (t = se.updateQueue),
              t === null
                ? ((t = Br()), (se.updateQueue = t), (t.stores = [e]))
                : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
          }
          function hc(e, t, a, u) {
            ((t.value = a), (t.getSnapshot = u), gc(t) && Ec(e));
          }
          function yc(e, t, a) {
            return a(function () {
              gc(t) && Ec(e);
            });
          }
          function gc(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
              var a = t();
              return !st(e, a);
            } catch {
              return !0;
            }
          }
          function Ec(e) {
            var t = kt(e, 2);
            t !== null && We(t, e, 2);
          }
          function Ri(e) {
            var t = ke();
            if (typeof e == 'function') {
              var a = e;
              if (((e = a()), Hn)) {
                L(!0);
                try {
                  a();
                } finally {
                  L(!1);
                }
              }
            }
            return (
              (t.memoizedState = t.baseState = e),
              (t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Lt,
                lastRenderedState: e,
              }),
              t
            );
          }
          function Sc(e, t, a, u) {
            return (
              (e.baseState = a),
              bi(e, Ce, typeof u == 'function' ? u : Lt)
            );
          }
          function xp(e, t, a, u, r) {
            if (Xl(e)) throw Error(o(485));
            if (((e = t.action), e !== null)) {
              var f = {
                payload: r,
                action: e,
                next: null,
                isTransition: !0,
                status: 'pending',
                value: null,
                reason: null,
                listeners: [],
                then: function (y) {
                  f.listeners.push(y);
                },
              };
              (ue.T !== null ? a(!0) : (f.isTransition = !1),
                u(f),
                (a = t.pending),
                a === null
                  ? ((f.next = t.pending = f), Cc(t, f))
                  : ((f.next = a.next), (t.pending = a.next = f)));
            }
          }
          function Cc(e, t) {
            var a = t.action,
              u = t.payload,
              r = e.state;
            if (t.isTransition) {
              var f = ue.T,
                y = {};
              ue.T = y;
              try {
                var C = a(r, u),
                  N = ue.S;
                (N !== null && N(y, C), bc(e, t, C));
              } catch (H) {
                Oi(e, t, H);
              } finally {
                ue.T = f;
              }
            } else
              try {
                ((f = a(r, u)), bc(e, t, f));
              } catch (H) {
                Oi(e, t, H);
              }
          }
          function bc(e, t, a) {
            a !== null && typeof a == 'object' && typeof a.then == 'function'
              ? a.then(
                  function (u) {
                    _c(e, t, u);
                  },
                  function (u) {
                    return Oi(e, t, u);
                  }
                )
              : _c(e, t, a);
          }
          function _c(e, t, a) {
            ((t.status = 'fulfilled'),
              (t.value = a),
              Rc(t),
              (e.state = a),
              (t = e.pending),
              t !== null &&
                ((a = t.next),
                a === t
                  ? (e.pending = null)
                  : ((a = a.next), (t.next = a), Cc(e, a))));
          }
          function Oi(e, t, a) {
            var u = e.pending;
            if (((e.pending = null), u !== null)) {
              u = u.next;
              do ((t.status = 'rejected'), (t.reason = a), Rc(t), (t = t.next));
              while (t !== u);
            }
            e.action = null;
          }
          function Rc(e) {
            e = e.listeners;
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
          function Oc(e, t) {
            return t;
          }
          function Tc(e, t) {
            if (ye) {
              var a = _e.formState;
              if (a !== null) {
                e: {
                  var u = se;
                  if (ye) {
                    if (Je) {
                      var r = Pm(Je, At);
                      if (r) {
                        ((Je = Ef(r)), (u = Jm(r)));
                        break e;
                      }
                    }
                    xe(u);
                  }
                  u = !1;
                }
                u && (t = a[0]);
              }
            }
            ((a = ke()),
              (a.memoizedState = a.baseState = t),
              (u = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Oc,
                lastRenderedState: t,
              }),
              (a.queue = u),
              (a = wc.bind(null, se, u)),
              (u.dispatch = a),
              (u = Ri(!1)));
            var f = zi.bind(null, se, !1, u.queue);
            return (
              (u = ke()),
              (r = { state: t, dispatch: null, action: e, pending: null }),
              (u.queue = r),
              (a = xp.bind(null, se, r, f, a)),
              (r.dispatch = a),
              (u.memoizedState = e),
              [t, a, !1]
            );
          }
          function Nc(e) {
            var t = Ue();
            return Ac(t, Ce, e);
          }
          function Ac(e, t, a) {
            ((t = bi(e, t, Oc)[0]),
              (e = wl(Lt)[0]),
              (t =
                typeof t == 'object' &&
                t !== null &&
                typeof t.then == 'function'
                  ? Qa(t)
                  : t));
            var u = Ue(),
              r = u.queue,
              f = r.dispatch;
            return (
              a !== u.memoizedState &&
                ((se.flags |= 2048),
                In(9, jp.bind(null, r, a), { destroy: void 0 }, null)),
              [t, f, e]
            );
          }
          function jp(e, t) {
            e.action = t;
          }
          function Mc(e) {
            var t = Ue(),
              a = Ce;
            if (a !== null) return Ac(t, a, e);
            (Ue(), (t = t.memoizedState), (a = Ue()));
            var u = a.queue.dispatch;
            return ((a.memoizedState = e), [t, u, !1]);
          }
          function In(e, t, a, u) {
            return (
              (e = { tag: e, create: t, inst: a, deps: u, next: null }),
              (t = se.updateQueue),
              t === null && ((t = Br()), (se.updateQueue = t)),
              (a = t.lastEffect),
              a === null
                ? (t.lastEffect = e.next = e)
                : ((u = a.next),
                  (a.next = e),
                  (e.next = u),
                  (t.lastEffect = e)),
              e
            );
          }
          function zc() {
            return Ue().memoizedState;
          }
          function Kl(e, t, a, u) {
            var r = ke();
            ((se.flags |= e),
              (r.memoizedState = In(
                1 | t,
                a,
                { destroy: void 0 },
                u === void 0 ? null : u
              )));
          }
          function Zl(e, t, a, u) {
            var r = Ue();
            u = u === void 0 ? null : u;
            var f = r.memoizedState.inst;
            Ce !== null && u !== null && hi(u, Ce.memoizedState.deps)
              ? (r.memoizedState = In(t, a, f, u))
              : ((se.flags |= e), (r.memoizedState = In(1 | t, a, f, u)));
          }
          function Dc(e, t) {
            Kl(8390656, 8, e, t);
          }
          function Ti(e, t) {
            Zl(2048, 8, e, t);
          }
          function xc(e, t) {
            return Zl(4, 2, e, t);
          }
          function jc(e, t) {
            return Zl(4, 4, e, t);
          }
          function Uc(e, t) {
            if (typeof t == 'function') {
              e = e();
              var a = t(e);
              return function () {
                typeof a == 'function' ? a() : t(null);
              };
            }
            if (t != null)
              return (
                (e = e()),
                (t.current = e),
                function () {
                  t.current = null;
                }
              );
          }
          function Hc(e, t, a) {
            ((a = a != null ? a.concat([e]) : null),
              Zl(4, 4, Uc.bind(null, t, e), a));
          }
          function Ni() {}
          function Bc(e, t) {
            var a = Ue();
            t = t === void 0 ? null : t;
            var u = a.memoizedState;
            return t !== null && hi(t, u[1])
              ? u[0]
              : ((a.memoizedState = [e, t]), e);
          }
          function Lc(e, t) {
            var a = Ue();
            t = t === void 0 ? null : t;
            var u = a.memoizedState;
            if (t !== null && hi(t, u[1])) return u[0];
            if (((u = e()), Hn)) {
              L(!0);
              try {
                e();
              } finally {
                L(!1);
              }
            }
            return ((a.memoizedState = [u, t]), u);
          }
          function Ai(e, t, a) {
            return a === void 0 || (vn & 1073741824) !== 0
              ? (e.memoizedState = t)
              : ((e.memoizedState = a),
                (e = js()),
                (se.lanes |= e),
                (yn |= e),
                a);
          }
          function qc(e, t, a, u) {
            return st(a, t)
              ? a
              : ha.current !== null
                ? ((e = Ai(e, a, u)), st(e, t) || (Ve = !0), e)
                : (vn & 42) === 0
                  ? ((Ve = !0), (e.memoizedState = a))
                  : ((e = js()), (se.lanes |= e), (yn |= e), t);
          }
          function Vc(e, t, a, u, r) {
            var f = Dn();
            tt(f !== 0 && 8 > f ? f : 8);
            var y = ue.T,
              C = {};
            ((ue.T = C), zi(e, !1, t, a));
            try {
              var N = r(),
                H = ue.S;
              if (
                (H !== null && H(C, N),
                N !== null &&
                  typeof N == 'object' &&
                  typeof N.then == 'function')
              ) {
                var K = zp(N, u);
                wa(e, t, K, it(e));
              } else wa(e, t, u, it(e));
            } catch (I) {
              wa(
                e,
                t,
                { then: function () {}, status: 'rejected', reason: I },
                it()
              );
            } finally {
              (tt(f), (ue.T = y));
            }
          }
          function Gc(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
              memoizedState: la,
              baseState: la,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Lt,
                lastRenderedState: la,
              },
              next: null,
            };
            var a = {};
            return (
              (t.next = {
                memoizedState: a,
                baseState: a,
                baseQueue: null,
                queue: {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: Lt,
                  lastRenderedState: a,
                },
                next: null,
              }),
              (e.memoizedState = t),
              (e = e.alternate),
              e !== null && (e.memoizedState = t),
              t
            );
          }
          function Mi() {
            return Ze(xn);
          }
          function Yc() {
            return Ue().memoizedState;
          }
          function Qc() {
            return Ue().memoizedState;
          }
          function Up(e) {
            for (var t = e.return; t !== null; ) {
              switch (t.tag) {
                case 24:
                case 3:
                  var a = it();
                  e = en(a);
                  var u = tn(t, e, a);
                  (u !== null && (We(u, t, a), qa(u, t, a)),
                    (t = { cache: wi() }),
                    (e.payload = t));
                  return;
              }
              t = t.return;
            }
          }
          function Hp(e, t, a) {
            var u = it();
            ((a = {
              lane: u,
              revertLane: 0,
              action: a,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
              Xl(e)
                ? Kc(t, a)
                : ((a = ci(e, t, a, u)),
                  a !== null && (We(a, e, u), Zc(a, t, u))));
          }
          function wc(e, t, a) {
            var u = it();
            wa(e, t, a, u);
          }
          function wa(e, t, a, u) {
            var r = {
              lane: u,
              revertLane: 0,
              action: a,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
            if (Xl(e)) Kc(t, r);
            else {
              var f = e.alternate;
              if (
                e.lanes === 0 &&
                (f === null || f.lanes === 0) &&
                ((f = t.lastRenderedReducer), f !== null)
              )
                try {
                  var y = t.lastRenderedState,
                    C = f(y, a);
                  if (((r.hasEagerState = !0), (r.eagerState = C), st(C, y)))
                    return (Hl(e, t, r, 0), _e === null && Ul(), !1);
                } catch {
                } finally {
                }
              if (((a = ci(e, t, r, u)), a !== null))
                return (We(a, e, u), Zc(a, t, u), !0);
            }
            return !1;
          }
          function zi(e, t, a, u) {
            if (
              ((u = {
                lane: 2,
                revertLane: si(),
                action: u,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              }),
              Xl(e))
            ) {
              if (t) throw Error(o(479));
            } else ((t = ci(e, a, u, 2)), t !== null && We(t, e, 2));
          }
          function Xl(e) {
            var t = e.alternate;
            return e === se || (t !== null && t === se);
          }
          function Kc(e, t) {
            ya = vu = !0;
            var a = e.pending;
            (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (e.pending = t));
          }
          function Zc(e, t, a) {
            if ((a & 4194176) !== 0) {
              var u = t.lanes;
              ((u &= e.pendingLanes), (a |= u), (t.lanes = a), q(e, a));
            }
          }
          function Di(e, t, a, u) {
            ((t = e.memoizedState),
              (a = a(u, t)),
              (a = a == null ? t : pr({}, t, a)),
              (e.memoizedState = a),
              e.lanes === 0 && (e.updateQueue.baseState = a));
          }
          function Xc(e, t, a, u, r, f, y) {
            return (
              (e = e.stateNode),
              typeof e.shouldComponentUpdate == 'function'
                ? e.shouldComponentUpdate(u, f, y)
                : t.prototype && t.prototype.isPureReactComponent
                  ? !Ll(a, u) || !Ll(r, f)
                  : !0
            );
          }
          function Pc(e, t, a, u) {
            ((e = t.state),
              typeof t.componentWillReceiveProps == 'function' &&
                t.componentWillReceiveProps(a, u),
              typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
                t.UNSAFE_componentWillReceiveProps(a, u),
              t.state !== e && Lr.enqueueReplaceState(t, t.state, null));
          }
          function On(e, t) {
            var a = t;
            if ('ref' in t) {
              a = {};
              for (var u in t) u !== 'ref' && (a[u] = t[u]);
            }
            if ((e = e.defaultProps)) {
              a === t && (a = pr({}, a));
              for (var r in e) a[r] === void 0 && (a[r] = e[r]);
            }
            return a;
          }
          function Pl(e, t) {
            try {
              var a = e.onUncaughtError;
              a(t.value, { componentStack: t.stack });
            } catch (u) {
              setTimeout(function () {
                throw u;
              });
            }
          }
          function Jc(e, t, a) {
            try {
              var u = e.onCaughtError;
              u(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null,
              });
            } catch (r) {
              setTimeout(function () {
                throw r;
              });
            }
          }
          function xi(e, t, a) {
            return (
              (a = en(a)),
              (a.tag = 3),
              (a.payload = { element: null }),
              (a.callback = function () {
                Pl(e, t);
              }),
              a
            );
          }
          function Wc(e) {
            return ((e = en(e)), (e.tag = 3), e);
          }
          function Fc(e, t, a, u) {
            var r = a.type.getDerivedStateFromError;
            if (typeof r == 'function') {
              var f = u.value;
              ((e.payload = function () {
                return r(f);
              }),
                (e.callback = function () {
                  Jc(t, a, u);
                }));
            }
            var y = a.stateNode;
            y !== null &&
              typeof y.componentDidCatch == 'function' &&
              (e.callback = function () {
                (Jc(t, a, u),
                  typeof r != 'function' &&
                    (gn === null ? (gn = new Set([this])) : gn.add(this)));
                var C = u.stack;
                this.componentDidCatch(u.value, {
                  componentStack: C !== null ? C : '',
                });
              });
          }
          function Bp(e, t, a, u, r) {
            if (
              ((a.flags |= 32768),
              u !== null && typeof u == 'object' && typeof u.then == 'function')
            ) {
              if (
                ((t = a.alternate),
                t !== null && Za(t, a, r, !0),
                (a = gt.current),
                a !== null)
              ) {
                switch (a.tag) {
                  case 13:
                    return (
                      Mt === null
                        ? ir()
                        : a.alternate === null && De === 0 && (De = 3),
                      (a.flags &= -257),
                      (a.flags |= 65536),
                      (a.lanes = r),
                      u === pu
                        ? (a.flags |= 16384)
                        : ((t = a.updateQueue),
                          t === null
                            ? (a.updateQueue = new Set([u]))
                            : t.add(u),
                          or(e, u, r)),
                      !1
                    );
                  case 22:
                    return (
                      (a.flags |= 65536),
                      u === pu
                        ? (a.flags |= 16384)
                        : ((t = a.updateQueue),
                          t === null
                            ? ((t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([u]),
                              }),
                              (a.updateQueue = t))
                            : ((a = t.retryQueue),
                              a === null
                                ? (t.retryQueue = new Set([u]))
                                : a.add(u)),
                          or(e, u, r)),
                      !1
                    );
                }
                throw Error(o(435, a.tag));
              }
              return (or(e, u, r), ir(), !1);
            }
            if (ye)
              return (
                (t = gt.current),
                t !== null
                  ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                    (t.flags |= 65536),
                    (t.lanes = r),
                    u !== Mr &&
                      ((e = Error(o(422), { cause: u })), La(P(e, a))))
                  : (u !== Mr &&
                      ((t = Error(o(423), { cause: u })), La(P(t, a))),
                    (e = e.current.alternate),
                    (e.flags |= 65536),
                    (r &= -r),
                    (e.lanes |= r),
                    (u = P(u, a)),
                    (r = xi(e.stateNode, u, r)),
                    pi(e, r),
                    De !== 4 && (De = 2)),
                !1
              );
            var f = Error(o(520), { cause: u });
            if (
              ((f = P(f, a)),
              rl === null ? (rl = [f]) : rl.push(f),
              De !== 4 && (De = 2),
              t === null)
            )
              return !0;
            ((u = P(u, a)), (a = t));
            do {
              switch (a.tag) {
                case 3:
                  return (
                    (a.flags |= 65536),
                    (e = r & -r),
                    (a.lanes |= e),
                    (e = xi(a.stateNode, u, e)),
                    pi(a, e),
                    !1
                  );
                case 1:
                  if (
                    ((t = a.type),
                    (f = a.stateNode),
                    (a.flags & 128) === 0 &&
                      (typeof t.getDerivedStateFromError == 'function' ||
                        (f !== null &&
                          typeof f.componentDidCatch == 'function' &&
                          (gn === null || !gn.has(f)))))
                  )
                    return (
                      (a.flags |= 65536),
                      (r &= -r),
                      (a.lanes |= r),
                      (r = Wc(r)),
                      Fc(r, e, a, u),
                      pi(a, r),
                      !1
                    );
              }
              a = a.return;
            } while (a !== null);
            return !1;
          }
          function we(e, t, a, u) {
            t.child = e === null ? jf(t, null, a, u) : Un(t, e.child, a, u);
          }
          function Ic(e, t, a, u, r) {
            a = a.render;
            var f = t.ref;
            if ('ref' in u) {
              var y = {};
              for (var C in u) C !== 'ref' && (y[C] = u[C]);
            } else y = u;
            return (
              Tn(t),
              (u = yi(e, t, a, y, f, r)),
              (C = gi()),
              e !== null && !Ve
                ? (Ei(e, t, r), qt(e, t, r))
                : (ye && C && U(t), (t.flags |= 1), we(e, t, u, r), t.child)
            );
          }
          function $c(e, t, a, u, r) {
            if (e === null) {
              var f = a.type;
              return typeof f == 'function' &&
                !cr(f) &&
                f.defaultProps === void 0 &&
                a.compare === null
                ? ((t.tag = 15), (t.type = f), kc(e, t, f, u, r))
                : ((e = tu(a.type, null, u, t, t.mode, r)),
                  (e.ref = t.ref),
                  (e.return = t),
                  (t.child = e));
            }
            if (((f = e.child), !Gi(e, r))) {
              var y = f.memoizedProps;
              if (
                ((a = a.compare),
                (a = a !== null ? a : Ll),
                a(y, u) && e.ref === t.ref)
              )
                return qt(e, t, r);
            }
            return (
              (t.flags |= 1),
              (e = cn(f, u)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e)
            );
          }
          function kc(e, t, a, u, r) {
            if (e !== null) {
              var f = e.memoizedProps;
              if (Ll(f, u) && e.ref === t.ref)
                if (((Ve = !1), (t.pendingProps = u = f), Gi(e, r)))
                  (e.flags & 131072) !== 0 && (Ve = !0);
                else return ((t.lanes = e.lanes), qt(e, t, r));
            }
            return ji(e, t, a, u, r);
          }
          function es(e, t, a) {
            var u = t.pendingProps,
              r = u.children,
              f = (t.stateNode._pendingVisibility & 2) !== 0,
              y = e !== null ? e.memoizedState : null;
            if ((Ka(e, t), u.mode === 'hidden' || f)) {
              if ((t.flags & 128) !== 0) {
                if (((u = y !== null ? y.baseLanes | a : a), e !== null)) {
                  for (r = t.child = e.child, f = 0; r !== null; )
                    ((f = f | r.lanes | r.childLanes), (r = r.sibling));
                  t.childLanes = f & ~u;
                } else ((t.childLanes = 0), (t.child = null));
                return ts(e, t, u, a);
              }
              if ((a & 536870912) !== 0)
                ((t.memoizedState = { baseLanes: 0, cachePool: null }),
                  e !== null && Fl(t, y !== null ? y.cachePool : null),
                  y !== null ? sc(t, y) : mi(),
                  fc(t));
              else
                return (
                  (t.lanes = t.childLanes = 536870912),
                  ts(e, t, y !== null ? y.baseLanes | a : a, a)
                );
            } else
              y !== null
                ? (Fl(t, y.cachePool), sc(t, y), an(), (t.memoizedState = null))
                : (e !== null && Fl(t, null), mi(), an());
            return (we(e, t, r, a), t.child);
          }
          function ts(e, t, a, u) {
            var r = Ki();
            return (
              (r =
                r === null
                  ? null
                  : {
                      parent: Qt ? Me._currentValue : Me._currentValue2,
                      pool: r,
                    }),
              (t.memoizedState = { baseLanes: a, cachePool: r }),
              e !== null && Fl(t, null),
              mi(),
              fc(t),
              e !== null && Za(e, t, u, !0),
              null
            );
          }
          function Ka(e, t) {
            var a = t.ref;
            if (a === null)
              e !== null && e.ref !== null && (t.flags |= 2097664);
            else {
              if (typeof a != 'function' && typeof a != 'object')
                throw Error(o(284));
              (e === null || e.ref !== a) && (t.flags |= 2097664);
            }
          }
          function ji(e, t, a, u, r) {
            return (
              Tn(t),
              (a = yi(e, t, a, u, void 0, r)),
              (u = gi()),
              e !== null && !Ve
                ? (Ei(e, t, r), qt(e, t, r))
                : (ye && u && U(t), (t.flags |= 1), we(e, t, a, r), t.child)
            );
          }
          function ns(e, t, a, u, r, f) {
            return (
              Tn(t),
              (t.updateQueue = null),
              (a = pc(t, u, a, r)),
              dc(e),
              (u = gi()),
              e !== null && !Ve
                ? (Ei(e, t, f), qt(e, t, f))
                : (ye && u && U(t), (t.flags |= 1), we(e, t, a, f), t.child)
            );
          }
          function as(e, t, a, u, r) {
            if ((Tn(t), t.stateNode === null)) {
              var f = ia,
                y = a.contextType;
              (typeof y == 'object' && y !== null && (f = Ze(y)),
                (f = new a(u, f)),
                (t.memoizedState =
                  f.state !== null && f.state !== void 0 ? f.state : null),
                (f.updater = Lr),
                (t.stateNode = f),
                (f._reactInternals = t),
                (f = t.stateNode),
                (f.props = u),
                (f.state = t.memoizedState),
                (f.refs = {}),
                fi(t),
                (y = a.contextType),
                (f.context = typeof y == 'object' && y !== null ? Ze(y) : ia),
                (f.state = t.memoizedState),
                (y = a.getDerivedStateFromProps),
                typeof y == 'function' &&
                  (Di(t, a, y, u), (f.state = t.memoizedState)),
                typeof a.getDerivedStateFromProps == 'function' ||
                  typeof f.getSnapshotBeforeUpdate == 'function' ||
                  (typeof f.UNSAFE_componentWillMount != 'function' &&
                    typeof f.componentWillMount != 'function') ||
                  ((y = f.state),
                  typeof f.componentWillMount == 'function' &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == 'function' &&
                    f.UNSAFE_componentWillMount(),
                  y !== f.state && Lr.enqueueReplaceState(f, f.state, null),
                  Ga(t, u, f, r),
                  Va(),
                  (f.state = t.memoizedState)),
                typeof f.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (u = !0));
            } else if (e === null) {
              f = t.stateNode;
              var C = t.memoizedProps,
                N = On(a, C);
              f.props = N;
              var H = f.context,
                K = a.contextType;
              ((y = ia), typeof K == 'object' && K !== null && (y = Ze(K)));
              var I = a.getDerivedStateFromProps;
              ((K =
                typeof I == 'function' ||
                typeof f.getSnapshotBeforeUpdate == 'function'),
                (C = t.pendingProps !== C),
                K ||
                  (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
                    typeof f.componentWillReceiveProps != 'function') ||
                  ((C || H !== y) && Pc(t, f, u, y)),
                (mn = !1));
              var $ = t.memoizedState;
              ((f.state = $),
                Ga(t, u, f, r),
                Va(),
                (H = t.memoizedState),
                C || $ !== H || mn
                  ? (typeof I == 'function' &&
                      (Di(t, a, I, u), (H = t.memoizedState)),
                    (N = mn || Xc(t, a, N, u, $, H, y))
                      ? (K ||
                          (typeof f.UNSAFE_componentWillMount != 'function' &&
                            typeof f.componentWillMount != 'function') ||
                          (typeof f.componentWillMount == 'function' &&
                            f.componentWillMount(),
                          typeof f.UNSAFE_componentWillMount == 'function' &&
                            f.UNSAFE_componentWillMount()),
                        typeof f.componentDidMount == 'function' &&
                          (t.flags |= 4194308))
                      : (typeof f.componentDidMount == 'function' &&
                          (t.flags |= 4194308),
                        (t.memoizedProps = u),
                        (t.memoizedState = H)),
                    (f.props = u),
                    (f.state = H),
                    (f.context = y),
                    (u = N))
                  : (typeof f.componentDidMount == 'function' &&
                      (t.flags |= 4194308),
                    (u = !1)));
            } else {
              ((f = t.stateNode),
                di(e, t),
                (y = t.memoizedProps),
                (K = On(a, y)),
                (f.props = K),
                (I = t.pendingProps),
                ($ = f.context),
                (H = a.contextType),
                (N = ia),
                typeof H == 'object' && H !== null && (N = Ze(H)),
                (C = a.getDerivedStateFromProps),
                (H =
                  typeof C == 'function' ||
                  typeof f.getSnapshotBeforeUpdate == 'function') ||
                  (typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
                    typeof f.componentWillReceiveProps != 'function') ||
                  ((y !== I || $ !== N) && Pc(t, f, u, N)),
                (mn = !1),
                ($ = t.memoizedState),
                (f.state = $),
                Ga(t, u, f, r),
                Va());
              var oe = t.memoizedState;
              y !== I ||
              $ !== oe ||
              mn ||
              (e !== null && e.dependencies !== null && Jl(e.dependencies))
                ? (typeof C == 'function' &&
                    (Di(t, a, C, u), (oe = t.memoizedState)),
                  (K =
                    mn ||
                    Xc(t, a, K, u, $, oe, N) ||
                    (e !== null &&
                      e.dependencies !== null &&
                      Jl(e.dependencies)))
                    ? (H ||
                        (typeof f.UNSAFE_componentWillUpdate != 'function' &&
                          typeof f.componentWillUpdate != 'function') ||
                        (typeof f.componentWillUpdate == 'function' &&
                          f.componentWillUpdate(u, oe, N),
                        typeof f.UNSAFE_componentWillUpdate == 'function' &&
                          f.UNSAFE_componentWillUpdate(u, oe, N)),
                      typeof f.componentDidUpdate == 'function' &&
                        (t.flags |= 4),
                      typeof f.getSnapshotBeforeUpdate == 'function' &&
                        (t.flags |= 1024))
                    : (typeof f.componentDidUpdate != 'function' ||
                        (y === e.memoizedProps && $ === e.memoizedState) ||
                        (t.flags |= 4),
                      typeof f.getSnapshotBeforeUpdate != 'function' ||
                        (y === e.memoizedProps && $ === e.memoizedState) ||
                        (t.flags |= 1024),
                      (t.memoizedProps = u),
                      (t.memoizedState = oe)),
                  (f.props = u),
                  (f.state = oe),
                  (f.context = N),
                  (u = K))
                : (typeof f.componentDidUpdate != 'function' ||
                    (y === e.memoizedProps && $ === e.memoizedState) ||
                    (t.flags |= 4),
                  typeof f.getSnapshotBeforeUpdate != 'function' ||
                    (y === e.memoizedProps && $ === e.memoizedState) ||
                    (t.flags |= 1024),
                  (u = !1));
            }
            return (
              (f = u),
              Ka(e, t),
              (u = (t.flags & 128) !== 0),
              f || u
                ? ((f = t.stateNode),
                  (a =
                    u && typeof a.getDerivedStateFromError != 'function'
                      ? null
                      : f.render()),
                  (t.flags |= 1),
                  e !== null && u
                    ? ((t.child = Un(t, e.child, null, r)),
                      (t.child = Un(t, null, a, r)))
                    : we(e, t, a, r),
                  (t.memoizedState = f.state),
                  (e = t.child))
                : (e = qt(e, t, r)),
              e
            );
          }
          function ls(e, t, a, u) {
            return (Ba(), (t.flags |= 256), we(e, t, a, u), t.child);
          }
          function Ui(e) {
            return { baseLanes: e, cachePool: ss() };
          }
          function Hi(e, t, a) {
            return (
              (e = e !== null ? e.childLanes & ~a : 0),
              t && (e |= Et),
              e
            );
          }
          function us(e, t, a) {
            var u = t.pendingProps,
              r = !1,
              f = (t.flags & 128) !== 0,
              y;
            if (
              ((y = f) ||
                (y =
                  e !== null && e.memoizedState === null
                    ? !1
                    : (qe.current & 2) !== 0),
              y && ((r = !0), (t.flags &= -129)),
              (y = (t.flags & 32) !== 0),
              (t.flags &= -33),
              e === null)
            ) {
              if (ye) {
                if ((r ? nn(t) : an(), ye)) {
                  var C = Je,
                    N;
                  ((N = C) &&
                    ((C = km(C, At)),
                    C !== null
                      ? ((t.memoizedState = {
                          dehydrated: C,
                          treeContext:
                            jn !== null ? { id: wt, overflow: Kt } : null,
                          retryLane: 536870912,
                        }),
                        (N = i(18, null, null, 0)),
                        (N.stateNode = C),
                        (N.return = t),
                        (t.child = N),
                        (Fe = t),
                        (Je = null),
                        (N = !0))
                      : (N = !1)),
                    N || xe(t));
                }
                if (
                  ((C = t.memoizedState),
                  C !== null && ((C = C.dehydrated), C !== null))
                )
                  return (Rr(C) ? (t.lanes = 16) : (t.lanes = 536870912), null);
                Bt(t);
              }
              return (
                (C = u.children),
                (u = u.fallback),
                r
                  ? (an(),
                    (r = t.mode),
                    (C = Li({ mode: 'hidden', children: C }, r)),
                    (u = zn(u, r, a, null)),
                    (C.return = t),
                    (u.return = t),
                    (C.sibling = u),
                    (t.child = C),
                    (r = t.child),
                    (r.memoizedState = Ui(a)),
                    (r.childLanes = Hi(e, y, a)),
                    (t.memoizedState = qr),
                    u)
                  : (nn(t), Bi(t, C))
              );
            }
            if (
              ((N = e.memoizedState),
              N !== null && ((C = N.dehydrated), C !== null))
            ) {
              if (f)
                t.flags & 256
                  ? (nn(t), (t.flags &= -257), (t = qi(e, t, a)))
                  : t.memoizedState !== null
                    ? (an(), (t.child = e.child), (t.flags |= 128), (t = null))
                    : (an(),
                      (r = u.fallback),
                      (C = t.mode),
                      (u = Li({ mode: 'visible', children: u.children }, C)),
                      (r = zn(r, C, a, null)),
                      (r.flags |= 2),
                      (u.return = t),
                      (r.return = t),
                      (u.sibling = r),
                      (t.child = u),
                      Un(t, e.child, null, a),
                      (u = t.child),
                      (u.memoizedState = Ui(a)),
                      (u.childLanes = Hi(e, y, a)),
                      (t.memoizedState = qr),
                      (t = r));
              else if ((nn(t), Rr(C)))
                ((y = Zm(C).digest),
                  (u = Error(o(419))),
                  (u.stack = ''),
                  (u.digest = y),
                  La({ value: u, source: null, stack: null }),
                  (t = qi(e, t, a)));
              else if (
                (Ve || Za(e, t, a, !1), (y = (a & e.childLanes) !== 0), Ve || y)
              ) {
                if (((y = _e), y !== null)) {
                  if (((u = a & -a), (u & 42) !== 0)) u = 1;
                  else
                    switch (u) {
                      case 2:
                        u = 1;
                        break;
                      case 8:
                        u = 4;
                        break;
                      case 32:
                        u = 16;
                        break;
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                      case 4194304:
                      case 8388608:
                      case 16777216:
                      case 33554432:
                        u = 64;
                        break;
                      case 268435456:
                        u = 134217728;
                        break;
                      default:
                        u = 0;
                    }
                  if (
                    ((u = (u & (y.suspendedLanes | a)) !== 0 ? 0 : u),
                    u !== 0 && u !== N.retryLane)
                  )
                    throw ((N.retryLane = u), kt(e, u), We(y, e, u), Hf);
                }
                (_r(C) || ir(), (t = qi(e, t, a)));
              } else
                _r(C)
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = Jp.bind(null, e)),
                    Xm(C, t),
                    (t = null))
                  : ((e = N.treeContext),
                    pt &&
                      ((Je = Fm(C)),
                      (Fe = t),
                      (ye = !0),
                      (Rt = null),
                      (At = !1),
                      e !== null &&
                        ((vt[ht++] = wt),
                        (vt[ht++] = Kt),
                        (vt[ht++] = jn),
                        (wt = e.id),
                        (Kt = e.overflow),
                        (jn = t))),
                    (t = Bi(t, u.children)),
                    (t.flags |= 4096));
              return t;
            }
            return r
              ? (an(),
                (r = u.fallback),
                (C = t.mode),
                (N = e.child),
                (f = N.sibling),
                (u = cn(N, { mode: 'hidden', children: u.children })),
                (u.subtreeFlags = N.subtreeFlags & 31457280),
                f !== null
                  ? (r = cn(f, r))
                  : ((r = zn(r, C, a, null)), (r.flags |= 2)),
                (r.return = t),
                (u.return = t),
                (u.sibling = r),
                (t.child = u),
                (u = r),
                (r = t.child),
                (C = e.child.memoizedState),
                C === null
                  ? (C = Ui(a))
                  : ((N = C.cachePool),
                    N !== null
                      ? ((f = Qt ? Me._currentValue : Me._currentValue2),
                        (N = N.parent !== f ? { parent: f, pool: f } : N))
                      : (N = ss()),
                    (C = { baseLanes: C.baseLanes | a, cachePool: N })),
                (r.memoizedState = C),
                (r.childLanes = Hi(e, y, a)),
                (t.memoizedState = qr),
                u)
              : (nn(t),
                (a = e.child),
                (e = a.sibling),
                (a = cn(a, { mode: 'visible', children: u.children })),
                (a.return = t),
                (a.sibling = null),
                e !== null &&
                  ((y = t.deletions),
                  y === null
                    ? ((t.deletions = [e]), (t.flags |= 16))
                    : y.push(e)),
                (t.child = a),
                (t.memoizedState = null),
                a);
          }
          function Bi(e, t) {
            return (
              (t = Li({ mode: 'visible', children: t }, e.mode)),
              (t.return = e),
              (e.child = t)
            );
          }
          function Li(e, t) {
            return Ws(e, t, 0, null);
          }
          function qi(e, t, a) {
            return (
              Un(t, e.child, null, a),
              (e = Bi(t, t.pendingProps.children)),
              (e.flags |= 2),
              (t.memoizedState = null),
              e
            );
          }
          function is(e, t, a) {
            e.lanes |= t;
            var u = e.alternate;
            (u !== null && (u.lanes |= t), Yi(e.return, t, a));
          }
          function Vi(e, t, a, u, r) {
            var f = e.memoizedState;
            f === null
              ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: u,
                  tail: a,
                  tailMode: r,
                })
              : ((f.isBackwards = t),
                (f.rendering = null),
                (f.renderingStartTime = 0),
                (f.last = u),
                (f.tail = a),
                (f.tailMode = r));
          }
          function rs(e, t, a) {
            var u = t.pendingProps,
              r = u.revealOrder,
              f = u.tail;
            if ((we(e, t, u.children, a), (u = qe.current), (u & 2) !== 0))
              ((u = (u & 1) | 2), (t.flags |= 128));
            else {
              if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                  if (e.tag === 13) e.memoizedState !== null && is(e, a, t);
                  else if (e.tag === 19) is(e, a, t);
                  else if (e.child !== null) {
                    ((e.child.return = e), (e = e.child));
                    continue;
                  }
                  if (e === t) break e;
                  for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                  }
                  ((e.sibling.return = e.return), (e = e.sibling));
                }
              u &= 1;
            }
            switch ((b(qe, u), r)) {
              case 'forwards':
                for (a = t.child, r = null; a !== null; )
                  ((e = a.alternate),
                    e !== null && Yl(e) === null && (r = a),
                    (a = a.sibling));
                ((a = r),
                  a === null
                    ? ((r = t.child), (t.child = null))
                    : ((r = a.sibling), (a.sibling = null)),
                  Vi(t, !1, r, a, f));
                break;
              case 'backwards':
                for (a = null, r = t.child, t.child = null; r !== null; ) {
                  if (((e = r.alternate), e !== null && Yl(e) === null)) {
                    t.child = r;
                    break;
                  }
                  ((e = r.sibling), (r.sibling = a), (a = r), (r = e));
                }
                Vi(t, !0, a, null, f);
                break;
              case 'together':
                Vi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
            return t.child;
          }
          function qt(e, t, a) {
            if (
              (e !== null && (t.dependencies = e.dependencies),
              (yn |= t.lanes),
              (a & t.childLanes) === 0)
            )
              if (e !== null) {
                if ((Za(e, t, a, !1), (a & t.childLanes) === 0)) return null;
              } else return null;
            if (e !== null && t.child !== e.child) throw Error(o(153));
            if (t.child !== null) {
              for (
                e = t.child,
                  a = cn(e, e.pendingProps),
                  t.child = a,
                  a.return = t;
                e.sibling !== null;

              )
                ((e = e.sibling),
                  (a = a.sibling = cn(e, e.pendingProps)),
                  (a.return = t));
              a.sibling = null;
            }
            return t.child;
          }
          function Gi(e, t) {
            return (e.lanes & t) !== 0
              ? !0
              : ((e = e.dependencies), !!(e !== null && Jl(e)));
          }
          function Lp(e, t, a) {
            switch (t.tag) {
              case 3:
                (Z(t, t.stateNode.containerInfo),
                  ln(t, Me, e.memoizedState.cache),
                  Ba());
                break;
              case 27:
              case 5:
                de(t);
                break;
              case 4:
                Z(t, t.stateNode.containerInfo);
                break;
              case 10:
                ln(t, t.type, t.memoizedProps.value);
                break;
              case 13:
                var u = t.memoizedState;
                if (u !== null)
                  return u.dehydrated !== null
                    ? (nn(t), (t.flags |= 128), null)
                    : (a & t.child.childLanes) !== 0
                      ? us(e, t, a)
                      : (nn(t),
                        (e = qt(e, t, a)),
                        e !== null ? e.sibling : null);
                nn(t);
                break;
              case 19:
                var r = (e.flags & 128) !== 0;
                if (
                  ((u = (a & t.childLanes) !== 0),
                  u || (Za(e, t, a, !1), (u = (a & t.childLanes) !== 0)),
                  r)
                ) {
                  if (u) return rs(e, t, a);
                  t.flags |= 128;
                }
                if (
                  ((r = t.memoizedState),
                  r !== null &&
                    ((r.rendering = null),
                    (r.tail = null),
                    (r.lastEffect = null)),
                  b(qe, qe.current),
                  u)
                )
                  break;
                return null;
              case 22:
              case 23:
                return ((t.lanes = 0), es(e, t, a));
              case 24:
                ln(t, Me, e.memoizedState.cache);
            }
            return qt(e, t, a);
          }
          function os(e, t, a) {
            if (e !== null)
              if (e.memoizedProps !== t.pendingProps) Ve = !0;
              else {
                if (!Gi(e, a) && (t.flags & 128) === 0)
                  return ((Ve = !1), Lp(e, t, a));
                Ve = (e.flags & 131072) !== 0;
              }
            else
              ((Ve = !1), ye && (t.flags & 1048576) !== 0 && S(t, cu, t.index));
            switch (((t.lanes = 0), t.tag)) {
              case 16:
                e: {
                  e = t.pendingProps;
                  var u = t.elementType,
                    r = u._init;
                  if (
                    ((u = r(u._payload)), (t.type = u), typeof u == 'function')
                  )
                    cr(u)
                      ? ((e = On(u, e)),
                        (t.tag = 1),
                        (t = as(null, t, u, e, a)))
                      : ((t.tag = 0), (t = ji(null, t, u, e, a)));
                  else {
                    if (u != null) {
                      if (((r = u.$$typeof), r === vr)) {
                        ((t.tag = 11), (t = Ic(null, t, u, e, a)));
                        break e;
                      } else if (r === gr) {
                        ((t.tag = 14), (t = $c(null, t, u, e, a)));
                        break e;
                      }
                    }
                    throw ((t = p(u) || u), Error(o(306, t, '')));
                  }
                }
                return t;
              case 0:
                return ji(e, t, t.type, t.pendingProps, a);
              case 1:
                return (
                  (u = t.type),
                  (r = On(u, t.pendingProps)),
                  as(e, t, u, r, a)
                );
              case 3:
                e: {
                  if ((Z(t, t.stateNode.containerInfo), e === null))
                    throw Error(o(387));
                  var f = t.pendingProps;
                  ((r = t.memoizedState),
                    (u = r.element),
                    di(e, t),
                    Ga(t, f, null, a));
                  var y = t.memoizedState;
                  if (
                    ((f = y.cache),
                    ln(t, Me, f),
                    f !== r.cache && Qi(t, [Me], a, !0),
                    Va(),
                    (f = y.element),
                    pt && r.isDehydrated)
                  )
                    if (
                      ((r = { element: f, isDehydrated: !1, cache: y.cache }),
                      (t.updateQueue.baseState = r),
                      (t.memoizedState = r),
                      t.flags & 256)
                    ) {
                      t = ls(e, t, f, a);
                      break e;
                    } else if (f !== u) {
                      ((u = P(Error(o(424)), t)), La(u), (t = ls(e, t, f, a)));
                      break e;
                    } else
                      for (
                        pt &&
                          ((Je = Wm(t.stateNode.containerInfo)),
                          (Fe = t),
                          (ye = !0),
                          (Rt = null),
                          (At = !0)),
                          a = jf(t, null, f, a),
                          t.child = a;
                        a;

                      )
                        ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
                  else {
                    if ((Ba(), f === u)) {
                      t = qt(e, t, a);
                      break e;
                    }
                    we(e, t, f, a);
                  }
                  t = t.child;
                }
                return t;
              case 26:
                if (mt)
                  return (
                    Ka(e, t),
                    e === null
                      ? (a = _f(t.type, null, t.pendingProps, null))
                        ? (t.memoizedState = a)
                        : ye ||
                          (t.stateNode = f0(
                            t.type,
                            t.pendingProps,
                            pn.current,
                            t
                          ))
                      : (t.memoizedState = _f(
                          t.type,
                          e.memoizedProps,
                          t.pendingProps,
                          e.memoizedState
                        )),
                    null
                  );
              case 27:
                if (Pe)
                  return (
                    de(t),
                    e === null &&
                      Pe &&
                      ye &&
                      ((u = t.stateNode =
                        Mf(t.type, t.pendingProps, pn.current, Ke.current, !1)),
                      (Fe = t),
                      (At = !0),
                      (Je = Sf(u))),
                    (u = t.pendingProps.children),
                    e !== null || ye
                      ? we(e, t, u, a)
                      : (t.child = Un(t, null, u, a)),
                    Ka(e, t),
                    t.child
                  );
              case 5:
                return (
                  e === null &&
                    ye &&
                    (o0(t.type, t.pendingProps, Ke.current),
                    (r = u = Je) &&
                      ((u = Im(u, t.type, t.pendingProps, At)),
                      u !== null
                        ? ((t.stateNode = u),
                          (Fe = t),
                          (Je = Sf(u)),
                          (At = !1),
                          (r = !0))
                        : (r = !1)),
                    r || xe(t)),
                  de(t),
                  (r = t.type),
                  (f = t.pendingProps),
                  (y = e !== null ? e.memoizedProps : null),
                  (u = f.children),
                  lu(r, f)
                    ? (u = null)
                    : y !== null && lu(r, y) && (t.flags |= 32),
                  t.memoizedState !== null &&
                    ((r = yi(e, t, Dp, null, null, a)),
                    Qt ? (xn._currentValue = r) : (xn._currentValue2 = r)),
                  Ka(e, t),
                  we(e, t, u, a),
                  t.child
                );
              case 6:
                return (
                  e === null &&
                    ye &&
                    (c0(t.pendingProps, Ke.current),
                    (e = a = Je) &&
                      ((a = $m(a, t.pendingProps, At)),
                      a !== null
                        ? ((t.stateNode = a), (Fe = t), (Je = null), (e = !0))
                        : (e = !1)),
                    e || xe(t)),
                  null
                );
              case 13:
                return us(e, t, a);
              case 4:
                return (
                  Z(t, t.stateNode.containerInfo),
                  (u = t.pendingProps),
                  e === null ? (t.child = Un(t, null, u, a)) : we(e, t, u, a),
                  t.child
                );
              case 11:
                return Ic(e, t, t.type, t.pendingProps, a);
              case 7:
                return (we(e, t, t.pendingProps, a), t.child);
              case 8:
                return (we(e, t, t.pendingProps.children, a), t.child);
              case 12:
                return (we(e, t, t.pendingProps.children, a), t.child);
              case 10:
                return (
                  (u = t.pendingProps),
                  ln(t, t.type, u.value),
                  we(e, t, u.children, a),
                  t.child
                );
              case 9:
                return (
                  (r = t.type._context),
                  (u = t.pendingProps.children),
                  Tn(t),
                  (r = Ze(r)),
                  (u = u(r)),
                  (t.flags |= 1),
                  we(e, t, u, a),
                  t.child
                );
              case 14:
                return $c(e, t, t.type, t.pendingProps, a);
              case 15:
                return kc(e, t, t.type, t.pendingProps, a);
              case 19:
                return rs(e, t, a);
              case 22:
                return es(e, t, a);
              case 24:
                return (
                  Tn(t),
                  (u = Ze(Me)),
                  e === null
                    ? ((r = Ki()),
                      r === null &&
                        ((r = _e),
                        (f = wi()),
                        (r.pooledCache = f),
                        f.refCount++,
                        f !== null && (r.pooledCacheLanes |= a),
                        (r = f)),
                      (t.memoizedState = { parent: u, cache: r }),
                      fi(t),
                      ln(t, Me, r))
                    : ((e.lanes & a) !== 0 &&
                        (di(e, t), Ga(t, null, null, a), Va()),
                      (r = e.memoizedState),
                      (f = t.memoizedState),
                      r.parent !== u
                        ? ((r = { parent: u, cache: u }),
                          (t.memoizedState = r),
                          t.lanes === 0 &&
                            (t.memoizedState = t.updateQueue.baseState = r),
                          ln(t, Me, u))
                        : ((u = f.cache),
                          ln(t, Me, u),
                          u !== r.cache && Qi(t, [Me], a, !0))),
                  we(e, t, t.pendingProps.children, a),
                  t.child
                );
              case 29:
                throw t.pendingProps;
            }
            throw Error(o(156, t.tag));
          }
          function ln(e, t, a) {
            Qt
              ? (b(yu, t._currentValue), (t._currentValue = a))
              : (b(yu, t._currentValue2), (t._currentValue2 = a));
          }
          function Vt(e) {
            var t = yu.current;
            (Qt ? (e._currentValue = t) : (e._currentValue2 = t), _(yu));
          }
          function Yi(e, t, a) {
            for (; e !== null; ) {
              var u = e.alternate;
              if (
                ((e.childLanes & t) !== t
                  ? ((e.childLanes |= t), u !== null && (u.childLanes |= t))
                  : u !== null &&
                    (u.childLanes & t) !== t &&
                    (u.childLanes |= t),
                e === a)
              )
                break;
              e = e.return;
            }
          }
          function Qi(e, t, a, u) {
            var r = e.child;
            for (r !== null && (r.return = e); r !== null; ) {
              var f = r.dependencies;
              if (f !== null) {
                var y = r.child;
                f = f.firstContext;
                e: for (; f !== null; ) {
                  var C = f;
                  f = r;
                  for (var N = 0; N < t.length; N++)
                    if (C.context === t[N]) {
                      ((f.lanes |= a),
                        (C = f.alternate),
                        C !== null && (C.lanes |= a),
                        Yi(f.return, a, e),
                        u || (y = null));
                      break e;
                    }
                  f = C.next;
                }
              } else if (r.tag === 18) {
                if (((y = r.return), y === null)) throw Error(o(341));
                ((y.lanes |= a),
                  (f = y.alternate),
                  f !== null && (f.lanes |= a),
                  Yi(y, a, e),
                  (y = null));
              } else y = r.child;
              if (y !== null) y.return = r;
              else
                for (y = r; y !== null; ) {
                  if (y === e) {
                    y = null;
                    break;
                  }
                  if (((r = y.sibling), r !== null)) {
                    ((r.return = y.return), (y = r));
                    break;
                  }
                  y = y.return;
                }
              r = y;
            }
          }
          function Za(e, t, a, u) {
            e = null;
            for (var r = t, f = !1; r !== null; ) {
              if (!f) {
                if ((r.flags & 524288) !== 0) f = !0;
                else if ((r.flags & 262144) !== 0) break;
              }
              if (r.tag === 10) {
                var y = r.alternate;
                if (y === null) throw Error(o(387));
                if (((y = y.memoizedProps), y !== null)) {
                  var C = r.type;
                  st(r.pendingProps.value, y.value) ||
                    (e !== null ? e.push(C) : (e = [C]));
                }
              } else if (r === su.current) {
                if (((y = r.alternate), y === null)) throw Error(o(387));
                y.memoizedState.memoizedState !==
                  r.memoizedState.memoizedState &&
                  (e !== null ? e.push(xn) : (e = [xn]));
              }
              r = r.return;
            }
            (e !== null && Qi(t, e, a, u), (t.flags |= 262144));
          }
          function Jl(e) {
            for (e = e.firstContext; e !== null; ) {
              var t = e.context;
              if (!st(Qt ? t._currentValue : t._currentValue2, e.memoizedValue))
                return !0;
              e = e.next;
            }
            return !1;
          }
          function Tn(e) {
            ((qn = e),
              (Zt = null),
              (e = e.dependencies),
              e !== null && (e.firstContext = null));
          }
          function Ze(e) {
            return cs(qn, e);
          }
          function Wl(e, t) {
            return (qn === null && Tn(e), cs(e, t));
          }
          function cs(e, t) {
            var a = Qt ? t._currentValue : t._currentValue2;
            if (
              ((t = { context: t, memoizedValue: a, next: null }), Zt === null)
            ) {
              if (e === null) throw Error(o(308));
              ((Zt = t),
                (e.dependencies = { lanes: 0, firstContext: t }),
                (e.flags |= 524288));
            } else Zt = Zt.next = t;
            return a;
          }
          function wi() {
            return { controller: new A0(), data: new Map(), refCount: 0 };
          }
          function Xa(e) {
            (e.refCount--,
              e.refCount === 0 &&
                M0(z0, function () {
                  e.controller.abort();
                }));
          }
          function Ki() {
            var e = Vn.current;
            return e !== null ? e : _e.pooledCache;
          }
          function Fl(e, t) {
            t === null ? b(Vn, Vn.current) : b(Vn, t.pool);
          }
          function ss() {
            var e = Ki();
            return e === null
              ? null
              : { parent: Qt ? Me._currentValue : Me._currentValue2, pool: e };
          }
          function at(e) {
            e.flags |= 4;
          }
          function fs(e, t) {
            if (e !== null && e.child === t.child) return !1;
            if ((t.flags & 16) !== 0) return !0;
            for (e = t.child; e !== null; ) {
              if ((e.flags & 13878) !== 0 || (e.subtreeFlags & 13878) !== 0)
                return !0;
              e = e.sibling;
            }
            return !1;
          }
          function Zi(e, t, a, u) {
            if (Xe)
              for (a = t.child; a !== null; ) {
                if (a.tag === 5 || a.tag === 6) Cr(e, a.stateNode);
                else if (
                  !(a.tag === 4 || (Pe && a.tag === 27)) &&
                  a.child !== null
                ) {
                  ((a.child.return = a), (a = a.child));
                  continue;
                }
                if (a === t) break;
                for (; a.sibling === null; ) {
                  if (a.return === null || a.return === t) return;
                  a = a.return;
                }
                ((a.sibling.return = a.return), (a = a.sibling));
              }
            else if (dn)
              for (var r = t.child; r !== null; ) {
                if (r.tag === 5) {
                  var f = r.stateNode;
                  (a && u && (f = yf(f, r.type, r.memoizedProps)), Cr(e, f));
                } else if (r.tag === 6)
                  ((f = r.stateNode),
                    a && u && (f = gf(f, r.memoizedProps)),
                    Cr(e, f));
                else if (r.tag !== 4) {
                  if (r.tag === 22 && r.memoizedState !== null)
                    ((f = r.child),
                      f !== null && (f.return = r),
                      Zi(e, r, !0, !0));
                  else if (r.child !== null) {
                    ((r.child.return = r), (r = r.child));
                    continue;
                  }
                }
                if (r === t) break;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === t) return;
                  r = r.return;
                }
                ((r.sibling.return = r.return), (r = r.sibling));
              }
          }
          function ds(e, t, a, u) {
            if (dn)
              for (var r = t.child; r !== null; ) {
                if (r.tag === 5) {
                  var f = r.stateNode;
                  (a && u && (f = yf(f, r.type, r.memoizedProps)), vf(e, f));
                } else if (r.tag === 6)
                  ((f = r.stateNode),
                    a && u && (f = gf(f, r.memoizedProps)),
                    vf(e, f));
                else if (r.tag !== 4) {
                  if (r.tag === 22 && r.memoizedState !== null)
                    ((f = r.child),
                      f !== null && (f.return = r),
                      ds(
                        e,
                        r,
                        !(
                          r.memoizedProps !== null &&
                          r.memoizedProps.mode === 'manual'
                        ),
                        !0
                      ));
                  else if (r.child !== null) {
                    ((r.child.return = r), (r = r.child));
                    continue;
                  }
                }
                if (r === t) break;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === t) return;
                  r = r.return;
                }
                ((r.sibling.return = r.return), (r = r.sibling));
              }
          }
          function ps(e, t) {
            if (dn && fs(e, t)) {
              e = t.stateNode;
              var a = e.containerInfo,
                u = mf();
              (ds(u, t, !1, !1), (e.pendingChildren = u), at(t), Km(a, u));
            }
          }
          function Xi(e, t, a, u) {
            if (Xe) e.memoizedProps !== u && at(t);
            else if (dn) {
              var r = e.stateNode,
                f = e.memoizedProps;
              if ((e = fs(e, t)) || f !== u) {
                var y = Ke.current;
                ((f = wm(r, a, f, u, !e, null)),
                  f === r
                    ? (t.stateNode = r)
                    : (of(f, a, u, y) && at(t),
                      (t.stateNode = f),
                      e ? Zi(f, t, !1, !1) : at(t)));
              } else t.stateNode = r;
            }
          }
          function Pi(e, t, a) {
            if (ym(t, a)) {
              if (((e.flags |= 16777216), !ff(t, a)))
                if (qs()) e.flags |= 8192;
                else throw ((ma = pu), Hr);
            } else e.flags &= -16777217;
          }
          function ms(e, t) {
            if (p0(t)) {
              if (((e.flags |= 16777216), !Af(t)))
                if (qs()) e.flags |= 8192;
                else throw ((ma = pu), Hr);
            } else e.flags &= -16777217;
          }
          function Il(e, t) {
            (t !== null && (e.flags |= 4),
              e.flags & 16384 &&
                ((t = e.tag !== 22 ? F() : 536870912),
                (e.lanes |= t),
                (Ca |= t)));
          }
          function Pa(e, t) {
            if (!ye)
              switch (e.tailMode) {
                case 'hidden':
                  t = e.tail;
                  for (var a = null; t !== null; )
                    (t.alternate !== null && (a = t), (t = t.sibling));
                  a === null ? (e.tail = null) : (a.sibling = null);
                  break;
                case 'collapsed':
                  a = e.tail;
                  for (var u = null; a !== null; )
                    (a.alternate !== null && (u = a), (a = a.sibling));
                  u === null
                    ? t || e.tail === null
                      ? (e.tail = null)
                      : (e.tail.sibling = null)
                    : (u.sibling = null);
              }
          }
          function Ne(e) {
            var t = e.alternate !== null && e.alternate.child === e.child,
              a = 0,
              u = 0;
            if (t)
              for (var r = e.child; r !== null; )
                ((a |= r.lanes | r.childLanes),
                  (u |= r.subtreeFlags & 31457280),
                  (u |= r.flags & 31457280),
                  (r.return = e),
                  (r = r.sibling));
            else
              for (r = e.child; r !== null; )
                ((a |= r.lanes | r.childLanes),
                  (u |= r.subtreeFlags),
                  (u |= r.flags),
                  (r.return = e),
                  (r = r.sibling));
            return ((e.subtreeFlags |= u), (e.childLanes = a), t);
          }
          function qp(e, t, a) {
            var u = t.pendingProps;
            switch ((J(t), t.tag)) {
              case 16:
              case 15:
              case 0:
              case 11:
              case 7:
              case 8:
              case 12:
              case 9:
              case 14:
                return (Ne(t), null);
              case 1:
                return (Ne(t), null);
              case 3:
                return (
                  (a = t.stateNode),
                  (u = null),
                  e !== null && (u = e.memoizedState.cache),
                  t.memoizedState.cache !== u && (t.flags |= 2048),
                  Vt(Me),
                  le(),
                  a.pendingContext &&
                    ((a.context = a.pendingContext), (a.pendingContext = null)),
                  (e === null || e.child === null) &&
                    (Ha(t)
                      ? at(t)
                      : e === null ||
                        (e.memoizedState.isDehydrated &&
                          (t.flags & 256) === 0) ||
                        ((t.flags |= 1024),
                        Rt !== null && (lr(Rt), (Rt = null)))),
                  ps(e, t),
                  Ne(t),
                  null
                );
              case 26:
                if (mt) {
                  a = t.type;
                  var r = t.memoizedState;
                  return (
                    e === null
                      ? (at(t),
                        r !== null ? (Ne(t), ms(t, r)) : (Ne(t), Pi(t, a, u)))
                      : r
                        ? r !== e.memoizedState
                          ? (at(t), Ne(t), ms(t, r))
                          : (Ne(t), (t.flags &= -16777217))
                        : (Xe ? e.memoizedProps !== u && at(t) : Xi(e, t, a, u),
                          Ne(t),
                          Pi(t, a, u)),
                    null
                  );
                }
              case 27:
                if (Pe) {
                  if (
                    (ve(t),
                    (a = pn.current),
                    (r = t.type),
                    e !== null && t.stateNode != null)
                  )
                    Xe ? e.memoizedProps !== u && at(t) : Xi(e, t, r, u);
                  else {
                    if (!u) {
                      if (t.stateNode === null) throw Error(o(166));
                      return (Ne(t), null);
                    }
                    ((e = Ke.current),
                      Ha(t)
                        ? Qe(t, e)
                        : ((e = Mf(r, u, a, e, !0)), (t.stateNode = e), at(t)));
                  }
                  return (Ne(t), null);
                }
              case 5:
                if ((ve(t), (a = t.type), e !== null && t.stateNode != null))
                  Xi(e, t, a, u);
                else {
                  if (!u) {
                    if (t.stateNode === null) throw Error(o(166));
                    return (Ne(t), null);
                  }
                  ((e = Ke.current),
                    Ha(t)
                      ? Qe(t, e)
                      : ((r = sm(a, u, pn.current, e, t)),
                        Zi(r, t, !1, !1),
                        (t.stateNode = r),
                        of(r, a, u, e) && at(t)));
                }
                return (Ne(t), Pi(t, t.type, t.pendingProps), null);
              case 6:
                if (e && t.stateNode != null)
                  ((a = e.memoizedProps),
                    Xe
                      ? a !== u && at(t)
                      : dn &&
                        (a !== u
                          ? ((t.stateNode = cf(u, pn.current, Ke.current, t)),
                            at(t))
                          : (t.stateNode = e.stateNode)));
                else {
                  if (typeof u != 'string' && t.stateNode === null)
                    throw Error(o(166));
                  if (((e = pn.current), (a = Ke.current), Ha(t))) {
                    if (!pt) throw Error(o(176));
                    if (
                      ((e = t.stateNode),
                      (a = t.memoizedProps),
                      (u = null),
                      (r = Fe),
                      r !== null)
                    )
                      switch (r.tag) {
                        case 27:
                        case 5:
                          u = r.memoizedProps;
                      }
                    t0(e, a, t, u) || xe(t);
                  } else t.stateNode = cf(u, e, a, t);
                }
                return (Ne(t), null);
              case 13:
                if (
                  ((u = t.memoizedState),
                  e === null ||
                    (e.memoizedState !== null &&
                      e.memoizedState.dehydrated !== null))
                ) {
                  if (((r = Ha(t)), u !== null && u.dehydrated !== null)) {
                    if (e === null) {
                      if (!r) throw Error(o(318));
                      if (!pt) throw Error(o(344));
                      if (
                        ((r = t.memoizedState),
                        (r = r !== null ? r.dehydrated : null),
                        !r)
                      )
                        throw Error(o(317));
                      n0(r, t);
                    } else
                      (Ba(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        (t.flags |= 4));
                    (Ne(t), (r = !1));
                  } else (Rt !== null && (lr(Rt), (Rt = null)), (r = !0));
                  if (!r) return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
                }
                if ((Bt(t), (t.flags & 128) !== 0)) return ((t.lanes = a), t);
                if (
                  ((a = u !== null),
                  (e = e !== null && e.memoizedState !== null),
                  a)
                ) {
                  ((u = t.child),
                    (r = null),
                    u.alternate !== null &&
                      u.alternate.memoizedState !== null &&
                      u.alternate.memoizedState.cachePool !== null &&
                      (r = u.alternate.memoizedState.cachePool.pool));
                  var f = null;
                  (u.memoizedState !== null &&
                    u.memoizedState.cachePool !== null &&
                    (f = u.memoizedState.cachePool.pool),
                    f !== r && (u.flags |= 2048));
                }
                return (
                  a !== e && a && (t.child.flags |= 8192),
                  Il(t, t.updateQueue),
                  Ne(t),
                  null
                );
              case 4:
                return (
                  le(),
                  ps(e, t),
                  e === null && pm(t.stateNode.containerInfo),
                  Ne(t),
                  null
                );
              case 10:
                return (Vt(t.type), Ne(t), null);
              case 19:
                if ((_(qe), (r = t.memoizedState), r === null))
                  return (Ne(t), null);
                if (
                  ((u = (t.flags & 128) !== 0), (f = r.rendering), f === null)
                )
                  if (u) Pa(r, !1);
                  else {
                    if (De !== 0 || (e !== null && (e.flags & 128) !== 0))
                      for (e = t.child; e !== null; ) {
                        if (((f = Yl(e)), f !== null)) {
                          for (
                            t.flags |= 128,
                              Pa(r, !1),
                              e = f.updateQueue,
                              t.updateQueue = e,
                              Il(t, e),
                              t.subtreeFlags = 0,
                              e = a,
                              a = t.child;
                            a !== null;

                          )
                            (Js(a, e), (a = a.sibling));
                          return (b(qe, (qe.current & 1) | 2), t.child);
                        }
                        e = e.sibling;
                      }
                    r.tail !== null &&
                      _t() > ol &&
                      ((t.flags |= 128),
                      (u = !0),
                      Pa(r, !1),
                      (t.lanes = 4194304));
                  }
                else {
                  if (!u)
                    if (((e = Yl(f)), e !== null)) {
                      if (
                        ((t.flags |= 128),
                        (u = !0),
                        (e = e.updateQueue),
                        (t.updateQueue = e),
                        Il(t, e),
                        Pa(r, !0),
                        r.tail === null &&
                          r.tailMode === 'hidden' &&
                          !f.alternate &&
                          !ye)
                      )
                        return (Ne(t), null);
                    } else
                      2 * _t() - r.renderingStartTime > ol &&
                        a !== 536870912 &&
                        ((t.flags |= 128),
                        (u = !0),
                        Pa(r, !1),
                        (t.lanes = 4194304));
                  r.isBackwards
                    ? ((f.sibling = t.child), (t.child = f))
                    : ((e = r.last),
                      e !== null ? (e.sibling = f) : (t.child = f),
                      (r.last = f));
                }
                return r.tail !== null
                  ? ((t = r.tail),
                    (r.rendering = t),
                    (r.tail = t.sibling),
                    (r.renderingStartTime = _t()),
                    (t.sibling = null),
                    (e = qe.current),
                    b(qe, u ? (e & 1) | 2 : e & 1),
                    t)
                  : (Ne(t), null);
              case 22:
              case 23:
                return (
                  Bt(t),
                  vi(),
                  (u = t.memoizedState !== null),
                  e !== null
                    ? (e.memoizedState !== null) !== u && (t.flags |= 8192)
                    : u && (t.flags |= 8192),
                  u
                    ? (a & 536870912) !== 0 &&
                      (t.flags & 128) === 0 &&
                      (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : Ne(t),
                  (a = t.updateQueue),
                  a !== null && Il(t, a.retryQueue),
                  (a = null),
                  e !== null &&
                    e.memoizedState !== null &&
                    e.memoizedState.cachePool !== null &&
                    (a = e.memoizedState.cachePool.pool),
                  (u = null),
                  t.memoizedState !== null &&
                    t.memoizedState.cachePool !== null &&
                    (u = t.memoizedState.cachePool.pool),
                  u !== a && (t.flags |= 2048),
                  e !== null && _(Vn),
                  null
                );
              case 24:
                return (
                  (a = null),
                  e !== null && (a = e.memoizedState.cache),
                  t.memoizedState.cache !== a && (t.flags |= 2048),
                  Vt(Me),
                  Ne(t),
                  null
                );
              case 25:
                return null;
            }
            throw Error(o(156, t.tag));
          }
          function Vp(e, t) {
            switch ((J(t), t.tag)) {
              case 1:
                return (
                  (e = t.flags),
                  e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
              case 3:
                return (
                  Vt(Me),
                  le(),
                  (e = t.flags),
                  (e & 65536) !== 0 && (e & 128) === 0
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
                );
              case 26:
              case 27:
              case 5:
                return (ve(t), null);
              case 13:
                if (
                  (Bt(t),
                  (e = t.memoizedState),
                  e !== null && e.dehydrated !== null)
                ) {
                  if (t.alternate === null) throw Error(o(340));
                  Ba();
                }
                return (
                  (e = t.flags),
                  e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
              case 19:
                return (_(qe), null);
              case 4:
                return (le(), null);
              case 10:
                return (Vt(t.type), null);
              case 22:
              case 23:
                return (
                  Bt(t),
                  vi(),
                  e !== null && _(Vn),
                  (e = t.flags),
                  e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
                );
              case 24:
                return (Vt(Me), null);
              case 25:
                return null;
              default:
                return null;
            }
          }
          function vs(e, t) {
            switch ((J(t), t.tag)) {
              case 3:
                (Vt(Me), le());
                break;
              case 26:
              case 27:
              case 5:
                ve(t);
                break;
              case 4:
                le();
                break;
              case 13:
                Bt(t);
                break;
              case 19:
                _(qe);
                break;
              case 10:
                Vt(t.type);
                break;
              case 22:
              case 23:
                (Bt(t), vi(), e !== null && _(Vn));
                break;
              case 24:
                Vt(Me);
            }
          }
          function Ja(e, t) {
            try {
              var a = t.updateQueue,
                u = a !== null ? a.lastEffect : null;
              if (u !== null) {
                var r = u.next;
                a = r;
                do {
                  if ((a.tag & e) === e) {
                    u = void 0;
                    var f = a.create,
                      y = a.inst;
                    ((u = f()), (y.destroy = u));
                  }
                  a = a.next;
                } while (a !== r);
              }
            } catch (C) {
              Se(t, t.return, C);
            }
          }
          function un(e, t, a) {
            try {
              var u = t.updateQueue,
                r = u !== null ? u.lastEffect : null;
              if (r !== null) {
                var f = r.next;
                u = f;
                do {
                  if ((u.tag & e) === e) {
                    var y = u.inst,
                      C = y.destroy;
                    if (C !== void 0) {
                      ((y.destroy = void 0), (r = t));
                      var N = a;
                      try {
                        C();
                      } catch (H) {
                        Se(r, N, H);
                      }
                    }
                  }
                  u = u.next;
                } while (u !== f);
              }
            } catch (H) {
              Se(t, t.return, H);
            }
          }
          function hs(e) {
            var t = e.updateQueue;
            if (t !== null) {
              var a = e.stateNode;
              try {
                lc(t, a);
              } catch (u) {
                Se(e, e.return, u);
              }
            }
          }
          function ys(e, t, a) {
            ((a.props = On(e.type, e.memoizedProps)),
              (a.state = e.memoizedState));
            try {
              a.componentWillUnmount();
            } catch (u) {
              Se(e, t, u);
            }
          }
          function Nn(e, t) {
            try {
              var a = e.ref;
              if (a !== null) {
                var u = e.stateNode;
                switch (e.tag) {
                  case 26:
                  case 27:
                  case 5:
                    var r = Ia(u);
                    break;
                  default:
                    r = u;
                }
                typeof a == 'function'
                  ? (e.refCleanup = a(r))
                  : (a.current = r);
              }
            } catch (f) {
              Se(e, t, f);
            }
          }
          function lt(e, t) {
            var a = e.ref,
              u = e.refCleanup;
            if (a !== null)
              if (typeof u == 'function')
                try {
                  u();
                } catch (r) {
                  Se(e, t, r);
                } finally {
                  ((e.refCleanup = null),
                    (e = e.alternate),
                    e != null && (e.refCleanup = null));
                }
              else if (typeof a == 'function')
                try {
                  a(null);
                } catch (r) {
                  Se(e, t, r);
                }
              else a.current = null;
          }
          function gs(e) {
            var t = e.type,
              a = e.memoizedProps,
              u = e.stateNode;
            try {
              xm(u, t, a, e);
            } catch (r) {
              Se(e, e.return, r);
            }
          }
          function Es(e, t, a) {
            try {
              jm(e.stateNode, e.type, a, t, e);
            } catch (u) {
              Se(e, e.return, u);
            }
          }
          function Ss(e) {
            return (
              e.tag === 5 ||
              e.tag === 3 ||
              (mt ? e.tag === 26 : !1) ||
              (Pe ? e.tag === 27 : !1) ||
              e.tag === 4
            );
          }
          function Ji(e) {
            e: for (;;) {
              for (; e.sibling === null; ) {
                if (e.return === null || Ss(e.return)) return null;
                e = e.return;
              }
              for (
                e.sibling.return = e.return, e = e.sibling;
                e.tag !== 5 &&
                e.tag !== 6 &&
                (!Pe || e.tag !== 27) &&
                e.tag !== 18;

              ) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                ((e.child.return = e), (e = e.child));
              }
              if (!(e.flags & 2)) return e.stateNode;
            }
          }
          function Wi(e, t, a) {
            var u = e.tag;
            if (u === 5 || u === 6)
              ((e = e.stateNode), t ? Hm(a, e, t) : zm(a, e));
            else if (
              !(u === 4 || (Pe && u === 27)) &&
              ((e = e.child), e !== null)
            )
              for (Wi(e, t, a), e = e.sibling; e !== null; )
                (Wi(e, t, a), (e = e.sibling));
          }
          function $l(e, t, a) {
            var u = e.tag;
            if (u === 5 || u === 6)
              ((e = e.stateNode), t ? Um(a, e, t) : Mm(a, e));
            else if (
              !(u === 4 || (Pe && u === 27)) &&
              ((e = e.child), e !== null)
            )
              for ($l(e, t, a), e = e.sibling; e !== null; )
                ($l(e, t, a), (e = e.sibling));
          }
          function Cs(e, t, a) {
            e = e.containerInfo;
            try {
              hf(e, a);
            } catch (u) {
              Se(t, t.return, u);
            }
          }
          function Gp(e, t) {
            for (om(e.containerInfo), Ge = t; Ge !== null; )
              if (
                ((e = Ge),
                (t = e.child),
                (e.subtreeFlags & 1028) !== 0 && t !== null)
              )
                ((t.return = e), (Ge = t));
              else
                for (; Ge !== null; ) {
                  e = Ge;
                  var a = e.alternate;
                  switch (((t = e.flags), e.tag)) {
                    case 0:
                      break;
                    case 11:
                    case 15:
                      break;
                    case 1:
                      if ((t & 1024) !== 0 && a !== null) {
                        t = void 0;
                        var u = e,
                          r = a.memoizedProps;
                        a = a.memoizedState;
                        var f = u.stateNode;
                        try {
                          var y = On(u.type, r, u.elementType === u.type);
                          ((t = f.getSnapshotBeforeUpdate(y, a)),
                            (f.__reactInternalSnapshotBeforeUpdate = t));
                        } catch (C) {
                          Se(u, u.return, C);
                        }
                      }
                      break;
                    case 3:
                      (t & 1024) !== 0 && Xe && Qm(e.stateNode.containerInfo);
                      break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    default:
                      if ((t & 1024) !== 0) throw Error(o(163));
                  }
                  if (((t = e.sibling), t !== null)) {
                    ((t.return = e.return), (Ge = t));
                    break;
                  }
                  Ge = e.return;
                }
            return ((y = qf), (qf = !1), y);
          }
          function bs(e, t, a) {
            var u = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                (Gt(e, a), u & 4 && Ja(5, a));
                break;
              case 1:
                if ((Gt(e, a), u & 4))
                  if (((e = a.stateNode), t === null))
                    try {
                      e.componentDidMount();
                    } catch (C) {
                      Se(a, a.return, C);
                    }
                  else {
                    var r = On(a.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                      e.componentDidUpdate(
                        r,
                        t,
                        e.__reactInternalSnapshotBeforeUpdate
                      );
                    } catch (C) {
                      Se(a, a.return, C);
                    }
                  }
                (u & 64 && hs(a), u & 512 && Nn(a, a.return));
                break;
              case 3:
                if ((Gt(e, a), u & 64 && ((u = a.updateQueue), u !== null))) {
                  if (((e = null), a.child !== null))
                    switch (a.child.tag) {
                      case 27:
                      case 5:
                        e = Ia(a.child.stateNode);
                        break;
                      case 1:
                        e = a.child.stateNode;
                    }
                  try {
                    lc(u, e);
                  } catch (C) {
                    Se(a, a.return, C);
                  }
                }
                break;
              case 26:
                if (mt) {
                  (Gt(e, a), u & 512 && Nn(a, a.return));
                  break;
                }
              case 27:
              case 5:
                (Gt(e, a),
                  t === null && u & 4 && gs(a),
                  u & 512 && Nn(a, a.return));
                break;
              case 12:
                Gt(e, a);
                break;
              case 13:
                (Gt(e, a), u & 4 && Rs(e, a));
                break;
              case 22:
                if (((r = a.memoizedState !== null || Xt), !r)) {
                  t = (t !== null && t.memoizedState !== null) || ze;
                  var f = Xt,
                    y = ze;
                  ((Xt = r),
                    (ze = t) && !y
                      ? rn(e, a, (a.subtreeFlags & 8772) !== 0)
                      : Gt(e, a),
                    (Xt = f),
                    (ze = y));
                }
                u & 512 &&
                  (a.memoizedProps.mode === 'manual'
                    ? Nn(a, a.return)
                    : lt(a, a.return));
                break;
              default:
                Gt(e, a);
            }
          }
          function _s(e) {
            var t = e.alternate;
            (t !== null && ((e.alternate = null), _s(t)),
              (e.child = null),
              (e.deletions = null),
              (e.sibling = null),
              e.tag === 5 && ((t = e.stateNode), t !== null && hm(t)),
              (e.stateNode = null),
              (e.return = null),
              (e.dependencies = null),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.pendingProps = null),
              (e.stateNode = null),
              (e.updateQueue = null));
          }
          function bt(e, t, a) {
            for (a = a.child; a !== null; ) (Fi(e, t, a), (a = a.sibling));
          }
          function Fi(e, t, a) {
            if (ct && typeof ct.onCommitFiberUnmount == 'function')
              try {
                ct.onCommitFiberUnmount(el, a);
              } catch {}
            switch (a.tag) {
              case 26:
                if (mt) {
                  (ze || lt(a, t),
                    bt(e, t, a),
                    a.memoizedState
                      ? Of(a.memoizedState)
                      : a.stateNode && Nf(a.stateNode));
                  break;
                }
              case 27:
                if (Pe) {
                  ze || lt(a, t);
                  var u = Be,
                    r = ft;
                  ((Be = a.stateNode),
                    bt(e, t, a),
                    y0(a.stateNode),
                    (Be = u),
                    (ft = r));
                  break;
                }
              case 5:
                ze || lt(a, t);
              case 6:
                if (Xe) {
                  if (
                    ((u = Be),
                    (r = ft),
                    (Be = null),
                    bt(e, t, a),
                    (Be = u),
                    (ft = r),
                    Be !== null)
                  )
                    if (ft)
                      try {
                        Lm(Be, a.stateNode);
                      } catch (f) {
                        Se(a, t, f);
                      }
                    else
                      try {
                        Bm(Be, a.stateNode);
                      } catch (f) {
                        Se(a, t, f);
                      }
                } else bt(e, t, a);
                break;
              case 18:
                Xe &&
                  Be !== null &&
                  (ft ? r0(Be, a.stateNode) : i0(Be, a.stateNode));
                break;
              case 4:
                Xe
                  ? ((u = Be),
                    (r = ft),
                    (Be = a.stateNode.containerInfo),
                    (ft = !0),
                    bt(e, t, a),
                    (Be = u),
                    (ft = r))
                  : (dn && Cs(a.stateNode, a, mf()), bt(e, t, a));
                break;
              case 0:
              case 11:
              case 14:
              case 15:
                (ze || un(2, a, t), ze || un(4, a, t), bt(e, t, a));
                break;
              case 1:
                (ze ||
                  (lt(a, t),
                  (u = a.stateNode),
                  typeof u.componentWillUnmount == 'function' && ys(a, t, u)),
                  bt(e, t, a));
                break;
              case 21:
                bt(e, t, a);
                break;
              case 22:
                (ze || lt(a, t),
                  (ze = (u = ze) || a.memoizedState !== null),
                  bt(e, t, a),
                  (ze = u));
                break;
              default:
                bt(e, t, a);
            }
          }
          function Rs(e, t) {
            if (
              pt &&
              t.memoizedState === null &&
              ((e = t.alternate),
              e !== null &&
                ((e = e.memoizedState),
                e !== null && ((e = e.dehydrated), e !== null)))
            )
              try {
                u0(e);
              } catch (a) {
                Se(t, t.return, a);
              }
          }
          function Yp(e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return (t === null && (t = e.stateNode = new Lf()), t);
              case 22:
                return (
                  (e = e.stateNode),
                  (t = e._retryCache),
                  t === null && (t = e._retryCache = new Lf()),
                  t
                );
              default:
                throw Error(o(435, e.tag));
            }
          }
          function Ii(e, t) {
            var a = Yp(e);
            t.forEach(function (u) {
              var r = Wp.bind(null, e, u);
              a.has(u) || (a.add(u), u.then(r, r));
            });
          }
          function et(e, t) {
            var a = t.deletions;
            if (a !== null)
              for (var u = 0; u < a.length; u++) {
                var r = a[u],
                  f = e,
                  y = t;
                if (Xe) {
                  var C = y;
                  e: for (; C !== null; ) {
                    switch (C.tag) {
                      case 27:
                      case 5:
                        ((Be = C.stateNode), (ft = !1));
                        break e;
                      case 3:
                        ((Be = C.stateNode.containerInfo), (ft = !0));
                        break e;
                      case 4:
                        ((Be = C.stateNode.containerInfo), (ft = !0));
                        break e;
                    }
                    C = C.return;
                  }
                  if (Be === null) throw Error(o(160));
                  (Fi(f, y, r), (Be = null), (ft = !1));
                } else Fi(f, y, r);
                ((f = r.alternate),
                  f !== null && (f.return = null),
                  (r.return = null));
              }
            if (t.subtreeFlags & 13878)
              for (t = t.child; t !== null; ) (Os(t, e), (t = t.sibling));
          }
          function Os(e, t) {
            var a = e.alternate,
              u = e.flags;
            switch (e.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (et(t, e),
                  ut(e),
                  u & 4 && (un(3, e, e.return), Ja(3, e), un(5, e, e.return)));
                break;
              case 1:
                (et(t, e),
                  ut(e),
                  u & 512 && (ze || a === null || lt(a, a.return)),
                  u & 64 &&
                    Xt &&
                    ((e = e.updateQueue),
                    e !== null &&
                      ((u = e.callbacks),
                      u !== null &&
                        ((a = e.shared.hiddenCallbacks),
                        (e.shared.hiddenCallbacks =
                          a === null ? u : a.concat(u))))));
                break;
              case 26:
                if (mt) {
                  var r = Ot;
                  (et(t, e),
                    ut(e),
                    u & 512 && (ze || a === null || lt(a, a.return)),
                    u & 4 &&
                      ((u = a !== null ? a.memoizedState : null),
                      (t = e.memoizedState),
                      a === null
                        ? t === null
                          ? e.stateNode === null
                            ? (e.stateNode = s0(r, e.type, e.memoizedProps, e))
                            : Tf(r, e.type, e.stateNode)
                          : (e.stateNode = Rf(r, t, e.memoizedProps))
                        : u !== t
                          ? (u === null
                              ? a.stateNode !== null && Nf(a.stateNode)
                              : Of(u),
                            t === null
                              ? Tf(r, e.type, e.stateNode)
                              : Rf(r, t, e.memoizedProps))
                          : t === null &&
                            e.stateNode !== null &&
                            Es(e, e.memoizedProps, a.memoizedProps)));
                  break;
                }
              case 27:
                if (Pe && u & 4 && e.alternate === null) {
                  r = e.stateNode;
                  var f = e.memoizedProps;
                  try {
                    (v0(r), h0(e.type, f, r, e));
                  } catch (K) {
                    Se(e, e.return, K);
                  }
                }
              case 5:
                if (
                  (et(t, e),
                  ut(e),
                  u & 512 && (ze || a === null || lt(a, a.return)),
                  Xe)
                ) {
                  if (e.flags & 32) {
                    t = e.stateNode;
                    try {
                      pf(t);
                    } catch (K) {
                      Se(e, e.return, K);
                    }
                  }
                  (u & 4 &&
                    e.stateNode != null &&
                    ((t = e.memoizedProps),
                    Es(e, t, a !== null ? a.memoizedProps : t)),
                    u & 1024 && (Vr = !0));
                }
                break;
              case 6:
                if ((et(t, e), ut(e), u & 4 && Xe)) {
                  if (e.stateNode === null) throw Error(o(162));
                  ((u = e.memoizedProps),
                    (a = a !== null ? a.memoizedProps : u),
                    (t = e.stateNode));
                  try {
                    Dm(t, a, u);
                  } catch (K) {
                    Se(e, e.return, K);
                  }
                }
                break;
              case 3:
                if (
                  (mt
                    ? (d0(),
                      (r = Ot),
                      (Ot = Or(t.containerInfo)),
                      et(t, e),
                      (Ot = r))
                    : et(t, e),
                  ut(e),
                  u & 4)
                ) {
                  if (Xe && pt && a !== null && a.memoizedState.isDehydrated)
                    try {
                      l0(t.containerInfo);
                    } catch (K) {
                      Se(e, e.return, K);
                    }
                  if (dn) {
                    ((u = t.containerInfo), (a = t.pendingChildren));
                    try {
                      hf(u, a);
                    } catch (K) {
                      Se(e, e.return, K);
                    }
                  }
                }
                Vr && ((Vr = !1), Ts(e));
                break;
              case 4:
                (mt
                  ? ((a = Ot),
                    (Ot = Or(e.stateNode.containerInfo)),
                    et(t, e),
                    ut(e),
                    (Ot = a))
                  : (et(t, e), ut(e)),
                  u & 4 &&
                    dn &&
                    Cs(e.stateNode, e, e.stateNode.pendingChildren));
                break;
              case 12:
                (et(t, e), ut(e));
                break;
              case 13:
                (et(t, e),
                  ut(e),
                  e.child.flags & 8192 &&
                    (e.memoizedState !== null) !=
                      (a !== null && a.memoizedState !== null) &&
                    (wr = _t()),
                  u & 4 &&
                    ((u = e.updateQueue),
                    u !== null && ((e.updateQueue = null), Ii(e, u))));
                break;
              case 22:
                (u & 512 && (ze || a === null || lt(a, a.return)),
                  (r = e.memoizedState !== null));
                var y = a !== null && a.memoizedState !== null,
                  C = Xt,
                  N = ze;
                if (
                  ((Xt = C || r),
                  (ze = N || y),
                  et(t, e),
                  (ze = N),
                  (Xt = C),
                  ut(e),
                  (t = e.stateNode),
                  (t._current = e),
                  (t._visibility &= -3),
                  (t._visibility |= t._pendingVisibility & 2),
                  u & 8192 &&
                    ((t._visibility = r
                      ? t._visibility & -2
                      : t._visibility | 1),
                    r && ((t = Xt || ze), a === null || y || t || $n(e)),
                    Xe &&
                      (e.memoizedProps === null ||
                        e.memoizedProps.mode !== 'manual')))
                ) {
                  e: if (((a = null), Xe))
                    for (t = e; ; ) {
                      if (
                        t.tag === 5 ||
                        (mt && t.tag === 26) ||
                        (Pe && t.tag === 27)
                      ) {
                        if (a === null) {
                          y = a = t;
                          try {
                            ((f = y.stateNode),
                              r ? qm(f) : Gm(y.stateNode, y.memoizedProps));
                          } catch (K) {
                            Se(y, y.return, K);
                          }
                        }
                      } else if (t.tag === 6) {
                        if (a === null) {
                          y = t;
                          try {
                            var H = y.stateNode;
                            r ? Vm(H) : Ym(H, y.memoizedProps);
                          } catch (K) {
                            Se(y, y.return, K);
                          }
                        }
                      } else if (
                        ((t.tag !== 22 && t.tag !== 23) ||
                          t.memoizedState === null ||
                          t === e) &&
                        t.child !== null
                      ) {
                        ((t.child.return = t), (t = t.child));
                        continue;
                      }
                      if (t === e) break e;
                      for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e) break e;
                        (a === t && (a = null), (t = t.return));
                      }
                      (a === t && (a = null),
                        (t.sibling.return = t.return),
                        (t = t.sibling));
                    }
                }
                u & 4 &&
                  ((u = e.updateQueue),
                  u !== null &&
                    ((a = u.retryQueue),
                    a !== null && ((u.retryQueue = null), Ii(e, a))));
                break;
              case 19:
                (et(t, e),
                  ut(e),
                  u & 4 &&
                    ((u = e.updateQueue),
                    u !== null && ((e.updateQueue = null), Ii(e, u))));
                break;
              case 21:
                break;
              default:
                (et(t, e), ut(e));
            }
          }
          function ut(e) {
            var t = e.flags;
            if (t & 2) {
              try {
                if (Xe && (!Pe || e.tag !== 27)) {
                  e: {
                    for (var a = e.return; a !== null; ) {
                      if (Ss(a)) {
                        var u = a;
                        break e;
                      }
                      a = a.return;
                    }
                    throw Error(o(160));
                  }
                  switch (u.tag) {
                    case 27:
                      if (Pe) {
                        var r = u.stateNode,
                          f = Ji(e);
                        $l(e, f, r);
                        break;
                      }
                    case 5:
                      var y = u.stateNode;
                      u.flags & 32 && (pf(y), (u.flags &= -33));
                      var C = Ji(e);
                      $l(e, C, y);
                      break;
                    case 3:
                    case 4:
                      var N = u.stateNode.containerInfo,
                        H = Ji(e);
                      Wi(e, H, N);
                      break;
                    default:
                      throw Error(o(161));
                  }
                }
              } catch (K) {
                Se(e, e.return, K);
              }
              e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
          }
          function Ts(e) {
            if (e.subtreeFlags & 1024)
              for (e = e.child; e !== null; ) {
                var t = e;
                (Ts(t),
                  t.tag === 5 && t.flags & 1024 && Sm(t.stateNode),
                  (e = e.sibling));
              }
          }
          function Gt(e, t) {
            if (t.subtreeFlags & 8772)
              for (t = t.child; t !== null; )
                (bs(e, t.alternate, t), (t = t.sibling));
          }
          function $n(e) {
            for (e = e.child; e !== null; ) {
              var t = e;
              switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  (un(4, t, t.return), $n(t));
                  break;
                case 1:
                  lt(t, t.return);
                  var a = t.stateNode;
                  (typeof a.componentWillUnmount == 'function' &&
                    ys(t, t.return, a),
                    $n(t));
                  break;
                case 26:
                case 27:
                case 5:
                  (lt(t, t.return), $n(t));
                  break;
                case 22:
                  (lt(t, t.return), t.memoizedState === null && $n(t));
                  break;
                default:
                  $n(t);
              }
              e = e.sibling;
            }
          }
          function rn(e, t, a) {
            for (
              a = a && (t.subtreeFlags & 8772) !== 0, t = t.child;
              t !== null;

            ) {
              var u = t.alternate,
                r = e,
                f = t,
                y = f.flags;
              switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  (rn(r, f, a), Ja(4, f));
                  break;
                case 1:
                  if (
                    (rn(r, f, a),
                    (u = f),
                    (r = u.stateNode),
                    typeof r.componentDidMount == 'function')
                  )
                    try {
                      r.componentDidMount();
                    } catch (H) {
                      Se(u, u.return, H);
                    }
                  if (((u = f), (r = u.updateQueue), r !== null)) {
                    var C = u.stateNode;
                    try {
                      var N = r.shared.hiddenCallbacks;
                      if (N !== null)
                        for (
                          r.shared.hiddenCallbacks = null, r = 0;
                          r < N.length;
                          r++
                        )
                          ac(N[r], C);
                    } catch (H) {
                      Se(u, u.return, H);
                    }
                  }
                  (a && y & 64 && hs(f), Nn(f, f.return));
                  break;
                case 26:
                case 27:
                case 5:
                  (rn(r, f, a),
                    a && u === null && y & 4 && gs(f),
                    Nn(f, f.return));
                  break;
                case 12:
                  rn(r, f, a);
                  break;
                case 13:
                  (rn(r, f, a), a && y & 4 && Rs(r, f));
                  break;
                case 22:
                  (f.memoizedState === null && rn(r, f, a), Nn(f, f.return));
                  break;
                default:
                  rn(r, f, a);
              }
              t = t.sibling;
            }
          }
          function $i(e, t) {
            var a = null;
            (e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (a = e.memoizedState.cachePool.pool),
              (e = null),
              t.memoizedState !== null &&
                t.memoizedState.cachePool !== null &&
                (e = t.memoizedState.cachePool.pool),
              e !== a && (e != null && e.refCount++, a != null && Xa(a)));
          }
          function ki(e, t) {
            ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && Xa(e)));
          }
          function on(e, t, a, u) {
            if (t.subtreeFlags & 10256)
              for (t = t.child; t !== null; ) (Ns(e, t, a, u), (t = t.sibling));
          }
          function Ns(e, t, a, u) {
            var r = t.flags;
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                (on(e, t, a, u), r & 2048 && Ja(9, t));
                break;
              case 3:
                (on(e, t, a, u),
                  r & 2048 &&
                    ((e = null),
                    t.alternate !== null &&
                      (e = t.alternate.memoizedState.cache),
                    (t = t.memoizedState.cache),
                    t !== e && (t.refCount++, e != null && Xa(e))));
                break;
              case 12:
                if (r & 2048) {
                  (on(e, t, a, u), (e = t.stateNode));
                  try {
                    var f = t.memoizedProps,
                      y = f.id,
                      C = f.onPostCommit;
                    typeof C == 'function' &&
                      C(
                        y,
                        t.alternate === null ? 'mount' : 'update',
                        e.passiveEffectDuration,
                        -0
                      );
                  } catch (N) {
                    Se(t, t.return, N);
                  }
                } else on(e, t, a, u);
                break;
              case 23:
                break;
              case 22:
                ((f = t.stateNode),
                  t.memoizedState !== null
                    ? f._visibility & 4
                      ? on(e, t, a, u)
                      : Wa(e, t)
                    : f._visibility & 4
                      ? on(e, t, a, u)
                      : ((f._visibility |= 4),
                        kn(e, t, a, u, (t.subtreeFlags & 10256) !== 0)),
                  r & 2048 && $i(t.alternate, t));
                break;
              case 24:
                (on(e, t, a, u), r & 2048 && ki(t.alternate, t));
                break;
              default:
                on(e, t, a, u);
            }
          }
          function kn(e, t, a, u, r) {
            for (
              r = r && (t.subtreeFlags & 10256) !== 0, t = t.child;
              t !== null;

            ) {
              var f = e,
                y = t,
                C = a,
                N = u,
                H = y.flags;
              switch (y.tag) {
                case 0:
                case 11:
                case 15:
                  (kn(f, y, C, N, r), Ja(8, y));
                  break;
                case 23:
                  break;
                case 22:
                  var K = y.stateNode;
                  (y.memoizedState !== null
                    ? K._visibility & 4
                      ? kn(f, y, C, N, r)
                      : Wa(f, y)
                    : ((K._visibility |= 4), kn(f, y, C, N, r)),
                    r && H & 2048 && $i(y.alternate, y));
                  break;
                case 24:
                  (kn(f, y, C, N, r), r && H & 2048 && ki(y.alternate, y));
                  break;
                default:
                  kn(f, y, C, N, r);
              }
              t = t.sibling;
            }
          }
          function Wa(e, t) {
            if (t.subtreeFlags & 10256)
              for (t = t.child; t !== null; ) {
                var a = e,
                  u = t,
                  r = u.flags;
                switch (u.tag) {
                  case 22:
                    (Wa(a, u), r & 2048 && $i(u.alternate, u));
                    break;
                  case 24:
                    (Wa(a, u), r & 2048 && ki(u.alternate, u));
                    break;
                  default:
                    Wa(a, u);
                }
                t = t.sibling;
              }
          }
          function An(e) {
            if (e.subtreeFlags & Ea)
              for (e = e.child; e !== null; ) (As(e), (e = e.sibling));
          }
          function As(e) {
            switch (e.tag) {
              case 26:
                (An(e),
                  e.flags & Ea &&
                    (e.memoizedState !== null
                      ? m0(Ot, e.memoizedState, e.memoizedProps)
                      : df(e.type, e.memoizedProps)));
                break;
              case 5:
                (An(e), e.flags & Ea && df(e.type, e.memoizedProps));
                break;
              case 3:
              case 4:
                if (mt) {
                  var t = Ot;
                  ((Ot = Or(e.stateNode.containerInfo)), An(e), (Ot = t));
                } else An(e);
                break;
              case 22:
                e.memoizedState === null &&
                  ((t = e.alternate),
                  t !== null && t.memoizedState !== null
                    ? ((t = Ea), (Ea = 16777216), An(e), (Ea = t))
                    : An(e));
                break;
              default:
                An(e);
            }
          }
          function Ms(e) {
            var t = e.alternate;
            if (t !== null && ((e = t.child), e !== null)) {
              t.child = null;
              do ((t = e.sibling), (e.sibling = null), (e = t));
              while (e !== null);
            }
          }
          function Fa(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
              if (t !== null)
                for (var a = 0; a < t.length; a++) {
                  var u = t[a];
                  ((Ge = u), Ds(u, e));
                }
              Ms(e);
            }
            if (e.subtreeFlags & 10256)
              for (e = e.child; e !== null; ) (zs(e), (e = e.sibling));
          }
          function zs(e) {
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                (Fa(e), e.flags & 2048 && un(9, e, e.return));
                break;
              case 3:
                Fa(e);
                break;
              case 12:
                Fa(e);
                break;
              case 22:
                var t = e.stateNode;
                e.memoizedState !== null &&
                t._visibility & 4 &&
                (e.return === null || e.return.tag !== 13)
                  ? ((t._visibility &= -5), kl(e))
                  : Fa(e);
                break;
              default:
                Fa(e);
            }
          }
          function kl(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
              if (t !== null)
                for (var a = 0; a < t.length; a++) {
                  var u = t[a];
                  ((Ge = u), Ds(u, e));
                }
              Ms(e);
            }
            for (e = e.child; e !== null; ) {
              switch (((t = e), t.tag)) {
                case 0:
                case 11:
                case 15:
                  (un(8, t, t.return), kl(t));
                  break;
                case 22:
                  ((a = t.stateNode),
                    a._visibility & 4 && ((a._visibility &= -5), kl(t)));
                  break;
                default:
                  kl(t);
              }
              e = e.sibling;
            }
          }
          function Ds(e, t) {
            for (; Ge !== null; ) {
              var a = Ge;
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  un(8, a, t);
                  break;
                case 23:
                case 22:
                  if (
                    a.memoizedState !== null &&
                    a.memoizedState.cachePool !== null
                  ) {
                    var u = a.memoizedState.cachePool.pool;
                    u != null && u.refCount++;
                  }
                  break;
                case 24:
                  Xa(a.memoizedState.cache);
              }
              if (((u = a.child), u !== null)) ((u.return = a), (Ge = u));
              else
                e: for (a = e; Ge !== null; ) {
                  u = Ge;
                  var r = u.sibling,
                    f = u.return;
                  if ((_s(u), u === a)) {
                    Ge = null;
                    break e;
                  }
                  if (r !== null) {
                    ((r.return = f), (Ge = r));
                    break e;
                  }
                  Ge = f;
                }
            }
          }
          function er(e) {
            var t = sf(e);
            if (t != null) {
              if (typeof t.memoizedProps['data-testname'] != 'string')
                throw Error(o(364));
              return t;
            }
            if (((e = _m(e)), e === null)) throw Error(o(362));
            return e.stateNode.current;
          }
          function tr(e, t) {
            var a = e.tag;
            switch (t.$$typeof) {
              case gu:
                if (e.type === t.value) return !0;
                break;
              case Eu:
                e: {
                  for (t = t.value, e = [e, 0], a = 0; a < e.length; ) {
                    var u = e[a++],
                      r = u.tag,
                      f = e[a++],
                      y = t[f];
                    if ((r !== 5 && r !== 26 && r !== 27) || !ka(u)) {
                      for (; y != null && tr(u, y); ) (f++, (y = t[f]));
                      if (f === t.length) {
                        t = !0;
                        break e;
                      } else
                        for (u = u.child; u !== null; )
                          (e.push(u, f), (u = u.sibling));
                    }
                  }
                  t = !1;
                }
                return t;
              case Su:
                if (
                  (a === 5 || a === 26 || a === 27) &&
                  Tm(e.stateNode, t.value)
                )
                  return !0;
                break;
              case bu:
                if (
                  (a === 5 || a === 6 || a === 26 || a === 27) &&
                  ((e = Om(e)), e !== null && 0 <= e.indexOf(t.value))
                )
                  return !0;
                break;
              case Cu:
                if (
                  (a === 5 || a === 26 || a === 27) &&
                  ((e = e.memoizedProps['data-testname']),
                  typeof e == 'string' &&
                    e.toLowerCase() === t.value.toLowerCase())
                )
                  return !0;
                break;
              default:
                throw Error(o(365));
            }
            return !1;
          }
          function nr(e) {
            switch (e.$$typeof) {
              case gu:
                return '<' + (p(e.value) || 'Unknown') + '>';
              case Eu:
                return ':has(' + (nr(e) || '') + ')';
              case Su:
                return '[role="' + e.value + '"]';
              case bu:
                return '"' + e.value + '"';
              case Cu:
                return '[data-testname="' + e.value + '"]';
              default:
                throw Error(o(365));
            }
          }
          function xs(e, t) {
            var a = [];
            e = [e, 0];
            for (var u = 0; u < e.length; ) {
              var r = e[u++],
                f = r.tag,
                y = e[u++],
                C = t[y];
              if ((f !== 5 && f !== 26 && f !== 27) || !ka(r)) {
                for (; C != null && tr(r, C); ) (y++, (C = t[y]));
                if (y === t.length) a.push(r);
                else
                  for (r = r.child; r !== null; )
                    (e.push(r, y), (r = r.sibling));
              }
            }
            return a;
          }
          function ar(e, t) {
            if (!$a) throw Error(o(363));
            ((e = er(e)), (e = xs(e, t)), (t = []), (e = Array.from(e)));
            for (var a = 0; a < e.length; ) {
              var u = e[a++],
                r = u.tag;
              if (r === 5 || r === 26 || r === 27) ka(u) || t.push(u.stateNode);
              else for (u = u.child; u !== null; ) (e.push(u), (u = u.sibling));
            }
            return t;
          }
          function it() {
            if ((be & 2) !== 0 && he !== 0) return he & -he;
            if (ue.T !== null) {
              var e = da;
              return e !== 0 ? e : si();
            }
            return mm();
          }
          function js() {
            Et === 0 && (Et = (he & 536870912) === 0 || ye ? te() : 536870912);
            var e = gt.current;
            return (e !== null && (e.flags |= 32), Et);
          }
          function We(e, t, a) {
            (((e === _e && Re === 2) || e.cancelPendingCommit !== null) &&
              (ea(e, 0), Yt(e, he, Et, !1)),
              fe(e, a),
              ((be & 2) === 0 || e !== _e) &&
                (e === _e &&
                  ((be & 2) === 0 && (Gn |= a), De === 4 && Yt(e, he, Et, !1)),
                Nt(e)));
          }
          function Us(e, t, a) {
            if ((be & 6) !== 0) throw Error(o(327));
            var u =
                (!a && (t & 60) === 0 && (t & e.expiredLanes) === 0) || W(e, t),
              r = u ? Kp(e, t) : rr(e, t, !0),
              f = u;
            do {
              if (r === 0) {
                Sa && !u && Yt(e, t, 0, !1);
                break;
              } else if (r === 6) Yt(e, t, 0, !Pt);
              else {
                if (((a = e.current.alternate), f && !Qp(a))) {
                  ((r = rr(e, t, !1)), (f = !1));
                  continue;
                }
                if (r === 2) {
                  if (((f = t), e.errorRecoveryDisabledLanes & f)) var y = 0;
                  else
                    ((y = e.pendingLanes & -536870913),
                      (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
                  if (y !== 0) {
                    t = y;
                    e: {
                      var C = e;
                      r = rl;
                      var N = pt && C.current.memoizedState.isDehydrated;
                      if (
                        (N && (ea(C, y).flags |= 256),
                        (y = rr(C, y, !1)),
                        y !== 2)
                      ) {
                        if (Gr && !N) {
                          ((C.errorRecoveryDisabledLanes |= f),
                            (Gn |= f),
                            (r = 4));
                          break e;
                        }
                        ((f = Dt), (Dt = r), f !== null && lr(f));
                      }
                      r = y;
                    }
                    if (((f = !1), r !== 2)) continue;
                  }
                }
                if (r === 1) {
                  (ea(e, 0), Yt(e, t, 0, !0));
                  break;
                }
                e: {
                  switch (((u = e), r)) {
                    case 0:
                    case 1:
                      throw Error(o(345));
                    case 4:
                      if ((t & 4194176) === t) {
                        Yt(u, t, Et, !Pt);
                        break e;
                      }
                      break;
                    case 2:
                      Dt = null;
                      break;
                    case 3:
                    case 5:
                      break;
                    default:
                      throw Error(o(329));
                  }
                  if (
                    ((u.finishedWork = a),
                    (u.finishedLanes = t),
                    (t & 62914560) === t && ((f = wr + 300 - _t()), 10 < f))
                  ) {
                    if ((Yt(u, t, Et, !Pt), Q(u, 0) !== 0)) break e;
                    u.timeoutHandle = fm(
                      Hs.bind(
                        null,
                        u,
                        a,
                        Dt,
                        _u,
                        Qr,
                        t,
                        Et,
                        Gn,
                        Ca,
                        Pt,
                        2,
                        -0,
                        0
                      ),
                      f
                    );
                    break e;
                  }
                  Hs(u, a, Dt, _u, Qr, t, Et, Gn, Ca, Pt, 0, -0, 0);
                }
              }
              break;
            } while (!0);
            Nt(e);
          }
          function lr(e) {
            Dt === null ? (Dt = e) : Dt.push.apply(Dt, e);
          }
          function Hs(e, t, a, u, r, f, y, C, N, H, K, I, $) {
            var oe = t.subtreeFlags;
            if (
              (oe & 8192 || (oe & 16785408) === 16785408) &&
              (gm(), As(t), (t = Em()), t !== null)
            ) {
              ((e.cancelPendingCommit = t(
                Ks.bind(null, e, a, u, r, y, C, N, 1, I, $)
              )),
                Yt(e, f, y, !H));
              return;
            }
            Ks(e, a, u, r, y, C, N, K, I, $);
          }
          function Qp(e) {
            for (var t = e; ; ) {
              var a = t.tag;
              if (
                (a === 0 || a === 11 || a === 15) &&
                t.flags & 16384 &&
                ((a = t.updateQueue),
                a !== null && ((a = a.stores), a !== null))
              )
                for (var u = 0; u < a.length; u++) {
                  var r = a[u],
                    f = r.getSnapshot;
                  r = r.value;
                  try {
                    if (!st(f(), r)) return !1;
                  } catch {
                    return !1;
                  }
                }
              if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
                ((a.return = t), (t = a));
              else {
                if (t === e) break;
                for (; t.sibling === null; ) {
                  if (t.return === null || t.return === e) return !0;
                  t = t.return;
                }
                ((t.sibling.return = t.return), (t = t.sibling));
              }
            }
            return !0;
          }
          function Yt(e, t, a, u) {
            ((t &= ~Yr),
              (t &= ~Gn),
              (e.suspendedLanes |= t),
              (e.pingedLanes &= ~t),
              u && (e.warmLanes |= t),
              (u = e.expirationTimes));
            for (var r = t; 0 < r; ) {
              var f = 31 - ot(r),
                y = 1 << f;
              ((u[f] = -1), (r &= ~y));
            }
            a !== 0 && re(e, a, t);
          }
          function Bs() {
            return (be & 6) === 0 ? (Fn(0), !1) : !0;
          }
          function ur() {
            if (me !== null) {
              if (Re === 0) var e = me.return;
              else
                ((e = me),
                  (Zt = qn = null),
                  Si(e),
                  (va = null),
                  (ll = 0),
                  (e = me));
              for (; e !== null; ) (vs(e.alternate, e), (e = e.return));
              me = null;
            }
          }
          function ea(e, t) {
            ((e.finishedWork = null), (e.finishedLanes = 0));
            var a = e.timeoutHandle;
            (a !== br && ((e.timeoutHandle = br), dm(a)),
              (a = e.cancelPendingCommit),
              a !== null && ((e.cancelPendingCommit = null), a()),
              ur(),
              (_e = e),
              (me = a = cn(e.current, null)),
              (he = t),
              (Re = 0),
              (dt = null),
              (Pt = !1),
              (Sa = W(e, t)),
              (Gr = !1),
              (Ca = Et = Yr = Gn = yn = De = 0),
              (Dt = rl = null),
              (Qr = !1),
              (t & 8) !== 0 && (t |= t & 32));
            var u = e.entangledLanes;
            if (u !== 0)
              for (e = e.entanglements, u &= t; 0 < u; ) {
                var r = 31 - ot(u),
                  f = 1 << r;
                ((t |= e[r]), (u &= ~f));
              }
            return ((Jt = t), Ul(), a);
          }
          function Ls(e, t) {
            ((se = null),
              (ue.H = zt),
              t === al
                ? ((t = rc()), (Re = 3))
                : t === Hr
                  ? ((t = rc()), (Re = 4))
                  : (Re =
                      t === Hf
                        ? 8
                        : t !== null &&
                            typeof t == 'object' &&
                            typeof t.then == 'function'
                          ? 6
                          : 1),
              (dt = t),
              me === null && ((De = 1), Pl(e, P(t, e.current))));
          }
          function qs() {
            var e = gt.current;
            return e === null
              ? !0
              : (he & 4194176) === he
                ? Mt === null
                : (he & 62914560) === he || (he & 536870912) !== 0
                  ? e === Mt
                  : !1;
          }
          function Vs() {
            var e = ue.H;
            return ((ue.H = zt), e === null ? zt : e);
          }
          function Gs() {
            var e = ue.A;
            return ((ue.A = D0), e);
          }
          function ir() {
            ((De = 4),
              Pt || ((he & 4194176) !== he && gt.current !== null) || (Sa = !0),
              ((yn & 134217727) === 0 && (Gn & 134217727) === 0) ||
                _e === null ||
                Yt(_e, he, Et, !1));
          }
          function rr(e, t, a) {
            var u = be;
            be |= 2;
            var r = Vs(),
              f = Gs();
            ((_e !== e || he !== t) && ((_u = null), ea(e, t)), (t = !1));
            var y = De;
            e: do
              try {
                if (Re !== 0 && me !== null) {
                  var C = me,
                    N = dt;
                  switch (Re) {
                    case 8:
                      (ur(), (y = 6));
                      break e;
                    case 3:
                    case 2:
                    case 6:
                      gt.current === null && (t = !0);
                      var H = Re;
                      if (((Re = 0), (dt = null), ta(e, C, N, H), a && Sa)) {
                        y = 0;
                        break e;
                      }
                      break;
                    default:
                      ((H = Re), (Re = 0), (dt = null), ta(e, C, N, H));
                  }
                }
                (wp(), (y = De));
                break;
              } catch (K) {
                Ls(e, K);
              }
            while (!0);
            return (
              t && e.shellSuspendCounter++,
              (Zt = qn = null),
              (be = u),
              (ue.H = r),
              (ue.A = f),
              me === null && ((_e = null), (he = 0), Ul()),
              y
            );
          }
          function wp() {
            for (; me !== null; ) Ys(me);
          }
          function Kp(e, t) {
            var a = be;
            be |= 2;
            var u = Vs(),
              r = Gs();
            _e !== e || he !== t
              ? ((_u = null), (ol = _t() + 500), ea(e, t))
              : (Sa = W(e, t));
            e: do
              try {
                if (Re !== 0 && me !== null) {
                  t = me;
                  var f = dt;
                  t: switch (Re) {
                    case 1:
                      ((Re = 0), (dt = null), ta(e, t, f, 1));
                      break;
                    case 2:
                      if (uc(f)) {
                        ((Re = 0), (dt = null), Qs(t));
                        break;
                      }
                      ((t = function () {
                        (Re === 2 && _e === e && (Re = 7), Nt(e));
                      }),
                        f.then(t, t));
                      break e;
                    case 3:
                      Re = 7;
                      break e;
                    case 4:
                      Re = 5;
                      break e;
                    case 7:
                      uc(f)
                        ? ((Re = 0), (dt = null), Qs(t))
                        : ((Re = 0), (dt = null), ta(e, t, f, 7));
                      break;
                    case 5:
                      var y = null;
                      switch (me.tag) {
                        case 26:
                          y = me.memoizedState;
                        case 5:
                        case 27:
                          var C = me,
                            N = C.type,
                            H = C.pendingProps;
                          if (y ? Af(y) : ff(N, H)) {
                            ((Re = 0), (dt = null));
                            var K = C.sibling;
                            if (K !== null) me = K;
                            else {
                              var I = C.return;
                              I !== null ? ((me = I), eu(I)) : (me = null);
                            }
                            break t;
                          }
                      }
                      ((Re = 0), (dt = null), ta(e, t, f, 5));
                      break;
                    case 6:
                      ((Re = 0), (dt = null), ta(e, t, f, 6));
                      break;
                    case 8:
                      (ur(), (De = 6));
                      break e;
                    default:
                      throw Error(o(462));
                  }
                }
                Zp();
                break;
              } catch ($) {
                Ls(e, $);
              }
            while (!0);
            return (
              (Zt = qn = null),
              (ue.H = u),
              (ue.A = r),
              (be = a),
              me !== null ? 0 : ((_e = null), (he = 0), Ul(), De)
            );
          }
          function Zp() {
            for (; me !== null && !S0(); ) Ys(me);
          }
          function Ys(e) {
            var t = os(e.alternate, e, Jt);
            ((e.memoizedProps = e.pendingProps), t === null ? eu(e) : (me = t));
          }
          function Qs(e) {
            var t = e,
              a = t.alternate;
            switch (t.tag) {
              case 15:
              case 0:
                t = ns(a, t, t.pendingProps, t.type, void 0, he);
                break;
              case 11:
                t = ns(a, t, t.pendingProps, t.type.render, t.ref, he);
                break;
              case 5:
                Si(t);
              default:
                (vs(a, t), (t = me = Js(t, Jt)), (t = os(a, t, Jt)));
            }
            ((e.memoizedProps = e.pendingProps), t === null ? eu(e) : (me = t));
          }
          function ta(e, t, a, u) {
            ((Zt = qn = null), Si(t), (va = null), (ll = 0));
            var r = t.return;
            try {
              if (Bp(e, r, t, a, he)) {
                ((De = 1), Pl(e, P(a, e.current)), (me = null));
                return;
              }
            } catch (f) {
              if (r !== null) throw ((me = r), f);
              ((De = 1), Pl(e, P(a, e.current)), (me = null));
              return;
            }
            t.flags & 32768
              ? (ye || u === 1
                  ? (e = !0)
                  : Sa || (he & 536870912) !== 0
                    ? (e = !1)
                    : ((Pt = e = !0),
                      (u === 2 || u === 3 || u === 6) &&
                        ((u = gt.current),
                        u !== null && u.tag === 13 && (u.flags |= 16384))),
                ws(t, e))
              : eu(t);
          }
          function eu(e) {
            var t = e;
            do {
              if ((t.flags & 32768) !== 0) {
                ws(t, Pt);
                return;
              }
              e = t.return;
              var a = qp(t.alternate, t, Jt);
              if (a !== null) {
                me = a;
                return;
              }
              if (((t = t.sibling), t !== null)) {
                me = t;
                return;
              }
              me = t = e;
            } while (t !== null);
            De === 0 && (De = 5);
          }
          function ws(e, t) {
            do {
              var a = Vp(e.alternate, e);
              if (a !== null) {
                ((a.flags &= 32767), (me = a));
                return;
              }
              if (
                ((a = e.return),
                a !== null &&
                  ((a.flags |= 32768),
                  (a.subtreeFlags = 0),
                  (a.deletions = null)),
                !t && ((e = e.sibling), e !== null))
              ) {
                me = e;
                return;
              }
              me = e = a;
            } while (e !== null);
            ((De = 6), (me = null));
          }
          function Ks(e, t, a, u, r, f, y, C, N, H) {
            var K = ue.T,
              I = Dn();
            try {
              (tt(2), (ue.T = null), Xp(e, t, a, u, I, r, f, y, C, N, H));
            } finally {
              ((ue.T = K), tt(I));
            }
          }
          function Xp(e, t, a, u, r, f, y, C) {
            do Mn();
            while (Yn !== null);
            if ((be & 6) !== 0) throw Error(o(327));
            var N = e.finishedWork;
            if (((u = e.finishedLanes), N === null)) return null;
            if (
              ((e.finishedWork = null), (e.finishedLanes = 0), N === e.current)
            )
              throw Error(o(177));
            ((e.callbackNode = null),
              (e.callbackPriority = 0),
              (e.cancelPendingCommit = null));
            var H = N.lanes | N.childLanes;
            if (
              ((H |= zr),
              $e(e, u, H, f, y, C),
              e === _e && ((me = _e = null), (he = 0)),
              ((N.subtreeFlags & 10256) === 0 && (N.flags & 10256) === 0) ||
                Ru ||
                ((Ru = !0),
                (Kr = H),
                (Zr = a),
                Fp(Ar, function () {
                  return (Mn(), null);
                })),
              (a = (N.flags & 15990) !== 0),
              (N.subtreeFlags & 15990) !== 0 || a
                ? ((a = ue.T),
                  (ue.T = null),
                  (f = Dn()),
                  tt(2),
                  (y = be),
                  (be |= 4),
                  Gp(e, N),
                  Os(N, e),
                  cm(e.containerInfo),
                  (e.current = N),
                  bs(e, N.alternate, N),
                  C0(),
                  (be = y),
                  tt(f),
                  (ue.T = a))
                : (e.current = N),
              Ru ? ((Ru = !1), (Yn = e), (cl = u)) : Zs(e, H),
              (H = e.pendingLanes),
              H === 0 && (gn = null),
              V(N.stateNode),
              Nt(e),
              t !== null)
            )
              for (r = e.onRecoverableError, N = 0; N < t.length; N++)
                ((H = t[N]), r(H.value, { componentStack: H.stack }));
            return (
              (cl & 3) !== 0 && Mn(),
              (H = e.pendingLanes),
              (u & 4194218) !== 0 && (H & 42) !== 0
                ? e === Xr
                  ? sl++
                  : ((sl = 0), (Xr = e))
                : (sl = 0),
              Fn(0),
              null
            );
          }
          function Zs(e, t) {
            (e.pooledCacheLanes &= t) === 0 &&
              ((t = e.pooledCache),
              t != null && ((e.pooledCache = null), Xa(t)));
          }
          function Mn() {
            if (Yn !== null) {
              var e = Yn,
                t = Kr;
              Kr = 0;
              var a = z(cl),
                u = 32 > a ? 32 : a;
              a = ue.T;
              var r = Dn();
              try {
                if ((tt(u), (ue.T = null), Yn === null)) var f = !1;
                else {
                  ((u = Zr), (Zr = null));
                  var y = Yn,
                    C = cl;
                  if (((Yn = null), (cl = 0), (be & 6) !== 0))
                    throw Error(o(331));
                  var N = be;
                  if (
                    ((be |= 4),
                    zs(y.current),
                    Ns(y, y.current, C, u),
                    (be = N),
                    Fn(0, !1),
                    ct && typeof ct.onPostCommitFiberRoot == 'function')
                  )
                    try {
                      ct.onPostCommitFiberRoot(el, y);
                    } catch {}
                  f = !0;
                }
                return f;
              } finally {
                (tt(r), (ue.T = a), Zs(e, t));
              }
            }
            return !1;
          }
          function Xs(e, t, a) {
            ((t = P(a, t)),
              (t = xi(e.stateNode, t, 2)),
              (e = tn(e, t, 2)),
              e !== null && (fe(e, 2), Nt(e)));
          }
          function Se(e, t, a) {
            if (e.tag === 3) Xs(e, e, a);
            else
              for (; t !== null; ) {
                if (t.tag === 3) {
                  Xs(t, e, a);
                  break;
                } else if (t.tag === 1) {
                  var u = t.stateNode;
                  if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof u.componentDidCatch == 'function' &&
                      (gn === null || !gn.has(u)))
                  ) {
                    ((e = P(a, e)),
                      (a = Wc(2)),
                      (u = tn(t, a, 2)),
                      u !== null && (Fc(a, u, t, e), fe(u, 2), Nt(u)));
                    break;
                  }
                }
                t = t.return;
              }
          }
          function or(e, t, a) {
            var u = e.pingCache;
            if (u === null) {
              u = e.pingCache = new x0();
              var r = new Set();
              u.set(t, r);
            } else
              ((r = u.get(t)), r === void 0 && ((r = new Set()), u.set(t, r)));
            r.has(a) ||
              ((Gr = !0), r.add(a), (e = Pp.bind(null, e, t, a)), t.then(e, e));
          }
          function Pp(e, t, a) {
            var u = e.pingCache;
            (u !== null && u.delete(t),
              (e.pingedLanes |= e.suspendedLanes & a),
              (e.warmLanes &= ~a),
              _e === e &&
                (he & a) === a &&
                (De === 4 ||
                (De === 3 && (he & 62914560) === he && 300 > _t() - wr)
                  ? (be & 2) === 0 && ea(e, 0)
                  : (Yr |= a),
                Ca === he && (Ca = 0)),
              Nt(e));
          }
          function Ps(e, t) {
            (t === 0 && (t = F()),
              (e = kt(e, t)),
              e !== null && (fe(e, t), Nt(e)));
          }
          function Jp(e) {
            var t = e.memoizedState,
              a = 0;
            (t !== null && (a = t.retryLane), Ps(e, a));
          }
          function Wp(e, t) {
            var a = 0;
            switch (e.tag) {
              case 13:
                var u = e.stateNode,
                  r = e.memoizedState;
                r !== null && (a = r.retryLane);
                break;
              case 19:
                u = e.stateNode;
                break;
              case 22:
                u = e.stateNode._retryCache;
                break;
              default:
                throw Error(o(314));
            }
            (u !== null && u.delete(t), Ps(e, a));
          }
          function Fp(e, t) {
            return ru(e, t);
          }
          function Ip(e, t, a, u) {
            ((this.tag = e),
              (this.key = a),
              (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                  null),
              (this.index = 0),
              (this.refCleanup = this.ref = null),
              (this.pendingProps = t),
              (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                  null),
              (this.mode = u),
              (this.subtreeFlags = this.flags = 0),
              (this.deletions = null),
              (this.childLanes = this.lanes = 0),
              (this.alternate = null));
          }
          function cr(e) {
            return ((e = e.prototype), !(!e || !e.isReactComponent));
          }
          function cn(e, t) {
            var a = e.alternate;
            return (
              a === null
                ? ((a = i(e.tag, t, e.key, e.mode)),
                  (a.elementType = e.elementType),
                  (a.type = e.type),
                  (a.stateNode = e.stateNode),
                  (a.alternate = e),
                  (e.alternate = a))
                : ((a.pendingProps = t),
                  (a.type = e.type),
                  (a.flags = 0),
                  (a.subtreeFlags = 0),
                  (a.deletions = null)),
              (a.flags = e.flags & 31457280),
              (a.childLanes = e.childLanes),
              (a.lanes = e.lanes),
              (a.child = e.child),
              (a.memoizedProps = e.memoizedProps),
              (a.memoizedState = e.memoizedState),
              (a.updateQueue = e.updateQueue),
              (t = e.dependencies),
              (a.dependencies =
                t === null
                  ? null
                  : { lanes: t.lanes, firstContext: t.firstContext }),
              (a.sibling = e.sibling),
              (a.index = e.index),
              (a.ref = e.ref),
              (a.refCleanup = e.refCleanup),
              a
            );
          }
          function Js(e, t) {
            e.flags &= 31457282;
            var a = e.alternate;
            return (
              a === null
                ? ((e.childLanes = 0),
                  (e.lanes = t),
                  (e.child = null),
                  (e.subtreeFlags = 0),
                  (e.memoizedProps = null),
                  (e.memoizedState = null),
                  (e.updateQueue = null),
                  (e.dependencies = null),
                  (e.stateNode = null))
                : ((e.childLanes = a.childLanes),
                  (e.lanes = a.lanes),
                  (e.child = a.child),
                  (e.subtreeFlags = 0),
                  (e.deletions = null),
                  (e.memoizedProps = a.memoizedProps),
                  (e.memoizedState = a.memoizedState),
                  (e.updateQueue = a.updateQueue),
                  (e.type = a.type),
                  (t = a.dependencies),
                  (e.dependencies =
                    t === null
                      ? null
                      : { lanes: t.lanes, firstContext: t.firstContext })),
              e
            );
          }
          function tu(e, t, a, u, r, f) {
            var y = 0;
            if (((u = e), typeof e == 'function')) cr(e) && (y = 1);
            else if (typeof e == 'string')
              y =
                mt && Pe
                  ? bf(e, a, Ke.current)
                    ? 26
                    : zf(e)
                      ? 27
                      : 5
                  : mt
                    ? bf(e, a, Ke.current)
                      ? 26
                      : 5
                    : Pe && zf(e)
                      ? 27
                      : 5;
            else
              e: switch (e) {
                case aa:
                  return zn(a.children, r, f, t);
                case tf:
                  ((y = 8), (r |= 24));
                  break;
                case mr:
                  return (
                    (e = i(12, a, t, r | 2)),
                    (e.elementType = mr),
                    (e.lanes = f),
                    e
                  );
                case hr:
                  return (
                    (e = i(13, a, t, r)),
                    (e.elementType = hr),
                    (e.lanes = f),
                    e
                  );
                case yr:
                  return (
                    (e = i(19, a, t, r)),
                    (e.elementType = yr),
                    (e.lanes = f),
                    e
                  );
                case af:
                  return Ws(a, r, f, t);
                default:
                  if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                      case tm:
                      case sn:
                        y = 10;
                        break e;
                      case nf:
                        y = 9;
                        break e;
                      case vr:
                        y = 11;
                        break e;
                      case gr:
                        y = 14;
                        break e;
                      case fn:
                        ((y = 16), (u = null));
                        break e;
                    }
                  ((y = 29),
                    (a = Error(o(130, e === null ? 'null' : typeof e, ''))),
                    (u = null));
              }
            return (
              (t = i(y, a, t, r)),
              (t.elementType = e),
              (t.type = u),
              (t.lanes = f),
              t
            );
          }
          function zn(e, t, a, u) {
            return ((e = i(7, e, u, t)), (e.lanes = a), e);
          }
          function Ws(e, t, a, u) {
            ((e = i(22, e, u, t)), (e.elementType = af), (e.lanes = a));
            var r = {
              _visibility: 1,
              _pendingVisibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
              _current: null,
              detach: function () {
                var f = r._current;
                if (f === null) throw Error(o(456));
                if ((r._pendingVisibility & 2) === 0) {
                  var y = kt(f, 2);
                  y !== null && ((r._pendingVisibility |= 2), We(y, f, 2));
                }
              },
              attach: function () {
                var f = r._current;
                if (f === null) throw Error(o(456));
                if ((r._pendingVisibility & 2) !== 0) {
                  var y = kt(f, 2);
                  y !== null && ((r._pendingVisibility &= -3), We(y, f, 2));
                }
              },
            };
            return ((e.stateNode = r), e);
          }
          function sr(e, t, a) {
            return ((e = i(6, e, null, t)), (e.lanes = a), e);
          }
          function fr(e, t, a) {
            return (
              (t = i(4, e.children !== null ? e.children : [], e.key, t)),
              (t.lanes = a),
              (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
              }),
              t
            );
          }
          function $p(e, t, a, u, r, f, y, C) {
            ((this.tag = 1),
              (this.containerInfo = e),
              (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                  null),
              (this.timeoutHandle = br),
              (this.callbackNode =
                this.next =
                this.pendingContext =
                this.context =
                this.cancelPendingCommit =
                  null),
              (this.callbackPriority = 0),
              (this.expirationTimes = ne(-1)),
              (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.finishedLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                  0),
              (this.entanglements = ne(0)),
              (this.hiddenUpdates = ne(null)),
              (this.identifierPrefix = u),
              (this.onUncaughtError = r),
              (this.onCaughtError = f),
              (this.onRecoverableError = y),
              (this.pooledCache = null),
              (this.pooledCacheLanes = 0),
              (this.formState = C),
              (this.incompleteTransitions = new Map()));
          }
          function Fs(e, t, a, u, r, f, y, C, N, H, K, I) {
            return (
              (e = new $p(e, t, a, y, C, N, H, I)),
              (t = 1),
              f === !0 && (t |= 24),
              (f = i(3, null, null, t)),
              (e.current = f),
              (f.stateNode = e),
              (t = wi()),
              t.refCount++,
              (e.pooledCache = t),
              t.refCount++,
              (f.memoizedState = { element: u, isDehydrated: a, cache: t }),
              fi(f),
              e
            );
          }
          function Is(e) {
            return e ? ((e = ia), e) : ia;
          }
          function $s(e) {
            var t = e._reactInternals;
            if (t === void 0)
              throw typeof e.render == 'function'
                ? Error(o(188))
                : ((e = Object.keys(e).join(',')), Error(o(268, e)));
            return (
              (e = R(t)),
              (e = e !== null ? j(e) : null),
              e === null ? null : Ia(e.stateNode)
            );
          }
          function ks(e, t, a, u, r, f) {
            ((r = Is(r)),
              u.context === null ? (u.context = r) : (u.pendingContext = r),
              (u = en(t)),
              (u.payload = { element: a }),
              (f = f === void 0 ? null : f),
              f !== null && (u.callback = f),
              (a = tn(e, u, t)),
              a !== null && (We(a, e, t), qa(a, e, t)));
          }
          function ef(e, t) {
            if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
              var a = e.retryLane;
              e.retryLane = a !== 0 && a < t ? a : t;
            }
          }
          function dr(e, t) {
            (ef(e, t), (e = e.alternate) && ef(e, t));
          }
          var pe = {},
            kp = nt(),
            rt = q0(),
            pr = Object.assign,
            em = Symbol.for('react.element'),
            nu = Symbol.for('react.transitional.element'),
            na = Symbol.for('react.portal'),
            aa = Symbol.for('react.fragment'),
            tf = Symbol.for('react.strict_mode'),
            mr = Symbol.for('react.profiler'),
            tm = Symbol.for('react.provider'),
            nf = Symbol.for('react.consumer'),
            sn = Symbol.for('react.context'),
            vr = Symbol.for('react.forward_ref'),
            hr = Symbol.for('react.suspense'),
            yr = Symbol.for('react.suspense_list'),
            gr = Symbol.for('react.memo'),
            fn = Symbol.for('react.lazy'),
            af = Symbol.for('react.offscreen'),
            nm = Symbol.for('react.memo_cache_sentinel'),
            lf = Symbol.iterator,
            am = Symbol.for('react.client.reference'),
            ue =
              kp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            Er,
            uf,
            Sr = !1,
            au = Array.isArray,
            lm = l.rendererVersion,
            um = l.rendererPackageName,
            rf = l.extraDevToolsConfig,
            Ia = l.getPublicInstance,
            im = l.getRootHostContext,
            rm = l.getChildHostContext,
            om = l.prepareForCommit,
            cm = l.resetAfterCommit,
            sm = l.createInstance,
            Cr = l.appendInitialChild,
            of = l.finalizeInitialChildren,
            lu = l.shouldSetTextContent,
            cf = l.createTextInstance,
            fm = l.scheduleTimeout,
            dm = l.cancelTimeout,
            br = l.noTimeout,
            Qt = l.isPrimaryRenderer;
          l.warnsIfNotActing;
          var Xe = l.supportsMutation,
            dn = l.supportsPersistence,
            pt = l.supportsHydration,
            sf = l.getInstanceFromNode;
          (l.beforeActiveInstanceBlur, l.afterActiveInstanceBlur);
          var pm = l.preparePortalMount;
          (l.prepareScopeUpdate, l.getInstanceFromScope);
          var tt = l.setCurrentUpdatePriority,
            Dn = l.getCurrentUpdatePriority,
            mm = l.resolveUpdatePriority;
          (l.resolveEventType, l.resolveEventTimeStamp);
          var vm = l.shouldAttemptEagerTransition,
            hm = l.detachDeletedInstance;
          l.requestPostPaintCallback;
          var ym = l.maySuspendCommit,
            ff = l.preloadInstance,
            gm = l.startSuspendingCommit,
            df = l.suspendInstance,
            Em = l.waitForCommitToBeReady,
            la = l.NotPendingTransition,
            xn = l.HostTransitionContext,
            Sm = l.resetFormInstance;
          l.bindToConsole;
          var Cm = l.supportsMicrotasks,
            bm = l.scheduleMicrotask,
            $a = l.supportsTestSelectors,
            _m = l.findFiberRoot,
            Rm = l.getBoundingRect,
            Om = l.getTextContent,
            ka = l.isHiddenSubtree,
            Tm = l.matchAccessibilityRole,
            Nm = l.setFocusIfFocusable,
            Am = l.setupIntersectionObserver,
            Mm = l.appendChild,
            zm = l.appendChildToContainer,
            Dm = l.commitTextUpdate,
            xm = l.commitMount,
            jm = l.commitUpdate,
            Um = l.insertBefore,
            Hm = l.insertInContainerBefore,
            Bm = l.removeChild,
            Lm = l.removeChildFromContainer,
            pf = l.resetTextContent,
            qm = l.hideInstance,
            Vm = l.hideTextInstance,
            Gm = l.unhideInstance,
            Ym = l.unhideTextInstance,
            Qm = l.clearContainer,
            wm = l.cloneInstance,
            mf = l.createContainerChildSet,
            vf = l.appendChildToContainerChildSet,
            Km = l.finalizeContainerChildren,
            hf = l.replaceContainerChildren,
            yf = l.cloneHiddenInstance,
            gf = l.cloneHiddenTextInstance,
            _r = l.isSuspenseInstancePending,
            Rr = l.isSuspenseInstanceFallback,
            Zm = l.getSuspenseInstanceFallbackErrorDetails,
            Xm = l.registerSuspenseInstanceRetry,
            Pm = l.canHydrateFormStateMarker,
            Jm = l.isFormStateMarkerMatching,
            Ef = l.getNextHydratableSibling,
            Sf = l.getFirstHydratableChild,
            Wm = l.getFirstHydratableChildWithinContainer,
            Fm = l.getFirstHydratableChildWithinSuspenseInstance,
            Im = l.canHydrateInstance,
            $m = l.canHydrateTextInstance,
            km = l.canHydrateSuspenseInstance,
            e0 = l.hydrateInstance,
            t0 = l.hydrateTextInstance,
            n0 = l.hydrateSuspenseInstance,
            a0 = l.getNextHydratableInstanceAfterSuspenseInstance,
            l0 = l.commitHydratedContainer,
            u0 = l.commitHydratedSuspenseInstance,
            i0 = l.clearSuspenseBoundary,
            r0 = l.clearSuspenseBoundaryFromContainer,
            Cf = l.shouldDeleteUnhydratedTailInstances;
          (l.diffHydratedPropsForDevWarnings,
            l.diffHydratedTextForDevWarnings,
            l.describeHydratableInstanceForDevWarnings);
          var o0 = l.validateHydratableInstance,
            c0 = l.validateHydratableTextInstance,
            mt = l.supportsResources,
            bf = l.isHostHoistableType,
            Or = l.getHoistableRoot,
            _f = l.getResource,
            Rf = l.acquireResource,
            Of = l.releaseResource,
            s0 = l.hydrateHoistable,
            Tf = l.mountHoistable,
            Nf = l.unmountHoistable,
            f0 = l.createHoistableInstance,
            d0 = l.prepareToCommitHoistables,
            p0 = l.mayResourceSuspendCommit,
            Af = l.preloadResource,
            m0 = l.suspendResource,
            Pe = l.supportsSingletons,
            Mf = l.resolveSingletonInstance,
            v0 = l.clearSingleton,
            h0 = l.acquireSingletonInstance,
            y0 = l.releaseSingletonInstance,
            zf = l.isHostSingletonType,
            Tr = [],
            ua = -1,
            ia = {},
            ot = Math.clz32 ? Math.clz32 : B,
            g0 = Math.log,
            E0 = Math.LN2,
            uu = 128,
            iu = 4194304,
            ru = rt.unstable_scheduleCallback,
            Nr = rt.unstable_cancelCallback,
            S0 = rt.unstable_shouldYield,
            C0 = rt.unstable_requestPaint,
            _t = rt.unstable_now,
            Df = rt.unstable_ImmediatePriority,
            b0 = rt.unstable_UserBlockingPriority,
            Ar = rt.unstable_NormalPriority,
            _0 = rt.unstable_IdlePriority,
            R0 = rt.log,
            O0 = rt.unstable_setDisableYieldValue,
            el = null,
            ct = null,
            st = typeof Object.is == 'function' ? Object.is : X,
            xf = new WeakMap(),
            ra = [],
            oa = 0,
            ou = null,
            cu = 0,
            vt = [],
            ht = 0,
            jn = null,
            wt = 1,
            Kt = '',
            Ke = x(null),
            tl = x(null),
            pn = x(null),
            su = x(null),
            Fe = null,
            Je = null,
            ye = !1,
            Rt = null,
            At = !1,
            Mr = Error(o(519)),
            yt = [],
            ca = 0,
            zr = 0,
            fu = null,
            sa = null,
            Dr = !1,
            du = !1,
            xr = !1,
            fa = 0,
            nl = null,
            jr = 0,
            da = 0,
            pa = null,
            mn = !1,
            Ur = !1,
            T0 = Object.prototype.hasOwnProperty,
            al = Error(o(460)),
            Hr = Error(o(474)),
            pu = { then: function () {} },
            ma = null,
            va = null,
            ll = 0,
            Un = cc(!0),
            jf = cc(!1),
            ha = x(null),
            mu = x(0),
            gt = x(null),
            Mt = null,
            qe = x(0),
            vn = 0,
            se = null,
            Ce = null,
            He = null,
            vu = !1,
            ya = !1,
            Hn = !1,
            hu = 0,
            ul = 0,
            ga = null,
            N0 = 0,
            Br = function () {
              return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              };
            },
            zt = {
              readContext: Ze,
              use: Ql,
              useCallback: je,
              useContext: je,
              useEffect: je,
              useImperativeHandle: je,
              useLayoutEffect: je,
              useInsertionEffect: je,
              useMemo: je,
              useReducer: je,
              useRef: je,
              useState: je,
              useDebugValue: je,
              useDeferredValue: je,
              useTransition: je,
              useSyncExternalStore: je,
              useId: je,
            };
          ((zt.useCacheRefresh = je),
            (zt.useMemoCache = je),
            (zt.useHostTransitionStatus = je),
            (zt.useFormState = je),
            (zt.useActionState = je),
            (zt.useOptimistic = je));
          var Bn = {
            readContext: Ze,
            use: Ql,
            useCallback: function (e, t) {
              return ((ke().memoizedState = [e, t === void 0 ? null : t]), e);
            },
            useContext: Ze,
            useEffect: Dc,
            useImperativeHandle: function (e, t, a) {
              ((a = a != null ? a.concat([e]) : null),
                Kl(4194308, 4, Uc.bind(null, t, e), a));
            },
            useLayoutEffect: function (e, t) {
              return Kl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              Kl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var a = ke();
              t = t === void 0 ? null : t;
              var u = e();
              if (Hn) {
                L(!0);
                try {
                  e();
                } finally {
                  L(!1);
                }
              }
              return ((a.memoizedState = [u, t]), u);
            },
            useReducer: function (e, t, a) {
              var u = ke();
              if (a !== void 0) {
                var r = a(t);
                if (Hn) {
                  L(!0);
                  try {
                    a(t);
                  } finally {
                    L(!1);
                  }
                }
              } else r = t;
              return (
                (u.memoizedState = u.baseState = r),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: r,
                }),
                (u.queue = e),
                (e = e.dispatch = Hp.bind(null, se, e)),
                [u.memoizedState, e]
              );
            },
            useRef: function (e) {
              var t = ke();
              return ((e = { current: e }), (t.memoizedState = e));
            },
            useState: function (e) {
              e = Ri(e);
              var t = e.queue,
                a = wc.bind(null, se, t);
              return ((t.dispatch = a), [e.memoizedState, a]);
            },
            useDebugValue: Ni,
            useDeferredValue: function (e, t) {
              var a = ke();
              return Ai(a, e, t);
            },
            useTransition: function () {
              var e = Ri(!1);
              return (
                (e = Vc.bind(null, se, e.queue, !0, !1)),
                (ke().memoizedState = e),
                [!1, e]
              );
            },
            useSyncExternalStore: function (e, t, a) {
              var u = se,
                r = ke();
              if (ye) {
                if (a === void 0) throw Error(o(407));
                a = a();
              } else {
                if (((a = t()), _e === null)) throw Error(o(349));
                (he & 60) !== 0 || vc(u, t, a);
              }
              r.memoizedState = a;
              var f = { value: a, getSnapshot: t };
              return (
                (r.queue = f),
                Dc(yc.bind(null, u, f, e), [e]),
                (u.flags |= 2048),
                In(9, hc.bind(null, u, f, a, t), { destroy: void 0 }, null),
                a
              );
            },
            useId: function () {
              var e = ke(),
                t = _e.identifierPrefix;
              if (ye) {
                var a = Kt,
                  u = wt;
                ((a = (u & ~(1 << (32 - ot(u) - 1))).toString(32) + a),
                  (t = ':' + t + 'R' + a),
                  (a = hu++),
                  0 < a && (t += 'H' + a.toString(32)),
                  (t += ':'));
              } else ((a = N0++), (t = ':' + t + 'r' + a.toString(32) + ':'));
              return (e.memoizedState = t);
            },
            useCacheRefresh: function () {
              return (ke().memoizedState = Up.bind(null, se));
            },
          };
          ((Bn.useMemoCache = Ci),
            (Bn.useHostTransitionStatus = Mi),
            (Bn.useFormState = Tc),
            (Bn.useActionState = Tc),
            (Bn.useOptimistic = function (e) {
              var t = ke();
              t.memoizedState = t.baseState = e;
              var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (t.queue = a),
                (t = zi.bind(null, se, !0, a)),
                (a.dispatch = t),
                [e, t]
              );
            }));
          var hn = {
            readContext: Ze,
            use: Ql,
            useCallback: Bc,
            useContext: Ze,
            useEffect: Ti,
            useImperativeHandle: Hc,
            useInsertionEffect: xc,
            useLayoutEffect: jc,
            useMemo: Lc,
            useReducer: wl,
            useRef: zc,
            useState: function () {
              return wl(Lt);
            },
            useDebugValue: Ni,
            useDeferredValue: function (e, t) {
              var a = Ue();
              return qc(a, Ce.memoizedState, e, t);
            },
            useTransition: function () {
              var e = wl(Lt)[0],
                t = Ue().memoizedState;
              return [typeof e == 'boolean' ? e : Qa(e), t];
            },
            useSyncExternalStore: mc,
            useId: Yc,
          };
          ((hn.useCacheRefresh = Qc),
            (hn.useMemoCache = Ci),
            (hn.useHostTransitionStatus = Mi),
            (hn.useFormState = Nc),
            (hn.useActionState = Nc),
            (hn.useOptimistic = function (e, t) {
              var a = Ue();
              return Sc(a, Ce, e, t);
            }));
          var Ln = {
            readContext: Ze,
            use: Ql,
            useCallback: Bc,
            useContext: Ze,
            useEffect: Ti,
            useImperativeHandle: Hc,
            useInsertionEffect: xc,
            useLayoutEffect: jc,
            useMemo: Lc,
            useReducer: _i,
            useRef: zc,
            useState: function () {
              return _i(Lt);
            },
            useDebugValue: Ni,
            useDeferredValue: function (e, t) {
              var a = Ue();
              return Ce === null ? Ai(a, e, t) : qc(a, Ce.memoizedState, e, t);
            },
            useTransition: function () {
              var e = _i(Lt)[0],
                t = Ue().memoizedState;
              return [typeof e == 'boolean' ? e : Qa(e), t];
            },
            useSyncExternalStore: mc,
            useId: Yc,
          };
          ((Ln.useCacheRefresh = Qc),
            (Ln.useMemoCache = Ci),
            (Ln.useHostTransitionStatus = Mi),
            (Ln.useFormState = Mc),
            (Ln.useActionState = Mc),
            (Ln.useOptimistic = function (e, t) {
              var a = Ue();
              return Ce !== null
                ? Sc(a, Ce, e, t)
                : ((a.baseState = e), [e, a.queue.dispatch]);
            }));
          var Lr = {
              isMounted: function (e) {
                return (e = e._reactInternals) ? E(e) === e : !1;
              },
              enqueueSetState: function (e, t, a) {
                e = e._reactInternals;
                var u = it(),
                  r = en(u);
                ((r.payload = t),
                  a != null && (r.callback = a),
                  (t = tn(e, r, u)),
                  t !== null && (We(t, e, u), qa(t, e, u)));
              },
              enqueueReplaceState: function (e, t, a) {
                e = e._reactInternals;
                var u = it(),
                  r = en(u);
                ((r.tag = 1),
                  (r.payload = t),
                  a != null && (r.callback = a),
                  (t = tn(e, r, u)),
                  t !== null && (We(t, e, u), qa(t, e, u)));
              },
              enqueueForceUpdate: function (e, t) {
                e = e._reactInternals;
                var a = it(),
                  u = en(a);
                ((u.tag = 2),
                  t != null && (u.callback = t),
                  (t = tn(e, u, a)),
                  t !== null && (We(t, e, a), qa(t, e, a)));
              },
            },
            Uf =
              typeof reportError == 'function'
                ? reportError
                : function (e) {
                    if (
                      typeof window == 'object' &&
                      typeof window.ErrorEvent == 'function'
                    ) {
                      var t = new window.ErrorEvent('error', {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                          typeof e == 'object' &&
                          e !== null &&
                          typeof e.message == 'string'
                            ? String(e.message)
                            : String(e),
                        error: e,
                      });
                      if (!window.dispatchEvent(t)) return;
                    } else if (
                      typeof process == 'object' &&
                      typeof process.emit == 'function'
                    ) {
                      process.emit('uncaughtException', e);
                      return;
                    }
                    console.error(e);
                  },
            Hf = Error(o(461)),
            Ve = !1,
            qr = { dehydrated: null, treeContext: null, retryLane: 0 },
            yu = x(null),
            qn = null,
            Zt = null,
            A0 =
              typeof AbortController < 'u'
                ? AbortController
                : function () {
                    var e = [],
                      t = (this.signal = {
                        aborted: !1,
                        addEventListener: function (a, u) {
                          e.push(u);
                        },
                      });
                    this.abort = function () {
                      ((t.aborted = !0),
                        e.forEach(function (a) {
                          return a();
                        }));
                    };
                  },
            M0 = rt.unstable_scheduleCallback,
            z0 = rt.unstable_NormalPriority,
            Me = {
              $$typeof: sn,
              Consumer: null,
              Provider: null,
              _currentValue: null,
              _currentValue2: null,
              _threadCount: 0,
            },
            Bf = ue.S;
          ue.S = function (e, t) {
            (typeof t == 'object' &&
              t !== null &&
              typeof t.then == 'function' &&
              Mp(e, t),
              Bf !== null && Bf(e, t));
          };
          var Vn = x(null),
            Xt = !1,
            ze = !1,
            Vr = !1,
            Lf = typeof WeakSet == 'function' ? WeakSet : Set,
            Ge = null,
            qf = !1,
            Be = null,
            ft = !1,
            Ot = null,
            Ea = 8192,
            D0 = {
              getCacheForType: function (e) {
                var t = Ze(Me),
                  a = t.data.get(e);
                return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
              },
            },
            gu = 0,
            Eu = 1,
            Su = 2,
            Cu = 3,
            bu = 4;
          if (typeof Symbol == 'function' && Symbol.for) {
            var il = Symbol.for;
            ((gu = il('selector.component')),
              (Eu = il('selector.has_pseudo_class')),
              (Su = il('selector.role')),
              (Cu = il('selector.test_id')),
              (bu = il('selector.text')));
          }
          var x0 = typeof WeakMap == 'function' ? WeakMap : Map,
            be = 0,
            _e = null,
            me = null,
            he = 0,
            Re = 0,
            dt = null,
            Pt = !1,
            Sa = !1,
            Gr = !1,
            Jt = 0,
            De = 0,
            yn = 0,
            Gn = 0,
            Yr = 0,
            Et = 0,
            Ca = 0,
            rl = null,
            Dt = null,
            Qr = !1,
            wr = 0,
            ol = 1 / 0,
            _u = null,
            gn = null,
            Ru = !1,
            Yn = null,
            cl = 0,
            Kr = 0,
            Zr = null,
            sl = 0,
            Xr = null;
          return (
            (pe.attemptContinuousHydration = function (e) {
              if (e.tag === 13) {
                var t = kt(e, 67108864);
                (t !== null && We(t, e, 67108864), dr(e, 67108864));
              }
            }),
            (pe.attemptHydrationAtCurrentPriority = function (e) {
              if (e.tag === 13) {
                var t = it(),
                  a = kt(e, t);
                (a !== null && We(a, e, t), dr(e, t));
              }
            }),
            (pe.attemptSynchronousHydration = function (e) {
              switch (e.tag) {
                case 3:
                  if (
                    ((e = e.stateNode), e.current.memoizedState.isDehydrated)
                  ) {
                    var t = G(e.pendingLanes);
                    if (t !== 0) {
                      for (e.pendingLanes |= 2, e.entangledLanes |= 2; t; ) {
                        var a = 1 << (31 - ot(t));
                        ((e.entanglements[1] |= a), (t &= ~a));
                      }
                      (Nt(e), (be & 6) === 0 && ((ol = _t() + 500), Fn(0)));
                    }
                  }
                  break;
                case 13:
                  ((t = kt(e, 2)), t !== null && We(t, e, 2), Bs(), dr(e, 2));
              }
            }),
            (pe.batchedUpdates = function (e, t) {
              return e(t);
            }),
            (pe.createComponentSelector = function (e) {
              return { $$typeof: gu, value: e };
            }),
            (pe.createContainer = function (e, t, a, u, r, f, y, C, N, H) {
              return Fs(e, t, !1, null, a, u, f, y, C, N, H, null);
            }),
            (pe.createHasPseudoClassSelector = function (e) {
              return { $$typeof: Eu, value: e };
            }),
            (pe.createHydrationContainer = function (
              e,
              t,
              a,
              u,
              r,
              f,
              y,
              C,
              N,
              H,
              K,
              I,
              $
            ) {
              return (
                (e = Fs(a, u, !0, e, r, f, C, N, H, K, I, $)),
                (e.context = Is(null)),
                (a = e.current),
                (u = it()),
                (r = en(u)),
                (r.callback = t ?? null),
                tn(a, r, u),
                (e.current.lanes = u),
                fe(e, u),
                Nt(e),
                e
              );
            }),
            (pe.createPortal = function (e, t, a) {
              var u =
                3 < arguments.length && arguments[3] !== void 0
                  ? arguments[3]
                  : null;
              return {
                $$typeof: na,
                key: u == null ? null : '' + u,
                children: e,
                containerInfo: t,
                implementation: a,
              };
            }),
            (pe.createRoleSelector = function (e) {
              return { $$typeof: Su, value: e };
            }),
            (pe.createTestNameSelector = function (e) {
              return { $$typeof: Cu, value: e };
            }),
            (pe.createTextSelector = function (e) {
              return { $$typeof: bu, value: e };
            }),
            (pe.defaultOnCaughtError = function (e) {
              console.error(e);
            }),
            (pe.defaultOnRecoverableError = function (e) {
              Uf(e);
            }),
            (pe.defaultOnUncaughtError = function (e) {
              Uf(e);
            }),
            (pe.deferredUpdates = function (e) {
              var t = ue.T,
                a = Dn();
              try {
                return (tt(32), (ue.T = null), e());
              } finally {
                (tt(a), (ue.T = t));
              }
            }),
            (pe.discreteUpdates = function (e, t, a, u, r) {
              var f = ue.T,
                y = Dn();
              try {
                return (tt(2), (ue.T = null), e(t, a, u, r));
              } finally {
                (tt(y), (ue.T = f), be === 0 && (ol = _t() + 500));
              }
            }),
            (pe.findAllNodes = ar),
            (pe.findBoundingRects = function (e, t) {
              if (!$a) throw Error(o(363));
              ((t = ar(e, t)), (e = []));
              for (var a = 0; a < t.length; a++) e.push(Rm(t[a]));
              for (t = e.length - 1; 0 < t; t--) {
                a = e[t];
                for (
                  var u = a.x,
                    r = u + a.width,
                    f = a.y,
                    y = f + a.height,
                    C = t - 1;
                  0 <= C;
                  C--
                )
                  if (t !== C) {
                    var N = e[C],
                      H = N.x,
                      K = H + N.width,
                      I = N.y,
                      $ = I + N.height;
                    if (u >= H && f >= I && r <= K && y <= $) {
                      e.splice(t, 1);
                      break;
                    } else if (
                      u !== H ||
                      a.width !== N.width ||
                      $ < f ||
                      I > y
                    ) {
                      if (
                        !(f !== I || a.height !== N.height || K < u || H > r)
                      ) {
                        (H > u && ((N.width += H - u), (N.x = u)),
                          K < r && (N.width = r - H),
                          e.splice(t, 1));
                        break;
                      }
                    } else {
                      (I > f && ((N.height += I - f), (N.y = f)),
                        $ < y && (N.height = y - I),
                        e.splice(t, 1));
                      break;
                    }
                  }
              }
              return e;
            }),
            (pe.findHostInstance = $s),
            (pe.findHostInstanceWithNoPortals = function (e) {
              return (
                (e = R(e)),
                (e = e !== null ? A(e) : null),
                e === null ? null : Ia(e.stateNode)
              );
            }),
            (pe.findHostInstanceWithWarning = function (e) {
              return $s(e);
            }),
            (pe.flushPassiveEffects = Mn),
            (pe.flushSyncFromReconciler = function (e) {
              var t = be;
              be |= 1;
              var a = ue.T,
                u = Dn();
              try {
                if ((tt(2), (ue.T = null), e)) return e();
              } finally {
                (tt(u), (ue.T = a), (be = t), (be & 6) === 0 && Fn(0));
              }
            }),
            (pe.flushSyncWork = Bs),
            (pe.focusWithin = function (e, t) {
              if (!$a) throw Error(o(363));
              for (
                e = er(e), t = xs(e, t), t = Array.from(t), e = 0;
                e < t.length;

              ) {
                var a = t[e++],
                  u = a.tag;
                if (!ka(a)) {
                  if ((u === 5 || u === 26 || u === 27) && Nm(a.stateNode))
                    return !0;
                  for (a = a.child; a !== null; ) (t.push(a), (a = a.sibling));
                }
              }
              return !1;
            }),
            (pe.getFindAllNodesFailureDescription = function (e, t) {
              if (!$a) throw Error(o(363));
              var a = 0,
                u = [];
              e = [er(e), 0];
              for (var r = 0; r < e.length; ) {
                var f = e[r++],
                  y = f.tag,
                  C = e[r++],
                  N = t[C];
                if (
                  ((y !== 5 && y !== 26 && y !== 27) || !ka(f)) &&
                  (tr(f, N) && (u.push(nr(N)), C++, C > a && (a = C)),
                  C < t.length)
                )
                  for (f = f.child; f !== null; )
                    (e.push(f, C), (f = f.sibling));
              }
              if (a < t.length) {
                for (e = []; a < t.length; a++) e.push(nr(t[a]));
                return (
                  `findAllNodes was able to match part of the selector:
  ` +
                  (u.join(' > ') +
                    `

No matching component was found for:
  `) +
                  e.join(' > ')
                );
              }
              return null;
            }),
            (pe.getPublicRootInstance = function (e) {
              if (((e = e.current), !e.child)) return null;
              switch (e.child.tag) {
                case 27:
                case 5:
                  return Ia(e.child.stateNode);
                default:
                  return e.child.stateNode;
              }
            }),
            (pe.injectIntoDevTools = function () {
              var e = {
                bundleType: 0,
                version: lm,
                rendererPackageName: um,
                currentDispatcherRef: ue,
                findFiberByHostInstance: sf,
                reconcilerVersion: '19.0.0',
              };
              if (
                (rf !== null && (e.rendererConfig = rf),
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u')
              )
                e = !1;
              else {
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (t.isDisabled || !t.supportsFiber) e = !0;
                else {
                  try {
                    ((el = t.inject(e)), (ct = t));
                  } catch {}
                  e = !!t.checkDCE;
                }
              }
              return e;
            }),
            (pe.isAlreadyRendering = function () {
              return !1;
            }),
            (pe.observeVisibleRects = function (e, t, a, u) {
              if (!$a) throw Error(o(363));
              e = ar(e, t);
              var r = Am(e, a, u).disconnect;
              return {
                disconnect: function () {
                  r();
                },
              };
            }),
            (pe.shouldError = function () {
              return null;
            }),
            (pe.shouldSuspend = function () {
              return !1;
            }),
            (pe.startHostTransition = function (e, t, a, u) {
              if (e.tag !== 5) throw Error(o(476));
              var r = Gc(e).queue;
              Vc(
                e,
                r,
                t,
                la,
                a === null
                  ? c
                  : function () {
                      var f = Gc(e).next.queue;
                      return (wa(e, f, {}, it()), a(u));
                    }
              );
            }),
            (pe.updateContainer = function (e, t, a, u) {
              var r = t.current,
                f = it();
              return (ks(r, f, e, t, a, u), f);
            }),
            (pe.updateContainerSync = function (e, t, a, u) {
              return (t.tag === 0 && Mn(), ks(t.current, 2, e, t, a, u), 2);
            }),
            pe
          );
        }),
          (n.exports.default = n.exports),
          Object.defineProperty(n.exports, '__esModule', { value: !0 }));
      })(lo)),
    lo.exports
  );
}
var Nd;
function Zh() {
  return (Nd || ((Nd = 1), (ao.exports = Kh())), ao.exports);
}
var Xh = Zh();
const Ph = zo(Xh);
function j1(n) {
  let l = n.root;
  for (; l.getState().previousRoot; ) l = l.getState().previousRoot;
  return l;
}
const U1 = (n) => n && n.isOrthographicCamera,
  Jh = (n) => n && n.hasOwnProperty('current'),
  Wh = (n) =>
    n != null && (typeof n == 'string' || typeof n == 'number' || n.isColor),
  Dl = ((n, l) =>
    typeof window < 'u' &&
    (((n = window.document) == null ? void 0 : n.createElement) ||
      ((l = window.navigator) == null ? void 0 : l.product) ===
        'ReactNative'))()
    ? v.useLayoutEffect
    : v.useEffect;
function qo(n) {
  const l = v.useRef(n);
  return (Dl(() => void (l.current = n), [n]), l);
}
function Fh() {
  const n = V0(),
    l = G0();
  return v.useMemo(
    () =>
      ({ children: i }) => {
        const o = !!Y0(n, !0, (s) => s.type === v.StrictMode)
          ? v.StrictMode
          : v.Fragment;
        return k.jsx(o, { children: k.jsx(l, { children: i }) });
      },
    [n, l]
  );
}
function Ih({ set: n }) {
  return (Dl(() => (n(new Promise(() => null)), () => n(!1)), [n]), null);
}
const $h = ((n) => (
  (n = class extends v.Component {
    constructor(...i) {
      (super(...i), (this.state = { error: !1 }));
    }
    componentDidCatch(i) {
      this.props.set(i);
    }
    render() {
      return this.state.error ? null : this.props.children;
    }
  }),
  (n.getDerivedStateFromError = () => ({ error: !0 })),
  n
))();
function H1(n) {
  var l;
  const i =
    typeof window < 'u' ? ((l = window.devicePixelRatio) != null ? l : 2) : 1;
  return Array.isArray(n) ? Math.min(Math.max(n[0], i), n[1]) : n;
}
function ba(n) {
  var l;
  return (l = n.__r3f) == null ? void 0 : l.root.getState();
}
const Te = {
  obj: (n) => n === Object(n) && !Te.arr(n) && typeof n != 'function',
  fun: (n) => typeof n == 'function',
  str: (n) => typeof n == 'string',
  num: (n) => typeof n == 'number',
  boo: (n) => typeof n == 'boolean',
  und: (n) => n === void 0,
  nul: (n) => n === null,
  arr: (n) => Array.isArray(n),
  equ(
    n,
    l,
    { arrays: i = 'shallow', objects: c = 'reference', strict: o = !0 } = {}
  ) {
    if (typeof n != typeof l || !!n != !!l) return !1;
    if (Te.str(n) || Te.num(n) || Te.boo(n)) return n === l;
    const s = Te.obj(n);
    if (s && c === 'reference') return n === l;
    const p = Te.arr(n);
    if (p && i === 'reference') return n === l;
    if ((p || s) && n === l) return !0;
    let d;
    for (d in n) if (!(d in l)) return !1;
    if (s && i === 'shallow' && c === 'shallow') {
      for (d in o ? l : n)
        if (!Te.equ(n[d], l[d], { strict: o, objects: 'reference' })) return !1;
    } else for (d in o ? l : n) if (n[d] !== l[d]) return !1;
    if (Te.und(d)) {
      if (
        (p && n.length === 0 && l.length === 0) ||
        (s && Object.keys(n).length === 0 && Object.keys(l).length === 0)
      )
        return !0;
      if (n !== l) return !1;
    }
    return !0;
  },
};
function kh(n) {
  const l = { nodes: {}, materials: {}, meshes: {} };
  return (
    n &&
      n.traverse((i) => {
        (i.name && (l.nodes[i.name] = i),
          i.material &&
            !l.materials[i.material.name] &&
            (l.materials[i.material.name] = i.material),
          i.isMesh && !l.meshes[i.name] && (l.meshes[i.name] = i));
      }),
    l
  );
}
function ey(n) {
  n.type !== 'Scene' && (n.dispose == null || n.dispose());
  for (const l in n) {
    const i = n[l];
    i?.type !== 'Scene' && (i == null || i.dispose == null || i.dispose());
  }
}
const B1 = ['children', 'key', 'ref'];
function ty(n) {
  const l = {};
  for (const i in n) B1.includes(i) || (l[i] = n[i]);
  return l;
}
function Fu(n, l, i, c) {
  const o = n;
  let s = o?.__r3f;
  return (
    s ||
      ((s = {
        root: l,
        type: i,
        parent: null,
        children: [],
        props: ty(c),
        object: o,
        eventCount: 0,
        handlers: {},
        isHidden: !1,
      }),
      o && (o.__r3f = s)),
    s
  );
}
function Rl(n, l) {
  if (!l.includes('-')) return { root: n, key: l, target: n[l] };
  if (l in n) return { root: n, key: l, target: n[l] };
  let i = n;
  const c = l.split('-');
  for (const o of c) {
    if (typeof i != 'object' || i === null) {
      if (i !== void 0) {
        const s = c.slice(c.indexOf(o)).join('-');
        return { root: i, key: s, target: void 0 };
      }
      return { root: n, key: l, target: void 0 };
    }
    ((l = o), (n = i), (i = i[l]));
  }
  return { root: n, key: l, target: i };
}
const Ad = /-\d+$/;
function Iu(n, l) {
  if (Te.str(l.props.attach)) {
    if (Ad.test(l.props.attach)) {
      const o = l.props.attach.replace(Ad, ''),
        { root: s, key: p } = Rl(n.object, o);
      Array.isArray(s[p]) || (s[p] = []);
    }
    const { root: i, key: c } = Rl(n.object, l.props.attach);
    ((l.previousAttach = i[c]), (i[c] = l.object));
  } else
    Te.fun(l.props.attach) &&
      (l.previousAttach = l.props.attach(n.object, l.object));
}
function $u(n, l) {
  if (Te.str(l.props.attach)) {
    const { root: i, key: c } = Rl(n.object, l.props.attach),
      o = l.previousAttach;
    o === void 0 ? delete i[c] : (i[c] = o);
  } else l.previousAttach == null || l.previousAttach(n.object, l.object);
  delete l.previousAttach;
}
const _o = [
    ...B1,
    'args',
    'dispose',
    'attach',
    'object',
    'onUpdate',
    'dispose',
  ],
  Md = new Map();
function ny(n) {
  let l = Md.get(n.constructor);
  try {
    l || ((l = new n.constructor()), Md.set(n.constructor, l));
  } catch {}
  return l;
}
function ay(n, l) {
  const i = {};
  for (const c in l)
    if (!_o.includes(c) && !Te.equ(l[c], n.props[c])) {
      i[c] = l[c];
      for (const o in l) o.startsWith(`${c}-`) && (i[o] = l[o]);
    }
  for (const c in n.props) {
    if (_o.includes(c) || l.hasOwnProperty(c)) continue;
    const { root: o, key: s } = Rl(n.object, c);
    if (o.constructor && o.constructor.length === 0) {
      const p = ny(o);
      Te.und(p) || (i[s] = p[s]);
    } else i[s] = 0;
  }
  return i;
}
const ly = [
    'map',
    'emissiveMap',
    'sheenColorMap',
    'specularColorMap',
    'envMap',
  ],
  uy = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function xt(n, l) {
  var i;
  const c = n.__r3f,
    o = c && j1(c).getState(),
    s = c?.eventCount;
  for (const d in l) {
    let m = l[d];
    if (_o.includes(d)) continue;
    if (c && uy.test(d)) {
      (typeof m == 'function' ? (c.handlers[d] = m) : delete c.handlers[d],
        (c.eventCount = Object.keys(c.handlers).length));
      continue;
    }
    if (m === void 0) continue;
    let { root: h, key: g, target: E } = Rl(n, d);
    if (E === void 0 && (typeof h != 'object' || h === null))
      throw Error(
        `R3F: Cannot set "${d}". Ensure it is an object before setting "${g}".`
      );
    if (E instanceof Vf && m instanceof Vf) E.mask = m.mask;
    else if (E instanceof I0 && Wh(m)) E.set(m);
    else if (
      E !== null &&
      typeof E == 'object' &&
      typeof E.set == 'function' &&
      typeof E.copy == 'function' &&
      m != null &&
      m.constructor &&
      E.constructor === m.constructor
    )
      E.copy(m);
    else if (
      E !== null &&
      typeof E == 'object' &&
      typeof E.set == 'function' &&
      Array.isArray(m)
    )
      typeof E.fromArray == 'function' ? E.fromArray(m) : E.set(...m);
    else if (
      E !== null &&
      typeof E == 'object' &&
      typeof E.set == 'function' &&
      typeof m == 'number'
    )
      typeof E.setScalar == 'function' ? E.setScalar(m) : E.set(m);
    else {
      var p;
      ((h[g] = m),
        o &&
          !o.linear &&
          ly.includes(g) &&
          (p = h[g]) != null &&
          p.isTexture &&
          h[g].format === $0 &&
          h[g].type === k0 &&
          (h[g].colorSpace = kd));
    }
  }
  if (
    c != null &&
    c.parent &&
    o != null &&
    o.internal &&
    (i = c.object) != null &&
    i.isObject3D &&
    s !== c.eventCount
  ) {
    const d = c.object,
      m = o.internal.interaction.indexOf(d);
    (m > -1 && o.internal.interaction.splice(m, 1),
      c.eventCount && d.raycast !== null && o.internal.interaction.push(d));
  }
  return (
    c &&
      c.props.attach === void 0 &&
      (c.object.isBufferGeometry
        ? (c.props.attach = 'geometry')
        : c.object.isMaterial && (c.props.attach = 'material')),
    c && Ua(c),
    n
  );
}
function Ua(n) {
  var l;
  if (!n.parent) return;
  n.props.onUpdate == null || n.props.onUpdate(n.object);
  const i = (l = n.root) == null || l.getState == null ? void 0 : l.getState();
  i && i.internal.frames === 0 && i.invalidate();
}
function L1(n, l) {
  n.manual ||
    (U1(n)
      ? ((n.left = l.width / -2),
        (n.right = l.width / 2),
        (n.top = l.height / 2),
        (n.bottom = l.height / -2))
      : (n.aspect = l.width / l.height),
    n.updateProjectionMatrix());
}
const Ie = (n) => n?.isObject3D;
function Hu(n) {
  return (n.eventObject || n.object).uuid + '/' + n.index + n.instanceId;
}
function q1(n, l, i, c) {
  const o = i.get(l);
  o &&
    (i.delete(l),
    i.size === 0 && (n.delete(c), o.target.releasePointerCapture(c)));
}
function iy(n, l) {
  const { internal: i } = n.getState();
  ((i.interaction = i.interaction.filter((c) => c !== l)),
    (i.initialHits = i.initialHits.filter((c) => c !== l)),
    i.hovered.forEach((c, o) => {
      (c.eventObject === l || c.object === l) && i.hovered.delete(o);
    }),
    i.capturedMap.forEach((c, o) => {
      q1(i.capturedMap, l, c, o);
    }));
}
function ry(n) {
  function l(m) {
    const { internal: h } = n.getState(),
      g = m.offsetX - h.initialClick[0],
      E = m.offsetY - h.initialClick[1];
    return Math.round(Math.sqrt(g * g + E * E));
  }
  function i(m) {
    return m.filter((h) =>
      ['Move', 'Over', 'Enter', 'Out', 'Leave'].some((g) => {
        var E;
        return (E = h.__r3f) == null ? void 0 : E.handlers['onPointer' + g];
      })
    );
  }
  function c(m, h) {
    const g = n.getState(),
      E = new Set(),
      T = [],
      R = h ? h(g.internal.interaction) : g.internal.interaction;
    for (let _ = 0; _ < R.length; _++) {
      const b = ba(R[_]);
      b && (b.raycaster.camera = void 0);
    }
    g.previousRoot || g.events.compute == null || g.events.compute(m, g);
    function j(_) {
      const b = ba(_);
      if (!b || !b.events.enabled || b.raycaster.camera === null) return [];
      if (b.raycaster.camera === void 0) {
        var B;
        (b.events.compute == null ||
          b.events.compute(
            m,
            b,
            (B = b.previousRoot) == null ? void 0 : B.getState()
          ),
          b.raycaster.camera === void 0 && (b.raycaster.camera = null));
      }
      return b.raycaster.camera ? b.raycaster.intersectObject(_, !0) : [];
    }
    let A = R.flatMap(j)
      .sort((_, b) => {
        const B = ba(_.object),
          G = ba(b.object);
        return !B || !G
          ? _.distance - b.distance
          : G.events.priority - B.events.priority || _.distance - b.distance;
      })
      .filter((_) => {
        const b = Hu(_);
        return E.has(b) ? !1 : (E.add(b), !0);
      });
    g.events.filter && (A = g.events.filter(A, g));
    for (const _ of A) {
      let b = _.object;
      for (; b; ) {
        var x;
        ((x = b.__r3f) != null &&
          x.eventCount &&
          T.push({ ..._, eventObject: b }),
          (b = b.parent));
      }
    }
    if ('pointerId' in m && g.internal.capturedMap.has(m.pointerId))
      for (let _ of g.internal.capturedMap.get(m.pointerId).values())
        E.has(Hu(_.intersection)) || T.push(_.intersection);
    return T;
  }
  function o(m, h, g, E) {
    if (m.length) {
      const T = { stopped: !1 };
      for (const R of m) {
        let j = ba(R.object);
        if (
          (j ||
            R.object.traverseAncestors((A) => {
              const x = ba(A);
              if (x) return ((j = x), !1);
            }),
          j)
        ) {
          const { raycaster: A, pointer: x, camera: _, internal: b } = j,
            B = new Cl(x.x, x.y, 0).unproject(_),
            G = (F) => {
              var ne, fe;
              return (ne =
                (fe = b.capturedMap.get(F)) == null
                  ? void 0
                  : fe.has(R.eventObject)) != null
                ? ne
                : !1;
            },
            Q = (F) => {
              const ne = { intersection: R, target: h.target };
              (b.capturedMap.has(F)
                ? b.capturedMap.get(F).set(R.eventObject, ne)
                : b.capturedMap.set(F, new Map([[R.eventObject, ne]])),
                h.target.setPointerCapture(F));
            },
            W = (F) => {
              const ne = b.capturedMap.get(F);
              ne && q1(b.capturedMap, R.eventObject, ne, F);
            };
          let w = {};
          for (let F in h) {
            let ne = h[F];
            typeof ne != 'function' && (w[F] = ne);
          }
          let te = {
            ...R,
            ...w,
            pointer: x,
            intersections: m,
            stopped: T.stopped,
            delta: g,
            unprojectedPoint: B,
            ray: A.ray,
            camera: _,
            stopPropagation() {
              const F = 'pointerId' in h && b.capturedMap.get(h.pointerId);
              if (
                (!F || F.has(R.eventObject)) &&
                ((te.stopped = T.stopped = !0),
                b.hovered.size &&
                  Array.from(b.hovered.values()).find(
                    (ne) => ne.eventObject === R.eventObject
                  ))
              ) {
                const ne = m.slice(0, m.indexOf(R));
                s([...ne, R]);
              }
            },
            target: {
              hasPointerCapture: G,
              setPointerCapture: Q,
              releasePointerCapture: W,
            },
            currentTarget: {
              hasPointerCapture: G,
              setPointerCapture: Q,
              releasePointerCapture: W,
            },
            nativeEvent: h,
          };
          if ((E(te), T.stopped === !0)) break;
        }
      }
    }
    return m;
  }
  function s(m) {
    const { internal: h } = n.getState();
    for (const g of h.hovered.values())
      if (
        !m.length ||
        !m.find(
          (E) =>
            E.object === g.object &&
            E.index === g.index &&
            E.instanceId === g.instanceId
        )
      ) {
        const T = g.eventObject.__r3f;
        if ((h.hovered.delete(Hu(g)), T != null && T.eventCount)) {
          const R = T.handlers,
            j = { ...g, intersections: m };
          (R.onPointerOut == null || R.onPointerOut(j),
            R.onPointerLeave == null || R.onPointerLeave(j));
        }
      }
  }
  function p(m, h) {
    for (let g = 0; g < h.length; g++) {
      const E = h[g].__r3f;
      E == null ||
        E.handlers.onPointerMissed == null ||
        E.handlers.onPointerMissed(m);
    }
  }
  function d(m) {
    switch (m) {
      case 'onPointerLeave':
      case 'onPointerCancel':
        return () => s([]);
      case 'onLostPointerCapture':
        return (h) => {
          const { internal: g } = n.getState();
          'pointerId' in h &&
            g.capturedMap.has(h.pointerId) &&
            requestAnimationFrame(() => {
              g.capturedMap.has(h.pointerId) &&
                (g.capturedMap.delete(h.pointerId), s([]));
            });
        };
    }
    return function (g) {
      const { onPointerMissed: E, internal: T } = n.getState();
      T.lastEvent.current = g;
      const R = m === 'onPointerMove',
        j = m === 'onClick' || m === 'onContextMenu' || m === 'onDoubleClick',
        x = c(g, R ? i : void 0),
        _ = j ? l(g) : 0;
      (m === 'onPointerDown' &&
        ((T.initialClick = [g.offsetX, g.offsetY]),
        (T.initialHits = x.map((B) => B.eventObject))),
        j && !x.length && _ <= 2 && (p(g, T.interaction), E && E(g)),
        R && s(x));
      function b(B) {
        const G = B.eventObject,
          Q = G.__r3f;
        if (!(Q != null && Q.eventCount)) return;
        const W = Q.handlers;
        if (R) {
          if (
            W.onPointerOver ||
            W.onPointerEnter ||
            W.onPointerOut ||
            W.onPointerLeave
          ) {
            const w = Hu(B),
              te = T.hovered.get(w);
            te
              ? te.stopped && B.stopPropagation()
              : (T.hovered.set(w, B),
                W.onPointerOver == null || W.onPointerOver(B),
                W.onPointerEnter == null || W.onPointerEnter(B));
          }
          W.onPointerMove == null || W.onPointerMove(B);
        } else {
          const w = W[m];
          w
            ? (!j || T.initialHits.includes(G)) &&
              (p(
                g,
                T.interaction.filter((te) => !T.initialHits.includes(te))
              ),
              w(B))
            : j &&
              T.initialHits.includes(G) &&
              p(
                g,
                T.interaction.filter((te) => !T.initialHits.includes(te))
              );
        }
      }
      o(x, g, _, b);
    };
  }
  return { handlePointer: d };
}
const zd = (n) => !!(n != null && n.render),
  Vo = v.createContext(null),
  oy = (n, l) => {
    const i = e1((d, m) => {
        const h = new Cl(),
          g = new Cl(),
          E = new Cl();
        function T(_ = m().camera, b = g, B = m().size) {
          const { width: G, height: Q, top: W, left: w } = B,
            te = G / Q;
          b.isVector3 ? E.copy(b) : E.set(...b);
          const F = _.getWorldPosition(h).distanceTo(E);
          if (U1(_))
            return {
              width: G / _.zoom,
              height: Q / _.zoom,
              top: W,
              left: w,
              factor: 1,
              distance: F,
              aspect: te,
            };
          {
            const ne = (_.fov * Math.PI) / 180,
              fe = 2 * Math.tan(ne / 2) * F,
              $e = fe * (G / Q);
            return {
              width: $e,
              height: fe,
              top: W,
              left: w,
              factor: G / $e,
              distance: F,
              aspect: te,
            };
          }
        }
        let R;
        const j = (_) =>
            d((b) => ({ performance: { ...b.performance, current: _ } })),
          A = new t1();
        return {
          set: d,
          get: m,
          gl: null,
          camera: null,
          raycaster: null,
          events: { priority: 1, enabled: !0, connected: !1 },
          scene: null,
          xr: null,
          invalidate: (_ = 1) => n(m(), _),
          advance: (_, b) => l(_, b, m()),
          legacy: !1,
          linear: !1,
          flat: !1,
          controls: null,
          clock: new ev(),
          pointer: A,
          mouse: A,
          frameloop: 'always',
          onPointerMissed: void 0,
          performance: {
            current: 1,
            min: 0.5,
            max: 1,
            debounce: 200,
            regress: () => {
              const _ = m();
              (R && clearTimeout(R),
                _.performance.current !== _.performance.min &&
                  j(_.performance.min),
                (R = setTimeout(
                  () => j(m().performance.max),
                  _.performance.debounce
                )));
            },
          },
          size: { width: 0, height: 0, top: 0, left: 0 },
          viewport: {
            initialDpr: 0,
            dpr: 0,
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            aspect: 0,
            distance: 0,
            factor: 0,
            getCurrentViewport: T,
          },
          setEvents: (_) => d((b) => ({ ...b, events: { ...b.events, ..._ } })),
          setSize: (_, b, B = 0, G = 0) => {
            const Q = m().camera,
              W = { width: _, height: b, top: B, left: G };
            d((w) => ({ size: W, viewport: { ...w.viewport, ...T(Q, g, W) } }));
          },
          setDpr: (_) =>
            d((b) => {
              const B = H1(_);
              return {
                viewport: {
                  ...b.viewport,
                  dpr: B,
                  initialDpr: b.viewport.initialDpr || B,
                },
              };
            }),
          setFrameloop: (_ = 'always') => {
            const b = m().clock;
            (b.stop(),
              (b.elapsedTime = 0),
              _ !== 'never' && (b.start(), (b.elapsedTime = 0)),
              d(() => ({ frameloop: _ })));
          },
          previousRoot: void 0,
          internal: {
            interaction: [],
            hovered: new Map(),
            subscribers: [],
            initialClick: [0, 0],
            initialHits: [],
            capturedMap: new Map(),
            lastEvent: v.createRef(),
            active: !1,
            frames: 0,
            priority: 0,
            subscribe: (_, b, B) => {
              const G = m().internal;
              return (
                (G.priority = G.priority + (b > 0 ? 1 : 0)),
                G.subscribers.push({ ref: _, priority: b, store: B }),
                (G.subscribers = G.subscribers.sort(
                  (Q, W) => Q.priority - W.priority
                )),
                () => {
                  const Q = m().internal;
                  Q != null &&
                    Q.subscribers &&
                    ((Q.priority = Q.priority - (b > 0 ? 1 : 0)),
                    (Q.subscribers = Q.subscribers.filter((W) => W.ref !== _)));
                }
              );
            },
          },
        };
      }),
      c = i.getState();
    let o = c.size,
      s = c.viewport.dpr,
      p = c.camera;
    return (
      i.subscribe(() => {
        const { camera: d, size: m, viewport: h, gl: g, set: E } = i.getState();
        if (m.width !== o.width || m.height !== o.height || h.dpr !== s) {
          ((o = m), (s = h.dpr), L1(d, m), h.dpr > 0 && g.setPixelRatio(h.dpr));
          const T =
            typeof HTMLCanvasElement < 'u' &&
            g.domElement instanceof HTMLCanvasElement;
          g.setSize(m.width, m.height, T);
        }
        d !== p &&
          ((p = d),
          E((T) => ({
            viewport: { ...T.viewport, ...T.viewport.getCurrentViewport(d) },
          })));
      }),
      i.subscribe((d) => n(d)),
      i
    );
  };
function Go() {
  const n = v.useContext(Vo);
  if (!n)
    throw new Error('R3F: Hooks can only be used within the Canvas component!');
  return n;
}
function Ol(n = (i) => i, l) {
  return Go()(n, l);
}
function cy(n, l = 0) {
  const i = Go(),
    c = i.getState().internal.subscribe,
    o = qo(n);
  return (Dl(() => c(o, l, i), [l, c, i]), null);
}
const Dd = new WeakMap(),
  sy = (n) => {
    var l;
    return (
      typeof n == 'function' &&
      (n == null || (l = n.prototype) == null ? void 0 : l.constructor) === n
    );
  };
function V1(n, l) {
  return function (i, ...c) {
    let o;
    return (
      sy(i) ? ((o = Dd.get(i)), o || ((o = new i()), Dd.set(i, o))) : (o = i),
      n && n(o),
      Promise.all(
        c.map(
          (s) =>
            new Promise((p, d) =>
              o.load(
                s,
                (m) => {
                  (Ie(m?.scene) && Object.assign(m, kh(m.scene)), p(m));
                },
                l,
                (m) => d(new Error(`Could not load ${s}: ${m?.message}`))
              )
            )
        )
      )
    );
  };
}
function Ma(n, l, i, c) {
  const o = Array.isArray(l) ? l : [l],
    s = Yh(V1(i, c), [n, ...o], { equal: Te.equ });
  return Array.isArray(l) ? s : s[0];
}
Ma.preload = function (n, l, i) {
  const c = Array.isArray(l) ? l : [l];
  return Qh(V1(i), [n, ...c]);
};
Ma.clear = function (n, l) {
  const i = Array.isArray(l) ? l : [l];
  return wh([n, ...i]);
};
function fy(n) {
  const l = Ph(n);
  return (
    l.injectIntoDevTools({
      bundleType: 0,
      rendererPackageName: '@react-three/fiber',
      version: v.version,
    }),
    l
  );
}
const G1 = 0,
  za = {},
  dy = /^three(?=[A-Z])/,
  li = (n) => `${n[0].toUpperCase()}${n.slice(1)}`;
let py = 0;
const my = (n) => typeof n == 'function';
function Y1(n) {
  if (my(n)) {
    const l = `${py++}`;
    return ((za[l] = n), l);
  } else Object.assign(za, n);
}
function Q1(n, l) {
  const i = li(n),
    c = za[i];
  if (n !== 'primitive' && !c)
    throw new Error(
      `R3F: ${i} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`
    );
  if (n === 'primitive' && !l.object)
    throw new Error("R3F: Primitives without 'object' are invalid!");
  if (l.args !== void 0 && !Array.isArray(l.args))
    throw new Error('R3F: The args prop must be an array!');
}
function vy(n, l, i) {
  var c;
  return (
    (n = li(n) in za ? n : n.replace(dy, '')),
    Q1(n, l),
    n === 'primitive' &&
      (c = l.object) != null &&
      c.__r3f &&
      delete l.object.__r3f,
    Fu(l.object, i, n, l)
  );
}
function hy(n) {
  if (!n.isHidden) {
    var l;
    (n.props.attach && (l = n.parent) != null && l.object
      ? $u(n.parent, n)
      : Ie(n.object) && (n.object.visible = !1),
      (n.isHidden = !0),
      Ua(n));
  }
}
function w1(n) {
  if (n.isHidden) {
    var l;
    (n.props.attach && (l = n.parent) != null && l.object
      ? Iu(n.parent, n)
      : Ie(n.object) && n.props.visible !== !1 && (n.object.visible = !0),
      (n.isHidden = !1),
      Ua(n));
  }
}
function Yo(n, l, i) {
  const c = l.root.getState();
  if (!(!n.parent && n.object !== c.scene)) {
    if (!l.object) {
      var o, s;
      const p = za[li(l.type)];
      ((l.object =
        (o = l.props.object) != null
          ? o
          : new p(...((s = l.props.args) != null ? s : []))),
        (l.object.__r3f = l));
    }
    if ((xt(l.object, l.props), l.props.attach)) Iu(n, l);
    else if (Ie(l.object) && Ie(n.object)) {
      const p = n.object.children.indexOf(i?.object);
      if (i && p !== -1) {
        const d = n.object.children.indexOf(l.object);
        if (d !== -1) {
          n.object.children.splice(d, 1);
          const m = d < p ? p - 1 : p;
          n.object.children.splice(m, 0, l.object);
        } else
          ((l.object.parent = n.object),
            n.object.children.splice(p, 0, l.object),
            l.object.dispatchEvent({ type: 'added' }),
            n.object.dispatchEvent({ type: 'childadded', child: l.object }));
      } else n.object.add(l.object);
    }
    for (const p of l.children) Yo(l, p);
    Ua(l);
  }
}
function uo(n, l) {
  l && ((l.parent = n), n.children.push(l), Yo(n, l));
}
function xd(n, l, i) {
  if (!l || !i) return;
  l.parent = n;
  const c = n.children.indexOf(i);
  (c !== -1 ? n.children.splice(c, 0, l) : n.children.push(l), Yo(n, l, i));
}
function K1(n) {
  if (typeof n.dispose == 'function') {
    const l = () => {
      try {
        n.dispose();
      } catch {}
    };
    typeof IS_REACT_ACT_ENVIRONMENT < 'u'
      ? l()
      : Gf.unstable_scheduleCallback(Gf.unstable_IdlePriority, l);
  }
}
function Ro(n, l, i) {
  if (!l) return;
  l.parent = null;
  const c = n.children.indexOf(l);
  (c !== -1 && n.children.splice(c, 1),
    l.props.attach
      ? $u(n, l)
      : Ie(l.object) &&
        Ie(n.object) &&
        (n.object.remove(l.object), iy(j1(l), l.object)));
  const o = l.props.dispose !== null && i !== !1;
  for (let s = l.children.length - 1; s >= 0; s--) {
    const p = l.children[s];
    Ro(l, p, o);
  }
  ((l.children.length = 0),
    delete l.object.__r3f,
    o && l.type !== 'primitive' && l.object.type !== 'Scene' && K1(l.object),
    i === void 0 && Ua(l));
}
function yy(n, l) {
  for (const i of [n, n.alternate])
    if (i !== null)
      if (typeof i.ref == 'function') {
        i.refCleanup == null || i.refCleanup();
        const c = i.ref(l);
        typeof c == 'function' && (i.refCleanup = c);
      } else i.ref && (i.ref.current = l);
}
const wu = [];
function gy() {
  for (const [i] of wu) {
    const c = i.parent;
    if (c) {
      i.props.attach
        ? $u(c, i)
        : Ie(i.object) && Ie(c.object) && c.object.remove(i.object);
      for (const o of i.children)
        o.props.attach
          ? $u(i, o)
          : Ie(o.object) && Ie(i.object) && i.object.remove(o.object);
    }
    (i.isHidden && w1(i),
      i.object.__r3f && delete i.object.__r3f,
      i.type !== 'primitive' && K1(i.object));
  }
  for (const [i, c, o] of wu) {
    i.props = c;
    const s = i.parent;
    if (s) {
      var n, l;
      const p = za[li(i.type)];
      ((i.object =
        (n = i.props.object) != null
          ? n
          : new p(...((l = i.props.args) != null ? l : []))),
        (i.object.__r3f = i),
        yy(o, i.object),
        xt(i.object, i.props),
        i.props.attach
          ? Iu(s, i)
          : Ie(i.object) && Ie(s.object) && s.object.add(i.object));
      for (const d of i.children)
        d.props.attach
          ? Iu(i, d)
          : Ie(d.object) && Ie(i.object) && i.object.add(d.object);
      Ua(i);
    }
  }
  wu.length = 0;
}
const io = () => {},
  jd = {};
let Bu = G1;
const Ey = 0,
  Sy = 4,
  ku = fy({
    isPrimaryRenderer: !1,
    warnsIfNotActing: !1,
    supportsMutation: !0,
    supportsPersistence: !1,
    supportsHydration: !1,
    createInstance: vy,
    removeChild: Ro,
    appendChild: uo,
    appendInitialChild: uo,
    insertBefore: xd,
    appendChildToContainer(n, l) {
      const i = n.getState().scene.__r3f;
      !l || !i || uo(i, l);
    },
    removeChildFromContainer(n, l) {
      const i = n.getState().scene.__r3f;
      !l || !i || Ro(i, l);
    },
    insertInContainerBefore(n, l, i) {
      const c = n.getState().scene.__r3f;
      !l || !i || !c || xd(c, l, i);
    },
    getRootHostContext: () => jd,
    getChildHostContext: () => jd,
    commitUpdate(n, l, i, c, o) {
      var s, p, d;
      Q1(l, c);
      let m = !1;
      if (
        (((n.type === 'primitive' && i.object !== c.object) ||
          ((s = c.args) == null ? void 0 : s.length) !==
            ((p = i.args) == null ? void 0 : p.length) ||
          ((d = c.args) != null &&
            d.some((g, E) => {
              var T;
              return g !== ((T = i.args) == null ? void 0 : T[E]);
            }))) &&
          (m = !0),
        m)
      )
        wu.push([n, { ...c }, o]);
      else {
        const g = ay(n, c);
        Object.keys(g).length && (Object.assign(n.props, g), xt(n.object, g));
      }
      (o.sibling === null || (o.flags & Sy) === Ey) && gy();
    },
    finalizeInitialChildren: () => !1,
    commitMount() {},
    getPublicInstance: (n) => n?.object,
    prepareForCommit: () => null,
    preparePortalMount: (n) => Fu(n.getState().scene, n, '', {}),
    resetAfterCommit: () => {},
    shouldSetTextContent: () => !1,
    clearContainer: () => !1,
    hideInstance: hy,
    unhideInstance: w1,
    createTextInstance: io,
    hideTextInstance: io,
    unhideTextInstance: io,
    scheduleTimeout: typeof setTimeout == 'function' ? setTimeout : void 0,
    cancelTimeout: typeof clearTimeout == 'function' ? clearTimeout : void 0,
    noTimeout: -1,
    getInstanceFromNode: () => null,
    beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur() {},
    detachDeletedInstance() {},
    prepareScopeUpdate() {},
    getInstanceFromScope: () => null,
    shouldAttemptEagerTransition: () => !1,
    trackSchedulerEvent: () => {},
    resolveEventType: () => null,
    resolveEventTimeStamp: () => -1.1,
    requestPostPaintCallback() {},
    maySuspendCommit: () => !1,
    preloadInstance: () => !0,
    startSuspendingCommit() {},
    suspendInstance() {},
    waitForCommitToBeReady: () => null,
    NotPendingTransition: null,
    HostTransitionContext: v.createContext(null),
    setCurrentUpdatePriority(n) {
      Bu = n;
    },
    getCurrentUpdatePriority() {
      return Bu;
    },
    resolveUpdatePriority() {
      var n;
      if (Bu !== G1) return Bu;
      switch (
        typeof window < 'u' &&
        ((n = window.event) == null ? void 0 : n.type)
      ) {
        case 'click':
        case 'contextmenu':
        case 'dblclick':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
          return Qu.DiscreteEventPriority;
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'pointerenter':
        case 'pointerleave':
        case 'wheel':
          return Qu.ContinuousEventPriority;
        default:
          return Qu.DefaultEventPriority;
      }
    },
    resetFormInstance() {},
  }),
  Xn = new Map(),
  _a = { objects: 'shallow', strict: !1 };
function Cy(n, l) {
  if (
    !l &&
    typeof HTMLCanvasElement < 'u' &&
    n instanceof HTMLCanvasElement &&
    n.parentElement
  ) {
    const {
      width: i,
      height: c,
      top: o,
      left: s,
    } = n.parentElement.getBoundingClientRect();
    return { width: i, height: c, top: o, left: s };
  } else if (!l && typeof OffscreenCanvas < 'u' && n instanceof OffscreenCanvas)
    return { width: n.width, height: n.height, top: 0, left: 0 };
  return { width: 0, height: 0, top: 0, left: 0, ...l };
}
function by(n) {
  const l = Xn.get(n),
    i = l?.fiber,
    c = l?.store;
  l && console.warn('R3F.createRoot should only be called once!');
  const o = typeof reportError == 'function' ? reportError : console.error,
    s = c || oy(No, Hd),
    p =
      i ||
      ku.createContainer(
        s,
        Qu.ConcurrentRoot,
        null,
        !1,
        null,
        '',
        o,
        o,
        o,
        null
      );
  l || Xn.set(n, { fiber: p, store: s });
  let d,
    m,
    h = !1,
    g = null;
  return {
    async configure(E = {}) {
      let T;
      g = new Promise((S) => (T = S));
      let {
          gl: R,
          size: j,
          scene: A,
          events: x,
          onCreated: _,
          shadows: b = !1,
          linear: B = !1,
          flat: G = !1,
          legacy: Q = !1,
          orthographic: W = !1,
          frameloop: w = 'always',
          dpr: te = [1, 2],
          performance: F,
          raycaster: ne,
          camera: fe,
          onPointerMissed: $e,
        } = E,
        re = s.getState(),
        q = re.gl;
      if (!re.gl) {
        const S = {
            canvas: n,
            powerPreference: 'high-performance',
            antialias: !0,
            alpha: !0,
          },
          U = typeof R == 'function' ? await R(S) : R;
        (zd(U) ? (q = U) : (q = new Q0({ ...S, ...R })), re.set({ gl: q }));
      }
      let z = re.raycaster;
      z || re.set({ raycaster: (z = new Id()) });
      const { params: V, ...L } = ne || {};
      if (
        (Te.equ(L, z, _a) || xt(z, { ...L }),
        Te.equ(V, z.params, _a) || xt(z, { params: { ...z.params, ...V } }),
        !re.camera || (re.camera === m && !Te.equ(m, fe, _a)))
      ) {
        m = fe;
        const S = fe?.isCamera,
          U = S
            ? fe
            : W
              ? new w0(0, 0, 0, 0, 0.1, 1e3)
              : new K0(75, 0, 0.1, 1e3);
        (S ||
          ((U.position.z = 5),
          fe &&
            (xt(U, fe),
            U.manual ||
              (('aspect' in fe ||
                'left' in fe ||
                'right' in fe ||
                'bottom' in fe ||
                'top' in fe) &&
                ((U.manual = !0), U.updateProjectionMatrix()))),
          !re.camera && !(fe != null && fe.rotation) && U.lookAt(0, 0, 0)),
          re.set({ camera: U }),
          (z.camera = U));
      }
      if (!re.scene) {
        let S;
        (A != null && A.isScene
          ? ((S = A), Fu(S, s, '', {}))
          : ((S = new $d()), Fu(S, s, '', {}), A && xt(S, A)),
          re.set({ scene: S }));
      }
      x && !re.events.handlers && re.set({ events: x(s) });
      const X = Cy(n, j);
      if (
        (Te.equ(X, re.size, _a) || re.setSize(X.width, X.height, X.top, X.left),
        te && re.viewport.dpr !== H1(te) && re.setDpr(te),
        re.frameloop !== w && re.setFrameloop(w),
        re.onPointerMissed || re.set({ onPointerMissed: $e }),
        F &&
          !Te.equ(F, re.performance, _a) &&
          re.set((S) => ({ performance: { ...S.performance, ...F } })),
        !re.xr)
      ) {
        var P;
        const S = (Z, le) => {
            const de = s.getState();
            de.frameloop !== 'never' && Hd(Z, !0, de, le);
          },
          U = () => {
            const Z = s.getState();
            ((Z.gl.xr.enabled = Z.gl.xr.isPresenting),
              Z.gl.xr.setAnimationLoop(Z.gl.xr.isPresenting ? S : null),
              Z.gl.xr.isPresenting || No(Z));
          },
          J = {
            connect() {
              const Z = s.getState().gl;
              (Z.xr.addEventListener('sessionstart', U),
                Z.xr.addEventListener('sessionend', U));
            },
            disconnect() {
              const Z = s.getState().gl;
              (Z.xr.removeEventListener('sessionstart', U),
                Z.xr.removeEventListener('sessionend', U));
            },
          };
        (typeof ((P = q.xr) == null ? void 0 : P.addEventListener) ==
          'function' && J.connect(),
          re.set({ xr: J }));
      }
      if (q.shadowMap) {
        const S = q.shadowMap.enabled,
          U = q.shadowMap.type;
        if (((q.shadowMap.enabled = !!b), Te.boo(b))) q.shadowMap.type = Pr;
        else if (Te.str(b)) {
          var ce;
          const J = { basic: P0, percentage: X0, soft: Pr, variance: Z0 };
          q.shadowMap.type = (ce = J[b]) != null ? ce : Pr;
        } else Te.obj(b) && Object.assign(q.shadowMap, b);
        (S !== q.shadowMap.enabled || U !== q.shadowMap.type) &&
          (q.shadowMap.needsUpdate = !0);
      }
      return (
        (tv.enabled = !Q),
        h ||
          ((q.outputColorSpace = B ? J0 : kd), (q.toneMapping = G ? W0 : F0)),
        re.legacy !== Q && re.set(() => ({ legacy: Q })),
        re.linear !== B && re.set(() => ({ linear: B })),
        re.flat !== G && re.set(() => ({ flat: G })),
        R && !Te.fun(R) && !zd(R) && !Te.equ(R, q, _a) && xt(q, R),
        (d = _),
        (h = !0),
        T(),
        this
      );
    },
    render(E) {
      return (
        !h && !g && this.configure(),
        g.then(() => {
          ku.updateContainer(
            k.jsx(_y, { store: s, children: E, onCreated: d, rootElement: n }),
            p,
            null,
            () => {}
          );
        }),
        s
      );
    },
    unmount() {
      Z1(n);
    },
  };
}
function _y({ store: n, children: l, onCreated: i, rootElement: c }) {
  return (
    Dl(() => {
      const o = n.getState();
      (o.set((s) => ({ internal: { ...s.internal, active: !0 } })),
        i && i(o),
        n.getState().events.connected ||
          o.events.connect == null ||
          o.events.connect(c));
    }, []),
    k.jsx(Vo.Provider, { value: n, children: l })
  );
}
function Z1(n, l) {
  const i = Xn.get(n),
    c = i?.fiber;
  if (c) {
    const o = i?.store.getState();
    (o && (o.internal.active = !1),
      ku.updateContainer(null, c, null, () => {
        o &&
          setTimeout(() => {
            try {
              var s, p, d, m;
              (o.events.disconnect == null || o.events.disconnect(),
                (s = o.gl) == null ||
                  (p = s.renderLists) == null ||
                  p.dispose == null ||
                  p.dispose(),
                (d = o.gl) == null ||
                  d.forceContextLoss == null ||
                  d.forceContextLoss(),
                (m = o.gl) != null && m.xr && o.xr.disconnect(),
                ey(o.scene),
                Xn.delete(n));
            } catch {}
          }, 500);
      }));
  }
}
function Ry(n, l, i) {
  return k.jsx(Oy, { children: n, container: l, state: i });
}
function Oy({ state: n = {}, children: l, container: i }) {
  const { events: c, size: o, ...s } = n,
    p = Go(),
    [d] = v.useState(() => new Id()),
    [m] = v.useState(() => new t1()),
    h = qo((E, T) => {
      let R;
      if (T.camera && o) {
        const j = T.camera;
        ((R = E.viewport.getCurrentViewport(j, new Cl(), o)),
          j !== E.camera && L1(j, o));
      }
      return {
        ...E,
        ...T,
        scene: i,
        raycaster: d,
        pointer: m,
        mouse: m,
        previousRoot: p,
        events: { ...E.events, ...T.events, ...c },
        size: { ...E.size, ...o },
        viewport: { ...E.viewport, ...R },
        setEvents: (j) =>
          T.set((A) => ({ ...A, events: { ...A.events, ...j } })),
      };
    }),
    g = v.useMemo(() => {
      const E = e1((R, j) => ({ ...s, set: R, get: j })),
        T = (R) => E.setState((j) => h.current(R, j));
      return (T(p.getState()), p.subscribe(T), E);
    }, [p, i]);
  return k.jsx(k.Fragment, {
    children: ku.createPortal(
      k.jsx(Vo.Provider, { value: g, children: l }),
      g,
      null
    ),
  });
}
const Ty = new Set(),
  Ny = new Set(),
  Ay = new Set();
function ro(n, l) {
  if (n.size) for (const { callback: i } of n.values()) i(l);
}
function bl(n, l) {
  switch (n) {
    case 'before':
      return ro(Ty, l);
    case 'after':
      return ro(Ny, l);
    case 'tail':
      return ro(Ay, l);
  }
}
let oo, co;
function Oo(n, l, i) {
  let c = l.clock.getDelta();
  (l.frameloop === 'never' &&
    typeof n == 'number' &&
    ((c = n - l.clock.elapsedTime),
    (l.clock.oldTime = l.clock.elapsedTime),
    (l.clock.elapsedTime = n)),
    (oo = l.internal.subscribers));
  for (let o = 0; o < oo.length; o++)
    ((co = oo[o]), co.ref.current(co.store.getState(), c, i));
  return (
    !l.internal.priority && l.gl.render && l.gl.render(l.scene, l.camera),
    (l.internal.frames = Math.max(0, l.internal.frames - 1)),
    l.frameloop === 'always' ? 1 : l.internal.frames
  );
}
let ei = !1,
  To = !1,
  so,
  Ud,
  Ra;
function X1(n) {
  ((Ud = requestAnimationFrame(X1)),
    (ei = !0),
    (so = 0),
    bl('before', n),
    (To = !0));
  for (const i of Xn.values()) {
    var l;
    ((Ra = i.store.getState()),
      Ra.internal.active &&
        (Ra.frameloop === 'always' || Ra.internal.frames > 0) &&
        !((l = Ra.gl.xr) != null && l.isPresenting) &&
        (so += Oo(n, Ra)));
  }
  if (((To = !1), bl('after', n), so === 0))
    return (bl('tail', n), (ei = !1), cancelAnimationFrame(Ud));
}
function No(n, l = 1) {
  var i;
  if (!n) return Xn.forEach((c) => No(c.store.getState(), l));
  ((i = n.gl.xr) != null && i.isPresenting) ||
    !n.internal.active ||
    n.frameloop === 'never' ||
    (l > 1
      ? (n.internal.frames = Math.min(60, n.internal.frames + l))
      : To
        ? (n.internal.frames = 2)
        : (n.internal.frames = 1),
    ei || ((ei = !0), requestAnimationFrame(X1)));
}
function Hd(n, l = !0, i, c) {
  if ((l && bl('before', n), i)) Oo(n, i, c);
  else for (const o of Xn.values()) Oo(n, o.store.getState());
  l && bl('after', n);
}
const fo = {
  onClick: ['click', !1],
  onContextMenu: ['contextmenu', !1],
  onDoubleClick: ['dblclick', !1],
  onWheel: ['wheel', !0],
  onPointerDown: ['pointerdown', !0],
  onPointerUp: ['pointerup', !0],
  onPointerLeave: ['pointerleave', !0],
  onPointerMove: ['pointermove', !0],
  onPointerCancel: ['pointercancel', !0],
  onLostPointerCapture: ['lostpointercapture', !0],
};
function My(n) {
  const { handlePointer: l } = ry(n);
  return {
    priority: 1,
    enabled: !0,
    compute(i, c, o) {
      (c.pointer.set(
        (i.offsetX / c.size.width) * 2 - 1,
        -(i.offsetY / c.size.height) * 2 + 1
      ),
        c.raycaster.setFromCamera(c.pointer, c.camera));
    },
    connected: void 0,
    handlers: Object.keys(fo).reduce((i, c) => ({ ...i, [c]: l(c) }), {}),
    update: () => {
      var i;
      const { events: c, internal: o } = n.getState();
      (i = o.lastEvent) != null &&
        i.current &&
        c.handlers &&
        c.handlers.onPointerMove(o.lastEvent.current);
    },
    connect: (i) => {
      const { set: c, events: o } = n.getState();
      if (
        (o.disconnect == null || o.disconnect(),
        c((s) => ({ events: { ...s.events, connected: i } })),
        o.handlers)
      )
        for (const s in o.handlers) {
          const p = o.handlers[s],
            [d, m] = fo[s];
          i.addEventListener(d, p, { passive: m });
        }
    },
    disconnect: () => {
      const { set: i, events: c } = n.getState();
      if (c.connected) {
        if (c.handlers)
          for (const o in c.handlers) {
            const s = c.handlers[o],
              [p] = fo[o];
            c.connected.removeEventListener(p, s);
          }
        i((o) => ({ events: { ...o.events, connected: void 0 } }));
      }
    },
  };
}
function Bd(n, l) {
  let i;
  return (...c) => {
    (window.clearTimeout(i), (i = window.setTimeout(() => n(...c), l)));
  };
}
function zy(
  { debounce: n, scroll: l, polyfill: i, offsetSize: c } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1,
  }
) {
  const o = i || (typeof window > 'u' ? class {} : window.ResizeObserver);
  if (!o)
    throw new Error(
      'This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills'
    );
  const [s, p] = v.useState({
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
    }),
    d = v.useRef({
      element: null,
      scrollContainers: null,
      resizeObserver: null,
      lastBounds: s,
      orientationHandler: null,
    }),
    m = n ? (typeof n == 'number' ? n : n.scroll) : null,
    h = n ? (typeof n == 'number' ? n : n.resize) : null,
    g = v.useRef(!1);
  v.useEffect(() => ((g.current = !0), () => void (g.current = !1)));
  const [E, T, R] = v.useMemo(() => {
    const _ = () => {
      if (!d.current.element) return;
      const {
          left: b,
          top: B,
          width: G,
          height: Q,
          bottom: W,
          right: w,
          x: te,
          y: F,
        } = d.current.element.getBoundingClientRect(),
        ne = {
          left: b,
          top: B,
          width: G,
          height: Q,
          bottom: W,
          right: w,
          x: te,
          y: F,
        };
      (d.current.element instanceof HTMLElement &&
        c &&
        ((ne.height = d.current.element.offsetHeight),
        (ne.width = d.current.element.offsetWidth)),
        Object.freeze(ne),
        g.current &&
          !Uy(d.current.lastBounds, ne) &&
          p((d.current.lastBounds = ne)));
    };
    return [_, h ? Bd(_, h) : _, m ? Bd(_, m) : _];
  }, [p, c, m, h]);
  function j() {
    (d.current.scrollContainers &&
      (d.current.scrollContainers.forEach((_) =>
        _.removeEventListener('scroll', R, !0)
      ),
      (d.current.scrollContainers = null)),
      d.current.resizeObserver &&
        (d.current.resizeObserver.disconnect(),
        (d.current.resizeObserver = null)),
      d.current.orientationHandler &&
        ('orientation' in screen && 'removeEventListener' in screen.orientation
          ? screen.orientation.removeEventListener(
              'change',
              d.current.orientationHandler
            )
          : 'onorientationchange' in window &&
            window.removeEventListener(
              'orientationchange',
              d.current.orientationHandler
            )));
  }
  function A() {
    d.current.element &&
      ((d.current.resizeObserver = new o(R)),
      d.current.resizeObserver.observe(d.current.element),
      l &&
        d.current.scrollContainers &&
        d.current.scrollContainers.forEach((_) =>
          _.addEventListener('scroll', R, { capture: !0, passive: !0 })
        ),
      (d.current.orientationHandler = () => {
        R();
      }),
      'orientation' in screen && 'addEventListener' in screen.orientation
        ? screen.orientation.addEventListener(
            'change',
            d.current.orientationHandler
          )
        : 'onorientationchange' in window &&
          window.addEventListener(
            'orientationchange',
            d.current.orientationHandler
          ));
  }
  const x = (_) => {
    !_ ||
      _ === d.current.element ||
      (j(), (d.current.element = _), (d.current.scrollContainers = P1(_)), A());
  };
  return (
    xy(R, !!l),
    Dy(T),
    v.useEffect(() => {
      (j(), A());
    }, [l, R, T]),
    v.useEffect(() => j, []),
    [x, s, E]
  );
}
function Dy(n) {
  v.useEffect(() => {
    const l = n;
    return (
      window.addEventListener('resize', l),
      () => void window.removeEventListener('resize', l)
    );
  }, [n]);
}
function xy(n, l) {
  v.useEffect(() => {
    if (l) {
      const i = n;
      return (
        window.addEventListener('scroll', i, { capture: !0, passive: !0 }),
        () => void window.removeEventListener('scroll', i, !0)
      );
    }
  }, [n, l]);
}
function P1(n) {
  const l = [];
  if (!n || n === document.body) return l;
  const {
    overflow: i,
    overflowX: c,
    overflowY: o,
  } = window.getComputedStyle(n);
  return (
    [i, c, o].some((s) => s === 'auto' || s === 'scroll') && l.push(n),
    [...l, ...P1(n.parentElement)]
  );
}
const jy = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height'],
  Uy = (n, l) => jy.every((i) => n[i] === l[i]);
function Hy({
  ref: n,
  children: l,
  fallback: i,
  resize: c,
  style: o,
  gl: s,
  events: p = My,
  eventSource: d,
  eventPrefix: m,
  shadows: h,
  linear: g,
  flat: E,
  legacy: T,
  orthographic: R,
  frameloop: j,
  dpr: A,
  performance: x,
  raycaster: _,
  camera: b,
  scene: B,
  onPointerMissed: G,
  onCreated: Q,
  ...W
}) {
  v.useMemo(() => Y1(av), []);
  const w = Fh(),
    [te, F] = zy({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...c }),
    ne = v.useRef(null),
    fe = v.useRef(null);
  v.useImperativeHandle(n, () => ne.current);
  const $e = qo(G),
    [re, q] = v.useState(!1),
    [z, V] = v.useState(!1);
  if (re) throw re;
  if (z) throw z;
  const L = v.useRef(null);
  (Dl(() => {
    const P = ne.current;
    if (F.width > 0 && F.height > 0 && P) {
      L.current || (L.current = by(P));
      async function ce() {
        (await L.current.configure({
          gl: s,
          scene: B,
          events: p,
          shadows: h,
          linear: g,
          flat: E,
          legacy: T,
          orthographic: R,
          frameloop: j,
          dpr: A,
          performance: x,
          raycaster: _,
          camera: b,
          size: F,
          onPointerMissed: (...S) =>
            $e.current == null ? void 0 : $e.current(...S),
          onCreated: (S) => {
            (S.events.connect == null ||
              S.events.connect(d ? (Jh(d) ? d.current : d) : fe.current),
              m &&
                S.setEvents({
                  compute: (U, J) => {
                    const Z = U[m + 'X'],
                      le = U[m + 'Y'];
                    (J.pointer.set(
                      (Z / J.size.width) * 2 - 1,
                      -(le / J.size.height) * 2 + 1
                    ),
                      J.raycaster.setFromCamera(J.pointer, J.camera));
                  },
                }),
              Q?.(S));
          },
        }),
          L.current.render(
            k.jsx(w, {
              children: k.jsx($h, {
                set: V,
                children: k.jsx(v.Suspense, {
                  fallback: k.jsx(Ih, { set: q }),
                  children: l ?? null,
                }),
              }),
            })
          ));
      }
      ce();
    }
  }),
    v.useEffect(() => {
      const P = ne.current;
      if (P) return () => Z1(P);
    }, []));
  const X = d ? 'none' : 'auto';
  return k.jsx('div', {
    ref: fe,
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: X,
      ...o,
    },
    ...W,
    children: k.jsx('div', {
      ref: te,
      style: { width: '100%', height: '100%' },
      children: k.jsx('canvas', {
        ref: ne,
        style: { display: 'block' },
        children: i,
      }),
    }),
  });
}
function b4(n) {
  return k.jsx(nv, { children: k.jsx(Hy, { ...n }) });
}
const Tl = {
    apartment: 'lebombo_1k.hdr',
    city: 'potsdamer_platz_1k.hdr',
    dawn: 'kiara_1_dawn_1k.hdr',
    forest: 'forest_slope_1k.hdr',
    lobby: 'st_fagans_interior_1k.hdr',
    night: 'dikhololo_night_1k.hdr',
    park: 'rooitou_park_1k.hdr',
    studio: 'studio_small_03_1k.hdr',
    sunset: 'venice_sunset_1k.hdr',
    warehouse: 'empty_warehouse_01_1k.hdr',
  },
  J1 =
    'https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/',
  Na = (n) => Array.isArray(n),
  Qo = ['/px.png', '/nx.png', '/py.png', '/ny.png', '/pz.png', '/nz.png'];
function ui({
  files: n = Qo,
  path: l = '',
  preset: i = void 0,
  colorSpace: c = void 0,
  extensions: o,
} = {}) {
  i && (wo(i), (n = Tl[i]), (l = J1));
  const s = Na(n),
    { extension: p, isCubemap: d } = Ko(n),
    m = Zo(p);
  if (!m) throw new Error('useEnvironment: Unrecognized file extension: ' + n);
  const h = Ol((R) => R.gl);
  v.useLayoutEffect(() => {
    if (p !== 'webp' && p !== 'jpg' && p !== 'jpeg') return;
    function R() {
      Ma.clear(m, s ? [n] : n);
    }
    h.domElement.addEventListener('webglcontextlost', R, { once: !0 });
  }, [n, h.domElement]);
  const g = Ma(m, s ? [n] : n, (R) => {
    ((p === 'webp' || p === 'jpg' || p === 'jpeg') && R.setRenderer(h),
      R.setPath == null || R.setPath(l),
      o && o(R));
  });
  let E = s ? g[0] : g;
  if (p === 'jpg' || p === 'jpeg' || p === 'webp') {
    var T;
    E = (T = E.renderTarget) == null ? void 0 : T.texture;
  }
  return (
    (E.mapping = d ? lv : uv),
    (E.colorSpace = c ?? (d ? 'srgb' : 'srgb-linear')),
    E
  );
}
const By = { files: Qo, path: '', preset: void 0, extensions: void 0 };
ui.preload = (n) => {
  const l = { ...By, ...n };
  let { files: i, path: c = '' } = l;
  const { preset: o, extensions: s } = l;
  o && (wo(o), (i = Tl[o]), (c = J1));
  const { extension: p } = Ko(i);
  if (p === 'webp' || p === 'jpg' || p === 'jpeg')
    throw new Error('useEnvironment: Preloading gainmaps is not supported');
  const d = Zo(p);
  if (!d) throw new Error('useEnvironment: Unrecognized file extension: ' + i);
  Ma.preload(d, Na(i) ? [i] : i, (m) => {
    (m.setPath == null || m.setPath(c), s && s(m));
  });
};
const Ly = { files: Qo, preset: void 0 };
ui.clear = (n) => {
  const l = { ...Ly, ...n };
  let { files: i } = l;
  const { preset: c } = l;
  c && (wo(c), (i = Tl[c]));
  const { extension: o } = Ko(i),
    s = Zo(o);
  if (!s) throw new Error('useEnvironment: Unrecognized file extension: ' + i);
  Ma.clear(s, Na(i) ? [i] : i);
};
function wo(n) {
  if (!(n in Tl))
    throw new Error('Preset must be one of: ' + Object.keys(Tl).join(', '));
}
function Ko(n) {
  var l;
  const i = Na(n) && n.length === 6,
    c = Na(n) && n.length === 3 && n.some((p) => p.endsWith('json')),
    o = Na(n) ? n[0] : n;
  return {
    extension: i
      ? 'cube'
      : c
        ? 'webp'
        : o.startsWith('data:application/exr')
          ? 'exr'
          : o.startsWith('data:application/hdr')
            ? 'hdr'
            : o.startsWith('data:image/jpeg')
              ? 'jpg'
              : (l = o.split('.').pop()) == null ||
                  (l = l.split('?')) == null ||
                  (l = l.shift()) == null
                ? void 0
                : l.toLowerCase(),
    isCubemap: i,
    isGainmap: c,
  };
}
function Zo(n) {
  return n === 'cube'
    ? iv
    : n === 'hdr'
      ? rv
      : n === 'exr'
        ? ov
        : n === 'jpg' || n === 'jpeg'
          ? cv
          : n === 'webp'
            ? sv
            : null;
}
const qy = (n) => n.current && n.current.isScene,
  Vy = (n) => (qy(n) ? n.current : n);
function Xo(n, l, i, c, o = {}) {
  var s, p, d, m;
  o = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...o,
  };
  const h = Vy(l || i),
    g = h.background,
    E = h.environment,
    T = {
      backgroundBlurriness: h.backgroundBlurriness,
      backgroundIntensity: h.backgroundIntensity,
      backgroundRotation:
        (s =
          (p = h.backgroundRotation) == null || p.clone == null
            ? void 0
            : p.clone()) !== null && s !== void 0
          ? s
          : [0, 0, 0],
      environmentIntensity: h.environmentIntensity,
      environmentRotation:
        (d =
          (m = h.environmentRotation) == null || m.clone == null
            ? void 0
            : m.clone()) !== null && d !== void 0
          ? d
          : [0, 0, 0],
    };
  return (
    n !== 'only' && (h.environment = c),
    n && (h.background = c),
    xt(h, o),
    () => {
      (n !== 'only' && (h.environment = E), n && (h.background = g), xt(h, T));
    }
  );
}
function Po({ scene: n, background: l = !1, map: i, ...c }) {
  const o = Ol((s) => s.scene);
  return (
    v.useLayoutEffect(() => {
      if (i) return Xo(l, n, o, i, c);
    }),
    null
  );
}
function W1({
  background: n = !1,
  scene: l,
  blur: i,
  backgroundBlurriness: c,
  backgroundIntensity: o,
  backgroundRotation: s,
  environmentIntensity: p,
  environmentRotation: d,
  ...m
}) {
  const h = ui(m),
    g = Ol((E) => E.scene);
  return (
    v.useLayoutEffect(() =>
      Xo(n, l, g, h, {
        backgroundBlurriness: i ?? c,
        backgroundIntensity: o,
        backgroundRotation: s,
        environmentIntensity: p,
        environmentRotation: d,
      })
    ),
    v.useEffect(
      () => () => {
        h.dispose();
      },
      [h]
    ),
    null
  );
}
function Gy({
  children: n,
  near: l = 0.1,
  far: i = 1e3,
  resolution: c = 256,
  frames: o = 1,
  map: s,
  background: p = !1,
  blur: d,
  backgroundBlurriness: m,
  backgroundIntensity: h,
  backgroundRotation: g,
  environmentIntensity: E,
  environmentRotation: T,
  scene: R,
  files: j,
  path: A,
  preset: x = void 0,
  extensions: _,
}) {
  const b = Ol((te) => te.gl),
    B = Ol((te) => te.scene),
    G = v.useRef(null),
    [Q] = v.useState(() => new $d()),
    W = v.useMemo(() => {
      const te = new dv(c);
      return ((te.texture.type = pv), te);
    }, [c]);
  (v.useEffect(
    () => () => {
      W.dispose();
    },
    [W]
  ),
    v.useLayoutEffect(() => {
      if (o === 1) {
        const te = b.autoClear;
        ((b.autoClear = !0), G.current.update(b, Q), (b.autoClear = te));
      }
      return Xo(p, R, B, W.texture, {
        backgroundBlurriness: d ?? m,
        backgroundIntensity: h,
        backgroundRotation: g,
        environmentIntensity: E,
        environmentRotation: T,
      });
    }, [n, Q, W.texture, R, B, p, o, b]));
  let w = 1;
  return (
    cy(() => {
      if (o === 1 / 0 || w < o) {
        const te = b.autoClear;
        ((b.autoClear = !0), G.current.update(b, Q), (b.autoClear = te), w++);
      }
    }),
    v.createElement(
      v.Fragment,
      null,
      Ry(
        v.createElement(
          v.Fragment,
          null,
          n,
          v.createElement('cubeCamera', { ref: G, args: [l, i, W] }),
          j || x
            ? v.createElement(W1, {
                background: !0,
                files: j,
                preset: x,
                path: A,
                extensions: _,
              })
            : s
              ? v.createElement(Po, { background: !0, map: s, extensions: _ })
              : null
        ),
        Q
      )
    )
  );
}
function Yy(n) {
  var l, i, c, o;
  const s = ui(n),
    p = n.map || s;
  (v.useMemo(() => Y1({ GroundProjectedEnvImpl: mv }), []),
    v.useEffect(
      () => () => {
        s.dispose();
      },
      [s]
    ));
  const d = v.useMemo(() => [p], [p]),
    m = (l = n.ground) == null ? void 0 : l.height,
    h = (i = n.ground) == null ? void 0 : i.radius,
    g =
      (c = (o = n.ground) == null ? void 0 : o.scale) !== null && c !== void 0
        ? c
        : 1e3;
  return v.createElement(
    v.Fragment,
    null,
    v.createElement(Po, fv({}, n, { map: p })),
    v.createElement('groundProjectedEnvImpl', {
      args: d,
      scale: g,
      height: m,
      radius: h,
    })
  );
}
function _4(n) {
  return n.ground
    ? v.createElement(Yy, n)
    : n.map
      ? v.createElement(Po, n)
      : n.children
        ? v.createElement(Gy, n)
        : v.createElement(W1, n);
}
function Qy(n, l) {
  const i = v.createContext(l),
    c = (s) => {
      const { children: p, ...d } = s,
        m = v.useMemo(() => d, Object.values(d));
      return k.jsx(i.Provider, { value: m, children: p });
    };
  c.displayName = n + 'Provider';
  function o(s) {
    const p = v.useContext(i);
    if (p) return p;
    if (l !== void 0) return l;
    throw new Error(`\`${s}\` must be used within \`${n}\``);
  }
  return [c, o];
}
function wy(n, l = []) {
  let i = [];
  function c(s, p) {
    const d = v.createContext(p),
      m = i.length;
    i = [...i, p];
    const h = (E) => {
      const { scope: T, children: R, ...j } = E,
        A = T?.[n]?.[m] || d,
        x = v.useMemo(() => j, Object.values(j));
      return k.jsx(A.Provider, { value: x, children: R });
    };
    h.displayName = s + 'Provider';
    function g(E, T) {
      const R = T?.[n]?.[m] || d,
        j = v.useContext(R);
      if (j) return j;
      if (p !== void 0) return p;
      throw new Error(`\`${E}\` must be used within \`${s}\``);
    }
    return [h, g];
  }
  const o = () => {
    const s = i.map((p) => v.createContext(p));
    return function (d) {
      const m = d?.[n] || s;
      return v.useMemo(() => ({ [`__scope${n}`]: { ...d, [n]: m } }), [d, m]);
    };
  };
  return ((o.scopeName = n), [c, Ky(o, ...l)]);
}
function Ky(...n) {
  const l = n[0];
  if (n.length === 1) return l;
  const i = () => {
    const c = n.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const p = c.reduce((d, { useScope: m, scopeName: h }) => {
        const E = m(s)[`__scope${h}`];
        return { ...d, ...E };
      }, {});
      return v.useMemo(() => ({ [`__scope${l.scopeName}`]: p }), [p]);
    };
  };
  return ((i.scopeName = l.scopeName), i);
}
var Zy = globalThis?.document ? v.useLayoutEffect : () => {},
  Xy = xo[' useId '.trim().toString()] || (() => {}),
  Py = 0;
function po(n) {
  const [l, i] = v.useState(Xy());
  return (
    Zy(() => {
      i((c) => c ?? String(Py++));
    }, [n]),
    n || (l ? `radix-${l}` : '')
  );
}
var Jy = globalThis?.document ? v.useLayoutEffect : () => {},
  Wy = xo[' useInsertionEffect '.trim().toString()] || Jy;
function Fy({ prop: n, defaultProp: l, onChange: i = () => {}, caller: c }) {
  const [o, s, p] = Iy({ defaultProp: l, onChange: i }),
    d = n !== void 0,
    m = d ? n : o;
  {
    const g = v.useRef(n !== void 0);
    v.useEffect(() => {
      const E = g.current;
      (E !== d &&
        console.warn(
          `${c} is changing from ${E ? 'controlled' : 'uncontrolled'} to ${d ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (g.current = d));
    }, [d, c]);
  }
  const h = v.useCallback(
    (g) => {
      if (d) {
        const E = $y(g) ? g(n) : g;
        E !== n && p.current?.(E);
      } else s(g);
    },
    [d, n, s, p]
  );
  return [m, h];
}
function Iy({ defaultProp: n, onChange: l }) {
  const [i, c] = v.useState(n),
    o = v.useRef(i),
    s = v.useRef(l);
  return (
    Wy(() => {
      s.current = l;
    }, [l]),
    v.useEffect(() => {
      o.current !== i && (s.current?.(i), (o.current = i));
    }, [i, o]),
    [i, c, s]
  );
}
function $y(n) {
  return typeof n == 'function';
}
function ky(n) {
  const l = e3(n),
    i = v.forwardRef((c, o) => {
      const { children: s, ...p } = c,
        d = v.Children.toArray(s),
        m = d.find(n3);
      if (m) {
        const h = m.props.children,
          g = d.map((E) =>
            E === m
              ? v.Children.count(h) > 1
                ? v.Children.only(null)
                : v.isValidElement(h)
                  ? h.props.children
                  : null
              : E
          );
        return k.jsx(l, {
          ...p,
          ref: o,
          children: v.isValidElement(h) ? v.cloneElement(h, void 0, g) : null,
        });
      }
      return k.jsx(l, { ...p, ref: o, children: s });
    });
  return ((i.displayName = `${n}.Slot`), i);
}
function e3(n) {
  const l = v.forwardRef((i, c) => {
    const { children: o, ...s } = i;
    if (v.isValidElement(o)) {
      const p = l3(o),
        d = a3(s, o.props);
      return (
        o.type !== v.Fragment && (d.ref = c ? ja(c, p) : p),
        v.cloneElement(o, d)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return ((l.displayName = `${n}.SlotClone`), l);
}
var t3 = Symbol('radix.slottable');
function n3(n) {
  return (
    v.isValidElement(n) &&
    typeof n.type == 'function' &&
    '__radixId' in n.type &&
    n.type.__radixId === t3
  );
}
function a3(n, l) {
  const i = { ...l };
  for (const c in l) {
    const o = n[c],
      s = l[c];
    /^on[A-Z]/.test(c)
      ? o && s
        ? (i[c] = (...d) => {
            const m = s(...d);
            return (o(...d), m);
          })
        : o && (i[c] = o)
      : c === 'style'
        ? (i[c] = { ...o, ...s })
        : c === 'className' && (i[c] = [o, s].filter(Boolean).join(' '));
  }
  return { ...n, ...i };
}
function l3(n) {
  let l = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    i = l && 'isReactWarning' in l && l.isReactWarning;
  return i
    ? n.ref
    : ((l = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (i = l && 'isReactWarning' in l && l.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var u3 = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  F1 = u3.reduce((n, l) => {
    const i = ky(`Primitive.${l}`),
      c = v.forwardRef((o, s) => {
        const { asChild: p, ...d } = o,
          m = p ? i : l;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          k.jsx(m, { ...d, ref: s })
        );
      });
    return ((c.displayName = `Primitive.${l}`), { ...n, [l]: c });
  }, {});
function i3(n, l) {
  n && yv.flushSync(() => n.dispatchEvent(l));
}
function Jo(n) {
  const l = v.useRef(n);
  return (
    v.useEffect(() => {
      l.current = n;
    }),
    v.useMemo(
      () =>
        (...i) =>
          l.current?.(...i),
      []
    )
  );
}
function r3(n, l = globalThis?.document) {
  const i = Jo(n);
  v.useEffect(() => {
    const c = (o) => {
      o.key === 'Escape' && i(o);
    };
    return (
      l.addEventListener('keydown', c, { capture: !0 }),
      () => l.removeEventListener('keydown', c, { capture: !0 })
    );
  }, [i, l]);
}
var o3 = 'DismissableLayer',
  Ao = 'dismissableLayer.update',
  c3 = 'dismissableLayer.pointerDownOutside',
  s3 = 'dismissableLayer.focusOutside',
  Ld,
  I1 = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  $1 = v.forwardRef((n, l) => {
    const {
        disableOutsidePointerEvents: i = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: p,
        onDismiss: d,
        ...m
      } = n,
      h = v.useContext(I1),
      [g, E] = v.useState(null),
      T = g?.ownerDocument ?? globalThis?.document,
      [, R] = v.useState({}),
      j = Wn(l, (w) => E(w)),
      A = Array.from(h.layers),
      [x] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      _ = A.indexOf(x),
      b = g ? A.indexOf(g) : -1,
      B = h.layersWithOutsidePointerEventsDisabled.size > 0,
      G = b >= _,
      Q = p3((w) => {
        const te = w.target,
          F = [...h.branches].some((ne) => ne.contains(te));
        !G || F || (o?.(w), p?.(w), w.defaultPrevented || d?.());
      }, T),
      W = m3((w) => {
        const te = w.target;
        [...h.branches].some((ne) => ne.contains(te)) ||
          (s?.(w), p?.(w), w.defaultPrevented || d?.());
      }, T);
    return (
      r3((w) => {
        b === h.layers.size - 1 &&
          (c?.(w), !w.defaultPrevented && d && (w.preventDefault(), d()));
      }, T),
      v.useEffect(() => {
        if (g)
          return (
            i &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Ld = T.body.style.pointerEvents),
                (T.body.style.pointerEvents = 'none')),
              h.layersWithOutsidePointerEventsDisabled.add(g)),
            h.layers.add(g),
            qd(),
            () => {
              i &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (T.body.style.pointerEvents = Ld);
            }
          );
      }, [g, T, i, h]),
      v.useEffect(
        () => () => {
          g &&
            (h.layers.delete(g),
            h.layersWithOutsidePointerEventsDisabled.delete(g),
            qd());
        },
        [g, h]
      ),
      v.useEffect(() => {
        const w = () => R({});
        return (
          document.addEventListener(Ao, w),
          () => document.removeEventListener(Ao, w)
        );
      }, []),
      k.jsx(F1.div, {
        ...m,
        ref: j,
        style: {
          pointerEvents: B ? (G ? 'auto' : 'none') : void 0,
          ...n.style,
        },
        onFocusCapture: bn(n.onFocusCapture, W.onFocusCapture),
        onBlurCapture: bn(n.onBlurCapture, W.onBlurCapture),
        onPointerDownCapture: bn(
          n.onPointerDownCapture,
          Q.onPointerDownCapture
        ),
      })
    );
  });
$1.displayName = o3;
var f3 = 'DismissableLayerBranch',
  d3 = v.forwardRef((n, l) => {
    const i = v.useContext(I1),
      c = v.useRef(null),
      o = Wn(l, c);
    return (
      v.useEffect(() => {
        const s = c.current;
        if (s)
          return (
            i.branches.add(s),
            () => {
              i.branches.delete(s);
            }
          );
      }, [i.branches]),
      k.jsx(F1.div, { ...n, ref: o })
    );
  });
d3.displayName = f3;
function p3(n, l = globalThis?.document) {
  const i = Jo(n),
    c = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const s = (d) => {
          if (d.target && !c.current) {
            let m = function () {
              k1(c3, i, h, { discrete: !0 });
            };
            const h = { originalEvent: d };
            d.pointerType === 'touch'
              ? (l.removeEventListener('click', o.current),
                (o.current = m),
                l.addEventListener('click', o.current, { once: !0 }))
              : m();
          } else l.removeEventListener('click', o.current);
          c.current = !1;
        },
        p = window.setTimeout(() => {
          l.addEventListener('pointerdown', s);
        }, 0);
      return () => {
        (window.clearTimeout(p),
          l.removeEventListener('pointerdown', s),
          l.removeEventListener('click', o.current));
      };
    }, [l, i]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function m3(n, l = globalThis?.document) {
  const i = Jo(n),
    c = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (s) => {
        s.target &&
          !c.current &&
          k1(s3, i, { originalEvent: s }, { discrete: !1 });
      };
      return (
        l.addEventListener('focusin', o),
        () => l.removeEventListener('focusin', o)
      );
    }, [l, i]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}
function qd() {
  const n = new CustomEvent(Ao);
  document.dispatchEvent(n);
}
function k1(n, l, i, { discrete: c }) {
  const o = i.originalEvent.target,
    s = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: i });
  (l && o.addEventListener(n, l, { once: !0 }),
    c ? i3(o, s) : o.dispatchEvent(s));
}
function v3(n) {
  const l = h3(n),
    i = v.forwardRef((c, o) => {
      const { children: s, ...p } = c,
        d = v.Children.toArray(s),
        m = d.find(g3);
      if (m) {
        const h = m.props.children,
          g = d.map((E) =>
            E === m
              ? v.Children.count(h) > 1
                ? v.Children.only(null)
                : v.isValidElement(h)
                  ? h.props.children
                  : null
              : E
          );
        return k.jsx(l, {
          ...p,
          ref: o,
          children: v.isValidElement(h) ? v.cloneElement(h, void 0, g) : null,
        });
      }
      return k.jsx(l, { ...p, ref: o, children: s });
    });
  return ((i.displayName = `${n}.Slot`), i);
}
function h3(n) {
  const l = v.forwardRef((i, c) => {
    const { children: o, ...s } = i;
    if (v.isValidElement(o)) {
      const p = S3(o),
        d = E3(s, o.props);
      return (
        o.type !== v.Fragment && (d.ref = c ? ja(c, p) : p),
        v.cloneElement(o, d)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return ((l.displayName = `${n}.SlotClone`), l);
}
var y3 = Symbol('radix.slottable');
function g3(n) {
  return (
    v.isValidElement(n) &&
    typeof n.type == 'function' &&
    '__radixId' in n.type &&
    n.type.__radixId === y3
  );
}
function E3(n, l) {
  const i = { ...l };
  for (const c in l) {
    const o = n[c],
      s = l[c];
    /^on[A-Z]/.test(c)
      ? o && s
        ? (i[c] = (...d) => {
            const m = s(...d);
            return (o(...d), m);
          })
        : o && (i[c] = o)
      : c === 'style'
        ? (i[c] = { ...o, ...s })
        : c === 'className' && (i[c] = [o, s].filter(Boolean).join(' '));
  }
  return { ...n, ...i };
}
function S3(n) {
  let l = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    i = l && 'isReactWarning' in l && l.isReactWarning;
  return i
    ? n.ref
    : ((l = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (i = l && 'isReactWarning' in l && l.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var C3 = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  b3 = C3.reduce((n, l) => {
    const i = v3(`Primitive.${l}`),
      c = v.forwardRef((o, s) => {
        const { asChild: p, ...d } = o,
          m = p ? i : l;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          k.jsx(m, { ...d, ref: s })
        );
      });
    return ((c.displayName = `Primitive.${l}`), { ...n, [l]: c });
  }, {});
function Vd(n) {
  const l = v.useRef(n);
  return (
    v.useEffect(() => {
      l.current = n;
    }),
    v.useMemo(
      () =>
        (...i) =>
          l.current?.(...i),
      []
    )
  );
}
var mo = 'focusScope.autoFocusOnMount',
  vo = 'focusScope.autoFocusOnUnmount',
  Gd = { bubbles: !1, cancelable: !0 },
  _3 = 'FocusScope',
  ep = v.forwardRef((n, l) => {
    const {
        loop: i = !1,
        trapped: c = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...p
      } = n,
      [d, m] = v.useState(null),
      h = Vd(o),
      g = Vd(s),
      E = v.useRef(null),
      T = Wn(l, (A) => m(A)),
      R = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (v.useEffect(() => {
      if (c) {
        let A = function (B) {
            if (R.paused || !d) return;
            const G = B.target;
            d.contains(G) ? (E.current = G) : Sn(E.current, { select: !0 });
          },
          x = function (B) {
            if (R.paused || !d) return;
            const G = B.relatedTarget;
            G !== null && (d.contains(G) || Sn(E.current, { select: !0 }));
          },
          _ = function (B) {
            if (document.activeElement === document.body)
              for (const Q of B) Q.removedNodes.length > 0 && Sn(d);
          };
        (document.addEventListener('focusin', A),
          document.addEventListener('focusout', x));
        const b = new MutationObserver(_);
        return (
          d && b.observe(d, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener('focusin', A),
              document.removeEventListener('focusout', x),
              b.disconnect());
          }
        );
      }
    }, [c, d, R.paused]),
      v.useEffect(() => {
        if (d) {
          Qd.add(R);
          const A = document.activeElement;
          if (!d.contains(A)) {
            const _ = new CustomEvent(mo, Gd);
            (d.addEventListener(mo, h),
              d.dispatchEvent(_),
              _.defaultPrevented ||
                (R3(M3(tp(d)), { select: !0 }),
                document.activeElement === A && Sn(d)));
          }
          return () => {
            (d.removeEventListener(mo, h),
              setTimeout(() => {
                const _ = new CustomEvent(vo, Gd);
                (d.addEventListener(vo, g),
                  d.dispatchEvent(_),
                  _.defaultPrevented || Sn(A ?? document.body, { select: !0 }),
                  d.removeEventListener(vo, g),
                  Qd.remove(R));
              }, 0));
          };
        }
      }, [d, h, g, R]));
    const j = v.useCallback(
      (A) => {
        if ((!i && !c) || R.paused) return;
        const x = A.key === 'Tab' && !A.altKey && !A.ctrlKey && !A.metaKey,
          _ = document.activeElement;
        if (x && _) {
          const b = A.currentTarget,
            [B, G] = O3(b);
          B && G
            ? !A.shiftKey && _ === G
              ? (A.preventDefault(), i && Sn(B, { select: !0 }))
              : A.shiftKey &&
                _ === B &&
                (A.preventDefault(), i && Sn(G, { select: !0 }))
            : _ === b && A.preventDefault();
        }
      },
      [i, c, R.paused]
    );
    return k.jsx(b3.div, { tabIndex: -1, ...p, ref: T, onKeyDown: j });
  });
ep.displayName = _3;
function R3(n, { select: l = !1 } = {}) {
  const i = document.activeElement;
  for (const c of n)
    if ((Sn(c, { select: l }), document.activeElement !== i)) return;
}
function O3(n) {
  const l = tp(n),
    i = Yd(l, n),
    c = Yd(l.reverse(), n);
  return [i, c];
}
function tp(n) {
  const l = [],
    i = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (c) => {
        const o = c.tagName === 'INPUT' && c.type === 'hidden';
        return c.disabled || c.hidden || o
          ? NodeFilter.FILTER_SKIP
          : c.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; i.nextNode(); ) l.push(i.currentNode);
  return l;
}
function Yd(n, l) {
  for (const i of n) if (!T3(i, { upTo: l })) return i;
}
function T3(n, { upTo: l }) {
  if (getComputedStyle(n).visibility === 'hidden') return !0;
  for (; n; ) {
    if (l !== void 0 && n === l) return !1;
    if (getComputedStyle(n).display === 'none') return !0;
    n = n.parentElement;
  }
  return !1;
}
function N3(n) {
  return n instanceof HTMLInputElement && 'select' in n;
}
function Sn(n, { select: l = !1 } = {}) {
  if (n && n.focus) {
    const i = document.activeElement;
    (n.focus({ preventScroll: !0 }), n !== i && N3(n) && l && n.select());
  }
}
var Qd = A3();
function A3() {
  let n = [];
  return {
    add(l) {
      const i = n[0];
      (l !== i && i?.pause(), (n = wd(n, l)), n.unshift(l));
    },
    remove(l) {
      ((n = wd(n, l)), n[0]?.resume());
    },
  };
}
function wd(n, l) {
  const i = [...n],
    c = i.indexOf(l);
  return (c !== -1 && i.splice(c, 1), i);
}
function M3(n) {
  return n.filter((l) => l.tagName !== 'A');
}
function z3(n) {
  const l = D3(n),
    i = v.forwardRef((c, o) => {
      const { children: s, ...p } = c,
        d = v.Children.toArray(s),
        m = d.find(j3);
      if (m) {
        const h = m.props.children,
          g = d.map((E) =>
            E === m
              ? v.Children.count(h) > 1
                ? v.Children.only(null)
                : v.isValidElement(h)
                  ? h.props.children
                  : null
              : E
          );
        return k.jsx(l, {
          ...p,
          ref: o,
          children: v.isValidElement(h) ? v.cloneElement(h, void 0, g) : null,
        });
      }
      return k.jsx(l, { ...p, ref: o, children: s });
    });
  return ((i.displayName = `${n}.Slot`), i);
}
function D3(n) {
  const l = v.forwardRef((i, c) => {
    const { children: o, ...s } = i;
    if (v.isValidElement(o)) {
      const p = H3(o),
        d = U3(s, o.props);
      return (
        o.type !== v.Fragment && (d.ref = c ? ja(c, p) : p),
        v.cloneElement(o, d)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return ((l.displayName = `${n}.SlotClone`), l);
}
var x3 = Symbol('radix.slottable');
function j3(n) {
  return (
    v.isValidElement(n) &&
    typeof n.type == 'function' &&
    '__radixId' in n.type &&
    n.type.__radixId === x3
  );
}
function U3(n, l) {
  const i = { ...l };
  for (const c in l) {
    const o = n[c],
      s = l[c];
    /^on[A-Z]/.test(c)
      ? o && s
        ? (i[c] = (...d) => {
            const m = s(...d);
            return (o(...d), m);
          })
        : o && (i[c] = o)
      : c === 'style'
        ? (i[c] = { ...o, ...s })
        : c === 'className' && (i[c] = [o, s].filter(Boolean).join(' '));
  }
  return { ...n, ...i };
}
function H3(n) {
  let l = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    i = l && 'isReactWarning' in l && l.isReactWarning;
  return i
    ? n.ref
    : ((l = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (i = l && 'isReactWarning' in l && l.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var B3 = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  L3 = B3.reduce((n, l) => {
    const i = z3(`Primitive.${l}`),
      c = v.forwardRef((o, s) => {
        const { asChild: p, ...d } = o,
          m = p ? i : l;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          k.jsx(m, { ...d, ref: s })
        );
      });
    return ((c.displayName = `Primitive.${l}`), { ...n, [l]: c });
  }, {}),
  q3 = globalThis?.document ? v.useLayoutEffect : () => {},
  V3 = 'Portal',
  np = v.forwardRef((n, l) => {
    const { container: i, ...c } = n,
      [o, s] = v.useState(!1);
    q3(() => s(!0), []);
    const p = i || (o && globalThis?.document?.body);
    return p ? gv.createPortal(k.jsx(L3.div, { ...c, ref: l }), p) : null;
  });
np.displayName = V3;
var Kd = globalThis?.document ? v.useLayoutEffect : () => {};
function G3(n, l) {
  return v.useReducer((i, c) => l[i][c] ?? i, n);
}
var ii = (n) => {
  const { present: l, children: i } = n,
    c = Y3(l),
    o =
      typeof i == 'function' ? i({ present: c.isPresent }) : v.Children.only(i),
    s = Wn(c.ref, Q3(o));
  return typeof i == 'function' || c.isPresent
    ? v.cloneElement(o, { ref: s })
    : null;
};
ii.displayName = 'Presence';
function Y3(n) {
  const [l, i] = v.useState(),
    c = v.useRef(null),
    o = v.useRef(n),
    s = v.useRef('none'),
    p = n ? 'mounted' : 'unmounted',
    [d, m] = G3(p, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    v.useEffect(() => {
      const h = Lu(c.current);
      s.current = d === 'mounted' ? h : 'none';
    }, [d]),
    Kd(() => {
      const h = c.current,
        g = o.current;
      if (g !== n) {
        const T = s.current,
          R = Lu(h);
        (n
          ? m('MOUNT')
          : R === 'none' || h?.display === 'none'
            ? m('UNMOUNT')
            : m(g && T !== R ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = n));
      }
    }, [n, m]),
    Kd(() => {
      if (l) {
        let h;
        const g = l.ownerDocument.defaultView ?? window,
          E = (R) => {
            const A = Lu(c.current).includes(CSS.escape(R.animationName));
            if (R.target === l && A && (m('ANIMATION_END'), !o.current)) {
              const x = l.style.animationFillMode;
              ((l.style.animationFillMode = 'forwards'),
                (h = g.setTimeout(() => {
                  l.style.animationFillMode === 'forwards' &&
                    (l.style.animationFillMode = x);
                })));
            }
          },
          T = (R) => {
            R.target === l && (s.current = Lu(c.current));
          };
        return (
          l.addEventListener('animationstart', T),
          l.addEventListener('animationcancel', E),
          l.addEventListener('animationend', E),
          () => {
            (g.clearTimeout(h),
              l.removeEventListener('animationstart', T),
              l.removeEventListener('animationcancel', E),
              l.removeEventListener('animationend', E));
          }
        );
      } else m('ANIMATION_END');
    }, [l, m]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(d),
      ref: v.useCallback((h) => {
        ((c.current = h ? getComputedStyle(h) : null), i(h));
      }, []),
    }
  );
}
function Lu(n) {
  return n?.animationName || 'none';
}
function Q3(n) {
  let l = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    i = l && 'isReactWarning' in l && l.isReactWarning;
  return i
    ? n.ref
    : ((l = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (i = l && 'isReactWarning' in l && l.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
function ap(n) {
  const l = w3(n),
    i = v.forwardRef((c, o) => {
      const { children: s, ...p } = c,
        d = v.Children.toArray(s),
        m = d.find(Z3);
      if (m) {
        const h = m.props.children,
          g = d.map((E) =>
            E === m
              ? v.Children.count(h) > 1
                ? v.Children.only(null)
                : v.isValidElement(h)
                  ? h.props.children
                  : null
              : E
          );
        return k.jsx(l, {
          ...p,
          ref: o,
          children: v.isValidElement(h) ? v.cloneElement(h, void 0, g) : null,
        });
      }
      return k.jsx(l, { ...p, ref: o, children: s });
    });
  return ((i.displayName = `${n}.Slot`), i);
}
function w3(n) {
  const l = v.forwardRef((i, c) => {
    const { children: o, ...s } = i;
    if (v.isValidElement(o)) {
      const p = P3(o),
        d = X3(s, o.props);
      return (
        o.type !== v.Fragment && (d.ref = c ? ja(c, p) : p),
        v.cloneElement(o, d)
      );
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return ((l.displayName = `${n}.SlotClone`), l);
}
var K3 = Symbol('radix.slottable');
function Z3(n) {
  return (
    v.isValidElement(n) &&
    typeof n.type == 'function' &&
    '__radixId' in n.type &&
    n.type.__radixId === K3
  );
}
function X3(n, l) {
  const i = { ...l };
  for (const c in l) {
    const o = n[c],
      s = l[c];
    /^on[A-Z]/.test(c)
      ? o && s
        ? (i[c] = (...d) => {
            const m = s(...d);
            return (o(...d), m);
          })
        : o && (i[c] = o)
      : c === 'style'
        ? (i[c] = { ...o, ...s })
        : c === 'className' && (i[c] = [o, s].filter(Boolean).join(' '));
  }
  return { ...n, ...i };
}
function P3(n) {
  let l = Object.getOwnPropertyDescriptor(n.props, 'ref')?.get,
    i = l && 'isReactWarning' in l && l.isReactWarning;
  return i
    ? n.ref
    : ((l = Object.getOwnPropertyDescriptor(n, 'ref')?.get),
      (i = l && 'isReactWarning' in l && l.isReactWarning),
      i ? n.props.ref : n.props.ref || n.ref);
}
var J3 = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  xl = J3.reduce((n, l) => {
    const i = ap(`Primitive.${l}`),
      c = v.forwardRef((o, s) => {
        const { asChild: p, ...d } = o,
          m = p ? i : l;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          k.jsx(m, { ...d, ref: s })
        );
      });
    return ((c.displayName = `Primitive.${l}`), { ...n, [l]: c });
  }, {}),
  ho = 0;
function W3() {
  v.useEffect(() => {
    const n = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement('afterbegin', n[0] ?? Zd()),
      document.body.insertAdjacentElement('beforeend', n[1] ?? Zd()),
      ho++,
      () => {
        (ho === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((l) => l.remove()),
          ho--);
      }
    );
  }, []);
}
function Zd() {
  const n = document.createElement('span');
  return (
    n.setAttribute('data-radix-focus-guard', ''),
    (n.tabIndex = 0),
    (n.style.outline = 'none'),
    (n.style.opacity = '0'),
    (n.style.position = 'fixed'),
    (n.style.pointerEvents = 'none'),
    n
  );
}
var Ku = 'right-scroll-bar-position',
  Zu = 'width-before-scroll-bar',
  F3 = 'with-scroll-bars-hidden',
  I3 = '--removed-body-scroll-bar-size';
function yo(n, l) {
  return (typeof n == 'function' ? n(l) : n && (n.current = l), n);
}
function $3(n, l) {
  var i = v.useState(function () {
    return {
      value: n,
      callback: l,
      facade: {
        get current() {
          return i.value;
        },
        set current(c) {
          var o = i.value;
          o !== c && ((i.value = c), i.callback(c, o));
        },
      },
    };
  })[0];
  return ((i.callback = l), i.facade);
}
var k3 = typeof window < 'u' ? v.useLayoutEffect : v.useEffect,
  Xd = new WeakMap();
function eg(n, l) {
  var i = $3(null, function (c) {
    return n.forEach(function (o) {
      return yo(o, c);
    });
  });
  return (
    k3(
      function () {
        var c = Xd.get(i);
        if (c) {
          var o = new Set(c),
            s = new Set(n),
            p = i.current;
          (o.forEach(function (d) {
            s.has(d) || yo(d, null);
          }),
            s.forEach(function (d) {
              o.has(d) || yo(d, p);
            }));
        }
        Xd.set(i, n);
      },
      [n]
    ),
    i
  );
}
function tg(n) {
  return n;
}
function ng(n, l) {
  l === void 0 && (l = tg);
  var i = [],
    c = !1,
    o = {
      read: function () {
        if (c)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return i.length ? i[i.length - 1] : n;
      },
      useMedium: function (s) {
        var p = l(s, c);
        return (
          i.push(p),
          function () {
            i = i.filter(function (d) {
              return d !== p;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (c = !0; i.length; ) {
          var p = i;
          ((i = []), p.forEach(s));
        }
        i = {
          push: function (d) {
            return s(d);
          },
          filter: function () {
            return i;
          },
        };
      },
      assignMedium: function (s) {
        c = !0;
        var p = [];
        if (i.length) {
          var d = i;
          ((i = []), d.forEach(s), (p = i));
        }
        var m = function () {
            var g = p;
            ((p = []), g.forEach(s));
          },
          h = function () {
            return Promise.resolve().then(m);
          };
        (h(),
          (i = {
            push: function (g) {
              (p.push(g), h());
            },
            filter: function (g) {
              return ((p = p.filter(g)), i);
            },
          }));
      },
    };
  return o;
}
function ag(n) {
  n === void 0 && (n = {});
  var l = ng(null);
  return ((l.options = Cn({ async: !0, ssr: !1 }, n)), l);
}
var lp = function (n) {
  var l = n.sideCar,
    i = n1(n, ['sideCar']);
  if (!l)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car'
    );
  var c = l.read();
  if (!c) throw new Error('Sidecar medium not found');
  return v.createElement(c, Cn({}, i));
};
lp.isSideCarExport = !0;
function lg(n, l) {
  return (n.useMedium(l), lp);
}
var up = ag(),
  go = function () {},
  ri = v.forwardRef(function (n, l) {
    var i = v.useRef(null),
      c = v.useState({
        onScrollCapture: go,
        onWheelCapture: go,
        onTouchMoveCapture: go,
      }),
      o = c[0],
      s = c[1],
      p = n.forwardProps,
      d = n.children,
      m = n.className,
      h = n.removeScrollBar,
      g = n.enabled,
      E = n.shards,
      T = n.sideCar,
      R = n.noRelative,
      j = n.noIsolation,
      A = n.inert,
      x = n.allowPinchZoom,
      _ = n.as,
      b = _ === void 0 ? 'div' : _,
      B = n.gapMode,
      G = n1(n, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noRelative',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      Q = T,
      W = eg([i, l]),
      w = Cn(Cn({}, G), o);
    return v.createElement(
      v.Fragment,
      null,
      g &&
        v.createElement(Q, {
          sideCar: up,
          removeScrollBar: h,
          shards: E,
          noRelative: R,
          noIsolation: j,
          inert: A,
          setCallbacks: s,
          allowPinchZoom: !!x,
          lockRef: i,
          gapMode: B,
        }),
      p
        ? v.cloneElement(v.Children.only(d), Cn(Cn({}, w), { ref: W }))
        : v.createElement(b, Cn({}, w, { className: m, ref: W }), d)
    );
  });
ri.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ri.classNames = { fullWidth: Zu, zeroRight: Ku };
var ug = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function ig() {
  if (!document) return null;
  var n = document.createElement('style');
  n.type = 'text/css';
  var l = ug();
  return (l && n.setAttribute('nonce', l), n);
}
function rg(n, l) {
  n.styleSheet
    ? (n.styleSheet.cssText = l)
    : n.appendChild(document.createTextNode(l));
}
function og(n) {
  var l = document.head || document.getElementsByTagName('head')[0];
  l.appendChild(n);
}
var cg = function () {
    var n = 0,
      l = null;
    return {
      add: function (i) {
        (n == 0 && (l = ig()) && (rg(l, i), og(l)), n++);
      },
      remove: function () {
        (n--,
          !n && l && (l.parentNode && l.parentNode.removeChild(l), (l = null)));
      },
    };
  },
  sg = function () {
    var n = cg();
    return function (l, i) {
      v.useEffect(
        function () {
          return (
            n.add(l),
            function () {
              n.remove();
            }
          );
        },
        [l && i]
      );
    };
  },
  ip = function () {
    var n = sg(),
      l = function (i) {
        var c = i.styles,
          o = i.dynamic;
        return (n(c, o), null);
      };
    return l;
  },
  fg = { left: 0, top: 0, right: 0, gap: 0 },
  Eo = function (n) {
    return parseInt(n || '', 10) || 0;
  },
  dg = function (n) {
    var l = window.getComputedStyle(document.body),
      i = l[n === 'padding' ? 'paddingLeft' : 'marginLeft'],
      c = l[n === 'padding' ? 'paddingTop' : 'marginTop'],
      o = l[n === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Eo(i), Eo(c), Eo(o)];
  },
  pg = function (n) {
    if ((n === void 0 && (n = 'margin'), typeof window > 'u')) return fg;
    var l = dg(n),
      i = document.documentElement.clientWidth,
      c = window.innerWidth;
    return {
      left: l[0],
      top: l[1],
      right: l[2],
      gap: Math.max(0, c - i + l[2] - l[0]),
    };
  },
  mg = ip(),
  Aa = 'data-scroll-locked',
  vg = function (n, l, i, c) {
    var o = n.left,
      s = n.top,
      p = n.right,
      d = n.gap;
    return (
      i === void 0 && (i = 'margin'),
      `
  .`
        .concat(
          F3,
          ` {
   overflow: hidden `
        )
        .concat(
          c,
          `;
   padding-right: `
        )
        .concat(d, 'px ')
        .concat(
          c,
          `;
  }
  body[`
        )
        .concat(
          Aa,
          `] {
    overflow: hidden `
        )
        .concat(
          c,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            l && 'position: relative '.concat(c, ';'),
            i === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  s,
                  `px;
    padding-right: `
                )
                .concat(
                  p,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(d, 'px ')
                .concat(
                  c,
                  `;
    `
                ),
            i === 'padding' &&
              'padding-right: '.concat(d, 'px ').concat(c, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          Ku,
          ` {
    right: `
        )
        .concat(d, 'px ')
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(
          Zu,
          ` {
    margin-right: `
        )
        .concat(d, 'px ')
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(Ku, ' .')
        .concat(
          Ku,
          ` {
    right: 0 `
        )
        .concat(
          c,
          `;
  }
  
  .`
        )
        .concat(Zu, ' .')
        .concat(
          Zu,
          ` {
    margin-right: 0 `
        )
        .concat(
          c,
          `;
  }
  
  body[`
        )
        .concat(
          Aa,
          `] {
    `
        )
        .concat(I3, ': ')
        .concat(
          d,
          `px;
  }
`
        )
    );
  },
  Pd = function () {
    var n = parseInt(document.body.getAttribute(Aa) || '0', 10);
    return isFinite(n) ? n : 0;
  },
  hg = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(Aa, (Pd() + 1).toString()),
        function () {
          var n = Pd() - 1;
          n <= 0
            ? document.body.removeAttribute(Aa)
            : document.body.setAttribute(Aa, n.toString());
        }
      );
    }, []);
  },
  yg = function (n) {
    var l = n.noRelative,
      i = n.noImportant,
      c = n.gapMode,
      o = c === void 0 ? 'margin' : c;
    hg();
    var s = v.useMemo(
      function () {
        return pg(o);
      },
      [o]
    );
    return v.createElement(mg, { styles: vg(s, !l, o, i ? '' : '!important') });
  },
  Mo = !1;
if (typeof window < 'u')
  try {
    var qu = Object.defineProperty({}, 'passive', {
      get: function () {
        return ((Mo = !0), !0);
      },
    });
    (window.addEventListener('test', qu, qu),
      window.removeEventListener('test', qu, qu));
  } catch {
    Mo = !1;
  }
var Oa = Mo ? { passive: !1 } : !1,
  gg = function (n) {
    return n.tagName === 'TEXTAREA';
  },
  rp = function (n, l) {
    if (!(n instanceof Element)) return !1;
    var i = window.getComputedStyle(n);
    return (
      i[l] !== 'hidden' &&
      !(i.overflowY === i.overflowX && !gg(n) && i[l] === 'visible')
    );
  },
  Eg = function (n) {
    return rp(n, 'overflowY');
  },
  Sg = function (n) {
    return rp(n, 'overflowX');
  },
  Jd = function (n, l) {
    var i = l.ownerDocument,
      c = l;
    do {
      typeof ShadowRoot < 'u' && c instanceof ShadowRoot && (c = c.host);
      var o = op(n, c);
      if (o) {
        var s = cp(n, c),
          p = s[1],
          d = s[2];
        if (p > d) return !0;
      }
      c = c.parentNode;
    } while (c && c !== i.body);
    return !1;
  },
  Cg = function (n) {
    var l = n.scrollTop,
      i = n.scrollHeight,
      c = n.clientHeight;
    return [l, i, c];
  },
  bg = function (n) {
    var l = n.scrollLeft,
      i = n.scrollWidth,
      c = n.clientWidth;
    return [l, i, c];
  },
  op = function (n, l) {
    return n === 'v' ? Eg(l) : Sg(l);
  },
  cp = function (n, l) {
    return n === 'v' ? Cg(l) : bg(l);
  },
  _g = function (n, l) {
    return n === 'h' && l === 'rtl' ? -1 : 1;
  },
  Rg = function (n, l, i, c, o) {
    var s = _g(n, window.getComputedStyle(l).direction),
      p = s * c,
      d = i.target,
      m = l.contains(d),
      h = !1,
      g = p > 0,
      E = 0,
      T = 0;
    do {
      if (!d) break;
      var R = cp(n, d),
        j = R[0],
        A = R[1],
        x = R[2],
        _ = A - x - s * j;
      (j || _) && op(n, d) && ((E += _), (T += j));
      var b = d.parentNode;
      d = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
    } while ((!m && d !== document.body) || (m && (l.contains(d) || l === d)));
    return (((g && Math.abs(E) < 1) || (!g && Math.abs(T) < 1)) && (h = !0), h);
  },
  Vu = function (n) {
    return 'changedTouches' in n
      ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
      : [0, 0];
  },
  Wd = function (n) {
    return [n.deltaX, n.deltaY];
  },
  Fd = function (n) {
    return n && 'current' in n ? n.current : n;
  },
  Og = function (n, l) {
    return n[0] === l[0] && n[1] === l[1];
  },
  Tg = function (n) {
    return `
  .block-interactivity-`
      .concat(
        n,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        n,
        ` {pointer-events: all;}
`
      );
  },
  Ng = 0,
  Ta = [];
function Ag(n) {
  var l = v.useRef([]),
    i = v.useRef([0, 0]),
    c = v.useRef(),
    o = v.useState(Ng++)[0],
    s = v.useState(ip)[0],
    p = v.useRef(n);
  (v.useEffect(
    function () {
      p.current = n;
    },
    [n]
  ),
    v.useEffect(
      function () {
        if (n.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var A = vv([n.lockRef.current], (n.shards || []).map(Fd), !0).filter(
            Boolean
          );
          return (
            A.forEach(function (x) {
              return x.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              (document.body.classList.remove('block-interactivity-'.concat(o)),
                A.forEach(function (x) {
                  return x.classList.remove('allow-interactivity-'.concat(o));
                }));
            }
          );
        }
      },
      [n.inert, n.lockRef.current, n.shards]
    ));
  var d = v.useCallback(function (A, x) {
      if (
        ('touches' in A && A.touches.length === 2) ||
        (A.type === 'wheel' && A.ctrlKey)
      )
        return !p.current.allowPinchZoom;
      var _ = Vu(A),
        b = i.current,
        B = 'deltaX' in A ? A.deltaX : b[0] - _[0],
        G = 'deltaY' in A ? A.deltaY : b[1] - _[1],
        Q,
        W = A.target,
        w = Math.abs(B) > Math.abs(G) ? 'h' : 'v';
      if ('touches' in A && w === 'h' && W.type === 'range') return !1;
      var te = Jd(w, W);
      if (!te) return !0;
      if ((te ? (Q = w) : ((Q = w === 'v' ? 'h' : 'v'), (te = Jd(w, W))), !te))
        return !1;
      if (
        (!c.current && 'changedTouches' in A && (B || G) && (c.current = Q), !Q)
      )
        return !0;
      var F = c.current || Q;
      return Rg(F, x, A, F === 'h' ? B : G);
    }, []),
    m = v.useCallback(function (A) {
      var x = A;
      if (!(!Ta.length || Ta[Ta.length - 1] !== s)) {
        var _ = 'deltaY' in x ? Wd(x) : Vu(x),
          b = l.current.filter(function (Q) {
            return (
              Q.name === x.type &&
              (Q.target === x.target || x.target === Q.shadowParent) &&
              Og(Q.delta, _)
            );
          })[0];
        if (b && b.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!b) {
          var B = (p.current.shards || [])
              .map(Fd)
              .filter(Boolean)
              .filter(function (Q) {
                return Q.contains(x.target);
              }),
            G = B.length > 0 ? d(x, B[0]) : !p.current.noIsolation;
          G && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    h = v.useCallback(function (A, x, _, b) {
      var B = { name: A, delta: x, target: _, should: b, shadowParent: Mg(_) };
      (l.current.push(B),
        setTimeout(function () {
          l.current = l.current.filter(function (G) {
            return G !== B;
          });
        }, 1));
    }, []),
    g = v.useCallback(function (A) {
      ((i.current = Vu(A)), (c.current = void 0));
    }, []),
    E = v.useCallback(function (A) {
      h(A.type, Wd(A), A.target, d(A, n.lockRef.current));
    }, []),
    T = v.useCallback(function (A) {
      h(A.type, Vu(A), A.target, d(A, n.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      Ta.push(s),
      n.setCallbacks({
        onScrollCapture: E,
        onWheelCapture: E,
        onTouchMoveCapture: T,
      }),
      document.addEventListener('wheel', m, Oa),
      document.addEventListener('touchmove', m, Oa),
      document.addEventListener('touchstart', g, Oa),
      function () {
        ((Ta = Ta.filter(function (A) {
          return A !== s;
        })),
          document.removeEventListener('wheel', m, Oa),
          document.removeEventListener('touchmove', m, Oa),
          document.removeEventListener('touchstart', g, Oa));
      }
    );
  }, []);
  var R = n.removeScrollBar,
    j = n.inert;
  return v.createElement(
    v.Fragment,
    null,
    j ? v.createElement(s, { styles: Tg(o) }) : null,
    R
      ? v.createElement(yg, { noRelative: n.noRelative, gapMode: n.gapMode })
      : null
  );
}
function Mg(n) {
  for (var l = null; n !== null; )
    (n instanceof ShadowRoot && ((l = n.host), (n = n.host)),
      (n = n.parentNode));
  return l;
}
const zg = lg(up, Ag);
var sp = v.forwardRef(function (n, l) {
  return v.createElement(ri, Cn({}, n, { ref: l, sideCar: zg }));
});
sp.classNames = ri.classNames;
var oi = 'Dialog',
  [fp] = wy(oi),
  [Dg, Tt] = fp(oi),
  dp = (n) => {
    const {
        __scopeDialog: l,
        children: i,
        open: c,
        defaultOpen: o,
        onOpenChange: s,
        modal: p = !0,
      } = n,
      d = v.useRef(null),
      m = v.useRef(null),
      [h, g] = Fy({ prop: c, defaultProp: o ?? !1, onChange: s, caller: oi });
    return k.jsx(Dg, {
      scope: l,
      triggerRef: d,
      contentRef: m,
      contentId: po(),
      titleId: po(),
      descriptionId: po(),
      open: h,
      onOpenChange: g,
      onOpenToggle: v.useCallback(() => g((E) => !E), [g]),
      modal: p,
      children: i,
    });
  };
dp.displayName = oi;
var pp = 'DialogTrigger',
  mp = v.forwardRef((n, l) => {
    const { __scopeDialog: i, ...c } = n,
      o = Tt(pp, i),
      s = Wn(l, o.triggerRef);
    return k.jsx(xl.button, {
      type: 'button',
      'aria-haspopup': 'dialog',
      'aria-expanded': o.open,
      'aria-controls': o.contentId,
      'data-state': Io(o.open),
      ...c,
      ref: s,
      onClick: bn(n.onClick, o.onOpenToggle),
    });
  });
mp.displayName = pp;
var Wo = 'DialogPortal',
  [xg, vp] = fp(Wo, { forceMount: void 0 }),
  hp = (n) => {
    const { __scopeDialog: l, forceMount: i, children: c, container: o } = n,
      s = Tt(Wo, l);
    return k.jsx(xg, {
      scope: l,
      forceMount: i,
      children: v.Children.map(c, (p) =>
        k.jsx(ii, {
          present: i || s.open,
          children: k.jsx(np, { asChild: !0, container: o, children: p }),
        })
      ),
    });
  };
hp.displayName = Wo;
var ti = 'DialogOverlay',
  yp = v.forwardRef((n, l) => {
    const i = vp(ti, n.__scopeDialog),
      { forceMount: c = i.forceMount, ...o } = n,
      s = Tt(ti, n.__scopeDialog);
    return s.modal
      ? k.jsx(ii, {
          present: c || s.open,
          children: k.jsx(Ug, { ...o, ref: l }),
        })
      : null;
  });
yp.displayName = ti;
var jg = ap('DialogOverlay.RemoveScroll'),
  Ug = v.forwardRef((n, l) => {
    const { __scopeDialog: i, ...c } = n,
      o = Tt(ti, i);
    return k.jsx(sp, {
      as: jg,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: k.jsx(xl.div, {
        'data-state': Io(o.open),
        ...c,
        ref: l,
        style: { pointerEvents: 'auto', ...c.style },
      }),
    });
  }),
  Pn = 'DialogContent',
  gp = v.forwardRef((n, l) => {
    const i = vp(Pn, n.__scopeDialog),
      { forceMount: c = i.forceMount, ...o } = n,
      s = Tt(Pn, n.__scopeDialog);
    return k.jsx(ii, {
      present: c || s.open,
      children: s.modal
        ? k.jsx(Hg, { ...o, ref: l })
        : k.jsx(Bg, { ...o, ref: l }),
    });
  });
gp.displayName = Pn;
var Hg = v.forwardRef((n, l) => {
    const i = Tt(Pn, n.__scopeDialog),
      c = v.useRef(null),
      o = Wn(l, i.contentRef, c);
    return (
      v.useEffect(() => {
        const s = c.current;
        if (s) return hv(s);
      }, []),
      k.jsx(Ep, {
        ...n,
        ref: o,
        trapFocus: i.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: bn(n.onCloseAutoFocus, (s) => {
          (s.preventDefault(), i.triggerRef.current?.focus());
        }),
        onPointerDownOutside: bn(n.onPointerDownOutside, (s) => {
          const p = s.detail.originalEvent,
            d = p.button === 0 && p.ctrlKey === !0;
          (p.button === 2 || d) && s.preventDefault();
        }),
        onFocusOutside: bn(n.onFocusOutside, (s) => s.preventDefault()),
      })
    );
  }),
  Bg = v.forwardRef((n, l) => {
    const i = Tt(Pn, n.__scopeDialog),
      c = v.useRef(!1),
      o = v.useRef(!1);
    return k.jsx(Ep, {
      ...n,
      ref: l,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        (n.onCloseAutoFocus?.(s),
          s.defaultPrevented ||
            (c.current || i.triggerRef.current?.focus(), s.preventDefault()),
          (c.current = !1),
          (o.current = !1));
      },
      onInteractOutside: (s) => {
        (n.onInteractOutside?.(s),
          s.defaultPrevented ||
            ((c.current = !0),
            s.detail.originalEvent.type === 'pointerdown' && (o.current = !0)));
        const p = s.target;
        (i.triggerRef.current?.contains(p) && s.preventDefault(),
          s.detail.originalEvent.type === 'focusin' &&
            o.current &&
            s.preventDefault());
      },
    });
  }),
  Ep = v.forwardRef((n, l) => {
    const {
        __scopeDialog: i,
        trapFocus: c,
        onOpenAutoFocus: o,
        onCloseAutoFocus: s,
        ...p
      } = n,
      d = Tt(Pn, i),
      m = v.useRef(null),
      h = Wn(l, m);
    return (
      W3(),
      k.jsxs(k.Fragment, {
        children: [
          k.jsx(ep, {
            asChild: !0,
            loop: !0,
            trapped: c,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: k.jsx($1, {
              role: 'dialog',
              id: d.contentId,
              'aria-describedby': d.descriptionId,
              'aria-labelledby': d.titleId,
              'data-state': Io(d.open),
              ...p,
              ref: h,
              onDismiss: () => d.onOpenChange(!1),
            }),
          }),
          k.jsxs(k.Fragment, {
            children: [
              k.jsx(Lg, { titleId: d.titleId }),
              k.jsx(Vg, { contentRef: m, descriptionId: d.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Fo = 'DialogTitle',
  Sp = v.forwardRef((n, l) => {
    const { __scopeDialog: i, ...c } = n,
      o = Tt(Fo, i);
    return k.jsx(xl.h2, { id: o.titleId, ...c, ref: l });
  });
Sp.displayName = Fo;
var Cp = 'DialogDescription',
  bp = v.forwardRef((n, l) => {
    const { __scopeDialog: i, ...c } = n,
      o = Tt(Cp, i);
    return k.jsx(xl.p, { id: o.descriptionId, ...c, ref: l });
  });
bp.displayName = Cp;
var _p = 'DialogClose',
  Rp = v.forwardRef((n, l) => {
    const { __scopeDialog: i, ...c } = n,
      o = Tt(_p, i);
    return k.jsx(xl.button, {
      type: 'button',
      ...c,
      ref: l,
      onClick: bn(n.onClick, () => o.onOpenChange(!1)),
    });
  });
Rp.displayName = _p;
function Io(n) {
  return n ? 'open' : 'closed';
}
var Op = 'DialogTitleWarning',
  [R4, Tp] = Qy(Op, { contentName: Pn, titleName: Fo, docsSlug: 'dialog' }),
  Lg = ({ titleId: n }) => {
    const l = Tp(Op),
      i = `\`${l.contentName}\` requires a \`${l.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${l.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${l.docsSlug}`;
    return (
      v.useEffect(() => {
        n && (document.getElementById(n) || console.error(i));
      }, [i, n]),
      null
    );
  },
  qg = 'DialogDescriptionWarning',
  Vg = ({ contentRef: n, descriptionId: l }) => {
    const c = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Tp(qg).contentName}}.`;
    return (
      v.useEffect(() => {
        const o = n.current?.getAttribute('aria-describedby');
        l && o && (document.getElementById(l) || console.warn(c));
      }, [c, n, l]),
      null
    );
  },
  O4 = dp,
  T4 = mp,
  N4 = hp,
  A4 = yp,
  M4 = gp,
  z4 = Sp,
  D4 = bp,
  x4 = Rp;
export {
  f4 as A,
  Zg as B,
  Ig as C,
  Jg as D,
  E4 as E,
  Xg as F,
  S4 as G,
  kg as H,
  O4 as I,
  M4 as J,
  x4 as K,
  _1 as L,
  z4 as M,
  D4 as N,
  N4 as O,
  $g as P,
  A4 as Q,
  _n as R,
  p4 as S,
  T4 as T,
  b4 as U,
  _4 as V,
  cy as W,
  t4 as X,
  e4 as Y,
  Qg as _,
  nt as a,
  Pg as b,
  Wg as c,
  Kg as d,
  _2 as e,
  Fg as f,
  M1 as g,
  d4 as h,
  n4 as i,
  k as j,
  a4 as k,
  g4 as l,
  i4 as m,
  u4 as n,
  r4 as o,
  c4 as p,
  s4 as q,
  v as r,
  wg as s,
  v4 as t,
  Jn as u,
  y4 as v,
  m4 as w,
  o4 as x,
  l4 as y,
  h4 as z,
};
