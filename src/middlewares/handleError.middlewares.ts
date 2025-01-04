import { ErrorRequestHandler } from "express";
import AppError from "../erros/App.Errors";
import { z } from "zod";
import { JsonWebTokenError } from "jsonwebtoken";

export const handleErrors: ErrorRequestHandler = (error: unknown, req, res, next): void => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
    return;
  }

  if (error instanceof z.ZodError) {
    res.status(400).json(error.flatten().fieldErrors);
    return;
  }

  if (error instanceof JsonWebTokenError) {
    res.status(401).json({ message: error.message });
    return;
  }

  console.log(error);

  res.status(500).json({ message: "Internal server error" });
};
