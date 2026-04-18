import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function FloatingOrb({ position, color, size = 1, speed = 1, distort = 0.4 }: { 
  position: [number, number, number]; 
  color: string; 
  size?: number;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.1;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
}

function GlassOrb({ position, size = 0.8 }: { position: [number, number, number]; size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.95}
          roughness={0.05}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropicBlur={0.1}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#0d9488"
        />
      </Sphere>
    </Float>
  );
}

function DataRing({ radius = 2, segments = 32, color = "#0d9488" }: { radius?: number; segments?: number; color?: string }) {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <Float speed={0.5} floatIntensity={0.3}>
      <mesh ref={ringRef} position={[0, 0, -2]}>
        <torusGeometry args={[radius, 0.02, 16, segments]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 100;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        color="#0d9488" 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0d9488" />
      
      {/* Main floating orb - teal brand color */}
      <FloatingOrb position={[2.5, 0.5, 0]} color="#0d9488" size={1.2} speed={0.8} distort={0.3} />
      
      {/* Secondary orb - lighter teal */}
      <FloatingOrb position={[-2, -0.5, -1]} color="#14b8a6" size={0.8} speed={1.2} distort={0.5} />
      
      {/* Accent orb - warm cream */}
      <FloatingOrb position={[0, 1.5, -2]} color="#faf7f0" size={0.6} speed={1} distort={0.4} />
      
      {/* Glass orb effect */}
      <GlassOrb position={[-1.5, 0.8, 1]} size={0.5} />
      
      {/* Data visualization rings */}
      <DataRing radius={3} segments={64} color="#0d9488" />
      <DataRing radius={2.5} segments={48} color="#14b8a6" />
      
      {/* Floating particles */}
      <ParticleField />
      
      <Environment preset="city" />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
