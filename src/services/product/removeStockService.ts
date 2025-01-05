import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";

export const removeStockService = async (id: number, quantity: number) => {
  const product = await prismaClient.product.findUnique({
    where: { id },
  });

  if (!product) {
    throw new AppError("Produto não encontrado", 404);
  }

  if (product.quantity < quantity) {
    throw new AppError("Quantidade insuficiente em estoque", 400);
  }

  const updatedProduct = await prismaClient.product.update({
    where: { id },
    data: {
      quantity: product.quantity - quantity,
    },
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
