import React, {
  Suspense,
  useState,
  useEffect,
  lazy,
  useCallback,
  memo,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useSmoothMousePosition } from '../hooks/useSmoothMousePosition';
import { prewarmAiServer } from '@/lib/gemini';
import RobotFaceAvatar from './chat/RobotFaceAvatar';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';
import ErrorBoundary from './ErrorBoundary';

const RobotHead = lazy(() => import('./RobotHead.jsx'));

// Lazy load AIChatCard from chat component
const AIChatCard = lazy(() => import('./chat/AIChatCard'));

import ChatLoadingSkeleton from './ChatLoadingSkeleton.jsx';

const RobotCanvas = memo(function RobotCanvas({
  cursor,
  velocity,
  isHovered,
  isDocVisible,
  size,
  reactionTrigger,
}) {
  const [contextLost, setContextLost] = useState(false);

  // When WebGL context is lost (GPU context eviction during scroll or tab backgrounding),
  // seamlessly render RobotFaceAvatar without throwing errors or breaking the UI!
  if (contextLost) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-950 p-1">
        <RobotFaceAvatar
          size={Math.max(26, size - 8)}
          cursor={cursor}
          isThinking={isHovered}
          isSpeaking={isHovered}
        />
      </div>
    );
  }

  return (
    <ErrorBoundary
      fallback={
        <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-950 p-1">
          <RobotFaceAvatar
            size={Math.max(26, size - 8)}
            cursor={cursor}
            isThinking={isHovered}
            isSpeaking={isHovered}
          />
        </div>
      }
    >
      <Canvas
        style={{ pointerEvents: 'none' }}
        frameloop={isDocVisible ? 'always' : 'demand'}
        camera={{ position: [0, 0, 3.2], fov: 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={
          typeof window !== 'undefined'
            ? Math.min(window.devicePixelRatio, 2)
            : 1
        }
        onCreated={({ gl }) => {
          const handleContextLost = (e) => {
            e.preventDefault();
            console.warn(
              'RobotFace: WebGL context lost. Gracefully switching to animated 3D avatar...'
            );
            setContextLost(true);
          };
          const handleContextRestored = () => {
            console.info('RobotFace: WebGL context restored.');
            setContextLost(false);
          };

          gl.domElement.addEventListener(
            'webglcontextlost',
            handleContextLost,
            false
          );
          gl.domElement.addEventListener(
            'webglcontextrestored',
            handleContextRestored,
            false
          );
        }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[3, 4, 4]}
          intensity={1.6}
          color="#ffffff"
        />
        <directionalLight
          position={[-4, 2, -2]}
          intensity={1.2}
          color="#ffffff"
        />
        <directionalLight
          position={[0, 4, -3]}
          intensity={0.8}
          color="#ffffff"
        />
        <pointLight position={[0, -1, 3]} intensity={0.7} color="#ffffff" />
        <spotLight
          position={[0, 6, 2]}
          angle={0.5}
          penumbra={1}
          intensity={1.0}
          color="#ffffff"
        />
        <Suspense fallback={null}>
          <RobotHead
            cursor={cursor}
            velocity={velocity}
            isHovered={isHovered}
            reactionTrigger={reactionTrigger}
          />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
});

export default function RobotFace() {
  const { cursor, velocity } = useSmoothMousePosition();

  const [isHovered, setIsHovered] = useState(false);
  const [reactionTrigger, setReactionTrigger] = useState(0);
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

  const handleInteractStart = useCallback(() => {
    setIsHovered(true);
    setReactionTrigger((c) => c + 1);
    prewarmAiServer();
  }, []);

  const handleInteractEnd = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleOpenChange = useCallback((open) => {
    setIsOpen(open);
    if (typeof document !== 'undefined') {
      if (open) {
        document.body.setAttribute('data-ai-chat-open', 'true');
      } else {
        document.body.removeAttribute('data-ai-chat-open');
      }
    }
    if (open) {
      prewarmAiServer();
    }
  }, []);

  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.removeAttribute('data-ai-chat-open');
      }
    };
  }, []);

  const [isDocVisible, setIsDocVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      setIsDocVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () =>
      document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const size = viewportWidth < 640 ? 40 : viewportWidth < 1024 ? 60 : 75;

  const boxShadow = isHovered
    ? '0 0 40px #ffffff, 0 0 80px #ffffff50, inset 0 0 20px #ffffff30'
    : '0 0 25px #ffffff, 0 0 50px #ffffff40, inset 0 0 15px #ffffff20';

  return (
    <div className="fixed bottom-4 right-14 sm:bottom-6 sm:right-18 z-50">
      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onHoverStart={!isTouchDevice ? handleInteractStart : undefined}
            onHoverEnd={!isTouchDevice ? handleInteractEnd : undefined}
            onTouchStart={isTouchDevice ? handleInteractStart : undefined}
            onTouchEnd={isTouchDevice ? handleInteractEnd : undefined}
            className="cursor-pointer rounded-full overflow-hidden flex items-center justify-center relative"
            style={{ width: `${size}px`, height: `${size}px`, boxShadow }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            aria-label="Open AI Chat"
            role="button"
            tabIndex={0}
          >
            {/* Ambient Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white"
              animate={{ scale: [1, 1.3], opacity: [0.2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
            />
            {/* High-contrast dark glass orb backdrop for crisp 3D model contrast */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-zinc-800/80 via-zinc-950/95 to-black ring-1 ring-white/30 backdrop-blur-sm" />
            <RobotCanvas
              cursor={cursor}
              velocity={velocity}
              isHovered={isHovered}
              isDocVisible={isDocVisible}
              size={size}
              reactionTrigger={reactionTrigger}
            />
          </motion.div>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="flex h-[100dvh] max-h-[100dvh] w-full max-w-full flex-col overflow-hidden border-none bg-transparent p-0 sm:w-[420px] md:w-[460px] sm:max-w-[460px] sm:shadow-[0_0_50px_rgba(255,255,255,0.15)]"
          showCloseButton={false}
        >
          <SheetTitle className="sr-only">AD Assistant</SheetTitle>
          <SheetDescription className="sr-only">
            An interactive chat with an AD assistant.
          </SheetDescription>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex h-full min-h-0 w-full flex-1"
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
