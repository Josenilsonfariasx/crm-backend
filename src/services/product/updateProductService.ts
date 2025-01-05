import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";
import { ProductUpdate } from "../../zod/product.Schema";

export const updateProductService = async (id: number, data: Partial<ProductUpdate>) => {
  const product = await prismaClient.product.findUnique({
    where: { id },
  });

  if (!product) {
    throw new AppError("Produto não encontrado", 404);
  }

  const updatedProduct = await prismaClient.product.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      description: true,
      quantity: true,
      price: true,
      createdAt: true,
    },
  });

  return updatedProduct;
};
