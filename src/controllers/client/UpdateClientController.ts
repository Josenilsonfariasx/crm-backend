import { Request, Response } from "express";
import { updateClientService } from "../../services/client/updateClientService";
import { ClientUpdate } from "../../zod/client.Schema";

export const UpdateClientController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updateData: Partial<ClientUpdate> = req.body;

  const client = await updateClientService(id, updateData);
  return res.json(client);
}; 