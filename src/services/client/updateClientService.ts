import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";
import { ClientUpdate } from "../../zod/client.Schema";

export const updateClientService = async (id: number, data: Partial<ClientUpdate>) => {
  const client = await prismaClient.client.findUnique({
    where: { id },
  });

  if (!client) {
    throw new AppError("Cliente não encontrado", 404);
  }

  if (data.taxId) {
    const existingClient = await prismaClient.client.findFirst({
      where: {
        taxId: data.taxId,
        id: { not: id },
      },
    });

    if (existingClient) {
      throw new AppError("Já existe um cliente com este CPF", 400);
    }
  }

  const updatedClient = await prismaClient.client.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      taxId: true,
      phone: true,
      address: true,
      createdAt: true,
    },
  });

  return updatedClient;
};
