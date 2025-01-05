import { Request, Response } from "express";
import { listSaleService } from "../../services/sale/listSaleService";

export const ListSaleController = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const sales = await listSaleService(page, limit);
  return res.json(sales);
};
