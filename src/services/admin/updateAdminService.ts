import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";
import { AdminUpdate } from "../../zod/admin.Schema";
import bcrypt from "bcryptjs";

export const updateAdminService = async (id: number, data: Partial<AdminUpdate>) => {
  const admin = await prismaClient.admin.findUnique({
    where: { id },
  });

  if (!admin) {
    throw new AppError("Admin não encontrado", 404);
  }

  if (data.taxId) {
    const existingAdmin = await prismaClient.admin.findFirst({
      where: {
        taxId: data.taxId,
        id: { not: id },
      },
    });

    if (existingAdmin) {
      throw new AppError("Já existe um admin com este CPF", 400);
    }
  }

  let updateData: any = { ...data };

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 10);
  }

  const updatedAdmin = await prismaClient.admin.update({
    where: { id },
    data: updateData,
    select: {
      id: true,
      name: true,
      taxId: true,
      createdAt: true,
    },
  });

  return updatedAdmin;
};
