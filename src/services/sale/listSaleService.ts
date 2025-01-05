import prismaClient from "../../prisma";

export const listSaleService = async (page: number = 1, limit: number = 10) => {
  const sales = await prismaClient.sale.findMany({
    skip: (page - 1) * limit,
    take: limit,
    include: {
      client: {
        select: {
          name: true,
          taxId: true,
        },
      },
      product: {
        select: {
          name: true,
          price: true,
        },
      },
      seller: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalSales = await prismaClient.sale.count();
  const totalPages = Math.ceil(totalSales / limit);

  return {
    sales,
    totalSales,
    totalPages,
    currentPage: page,
  };
};
