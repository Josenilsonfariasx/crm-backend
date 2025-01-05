import { Request, Response } from "express";
import { listProductService } from "../../services/product/listProductService";

export const ListProductController = async (req: Request, res: Response) => {
  const products = await listProductService();
  return res.json(products);
};
