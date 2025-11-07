import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Globe Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-6 text-red-400">
          <p className="text-xl mb-2">🌐 Unable to load Globe</p>
          <p className="text-sm opacity-75">
            Please refresh the page to try again
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
