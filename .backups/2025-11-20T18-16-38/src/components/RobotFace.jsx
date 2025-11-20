import React, { Suspense, useState, useEffect, lazy, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useSmoothMousePosition } from '../hooks/useSmoothMousePosition';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';
import ErrorBoundary from './ErrorBoundary';

const RobotHead = lazy(() => import('./RobotHead.jsx'));

// Make AIChatCard work whether it’s a default export or a named export
const AIChatCard = lazy(() =>
  import('../components/ai/AIChatCard').then((m) => ({
    default: m.default || m.AIChatCard,
  }))
);

import ChatLoadingSkeleton from './ChatLoadingSkeleton.jsx';

export default function RobotFace() {
  const { cursor, velocity } = useSmoothMousePosition();

  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const size = viewportWidth < 640 ? 40 : viewportWidth < 1024 ? 60 : 75;

  const boxShadow = isHovered
    ? '0 0 40px #ffffff, 0 0 80px #ffffff50, inset 0 0 20px #ffffff30'
    : '0 0 25px #ffffff, 0 0 50px #ffffff40, inset 0 0 15px #ffffff20';

  const robotCanvas = useMemo(
    () => (
      <ErrorBoundary
        fallback={<div className="w-full h-full bg-black rounded-full" />}
      >
        <Canvas
          style={{ pointerEvents: 'none' }}
          camera={{ position: [0, 0, 3.5], fov: 50 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.1} />
          <pointLight position={[-5, -5, -5]} intensity={0.4} color="#ffffff" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.6}
            color="#ffffff"
          />
          <Suspense fallback={null}>
            <RobotHead
              cursor={cursor}
              velocity={velocity}
              isHovered={isHovered}
            />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    ),
    [cursor, velocity, isHovered]
  );

  return (
    <div className="fixed bottom-4 right-14 sm:bottom-6 sm:right-18 z-50">
      {/* Keep Suspense but use direct imports for Sheet to avoid runtime break on click */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onHoverStart={!isTouchDevice ? () => setIsHovered(true) : undefined}
            onHoverEnd={!isTouchDevice ? () => setIsHovered(false) : undefined}
            onTouchStart={isTouchDevice ? () => setIsHovered(true) : undefined}
            onTouchEnd={isTouchDevice ? () => setIsHovered(false) : undefined}
            className="cursor-pointer rounded-full overflow-hidden flex items-center justify-center relative"
            style={{ width: `${size}px`, height: `${size}px`, boxShadow }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            aria-label="Open AI Chat"
            role="button"
            tabIndex={0}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-white"
              animate={{ scale: [1, 1.3], opacity: [0.2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            />
            {robotCanvas}
          </motion.div>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-transparent border-none p-0 w-full sm:w-[400px] md:w-[450px]"
          showCloseButton={false}
          style={{ boxShadow: '0 0 60px #ffffff40, inset 0 0 40px #ffffff10' }}
        >
          <SheetTitle className="sr-only">AD Assistant</SheetTitle>
          <SheetDescription className="sr-only">
            An interactive chat with an AD assistant. You can ask questions
            about the portfolio or have a general conversation.
          </SheetDescription>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full h-full"
          >
            <Suspense fallback={<ChatLoadingSkeleton />}>
              <AIChatCard onClose={() => setIsOpen(false)} />
            </Suspense>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
