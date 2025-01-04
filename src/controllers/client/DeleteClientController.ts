import { Request, Response } from "express";
import { deleteClientService } from "../../services/client/deleteClientService";

export const DeleteClientController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await deleteClientService(id);
  return res.json(result);
};
