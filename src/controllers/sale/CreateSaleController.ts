import { Request, Response } from "express";
import { createSaleService } from "../../services/sale/createSaleService";

export const CreateSaleController = async (req: Request, res: Response) => {
  const sellerId = req.admin_id;
  console.log("id do vendador", sellerId);
  const sale = await createSaleService(req.body, Number(sellerId));
  return res.status(201).json(sale);
};
