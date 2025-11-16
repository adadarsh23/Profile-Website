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

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 text-center"
            role="alert"
            aria-live="assertive"
          >
            <h2 className="text-2xl font-semibold text-red-500 mb-2">
              Oops! Something went wrong.
            </h2>
            <p className="mb-4 max-w-md">
              An unexpected error occurred. We've logged the issue and are looking into it. Please try reloading the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition-colors"
            >
              Reload Page
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
