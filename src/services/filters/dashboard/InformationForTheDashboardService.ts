import prismaClient from "../../../prisma";

export const InformationForTheDashboardService = async () => {
  const totalClients = await prismaClient.client.count();
  const totalProducts = await prismaClient.product.count();
  const totalSales = await prismaClient.sale.count();
  const totalRevenue = await prismaClient.sale.aggregate({
    _sum: {
      total: true,
    },
  });
  const informationAboutNumbers = {
    "Total de clientes": totalClients,
    "Total de produtos": totalProducts,
    "Total de vendas": totalSales,
    "Total de receita": totalRevenue._sum.total,
  };
  const informationAboutFiveProductsMostSoldInTheLast30Days = await prismaClient.sale.groupBy({
    by: ["productId"],
    _count: {
      id: true,
    },
    where: {
      createdAt: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 5,
  });

  // Fetch the full product details for the most sold products
  const productIds = informationAboutFiveProductsMostSoldInTheLast30Days.map((item) => item.productId);
  const products = await prismaClient.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  // Create a mapping of productId to sales count using product names
  const salesCountByProduct = {};
  let maxSales = 0;
  let bestSellingProduct = null;

  informationAboutFiveProductsMostSoldInTheLast30Days.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    salesCountByProduct[product.name] = item._count.id;

    if (item._count.id > maxSales) {
      maxSales = item._count.id;
      bestSellingProduct = product;
    }
  });

  // Get client with most purchases in last 30 days
  const clientWithMostPurchases = await prismaClient.sale.groupBy({
    by: ["clientId"],
    _count: {
      id: true,
    },
    _sum: {
      total: true,
    },
    where: {
      createdAt: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 1,
  });

  // Get client details
  const topClient = await prismaClient.client.findUnique({
    where: {
      id: clientWithMostPurchases[0].clientId,
    },
  });

  // Get most bought product by this client
  const clientFavoriteProduct = await prismaClient.sale.groupBy({
    by: ["productId"],
    _count: {
      id: true,
    },
    where: {
      clientId: clientWithMostPurchases[0].clientId,
      createdAt: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
    take: 1,
  });

  // Get product details
  const favoriteProduct = await prismaClient.product.findUnique({
    where: {
      id: clientFavoriteProduct[0].productId,
    },
  });

  const informationInGeneral = {
    "Informações gerais": informationAboutNumbers,
    "Produto mais vendido": `O produto mais vendido nos últimos 30 dias foi ${bestSellingProduct.name} com ${maxSales} vendas.`,
    "Vendas por produto": salesCountByProduct,
    "Melhor cliente": {
      Nome: topClient.name,
      "Total de compras": clientWithMostPurchases[0]._count.id,
      "Valor total gasto": clientWithMostPurchases[0]._sum.total,
      "Produto mais comprado": `${favoriteProduct.name} ${clientFavoriteProduct[0]._count.id} vezes`,
    },
  };

  return informationInGeneral;
};
