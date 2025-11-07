import { r as p, j as c } from './vendor_react-C8wG62CJ.js';
import './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const h = {
    IDLE: 'idle',
    INITIALIZING: 'initializing',
    RUNNING: 'running',
    SUCCESS: 'success',
    ERROR: 'error',
    CANCELLED: 'cancelled',
  },
  r = { ERROR: 'error', WARN: 'warn', INFO: 'info', DEBUG: 'debug' },
  Z = {
    autoReload: !1,
    silent: !0,
    preserveKeys: ['auth', 'token', 'user', 'theme', 'session'],
    runDelay: 1e3,
    debug: !1,
    manual: !1,
    ttlHours: 24,
    progressUI: !1,
    statusIndicator: !0,
    retries: 3,
    retryDelayMS: 500,
    taskTimeoutMS: 2e4,
    enableHealthCheck: !0,
    enableAnalytics: !1,
    gracefulDegradation: !0,
  };
class X {
  constructor(t = !1, e = !1) {
    ((this.silent = t),
      (this.debug = e),
      (this.logs = []),
      (this.maxLogs = 1e3));
  }
  log(t, e = r.INFO, s = {}) {
    const o = {
      timestamp: new Date().toISOString(),
      level: e,
      message: t,
      meta: s,
    };
    (this.logs.push(o),
      this.logs.length > this.maxLogs && this.logs.shift(),
      !(this.silent && e !== r.ERROR) && e === r.DEBUG && this.debug);
  }
  getLogs() {
    return [...this.logs];
  }
  exportLogs() {
    return JSON.stringify(this.logs, null, 2);
  }
}
class Q {
  constructor(t = 3, e = 500) {
    ((this.maxRetries = t), (this.baseDelay = e));
  }
  async execute(t, e = 'Task') {
    let s;
    for (let o = 0; o <= this.maxRetries; o++)
      try {
        return await t();
      } catch (a) {
        if (((s = a), o < this.maxRetries)) {
          const i = this.baseDelay * Math.pow(2, o);
          await this.sleep(i);
        }
      }
    throw new Error(
      `${e} failed after ${this.maxRetries + 1} attempts: ${s.message}`
    );
  }
  sleep(t) {
    return new Promise((e) => setTimeout(e, t));
  }
}
class I {
  static race(t, e, s = 'Task') {
    return Promise.race([
      t,
      new Promise((o, a) =>
        setTimeout(() => a(new Error(`${s} timeout after ${e}ms`)), e)
      ),
    ]);
  }
}
class ee {
  constructor(t, e = []) {
    ((this.logger = t), (this.preserveKeys = e));
  }
  shouldPreserve(t) {
    return this.preserveKeys.some((e) =>
      t.toLowerCase().includes(e.toLowerCase())
    );
  }
  clearWebStorage(t, e) {
    try {
      const s = Object.keys(t),
        o = [],
        a = [];
      return (
        s.forEach((i) => {
          if (this.shouldPreserve(i)) o.push(i);
          else
            try {
              (t.removeItem(i), a.push(i));
            } catch (g) {
              this.logger.log(`Failed to remove ${e} key: ${i}`, r.WARN, {
                error: g.message,
              });
            }
        }),
        this.logger.log(
          `${e}: removed ${a.length}, preserved ${o.length}`,
          r.INFO
        ),
        {
          success: !0,
          removed: a.length,
          preserved: o.length,
          keys: { removed: a, preserved: o },
        }
      );
    } catch (s) {
      return (
        this.logger.log(`${e} cleanup failed`, r.ERROR, { error: s.message }),
        { success: !1, error: s.message }
      );
    }
  }
  clearCookies() {
    try {
      const t = document.cookie.split(';').filter(Boolean);
      let e = 0,
        s = 0;
      return (
        t.forEach((o) => {
          const a = o.split('=')[0].trim();
          if (this.shouldPreserve(a)) s++;
          else
            try {
              ((document.cookie = `${a}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`),
                (document.cookie = `${a}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${window.location.hostname}`),
                e++);
            } catch {
              this.logger.log(`Failed to delete cookie: ${a}`, r.WARN);
            }
        }),
        this.logger.log(`Cookies: deleted ${e}, preserved ${s}`, r.INFO),
        { success: !0, deleted: e, preserved: s }
      );
    } catch (t) {
      return (
        this.logger.log('Cookie cleanup failed', r.ERROR, { error: t.message }),
        { success: !1, error: t.message }
      );
    }
  }
  async clearCacheStorage(t, e) {
    try {
      if (!('caches' in window))
        return (
          this.logger.log('CacheStorage API not supported', r.WARN),
          { success: !0, deleted: 0, skipped: !0 }
        );
      const s = await I.race(caches.keys(), e, 'CacheStorage.keys()'),
        o = s.filter((m) => !this.shouldPreserve(m)),
        a = s.length - o.length,
        i = await Promise.allSettled(
          o.map((m) =>
            t.execute(
              () => I.race(caches.delete(m), e, `Delete cache: ${m}`),
              `CacheStorage.delete(${m})`
            )
          )
        ),
        g = i.filter((m) => m.status === 'fulfilled').length,
        u = i.filter((m) => m.status === 'rejected').length;
      return (
        this.logger.log(
          `CacheStorage: deleted ${g}, preserved ${a}, failed ${u}`,
          r.INFO
        ),
        { success: !0, deleted: g, preserved: a, failed: u }
      );
    } catch (s) {
      return (
        this.logger.log('CacheStorage cleanup failed', r.ERROR, {
          error: s.message,
        }),
        { success: !1, error: s.message }
      );
    }
  }
  async clearIndexedDB(t) {
    try {
      if (!('indexedDB' in window))
        return (
          this.logger.log('IndexedDB API not supported', r.WARN),
          { success: !0, deleted: 0, skipped: !0 }
        );
      let e = [];
      if (typeof indexedDB.databases == 'function')
        try {
          e =
            (await I.race(indexedDB.databases(), t, 'IndexedDB.databases()')) ||
            [];
        } catch {
          return (
            this.logger.log(
              'IndexedDB.databases() not available, skipping',
              r.WARN
            ),
            { success: !0, deleted: 0, skipped: !0 }
          );
        }
      else
        return (
          this.logger.log(
            'IndexedDB.databases() not supported in this browser',
            r.WARN
          ),
          { success: !0, deleted: 0, skipped: !0 }
        );
      const s = e.filter((u) => u.name && !this.shouldPreserve(u.name)),
        o = e.length - s.length,
        a = await Promise.allSettled(
          s.map(
            (u) =>
              new Promise((m, O) => {
                const v = indexedDB.deleteDatabase(u.name);
                ((v.onsuccess = () => m(u.name)),
                  (v.onerror = () =>
                    O(new Error(`Failed to delete ${u.name}`))),
                  (v.onblocked = () =>
                    this.logger.log(
                      `IndexedDB delete blocked: ${u.name}`,
                      r.WARN
                    )));
              })
          )
        ),
        i = a.filter((u) => u.status === 'fulfilled').length,
        g = a.filter((u) => u.status === 'rejected').length;
      return (
        this.logger.log(
          `IndexedDB: deleted ${i}, preserved ${o}, failed ${g}`,
          r.INFO
        ),
        { success: !0, deleted: i, preserved: o, failed: g }
      );
    } catch (e) {
      return (
        this.logger.log('IndexedDB cleanup failed', r.ERROR, {
          error: e.message,
        }),
        { success: !1, error: e.message }
      );
    }
  }
  async unregisterServiceWorkers(t, e) {
    try {
      if (!('serviceWorker' in navigator))
        return (
          this.logger.log('Service Workers not supported', r.WARN),
          { success: !0, unregistered: 0, skipped: !0 }
        );
      const s = await I.race(
          navigator.serviceWorker.getRegistrations(),
          e,
          'ServiceWorker.getRegistrations()'
        ),
        o = await Promise.allSettled(
          s.map((g) =>
            t.execute(
              () => I.race(g.unregister(), e, 'SW.unregister()'),
              'ServiceWorker.unregister()'
            )
          )
        ),
        a = o.filter((g) => g.status === 'fulfilled').length,
        i = o.filter((g) => g.status === 'rejected').length;
      return (
        this.logger.log(
          `Service Workers: unregistered ${a}, failed ${i}`,
          r.INFO
        ),
        { success: !0, unregistered: a, failed: i }
      );
    } catch (s) {
      return (
        this.logger.log('Service Worker cleanup failed', r.ERROR, {
          error: s.message,
        }),
        { success: !1, error: s.message }
      );
    }
  }
}
function te(S) {
  const t = p.useMemo(() => ({ ...Z, ...S }), [S]),
    {
      autoReload: e,
      silent: s,
      preserveKeys: o,
      runDelay: a,
      debug: i,
      manual: g,
      ttlHours: u,
      progressUI: m,
      statusIndicator: O,
      retries: v,
      retryDelayMS: j,
      taskTimeoutMS: C,
      enableHealthCheck: B,
      enableAnalytics: T,
      gracefulDegradation: P,
      onComplete: F,
      onError: U,
      onProgress: M,
    } = t,
    [x, N] = p.useState(h.IDLE),
    [G, J] = p.useState(0),
    [K, q] = p.useState(!0),
    [k, E] = p.useState(!1),
    [H, Y] = p.useState(null),
    _ = p.useRef(!1),
    $ = p.useRef(null),
    A = p.useRef(null),
    D = p.useRef(!1);
  $.current || ($.current = new X(s, i));
  const d = $.current,
    b = p.useCallback(
      (n) => {
        J((w) => {
          const l = Math.min(100, Math.max(0, w + n));
          return (M?.(l), l);
        });
      },
      [M]
    ),
    L = p.useCallback(() => {
      const n = {
        timestamp: new Date().toISOString(),
        browserAPIs: {
          localStorage: 'localStorage' in window,
          sessionStorage: 'sessionStorage' in window,
          indexedDB: 'indexedDB' in window,
          cacheStorage: 'caches' in window,
          serviceWorker: 'serviceWorker' in navigator,
          cookies: !!document.cookie,
        },
        lastCleanup: localStorage.getItem('__cleanup_last_run__'),
        status: 'healthy',
      };
      return (Y(n), d.log('Health check completed', r.INFO, n), n);
    }, [d]),
    W = p.useCallback(
      async (n = !1) => {
        if (_.current) {
          d.log('Cleanup already in progress', r.WARN);
          return;
        }
        if (!n) {
          const f = Number(localStorage.getItem('__cleanup_last_run__') || 0),
            y = (Date.now() - f) / (1e3 * 60 * 60);
          if (y < u) {
            d.log(`Cleanup not needed (${y.toFixed(1)}h < ${u}h)`, r.INFO);
            return;
          }
        }
        ((_.current = !0), (D.current = !1), N(h.INITIALIZING), b(5));
        const w = performance.now(),
          l = {
            startedAt: new Date().toISOString(),
            forced: n,
            config: {
              ttlHours: u,
              preserveKeys: o,
              retries: v,
              taskTimeoutMS: C,
            },
            results: {},
          };
        try {
          (d.log('Starting cleanup process', r.INFO), N(h.RUNNING), b(10));
          const f = new ee(d, o),
            y = new Q(v, j);
          if (D.current) throw new Error('Cleanup cancelled by user');
          const V = [
              f.clearCacheStorage(y, C),
              f.clearIndexedDB(C),
              f.unregisterServiceWorkers(y, C),
            ],
            R = await Promise.allSettled(V);
          if (
            ((l.results.cacheStorage = R[0].value || {
              error: R[0].reason?.message,
            }),
            (l.results.indexedDB = R[1].value || {
              error: R[1].reason?.message,
            }),
            (l.results.serviceWorkers = R[2].value || {
              error: R[2].reason?.message,
            }),
            b(50),
            D.current)
          )
            throw new Error('Cleanup cancelled by user');
          ((l.results.localStorage = f.clearWebStorage(
            localStorage,
            'LocalStorage'
          )),
            b(20),
            (l.results.sessionStorage = f.clearWebStorage(
              sessionStorage,
              'SessionStorage'
            )),
            b(15),
            (l.results.cookies = f.clearCookies()),
            b(5));
          const z = Math.round(performance.now() - w);
          ((l.completedAt = new Date().toISOString()),
            (l.durationMS = z),
            (l.status = 'success'),
            localStorage.setItem('__cleanup_last_run__', Date.now().toString()),
            localStorage.setItem('__cleanup_last_report__', JSON.stringify(l)),
            d.log(`Cleanup completed in ${z}ms`, r.INFO, l),
            N(h.SUCCESS),
            b(100),
            F?.(l),
            T &&
              window.dispatchEvent(
                new CustomEvent('cache-cleanup-complete', { detail: l })
              ),
            e &&
              (d.log('Auto-reload in 2 seconds', r.INFO),
              setTimeout(() => window.location.reload(), 2e3)),
            setTimeout(() => q(!1), 15e3));
        } catch (f) {
          const y = Math.round(performance.now() - w);
          if (
            ((l.completedAt = new Date().toISOString()),
            (l.durationMS = y),
            (l.status = 'error'),
            (l.error = f.message),
            d.log(`Cleanup failed: ${f.message}`, r.ERROR, l),
            N(h.ERROR),
            U?.(f, l),
            localStorage.setItem('__cleanup_last_error__', JSON.stringify(l)),
            !P)
          )
            throw f;
        } finally {
          _.current = !1;
        }
      },
      [d, u, o, v, j, C, b, e, T, P, F, U]
    );
  return (
    p.useEffect(() => {
      if (
        (d.log('CacheCleaner initialized', r.INFO, t),
        (window.cacheCleaner = {
          trigger: () => W(!0),
          cancel: () => {
            ((D.current = !0), d.log('Cleanup cancellation requested', r.WARN));
          },
          getHealth: L,
          getLogs: () => d.getLogs(),
          exportLogs: () => d.exportLogs(),
          getLastReport: () =>
            JSON.parse(
              localStorage.getItem('__cleanup_last_report__') || 'null'
            ),
        }),
        B && L(),
        !g)
      ) {
        const n = setTimeout(() => W(!1), a);
        return () => clearTimeout(n);
      }
    }, [t, W, d, g, a, L, B]),
    p.useEffect(() => {
      if (k) {
        const n = setTimeout(() => E(!1), 1e4),
          w = (l) => {
            A.current && !A.current.contains(l.target) && E(!1);
          };
        return (
          document.addEventListener('mousedown', w),
          () => {
            (clearTimeout(n), document.removeEventListener('mousedown', w));
          }
        );
      }
    }, [k]),
    p.useEffect(
      () => (
        (document.body.style.overflow = k ? 'hidden' : 'auto'),
        () => (document.body.style.overflow = 'auto')
      ),
      [k]
    ),
    !K || typeof window > 'u'
      ? null
      : c.jsxs(c.Fragment, {
          children: [
            O &&
              c.jsxs('button', {
                onClick: () => i && E((n) => !n),
                'aria-label': `Cache cleaner status: ${x}`,
                style: {
                  position: 'fixed',
                  bottom: 'clamp(10px, 2vw, 20px)',
                  left: 'clamp(10px, 2vw, 20px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'clamp(6px, 1.5vw, 10px)',
                  padding: 'clamp(6px, 1.5vw, 8px) clamp(10px, 3vw, 14px)',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: i ? 'pointer' : 'default',
                  zIndex: 48,
                  transition: 'all 0.3s ease',
                  userSelect: 'none',
                },
                onMouseEnter: (n) => {
                  i && (n.currentTarget.style.transform = 'translateY(-2px)');
                },
                onMouseLeave: (n) => {
                  n.currentTarget.style.transform = 'translateY(0)';
                },
                children: [
                  c.jsx('div', {
                    style: {
                      width: 'clamp(10px, 2vw, 12px)',
                      height: 'clamp(10px, 2vw, 12px)',
                      borderRadius: '50%',
                      backgroundColor:
                        x === h.RUNNING
                          ? '#3b82f6'
                          : x === h.SUCCESS
                            ? '#22c55e'
                            : x === h.ERROR
                              ? '#ef4444'
                              : '#6b7280',
                      boxShadow: `0 0 8px ${x === h.RUNNING ? '#3b82f6' : x === h.SUCCESS ? '#22c55e' : x === h.ERROR ? '#ef4444' : 'transparent'}`,
                      animation: x === h.RUNNING ? 'pulse 2s infinite' : 'none',
                    },
                  }),
                  c.jsx('span', {
                    style: {
                      color: '#fff',
                      fontSize: 'clamp(11px, 2vw, 13px)',
                      fontWeight: 600,
                      letterSpacing: '0.3px',
                    },
                    children:
                      x === h.RUNNING
                        ? `Cleaning ${G}%`
                        : x === h.SUCCESS
                          ? '✓ Clean'
                          : x === h.ERROR
                            ? '✗ Error'
                            : 'Ready',
                  }),
                ],
              }),
            i &&
              k &&
              c.jsxs('div', {
                ref: A,
                role: 'dialog',
                'aria-label': 'Debug logs',
                style: {
                  position: 'fixed',
                  bottom: 'clamp(60px, 10vh, 80px)',
                  left: 'clamp(10px, 2vw, 20px)',
                  width: 'clamp(260px, 80vw, 400px)',
                  maxHeight: 'min(70vh, 400px)',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                  zIndex: 49,
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'monospace',
                  overflow: 'hidden',
                  pointerEvents: 'auto',
                },
                children: [
                  c.jsxs('div', {
                    style: {
                      padding: '12px 16px',
                      borderBottom: '1px solid #333',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#0a0a0a',
                      flexShrink: 0,
                    },
                    children: [
                      c.jsx('span', {
                        style: {
                          color: '#fff',
                          fontSize: '14px',
                          fontWeight: 600,
                        },
                        children: 'Debug Logs',
                      }),
                      c.jsx('button', {
                        onClick: () => E(!1),
                        style: {
                          background: 'none',
                          border: 'none',
                          color: '#888',
                          cursor: 'pointer',
                          fontSize: '18px',
                        },
                        'aria-label': 'Close debug panel',
                        children: '×',
                      }),
                    ],
                  }),
                  c.jsxs('div', {
                    style: {
                      flex: 1,
                      overflowY: 'auto',
                      padding: '12px',
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      lineHeight: 1.6,
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#444 #1a1a1a',
                    },
                    children: [
                      H &&
                        c.jsxs('div', {
                          style: {
                            marginBottom: '16px',
                            paddingBottom: '16px',
                            borderBottom: '1px solid #444',
                          },
                          children: [
                            c.jsx('div', {
                              style: {
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 600,
                                marginBottom: '8px',
                              },
                              children: 'Health Status',
                            }),
                            c.jsx('pre', {
                              style: {
                                backgroundColor: '#2a2a2a',
                                padding: '10px',
                                borderRadius: '8px',
                                overflowX: 'auto',
                                color: '#eee',
                                fontSize: 'clamp(9px, 1.8vw, 11px)',
                                lineHeight: 1.4,
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                              },
                              children: JSON.stringify(H, null, 2),
                            }),
                          ],
                        }),
                      d.getLogs().length === 0
                        ? c.jsx('div', {
                            style: {
                              color: '#666',
                              textAlign: 'center',
                              padding: '20px',
                            },
                            children: 'No logs yet',
                          })
                        : d
                            .getLogs()
                            .map((n, w) =>
                              c.jsxs(
                                'div',
                                {
                                  style: {
                                    marginBottom: '8px',
                                    paddingBottom: '8px',
                                    borderBottom: '1px solid #222',
                                  },
                                  children: [
                                    c.jsx('div', {
                                      style: {
                                        color: '#666',
                                        fontSize: '10px',
                                      },
                                      children: new Date(
                                        n.timestamp
                                      ).toLocaleTimeString(),
                                    }),
                                    c.jsx('div', {
                                      style: {
                                        color:
                                          n.level === r.ERROR
                                            ? '#ef4444'
                                            : n.level === r.WARN
                                              ? '#f59e0b'
                                              : n.level === r.INFO
                                                ? '#3b82f6'
                                                : '#8b5cf6',
                                      },
                                      children: n.message,
                                    }),
                                  ],
                                },
                                w
                              )
                            ),
                    ],
                  }),
                ],
              }),
            c.jsx('style', {
              children: `
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      @media (max-width: 480px) {
        /* Status Indicator on very small screens */
        button[aria-label^="Cache cleaner status"] {
          bottom: 10px;
          left: 10px;
          padding: 8px; /* Make it a square button */
          min-width: 40px; /* Ensure it's clickable */
          justify-content: center;
        }
        button[aria-label^="Cache cleaner status"] span { /* Hide text */
          display: none;
        }
        button[aria-label^="Cache cleaner status"] div { /* Adjust dot size */
          width: 10px;
          height: 10px;
        }

        /* Debug Panel on very small screens */
        div[aria-label="Debug logs"] {
          bottom: 60px;
          left: 10px;
          right: 10px; /* Make it span almost full width */
          width: auto; /* Override clamp width */
          max-height: 60vh; /* Allow more vertical space */
        }
        div[aria-label="Debug logs"] .debug-panel-header span {
          font-size: 13px; /* Slightly smaller header font */
        }
      }
    `,
            }),
          ],
        })
  );
}
function ae() {
  return c.jsx('div', {
    children: c.jsx(te, {
      autoReload: !1,
      silent: !1,
      debug: !0,
      progressUI: !0,
      statusIndicator: !0,
      ttlHours: 12,
      manual: !1,
      preserveKeys: [
        'auth',
        'token',
        'user',
        'theme',
        'session',
        'visitor',
        'statsig',
        'logrocket',
        'sentry',
        'ga',
        'framer',
        'settings',
        'config',
        'state',
        'redux',
        'recoil',
      ],
      retries: 3,
      taskTimeoutMS: 2e4,
      enableHealthCheck: !0,
      enableAnalytics: !1,
      gracefulDegradation: !0,
      onComplete: (S) => {},
      onError: (S, t) => {
        console.error('❌ Cleanup failed:', S);
      },
      onProgress: (S) => {},
    }),
  });
}
export { ae as default };
