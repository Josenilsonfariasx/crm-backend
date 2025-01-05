import { Request, Response } from "express";
import { ProductsWithValidityExpiredService } from "../../services/filters/ProductsWithValidityExpiredService";

export const ProductsWithValidityExpiredController = async (req: Request, res: Response) => {
  const { daysToExpire } = req.body;
  const products = await ProductsWithValidityExpiredService(daysToExpire);
  return res.json(products);
};
