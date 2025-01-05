import { Request, Response } from "express";
import { SearchProductService } from "../../services/filters/SearchProductService";

export const SearchProductController = async (req: Request, res: Response) => {
  const { name, minPrice, maxPrice } = req.body;
  const products = await SearchProductService(name as string, minPrice as number, maxPrice as number);
  return res.json(products);
};
