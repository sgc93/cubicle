import {
  Grid,
  Helper,
  OrbitControls,
  TransformControls
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const SceneCanvas = () => {
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
      <TransformControls mode="translate">
        <mesh
          receiveShadow
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <torusGeometry />
          <meshStandardMaterial color="#fff" roughness={0.8} metalness={0.2} />
          <Helper type={THREE.BoxHelper} args={["#f78000"]} />
        </mesh>
      </TransformControls>
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
