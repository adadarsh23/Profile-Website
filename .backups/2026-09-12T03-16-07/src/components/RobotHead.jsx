import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import CONFIG from '@/config/robotConfig.js';

/**
 * 2nd-Order Spring-Damper System
 * Computes physically accurate elastic momentum, inertia lag, and damped oscillation.
 */
function updateSpring(spring, target, stiffness, damping, dt) {
  // Clamped dt to prevent numerical explosion during frame hiccups
  const step = Math.min(dt, 0.04);
  const force = -stiffness * (spring.value - target);
  const dampingForce = -damping * spring.velocity;
  const acceleration = force + dampingForce;
  spring.velocity += acceleration * step;
  spring.value += spring.velocity * step;
  return spring.value;
}

/**
 * Ultra-Enhanced Cinematic 3D Robot Head
 * Implements:
 * 1. Spring-Damper Inertia Physics (Euler lag, dynamic banking, secondary drag, click/tap recoil)
 * 2. Stereoscopic 3D Eye Tracking (Micro-saccades, distance convergence, snappy organic blinks, pupil dilation)
 * 3. High-Tech Visuals & Shaders (3-Axis gyroscopic gimbal rings, swirling particle vortex, digital phosphor scanline, audio equalizer mouth)
 * 4. Butter-smooth delta-time scaled 60/120 FPS performance in sleek monochrome Black & White.
 */
export default function RobotHead({
  cursor,
  velocity,
  isHovered,
  reactionTrigger = 0,
}) {
  const headRef = useRef();
  const neckRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const antennaRef = useRef();
  const antennaTipRef = useRef();
  const antennaWaveRef = useRef();
  const leftEyebrowRef = useRef();
  const rightEyebrowRef = useRef();
  const glowRef = useRef();
  const outerGlowRef = useRef();
  const particlesRef = useRef();
  const scanLineRef = useRef();
  const energyRingRefs = useRef([]);
  const hologramRef = useRef();
  const leftPupilRef = useRef();
  const rightPupilRef = useRef();
  const leftSidePanelRef = useRef();
  const rightSidePanelRef = useRef();
  const mouthBarsRef = useRef([]);

  // Animation and emotion state
  const [emotion, setEmotion] = useState('neutral');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLookingAround, setIsLookingAround] = useState(false);
  const [lookTarget, setLookTarget] = useState({ x: 0, y: 0 });

  // === 1. SPRING-DAMPER INERTIA PHYSICS REFS ===
  const headSprings = useRef({
    rotX: { value: 0, velocity: 0 },
    rotY: { value: 0, velocity: 0 },
    rotZ: { value: 0, velocity: 0 },
    posX: { value: 0, velocity: 0 },
    posY: { value: 0, velocity: 0 },
  });

  const antennaSprings = useRef({
    rotZ: { value: 0, velocity: 0 },
    rotX: { value: 0, velocity: 0 },
  });

  const eyeSprings = useRef({
    leftX: { value: -0.4, velocity: 0 },
    leftY: { value: 0.2, velocity: 0 },
    rightX: { value: 0.4, velocity: 0 },
    rightY: { value: 0.2, velocity: 0 },
    pupilScale: { value: 1.0, velocity: 0 },
  });

  const gimbalSpeedRef = useRef(1.0);

  // === 2. ORGANIC BLINKING & NON-LINEAR EASING ===
  const blinkStateRef = useRef({
    isBlinking: false,
    progress: 1.0, // 1 = fully open, 0 = closed
    duration: 120, // ms
    startTime: 0,
  });

  useEffect(() => {
    let mounted = true;
    let blinkTimeout;

    const triggerBlink = () => {
      if (!mounted) return;
      blinkStateRef.current = {
        isBlinking: true,
        progress: 0,
        duration: emotion === 'sleepy' ? 240 : 130,
        startTime: performance.now(),
      };

      // 30% chance of an expressive double-blink
      if (Math.random() < 0.3) {
        setTimeout(() => {
          if (!mounted) return;
          blinkStateRef.current = {
            isBlinking: true,
            progress: 0,
            duration: 100,
            startTime: performance.now(),
          };
        }, 160);
      }

      const nextInterval =
        Math.random() *
          (CONFIG.eyes.blinkInterval[1] - CONFIG.eyes.blinkInterval[0]) +
        CONFIG.eyes.blinkInterval[0];
      blinkTimeout = setTimeout(
        triggerBlink,
        nextInterval * (emotion === 'sleepy' ? 0.6 : 1)
      );
    };

    blinkTimeout = setTimeout(triggerBlink, 1800);
    return () => {
      mounted = false;
      clearTimeout(blinkTimeout);
    };
  }, [emotion]);

  // === 3. ORGANIC MICRO-SACCADES (Lifelike Gaze Jitter) ===
  const saccadeRef = useRef({ x: 0, y: 0, decay: 0 });

  useEffect(() => {
    let mounted = true;
    const scheduleSaccade = () => {
      if (!mounted) return;
      const delay = 1200 + Math.random() * 2400;
      setTimeout(() => {
        if (!mounted) return;
        if (Math.random() < 0.8) {
          saccadeRef.current = {
            x: (Math.random() - 0.5) * 0.07,
            y: (Math.random() - 0.5) * 0.045,
            decay: 1.0,
          };
        }
        scheduleSaccade();
      }, delay);
    };
    scheduleSaccade();
    return () => {
      mounted = false;
    };
  }, []);

  // === 4. CLICK / TAP REACTION IMPULSES ===
  const lastReactionRef = useRef(reactionTrigger);
  useEffect(() => {
    if (reactionTrigger !== lastReactionRef.current) {
      lastReactionRef.current = reactionTrigger;

      // Perk-up levitation impulse
      headSprings.current.posY.velocity += 1.6;
      // Curious head cock impulse
      headSprings.current.rotZ.velocity += (Math.random() > 0.5 ? 1 : -1) * 1.3;
      // Antenna spring whip recoil
      antennaSprings.current.rotZ.velocity += (Math.random() - 0.5) * 8.5;
      antennaSprings.current.rotX.velocity += 5.0;
      // Pupil surprise dilation
      eyeSprings.current.pupilScale.velocity += 2.2;
      // Gimbal spin acceleration burst
      gimbalSpeedRef.current += 4.5;
    }
  }, [reactionTrigger]);

  // === 5. AUTONOMOUS LOOK AROUND & EMOTION CYCLE ===
  useEffect(() => {
    let mounted = true;
    const lookAround = () => {
      if (!mounted) return;
      if (Math.random() > 0.4) {
        setIsLookingAround(true);
        setLookTarget({
          x: (Math.random() - 0.5) * 1.5,
          y: (Math.random() - 0.5) * 0.9,
        });
        setTimeout(() => setIsLookingAround(false), 1400 + Math.random() * 800);
      }
      setTimeout(
        lookAround,
        CONFIG.eyes.lookAroundInterval + Math.random() * 2200
      );
    };
    lookAround();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const emotions = Object.keys(CONFIG.emotions);
    let i = 0;
    const cycle = setInterval(() => {
      setEmotion(emotions[i]);
      i = (i + 1) % emotions.length;

      // Random speaking cadence for animated audio equalizer mouth
      if (Math.random() > 0.35) {
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 1800 + Math.random() * 1200);
      }
    }, 4500);
    return () => clearInterval(cycle);
  }, []);

  // === 6. GEOMETRIES & MATERIALS (Sleek High-Contrast Monochrome) ===
  const geo = useMemo(
    () => ({
      head: new THREE.BoxGeometry(1.5, 1.2, 1.2, 4, 4, 4),
      neck: new THREE.CylinderGeometry(0.32, 0.42, 0.28, 24),
      neckRing: new THREE.TorusGeometry(0.38, 0.022, 16, 32),
      face: new THREE.PlaneGeometry(1.2, 0.8),
      eye: new THREE.SphereGeometry(0.12, 32, 32),
      antenna: new THREE.CylinderGeometry(0.035, 0.055, 0.58, 16),
      antennaJoint: new THREE.SphereGeometry(0.065, 16, 16),
      antennaTip: new THREE.SphereGeometry(0.095, 32, 32),
      antennaWave: new THREE.RingGeometry(0.08, 0.12, 32),
      sidePanel: new THREE.PlaneGeometry(1.2, 1.2),
      mouthBar: new THREE.BoxGeometry(0.055, 0.18, 0.02),
    }),
    []
  );

  const mat = useMemo(
    () => ({
      head: new THREE.MeshStandardMaterial({
        color: '#18181b', // Deep titanium zinc
        metalness: 0.85,
        roughness: 0.25,
        emissive: '#111111',
        emissiveIntensity: 0.35,
      }),
      neck: new THREE.MeshStandardMaterial({
        color: '#27272a',
        metalness: 0.9,
        roughness: 0.2,
      }),
      face: new THREE.MeshStandardMaterial({
        color: '#080808', // Deep obsidian glass
        metalness: 0.7,
        roughness: 0.15,
      }),
      side: new THREE.MeshStandardMaterial({
        color: '#ffffff',
        emissive: '#ffffff',
        emissiveIntensity: 1.6,
      }),
      antennaMetal: new THREE.MeshStandardMaterial({
        color: '#3f3f46',
        metalness: 0.95,
        roughness: 0.15,
      }),
    }),
    []
  );

  // Geometric edge lines for crisp 3D facet visibility
  const edges = useMemo(() => new THREE.EdgesGeometry(geo.head), [geo.head]);

  // === 7. 3D SWIRLING PARTICLE VORTEX AURA ===
  const particleData = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    const angles = new Float32Array(count);
    const radii = new Float32Array(count);
    const speeds = new Float32Array(count);
    const verticalDrift = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      angles[i] = Math.random() * Math.PI * 2;
      radii[i] = 1.0 + Math.random() * 0.75;
      speeds[i] = 0.8 + Math.random() * 0.9;
      verticalDrift[i] = (Math.random() - 0.5) * 0.015;

      positions[i * 3] = radii[i] * Math.sin(angles[i]);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1.9;
      positions[i * 3 + 2] = radii[i] * Math.cos(angles[i]);
    }
    return { positions, angles, radii, speeds, verticalDrift, count };
  }, []);

  // === 8. CINEMATIC 3D ANIMATION LOOP (Delta-Time Scaled) ===
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (!headRef.current) return;

    const dt = Math.min(delta, 0.05); // Smooth delta cap
    const emotionData = CONFIG.emotions[emotion] || CONFIG.emotions.neutral;
    const hoverBoost = isHovered ? 1.35 : 1.0;

    // Velocity extraction with speed magnitude
    const vx = velocity?.current?.x || 0;
    const vy = velocity?.current?.y || 0;
    const speed = Math.hypot(vx, vy);

    // --- A. SPRING-DAMPER HEAD MOTION & INERTIA ---
    const breathingSpeed = CONFIG.head.idleSpeed * emotionData.pulseSpeed;
    const idleBreath =
      Math.sin(t * breathingSpeed) * (CONFIG.head.idleAmp * 0.7) * hoverBoost;
    const idleSway = Math.cos(t * breathingSpeed * 0.5) * 0.018;
    const hoverPerk = isHovered ? 0.08 : 0.0;

    // Dynamic banking into turns (-vx * 2.2) and pitch lag (-vy * 1.2)
    const targetBankZ =
      emotionData.headTilt * (isHovered ? 1.3 : 1.0) +
      THREE.MathUtils.clamp(-vx * 2.2, -0.38, 0.38);

    const cursorCurrent = cursor?.current || { x: 0, y: 0 };
    const cursorTarget = isLookingAround ? lookTarget : cursorCurrent;
    const sensitivity = emotionData.energyLevel * (isHovered ? 1.45 : 0.9);

    const targetRotY = cursorTarget.x * sensitivity * 0.75;
    // Rotation X tilts UP when cursor is UP (-cursorTarget.y is negative in right-handed 3D)
    const targetRotX =
      -cursorTarget.y * sensitivity * 0.55 +
      THREE.MathUtils.clamp(-vy * 1.4, -0.28, 0.28);

    const targetPosY = idleBreath + hoverPerk - vy * 0.08;
    const targetPosX = idleSway - vx * 0.08;

    // Evaluate Spring-Damper Physics
    headRef.current.rotation.y = updateSpring(
      headSprings.current.rotY,
      targetRotY,
      75, // Stiffness
      11, // Damping
      dt
    );

    headRef.current.rotation.x = updateSpring(
      headSprings.current.rotX,
      targetRotX,
      75,
      11,
      dt
    );

    headRef.current.rotation.z = updateSpring(
      headSprings.current.rotZ,
      targetBankZ,
      60,
      9,
      dt
    );

    headRef.current.position.y = updateSpring(
      headSprings.current.posY,
      targetPosY,
      90,
      12,
      dt
    );

    headRef.current.position.x = updateSpring(
      headSprings.current.posX,
      targetPosX,
      90,
      12,
      dt
    );

    headRef.current.position.z = Math.sin(t * 0.8) * 0.015;

    // Neck joint follows with smooth elastic lag
    if (neckRef.current) {
      neckRef.current.rotation.y = THREE.MathUtils.lerp(
        neckRef.current.rotation.y,
        headRef.current.rotation.y * 0.4,
        0.12
      );
      neckRef.current.rotation.x = THREE.MathUtils.lerp(
        neckRef.current.rotation.x,
        headRef.current.rotation.x * 0.35,
        0.12
      );
      neckRef.current.position.x = headRef.current.position.x * 0.35;
    }

    // --- B. MULTI-SEGMENT ANTENNA PHYSICS (Whip & Spring Recoil) ---
    if (antennaRef.current) {
      const wobbleSpeed = CONFIG.antenna.wobbleSpeed * 1.2;
      const wobbleAmp = CONFIG.antenna.wobbleAmp * (isHovered ? 1.6 : 1.0);
      const idleWobbleZ = Math.sin(t * wobbleSpeed) * wobbleAmp;
      const idleWobbleX = Math.sin(t * 2.2) * 0.12;

      // Trailing inertia drag from mouse velocity
      const targetAntennaZ = idleWobbleZ - vx * 3.6;
      const targetAntennaX = idleWobbleX - vy * 2.4;

      antennaRef.current.rotation.z = updateSpring(
        antennaSprings.current.rotZ,
        targetAntennaZ,
        140, // Stiff spring for snappy whip
        10, // Low damping for expressive wobble recoil
        dt
      );

      antennaRef.current.rotation.x = updateSpring(
        antennaSprings.current.rotX,
        targetAntennaX,
        140,
        10,
        dt
      );
    }

    // Antenna Radiating 3D Pulse Wave
    if (antennaWaveRef.current) {
      const wavePhase = (t * 1.4) % 1.0;
      antennaWaveRef.current.scale.setScalar(1.0 + wavePhase * 2.6);
      if (antennaWaveRef.current.material) {
        antennaWaveRef.current.material.opacity = (1.0 - wavePhase) * 0.75;
      }
    }

    // --- C. STEREOSCOPIC 3D EYE GAZE, CONVERGENCE & MICRO-SACCADES ---
    // Smooth micro-saccade decay
    saccadeRef.current.decay = THREE.MathUtils.lerp(
      saccadeRef.current.decay,
      0,
      0.1
    );
    const sacX = saccadeRef.current.x * saccadeRef.current.decay;
    const sacY = saccadeRef.current.y * saccadeRef.current.decay;

    // Non-linear eyelid blink animation (Rapid snap shut, elastic bounce open)
    let blinkScale = 1.0;
    if (blinkStateRef.current.isBlinking) {
      const elapsed = performance.now() - blinkStateRef.current.startTime;
      const normalized = Math.min(
        1.0,
        elapsed / blinkStateRef.current.duration
      );

      if (normalized < 0.35) {
        // Fast snap close: 1.0 -> 0.06
        const p = normalized / 0.35;
        blinkScale = THREE.MathUtils.lerp(1.0, 0.06, p * p);
      } else {
        // Elastic bounce open: 0.06 -> 1.05 -> 1.0
        const p = (normalized - 0.35) / 0.65;
        blinkScale = THREE.MathUtils.lerp(
          0.06,
          1.0,
          Math.sin((p * Math.PI) / 2)
        );
      }

      if (normalized >= 1.0) {
        blinkStateRef.current.isBlinking = false;
        blinkScale = 1.0;
      }
    }

    // Pupil Dilation responding to cursor speed, hover, and emotion
    let targetPupilScale = 1.0;
    if (isHovered) {
      targetPupilScale = 1.35;
    } else if (speed > 0.015) {
      targetPupilScale = 1.22;
    } else if (emotion === 'surprised') {
      targetPupilScale = 1.4;
    } else if (emotion === 'angry') {
      targetPupilScale = 0.55;
    }

    const currentPupilScale = updateSpring(
      eyeSprings.current.pupilScale,
      targetPupilScale,
      80,
      12,
      dt
    );

    const eyeDefs = [
      {
        mesh: leftEyeRef.current,
        pupil: leftPupilRef.current,
        baseOffset: -0.4,
        isLeft: true,
      },
      {
        mesh: rightEyeRef.current,
        pupil: rightPupilRef.current,
        baseOffset: 0.4,
        isLeft: false,
      },
    ];

    eyeDefs.forEach(({ mesh: eye, pupil, baseOffset, isLeft }) => {
      if (!eye) return;

      // Stereoscopic convergence angle
      const convergenceOffset = isLeft ? 0.022 : -0.022;

      const eyeTargetX = THREE.MathUtils.clamp(
        cursorTarget.x * 0.28 + sacX + convergenceOffset,
        -CONFIG.eyes.xRange,
        CONFIG.eyes.xRange
      );

      // Eye looks UP when cursor is UP (+cursorTarget.y)
      const eyeTargetY = THREE.MathUtils.clamp(
        cursorTarget.y * 0.22 + sacY,
        -CONFIG.eyes.yRange,
        CONFIG.eyes.yRange
      );

      // Smooth eye position
      const springX = isLeft
        ? eyeSprings.current.leftX
        : eyeSprings.current.rightX;
      const springY = isLeft
        ? eyeSprings.current.leftY
        : eyeSprings.current.rightY;

      eye.position.x = updateSpring(
        springX,
        baseOffset + eyeTargetX,
        90,
        14,
        dt
      );
      eye.position.y = updateSpring(springY, 0.2 + eyeTargetY, 90, 14, dt);

      // 3D Spherical Gaze Rotation
      eye.rotation.y = eyeTargetX * 1.35;
      eye.rotation.x = -eyeTargetY * 1.35;

      // Eyelid snappy blink
      eye.scale.y = blinkScale;
      eye.scale.x = 1.0 + (1.0 - blinkScale) * 0.18;

      if (pupil) {
        pupil.scale.setScalar(currentPupilScale);
      }
    });

    // Dynamic Eyebrows
    const brows = [leftEyebrowRef.current, rightEyebrowRef.current];
    brows.forEach((brow, i) => {
      if (!brow) return;
      const offset = i === 0 ? -1 : 1;
      const targetAngle =
        emotionData.eyebrowAngle * offset * (isHovered ? 1.3 : 1.0);
      brow.rotation.z = THREE.MathUtils.lerp(
        brow.rotation.z,
        targetAngle,
        0.15
      );

      if (emotion === 'surprised') {
        brow.position.y = 0.44 + Math.abs(Math.sin(t * 6)) * 0.08;
      } else if (emotion === 'angry') {
        brow.position.y = THREE.MathUtils.lerp(brow.position.y, 0.36, 0.1);
      } else {
        brow.position.y = THREE.MathUtils.lerp(brow.position.y, 0.42, 0.1);
      }
    });

    // --- D. 3D AUDIO EQUALIZER MOUTH VISUALIZER ---
    mouthBarsRef.current.forEach((bar, idx) => {
      if (!bar) return;
      if (isSpeaking) {
        // High-frequency harmonic audio rhythm
        const harmonic =
          0.3 +
          Math.abs(Math.sin(t * 15 + idx * 1.7)) *
            1.6 *
            emotionData.mouthIntensity;
        bar.scale.y = THREE.MathUtils.lerp(bar.scale.y, harmonic, 0.28);
        bar.position.y = -0.18;
      } else {
        // Curved LED smile
        const curveOffset = Math.abs(idx - 2) * 0.025;
        const smileScale =
          0.35 +
          (emotionData.mouthCurve > 0 ? (2 - Math.abs(idx - 2)) * 0.18 : 0);
        bar.scale.y = THREE.MathUtils.lerp(
          bar.scale.y,
          Math.max(0.18, smileScale),
          0.12
        );
        bar.position.y =
          -0.18 + (emotionData.mouthCurve > 0 ? -curveOffset : curveOffset);
      }
    });

    // --- E. 3-AXIS GYROSCOPIC GIMBAL ENERGY RINGS ---
    // Momentum spin-up responding to mouse velocity
    const targetGimbalSpeed =
      (1.0 + speed * 14 + (isHovered ? 2.0 : 0.0)) * emotionData.pulseSpeed;
    gimbalSpeedRef.current = THREE.MathUtils.lerp(
      gimbalSpeedRef.current,
      targetGimbalSpeed,
      0.08
    );

    energyRingRefs.current.forEach((ring, i) => {
      if (!ring?.material) return;
      const spin = gimbalSpeedRef.current;
      if (i === 0) {
        ring.rotation.x += dt * 1.4 * spin;
        ring.rotation.y += dt * 0.9 * spin;
      } else if (i === 1) {
        ring.rotation.y -= dt * 1.2 * spin;
        ring.rotation.z += dt * 0.8 * spin;
      } else {
        ring.rotation.x = Math.sin(t * 1.4) * 0.55;
        ring.rotation.y += dt * 1.8 * spin;
      }

      const ringPulse =
        1.0 + Math.sin(t * 2.8 + i) * 0.08 * emotionData.energyLevel;
      ring.scale.setScalar(ringPulse * (isHovered ? 1.18 : 1.0));
      ring.material.opacity =
        (0.3 + Math.sin(t * 3.8 + i) * 0.2) * emotionData.energyLevel;
    });

    // --- F. 3D SWIRLING PARTICLE VORTEX AURA ---
    if (particlesRef.current?.geometry?.attributes?.position) {
      const posAttr = particlesRef.current.geometry.attributes.position;
      const positions = posAttr.array;
      const vortexSpeed =
        (0.55 + speed * 12 + (isHovered ? 1.2 : 0.0)) * emotionData.pulseSpeed;

      for (let i = 0; i < particleData.count; i++) {
        particleData.angles[i] += vortexSpeed * 0.02 * particleData.speeds[i];
        const theta = particleData.angles[i];
        const r = particleData.radii[i] * (isHovered ? 1.3 : 1.0);

        positions[i * 3] = r * Math.sin(theta);
        positions[i * 3 + 1] += particleData.verticalDrift[i];

        // Wrap particles within vertical bounds
        if (positions[i * 3 + 1] > 1.3) positions[i * 3 + 1] = -1.1;
        if (positions[i * 3 + 1] < -1.1) positions[i * 3 + 1] = 1.3;

        positions[i * 3 + 2] = r * Math.cos(theta);
      }
      posAttr.needsUpdate = true;

      if (particlesRef.current.material) {
        particlesRef.current.material.opacity =
          0.4 + 0.6 * emotionData.energyLevel;
      }
    }

    // --- G. DIGITAL PHOSPHOR SCANLINE & GLOWS ---
    if (scanLineRef.current?.material) {
      scanLineRef.current.position.y = -0.45 + ((t * 1.1) % 1.4);
      scanLineRef.current.material.opacity =
        0.7 - Math.abs(scanLineRef.current.position.y) * 0.4;
    }

    if (hologramRef.current?.material) {
      hologramRef.current.material.opacity = 0.16 + Math.sin(t * 2.4) * 0.09;
    }

    if (glowRef.current?.material) {
      const pulseValue =
        0.1 +
        Math.sin(t * emotionData.pulseSpeed * 3) *
          0.06 *
          emotionData.energyLevel;
      glowRef.current.material.opacity = pulseValue * hoverBoost;
      glowRef.current.scale.setScalar(
        1.03 + Math.sin(t * emotionData.pulseSpeed * 1.8) * 0.02
      );
    }

    if (outerGlowRef.current?.material) {
      outerGlowRef.current.material.opacity =
        0.05 + Math.sin(t * emotionData.pulseSpeed) * 0.035;
      outerGlowRef.current.scale.setScalar(
        1.08 + Math.cos(t * emotionData.pulseSpeed * 0.9) * 0.02
      );
    }

    // Side panels breathing
    const sideIntensity =
      0.9 + Math.sin(t * breathingSpeed) * 0.45 * hoverBoost;
    if (leftSidePanelRef.current?.material) {
      leftSidePanelRef.current.material.emissiveIntensity = sideIntensity;
    }
    if (rightSidePanelRef.current?.material) {
      rightSidePanelRef.current.material.emissiveIntensity = sideIntensity;
    }

    // High-emissive eye glow
    const eyePulse =
      (1.0 +
        Math.sin(t * emotionData.pulseSpeed * 3) *
          0.28 *
          emotionData.energyLevel) *
      hoverBoost;

    if (leftEyeRef.current?.material) {
      leftEyeRef.current.material.emissiveIntensity =
        (isHovered ? 4.8 : 3.4) * eyePulse;
    }
    if (rightEyeRef.current?.material) {
      rightEyeRef.current.material.emissiveIntensity =
        (isHovered ? 4.8 : 3.4) * eyePulse;
    }
  });

  const emotionData = CONFIG.emotions[emotion] || CONFIG.emotions.neutral;

  return (
    <group>
      {/* Floating Neck Chassis Collar */}
      <group ref={neckRef} position={[0, -0.65, 0]}>
        <mesh geometry={geo.neck} material={mat.neck} />
        <mesh geometry={geo.neckRing} position={[0, 0.08, 0]}>
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Main Articulated 3D Head Group */}
      <group ref={headRef}>
        {/* Head Core Hull */}
        <mesh
          geometry={geo.head}
          material={mat.head}
          castShadow
          receiveShadow
        />

        {/* High-Tech Bevel Wireframe Contours */}
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.22} />
        </lineSegments>

        {/* Side Energy Vent Panels */}
        <mesh
          ref={leftSidePanelRef}
          geometry={geo.sidePanel}
          material={mat.side}
          position={[-0.76, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          ref={rightSidePanelRef}
          geometry={geo.sidePanel}
          material={mat.side}
          position={[0.76, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />

        {/* Inner Volumetric Glow */}
        <mesh ref={glowRef} scale={1.03}>
          <boxGeometry args={[1.5, 1.2, 1.2]} />
          <meshBasicMaterial
            color={emotionData.eyeColor}
            transparent
            opacity={0.12}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Outer Radiant Atmospheric Glow */}
        <mesh ref={outerGlowRef} scale={1.08}>
          <boxGeometry args={[1.5, 1.2, 1.2]} />
          <meshBasicMaterial
            color={emotionData.secondaryColor}
            transparent
            opacity={0.06}
            side={THREE.BackSide}
          />
        </mesh>

        {/* Face Visor Panel */}
        <mesh geometry={geo.face} position={[0, 0, 0.61]} material={mat.face} />

        {/* Hologram Display Screen */}
        <mesh ref={hologramRef} position={[0, 0, 0.63]}>
          <planeGeometry args={[1.1, 0.7]} />
          <meshBasicMaterial
            color={emotionData.eyeColor}
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Dynamic Digital Phosphor Scanline */}
        <mesh ref={scanLineRef} position={[0, 0, 0.62]}>
          <planeGeometry args={[1.2, 0.025]} />
          <meshBasicMaterial
            color={emotionData.eyeColor}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Stereoscopic 3D Eyes */}
        {[
          { ref: leftEyeRef, pupilRef: leftPupilRef, x: -0.4 },
          { ref: rightEyeRef, pupilRef: rightPupilRef, x: 0.4 },
        ].map(({ ref, pupilRef, x }, i) => (
          <group key={i}>
            {/* Eye Sphere */}
            <mesh ref={ref} position={[x, 0.2, 0.65]}>
              <sphereGeometry args={[0.12, 32, 32]} />
              <meshStandardMaterial
                emissive={emotionData.eyeColor}
                emissiveIntensity={isHovered ? 4.8 : 3.4}
                color={emotionData.eyeColor}
                metalness={0.7}
                roughness={0.2}
              />
            </mesh>

            {/* Inner Atmospheric Halo */}
            <mesh position={[x, 0.2, 0.65]} scale={1.6}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshBasicMaterial
                color={emotionData.eyeColor}
                transparent
                opacity={0.4}
                side={THREE.BackSide}
              />
            </mesh>

            {/* Outer Atmospheric Halo */}
            <mesh position={[x, 0.2, 0.65]} scale={2.1}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshBasicMaterial
                color={emotionData.secondaryColor}
                transparent
                opacity={0.2}
                side={THREE.BackSide}
              />
            </mesh>

            {/* Specular Glint Highlight */}
            <mesh position={[x + 0.04, 0.24, 0.72]} scale={0.35}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
            </mesh>

            {/* Pupil */}
            <mesh ref={pupilRef} position={[x, 0.2, 0.78]}>
              <sphereGeometry args={[0.035, 16, 16]} />
              <meshStandardMaterial
                color="#000000"
                metalness={0.1}
                roughness={0.6}
              />
            </mesh>

            {/* Eyelid Contour Rim */}
            <mesh position={[x, 0.16, 0.74]}>
              <ringGeometry args={[0.12, 0.14, 32]} />
              <meshBasicMaterial color="#000000" transparent opacity={0.2} />
            </mesh>
          </group>
        ))}

        {/* Dynamic Eyebrows */}
        <mesh
          ref={leftEyebrowRef}
          position={[-0.45, 0.42, 0.72]}
          rotation={[0, 0, 0]}
        >
          <boxGeometry args={[0.35, 0.06, 0.02]} />
          <meshStandardMaterial
            color={emotionData.secondaryColor}
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>

        <mesh
          ref={rightEyebrowRef}
          position={[0.45, 0.42, 0.72]}
          rotation={[0, 0, 0]}
        >
          <boxGeometry args={[0.35, 0.06, 0.02]} />
          <meshStandardMaterial
            color={emotionData.secondaryColor}
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>

        {/* Articulated Antenna with Radiating 3D Pulse Wave */}
        <group ref={antennaRef} position={[0, 0.7, 0.15]}>
          <mesh
            geometry={geo.antenna}
            position={[0, 0, 0]}
            material={mat.antennaMetal}
          />
          <mesh
            geometry={geo.antennaJoint}
            position={[0, 0.18, 0]}
            material={mat.antennaMetal}
          />

          {/* Glowing Orb Tip */}
          <mesh
            ref={antennaTipRef}
            geometry={geo.antennaTip}
            position={[0, 0.33, 0]}
          >
            <meshStandardMaterial
              emissive={emotionData.eyeColor}
              emissiveIntensity={2.2}
              color={emotionData.eyeColor}
            />
          </mesh>

          {/* Antenna Static Glow */}
          <mesh position={[0, 0.33, 0]} scale={1.2}>
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshBasicMaterial
              color={emotionData.secondaryColor}
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* Radiating 3D Signal Wave */}
          <mesh
            ref={antennaWaveRef}
            position={[0, 0.33, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <ringGeometry args={[0.08, 0.12, 32]} />
            <meshBasicMaterial
              color={emotionData.eyeColor}
              transparent
              opacity={0.65}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>

        {/* 3D Reactive Audio Equalizer Mouth Visualizer */}
        <group position={[0, -0.18, 0.72]}>
          {[-0.16, -0.08, 0, 0.08, 0.16].map((xPos, idx) => (
            <mesh
              key={idx}
              ref={(el) => (mouthBarsRef.current[idx] = el)}
              position={[xPos, 0, 0]}
              geometry={geo.mouthBar}
            >
              <meshStandardMaterial
                color={emotionData.secondaryColor}
                emissive={emotionData.eyeColor}
                emissiveIntensity={0.85}
                transparent
                opacity={0.95}
              />
            </mesh>
          ))}
        </group>

        {/* 3-Axis Gyroscopic Gimbal Energy Rings */}
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            ref={(el) => (energyRingRefs.current[i] = el)}
            position={[0, 0, 0.58 - i * 0.03]}
            rotation={[
              i === 0 ? Math.PI / 3 : i === 1 ? 0 : Math.PI / 6,
              i === 0 ? 0 : i === 1 ? Math.PI / 4 : Math.PI / 6,
              0,
            ]}
            scale={1 + i * 0.12}
          >
            <torusGeometry
              args={[0.26 + i * 0.08, 0.012 + i * 0.004, 12, 64]}
            />
            <meshBasicMaterial
              color={emotionData.eyeColor}
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}

        {/* 3D Swirling Particle Vortex Aura */}
        <points ref={particlesRef} position={[0, 0, 0.5]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleData.count}
              array={particleData.positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.025}
            transparent
            opacity={0.85}
            depthWrite={false}
            color={emotionData.eyeColor}
          />
        </points>
      </group>
    </group>
  );
}
