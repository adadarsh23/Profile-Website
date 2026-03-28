import React, { useEffect, useState, lazy } from 'react';
const Loading = lazy(() => import('./Loading.jsx'));

// Safer dynamic loader that logs module shape and falls back gracefully.
export default function RobotFaceWrapper() {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('./RobotFace.jsx')
      .then((mod) => {
        console.log('RobotFace module loaded:', Object.keys(mod));
        const C = mod.default || mod.RobotFace;
        if (!C) {
          throw new Error(
            'RobotFace module does not export a component as default or named RobotFace'
          );
        }
        if (mounted) setComponent(() => C);
      })
      .catch((err) => {
        console.error('Failed to load RobotFace:', err);
        if (mounted) setError(err);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (error) return null;
  if (!Component) return <Loading />;

  return (
    <div className="robot-face-container">
      <Component />
    </div>
  );
}
