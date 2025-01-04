import { z } from "zod";

export const adminSchema = z.object({
  id: z.number().optional(),
  name: z
    .string({ message: "O nome é obrigatório." })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  taxId: z
    .string({ message: "O CPF é obrigatório." })
    .max(11, { message: "O CPF deve ter 11 caracteres." })
    .min(11, { message: "O CPF deve ter 11 caracteres." }),
  password: z
    .string({ message: "A senha é obrigatória." })
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres." }),
  createdAt: z.date().optional(),
});

// Definindo os schemas
export const Admin = adminSchema;
export const AdminCreateSchema = adminSchema.omit({ id: true, createdAt: true });
export const AdminUpdateSchema = adminSchema.omit({ createdAt: true });
export const AdminDeleteSchema = adminSchema.omit({ name: true, password: true, createdAt: true });
export const AdminReadSchema = adminSchema.omit({ name: true, password: true, createdAt: true });
export const AdminPartialUpdateSchema = adminSchema.omit({ id: true, createdAt: true }).partial();

// Definindo os tipos
export type Admin = z.infer<typeof adminSchema>;
export type AdminCreate = z.infer<typeof AdminCreateSchema>;
export type AdminUpdate = z.infer<typeof AdminUpdateSchema>;
export type AdminDelete = z.infer<typeof AdminDeleteSchema>;
export type AdminRead = z.infer<typeof AdminReadSchema>;
