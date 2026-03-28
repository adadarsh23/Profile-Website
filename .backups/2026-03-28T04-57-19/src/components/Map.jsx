// \JavaScript
import React, { useState } from 'react';
import { MAP_EMBED_SRC } from '../Data/MapData';

export default function Map({
  src = MAP_EMBED_SRC,
  title = 'Location Map',
  height = 350,
  interactive = true,
  className = '',
  showLabel = true,
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInteractive, setIsInteractive] = useState(interactive);

  const isValidSrc =
    typeof src === 'string' && src.trim().startsWith('https://');

  if (!isValidSrc || hasError) {
    return (
      <div
        className={`w-full rounded-2xl border border-gray-700/50 bg-black/40 text-white p-4 text-sm ${className}`}
      >
        <p className="opacity-90">
          Map unavailable. Please provide a valid Google Maps embed URL using
          the <code className="font-mono">src</code> prop.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`w-full rounded-2xl overflow-hidden border border-gray-700/50 shadow-lg bg-black ${className}`}
      style={{ height }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsInteractive((prev) => !prev)}
        className="absolute top-3 right-3 z-20 bg-black/70 backdrop-blur-md text-white text-xs sm:text-sm px-4 py-2 rounded-lg border border-gray-600 hover:bg-white/10 transition-all active:scale-95"
      >
        {isInteractive ? 'Static' : 'Interactive'}
      </button>

      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white text-sm animate-pulse z-10">
          <span>Loading map...</span>
        </div>
      )}

      {/* Map Iframe */}
      <iframe
        title={title}
        src={src}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          border: 0,
          width: '100%',
          height: '100%',
          filter: 'grayscale(1) invert(1) contrast(0.9) brightness(1.1)',
          pointerEvents: isInteractive ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
          opacity: isLoaded ? 1 : 0,
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />

      {/* Overlay when static (to make it visually obvious) */}
      {!isInteractive && isLoaded && (
        <div className="absolute inset-0 bg-black/20 cursor-not-allowed z-10" />
      )}
    </div>
  );
}
