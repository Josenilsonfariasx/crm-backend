import prismaClient from "../../prisma";
import { ProductCreate } from "../../zod/product.Schema";
import AppError from "../../erros/App.Errors";

export const createProductService = async (product: ProductCreate) => {
  const productCreate = await prismaClient.product.create({
    data: {
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
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

  return productCreate;
};
