import { Request, Response } from "express";
import { deleteProductService } from "../../services/product/deleteProductService";

export const DeleteProductController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await deleteProductService(id);
  return res.json(result);
};
