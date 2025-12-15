import { SceneData, SceneObject } from "@/types/SceneSchema";
import { ObjectModeType } from "@/types/SceneTypes";
import { create } from "zustand";

interface SceneState {
  sceneObjects: SceneData;
  selectedObjectId: string | null;
  mode: ObjectModeType;

  // actions
  addObject: (obj: SceneObject) => void;
  setSelectedObjectId: (id: string | null) => void;
  loadInitialScene: (data: SceneData) => void;
}

export const useSceneStore = create<SceneState>((set, get) => ({
  sceneObjects: [],
  selectedObjectId: null,
  mode: 'translate',

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

  setSelectedObjectId: (id) => set({ selectedObjectId: id })
}));
