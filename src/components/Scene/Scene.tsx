"use client";

import SceneCanvas from "./SceneCanvas";
import SceneMenu from "./SceneMenu";

const Scene = () => {
  return (
    <div className="relative flex-1 flex">
      <SceneCanvas />
      <SceneMenu />
    </div>
  );
};

export default Scene;
