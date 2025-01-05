import { z } from "zod";

export const productSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  description: z.string().optional(),
  quantity: z.number().min(0, { message: "A quantidade não pode ser negativa" }),
  price: z.number().min(0, { message: "O preço não pode ser negativo" }),
  createdAt: z.date().optional(),
});

export const ProductCreateSchema = productSchema.omit({ id: true, createdAt: true });
export const ProductUpdateSchema = productSchema.omit({ createdAt: true });
export const ProductPartialUpdateSchema = productSchema.omit({ id: true, createdAt: true }).partial();

export const StockUpdateSchema = z.object({
  quantity: z.number().min(1, { message: "A quantidade deve ser maior que zero" }),
});

export type Product = z.infer<typeof productSchema>;
export type ProductCreate = z.infer<typeof ProductCreateSchema>;
export type ProductUpdate = z.infer<typeof ProductUpdateSchema>;
export type StockUpdate = z.infer<typeof StockUpdateSchema>;
