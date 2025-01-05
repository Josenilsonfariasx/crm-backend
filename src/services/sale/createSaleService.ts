import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";
import { SaleCreate } from "../../zod/sale.Schema";

export const createSaleService = async (data: SaleCreate, sellerId: number) => {
  const product = await prismaClient.product.findUnique({
    where: { id: data.productId },
  });

  if (!product) {
    throw new AppError("Produto não encontrado", 404);
  }

  if (product.quantity < data.quantity) {
    throw new AppError("Quantidade insuficiente em estoque", 400);
  }

  const client = await prismaClient.client.findUnique({
    where: { id: data.clientId },
  });

  if (!client) {
    throw new AppError("Cliente não encontrado", 404);
  }

  const total = product.price * data.quantity;

  const sale = await prismaClient.$transaction(async (prisma) => {
    // Criar a venda
    const newSale = await prisma.sale.create({
      data: {
        clientId: data.clientId,
        productId: data.productId,
        sellerId: sellerId,
        quantity: data.quantity,
        total: total,
      },
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
    });

    // Atualizar o estoque
    await prisma.product.update({
      where: { id: data.productId },
      data: {
        quantity: product.quantity - data.quantity,
      },
    });

    return newSale;
  });

  return sale;
};
