import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";

export const deleteAdminService = async (id: number) => {
  const admin = await prismaClient.admin.findUnique({
    where: { id },
  });

  if (!admin) {
    throw new AppError("Admin não encontrado", 404);
  }

  await prismaClient.admin.delete({
    where: { id },
  });

  return { message: "Admin deletado com sucesso" };
};
