import prismaClient from "../../prisma";

export const listProductService = async (page: number = 1, limit: number = 10) => {
  const products = await prismaClient.product.findMany({
    skip: (page - 1) * limit,
    take: limit,
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

  const totalProducts = await prismaClient.product.count();
  const totalPages = Math.ceil(totalProducts / limit);

  return {
    products,
    totalProducts,
    totalPages,
    currentPage: page,
  };
};
