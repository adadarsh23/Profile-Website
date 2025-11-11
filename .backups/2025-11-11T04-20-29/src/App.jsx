import React, { useEffect, Suspense } from 'react';
import StatsigSetup from './StatsigSetup';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';

// Core components (imported synchronously)
import Navbar from './Main/Navbar';
import Footer from './components/Footer';

// Page components with proper error handling
const loadComponent = (importPromise) => {
  return React.lazy(() =>
    importPromise.catch((error) => {
      console.error('Failed to load component:', error);
      return { default: () => null };
    })
  );
};

// Pages
const Home = loadComponent(import('./page/Home.jsx'));
const About = loadComponent(import('./page/About.jsx'));
const Contact = loadComponent(import('./page/Contact.jsx'));
const Sample = loadComponent(import('./page/Sample.jsx'));
const Blog = loadComponent(import('./page/Blog.jsx'));
const NotFound = loadComponent(import('./page/NotFound.jsx'));

// Utility components
const AnalyticsTracker = loadComponent(import('./AnalyticsTracker'));
const IpLogger = loadComponent(import('./components/IpLogger.jsx'));
const ScrollToTopButton = loadComponent(
  import('./components/ScrollToTopButton.jsx')
);
const InternetStatus = loadComponent(import('./components/InternetStatus.jsx'));
const CacheClean = loadComponent(import('./Main/CacheClean.jsx'));
const WebSocket = loadComponent(import('./WebSocket.jsx'));
const LiquidCursor = loadComponent(
  import('./components/LiquidCursor.tsx').then((module) => ({
    default: module.LiquidCursor,
  }))
);

const SplashCursor = loadComponent(import('./components/SplashCursor.jsx'));

const SmoothScrollProvider = loadComponent(
  import('./components/SmoothScrollProvider.jsx')
);

const RobotFaceWrapper = loadComponent(
  import('./components/RobotFaceWrapper.jsx')
);

export default function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // Defer monitoring initialization until after the first render

  useEffect(() => {
    if (import.meta.env.PROD) {
      import('./monitoring.js').then(({ initLogRocket, initSentry }) => {
        initLogRocket();
        initSentry();
      });
    }
  }, []);

  // useEffect(() => {
  //   // Simulate app loading
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <StatsigSetup>
      <ErrorBoundary>
        <div className="app-container">
          {/* Core Navigation - Always render */}
          <header>
            <Navbar />
          </header>

          {/* Background Utilities - Silent failure allowed */}
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <AnalyticsTracker />
              <IpLogger />
              <WebSocket />
              <div className="hidden md:block">
                <LiquidCursor size={20} />
              </div>
              <SplashCursor />
              <SmoothScrollProvider />
              <RobotFaceWrapper />
            </Suspense>
          </ErrorBoundary>

          {/* Main Content */}
          <main>
            <ErrorBoundary
              fallback={
                <div className="error-fallback">
                  <h2>Unable to load content</h2>
                  <button onClick={() => window.location.reload()}>
                    Try Again
                  </button>
                </div>
              }
            >
              <Suspense fallback={<Loading />}>
                <Routes>
                  {[
                    { path: '/', element: <Home /> },
                    { path: '/about', element: <About /> },
                    { path: '/contact', element: <Contact /> },
                    { path: '/sample', element: <Sample /> },
                    { path: '/blog', element: <Blog /> },
                    { path: '*', element: <NotFound /> },
                  ].map(({ path, element }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <ErrorBoundary>
                          <Suspense fallback={<Loading />}>{element}</Suspense>
                        </ErrorBoundary>
                      }
                    />
                  ))}
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>

          {/* UI Enhancement Components */}
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <div className="enhancement-components">
                <InternetStatus />
                <ScrollToTopButton />
                <CacheClean />
              </div>
            </Suspense>
          </ErrorBoundary>

          {/* Footer - Always render */}
          <footer>
            <Footer />
          </footer>
        </div>
      </ErrorBoundary>
    </StatsigSetup>
  );
}
