import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Ultra-Enhanced Config (unchanged)
import CONFIG from '../Config/robotConfig.js';


export default function RobotHead({ cursor, isHovered }) {
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const antennaRef = useRef();
  const leftEyebrowRef = useRef();
  const rightEyebrowRef = useRef();
  const glowRef = useRef();
  const outerGlowRef = useRef();
  const particlesRef = useRef();
  const scanLineRef = useRef();
  const energyRingRefs = useRef([]);
  const hologramRef = useRef();
  const mouthRef = useRef();
  const leftPupilRef = useRef();
  const rightPupilRef = useRef();

  const [blinkState, setBlinkState] = useState(1);
  const [emotion, setEmotion] = useState('neutral');
  const [isNodding, setIsNodding] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLookingAround, setIsLookingAround] = useState(false);
  const [lookTarget, setLookTarget] = useState({ x: 0, y: 0 });
  const [screenEffect, setScreenEffect] = useState(0);
  const [waveEffect, setWaveEffect] = useState(0);

  // === Enhanced Blink Logic ===
  useEffect(() => {
    let mounted = true;
    const blinkLoop = () => {
      if (!mounted) return;
      const emotionData = CONFIG.emotions[emotion];
      const blinkIntensity =
        emotion === 'sleepy' ? 0.3 : emotion === 'surprised' ? 0.5 : 0.1;
      setBlinkState(blinkIntensity);
      setTimeout(() => setBlinkState(1), CONFIG.eyes.blinkDuration);
      const nextBlink =
        Math.random() *
          (CONFIG.eyes.blinkInterval[1] - CONFIG.eyes.blinkInterval[0]) +
        CONFIG.eyes.blinkInterval[0];
      setTimeout(blinkLoop, nextBlink * (emotion === 'sleepy' ? 0.5 : 1));
    };
    blinkLoop();
    return () => {
      mounted = false;
    };
  }, [emotion]);

  // === Look Around Behavior ===
  useEffect(() => {
    let mounted = true;
    const lookAround = () => {
      if (!mounted) return;
      if (Math.random() > 0.4) {
        setIsLookingAround(true);
        setLookTarget({
          x: (Math.random() - 0.5) * 1.5,
          y: (Math.random() - 0.5) * 1,
        });
        setTimeout(
          () => setIsLookingAround(false),
          1500 + Math.random() * 1000
        );
      }
      setTimeout(
        lookAround,
        CONFIG.eyes.lookAroundInterval + Math.random() * 2000
      );
    };
    lookAround();
    return () => {
      mounted = false;
    };
  }, []);

  // === Ultra-Enhanced Emotion Cycle ===
  useEffect(() => {
    const emotions = Object.keys(CONFIG.emotions);
    let i = 0;
    const cycle = setInterval(() => {
      setEmotion(emotions[i]);
      i = (i + 1) % emotions.length;

      // Trigger animations based on next emotion (i is already incremented)
      const nextEmotion = emotions[i];
      if (
        nextEmotion === 'happy' ||
        nextEmotion === 'excited' ||
        nextEmotion === 'love'
      ) {
        setIsNodding(true);
        setIsBouncing(true);
        setTimeout(() => {
          setIsNodding(false);
          setIsBouncing(false);
        }, 1800);
      }
      if (nextEmotion === 'confused' || nextEmotion === 'thinking') {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 1500);
      }
      if (nextEmotion === 'surprised') {
        setScreenEffect(1);
        setTimeout(() => setScreenEffect(0), 800);
      }
      if (nextEmotion === 'angry') {
        setWaveEffect(1);
        setTimeout(() => setWaveEffect(0), 1000);
      }

      // Random speaking
      if (Math.random() > 0.5) {
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 1500 + Math.random() * 1000);
      }
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  // === Memoized geometry & materials ===
  const geo = useMemo(
    () => ({
      head: new THREE.BoxGeometry(1.5, 1.2, 1.2, 4, 4, 4),
      face: new THREE.PlaneGeometry(1.2, 0.8),
      eye: new THREE.SphereGeometry(0.12, 32, 32),
      antenna: new THREE.CylinderGeometry(0.04, 0.06, 0.6, 16),
      antennaTip: new THREE.SphereGeometry(0.09, 32, 32),
      energyRing: new THREE.TorusGeometry(0.15, 0.02, 16, 32),
    }),
    []
  );

  const mat = useMemo(
    () => ({
      head: new THREE.MeshStandardMaterial({
        color: '#0a0a0a',
        metalness: 0.98,
        roughness: 0.12,
        emissive: '#001a1a',
        emissiveIntensity: 0.4,
      }),
      face: new THREE.MeshStandardMaterial({
        color: '#0a1a1a',
        metalness: 0.85,
        roughness: 0.25,
      }),
      side: new THREE.MeshStandardMaterial({
        color: '#00ffff',
        emissive: '#00ffff',
        emissiveIntensity: 1.2,
      }),
    }),
    []
  );

  // Enhanced particle system
  const particles = useMemo(() => {
    const count = 80;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 0.8 + Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    return { positions, velocities, count };
  }, []);

  // Initialize particles geometry once
  useEffect(() => {
    if (!particlesRef.current) {
      // nothing to do yet
      return;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      'position',
      new THREE.BufferAttribute(particles.positions, 3)
    );
    particlesRef.current.geometry = geom;
    particlesRef.current.material = new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      // color will be updated each frame via material.color.set
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  // === ULTRA-ENHANCED ANIMATIONS ===
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!headRef.current) return;

    const emotionData = CONFIG.emotions[emotion];
    const hoverBoost = isHovered ? 1.3 : 1;

    // === HEAD ANIMATIONS ===
    const breathingAmp =
      CONFIG.head.idleAmp * emotionData.energyLevel * hoverBoost;
    const breathingSpeed = CONFIG.head.idleSpeed * emotionData.pulseSpeed;
    const primaryBreath = Math.sin(t * breathingSpeed) * breathingAmp;
    const secondaryBreath =
      Math.sin(t * breathingSpeed * 0.5) * breathingAmp * 0.3;
    headRef.current.position.y = primaryBreath + secondaryBreath;

    if (isBouncing) {
      headRef.current.position.y +=
        Math.abs(Math.sin(t * 6)) * CONFIG.head.bounceAmp;
    }

    const targetTilt = emotionData.headTilt * (isHovered ? 1.2 : 1);
    headRef.current.rotation.z = THREE.MathUtils.lerp(
      headRef.current.rotation.z,
      targetTilt,
      0.06
    );

    if (isNodding) {
      headRef.current.rotation.x +=
        Math.sin(t * 7) * 0.35 * Math.cos(t * 3) * 0.5;
    }

    if (isShaking) {
      headRef.current.rotation.y +=
        Math.sin(t * 12) * 0.18 * Math.cos(t * 5) * 0.3;
    }

    if (!isNodding && !isShaking) {
      headRef.current.position.x =
        Math.sin(t * 0.4) * 0.02 + Math.cos(t * 0.7) * 0.015;
      headRef.current.position.z = Math.cos(t * 0.5) * 0.015;
      headRef.current.rotation.z += Math.sin(t * 0.25) * 0.008;
    }

    const cursorTarget = isLookingAround ? lookTarget : cursor.current;
    const sensitivity = emotionData.energyLevel * (isHovered ? 1.2 : 0.8);
    const tx = cursorTarget.x * sensitivity * 0.7;
    const ty = -cursorTarget.y * sensitivity * 0.5;

    if (!isNodding && !isShaking) {
      const lerpSpeed = emotion === 'sleepy' ? 0.03 : CONFIG.head.lerp;
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        tx,
        lerpSpeed
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        ty,
        lerpSpeed
      );
    }

    // === EYE ANIMATIONS ===
    const eyes = [
      { mesh: leftEyeRef.current, pupil: leftPupilRef.current },
      { mesh: rightEyeRef.current, pupil: rightPupilRef.current },
    ];

    eyes.forEach(({ mesh: eye, pupil }, i) => {
      if (!eye) return;
      const offset = i === 0 ? -0.4 : 0.4;
      const eyeX = THREE.MathUtils.clamp(
        cursorTarget.x * 0.25,
        -CONFIG.eyes.xRange,
        CONFIG.eyes.xRange
      );
      const eyeY = THREE.MathUtils.clamp(
        -cursorTarget.y * 0.18,
        -CONFIG.eyes.yRange,
        CONFIG.eyes.yRange
      );

      eye.position.x = THREE.MathUtils.lerp(
        eye.position.x,
        offset + eyeX,
        CONFIG.eyes.lerp
      );
      eye.position.y = THREE.MathUtils.lerp(
        eye.position.y,
        0.2 + eyeY,
        CONFIG.eyes.lerp
      );

      const blinkScale = THREE.MathUtils.lerp(eye.scale.y, blinkState, 0.25);
      eye.scale.y = blinkScale;
      eye.scale.x = THREE.MathUtils.lerp(
        eye.scale.x,
        1 + (1 - blinkScale) * 0.1,
        0.2
      );

      const targetScale = emotionData.eyeScale * (isHovered ? 1.1 : 1);
      eye.scale.x = THREE.MathUtils.lerp(eye.scale.x, targetScale, 0.06);
      eye.scale.z = THREE.MathUtils.lerp(eye.scale.z, targetScale, 0.06);

      if (pupil) {
        const pupilScale =
          emotion === 'surprised'
            ? 1.3
            : emotion === 'angry'
              ? 0.6
              : emotion === 'love'
                ? 1.2
                : 1;
        pupil.scale.setScalar(
          THREE.MathUtils.lerp(pupil.scale.x, pupilScale, 0.05)
        );
      }

      if (emotion === 'angry') {
        eye.position.y += Math.sin(t * 4) * 0.015;
      }
      if (emotion === 'excited') {
        eye.position.x += Math.sin(t * 6 + i * Math.PI) * 0.015;
        eye.position.y += Math.cos(t * 5 + i * Math.PI) * 0.01;
      }
      if (emotion === 'sleepy') {
        eye.position.y -= 0.03;
      }
    });

    // === EYEBROW ANIMATIONS ===
    const eyebrows = [leftEyebrowRef.current, rightEyebrowRef.current];
    eyebrows.forEach((brow, i) => {
      if (!brow) return;
      const offset = i === 0 ? -1 : 1;
      const targetAngle =
        emotionData.eyebrowAngle * offset * (isHovered ? 1.2 : 1);
      brow.rotation.z = THREE.MathUtils.lerp(brow.rotation.z, targetAngle, 0.1);

      if (emotion === 'surprised') {
        brow.position.y = 0.42 + Math.abs(Math.sin(t * 5)) * 0.08;
      } else if (emotion === 'confused') {
        brow.position.x += Math.sin(t * 3 + i * Math.PI) * 0.02;
      } else if (emotion === 'angry') {
        brow.position.y = THREE.MathUtils.lerp(brow.position.y, 0.38, 0.05);
      } else {
        brow.position.y = THREE.MathUtils.lerp(brow.position.y, 0.42, 0.05);
      }
    });

    // === MOUTH ANIMATIONS ===
    if (mouthRef.current) {
      const mouthCurve = emotionData.mouthCurve * (isHovered ? 1.15 : 1);
      mouthRef.current.rotation.z = THREE.MathUtils.lerp(
        mouthRef.current.rotation.z,
        mouthCurve * 0.6,
        0.08
      );

      if (isSpeaking) {
        mouthRef.current.scale.x = 1 + Math.sin(t * 15) * 0.15;
        mouthRef.current.scale.y = 1 + Math.abs(Math.sin(t * 15)) * 0.2;
      } else {
        mouthRef.current.scale.x = THREE.MathUtils.lerp(
          mouthRef.current.scale.x,
          1,
          0.1
        );
        mouthRef.current.scale.y = THREE.MathUtils.lerp(
          mouthRef.current.scale.y,
          1,
          0.1
        );
      }

      mouthRef.current.scale.x +=
        Math.sin(t * emotionData.pulseSpeed * 2) * 0.05;
    }

    // === ANTENNA ANIMATIONS ===
    if (antennaRef.current) {
      const wobbleIntensity = emotionData.energyLevel * (isHovered ? 1.4 : 1);

      antennaRef.current.rotation.z =
        Math.sin(t * CONFIG.antenna.wobbleSpeed) *
          CONFIG.antenna.wobbleAmp *
          wobbleIntensity +
        Math.cos(t * CONFIG.antenna.wobbleSpeed * 0.6) * 0.08 * wobbleIntensity;
      antennaRef.current.rotation.x =
        Math.sin(t * 1.8) * 0.12 * wobbleIntensity +
        Math.cos(t * 2.3) * 0.06 * wobbleIntensity;

      if (emotion === 'thinking') {
        antennaRef.current.position.x = Math.sin(t * 2.5) * 0.15;
        antennaRef.current.position.z = Math.cos(t * 2.5) * 0.15;
      } else if (emotion === 'excited') {
        antennaRef.current.position.y = 0.9 + Math.abs(Math.sin(t * 4)) * 0.05;
      } else {
        antennaRef.current.position.x = THREE.MathUtils.lerp(
          antennaRef.current.position.x,
          0,
          0.1
        );
        antennaRef.current.position.z = THREE.MathUtils.lerp(
          antennaRef.current.position.z,
          0,
          0.1
        );
        antennaRef.current.position.y = THREE.MathUtils.lerp(
          antennaRef.current.position.y,
          0.9,
          0.1
        );
      }
    }

    // === GLOW EFFECTS ===
    if (glowRef.current) {
      const pulseValue =
        0.09 +
        Math.sin(t * emotionData.pulseSpeed * 2.5) *
          0.06 *
          emotionData.energyLevel;
      glowRef.current.material.opacity = pulseValue * hoverBoost;
      glowRef.current.scale.setScalar(
        1.03 + Math.sin(t * emotionData.pulseSpeed * 1.5) * 0.015
      );
    }

    if (outerGlowRef.current) {
      outerGlowRef.current.material.opacity =
        0.04 + Math.sin(t * emotionData.pulseSpeed) * 0.03;
      outerGlowRef.current.scale.setScalar(
        1.08 + Math.cos(t * emotionData.pulseSpeed * 0.8) * 0.02
      );
    }

    // === ENERGY RINGS ===
    energyRingRefs.current.forEach((ring, i) => {
      if (!ring) return;
      ring.rotation.x = t * (0.5 + i * 0.3) * emotionData.pulseSpeed;
      ring.rotation.y = t * (0.3 + i * 0.2) * emotionData.pulseSpeed;
      ring.scale.setScalar(
        1 + Math.sin(t * 2 + i) * 0.1 * emotionData.energyLevel
      );
      ring.material.opacity =
        (0.3 + Math.sin(t * 3 + i) * 0.2) * emotionData.energyLevel;
    });

    // === SCAN LINE ===
    if (scanLineRef.current) {
      scanLineRef.current.position.y = -0.5 + ((t * 0.8) % 1.5);
      scanLineRef.current.material.opacity =
        0.6 - Math.abs(scanLineRef.current.position.y) * 0.3;
    }

    // === HOLOGRAM EFFECT ===
    if (hologramRef.current) {
      hologramRef.current.rotation.y = t * 0.5;
      hologramRef.current.material.opacity = 0.15 + Math.sin(t * 2) * 0.1;
    }

    // === PARTICLE SYSTEM ===
    if (particlesRef.current && particlesRef.current.geometry) {
      particlesRef.current.rotation.y = t * 0.3 * emotionData.pulseSpeed;
      const positionAttribute =
        particlesRef.current.geometry.attributes.position;
      const positions = positionAttribute?.array;
      const velocities = particles.velocities;

      if (positions)
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i] * emotionData.energyLevel;
          positions[i + 1] +=
            velocities[i + 1] * emotionData.energyLevel +
            Math.sin(t + i) * 0.005;
          positions[i + 2] += velocities[i + 2] * emotionData.energyLevel;

          const distance = Math.sqrt(
            positions[i] ** 2 + positions[i + 1] ** 2 + positions[i + 2] ** 2
          );
          if (distance > 2) {
            const radius = 0.8;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            positions[i] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = radius * Math.cos(phi);
          }
        }
      if (particlesRef.current.geometry.attributes.position)
        particlesRef.current.geometry.attributes.position.needsUpdate = true;

      // update particle color/opacity with emotion
      if (particlesRef.current.material) {
        particlesRef.current.material.opacity =
          0.25 + 0.75 * emotionData.energyLevel;
        particlesRef.current.material.color.set(emotionData.eyeColor);
      }
    }

    // === PULSE INTENSITY ===
    const pulseValue =
      1 +
      Math.sin(t * emotionData.pulseSpeed * 3) * 0.35 * emotionData.energyLevel;
    setPulseIntensity(pulseValue * hoverBoost);
  });

  const emotionData = CONFIG.emotions[emotion];

  return (
    <group ref={headRef}>
      {/* Head Core with segments */}
      <mesh geometry={geo.head} material={mat.head} castShadow receiveShadow />

      {/* Multi-layer glow system */}
      <mesh ref={glowRef} scale={1.03}>
        <boxGeometry args={[1.5, 1.2, 1.2]} />
        <meshBasicMaterial
          color={emotionData.eyeColor}
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      <mesh ref={outerGlowRef} scale={1.08}>
        <boxGeometry args={[1.5, 1.2, 1.2]} />
        <meshBasicMaterial
          color={emotionData.secondaryColor}
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Face panel */}
      <mesh geometry={geo.face} position={[0, 0, 0.61]} material={mat.face} />

      {/* Hologram display */}
      <mesh ref={hologramRef} position={[0, 0, 0.63]}>
        <planeGeometry args={[1.1, 0.7]} />
        <meshBasicMaterial
          color={emotionData.eyeColor}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Scan line effect */}
      <mesh ref={scanLineRef} position={[0, 0, 0.62]}>
        <planeGeometry args={[1.2, 0.02]} />
        <meshBasicMaterial
          color={emotionData.eyeColor}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Eyes with enhanced details */}
      {[
        { ref: leftEyeRef, pupilRef: leftPupilRef, x: -0.4 },
        { ref: rightEyeRef, pupilRef: rightPupilRef, x: 0.4 },
      ].map(({ ref, pupilRef, x }, i) => (
        <group key={i}>
          {/* Eye sphere */}
          <mesh ref={ref} position={[x, 0.2, 0.65]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial
              emissive={emotionData.eyeColor}
              emissiveIntensity={(isHovered ? 4.2 : 3) * pulseIntensity}
              color={emotionData.eyeColor}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>

          {/* Eye glow */}
          <mesh position={[x, 0.2, 0.65]} scale={1.6}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial
              color={emotionData.eyeColor}
              transparent
              opacity={0.4 * pulseIntensity}
              side={THREE.BackSide}
            />
          </mesh>

          {/* Secondary glow */}
          <mesh position={[x, 0.2, 0.65]} scale={2}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshBasicMaterial
              color={emotionData.secondaryColor}
              transparent
              opacity={0.2 * pulseIntensity}
              side={THREE.BackSide}
            />
          </mesh>

          {/* Reflection highlight (completed) */}
          <mesh position={[x + 0.04, 0.24, 0.72]} scale={0.35}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshBasicMaterial color={'#ffffff'} transparent opacity={0.85} />
          </mesh>

          {/* Pupil (small inner sphere) */}
          <mesh ref={pupilRef} position={[x, 0.2, 0.78]}>
            <sphereGeometry args={[0.035, 16, 16]} />
            <meshStandardMaterial
              color={'#000000'}
              metalness={0.1}
              roughness={0.6}
            />
          </mesh>

          {/* Simple eyelid rim for a bit more silhouette */}
          <mesh position={[x, 0.16, 0.74]}>
            <ringGeometry args={[0.12, 0.14, 32]} />
            <meshBasicMaterial color={'#000000'} transparent opacity={0.15} />
          </mesh>
        </group>
      ))}

      {/* Eyebrows */}
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

      {/* Antenna */}
      <group ref={antennaRef} position={[0, 0.7, 0.15]}>
        <mesh geometry={geo.antenna} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={'#222222'}
            metalness={0.9}
            roughness={0.25}
          />
        </mesh>
        <mesh geometry={geo.antennaTip} position={[0, 0.33, 0]}>
          <meshStandardMaterial
            emissive={emotionData.eyeColor}
            emissiveIntensity={1.6}
            color={emotionData.eyeColor}
          />
        </mesh>
        {/* antenna signal glow */}
        <mesh position={[0, 0.46, 0]} scale={0.9}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshBasicMaterial
            color={emotionData.secondaryColor}
            transparent
            opacity={0.25}
          />
        </mesh>
      </group>

      {/* Mouth (simple rounded plane) */}
      <group ref={mouthRef} position={[0, -0.18, 0.73]}>
        <mesh>
          <planeGeometry args={[0.45, 0.14, 8, 1]} />
          <meshStandardMaterial
            color={emotionData.secondaryColor}
            emissive={emotionData.eyeColor}
            emissiveIntensity={0.6}
            transparent
            opacity={0.95}
          />
        </mesh>
      </group>

      {/* Energy Rings */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => (energyRingRefs.current[i] = el)}
          position={[0, 0, 0.6 - i * 0.02]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1 + i * 0.08}
        >
          <torusGeometry args={[0.24 + i * 0.06, 0.01 + i * 0.005, 8, 64]} />
          <meshBasicMaterial
            color={emotionData.eyeColor}
            transparent
            opacity={0.25}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Particles (Points) */}
      <points ref={particlesRef} position={[0, 0, 0.6]}>
        <bufferGeometry />
        {/* geometry & material are created in useEffect; placeholder to satisfy JSX */}
      </points>
    </group>
  );
}
