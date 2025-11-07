import React, { useState, useEffect, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const Beats = memo(function Beats({ items = [], baseRadius = 220 }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [previewing, setPreviewing] = useState(null); // track audio preview id

  // ✅ Handle resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Dynamic radius scaling with clamp (mobile → 4K)
  const responsiveRadius = useMemo(() => {
    return Math.min(
      Math.max(windowWidth / 5, 120), // minimum circle size
      baseRadius * 1.6 // max cap for ultra-wide screens
    );
  }, [windowWidth, baseRadius]);

  // ✅ Decide layout: circle OR grid
  const useGridLayout = windowWidth < 480 || items.length > 10;

  // ✅ Precompute positions for circle layout
  const positions = useMemo(() => {
    if (useGridLayout) return [];
    const itemCount = items.length;
    return items.map((_, index) => {
      const angle = (index / itemCount) * 2 * Math.PI;
      const x = responsiveRadius + responsiveRadius * Math.cos(angle) - 80;
      const y = responsiveRadius + responsiveRadius * Math.sin(angle) - 90;
      return { x, y };
    });
  }, [items, responsiveRadius, useGridLayout]);

  // ✅ Handle audio preview toggle
  const togglePreview = (id, url) => {
    if (previewing === id) {
      const audio = document.getElementById(`audio-${id}`);
      if (audio) audio.pause();
      setPreviewing(null);
    } else {
      if (previewing !== null) {
        const prevAudio = document.getElementById(`audio-${previewing}`);
        if (prevAudio) prevAudio.pause();
      }
      const audio = document.getElementById(`audio-${id}`);
      if (audio) {
        audio.play();
        setPreviewing(id);
      }
    }
  };

  return (
    <div
      className={`relative mx-auto ${
        useGridLayout
          ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'
          : ''
      }`}
      style={
        useGridLayout
          ? {}
          : { width: responsiveRadius * 2, height: responsiveRadius * 2 }
      }
    >
      {items.length === 0 && (
        <div className="text-center text-gray-400 py-12 w-full">
          🎧 No beats available yet
        </div>
      )}

      {items.map((item, index) => {
        const { x, y } = positions[index] || {};
        const isPreviewing = previewing === item.id;

        return (
          <motion.div
            key={item.id || index}
            role="article"
            aria-label={`Beat: ${item.title}`}
            tabIndex={0}
            style={
              useGridLayout
                ? {}
                : {
                    position: 'absolute',
                    left: x,
                    top: y,
                    width: 'clamp(130px, 20vw, 210px)',
                    height: 'clamp(170px, 30vw, 250px)',
                  }
            }
            whileHover={{
              scale: 1.06,
              rotate: 0,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            {/* Card */}
            <div className="relative group bg-black/90 backdrop-blur-xl rounded-2xl p-3 w-full h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 focus-within:ring-2 focus-within:ring-white/30">
              <div className="flex flex-col h-full">
                {/* Image with preview button */}
                <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title || 'Beat Cover'}
                    className="w-full h-full object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  {/* Play/Pause button */}
                  <button
                    onClick={() => togglePreview(item.id, item.url)}
                    className="absolute bottom-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition"
                    aria-label={isPreviewing ? 'Pause preview' : 'Play preview'}
                  >
                    {isPreviewing ? (
                      <Pause className="w-4 h-4 text-white" />
                    ) : (
                      <Play className="w-4 h-4 text-white" />
                    )}
                  </button>

                  {/* Hidden audio element */}
                  <audio id={`audio-${item.id}`} src={item.url} />
                </div>

                {/* Title & Artist */}
                <h3 className="text-white text-sm md:text-base font-semibold truncate mb-0.5">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-1 font-medium truncate">
                  {item.artist}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs text-gray-300 mb-2">
                  {item.bpm && (
                    <span className="px-2 py-0.5 bg-white/10 rounded-full">
                      {item.bpm} BPM
                    </span>
                  )}
                  {item.duration && (
                    <span className="px-2 py-0.5 bg-white/10 rounded-full">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <a
                    href={item.download}
                    aria-label={`Download or buy ${item.title}`}
                    download={item.price === 'Free' ? true : undefined}
                    className={`block text-center focus:outline-none focus:ring-2 focus:ring-white/40 ${
                      item.price === 'Free'
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-900 text-white'
                    } font-medium text-xs md:text-sm py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl`}
                  >
                    {item.price === 'Free'
                      ? '⬇ Download'
                      : `💳 Buy ${item.price}`}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
});

export default Beats;
