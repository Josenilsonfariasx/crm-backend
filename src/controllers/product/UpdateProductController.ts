import { Request, Response } from "express";
import { updateProductService } from "../../services/product/updateProductService";

export const UpdateProductController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = await updateProductService(id, req.body);
  return res.json(product);
};
