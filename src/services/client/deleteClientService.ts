import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";

export const deleteClientService = async (id: number) => {
  const client = await prismaClient.client.findUnique({
    where: { id },
  });

  if (!client) {
    throw new AppError("Cliente não encontrado", 404);
  }

  await prismaClient.client.delete({
    where: { id },
  });

  return { message: "Cliente deletado com sucesso" };
};
