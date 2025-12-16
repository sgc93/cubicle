import * as THREE from "three";
import { GeometryData, ObjectType } from "@/types/SceneTypes";

export const createGeometryData = (
  type: ObjectType,
  args: number[]
): GeometryData => {
  let geometry: THREE.BufferGeometry;
  console.log(type, args)

  // Default values if args are missing or insufficient
  const [w = 1, h = 1, d = 1] = args;
  const [radius = 1, segs = 32] = args;

  switch (type) {
    case "box":
    case "mesh":
      geometry = new THREE.BoxGeometry(w, h, d);
      break;
    case "plane":
      geometry = new THREE.PlaneGeometry(w, h);
      break;
    case "sphere":
      // radius, widthSegments, heightSegments
      geometry = new THREE.SphereGeometry(radius, segs, segs);
      break;
    case "cylinder":
      // radiusTop, radiusBottom, height, radialSegments
      geometry = new THREE.CylinderGeometry(radius, radius, d, segs);
      break;
    case "cone":
      // radius, height, radialSegments
      geometry = new THREE.ConeGeometry(radius, d, segs);
      break;
    case "torus":
      // radius, tube, radialSegments, tubularSegments
      const [torusR = 2, tubeR = 0.5, radialS = 16, tubularS = 100] = args;
      geometry = new THREE.TorusGeometry(torusR, tubeR, radialS, tubularS);
      break;
    default:
      geometry = new THREE.BoxGeometry(1, 1, 1);
      break;
  }

  const positionAttribute = geometry.getAttribute("position");

  if (!positionAttribute) {
    throw new Error(
      `Geometry created for type ${type} is missing the position attribute.`
    );
  }

  // CRITICAL: Convert the Float32Array to a standard JavaScript number[] array.
  // This is the only way to ensure the data is serializable for Zustand and history.
  return {
    position: Array.from(positionAttribute.array) as number[]
    // We can add normals/uvs here later if needed for advanced editing
    // normal: Array.from(geometry.getAttribute('normal').array) as number[],
  };
};
