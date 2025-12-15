import { SceneData } from '@/types/SceneSchema';

const CUBE_ID = 'cube-001'; 

export const initialSceneData: SceneData = [
    {
        id: CUBE_ID,
        type: 'box',
        name: 'Initial Cube',

        position: { x: 0, y: 0.5, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },

        args: [1, 1, 1], 
        material: { 
            color: '#ffffff',
            roughness: 0.8, 
            metalness: 0.2 
        }
    },
];