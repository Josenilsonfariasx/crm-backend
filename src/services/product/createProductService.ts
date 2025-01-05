import prismaClient from "../../prisma";
import { ProductCreate } from "../../zod/product.Schema";
import AppError from "../../erros/App.Errors";
import { parseISO } from "date-fns";

export const createProductService = async (product: ProductCreate) => {
  const validityDate = product.validity ? new Date(product.validity) : undefined;

  const productCreate = await prismaClient.product.create({
    data: {
      name: product.name,
      description: product.description,
      quantity: product.quantity,
      price: product.price,
      validity: validityDate,
    },
    select: {
      id: true,
      name: true,
      description: true,
      quantity: true,
      price: true,
      validity: true,
      createdAt: true,
    },
  });

  return productCreate;
};
