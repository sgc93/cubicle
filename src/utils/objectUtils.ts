import { SceneObject, ObjectType } from "@/types/SceneTypes";
import { createGeometryData } from "./geometryUtils";

export const createSerializableObject = (
  type: ObjectType,
  nameCount: number,
  initialText: string = ""
): SceneObject => {
  let args: number[] = [];
  const initialRotation: { x: number; y: number; z: number } = {
    x: 0,
    y: 0,
    z: 0
  };
  const initialPosition: { x: number; y: number; z: number } = {
    x: 0,
    y: 0,
    z: 0
  };

  switch (type) {
    case "box":
    case "mesh":
      args = [2, 2, 2];
      break;
    case "plane":
      args = [10, 10];
      initialRotation.x = -Math.PI / 2;
      break;
    case "sphere":
      args = [1.5, 32, 16];
      break;
    case "cylinder":
      args = [1, 1, 3, 32];
      break;
    case "cone":
      args = [1.5, 3, 32];
      break;
    case "torus":
      args = [2, 0.5, 16, 100];
      initialRotation.x = Math.PI / 2;
      break;
    default:
      args = [1, 1, 1];
  }

  const name = `${type.charAt(0).toUpperCase() + type.slice(1)} (${nameCount})`;
  const id = `obj_${type}_${Date.now()}_${nameCount}`;

  return {
    id,
    type,
    name,
    args,
    position: initialPosition,
    rotation: initialRotation,
    scale: { x: 1, y: 1, z: 1 },

    material: {
      color: "#fff",
      roughness: 0.4,
      metalness: 0.1
    },
    text: initialText,

    geometryData: createGeometryData(type, args)
  };
};

const typeCounters: Record<ObjectType, number> = {} as Record<
  ObjectType,
  number
>;

export const getNextObjectNameCount = (type: ObjectType) => {
  typeCounters[type] = (typeCounters[type] || 0) + 1;
  return typeCounters[type];
};
