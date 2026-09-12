/** @type {import('npm-check-updates').RcOptions} */
module.exports = {
  target: (name) => {
    // Only allow safe patch updates (avoid crossing into breaking minor versions):
    // - React: 19.2.x is safe; 19.3.0 breaks @react-three/fiber (which requires <19.3)
    // - Three: 0.183.x is safe; 0.184+ breaks postprocessing (which requires <0.184.0)
    if (
      name === 'react' ||
      name === 'react-dom' ||
      name === '@types/react' ||
      name === '@types/react-dom' ||
      name === 'three'
    ) {
      return 'patch';
    }

    // Only allow safe minor updates (avoid crossing into breaking major versions):
    // - ESLint: 9.x is safe; 10.x breaks eslint-plugin-react and eslint-plugin-react-hooks
    // - Vite ecosystem: Vite 7.x / plugin-react 5.x is safe; Vite 8 breaks vite-plugin-pwa
    // - Framer Motion: 12.x is safe; 13.x has breaking changes
    if (
      name === 'eslint' ||
      name === '@eslint/js' ||
      name === 'vite' ||
      name === '@vitejs/plugin-react' ||
      name === '@vitejs/plugin-legacy' ||
      name === 'vite-plugin-pwa' ||
      name === 'vitest' ||
      name === 'framer-motion'
    ) {
      return 'minor';
    }

    // All other packages can safely update to their absolute latest versions
    return 'latest';
  },
};
