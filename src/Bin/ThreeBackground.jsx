import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Realistic Earth with procedural textures
function RealisticEarth() {
  const earthRef = useRef(null);
  const cloudsRef = useRef(null);
  const atmosphereRef = useRef(null);

  // Create procedural earth texture with continents
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 4096;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');

    // Deep ocean base - realistic blue
    // Deep ocean base - darker, more realistic blue-black
    const oceanGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    oceanGradient.addColorStop(0, '#050d1f');
    oceanGradient.addColorStop(0.5, '#061a2e');
    oceanGradient.addColorStop(1, '#050d1f');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add ocean depth variation and waves
    for (let i = 0; i < 12000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 30 + 15;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      const opacity = Math.random() * 0.3;
      gradient.addColorStop(0, `rgba(16, 78, 139, ${opacity})`);
      gradient.addColorStop(1, 'rgba(10, 36, 99, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }

    // Helper function to draw detailed landmass
    const drawLand = (x, y, w, h, rotation, detail = 20) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      // Base land color - realistic brown-green
      const landGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(w, h));
      landGradient.addColorStop(0, '#3d5a3d');
      landGradient.addColorStop(0.4, '#4a6741');
      landGradient.addColorStop(0.7, '#5c7a51');
      landGradient.addColorStop(1, '#2d4a2d');
      ctx.fillStyle = landGradient;
      
      // Create irregular continent shape
      ctx.beginPath();
      ctx.ellipse(0, 0, w, h, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Add terrain details
      for (let i = 0; i < detail; i++) {
        const offsetX = (Math.random() - 0.5) * w * 1.5;
        const offsetY = (Math.random() - 0.5) * h * 1.5;
        const size = Math.random() * Math.min(w, h) * 0.3;
        
        ctx.fillStyle = Math.random() > 0.5 ? '#5c7a51' : '#3d5a3d';
        ctx.beginPath();
        ctx.ellipse(offsetX, offsetY, size, size * 0.8, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    };

    // North America - more detailed
    drawLand(600, 500, 350, 300, -0.3, 35);
    drawLand(450, 400, 150, 120, 0.2, 15); // Greenland
    
    // South America
    drawLand(750, 950, 200, 350, 0.15, 25);
    
    // Europe
    drawLand(2100, 450, 250, 180, 0, 30);
    
    // Africa
    drawLand(2150, 800, 300, 400, 0.1, 30);
    
    // Asia - large and detailed
    drawLand(2900, 500, 500, 350, 0, 50);
    
    // India subcontinent
    drawLand(2800, 750, 150, 200, 0.3, 15);
    
    // Australia
    drawLand(3300, 1050, 250, 180, 0, 20);
    
    // Antarctica (partial, at bottom)
    ctx.fillStyle = '#e8f4f8';
    ctx.fillRect(0, canvas.height - 150, canvas.width, 150);
    
    // Southeast Asian islands
    for (let i = 0; i < 15; i++) {
      const ix = 2800 + Math.random() * 600;
      const iy = 850 + Math.random() * 250;
      ctx.fillStyle = '#4a6741';
      ctx.beginPath();
      ctx.arc(ix, iy, Math.random() * 20 + 10, 0, Math.PI * 2);
      ctx.fill();
    }

    // Add mountain ranges (Himalayas, Andes, Rockies)
    ctx.fillStyle = '#8b7355';
    const mountains = [
      { x: 2850, y: 600, count: 40 },
      { x: 700, y: 900, count: 30 },
      { x: 550, y: 500, count: 25 }
    ];
    
    mountains.forEach(range => {
      for (let i = 0; i < range.count; i++) {
        const mx = range.x + (Math.random() - 0.5) * 200;
        const my = range.y + (Math.random() - 0.5) * 150;
        const size = Math.random() * 12 + 5;
        ctx.beginPath();
        ctx.arc(mx, my, size, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Deserts (Sahara, Arabian, Gobi)
    ctx.fillStyle = '#d4a574';
    const deserts = [
      { x: 2100, y: 650, w: 400, h: 200 },
      { x: 2600, y: 600, w: 300, h: 150 },
      { x: 3100, y: 1100, w: 200, h: 150 }
    ];
    
    deserts.forEach(desert => {
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.ellipse(desert.x, desert.y, desert.w, desert.h, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Polar ice caps with realistic gradients
    const northPolar = ctx.createLinearGradient(0, 0, 0, 200);
    northPolar.addColorStop(0, '#ffffff');
    northPolar.addColorStop(0.5, '#e8f4f8');
    northPolar.addColorStop(1, 'rgba(232, 244, 248, 0)');
    ctx.fillStyle = northPolar;
    ctx.fillRect(0, 0, canvas.width, 200);
    
    const southPolar = ctx.createLinearGradient(0, canvas.height - 200, 0, canvas.height);
    southPolar.addColorStop(0, 'rgba(232, 244, 248, 0)');
    southPolar.addColorStop(0.5, '#e8f4f8');
    southPolar.addColorStop(1, '#ffffff');
    ctx.fillStyle = southPolar;
    ctx.fillRect(0, canvas.height - 200, canvas.width, 200);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Create enhanced bump map for realistic terrain
  const bumpTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    
    // Base gray
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add varied terrain noise
    for (let i = 0; i < 15000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const brightness = Math.random() * 120 + 80;
      const size = Math.random() * 3 + 1;
      ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Add mountain ridges (brighter areas)
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 20 + 10;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, 'rgb(220, 220, 220)');
      gradient.addColorStop(1, 'rgb(128, 128, 128)');
      ctx.fillStyle = gradient;
      ctx.fillRect(x - size, y - size, size * 2, size * 2);
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Create realistic cloud texture
  const cloudTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 4096;
    canvas.height = 2048;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw realistic cloud formations
    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height * 0.8 + canvas.height * 0.1;
      const size = Math.random() * 80 + 40;
      const opacity = Math.random() * 0.6 + 0.3;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
      gradient.addColorStop(0.3, `rgba(255, 255, 255, ${opacity * 0.7})`);
      gradient.addColorStop(0.6, `rgba(245, 250, 255, ${opacity * 0.4})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x - size, y - size, size * 2, size * 2);
    }
    
    // Add wispy cirrus clouds
    ctx.globalAlpha = 0.3;
    for (let i = 0; i < 300; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = Math.random() * 3 + 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.random() * 100, y + (Math.random() - 0.5) * 30);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Rotate Earth
    if (earthRef.current) {
      earthRef.current.rotation.y = t * 0.05;
    }
    // Rotate clouds slightly faster
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = t * 0.06;
    }
    // Subtle atmosphere pulse
    if (atmosphereRef.current) {
      atmosphereRef.current.scale.setScalar(1.12 + Math.sin(t * 0.5) * 0.02);
    }
  });

  return (
    <group>
      {/* Main Earth */}
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[2.5, 128, 128]} />
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.08}
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* Cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.53, 128, 128]} />
        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.75}
          depthWrite={false}
          roughness={1}
        />
      </mesh>

      {/* Atmosphere glow - inner */}
      <mesh scale={1.15}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial
          color="#87CEEB"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Atmosphere glow - outer */}
      <mesh ref={atmosphereRef} scale={1.18}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial
          color="#4FC3F7"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Realistic space lighting
function SpaceLights() {
  return (
    <>
      {/* Ambient space light */}
      <ambientLight intensity={0.2} />
      
      {/* Sun light - strong directional from right */}
      <directionalLight
        position={[8, 3, 5]}
        intensity={3.2}
        color="#FFFAF0"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Fill light from opposite side */}
      <directionalLight
        position={[-3, 1, -2]}
        intensity={0.4}
        color="#B0C4DE"
      />
      
      {/* Subtle blue rim light for atmosphere */}
      <pointLight position={[-6, 0, -4]} intensity={0.5} color="#87CEEB" />
      
      {/* Top light for polar regions */}
      <pointLight position={[0, 8, 0]} intensity={0.3} color="#E0F2F7" />
    </>
  );
}

// Starfield background
function Starfield() {
  const starsRef = useRef(null);
  
  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const sizes = [];
    
    for (let i = 0; i < 3000; i++) {
      const radius = 50 + Math.random() * 100;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      
      sizes.push(Math.random() * 2 + 0.5);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    
    return geometry;
  }, []);
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
    }
  });
  
  return (
    <points ref={starsRef} geometry={starGeometry}>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

// Main component
export default function ThreeBackground() {
  return (
    <div
      className="pointer-events-none"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.85,
      }}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 1000 }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 10, 100]} />
        <Suspense fallback={null}>
          <Starfield />
          <SpaceLights />
          <RealisticEarth />
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={4}
            maxDistance={15}
            rotateSpeed={0.5}
            zoomSpeed={0.8}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}