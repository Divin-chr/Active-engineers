"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Terrain from "./Terrain";

const MOUSE_X_RANGE = 2.6;
const MOUSE_Y_RANGE = 1.4;

function CameraRig({ cameraZ, cameraY, mouseX, mouseY }) {
  const { camera } = useThree();

  useFrame(() => {
    const targetZ = cameraZ.get();
    const targetScrollY = cameraY.get();
    const mx = mouseX ? mouseX.get() : 0;
    const my = mouseY ? mouseY.get() : 0;

    const targetX = mx * MOUSE_X_RANGE;
    const targetY = targetScrollY - my * MOUSE_Y_RANGE;

    camera.position.x += (targetX - camera.position.x) * 0.06;
    camera.position.z += (targetZ - camera.position.z) * 0.06;
    camera.position.y += (targetY - camera.position.y) * 0.06;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene({ cameraZ, cameraY, mouseX, mouseY }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 4, 16], fov: 50 }} gl={{ antialias: true }}>
      <color attach="background" args={["#0b4f4b"]} />
      <fog attach="fog" args={["#0b4f4b", 14, 34]} />
      <Terrain reducedMotion={false} mouseX={mouseX} mouseY={mouseY} />
      <CameraRig cameraZ={cameraZ} cameraY={cameraY} mouseX={mouseX} mouseY={mouseY} />
    </Canvas>
  );
}
