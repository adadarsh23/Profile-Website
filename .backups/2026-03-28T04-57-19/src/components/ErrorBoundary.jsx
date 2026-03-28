import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            className="flex min-h-[40vh] flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-black px-6 py-10 text-center text-white"
            role="alert"
            aria-live="assertive"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
              Unexpected error
            </p>
            <h2 className="text-2xl font-semibold text-white">
              We hit a problem loading this section.
            </h2>
            <p className="max-w-md text-sm leading-6 text-white/70">
              An unexpected error occurred. We've logged the issue and are
              looking into it. Please try reloading the page.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Try again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="rounded-full bg-white px-4 py-2 font-semibold text-black transition-colors hover:bg-white/90"
              >
                Reload page
              </button>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
