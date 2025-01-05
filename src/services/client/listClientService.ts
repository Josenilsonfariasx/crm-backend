import prismaClient from "../../prisma";

export const listClientService = async (page: number = 1, limit: number = 10) => {
  const clients = await prismaClient.client.findMany({
    skip: (page - 1) * limit,
    take: limit,
    select: {
      id: true,
      name: true,
      taxId: true,
      phone: true,
      address: true,
      createdAt: true,
    },
  });

  const totalClients = await prismaClient.client.count();
  const totalPages = Math.ceil(totalClients / limit);

  return {
    clients,
    totalClients,
    totalPages,
    currentPage: page,
  };
};
