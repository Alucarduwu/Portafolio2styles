import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function FloatingHeart({ position, delay }: { position: [number, number, number], delay: number }) {
  const ref = useRef<THREE.Group>(null);
  const material = new THREE.MeshStandardMaterial({ color: "#f472b6", emissive: "#f472b6", emissiveIntensity: 0.8 });

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      const t = (time + delay) % 2;
      
      ref.current.position.y = position[1] + t * 1.5;
      ref.current.position.x = position[0] + Math.sin(time * 3 + delay) * 0.2;
      
      const scale = Math.max(0, 1 - t / 2);
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh position={[-0.05, 0.05, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[0.05, 0.05, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <primitive object={material} attach="material" />
      </mesh>
    </group>
  );
}

function VoxelCat({ isHovered }: { isHovered: boolean }) {
  const headRef = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Group>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const bodyRef = useRef<THREE.Group>(null);

  const blackMaterial = new THREE.MeshStandardMaterial({ color: "#111", roughness: 0.9, flatShading: true });
  const pinkMaterial = new THREE.MeshStandardMaterial({ color: "#f472b6", roughness: 0.5 });
  const eyeWhiteMaterial = new THREE.MeshStandardMaterial({ color: "#fff", emissive: "#fff", emissiveIntensity: 0.5 });
  const eyeClosedMaterial = new THREE.MeshStandardMaterial({ color: "#f472b6" });

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (bodyRef.current) {
      const breathingScale = isHovered ? 1 : 1 + Math.sin(time * 3) * 0.02;
      bodyRef.current.scale.y = breathingScale;
      bodyRef.current.position.y = (breathingScale - 1) * 0.5;
    }

    if (headRef.current) {
      if (isHovered) {
        headRef.current.position.y = THREE.MathUtils.lerp(headRef.current.position.y, 1.2, 0.1);
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -0.1, 0.1);
      } else {
        headRef.current.position.y = THREE.MathUtils.lerp(headRef.current.position.y, 0.8, 0.05);
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, 0.2 + Math.sin(time * 2) * 0.05, 0.05);
      }
    }

    if (tailRef.current) {
      if (isHovered) {
        tailRef.current.rotation.z = THREE.MathUtils.lerp(tailRef.current.rotation.z, Math.sin(time * 10) * 0.2, 0.1);
        tailRef.current.rotation.x = THREE.MathUtils.lerp(tailRef.current.rotation.x, 0.5, 0.1);
      } else {
        tailRef.current.rotation.z = Math.sin(time * 1.5) * 0.05;
        tailRef.current.rotation.x = THREE.MathUtils.lerp(tailRef.current.rotation.x, 0, 0.05);
      }
    }
  });

  return (
    <group position={[0, -0.5, 0]}>
      {isHovered && (
        <group>
          <FloatingHeart position={[-0.5, 1.5, 0.5]} delay={0} />
          <FloatingHeart position={[0.6, 1.2, 0.2]} delay={0.5} />
          <FloatingHeart position={[0, 1.8, -0.3]} delay={1.2} />
        </group>
      )}

      <group ref={bodyRef}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[1.6, 1.2, 1.6]} />
          <primitive object={blackMaterial} attach="material" />
        </mesh>

        <mesh position={[-0.4, 0.1, 0.7]} castShadow>
          <boxGeometry args={[0.3, 0.2, 0.4]} />
          <primitive object={blackMaterial} attach="material" />
        </mesh>
        <mesh position={[0.4, 0.1, 0.7]} castShadow>
          <boxGeometry args={[0.3, 0.2, 0.4]} />
          <primitive object={blackMaterial} attach="material" />
        </mesh>

        <mesh position={[-0.5, 0.1, -0.6]} castShadow>
          <boxGeometry args={[0.4, 0.3, 0.5]} />
          <primitive object={blackMaterial} attach="material" />
        </mesh>
        <mesh position={[0.5, 0.1, -0.6]} castShadow>
          <boxGeometry args={[0.4, 0.3, 0.5]} />
          <primitive object={blackMaterial} attach="material" />
        </mesh>
      </group>

      <group ref={headRef} position={[0, 1.2, 0.6]}>
        <mesh position={[0, 0, 0.2]} castShadow>
          <boxGeometry args={[1.4, 1.1, 1.2]} />
          <primitive object={blackMaterial} attach="material" />
        </mesh>

        <mesh position={[-0.5, 0.65, 0.1]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <primitive object={blackMaterial} attach="material" />
        </mesh>
        <mesh position={[0.5, 0.65, 0.1]} castShadow>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <primitive object={blackMaterial} attach="material" />
        </mesh>

        {isHovered ? (
          <group position={[0, 0.15, 0.81]}>
            <mesh ref={leftEyeRef} position={[-0.4, 0, 0]}>
              <boxGeometry args={[0.35, 0.45, 0.05]} />
              <primitive object={eyeWhiteMaterial} attach="material" />
            </mesh>
            <mesh position={[-0.38, 0, 0.02]}>
              <boxGeometry args={[0.25, 0.35, 0.05]} />
              <meshStandardMaterial color="#c026d3" />
            </mesh>
            <mesh position={[-0.43, 0.1, 0.04]}>
              <boxGeometry args={[0.1, 0.1, 0.05]} />
              <primitive object={eyeWhiteMaterial} attach="material" />
            </mesh>

            <mesh ref={rightEyeRef} position={[0.4, 0, 0]}>
              <boxGeometry args={[0.35, 0.45, 0.05]} />
              <primitive object={eyeWhiteMaterial} attach="material" />
            </mesh>
            <mesh position={[0.38, 0, 0.02]}>
              <boxGeometry args={[0.25, 0.35, 0.05]} />
              <meshStandardMaterial color="#c026d3" />
            </mesh>
            <mesh position={[0.33, 0.1, 0.04]}>
              <boxGeometry args={[0.1, 0.1, 0.05]} />
              <primitive object={eyeWhiteMaterial} attach="material" />
            </mesh>
          </group>
        ) : (
          <group position={[0, 0, 0.81]}>
            <mesh position={[-0.4, 0, 0]}>
              <boxGeometry args={[0.35, 0.1, 0.05]} />
              <primitive object={eyeClosedMaterial} attach="material" />
            </mesh>
            <mesh position={[0.4, 0, 0]}>
              <boxGeometry args={[0.35, 0.1, 0.05]} />
              <primitive object={eyeClosedMaterial} attach="material" />
            </mesh>
          </group>
        )}

        <mesh position={[0, -0.15, 0.85]}>
          <boxGeometry args={[0.12, 0.08, 0.05]} />
          <primitive object={pinkMaterial} attach="material" />
        </mesh>
      </group>

      <group position={[0, 0.4, -0.8]}>
        <group ref={tailRef}>
          <mesh position={[0, 0.4, -0.1]} castShadow>
            <boxGeometry args={[0.2, 0.8, 0.2]} />
            <primitive object={blackMaterial} attach="material" />
          </mesh>
        </group>
      </group>

    </group>
  );
}

export default function CatMascot() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-0 right-10 w-48 h-48 pointer-events-auto z-50 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <Canvas shadows orthographic camera={{ position: [5, 4, 6], zoom: 65, near: -10, far: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#faa" />

        <group>
          <VoxelCat isHovered={isHovered} />
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={10}
            blur={1.5}
            far={2}
            color="#ec4899"
            resolution={512}
          />
        </group>
      </Canvas>
    </div>
  );
}
