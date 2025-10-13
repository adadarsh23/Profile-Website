import React, { useState, useEffect, lazy } from "react";
import { StatsigProvider } from "@statsig/react-bindings";
import { StatsigClient } from "@statsig/js-client";
import { StatsigSessionReplayPlugin } from "@statsig/session-replay";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";

const Loading = lazy(() => import("./components/Loading"));

export default function StatsigSetup({ children }) {
  const [client, setClient] = useState(null);

  useEffect(() => {
    async function initStatsig() {
      try {
        const statsigClient = new StatsigClient(
          import.meta.env.VITE_APP_STATSIG_CLIENT_KEY,
          { userID: "user-id" },
          {
            plugins: [
              new StatsigSessionReplayPlugin(),
              new StatsigAutoCapturePlugin(),
            ],
          }
        );

        // Wait for initialization before setting the client
        await statsigClient.initializeAsync();
        setClient(statsigClient);
      } catch (error) {
        console.error("Statsig initialization failed:", error);
      }
    }

    initStatsig();
  }, []);

  if (!client) {
    return <Loading />;
  }

  return <StatsigProvider client={client}>{children}</StatsigProvider>;
}
