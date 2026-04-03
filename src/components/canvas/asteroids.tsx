import { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

// Asteroid Component
const Asteroid = ({ position, speed, size }: { 
  position: [number, number, number]; 
  speed: number; 
  size: number 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Rotation
      meshRef.current.rotation.x += speed * 0.02;
      meshRef.current.rotation.y += speed * 0.03;
      
      // More prominent movement
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.01;
      meshRef.current.position.y += Math.cos(state.clock.elapsedTime * speed * 0.15) * 0.008;
      meshRef.current.position.z += Math.sin(state.clock.elapsedTime * speed * 0.1) * 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[size, 0]} />
      <meshStandardMaterial 
        color="#8B7355" 
        roughness={0.7} 
        metalness={0.3}
        emissive="#ff6b35"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

// Main Asteroids Background Component
const AsteroidsBackground = () => {
  const asteroids = useMemo(() => {
    const asteroidArray = [];
    const asteroidCount = 50; // Increased from 30 to 50
    
    for (let i = 0; i < asteroidCount; i++) {
      asteroidArray.push({
        position: [
          (Math.random() - 0.5) * 30, // Increased spread
          (Math.random() - 0.5) * 20, // Increased spread
          (Math.random() - 0.5) * 15  // Increased depth
        ] as [number, number, number],
        speed: Math.random() * 2 + 0.5, // Increased speed variation
        size: Math.random() * 0.4 + 0.2 // Increased size: 0.2 to 0.6
      });
    }
    return asteroidArray;
  }, []);

  return (
    <group>
      {/* Glowing Stars Background */}
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      
      {/* Asteroids */}
      {asteroids.map((asteroid, index) => (
        <Asteroid
          key={index}
          position={asteroid.position}
          speed={asteroid.speed}
          size={asteroid.size}
        />
      ))}
    </group>
  );
};

// Main AsteroidsCanvas Component
const AsteroidsCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ffa500" />
      <directionalLight position={[0, 5, 5]} intensity={0.5} color="#ff8c00" />
      <AsteroidsBackground />
    </Canvas>
  );
};

export default AsteroidsCanvas;
