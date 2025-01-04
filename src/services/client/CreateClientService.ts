import prismaClient from "../../prisma";
import { ClientCreate } from "../../zod/client.Schema";
import AppError from "../../erros/App.Errors";

export const CreateClientService = async (client: ClientCreate) => {
  const existingClient = await prismaClient.client.findUnique({
    where: { taxId: client.taxId },
  });

  if (existingClient) {
    throw new AppError("Já existe um cliente com este CPF", 400);
  }

  const clientCreate = await prismaClient.client.create({
    data: {
      name: client.name,
      taxId: client.taxId,
      phone: client.phone,
      address: client.address,
    },
    select: {
      id: true,
      name: true,
      taxId: true,
      createdAt: true,
    },
  });
};
