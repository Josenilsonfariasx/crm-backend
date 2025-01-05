import { Request, Response } from "express";
import { removeStockService } from "../../services/product/removeStockService";

export const RemoveStockController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { quantity } = req.body;

  const product = await removeStockService(id, quantity);
  return res.json(product);
};
