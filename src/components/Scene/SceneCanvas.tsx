import {
  Grid,
  Helper,
  OrbitControls,
  TransformControls
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxHelper } from "three";

const SceneCanvas = () => {
  const cameraProps = {
    position: [5, 5, 5] as [number, number, number],
    fov: 50
  };

  return (
    <Canvas camera={cameraProps} shadows className="flex-1 min-w-0 bg-n-600">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <OrbitControls makeDefault enableDamping dampingFactor={0.05} />
      <TransformControls mode={"translate"}>
        <mesh
          receiveShadow
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={() => console.log("mesh clicked")}
        >
          <torusGeometry />
          <meshStandardMaterial color="#fff" roughness={0.8} metalness={0.2} />
          <Helper type={BoxHelper} args={["#f78000"]} />
        </mesh>
      </TransformControls>
      <Grid
        args={[100, 100]}
        cellSize={1}
        cellColor="#9d9d9d"
        sectionSize={10}
        sectionColor="#5a5a5a"
        sectionThickness={1}
        position={[0, 0.001, 0]}
        fadeDistance={50}
        infiniteGrid
      />
    </Canvas>
  );
};

export default SceneCanvas;
