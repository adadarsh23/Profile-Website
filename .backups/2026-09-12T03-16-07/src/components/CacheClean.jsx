import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Loading from '@/components/Loading';
const EnhancedCacheCleaner = lazy(
  () => import('@/plugins/UltraUltraSmartCacheCleaner')
);

// Fixed component name to PascalCase (React convention)
function CacheClean() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Suspense fallback={<Loading />}>
        <EnhancedCacheCleaner
          autoReload={true}
          silent={true}
          debug={import.meta.env.DEV}
          progressUI={true}
          statusIndicator={true}
          ttlHours={720} // cleanup every 1 month
          manual={true} // auto-run disabled
          preserveKeys={[
            // Default important keys
            'auth',
            'token',
            'user',
            'theme',
            'session',
            'visitor',
            'settings',
          ]}
          retries={3}
          taskTimeoutMS={20000}
          enableHealthCheck={true}
          enableAnalytics={true}
          gracefulDegradation={true}
          onComplete={(report) => {
            if (import.meta.env.DEV)
              console.log('✅ Cleanup completed:', report);
          }}
          onError={(error) => {
            if (import.meta.env.DEV) console.error('❌ Cleanup failed:', error);
          }}
          onProgress={(progress) => {
            if (import.meta.env.DEV)
              console.log(`🔄 Cleanup progress: ${progress}%`);
          }}
        />
      </Suspense>
    </motion.div>
  );
}

export default CacheClean;
