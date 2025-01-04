import { NextFunction } from "express";
import prismaClient from "../prisma";
import { Request } from "express";
import { Response } from "express";
import AppError from "../erros/App.Errors";

export const userExistMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { taxId } = req.body;
  const user = await prismaClient.admin.findFirst({
    where: { taxId },
  });

  if (!user) {
    throw new AppError("Usuario não encontrado", 404);
  }
  next();
};
