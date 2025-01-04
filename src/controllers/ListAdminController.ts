import { Request, Response } from "express";
import { listAdminService } from "../services/admin/listAdminService";

export const listAdminController = async (req: Request, res: Response) => {
  const admins = await listAdminService();
  return res.json(admins);
};
