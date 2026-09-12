'use client';

import { memo, useEffect, useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export type RobotEmotion =
  | 'neutral'
  | 'happy'
  | 'wink'
  | 'surprised'
  | 'thinking'
  | 'speaking'
  | 'excited'
  | 'love';

export interface RobotFaceAvatarProps {
  className?: string;
  size?: number;
  isThinking?: boolean;
  isSpeaking?: boolean;
  emotion?: RobotEmotion;
  cursor?: { current?: { x: number; y: number } };
  interactive?: boolean;
  onClick?: () => void;
}

export const RobotFaceAvatar = memo(function RobotFaceAvatar({
  className,
  size = 24,
  isThinking = false,
  isSpeaking = false,
  emotion: explicitEmotion,
  cursor,
  interactive = true,
  onClick,
}: RobotFaceAvatarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [antennaWobble, setAntennaWobble] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [blinkActive, setBlinkActive] = useState(false);
  const [autonomousEmotion, setAutonomousEmotion] =
    useState<RobotEmotion>('neutral');

  // Determine current active emotion
  const activeEmotion: RobotEmotion = isSpeaking
    ? 'speaking'
    : isThinking
      ? 'thinking'
      : explicitEmotion || (isHovered ? 'happy' : autonomousEmotion);

  // Autonomous expressions cycle ("mast mast face expressions")
  useEffect(() => {
    if (!interactive || isSpeaking || isThinking || explicitEmotion) return;

    const emotionsCycle: RobotEmotion[] = [
      'neutral',
      'happy',
      'wink',
      'neutral',
      'surprised',
      'excited',
      'happy',
    ];
    let currentIndex = 0;

    const cycleInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % emotionsCycle.length;
      setAutonomousEmotion(emotionsCycle[currentIndex]);
    }, 4200);

    return () => clearInterval(cycleInterval);
  }, [interactive, isSpeaking, isThinking, explicitEmotion]);

  // Natural organic blinking (random single & double blinks)
  useEffect(() => {
    if (!interactive) return;

    let blinkTimeout: ReturnType<typeof setTimeout>;
    let isCancelled = false;

    const triggerBlink = () => {
      if (isCancelled) return;
      setBlinkActive(true);
      setTimeout(() => {
        if (isCancelled) return;
        setBlinkActive(false);

        // 20% chance of an immediate cute double-blink
        if (Math.random() < 0.25) {
          setTimeout(() => {
            if (isCancelled) return;
            setBlinkActive(true);
            setTimeout(() => {
              if (isCancelled) return;
              setBlinkActive(false);
            }, 100);
          }, 140);
        }
      }, 110);

      const nextBlinkDelay = 2200 + Math.random() * 3200;
      blinkTimeout = setTimeout(triggerBlink, nextBlinkDelay);
    };

    blinkTimeout = setTimeout(triggerBlink, 2000);

    return () => {
      isCancelled = true;
      clearTimeout(blinkTimeout);
    };
  }, [interactive]);

  // Real-time Smooth Cursor Following & 3D Perspective Gaze
  useEffect(() => {
    if (!interactive) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let lastMouseMoveTime = Date.now();

    // Track global window pointer movement
    const handleGlobalPointerMove = (e: MouseEvent | TouchEvent) => {
      lastMouseMoveTime = Date.now();
      const point =
        'touches' in e && e.touches[0] ? e.touches[0] : (e as MouseEvent);
      if (!point || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const avatarCenterX = rect.left + rect.width / 2;
      const avatarCenterY = rect.top + rect.height / 2;

      const dx = point.clientX - avatarCenterX;
      const dy = point.clientY - avatarCenterY;
      const dist = Math.hypot(dx, dy);

      // Smooth gaze intensity scaling
      const reachRadius =
        Math.max(window.innerWidth, window.innerHeight) * 0.45;
      const intensity = Math.min(1, dist / reachRadius);

      targetX = (dx / (dist || 1)) * intensity;
      targetY = (dy / (dist || 1)) * intensity;
    };

    // Autonomous look-around drift when cursor is resting
    let autoLookTimer: ReturnType<typeof setTimeout>;
    const scheduleAutoLook = () => {
      autoLookTimer = setTimeout(
        () => {
          const isIdle = Date.now() - lastMouseMoveTime > 2800;
          if (isIdle && !cursor?.current?.x && !cursor?.current?.y) {
            targetX = (Math.random() - 0.5) * 0.75;
            targetY = (Math.random() - 0.5) * 0.5;
          }
          scheduleAutoLook();
        },
        3000 + Math.random() * 2500
      );
    };
    scheduleAutoLook();

    const updateMotion = () => {
      // If external cursor ref is provided (e.g. from RobotFace 3D canvas), blend it
      if (
        cursor?.current?.x !== undefined &&
        cursor?.current?.y !== undefined
      ) {
        targetX = Math.max(-1, Math.min(1, cursor.current.x));
        targetY = Math.max(-1, Math.min(1, cursor.current.y));
      }

      // Smooth spring lerp
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      // 3D Perspective Tilt (up to 20deg rotateX, 24deg rotateY)
      setTilt({
        x: -currentY * 20,
        y: currentX * 24,
      });

      // Eyes gaze travel
      setEyeOffset({
        x: currentX * 4.2,
        y: currentY * 3.2,
      });

      // Antenna dynamic physics wobble based on lateral motion
      const dxVel = targetX - currentX;
      setAntennaWobble(dxVel * 18);

      rafId = requestAnimationFrame(updateMotion);
    };

    rafId = requestAnimationFrame(updateMotion);

    window.addEventListener('mousemove', handleGlobalPointerMove, {
      passive: true,
    });
    window.addEventListener('touchmove', handleGlobalPointerMove, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(autoLookTimer);
      window.removeEventListener('mousemove', handleGlobalPointerMove);
      window.removeEventListener('touchmove', handleGlobalPointerMove);
    };
  }, [cursor, interactive]);

  // Click reaction: adorable wink or excited cheer
  const handleClick = useCallback(() => {
    if (onClick) onClick();
    setAutonomousEmotion((prev) => (prev === 'wink' ? 'happy' : 'wink'));
    setTimeout(() => {
      setAutonomousEmotion('happy');
    }, 1200);
  }, [onClick]);

  const isWinking = activeEmotion === 'wink';
  const isHappy = activeEmotion === 'happy' || activeEmotion === 'excited';
  const isSurprised = activeEmotion === 'surprised';
  const isThinkingMode = activeEmotion === 'thinking';
  const isSpeakingMode = activeEmotion === 'speaking';
  const isLove = activeEmotion === 'love';

  // Dynamic Eye Colors per Emotion (Black & White Theme matching webpage)
  const eyeGlowColor = isThinkingMode ? '#d4d4d8' : '#ffffff';

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative flex shrink-0 items-center justify-center select-none cursor-pointer group',
        className
      )}
      style={{
        width: size,
        height: size,
        perspective: 600,
      }}
      aria-label={`3D Animated Robot Face - ${activeEmotion}`}
      role="img"
    >
      <div
        className="h-full w-full will-change-transform transition-transform duration-100 ease-out flex items-center justify-center"
        style={{
          transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.06 : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full overflow-visible drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]"
        >
          <defs>
            {/* Metallic Head Outer Gradient matching RobotHead.jsx */}
            <linearGradient
              id="robotHeadGrad"
              x1="10"
              y1="15"
              x2="90"
              y2="90"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#27272a" />
              <stop offset="25%" stopColor="#18181b" />
              <stop offset="65%" stopColor="#0a0a0a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            {/* Top Bevel Highlight */}
            <linearGradient
              id="robotBevelGrad"
              x1="20"
              y1="20"
              x2="80"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#71717a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.8" />
            </linearGradient>

            {/* Visor Screen Deep Glass Gradient */}
            <linearGradient
              id="robotScreenGrad"
              x1="22"
              y1="30"
              x2="78"
              y2="78"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#18181b" />
              <stop offset="50%" stopColor="#09090b" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>

            {/* White / Monochrome Glow Filter */}
            <filter
              id="robotCyanGlow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Eye Dynamic Glow Filter */}
            <filter
              id="robotEyeGlow"
              x="-60%"
              y="-60%"
              width="220%"
              height="220%"
            >
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Cheek Blush Filter */}
            <filter
              id="robotBlushGlow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating Ambient Energy Particles */}
          <circle
            cx="15"
            cy="18"
            r="1.3"
            fill={eyeGlowColor}
            opacity="0.65"
            className="robot-particle-1"
          />
          <circle
            cx="85"
            cy="18"
            r="1.2"
            fill="#d4d4d8"
            opacity="0.6"
            className="robot-particle-2"
          />
          <circle
            cx="11"
            cy="74"
            r="1.1"
            fill={eyeGlowColor}
            opacity="0.55"
            className="robot-particle-3"
          />
          <circle
            cx="89"
            cy="72"
            r="1.3"
            fill="#ffffff"
            opacity="0.65"
            className="robot-particle-4"
          />

          {/* --- Antenna Structure with Dynamic Inertial Wobble --- */}
          <g
            style={{
              transform: `rotate(${antennaWobble}deg)`,
              transformOrigin: '50px 22px',
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* Antenna Mast */}
            <line
              x1="50"
              y1="22"
              x2="50"
              y2="7"
              stroke="#a1a1aa"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Dual Torus Energy Rings on Antenna */}
            <ellipse
              cx="50"
              cy="17"
              rx="5.5"
              ry="1.5"
              fill="none"
              stroke={eyeGlowColor}
              strokeWidth="1.2"
              filter="url(#robotCyanGlow)"
              opacity="0.85"
            />
            <ellipse
              cx="50"
              cy="13"
              rx="4.2"
              ry="1.2"
              fill="none"
              stroke="#d4d4d8"
              strokeWidth="1.2"
              filter="url(#robotCyanGlow)"
              opacity="0.9"
            />

            {/* Radiating Signal Wave Pulse */}
            <circle
              cx="50"
              cy="7"
              r="8"
              fill="none"
              stroke={eyeGlowColor}
              strokeWidth="1.5"
              className={cn(
                'robot-antenna-wave',
                (isThinkingMode || isSurprised) && 'robot-antenna-wave-fast'
              )}
            />

            {/* Glowing Orb Tip */}
            <circle
              cx="50"
              cy="7"
              r="4.8"
              fill={eyeGlowColor}
              filter="url(#robotCyanGlow)"
              className={cn(
                'antenna-tip robot-antenna-tip',
                (isThinkingMode || isSurprised) && 'robot-antenna-fast'
              )}
            />
          </g>

          {/* --- Side Energy Ears / Panels with Vent Slots --- */}
          {/* Left Neon Ear */}
          <g className="robot-side-panel">
            <rect
              x="7"
              y="35"
              width="6"
              height="28"
              rx="3"
              fill={eyeGlowColor}
              filter="url(#robotCyanGlow)"
            />
            <line
              x1="8.5"
              y1="41"
              x2="11.5"
              y2="41"
              stroke="#000000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="8.5"
              y1="49"
              x2="11.5"
              y2="49"
              stroke="#000000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="8.5"
              y1="57"
              x2="11.5"
              y2="57"
              stroke="#000000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>

          {/* Right Neon Ear */}
          <g className="robot-side-panel">
            <rect
              x="87"
              y="35"
              width="6"
              height="28"
              rx="3"
              fill={eyeGlowColor}
              filter="url(#robotCyanGlow)"
            />
            <line
              x1="88.5"
              y1="41"
              x2="91.5"
              y2="41"
              stroke="#000000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="88.5"
              y1="49"
              x2="91.5"
              y2="49"
              stroke="#000000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="88.5"
              y1="57"
              x2="91.5"
              y2="57"
              stroke="#000000"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </g>

          {/* --- Metallic Robot Helmet / Head Frame --- */}
          <rect
            x="13"
            y="20"
            width="74"
            height="66"
            rx="16"
            fill="url(#robotHeadGrad)"
            stroke={eyeGlowColor}
            strokeWidth="1.6"
            strokeOpacity="0.45"
          />

          {/* Top Beveled Edge Light */}
          <path
            d="M 24 22 L 76 22"
            stroke="url(#robotBevelGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Head Corner Rivet Screws */}
          <circle cx="19" cy="27" r="1.4" fill="#a1a1aa" opacity="0.65" />
          <circle cx="81" cy="27" r="1.4" fill="#a1a1aa" opacity="0.65" />

          {/* --- Curved Visor Glass Screen --- */}
          <rect
            x="21"
            y="31"
            width="58"
            height="46"
            rx="11"
            fill="url(#robotScreenGrad)"
            stroke={eyeGlowColor}
            strokeWidth="1.2"
            strokeOpacity="0.38"
          />

          {/* Glass Specular Curved Reflection Arc */}
          <path
            d="M 23 35 Q 50 41 77 35"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.25"
            fill="none"
          />

          {/* Moving Horizontal Holographic Scanline */}
          <rect
            x="22"
            y="32"
            width="56"
            height="2.5"
            fill={eyeGlowColor}
            className={cn(
              'robot-visor-scanline',
              isThinkingMode && 'robot-visor-scanline-fast'
            )}
            opacity="0.5"
          />

          {/* --- Cute Glowing Cheek Blushes (Active on Happy / Wink / Love) --- */}
          {(isHappy || isWinking || isLove) && (
            <g className="robot-cheeks transition-opacity duration-300">
              <ellipse
                cx="27"
                cy="62"
                rx="3.2"
                ry="2"
                fill="#ffffff"
                filter="url(#robotBlushGlow)"
                opacity="0.35"
              />
              <ellipse
                cx="73"
                cy="62"
                rx="3.2"
                ry="2"
                fill="#ffffff"
                filter="url(#robotBlushGlow)"
                opacity="0.35"
              />
            </g>
          )}

          {/* --- Eyebrows (Dynamic Angles for Expressions) --- */}
          <g className="robot-eyebrows transition-transform duration-200">
            {/* Left Eyebrow */}
            <line
              x1="28"
              y1={isSurprised ? 37 : isThinkingMode ? 39 : isHappy ? 40 : 42}
              x2="44"
              y2={isSurprised ? 37 : isThinkingMode ? 43 : isHappy ? 41 : 42}
              stroke={eyeGlowColor}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeOpacity="0.9"
            />
            {/* Right Eyebrow */}
            <line
              x1="56"
              y1={
                isSurprised
                  ? 37
                  : isThinkingMode
                    ? 43
                    : isWinking
                      ? 39
                      : isHappy
                        ? 41
                        : 42
              }
              x2="72"
              y2={isSurprised ? 37 : isThinkingMode ? 39 : isHappy ? 40 : 42}
              stroke={eyeGlowColor}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeOpacity="0.9"
            />
          </g>

          {/* --- Eyes Group (Interactive Gaze Tracking + Mast Mast Expressions) --- */}
          <g
            style={{
              transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
              transition: 'transform 0.12s ease-out',
            }}
          >
            {/* LEFT EYE */}
            {isWinking ? (
              /* Playful Wink Arc */
              <path
                d="M 29 52 Q 36 45 43 52"
                stroke={eyeGlowColor}
                strokeWidth="3.2"
                strokeLinecap="round"
                fill="none"
                filter="url(#robotEyeGlow)"
                className="robot-wink-eye"
              />
            ) : (
              /* Open Left Eye Sphere */
              <g
                className={cn(
                  'robot-eye robot-left-eye',
                  blinkActive && 'robot-blinking'
                )}
                style={{
                  transformOrigin: '36px 51px',
                }}
              >
                <circle
                  cx="36"
                  cy="51"
                  r={isSurprised ? 7.5 : 6.5}
                  fill={eyeGlowColor}
                  filter="url(#robotEyeGlow)"
                />
                <circle
                  cx="36"
                  cy="51"
                  r={isSurprised ? 2.8 : 2.2}
                  fill="#000000"
                />
                <circle cx="37.5" cy="49.5" r="1.3" fill="#ffffff" />
                {isLove && (
                  /* Heart sparkle glint */
                  <path
                    d="M 36 49.5 L 36.5 50.5 L 37.5 50.5 L 36.8 51.2 L 37.1 52.2 L 36 51.6 L 34.9 52.2 L 35.2 51.2 L 34.5 50.5 L 35.5 50.5 Z"
                    fill="#ffffff"
                    transform="scale(0.8) translate(8, 9)"
                  />
                )}
              </g>
            )}

            {/* RIGHT EYE */}
            <g
              className={cn(
                'robot-eye robot-right-eye',
                blinkActive && !isWinking && 'robot-blinking'
              )}
              style={{
                transformOrigin: '64px 51px',
              }}
            >
              <circle
                cx="64"
                cy="51"
                r={isSurprised ? 7.5 : 6.5}
                fill={eyeGlowColor}
                filter="url(#robotEyeGlow)"
              />
              <circle
                cx="64"
                cy="51"
                r={isSurprised ? 2.8 : 2.2}
                fill="#000000"
              />
              <circle cx="65.5" cy="49.5" r="1.3" fill="#ffffff" />
              {isLove && (
                /* Heart sparkle glint */
                <path
                  d="M 64 49.5 L 64.5 50.5 L 65.5 50.5 L 64.8 51.2 L 65.1 52.2 L 64 51.6 L 62.9 52.2 L 63.2 51.2 L 62.5 50.5 L 63.5 50.5 Z"
                  fill="#ffffff"
                  transform="scale(0.8) translate(14, 9)"
                />
              )}
            </g>
          </g>

          {/* --- Mouth Area (Dynamic Equalizer, Cheerful Smile, or Surprised 'O') --- */}
          {isSpeakingMode ? (
            /* Audio Visualizer Equalizer */
            <g className="robot-speaking-eq">
              <line
                x1="33"
                y1="68"
                x2="39"
                y2="68"
                stroke={eyeGlowColor}
                strokeWidth="3"
                strokeLinecap="round"
                className="eq-bar-1"
              />
              <line
                x1="42"
                y1="68"
                x2="48"
                y2="68"
                stroke="#d4d4d8"
                strokeWidth="3.4"
                strokeLinecap="round"
                className="eq-bar-2"
              />
              <line
                x1="52"
                y1="68"
                x2="58"
                y2="68"
                stroke={eyeGlowColor}
                strokeWidth="3.4"
                strokeLinecap="round"
                className="eq-bar-3"
              />
              <line
                x1="61"
                y1="68"
                x2="67"
                y2="68"
                stroke="#d4d4d8"
                strokeWidth="3"
                strokeLinecap="round"
                className="eq-bar-4"
              />
            </g>
          ) : isSurprised ? (
            /* Surprised 'O' Mouth */
            <ellipse
              cx="50"
              cy="68"
              rx="4.5"
              ry="5"
              stroke={eyeGlowColor}
              strokeWidth="2.5"
              fill="#000000"
              className="robot-mouth-surprised"
            />
          ) : isHappy || isLove ? (
            /* Warm Cheerful Big Smile (^ ‿ ^) */
            <path
              d="M 37 66 Q 50 74 63 66"
              stroke={eyeGlowColor}
              strokeWidth="2.8"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.95"
              className="robot-mouth-happy"
            />
          ) : isWinking ? (
            /* Playful Asymmetric Smirk (^_~) */
            <path
              d="M 39 68 Q 48 70 63 65"
              stroke={eyeGlowColor}
              strokeWidth="2.6"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.9"
            />
          ) : isThinkingMode ? (
            /* Thinking Pondering Mouth Curve */
            <path
              d="M 40 68 Q 50 67 60 69"
              stroke={eyeGlowColor}
              strokeWidth="2.4"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.8"
            />
          ) : (
            /* Default Sleek LED Smile */
            <path
              d="M 39 67 Q 50 71 61 67"
              stroke={eyeGlowColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              strokeOpacity="0.85"
            />
          )}
        </svg>
      </div>

      <style>{`
        /* Smooth Natural Eye Blinking */
        .robot-blinking {
          transform: scaleY(0.08) !important;
          transition: transform 0.08s ease-in-out;
        }

        /* Visor Scanline Sweep */
        @keyframes visorScanMove {
          0% {
            transform: translateY(0);
            opacity: 0.1;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(42px);
            opacity: 0.1;
          }
        }

        .robot-visor-scanline {
          animation: visorScanMove 2.2s infinite linear;
        }

        .robot-visor-scanline-fast {
          animation: visorScanMove 1.1s infinite linear;
        }

        /* Antenna Tip Glowing Pulse */
        @keyframes antennaPulseCycle {
          0%, 100% {
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.28);
          }
        }

        .robot-antenna-tip {
          transform-origin: 50px 7px;
          animation: antennaPulseCycle 1.6s infinite ease-in-out;
        }

        .robot-antenna-fast {
          animation: antennaPulseCycle 0.6s infinite ease-in-out;
        }

        /* Antenna Radiating Ripple Wave */
        @keyframes antennaWaveRipple {
          0% {
            transform: scale(0.6);
            opacity: 0.85;
          }
          100% {
            transform: scale(1.75);
            opacity: 0;
          }
        }

        .robot-antenna-wave {
          transform-origin: 50px 7px;
          animation: antennaWaveRipple 1.8s infinite ease-out;
        }

        .robot-antenna-wave-fast {
          animation: antennaWaveRipple 0.8s infinite ease-out;
        }

        /* Side Panel Breathing Glow */
        @keyframes sidePanelBreathe {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        .robot-side-panel {
          animation: sidePanelBreathe 2.4s infinite ease-in-out;
        }

        /* Floating Ambient Micro-Particles */
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.45;
          }
          50% {
            transform: translateY(-3.5px) translateX(2.5px);
            opacity: 0.9;
          }
        }

        .robot-particle-1 {
          animation: particleFloat 3s infinite ease-in-out;
        }
        .robot-particle-2 {
          animation: particleFloat 3.5s infinite ease-in-out 0.5s;
        }
        .robot-particle-3 {
          animation: particleFloat 2.8s infinite ease-in-out 1s;
        }
        .robot-particle-4 {
          animation: particleFloat 3.2s infinite ease-in-out 1.5s;
        }

        /* Equalizer Voice Rhythm Bars */
        @keyframes eqWave {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(2.6);
          }
        }

        .eq-bar-1 {
          transform-origin: 36px 68px;
          animation: eqWave 0.32s infinite ease-in-out;
        }
        .eq-bar-2 {
          transform-origin: 45px 68px;
          animation: eqWave 0.26s infinite ease-in-out 0.08s;
        }
        .eq-bar-3 {
          transform-origin: 55px 68px;
          animation: eqWave 0.30s infinite ease-in-out 0.04s;
        }
        .eq-bar-4 {
          transform-origin: 64px 68px;
          animation: eqWave 0.28s infinite ease-in-out 0.12s;
        }

        @media (prefers-reduced-motion: reduce) {
          .robot-visor-scanline,
          .robot-antenna-tip,
          .robot-antenna-wave,
          .robot-side-panel,
          .robot-particle-1,
          .robot-particle-2,
          .robot-particle-3,
          .robot-particle-4,
          .eq-bar-1,
          .eq-bar-2,
          .eq-bar-3,
          .eq-bar-4 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
});

export default RobotFaceAvatar;
