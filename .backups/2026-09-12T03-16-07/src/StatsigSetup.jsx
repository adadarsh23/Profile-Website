import React from 'react';
import { StatsigProvider } from '@statsig/react-bindings';

const options = {
  environment: {
    tier: import.meta.env.MODE,
  },
  api: 'https://api.statsig.com/v1',
};

const user = {
  userID: 'default-user-id',
  environment: options.environment,
};

export default function StatsigSetup({ children }) {
  const clientKey = import.meta.env.VITE_APP_STATSIG_CLIENT_KEY;

  if (!clientKey) {
    return <>{children}</>;
  }

  return (
    <StatsigProvider sdkKey={clientKey} user={user} options={options}>
      {children}
    </StatsigProvider>
  );
}
