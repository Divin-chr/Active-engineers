"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { createNoise2D } from "simplex-noise";

const TERRAIN_SIZE = 60;
const TERRAIN_SEGMENTS = 90;

const MARKERS = [
  { position: [-8, 3.2, 4], scale: 0.28, color: "#2dd4bf", speed: 1.4, floatIntensity: 1.1, parallax: 0.5 },
  { position: [6, 2.4, 6], scale: 0.22, color: "#99f6e4", speed: 1.1, floatIntensity: 0.9, parallax: 1.1 },
  { position: [-3, 4.1, -2], scale: 0.32, color: "#2dd4bf", speed: 1.7, floatIntensity: 1.3, parallax: 0.3 },
  { position: [9, 3.6, -3], scale: 0.2, color: "#eaf6f4", speed: 1.3, floatIntensity: 1, parallax: 0.9 },
  { position: [2, 5, 8], scale: 0.26, color: "#99f6e4", speed: 0.9, floatIntensity: 1.2, parallax: 1.3 },
  { position: [-10, 2.8, -6], scale: 0.24, color: "#2dd4bf", speed: 1.5, floatIntensity: 0.8, parallax: 0.4 },
];

// Deterministic PRNG (mulberry32) so the generated terrain looks the same on every load
// instead of reshuffling randomly, while still giving simplex-noise a well-distributed table.
function mulberry32(seed) {
  let a = seed;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildTerrainGeometry() {
  const geometry = new THREE.PlaneGeometry(
    TERRAIN_SIZE,
    TERRAIN_SIZE,
    TERRAIN_SEGMENTS,
    TERRAIN_SEGMENTS
  );

  const noise2D = createNoise2D(mulberry32(1337));
  const position = geometry.attributes.position;

  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);

    const nx = x / TERRAIN_SIZE;
    const ny = y / TERRAIN_SIZE;

    const height =
      noise2D(nx * 2.2, ny * 2.2) * 2.4 +
      noise2D(nx * 5, ny * 5) * 0.9 +
      noise2D(nx * 11, ny * 11) * 0.35;

    position.setZ(i, height);
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();

  return geometry;
}

function TerrainMesh({ reducedMotion }) {
  const geometry = useMemo(() => buildTerrainGeometry(), []);
  const groupRef = useRef(null);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.03;
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#2dd4bf" wireframe transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function HoverMarker({ marker, mouseX, mouseY }) {
  const groupRef = useRef(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const mx = mouseX ? mouseX.get() : 0;
    const my = mouseY ? mouseY.get() : 0;

    const targetX = marker.position[0] + mx * marker.parallax * 2.2;
    const targetY = marker.position[1] - my * marker.parallax * 1.4;

    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.08;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.08;
  });

  return (
    <group ref={groupRef} position={marker.position}>
      <Float speed={marker.speed} floatIntensity={marker.floatIntensity} rotationIntensity={0.6}>
        <mesh scale={marker.scale}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color={marker.color} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Terrain({ reducedMotion = false, mouseX, mouseY }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[8, 10, 4]} intensity={0.8} />

      <TerrainMesh reducedMotion={reducedMotion} />

      {MARKERS.map((marker, i) =>
        reducedMotion ? (
          <mesh key={i} position={marker.position} scale={marker.scale}>
            <icosahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color={marker.color} />
          </mesh>
        ) : (
          <HoverMarker key={i} marker={marker} mouseX={mouseX} mouseY={mouseY} />
        )
      )}
    </>
  );
}
