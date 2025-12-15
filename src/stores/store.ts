import { SceneData, SceneObject } from "@/types/SceneSchema";
import { ObjectModeType } from "@/types/SceneTypes";
import { create } from "zustand";
import * as THREE from "three";

interface SceneState {
  sceneObjects: SceneData;
  selectedObjectId: string | null;
  mode: ObjectModeType;

  history: SceneData[];
  historyIndex: number;

  // actions
  addObject: (obj: SceneObject) => void;
  updateMesh: (id: string, mesh: THREE.Mesh) => void;
  setSelectedObjectId: (id: string | null) => void;
  loadInitialScene: (data: SceneData) => void;
}

export const useSceneStore = create<SceneState>((set, get) => ({
  sceneObjects: [],
  selectedObjectId: null,
  mode: "translate",
  history: [],
  historyIndex: -1,

  loadInitialScene: (data) =>
    set({
      sceneObjects: data
    }),

  addObject: (obj) => {
    set((state) => ({
      sceneObjects: [...state.sceneObjects, obj],
      selectedObjectId: obj.id
    }));
  },

  updateMesh: (id, mesh) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((obj) => {
        if (obj.id !== id) return obj;

        return { ...obj, mesh };
      })
    }));
  },

  setSelectedObjectId: (id) => set({ selectedObjectId: id })

}));
