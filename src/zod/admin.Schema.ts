import { z } from "zod";

export const adminSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3),
  password: z.string().min(8),
  createdAt: z.date().optional(),
});

// Definindo os schemas
export const Admin = adminSchema;
export const AdminCreateSchema = adminSchema.omit({ id: true, createdAt: true });
export const AdminUpdateSchema = adminSchema.omit({ id: true, createdAt: true });
export const AdminDeleteSchema = adminSchema.omit({ name: true, password: true, createdAt: true });
export const AdminReadSchema = adminSchema.omit({ name: true, password: true, createdAt: true });

// Definindo os tipos
export type Admin = z.infer<typeof adminSchema>;
export type AdminCreate = z.infer<typeof AdminCreateSchema>;
export type AdminUpdate = z.infer<typeof AdminUpdateSchema>;
export type AdminDelete = z.infer<typeof AdminDeleteSchema>;
export type AdminRead = z.infer<typeof AdminReadSchema>;
