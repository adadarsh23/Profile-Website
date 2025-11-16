const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/index-TjyNd_uT.js',
      'assets/vendor-CLKqtzgM.js',
      'assets/index-D4Pt6dGf.css',
      'assets/Hyperspeed-D85R5eE0.js',
      'assets/BlurText-CTgl2Lwq.js',
    ])
) => i.map((i) => d[i]);
import { j as e, r as t, _ as s } from './vendor-CLKqtzgM.js';
const i = t.lazy(() =>
    s(
      () => import('./index-TjyNd_uT.js').then((e) => e.a),
      __vite__mapDeps([0, 1, 2])
    )
  ),
  r = t.lazy(() =>
    s(() => import('./Hyperspeed-D85R5eE0.js'), __vite__mapDeps([3, 1]))
  ),
  l = t.lazy(() =>
    s(() => import('./BlurText-CTgl2Lwq.js'), __vite__mapDeps([4, 1]))
  );
function Header({ onAnimationComplete: s }) {
  return e.jsxs('section', {
    className:
      'relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12',
    children: [
      e.jsx('div', {
        className: 'absolute inset-0 w-full h-full pointer-events-none',
        children: e.jsx(t.Suspense, {
          fallback: e.jsx('div', { children: e.jsx(i, {}) }),
          children: e.jsx(r, {
            effectOptions: {
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: 'deepDistortion',
              length: 400,
              roadWidth: 18,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 50,
              lightPairsPerRoadWay: 50,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [20, 60],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.2, 0.2],
              carFloorSeparation: [0.05, 1],
              colors: {
                roadColor: 526344,
                islandColor: 657930,
                background: 0,
                shoulderLines: 1250072,
                brokenLines: 1250072,
                leftCars: [16724527, 10694672, 11015432],
                rightCars: [16645616, 15982240, 14859144],
                sticks: 16645616,
              },
            },
          }),
        }),
      }),
      e.jsxs('div', {
        className:
          'relative z-10 text-center flex flex-col items-center justify-center ',
        children: [
          e.jsx(t.Suspense, {
            fallback: e.jsx('div', { children: e.jsx(i, {}) }),
            children: e.jsx(l, {
              text: 'Welcome To Ad Adarsh Profile',
              delay: 100,
              animateBy: 'words',
              direction: 'top',
              onAnimationComplete: () => {
                s?.();
              },
              className:
                'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 sm:mb-8 flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 text-white',
            }),
          }),
          e.jsx('p', {
            className:
              'mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl',
            children: 'Explore my projects, beats, and music production works.',
          }),
        ],
      }),
    ],
  });
}
export { Header as default };
