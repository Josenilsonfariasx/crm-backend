import { Request, Response } from "express";
import { CreateClientService } from "../../services/client/CreateClientService";

export const CreateClientController = async (req: Request, res: Response) => {
  const client = req.body;
  const clientCreate = await CreateClientService(client);
  return res.status(201).json(clientCreate);
};
