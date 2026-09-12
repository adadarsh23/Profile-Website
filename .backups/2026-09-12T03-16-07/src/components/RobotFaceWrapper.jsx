import React, { useEffect, useState } from 'react';

// Dynamic loader that loads RobotFace smoothly in the background
export default function RobotFaceWrapper() {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('./RobotFace.jsx')
      .then((mod) => {
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

  if (error || !Component) return null;

  return (
    <div className="robot-face-container">
      <Component />
    </div>
  );
}
