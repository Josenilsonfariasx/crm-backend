import { Request, Response } from "express";
import { AuthAdminService } from "../../services/auth/AuthAdminService";

export const AuthAdminController = async (req: Request, res: Response) => {
  const { taxId, password } = req.body;
  const admin = await AuthAdminService({ taxId, password });
  return res.json(admin);
};
