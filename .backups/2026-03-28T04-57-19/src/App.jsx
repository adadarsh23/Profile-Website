import React, { Suspense } from 'react';
import StatsigSetup from './StatsigSetup';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import DeferredRender from './components/DeferredRender';
import HomeSkeleton from './components/HomeSkeleton';
import AboutSkeleton from './components/skeletons/AboutSkeleton';
import BlogSkeleton from './components/skeletons/BlogSkeleton';
import GallerySkeleton from './components/skeletons/GallerySkeleton';
import SampleSkeleton from './components/skeletons/SampleSkeleton';
import ContactSkeleton from './components/skeletons/ContactSkeleton';
import NotFoundSkeleton from './components/skeletons/NotFoundSkeleton';

// Core components (imported synchronously)
import Navbar from './Main/Navbar';
import StructuredData from './Data/StructuredData.jsx';
const Footer = React.lazy(() => import('./Main/Footer'));
const loadComponent = (importPromise) => {
  return React.lazy(() =>
    importPromise.catch((error) => {
      console.error('Failed to load component:', error);
      return {
        default: () => (
          <div
            className="rounded-3xl border border-white/10 bg-black px-6 py-8 text-center text-white/70"
            role="status"
          >
            This section is temporarily unavailable.
          </div>
        ),
      };
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

const routes = [
  { path: '/', element: <Home />, fallback: <HomeSkeleton /> },
  { path: '/sample', element: <Sample />, fallback: <SampleSkeleton /> },
  { path: '/contact', element: <Contact />, fallback: <ContactSkeleton /> },
  { path: '/gallery', element: <Gallery />, fallback: <GallerySkeleton /> },
  { path: '/about', element: <About />, fallback: <AboutSkeleton /> },
  { path: '/blog', element: <Blog />, fallback: <BlogSkeleton /> },
  { path: '*', element: <NotFound />, fallback: <NotFoundSkeleton /> },
];

export default function App() {
  return (
    <StatsigSetup>
      <ErrorBoundary>
        <div className="app-container">
          <StructuredData />
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <DeferredRender timeout={800}>
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
          </DeferredRender>
          <header>
            <Navbar />
          </header>
          <DeferredRender timeout={1500}>
            <ErrorBoundary fallback={null}>
              <Suspense fallback={null}>
                <React.Fragment>
                  <AnalyticsTracker />
                  <IpLogger />
                  <WebSocket />
                  <SmoothScrollProvider />
                  <RobotFaceWrapper />
                  <WebShare />
                  <div className="hidden md:block">
                    <LiquidCursor size={20} />
                  </div>
                  <SplashCursor />
                  <div className="enhancement-components">
                    <InternetStatus />
                    <ScrollToTopButton />
                    <CacheClean />
                  </div>
                </React.Fragment>
              </Suspense>
            </ErrorBoundary>
          </DeferredRender>

          <main id="main-content" tabIndex={-1}>
            <ErrorBoundary
              fallback={
                <div className="error-fallback rounded-3xl border border-white/10 bg-black px-6 py-10 text-center text-white">
                  <h2>Unable to load content</h2>
                  <p className="mt-2 text-white/70">
                    Please refresh the page or try again in a moment.
                  </p>
                </div>
              }
            >
              <Suspense fallback={<Loading label="Loading page" />}>
                <Routes>
                  {routes.map(({ path, element, fallback }) => (
                    <Route
                      key={path}
                      path={path}
                      element={
                        <ErrorBoundary>
                          <Suspense
                            fallback={
                              fallback || (
                                <Loading
                                  label="Preparing this section"
                                  fullscreen={false}
                                  className="mx-auto my-8 max-w-6xl"
                                />
                              )
                            }
                          >
                            {element}
                          </Suspense>
                        </ErrorBoundary>
                      }
                    />
                  ))}
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <footer>
            <Suspense
              fallback={
                <div className="mx-auto min-h-[8rem] max-w-6xl rounded-3xl border border-white/10 bg-white/5" />
              }
            >
              <Footer />
            </Suspense>
          </footer>

          <DeferredRender timeout={1200}>
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
          </DeferredRender>
        </div>
      </ErrorBoundary>
    </StatsigSetup>
  );
}
