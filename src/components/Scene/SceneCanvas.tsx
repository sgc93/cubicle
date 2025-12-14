import { Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const SceneCanvas = () => {
  const cameraProps = {
    position: [5, 5, 5] as [number, number, number],
    fov: 50
  };

  return (
    <Canvas
      camera={cameraProps}
      shadows
      className="flex-1 min-w-0 w-full h-full bg-n-600"
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <OrbitControls makeDefault enableDamping dampingFactor={0.05} />

      <Grid
        args={[20, 20, 40, 40]}
        cellColor="#9d9d9d"
        sectionColor="#5a5a5a"
        sectionThickness={1}
        fadeDistance={500}
        position={[0, 0.001, 0]}
      />

      <mesh
        receiveShadow
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={() => console.log("mesh clicked")}
      >
        <boxGeometry />
        <meshStandardMaterial color="#fff" roughness={0.8} metalness={0.2} />
      </mesh>
    </Canvas>
  );
};

export default SceneCanvas;
