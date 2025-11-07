import React from 'react';
import { StatsigProvider } from '@statsig/react-bindings';
import Loading from './components/Loading';

// Initialize options object
const options = {
  environment: {
    tier: import.meta.env.MODE, // 'development' or 'production'
  },
  api:
    import.meta.env.MODE === 'development'
      ? 'https://api.statsig.com/v1'
      : undefined,
  initTimeoutMs: 10000,
};

// Create a basic user object
const user = {
  userID: 'default-user-id',
  environment: options.environment,
};

export default function StatsigSetup({ children }) {
  const clientKey = import.meta.env.VITE_APP_STATSIG_CLIENT_KEY;

  if (!clientKey) {
    console.warn('Statsig client key is not configured');
    return <>{children}</>;
  }

  return (
    <StatsigProvider
      sdkKey={clientKey}
      user={user}
      options={options}
      loadingComponent={<Loading />}
    >
      {children}
    </StatsigProvider>
  );
}
