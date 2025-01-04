import { Request, Response } from "express";
import { updateAdminService } from "../services/admin/updateAdminService";
import { AdminUpdate } from "../zod/admin.Schema";

export const updateAdminController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const updateData: Partial<AdminUpdate> = req.body;

  const admin = await updateAdminService(id, updateData);
  return res.json(admin);
};
