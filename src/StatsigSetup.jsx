import React, { useState, useEffect, lazy } from 'react';
import { StatsigProvider } from '@statsig/react-bindings';
import { StatsigClient } from '@statsig/js-client';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
const Loading = lazy(() => import('./components/Loading'));

// Create the client once at the module level
const myStatsigClient = new StatsigClient(
  import.meta.env.VITE_APP_STATSIG_CLIENT_KEY,
  { userID: "user-id" },
  {
    plugins: [
      new StatsigSessionReplayPlugin(),
      new StatsigAutoCapturePlugin(),
    ],
  }
);

export default function StatsigSetup({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    myStatsigClient.initializeAsync().then(() => {
      setIsInitialized(true);
    });
  }, []);

  if (!isInitialized) {
    return <Loading />;
  }

  return <StatsigProvider client={myStatsigClient}>{children}</StatsigProvider>;
}