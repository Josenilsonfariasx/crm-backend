import { Request, Response } from "express";
import { createProductService } from "../../services/product/createProductService";

export const CreateProductController = async (req: Request, res: Response) => {
  const product = await createProductService(req.body);
  return res.status(201).json(product);
};
