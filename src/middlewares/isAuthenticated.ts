import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../erros/App.Errors";

interface Payload {
  sub: string;
}
export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    throw new AppError("Token não encontrado", 401);
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET!) as Payload;
    req.admin_id = sub;

    return next();
  } catch (err) {
    throw new AppError("Token inválido", 401);
  }
}
