import React from "react";
import EnhancedCacheCleaner from "../plugins/UltraUltraSmartCacheCleaner";

// Fixed component name to PascalCase (React convention)
function CacheClean() {
  return (
    <div>
      <EnhancedCacheCleaner
        autoReload={false}
        silent={false}
        debug={true}
        progressUI={true}
        statusIndicator={true}
        ttlHours={12} // cleanup every 12 hours
        manual={false} // auto-run
        preserveKeys={[
          // Default important keys
          "auth", "token", "user", "theme", "session", "visitor",
          // Keys for common libraries/frameworks
          "statsig", "logrocket", "sentry", "ga", "framer",
          // Keys that might store settings or state
          "settings", "config", "state", "redux", "recoil"
        ]}
        retries={3}
        taskTimeoutMS={20000}
        enableHealthCheck={true}
        enableAnalytics={false}
        gracefulDegradation={true}
        onComplete={(report) => {
          console.log("✅ Cleanup completed:", report);
          // You can add custom logic here
        }}
        onError={(error, report) => {
          console.error("❌ Cleanup failed:", error);
          // Handle errors
        }}
        onProgress={(progress) => {
          console.log(`🔄 Cleanup progress: ${progress}%`);
        }}
      />
    </div>
  );
}

export default CacheClean;