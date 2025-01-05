import { z } from "zod";

export const saleSchema = z.object({
  id: z.number().optional(),
  clientId: z.number(),
  productId: z.number(),
  sellerId: z.number(),
  quantity: z.number().min(1, { message: "A quantidade deve ser maior que zero" }),
  total: z.number().min(0, { message: "O total não pode ser negativo" }),
  createdAt: z.date().optional(),
});

export const SaleCreateSchema = z.object({
  clientId: z.number(),
  productId: z.number(),
  quantity: z.number().min(1, { message: "A quantidade deve ser maior que zero" }),
});

export type Sale = z.infer<typeof saleSchema>;
export type SaleCreate = z.infer<typeof SaleCreateSchema>;
