import { useEffect, useRef, useState, useCallback, useMemo } from "react";

/**
 * EnhancedCacheCleaner v4.0
 * Enterprise-grade browser storage management system
 * 
 * @features
 * - Selective storage cleaning with intelligent preservation
 * - Configurable retry logic with exponential backoff
 * - Comprehensive error tracking and recovery
 * - Real-time progress monitoring
 * - TypeScript-ready prop validation
 * - Performance optimization with memoization
 * - Accessibility-compliant UI components
 * - Production logging with severity levels
 * - Health check endpoint
 * - Graceful degradation for unsupported APIs
 */

// ============================================================================
// CONSTANTS & CONFIGURATION
// ============================================================================

const CLEANUP_PHASES = {
  IDLE: "idle",
  INITIALIZING: "initializing",
  RUNNING: "running",
  SUCCESS: "success",
  ERROR: "error",
  CANCELLED: "cancelled",
};

const LOG_LEVELS = {
  ERROR: "error",
  WARN: "warn",
  INFO: "info",
  DEBUG: "debug",
};

const DEFAULT_CONFIG = {
  autoReload: false,
  silent: true,
  preserveKeys: ["auth", "token", "user", "theme", "session"],
  runDelay: 1000,
  debug: false,
  manual: false,
  ttlHours: 24,
  progressUI: false,
  statusIndicator: true,
  retries: 3,
  retryDelayMS: 500,
  taskTimeoutMS: 20000,
  enableHealthCheck: true,
  enableAnalytics: false,
  gracefulDegradation: true,
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

class Logger {
  constructor(silent = false, debug = false) {
    this.silent = silent;
    this.debug = debug;
    this.logs = [];
    this.maxLogs = 1000;
  }

  log(message, level = LOG_LEVELS.INFO, meta = {}) {
    const entry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      meta,
    };

    this.logs.push(entry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    if (this.silent && level !== LOG_LEVELS.ERROR) return;
    if (level === LOG_LEVELS.DEBUG && !this.debug) return;

    const colors = {
      [LOG_LEVELS.ERROR]: "#ef4444",
      [LOG_LEVELS.WARN]: "#f59e0b",
      [LOG_LEVELS.INFO]: "#3b82f6",
      [LOG_LEVELS.DEBUG]: "#8b5cf6",
    };

    console.log(
      `%c[CacheCleaner:${level.toUpperCase()}] ${message}`,
      `color:${colors[level]};font-weight:500`
    );
  }

  getLogs() {
    return [...this.logs];
  }

  exportLogs() {
    return JSON.stringify(this.logs, null, 2);
  }
}

class RetryManager {
  constructor(maxRetries = 3, baseDelay = 500) {
    this.maxRetries = maxRetries;
    this.baseDelay = baseDelay;
  }

  async execute(fn, taskName = "Task") {
    let lastError;
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;
        if (attempt < this.maxRetries) {
          const delay = this.baseDelay * Math.pow(2, attempt);
          await this.sleep(delay);
        }
      }
    }
    throw new Error(
      `${taskName} failed after ${this.maxRetries + 1} attempts: ${lastError.message}`
    );
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

class TaskTimeout {
  static race(promise, timeoutMs, taskName = "Task") {
    return Promise.race([
      promise,
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error(`${taskName} timeout after ${timeoutMs}ms`)),
          timeoutMs
        )
      ),
    ]);
  }
}

// ============================================================================
// STORAGE CLEANERS
// ============================================================================

class StorageCleaner {
  constructor(logger, preserveKeys = []) {
    this.logger = logger;
    this.preserveKeys = preserveKeys;
  }

  shouldPreserve(key) {
    return this.preserveKeys.some((preserved) =>
      key.toLowerCase().includes(preserved.toLowerCase())
    );
  }

  clearWebStorage(storage, label) {
    try {
      const keys = Object.keys(storage);
      const preserved = [];
      const removed = [];

      keys.forEach((key) => {
        if (this.shouldPreserve(key)) {
          preserved.push(key);
        } else {
          try {
            storage.removeItem(key);
            removed.push(key);
          } catch (err) {
            this.logger.log(
              `Failed to remove ${label} key: ${key}`,
              LOG_LEVELS.WARN,
              { error: err.message }
            );
          }
        }
      });

      this.logger.log(
        `${label}: removed ${removed.length}, preserved ${preserved.length}`,
        LOG_LEVELS.INFO
      );

      return {
        success: true,
        removed: removed.length,
        preserved: preserved.length,
        keys: { removed, preserved },
      };
    } catch (error) {
      this.logger.log(`${label} cleanup failed`, LOG_LEVELS.ERROR, {
        error: error.message,
      });
      return { success: false, error: error.message };
    }
  }

  clearCookies() {
    try {
      const cookies = document.cookie.split(";").filter(Boolean);
      let deleted = 0;
      let preserved = 0;

      cookies.forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        if (this.shouldPreserve(name)) {
          preserved++;
        } else {
          try {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${window.location.hostname}`;
            deleted++;
          } catch {
            this.logger.log(`Failed to delete cookie: ${name}`, LOG_LEVELS.WARN);
          }
        }
      });

      this.logger.log(
        `Cookies: deleted ${deleted}, preserved ${preserved}`,
        LOG_LEVELS.INFO
      );

      return { success: true, deleted, preserved };
    } catch (error) {
      this.logger.log("Cookie cleanup failed", LOG_LEVELS.ERROR, {
        error: error.message,
      });
      return { success: false, error: error.message };
    }
  }

  async clearCacheStorage(retryManager, timeout) {
    try {
      if (!("caches" in window)) {
        this.logger.log("CacheStorage API not supported", LOG_LEVELS.WARN);
        return { success: true, deleted: 0, skipped: true };
      }

      const names = await TaskTimeout.race(
        caches.keys(),
        timeout,
        "CacheStorage.keys()"
      );

      const toDelete = names.filter((name) => !this.shouldPreserve(name));
      const preserved = names.length - toDelete.length;

      const results = await Promise.allSettled(
        toDelete.map((name) =>
          retryManager.execute(
            () => TaskTimeout.race(caches.delete(name), timeout, `Delete cache: ${name}`),
            `CacheStorage.delete(${name})`
          )
        )
      );

      const deleted = results.filter((r) => r.status === "fulfilled").length;
      const failed = results.filter((r) => r.status === "rejected").length;

      this.logger.log(
        `CacheStorage: deleted ${deleted}, preserved ${preserved}, failed ${failed}`,
        LOG_LEVELS.INFO
      );

      return { success: true, deleted, preserved, failed };
    } catch (error) {
      this.logger.log("CacheStorage cleanup failed", LOG_LEVELS.ERROR, {
        error: error.message,
      });
      return { success: false, error: error.message };
    }
  }

  async clearIndexedDB(timeout) {
    try {
      if (!("indexedDB" in window)) {
        this.logger.log("IndexedDB API not supported", LOG_LEVELS.WARN);
        return { success: true, deleted: 0, skipped: true };
      }

      let databases = [];
      if (typeof indexedDB.databases === "function") {
        try {
          databases = (await TaskTimeout.race(
            indexedDB.databases(),
            timeout,
            "IndexedDB.databases()"
          )) || [];
        } catch {
          this.logger.log(
            "IndexedDB.databases() not available, skipping",
            LOG_LEVELS.WARN
          );
          return { success: true, deleted: 0, skipped: true };
        }
      } else {
        this.logger.log(
          "IndexedDB.databases() not supported in this browser",
          LOG_LEVELS.WARN
        );
        return { success: true, deleted: 0, skipped: true };
      }

      const toDelete = databases.filter(
        (db) => db.name && !this.shouldPreserve(db.name)
      );
      const preserved = databases.length - toDelete.length;

      const results = await Promise.allSettled(
        toDelete.map(
          (db) =>
            new Promise((resolve, reject) => {
              const request = indexedDB.deleteDatabase(db.name);
              request.onsuccess = () => resolve(db.name);
              request.onerror = () => reject(new Error(`Failed to delete ${db.name}`));
              request.onblocked = () =>
                this.logger.log(
                  `IndexedDB delete blocked: ${db.name}`,
                  LOG_LEVELS.WARN
                );
            })
        )
      );

      const deleted = results.filter((r) => r.status === "fulfilled").length;
      const failed = results.filter((r) => r.status === "rejected").length;

      this.logger.log(
        `IndexedDB: deleted ${deleted}, preserved ${preserved}, failed ${failed}`,
        LOG_LEVELS.INFO
      );

      return { success: true, deleted, preserved, failed };
    } catch (error) {
      this.logger.log("IndexedDB cleanup failed", LOG_LEVELS.ERROR, {
        error: error.message,
      });
      return { success: false, error: error.message };
    }
  }

  async unregisterServiceWorkers(retryManager, timeout) {
    try {
      if (!("serviceWorker" in navigator)) {
        this.logger.log("Service Workers not supported", LOG_LEVELS.WARN);
        return { success: true, unregistered: 0, skipped: true };
      }

      const registrations = await TaskTimeout.race(
        navigator.serviceWorker.getRegistrations(),
        timeout,
        "ServiceWorker.getRegistrations()"
      );

      const results = await Promise.allSettled(
        registrations.map((reg) =>
          retryManager.execute(
            () => TaskTimeout.race(reg.unregister(), timeout, "SW.unregister()"),
            "ServiceWorker.unregister()"
          )
        )
      );

      const unregistered = results.filter((r) => r.status === "fulfilled").length;
      const failed = results.filter((r) => r.status === "rejected").length;

      this.logger.log(
        `Service Workers: unregistered ${unregistered}, failed ${failed}`,
        LOG_LEVELS.INFO
      );

      return { success: true, unregistered, failed };
    } catch (error) {
      this.logger.log("Service Worker cleanup failed", LOG_LEVELS.ERROR, {
        error: error.message,
      });
      return { success: false, error: error.message };
    }
  }
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function EnhancedCacheCleaner(props) {
  const config = useMemo(() => ({ ...DEFAULT_CONFIG, ...props }), [props]);
  const {
    autoReload,
    silent,
    preserveKeys,
    runDelay,
    debug,
    manual,
    ttlHours,
    progressUI,
    statusIndicator,
    retries,
    retryDelayMS,
    taskTimeoutMS,
    enableHealthCheck,
    enableAnalytics,
    gracefulDegradation,
    onComplete,
    onError,
    onProgress,
  } = config;

  // State
  const [phase, setPhase] = useState(CLEANUP_PHASES.IDLE);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [showDebug, setShowDebug] = useState(false);
  const [healthStatus, setHealthStatus] = useState(null);

  // Refs
  const runningRef = useRef(false);
  const loggerRef = useRef(null);
  const debugPanelRef = useRef(null);
  const cleanupAbortRef = useRef(false);

  // Initialize logger
  if (!loggerRef.current) {
    loggerRef.current = new Logger(silent, debug);
  }
  const logger = loggerRef.current;

  // Progress updater
  const updateProgress = useCallback(
    (delta) => {
      setProgress((prev) => {
        const newProgress = Math.min(100, Math.max(0, prev + delta));
        onProgress?.(newProgress);
        return newProgress;
      });
    },
    [onProgress]
  );

  // Health check
  const performHealthCheck = useCallback(() => {
    const health = {
      timestamp: new Date().toISOString(),
      browserAPIs: {
        localStorage: "localStorage" in window,
        sessionStorage: "sessionStorage" in window,
        indexedDB: "indexedDB" in window,
        cacheStorage: "caches" in window,
        serviceWorker: "serviceWorker" in navigator,
        cookies: !!document.cookie,
      },
      lastCleanup: localStorage.getItem("__cleanup_last_run__"),
      status: "healthy",
    };

    setHealthStatus(health);
    logger.log("Health check completed", LOG_LEVELS.INFO, health);
    return health;
  }, [logger]);

  // Main cleanup orchestrator
  const executeCleanup = useCallback(
    async (forced = false) => {
      if (runningRef.current) {
        logger.log("Cleanup already in progress", LOG_LEVELS.WARN);
        return;
      }

      // Check if cleanup is needed
      if (!forced) {
        const lastRun = Number(localStorage.getItem("__cleanup_last_run__") || 0);
        const hoursSinceLastRun = (Date.now() - lastRun) / (1000 * 60 * 60);

        if (hoursSinceLastRun < ttlHours) {
          logger.log(
            `Cleanup not needed (${hoursSinceLastRun.toFixed(1)}h < ${ttlHours}h)`,
            LOG_LEVELS.INFO
          );
          return;
        }
      }

      runningRef.current = true;
      cleanupAbortRef.current = false;
      setPhase(CLEANUP_PHASES.INITIALIZING);
      updateProgress(5);

      const startTime = performance.now();
      const report = {
        startedAt: new Date().toISOString(),
        forced,
        config: {
          ttlHours,
          preserveKeys,
          retries,
          taskTimeoutMS,
        },
        results: {},
      };

      try {
        logger.log("Starting cleanup process", LOG_LEVELS.INFO);
        setPhase(CLEANUP_PHASES.RUNNING);
        updateProgress(10);

        const cleaner = new StorageCleaner(logger, preserveKeys);
        const retryManager = new RetryManager(retries, retryDelayMS);

        // Check for abort
        if (cleanupAbortRef.current) {
          throw new Error("Cleanup cancelled by user");
        }

        // Parallel async operations
        const asyncTasks = [
          cleaner.clearCacheStorage(retryManager, taskTimeoutMS),
          cleaner.clearIndexedDB(taskTimeoutMS),
          cleaner.unregisterServiceWorkers(retryManager, taskTimeoutMS),
        ];

        const asyncResults = await Promise.allSettled(asyncTasks);
        report.results.cacheStorage = asyncResults[0].value || { error: asyncResults[0].reason?.message };
        report.results.indexedDB = asyncResults[1].value || { error: asyncResults[1].reason?.message };
        report.results.serviceWorkers = asyncResults[2].value || { error: asyncResults[2].reason?.message };
        updateProgress(50);

        // Check for abort
        if (cleanupAbortRef.current) {
          throw new Error("Cleanup cancelled by user");
        }

        // Synchronous operations
        report.results.localStorage = cleaner.clearWebStorage(
          localStorage,
          "LocalStorage"
        );
        updateProgress(20);

        report.results.sessionStorage = cleaner.clearWebStorage(
          sessionStorage,
          "SessionStorage"
        );
        updateProgress(15);

        report.results.cookies = cleaner.clearCookies();
        updateProgress(5);

        // Finalize
        const duration = Math.round(performance.now() - startTime);
        report.completedAt = new Date().toISOString();
        report.durationMS = duration;
        report.status = "success";

        localStorage.setItem("__cleanup_last_run__", Date.now().toString());
        localStorage.setItem("__cleanup_last_report__", JSON.stringify(report));

        logger.log(`Cleanup completed in ${duration}ms`, LOG_LEVELS.INFO, report);
        setPhase(CLEANUP_PHASES.SUCCESS);
        updateProgress(100);

        onComplete?.(report);

        if (enableAnalytics) {
          // Hook for analytics tracking
          window.dispatchEvent(
            new CustomEvent("cache-cleanup-complete", { detail: report })
          );
        }

        if (autoReload) {
          logger.log("Auto-reload in 2 seconds", LOG_LEVELS.INFO);
          setTimeout(() => window.location.reload(), 2000);
        }

        // Auto-hide UI after 15 seconds
        setTimeout(() => setVisible(false), 15000);
      } catch (error) {
        const duration = Math.round(performance.now() - startTime);
        report.completedAt = new Date().toISOString();
        report.durationMS = duration;
        report.status = "error";
        report.error = error.message;

        logger.log(`Cleanup failed: ${error.message}`, LOG_LEVELS.ERROR, report);
        setPhase(CLEANUP_PHASES.ERROR);
        onError?.(error, report);

        localStorage.setItem("__cleanup_last_error__", JSON.stringify(report));

        if (!gracefulDegradation) {
          throw error;
        }
      } finally {
        runningRef.current = false;
      }
    },
    [
      logger,
      ttlHours,
      preserveKeys,
      retries,
      retryDelayMS,
      taskTimeoutMS,
      updateProgress,
      autoReload,
      enableAnalytics,
      gracefulDegradation,
      onComplete,
      onError,
    ]
  );

  // Mount effect
  useEffect(() => {
    if (typeof window === "undefined") return;

    logger.log("CacheCleaner initialized", LOG_LEVELS.INFO, config);

    // Expose API
    window.cacheCleaner = {
      trigger: () => executeCleanup(true),
      cancel: () => {
        cleanupAbortRef.current = true;
        logger.log("Cleanup cancellation requested", LOG_LEVELS.WARN);
      },
      getHealth: performHealthCheck,
      getLogs: () => logger.getLogs(),
      exportLogs: () => logger.exportLogs(),
      getLastReport: () =>
        JSON.parse(localStorage.getItem("__cleanup_last_report__") || "null"),
    };

    if (enableHealthCheck) {
      performHealthCheck();
    }

    if (!manual) {
      const timer = setTimeout(() => executeCleanup(false), runDelay);
      return () => clearTimeout(timer);
    }
  }, [config, executeCleanup, logger, manual, runDelay, performHealthCheck, enableHealthCheck]);

  // Debug panel auto-hide
  useEffect(() => {
    if (!showDebug) return;

    const timer = setTimeout(() => setShowDebug(false), 10000);
    const handleClickOutside = (e) => {
      if (debugPanelRef.current && !debugPanelRef.current.contains(e.target)) {
        setShowDebug(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDebug]);

  // Render nothing if invisible
  if (!visible) return null;

  // ============================================================================
  // UI RENDERING
  // ============================================================================
  useEffect(() => {
    document.body.style.overflow = showDebug ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showDebug]);


  return (
    <>
      {/* Progress Bar */}
      {/* {progressUI && phase === CLEANUP_PHASES.RUNNING && (
        <div
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Cache cleanup progress"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            zIndex: 10001,
            backgroundColor: "rgba(59, 130, 246, 0.15)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #3b82f6, #2563eb)",
              transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              borderRadius: "0 4px 4px 0",
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
            }}
          />
        </div>
      )} */}

      {/* Status Indicator */}
      {statusIndicator && (
        <button
          onClick={() => debug && setShowDebug((s) => !s)}
          aria-label={`Cache cleaner status: ${phase}`}
          style={{
            position: "fixed", // Keep fixed position
            bottom: "clamp(10px, 2vw, 20px)",
            left: "clamp(10px, 2vw, 20px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(6px, 1.5vw, 10px)",
            padding: "clamp(6px, 1.5vw, 8px) clamp(10px, 3vw, 14px)",
            borderRadius: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            cursor: debug ? "pointer" : "default",
            zIndex: 9999,
            transition: "all 0.3s ease",
            userSelect: "none",
          }}
          onMouseEnter={(e) => {
            if (debug) e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div
            style={{
              width: "clamp(10px, 2vw, 12px)",
              height: "clamp(10px, 2vw, 12px)",
              borderRadius: "50%",
              backgroundColor:
                phase === CLEANUP_PHASES.RUNNING
                  ? "#3b82f6"
                  : phase === CLEANUP_PHASES.SUCCESS
                    ? "#22c55e"
                    : phase === CLEANUP_PHASES.ERROR
                      ? "#ef4444"
                      : "#6b7280",
              boxShadow: `0 0 8px ${phase === CLEANUP_PHASES.RUNNING
                ? "#3b82f6"
                : phase === CLEANUP_PHASES.SUCCESS
                  ? "#22c55e"
                  : phase === CLEANUP_PHASES.ERROR
                    ? "#ef4444"
                    : "transparent"
                }`,
              animation:
                phase === CLEANUP_PHASES.RUNNING ? "pulse 2s infinite" : "none",
            }}
          />
          <span
            style={{
              color: "#fff",
              fontSize: "clamp(11px, 2vw, 13px)",
              fontWeight: 600,
              letterSpacing: "0.3px",
            }}
          >
            {phase === CLEANUP_PHASES.RUNNING
              ? `Cleaning ${progress}%`
              : phase === CLEANUP_PHASES.SUCCESS
                ? "✓ Clean"
                : phase === CLEANUP_PHASES.ERROR
                  ? "✗ Error"
                  : "Ready"}
          </span>
        </button>
      )}

      {/* Debug Panel */}
      {/* Debug Panel */}
      {debug && showDebug && (
        <div
          ref={debugPanelRef}
          role="dialog"
          aria-label="Debug logs"
          style={{
            position: "fixed",
            bottom: "clamp(60px, 10vh, 80px)",
            left: "clamp(10px, 2vw, 20px)",
            width: "clamp(260px, 80vw, 400px)",
            maxHeight: "min(70vh, 400px)",
            backgroundColor: "#1a1a1a",
            border: "1px solid #333",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            fontFamily: "monospace",
            overflow: "hidden",
            pointerEvents: "auto", // let interaction work inside panel
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px 16px",
              borderBottom: "1px solid #333",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#0a0a0a",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
              Debug Logs
            </span>
            <button
              onClick={() => setShowDebug(false)}
              style={{
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                fontSize: "18px",
              }}
              aria-label="Close debug panel"
            >
              &times;
            </button>
          </div>

          {/* Scrollable Logs */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "12px",
              fontSize: "clamp(10px, 2vw, 12px)",
              lineHeight: 1.6,
              scrollbarWidth: "thin",
              scrollbarColor: "#444 #1a1a1a",
            }}
          >
            {healthStatus && (
              <div
                style={{
                  marginBottom: "16px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid #444",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  Health Status
                </div>
                <pre
                  style={{
                    backgroundColor: "#2a2a2a",
                    padding: "10px",
                    borderRadius: "8px",
                    overflowX: "auto",
                    color: "#eee",
                    fontSize: "clamp(9px, 1.8vw, 11px)",
                    lineHeight: 1.4,
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {JSON.stringify(healthStatus, null, 2)}
                </pre>
              </div>
            )}

            {logger.getLogs().length === 0 ? (
              <div style={{ color: "#666", textAlign: "center", padding: "20px" }}>
                No logs yet
              </div>
            ) : (
              logger.getLogs().map((log, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: "8px",
                    paddingBottom: "8px",
                    borderBottom: "1px solid #222",
                  }}
                >
                  <div style={{ color: "#666", fontSize: "10px" }}>
                    {new Date(log.timestamp).toLocaleTimeString()}
                  </div>
                  <div
                    style={{
                      color:
                        log.level === LOG_LEVELS.ERROR
                          ? "#ef4444"
                          : log.level === LOG_LEVELS.WARN
                            ? "#f59e0b"
                            : log.level === LOG_LEVELS.INFO
                              ? "#3b82f6"
                              : "#8b5cf6",
                    }}
                  >
                    {log.message}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <style>

        {`
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
    `}
      </style>
    </>
  );
}