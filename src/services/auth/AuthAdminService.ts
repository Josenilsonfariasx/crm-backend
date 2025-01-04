import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import AppError from "../../erros/App.Errors";
import { AdminAuth } from "../../zod/admin.Schema";

export const AuthAdminService = async ({ taxId, password }: AdminAuth) => {
  const admin = await prismaClient.admin.findFirst({
    where: {
      taxId: taxId,
    },
  });
  const passwordMatch = await compare(password, admin!.password);

  if (!passwordMatch) {
    throw new AppError("Usuario ou senha incorretos", 401);
  }

  const token = sign(
    {
      name: admin!.name,
      taxId: admin!.taxId,
    },
    process.env.JWT_SECRET!,
    {
      subject: admin!.id.toString(),
      expiresIn: "10d",
    }
  );
  return {
    id: admin!.id,
    name: admin!.name,
    taxId: admin!.taxId,
    token: token,
  };
};
