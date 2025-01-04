import { Request, Response } from "express";
import { listClientService } from "../../services/client/listClientService";

export const ListClientController = async (req: Request, res: Response) => {
  const clients = await listClientService();
  return res.json(clients);
}; 