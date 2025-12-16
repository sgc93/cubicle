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

export type SceneObjectMaterial = {
  color: string;
  roughness: number;
  metalness: number;
};

export type GeometryData = {
  position: number[];
  normal?: number[];
  uv?: number[];
};

export type SceneObject = {
  id: string;
  type: ObjectType;
  name: string;
  text?: string;
  args: number[];
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
  scale: { x: number; y: number; z: number };
  material?: SceneObjectMaterial;
  geometryData?: GeometryData;
};

export type SceneData = SceneObject[];
