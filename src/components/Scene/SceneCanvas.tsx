import { useSceneStore } from "@/stores/store";
import {
  Grid,
  Helper,
  OrbitControls,
  TransformControls
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

import { SceneObject } from "@/types/SceneSchema";
import React, { useRef } from "react";

const InteractiveSceneObject = ({ object }: { object: SceneObject }) => {
  const { setSelectedObjectId, mode } = useSceneStore();
  const isSelected = useSceneStore(
    (state) => state.selectedObjectId === object.id
  );

  const meshRef = useRef<THREE.Mesh>(null!);

  // const onMouseUp = () => {
  //     // Crucial: TODO Push the final state to the history stack ONLY after the drag ends
  //     pushHistory();
  // };

  const MeshComponent = (
    <mesh
      ref={meshRef}
      receiveShadow
      castShadow
      position={[object.position.x, object.position.y, object.position.z]}
      rotation={[object.rotation.x, object.rotation.y, object.rotation.z]}
      scale={[object.scale.x, object.scale.y, object.scale.z]}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedObjectId(object.id);
      }}
    >
      <boxGeometry
        args={[object.args[0] || 1, object.args[1] || 1, object.args[2] || 1]}
      />
      <meshStandardMaterial
        color={object.material?.color || "#ffffff"}
        roughness={object.material?.roughness || 0.8}
        metalness={object.material?.metalness || 0.2}
      />

      {isSelected && <Helper type={THREE.BoxHelper} args={["#f78000"]} />}
    </mesh>
  );

  if (isSelected) {
    return (
      <TransformControls object={meshRef} mode={mode}>
        {MeshComponent}
      </TransformControls>
    );
  }

  return MeshComponent;
};

const SceneCanvas = () => {
  const { sceneObjects, setSelectedObjectId } = useSceneStore();

  useEffect(() => {}, []);

  const setupAxes = (helper: THREE.Object3D) => {
    if (helper instanceof THREE.AxesHelper) {
      const positions = helper.geometry.attributes.position;

      positions.setXYZ(2, 0, 0, 0);
      positions.setXYZ(3, 0, 0, 0);
      positions.needsUpdate = true;
    }
  };

  return (
    <Canvas
      camera={{
        position: [5, 5, 5] as [number, number, number],
        fov: 50
      }}
      shadows
      className="flex-1 min-w-0 bg-n-700"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <OrbitControls makeDefault enableDamping dampingFactor={0.05} />
      <axesHelper ref={setupAxes} args={[100]} />
      <axesHelper ref={setupAxes} args={[100]} rotation={[0, Math.PI, 0]} />
      {sceneObjects.map((object) => (
        <InteractiveSceneObject key={object.id} object={object} />
      ))}
      <Grid
        args={[100, 100]}
        cellSize={1}
        cellColor="#4D4D4D"
        cellThickness={1}
        sectionSize={10}
        sectionColor="#4D4D4D"
        sectionThickness={1}
        side={THREE.DoubleSide}
      />
    </Canvas>
  );
};

export default SceneCanvas;
