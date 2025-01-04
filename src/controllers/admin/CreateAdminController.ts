import { Request, Response } from "express";
import { createAdminService } from "../../services/admin/createAdminService";
import { AdminCreate } from "../../zod/admin.Schema";

export const createAdminController = async (req: Request, res: Response) => {
  const { name, password, taxId }: AdminCreate = req.body;
  const admin = await createAdminService({ name, password, taxId });
  return res.status(201).json(admin);
};
