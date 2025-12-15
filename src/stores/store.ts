import { ObjectModeType, SceneData, SceneObject } from "@/types/SceneTypes";
import { create } from "zustand";
import * as THREE from "three";

interface SceneState {
  sceneObjects: SceneObject[];
  selectedObjectId: string | null;
  mode: ObjectModeType;
  history: SceneData[];
  historyIndex: number;

  addObject: (obj: SceneObject) => void;
  updateMesh: (id: string, mesh: THREE.Mesh) => void;
  updateObjectProperties: (id: string, updates: Partial<SceneObject>) => void;
  setSelectedObjectId: (id: string | null) => void;
  loadInitialScene: (data: SceneData) => void;
  pushHistory: () => void;
  undo: () => void;
  redo: () => void;
}

export const useSceneStore = create<SceneState>((set, get) => ({
  sceneObjects: [],
  selectedObjectId: null,
  mode: "translate",
  history: [],
  historyIndex: -1,

  loadInitialScene: (data) =>
    set({
      sceneObjects: data,
      history: [JSON.parse(JSON.stringify(data))],
      historyIndex: 0
    }),

  addObject: (obj) => {
    set((state) => ({
      sceneObjects: [...state.sceneObjects, obj],
      selectedObjectId: obj.id
    }));
    get().pushHistory();
  },

  updateMesh: (id, mesh) => {
    const updates = {
      position: { x: mesh.position.x, y: mesh.position.y, z: mesh.position.z },
      rotation: { x: mesh.rotation.x, y: mesh.rotation.y, z: mesh.rotation.z },
      scale: { x: mesh.scale.x, y: mesh.scale.y, z: mesh.scale.z }
    };

    set((state) => ({
      sceneObjects: state.sceneObjects.map((obj) => {
        if (obj.id !== id) return obj;

        return {
          ...obj,
          position: updates.position,
          rotation: updates.rotation,
          scale: updates.scale
        };
      })
    }));

    get().pushHistory();
  },

  updateObjectProperties(id, updates) {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((obj) => {
        if (obj.id !== id) return obj;

        const newMaterial = updates.material
          ? { ...obj.material, ...updates.material }
          : obj.material;

        return {
          ...obj,
          ...updates,
          material: newMaterial
        };
      })
    }));

    get().pushHistory();
  },

  setSelectedObjectId: (id) => set({ selectedObjectId: id }),

  pushHistory: () => {
    const currentScene = get().sceneObjects;
    set((state) => {
      const newHistory = state.history.slice(0, state.historyIndex + 1); // Truncate future history
      const newSnapshot = JSON.parse(JSON.stringify(currentScene));

      if (newHistory.length > 0) {
        const lastSnapshot = newHistory[newHistory.length - 1];
        if (JSON.stringify(lastSnapshot) === JSON.stringify(newSnapshot)) {
          return state;
        }
      }

      if (newHistory.length >= 50) {
        newHistory.shift();
      }

      return {
        ...state,
        history: [...newHistory, newSnapshot],
        historyIndex: newHistory.length
      };
    });
  },

  undo: () =>
    set((state) => {
      const newIndex = state.historyIndex - 1;
      if (newIndex < 0) {
        return state;
      }

      return {
        sceneObjects: state.history[newIndex],
        historyIndex: newIndex
      };
    }),

  redo: () =>
    set((state) => {
      const newIndex = state.historyIndex + 1;

      if (newIndex >= state.history.length) {
        return state;
      }

      return {
        sceneObjects: state.history[newIndex],
        historyIndex: newIndex
      };
    })
}));
