import { z } from "zod";

export const SceneObjectSchema = z.object({
  id: z.string(),
  type: z.enum(["box", "sphere", "cylinder", "plane", "torus"]),
  name: z.string(),
  position: z.object({ x: z.number(), y: z.number(), z: z.number() }),
  rotation: z.object({ x: z.number(), y: z.number(), z: z.number() }),
  scale: z.object({ x: z.number(), y: z.number(), z: z.number() }),
  args: z.array(z.number()),
  material: z
    .object({
      color: z.string(),
      roughness: z.number().min(0).max(1),
      metalness: z.number().min(0).max(1)
    })
    .optional()
});

export const SceneDataSchema = z.array(SceneObjectSchema);

export type SceneObject = z.infer<typeof SceneObjectSchema>;
export type SceneData = z.infer<typeof SceneDataSchema>;
