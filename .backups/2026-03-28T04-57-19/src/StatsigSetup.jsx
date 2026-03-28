import React, { Suspense } from 'react';
import Loading from './components/Loading';

const StatsigProvider = React.lazy(() =>
  import('@statsig/react-bindings').then((module) => ({
    default: module.StatsigProvider,
  }))
);

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
    <Suspense fallback={<Loading label="Loading app settings" />}>
      <StatsigProvider
        sdkKey={clientKey}
        user={user}
        options={options}
        loadingComponent={<Loading label="Loading app settings" />}
      >
        {children}
      </StatsigProvider>
    </Suspense>
  );
}
