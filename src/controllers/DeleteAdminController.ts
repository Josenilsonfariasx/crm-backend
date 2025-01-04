import { Request, Response } from "express";
import { deleteAdminService } from "../services/admin/deleteAdminService";

export const deleteAdminController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const result = await deleteAdminService(id);
  return res.json(result);
};
