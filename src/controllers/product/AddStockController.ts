import { Request, Response } from "express";
import { addStockService } from "../../services/product/addStockService";

export const AddStockController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { quantity } = req.body;

  const product = await addStockService(id, quantity);
  return res.json(product);
};
