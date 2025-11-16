import { r as e, j as t } from './vendor-CLKqtzgM.js';
const r = 'idle',
  s = 'initializing',
  o = 'running',
  a = 'success',
  n = 'error',
  l = 'error',
  i = 'warn',
  c = 'info',
  d = 'debug',
  u = {
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
class Logger {
  constructor(e = !1, t = !1) {
    ((this.silent = e),
      (this.debug = t),
      (this.logs = []),
      (this.maxLogs = 1e3));
  }
  log(e, t = c, r = {}) {
    const s = {
      timestamp: new Date().toISOString(),
      level: t,
      message: e,
      meta: r,
    };
    if (
      (this.logs.push(s),
      this.logs.length > this.maxLogs && this.logs.shift(),
      this.silent && t !== l)
    )
      return;
    if (t === d && !this.debug) return;
  }
  getLogs() {
    return [...this.logs];
  }
  exportLogs() {
    return JSON.stringify(this.logs, null, 2);
  }
}
class RetryManager {
  constructor(e = 3, t = 500) {
    ((this.maxRetries = e), (this.baseDelay = t));
  }
  async execute(e, t = 'Task') {
    let r;
    for (let o = 0; o <= this.maxRetries; o++)
      try {
        return await e();
      } catch (s) {
        if (((r = s), o < this.maxRetries)) {
          const e = this.baseDelay * Math.pow(2, o);
          await this.sleep(e);
        }
      }
    throw new Error(
      `${t} failed after ${this.maxRetries + 1} attempts: ${r.message}`
    );
  }
  sleep(e) {
    return new Promise((t) => setTimeout(t, e));
  }
}
class TaskTimeout {
  static race(e, t, r = 'Task') {
    return Promise.race([
      e,
      new Promise((e, s) =>
        setTimeout(() => s(new Error(`${r} timeout after ${t}ms`)), t)
      ),
    ]);
  }
}
class StorageCleaner {
  constructor(e, t = []) {
    ((this.logger = e), (this.preserveKeys = t));
  }
  shouldPreserve(e) {
    return this.preserveKeys.some((t) =>
      e.toLowerCase().includes(t.toLowerCase())
    );
  }
  clearWebStorage(e, t) {
    try {
      const r = Object.keys(e),
        s = [],
        o = [];
      return (
        r.forEach((r) => {
          if (this.shouldPreserve(r)) s.push(r);
          else
            try {
              (e.removeItem(r), o.push(r));
            } catch (a) {
              this.logger.log(`Failed to remove ${t} key: ${r}`, i, {
                error: a.message,
              });
            }
        }),
        this.logger.log(`${t}: removed ${o.length}, preserved ${s.length}`, c),
        {
          success: !0,
          removed: o.length,
          preserved: s.length,
          keys: { removed: o, preserved: s },
        }
      );
    } catch (r) {
      return (
        this.logger.log(`${t} cleanup failed`, l, { error: r.message }),
        { success: !1, error: r.message }
      );
    }
  }
  clearCookies() {
    try {
      const e = document.cookie.split(';').filter(Boolean);
      let t = 0,
        r = 0;
      return (
        e.forEach((e) => {
          const s = e.split('=')[0].trim();
          if (this.shouldPreserve(s)) r++;
          else
            try {
              ((document.cookie = `${s}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`),
                (document.cookie = `${s}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${window.location.hostname}`),
                t++);
            } catch {
              this.logger.log(`Failed to delete cookie: ${s}`, i);
            }
        }),
        this.logger.log(`Cookies: deleted ${t}, preserved ${r}`, c),
        { success: !0, deleted: t, preserved: r }
      );
    } catch (e) {
      return (
        this.logger.log('Cookie cleanup failed', l, { error: e.message }),
        { success: !1, error: e.message }
      );
    }
  }
  async clearCacheStorage(e, t) {
    try {
      if (!('caches' in window))
        return (
          this.logger.log('CacheStorage API not supported', i),
          { success: !0, deleted: 0, skipped: !0 }
        );
      const r = await TaskTimeout.race(caches.keys(), t, 'CacheStorage.keys()'),
        s = r.filter((e) => !this.shouldPreserve(e)),
        o = r.length - s.length,
        a = await Promise.allSettled(
          s.map((r) =>
            e.execute(
              () => TaskTimeout.race(caches.delete(r), t, `Delete cache: ${r}`),
              `CacheStorage.delete(${r})`
            )
          )
        ),
        n = a.filter((e) => 'fulfilled' === e.status).length,
        l = a.filter((e) => 'rejected' === e.status).length;
      return (
        this.logger.log(
          `CacheStorage: deleted ${n}, preserved ${o}, failed ${l}`,
          c
        ),
        { success: !0, deleted: n, preserved: o, failed: l }
      );
    } catch (r) {
      return (
        this.logger.log('CacheStorage cleanup failed', l, { error: r.message }),
        { success: !1, error: r.message }
      );
    }
  }
  async clearIndexedDB(e) {
    try {
      if (!('indexedDB' in window))
        return (
          this.logger.log('IndexedDB API not supported', i),
          { success: !0, deleted: 0, skipped: !0 }
        );
      let t = [];
      if ('function' != typeof indexedDB.databases)
        return (
          this.logger.log(
            'IndexedDB.databases() not supported in this browser',
            i
          ),
          { success: !0, deleted: 0, skipped: !0 }
        );
      try {
        t =
          (await TaskTimeout.race(
            indexedDB.databases(),
            e,
            'IndexedDB.databases()'
          )) || [];
      } catch {
        return (
          this.logger.log('IndexedDB.databases() not available, skipping', i),
          { success: !0, deleted: 0, skipped: !0 }
        );
      }
      const r = t.filter((e) => e.name && !this.shouldPreserve(e.name)),
        s = t.length - r.length,
        o = await Promise.allSettled(
          r.map(
            (e) =>
              new Promise((t, r) => {
                const s = indexedDB.deleteDatabase(e.name);
                ((s.onsuccess = () => t(e.name)),
                  (s.onerror = () =>
                    r(new Error(`Failed to delete ${e.name}`))),
                  (s.onblocked = () =>
                    this.logger.log(`IndexedDB delete blocked: ${e.name}`, i)));
              })
          )
        ),
        a = o.filter((e) => 'fulfilled' === e.status).length,
        n = o.filter((e) => 'rejected' === e.status).length;
      return (
        this.logger.log(
          `IndexedDB: deleted ${a}, preserved ${s}, failed ${n}`,
          c
        ),
        { success: !0, deleted: a, preserved: s, failed: n }
      );
    } catch (t) {
      return (
        this.logger.log('IndexedDB cleanup failed', l, { error: t.message }),
        { success: !1, error: t.message }
      );
    }
  }
  async unregisterServiceWorkers(e, t) {
    try {
      if (!('serviceWorker' in navigator))
        return (
          this.logger.log('Service Workers not supported', i),
          { success: !0, unregistered: 0, skipped: !0 }
        );
      const r = await TaskTimeout.race(
          navigator.serviceWorker.getRegistrations(),
          t,
          'ServiceWorker.getRegistrations()'
        ),
        s = await Promise.allSettled(
          r.map((r) =>
            e.execute(
              () => TaskTimeout.race(r.unregister(), t, 'SW.unregister()'),
              'ServiceWorker.unregister()'
            )
          )
        ),
        o = s.filter((e) => 'fulfilled' === e.status).length,
        a = s.filter((e) => 'rejected' === e.status).length;
      return (
        this.logger.log(`Service Workers: unregistered ${o}, failed ${a}`, c),
        { success: !0, unregistered: o, failed: a }
      );
    } catch (r) {
      return (
        this.logger.log('Service Worker cleanup failed', l, {
          error: r.message,
        }),
        { success: !1, error: r.message }
      );
    }
  }
}
function EnhancedCacheCleaner(d) {
  const g = e.useMemo(() => ({ ...u, ...d }), [d]),
    {
      autoReload: p,
      silent: h,
      preserveKeys: m,
      runDelay: f,
      debug: x,
      manual: w,
      ttlHours: v,
      progressUI: b,
      statusIndicator: S,
      retries: y,
      retryDelayMS: k,
      taskTimeoutMS: C,
      enableHealthCheck: D,
      enableAnalytics: _,
      gracefulDegradation: I,
      onComplete: $,
      onError: T,
      onProgress: j,
    } = g,
    [B, E] = e.useState(r),
    [L, R] = e.useState(0),
    [M, W] = e.useState(!0),
    [P, H] = e.useState(!1),
    [z, A] = e.useState(null),
    O = e.useRef(!1),
    F = e.useRef(null),
    J = e.useRef(null),
    N = e.useRef(!1);
  F.current || (F.current = new Logger(h, x));
  const K = F.current,
    U = e.useCallback(
      (e) => {
        R((t) => {
          const r = Math.min(100, Math.max(0, t + e));
          return (j?.(r), r);
        });
      },
      [j]
    ),
    Y = e.useCallback(() => {
      const e = {
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
      return (A(e), K.log('Health check completed', c, e), e);
    }, [K]),
    q = e.useCallback(
      async (e = !1) => {
        if (O.current) return void K.log('Cleanup already in progress', i);
        if (!e) {
          const e = Number(localStorage.getItem('__cleanup_last_run__') || 0),
            t = (Date.now() - e) / 36e5;
          if (t < v)
            return void K.log(
              `Cleanup not needed (${t.toFixed(1)}h < ${v}h)`,
              c
            );
        }
        ((O.current = !0), (N.current = !1), E(s), U(5));
        const t = performance.now(),
          r = {
            startedAt: new Date().toISOString(),
            forced: e,
            config: {
              ttlHours: v,
              preserveKeys: m,
              retries: y,
              taskTimeoutMS: C,
            },
            results: {},
          };
        try {
          (K.log('Starting cleanup process', c), E(o), U(10));
          const e = new StorageCleaner(K, m),
            s = new RetryManager(y, k);
          if (N.current) throw new Error('Cleanup cancelled by user');
          const n = [
              e.clearCacheStorage(s, C),
              e.clearIndexedDB(C),
              e.unregisterServiceWorkers(s, C),
            ],
            l = await Promise.allSettled(n);
          if (
            ((r.results.cacheStorage = l[0].value || {
              error: l[0].reason?.message,
            }),
            (r.results.indexedDB = l[1].value || {
              error: l[1].reason?.message,
            }),
            (r.results.serviceWorkers = l[2].value || {
              error: l[2].reason?.message,
            }),
            U(50),
            N.current)
          )
            throw new Error('Cleanup cancelled by user');
          ((r.results.localStorage = e.clearWebStorage(
            localStorage,
            'LocalStorage'
          )),
            U(20),
            (r.results.sessionStorage = e.clearWebStorage(
              sessionStorage,
              'SessionStorage'
            )),
            U(15),
            (r.results.cookies = e.clearCookies()),
            U(5));
          const i = Math.round(performance.now() - t);
          ((r.completedAt = new Date().toISOString()),
            (r.durationMS = i),
            (r.status = 'success'),
            localStorage.setItem('__cleanup_last_run__', Date.now().toString()),
            localStorage.setItem('__cleanup_last_report__', JSON.stringify(r)),
            K.log(`Cleanup completed in ${i}ms`, c, r),
            E(a),
            U(100),
            $?.(r),
            _ &&
              window.dispatchEvent(
                new CustomEvent('cache-cleanup-complete', { detail: r })
              ),
            p &&
              (K.log('Auto-reload in 2 seconds', c),
              setTimeout(() => window.location.reload(), 2e3)),
            setTimeout(() => W(!1), 15e3));
        } catch (d) {
          const e = Math.round(performance.now() - t);
          if (
            ((r.completedAt = new Date().toISOString()),
            (r.durationMS = e),
            (r.status = 'error'),
            (r.error = d.message),
            K.log(`Cleanup failed: ${d.message}`, l, r),
            E(n),
            T?.(d, r),
            localStorage.setItem('__cleanup_last_error__', JSON.stringify(r)),
            !I)
          )
            throw d;
        } finally {
          O.current = !1;
        }
      },
      [K, v, m, y, k, C, U, p, _, I, $, T]
    );
  return (
    e.useEffect(() => {
      if (
        (K.log('CacheCleaner initialized', c, g),
        (window.cacheCleaner = {
          trigger: () => q(!0),
          cancel: () => {
            ((N.current = !0), K.log('Cleanup cancellation requested', i));
          },
          getHealth: Y,
          getLogs: () => K.getLogs(),
          exportLogs: () => K.exportLogs(),
          getLastReport: () =>
            JSON.parse(
              localStorage.getItem('__cleanup_last_report__') || 'null'
            ),
        }),
        D && Y(),
        !w)
      ) {
        const e = setTimeout(() => q(!1), f);
        return () => clearTimeout(e);
      }
    }, [g, q, K, w, f, Y, D]),
    e.useEffect(() => {
      if (P) {
        const e = setTimeout(() => H(!1), 1e4),
          handleClickOutside = (e) => {
            J.current && !J.current.contains(e.target) && H(!1);
          };
        return (
          document.addEventListener('mousedown', handleClickOutside),
          () => {
            (clearTimeout(e),
              document.removeEventListener('mousedown', handleClickOutside));
          }
        );
      }
    }, [P]),
    e.useEffect(
      () => (
        (document.body.style.overflow = P ? 'hidden' : 'auto'),
        () => (document.body.style.overflow = 'auto')
      ),
      [P]
    ),
    M && 'undefined' != typeof window
      ? t.jsxs(t.Fragment, {
          children: [
            S &&
              t.jsxs('button', {
                onClick: () => x && H((e) => !e),
                'aria-label': `Cache cleaner status: ${B}`,
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
                  cursor: x ? 'pointer' : 'default',
                  zIndex: 48,
                  transition: 'all 0.3s ease',
                  userSelect: 'none',
                },
                onMouseEnter: (e) => {
                  x && (e.currentTarget.style.transform = 'translateY(-2px)');
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                },
                children: [
                  t.jsx('div', {
                    style: {
                      width: 'clamp(10px, 2vw, 12px)',
                      height: 'clamp(10px, 2vw, 12px)',
                      borderRadius: '50%',
                      backgroundColor:
                        B === o
                          ? '#3b82f6'
                          : B === a
                            ? '#22c55e'
                            : B === n
                              ? '#ef4444'
                              : '#6b7280',
                      boxShadow:
                        '0 0 8px ' +
                        (B === o
                          ? '#3b82f6'
                          : B === a
                            ? '#22c55e'
                            : B === n
                              ? '#ef4444'
                              : 'transparent'),
                      animation: B === o ? 'pulse 2s infinite' : 'none',
                    },
                  }),
                  t.jsx('span', {
                    style: {
                      color: '#fff',
                      fontSize: 'clamp(11px, 2vw, 13px)',
                      fontWeight: 600,
                      letterSpacing: '0.3px',
                    },
                    children:
                      B === o
                        ? `Cleaning ${L}%`
                        : B === a
                          ? '✓ Clean'
                          : B === n
                            ? '✗ Error'
                            : 'Ready',
                  }),
                ],
              }),
            x &&
              P &&
              t.jsxs('div', {
                ref: J,
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
                  t.jsxs('div', {
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
                      t.jsx('span', {
                        style: {
                          color: '#fff',
                          fontSize: '14px',
                          fontWeight: 600,
                        },
                        children: 'Debug Logs',
                      }),
                      t.jsx('button', {
                        onClick: () => H(!1),
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
                  t.jsxs('div', {
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
                      z &&
                        t.jsxs('div', {
                          style: {
                            marginBottom: '16px',
                            paddingBottom: '16px',
                            borderBottom: '1px solid #444',
                          },
                          children: [
                            t.jsx('div', {
                              style: {
                                color: '#fff',
                                fontSize: '13px',
                                fontWeight: 600,
                                marginBottom: '8px',
                              },
                              children: 'Health Status',
                            }),
                            t.jsx('pre', {
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
                              children: JSON.stringify(z, null, 2),
                            }),
                          ],
                        }),
                      0 === K.getLogs().length
                        ? t.jsx('div', {
                            style: {
                              color: '#666',
                              textAlign: 'center',
                              padding: '20px',
                            },
                            children: 'No logs yet',
                          })
                        : K.getLogs().map((e, r) =>
                            t.jsxs(
                              'div',
                              {
                                style: {
                                  marginBottom: '8px',
                                  paddingBottom: '8px',
                                  borderBottom: '1px solid #222',
                                },
                                children: [
                                  t.jsx('div', {
                                    style: { color: '#666', fontSize: '10px' },
                                    children: new Date(
                                      e.timestamp
                                    ).toLocaleTimeString(),
                                  }),
                                  t.jsx('div', {
                                    style: {
                                      color:
                                        e.level === l
                                          ? '#ef4444'
                                          : e.level === i
                                            ? '#f59e0b'
                                            : e.level === c
                                              ? '#3b82f6'
                                              : '#8b5cf6',
                                    },
                                    children: e.message,
                                  }),
                                ],
                              },
                              r
                            )
                          ),
                    ],
                  }),
                ],
              }),
            t.jsx('style', {
              children:
                '\n      @keyframes pulse {\n        0%, 100% { opacity: 1; }\n        50% { opacity: 0.5; }\n      }\n\n      @media (max-width: 480px) {\n        /* Status Indicator on very small screens */\n        button[aria-label^="Cache cleaner status"] {\n          bottom: 10px;\n          left: 10px;\n          padding: 8px; /* Make it a square button */\n          min-width: 40px; /* Ensure it\'s clickable */\n          justify-content: center;\n        }\n        button[aria-label^="Cache cleaner status"] span { /* Hide text */\n          display: none;\n        }\n        button[aria-label^="Cache cleaner status"] div { /* Adjust dot size */\n          width: 10px;\n          height: 10px;\n        }\n\n        /* Debug Panel on very small screens */\n        div[aria-label="Debug logs"] {\n          bottom: 60px;\n          left: 10px;\n          right: 10px; /* Make it span almost full width */\n          width: auto; /* Override clamp width */\n          max-height: 60vh; /* Allow more vertical space */\n        }\n        div[aria-label="Debug logs"] .debug-panel-header span {\n          font-size: 13px; /* Slightly smaller header font */\n        }\n      }\n    ',
            }),
          ],
        })
      : null
  );
}
function CacheClean() {
  return t.jsx('div', {
    children: t.jsx(EnhancedCacheCleaner, {
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
        'settings',
      ],
      retries: 3,
      taskTimeoutMS: 2e4,
      enableHealthCheck: !0,
      enableAnalytics: !1,
      gracefulDegradation: !0,
      onComplete: (e) => {},
      onError: (e, t) => {},
      onProgress: (e) => {},
    }),
  });
}
export { CacheClean as default };
