import { useSceneStore } from "@/stores/store";
import { extend } from "@react-three/fiber";
import { TransformControls } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { SceneObject } from "@/types/SceneTypes";


const VertexSelector = ({
  position,
  objectId,
  index,
  pushHistory,
}:{
  position: number[],
  objectId: string,
  index: number,
  pushHistory: () => void,
}) => {
    const {updateVertex} = useSceneStore()
  const selectorRef = useRef<THREE.Mesh>(null!);

  // Convert the position array element [x, y, z] to a Vector3 for use
  const localPosition = new THREE.Vector3(
    position[0],
    position[1],
    position[2]
  );

  // We only commit history when the user releases the control
  const onMouseUp = () => {
    if (selectorRef.current) {
      updateVertex(objectId, index, selectorRef.current.position);
      pushHistory();
    }
  };

  return (
    <TransformControls
      object={selectorRef}
      mode="translate"
      onMouseUp={onMouseUp}
      size={0.5} // Make the gizmo smaller
    >
      {/* The invisible mesh that acts as the handle */}
      <mesh
        ref={selectorRef}
        position={localPosition}
        onClick={(e) => e.stopPropagation()} // Prevent deselection
      >
        <sphereGeometry args={[0.08]} /> {/* Visible sphere handle */}
        <meshBasicMaterial color="red" depthTest={false} />
      </mesh>
    </TransformControls>
  );
};

const GeometryEditor = ({
  object,
  meshRef
}: {
  object: SceneObject;
  meshRef: React.RefObject<THREE.Mesh>;
}) => {
  const { pushHistory, updateVertex } = useSceneStore();

  // 1. Create BufferGeometry from serializable data (CRITICAL for RERENDER)
  const geometry = useMemo(() => {
    // Fallback: If no geometryData exists, create a new BoxGeometry
    if (!object.geometryData) {
      const tempGeom = new THREE.BoxGeometry(
        object.args[0] || 1,
        object.args[1] || 1,
        object.args[2] || 1
      );
      return tempGeom;
    }

    // Use the saved attributes to create a BufferGeometry
    const bufferGeom = new THREE.BufferGeometry();
    bufferGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array(object.geometryData.position),
        3
      )
    );
    // You would also need to set normals/UVs for correct lighting/texturing
    bufferGeom.computeVertexNormals();
    return bufferGeom;
  }, [object.geometryData]); // Geometry recomputes whenever position array changes!

  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry]);

  // Extract unique vertex positions for placing selectors (8 corners for a cube)
  // NOTE: This is a complex part. For a BoxGeometry, we'll just sample the 8 corners.
  // In a real app, you would need to group duplicated positions by corner.
  const uniqueVertexPositions = useMemo(() => {
    const positions = geometry.attributes.position.array;
    // Simple logic: Sample 8 unique corners (index 0, 3, 6... of the flat array)
    const corners = [];
    for (let i = 0; i < 24; i += 3) {
      corners.push([positions[i], positions[i + 1], positions[i + 2]]);
      if (corners.length >= 8) break; // Stop after 8 corners (simplification)
    }
    return corners;
  }, [geometry]);

  return (
    <group
      position={[object.position.x, object.position.y, object.position.z]}
      rotation={[object.rotation.x, object.rotation.y, object.rotation.z]}
      scale={[object.scale.x, object.scale.y, object.scale.z]}
      onClick={e => e.stopPropagation()}
    >
      {/* 1. Wireframe */}
      <lineSegments geometry={edges} >
        <lineBasicMaterial color="#00ff00" linewidth={3} depthTest={false} />
      </lineSegments>

      {/* 2. Custom Mesh using the mutable BufferGeometry */}
      <mesh
        ref={meshRef}
        material-opacity={0.5}
        material-transparent={true}
        material-color={object.material?.color || "#fff"}
      >
        <primitive object={geometry} attach="geometry" />
      </mesh>

      {/* 3. Vertex Selectors */}
      {/* We map over the positions to render a TransformControls for each unique corner */}
      {uniqueVertexPositions.map((pos, index) => (
        <VertexSelector
          key={index}
          objectId={object.id}
          index={index}
          position={pos}
          pushHistory={pushHistory}
        />
      ))}

      {/* <Helper type={THREE.BoxHelper} args={["#f78000"]} /> */}
    </group>
  );
};

export default GeometryEditor;
