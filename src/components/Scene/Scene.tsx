"use client";

import { useSceneStore } from "@/stores/store";
import SceneCanvas from "./SceneCanvas";
import SceneMenu from "./SceneMenu";

import { useEffect } from "react";
import { initialSceneData } from "@/data/initialSchema";

const Scene = () => {
  const { loadInitialScene, sceneObjects } = useSceneStore();

  useEffect(() => {
    if (sceneObjects.length === 0) {
      loadInitialScene(initialSceneData);
    }
  }, [sceneObjects.length, loadInitialScene]);

  return (
    <div className="relative flex-1 min-w-0 flex">
      <SceneCanvas />
      <SceneMenu />
    </div>
  );
};

export default Scene;
