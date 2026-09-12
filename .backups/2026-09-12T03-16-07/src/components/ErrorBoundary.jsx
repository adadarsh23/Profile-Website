import React from 'react';

const MAX_RETRIES = 3;

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, retryCount: 0 };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Report to Sentry when available (lazy-loaded in prod via monitoring.js)
    try {
      if (typeof window !== 'undefined' && window.__SENTRY_CLIENT__) {
        window.__SENTRY_CLIENT__.captureException(error, {
          contexts: { react: errorInfo },
        });
      } else {
        // Fallback: dynamic import so this never blocks the render thread
        import('@sentry/react')
          .then((Sentry) => {
            Sentry.captureException(error, {
              contexts: { react: errorInfo },
            });
          })
          .catch(() => {
            /* Sentry not configured — ignore */
          });
      }
    } catch {
      /* Sentry unavailable — swallow */
    }
  }

  handleReset = () => {
    if (this.state.retryCount >= MAX_RETRIES) return;
    this.setState((prev) => ({
      hasError: false,
      error: null,
      retryCount: prev.retryCount + 1,
    }));
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback !== undefined) {
        return this.props.fallback;
      }

      const exhausted = this.state.retryCount >= MAX_RETRIES;

      return (
        <div
          className="flex min-h-[40vh] flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-black px-6 py-10 text-center text-white"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            Unexpected error
          </p>
          <h2 className="text-2xl font-semibold text-white">
            {exhausted
              ? 'Unable to recover this section.'
              : 'We hit a problem loading this section.'}
          </h2>
          <p className="max-w-md text-sm leading-6 text-white/70">
            {exhausted
              ? 'This section keeps failing. Please reload the page or come back later.'
              : "An unexpected error occurred. We've logged the issue and are looking into it. Please try reloading the page."}
          </p>
          {!exhausted && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Try again ({MAX_RETRIES - this.state.retryCount} left)
              </button>
              <button
                onClick={() => window.location.reload()}
                className="rounded-full bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-white/90"
              >
                Reload page
              </button>
            </div>
          )}
          {exhausted && (
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-white/90"
            >
              Reload page
            </button>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
