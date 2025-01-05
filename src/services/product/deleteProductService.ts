import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";

export const deleteProductService = async (id: number) => {
  const product = await prismaClient.product.findUnique({
    where: { id },
  });

  if (!product) {
    throw new AppError("Produto não encontrado", 404);
  }

  await prismaClient.product.delete({
    where: { id },
  });

  return { message: "Produto deletado com sucesso" };
};
