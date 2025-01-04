import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";
import { AdminCreate } from "../../zod/admin.Schema";
import bcrypt from "bcryptjs";

export const createAdminService = async (admin: AdminCreate) => {
  const existingAdmin = await prismaClient.admin.findUnique({
    where: { taxId: admin.taxId },
  });

  if (existingAdmin) {
    throw new AppError("Já existe um admin com este CPF", 400);
  }

  const hashedPassword = await bcrypt.hash(admin.password, 10);
  const adminCreated = await prismaClient.admin.create({
    data: {
      name: admin.name,
      password: hashedPassword,
      taxId: admin.taxId,
    },
    select: {
      id: true,
      name: true,
      taxId: true,
      createdAt: true,
    },
  });

  return adminCreated;
};
