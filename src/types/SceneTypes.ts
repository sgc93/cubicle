import * as THREE from "three";

export type ObjectType =
  | "box"
  | "mesh"
  | "plane"
  | "sphere"
  | "cylinder"
  | "cone"
  | "torus"
  | "text";

export type ObjectModeType = "translate" | "rotate" | "scale";

export type SceneObject = {
  id: string;
  type: string;
  name: string;
  mesh: THREE.Mesh;
  mode: ObjectModeType;
  text?: string;
};

export type ExportedObject = {
  id: string;
  type: ObjectType;
  name: string;
  text?: string;
  mode: ObjectModeType;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
};
