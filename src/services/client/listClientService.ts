import prismaClient from "../../prisma";

export const listClientService = async () => {
  const clients = await prismaClient.client.findMany({
    select: {
      id: true,
      name: true,
      taxId: true,
      phone: true,
      address: true,
      createdAt: true,
    },
  });

  return clients;
};
