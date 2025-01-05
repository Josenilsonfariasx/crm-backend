import { Request, Response } from "express";
import { listClientService } from "../../services/client/listClientService";

export const ListClientController = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const clients = await listClientService(page, limit);
  return res.json(clients);
};
