import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import './BackgroundScene.css';

function Stars() {
  const ref = useRef();

  // Generate 3000 random stars
  const starVertices = useMemo(() => {
    const points = [];
    for (let i = 0; i < 3000; i++) {
      const x = THREE.MathUtils.randFloatSpread(1000);
      const y = THREE.MathUtils.randFloatSpread(1000);
      const z = THREE.MathUtils.randFloatSpread(1000);
      points.push(x, y, z);
    }
    return new Float32Array(points);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={starVertices} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.8}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const BackgroundScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <Stars />
    </Canvas>
  );
};

export default BackgroundScene;
