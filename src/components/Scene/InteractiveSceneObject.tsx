import { useSceneStore } from "@/stores/store";
import {
  Helper,
  TransformControls
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { SceneObject } from "@/types/SceneTypes";

const InteractiveSceneObject = ({ object }: { object: SceneObject }) => {
  const { setSelectedObjectId, mode, updateMesh } = useSceneStore();
  const isSelected = useSceneStore(
    (state) => state.selectedObjectId === object.id
  );

  const meshRef = useRef<THREE.Mesh>(null!);

  const onMouseUp = () => {
    if (meshRef.current) {
      updateMesh(object.id, meshRef.current);
    }
  };

  const selectObj = () => {
    if (!isSelected) {
      setSelectedObjectId(object.id);
    }
  };

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
        selectObj();
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
      <TransformControls object={meshRef} mode={mode} onMouseUp={onMouseUp}>
        {MeshComponent}
      </TransformControls>
    );
  }

  return MeshComponent;
};

export default InteractiveSceneObject;
