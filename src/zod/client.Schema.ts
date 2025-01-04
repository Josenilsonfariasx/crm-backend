import { z } from "zod";

export const clientSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  phone: z.string().optional(),
  address: z.string().optional(),
  taxId: z
    .string()
    .min(11, { message: "O CPF deve ter 11 caracteres." })
    .max(11, { message: "O CPF deve ter 11 caracteres." }),
  createdAt: z.date().optional(),
  sales: z
    .array(
      z.object({
        id: z.number(),
        productId: z.number(),
        sellerId: z.number(),
        quantity: z.number(),
        total: z.number(),
        createdAt: z.date(),
      })
    )
    .optional(),
});

export const Client = clientSchema;
export const ClientCreateSchema = clientSchema.omit({ id: true, createdAt: true, sales: true });
export const ClientUpdateSchema = clientSchema.omit({ createdAt: true, sales: true });
export const ClientDeleteSchema = clientSchema.omit({
  name: true,
  phone: true,
  address: true,
  taxId: true,
  sales: true,
  createdAt: true,
});
export const ClientReadSchema = clientSchema.omit({
  name: true,
  phone: true,
  address: true,
  taxId: true,
  sales: true,
  createdAt: true,
});
export const ClientPartialUpdateSchema = clientSchema.omit({ id: true, createdAt: true }).partial();

export type Client = z.infer<typeof clientSchema>;
export type ClientCreate = z.infer<typeof ClientCreateSchema>;
export type ClientUpdate = z.infer<typeof ClientUpdateSchema>;
export type ClientDelete = z.infer<typeof ClientDeleteSchema>;
export type ClientRead = z.infer<typeof ClientReadSchema>;
