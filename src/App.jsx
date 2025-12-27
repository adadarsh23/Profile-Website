import React, { Suspense } from 'react';
import StatsigSetup from './StatsigSetup';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';

// Core components (imported synchronously)
import Navbar from './Main/Navbar';
import StructuredData from './Data/StructuredData.jsx';
const Footer = React.lazy(() => import('./Main/Footer'));
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
const Gallery = loadComponent(import('./page/Gallery.jsx'));
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
// const CookieConsent = loadComponent(import('./components/CookieConsent.jsx'));
const WebSocket = loadComponent(import('./WebSocket.jsx'));
const LiquidCursor = loadComponent(
  import('./components/LiquidCursor.tsx').then((module) => ({
    default: module.LiquidCursor,
  }))
);

const WebShare = loadComponent(import('./components/WebShare.tsx'));

const SplashCursor = loadComponent(import('./components/SplashCursor.jsx'));

const SmoothScrollProvider = loadComponent(
  import('./components/SmoothScrollProvider.jsx')
);

const RobotFaceWrapper = loadComponent(
  import('./components/RobotFaceWrapper.jsx')
);

const GradualBlur = loadComponent(import('./components/GradualBlur.jsx'));

export default function App() {
  return (
    <StatsigSetup>
      <ErrorBoundary>
        <div className="app-container">
          <Helmet>
            <StructuredData />
          </Helmet>
          <GradualBlur
            target="page"
            position="top"
            height="1.5rem"
            strength={1}
            divCount={10}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
          {/* Core Navigation - Always render */}
          <header>
            <Navbar />
          </header>
          <ErrorBoundary fallback={null}>
            <Suspense fallback={null}>
              <React.Fragment>
                <AnalyticsTracker />
                <IpLogger />
                <WebSocket />
                <div className="hidden md:block">
                  <LiquidCursor size={20} />
                </div>
                <SplashCursor />
                <SmoothScrollProvider />
                <RobotFaceWrapper />
                <WebShare />
                <div className="enhancement-components">
                  <InternetStatus />
                  <ScrollToTopButton />
                  <CacheClean />
                </div>
              </React.Fragment>
            </Suspense>
          </ErrorBoundary>

          {/* Main Content */}
          <main>
            <ErrorBoundary
              fallback={
                <div className="error-fallback">
                  <h2>Unable to load content</h2>
                  <p>Please try refreshing the page.</p>
                </div>
              }
            >
              <Suspense fallback={<Loading />}>
                <Routes>
                  {[
                    { path: '/', element: <Home /> },
                    { path: '/sample', element: <Sample /> },
                    { path: '/contact', element: <Contact /> },
                    { path: '/gallery', element: <Gallery /> },
                    { path: '/about', element: <About /> },
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
          <footer>
            <Footer />
          </footer>

          <GradualBlur
            target="page"
            position="bottom"
            height="1.5rem"
            strength={1}
            divCount={10}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </div>
      </ErrorBoundary>
    </StatsigSetup>
  );
}
