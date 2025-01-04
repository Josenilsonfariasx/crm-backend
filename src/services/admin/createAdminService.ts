import AppError from "../../erros/App.Errors";
import prismaClient from "../../prisma";
import { AdminCreate } from "../../zod/admin.Schema";

export class CreateAdminService {
  async execute(admin: AdminCreate) {
    const adminExists = await prismaClient.admin.findFirst({
      where: { name: admin.name },
    });
    if (adminExists) {
      throw new AppError("Admin already exists", 400);
    }
    const adminCreated = await prismaClient.admin.create({
      data: { name: admin.name, password: admin.password },
    });
    return adminCreated;
  }
}
