import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function FloatingSpheres() {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 50 }).map((_, i) => {
        const radius = 5 + Math.random() * 10;
        const angle = (i / 50) * Math.PI * 2;
        const y = (Math.random() - 0.5) * 10;
        
        return (
          <Float
            key={i}
            speed={2}
            rotationIntensity={2}
            floatIntensity={2}
            position={[
              Math.cos(angle) * radius,
              y,
              Math.sin(angle) * radius
            ]}
          >
            <Sphere args={[0.2 + Math.random() * 0.3, 32, 32]}>
              <meshStandardMaterial
                color={i % 2 === 0 ? "#FFD700" : "#FFFFFF"}
                metalness={0.9}
                roughness={0.1}
                emissive={i % 2 === 0 ? "#FFD700" : "#FFFFFF"}
                emissiveIntensity={0.2}
              />
            </Sphere>
          </Float>
        );
      })}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 45 }}
      style={{ height: '100vh' }}
    >
      <color attach="background" args={['#080808']} />
      <fog attach="fog" args={['#080808', 20, 40]} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <FloatingSpheres />
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}