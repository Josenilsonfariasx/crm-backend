import prismaClient from "../../prisma";

export const listProductService = async () => {
  const products = await prismaClient.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      quantity: true,
      price: true,
      createdAt: true,
    },
  });

  return products;
};
