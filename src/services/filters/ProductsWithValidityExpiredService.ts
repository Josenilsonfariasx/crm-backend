import prismaClient from "../../prisma";

export const ProductsWithValidityExpiredService = async (daysToExpire: number) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const products = await prismaClient.product.findMany({
    where: {
      validity: {
        lte: expirationDate,
      },
    },
  });

  return products;
};
