import { Request, Response } from "express";
import { listProductService } from "../../services/product/listProductService";

export const ListProductController = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const products = await listProductService(page, limit);
  return res.json(products);
};
