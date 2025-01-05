import { Request, Response } from "express";
import { InformationForTheDashboardService } from "../../../services/filters/dashboard/InformationForTheDashboardService";

export const InformationForTheDashboardController = async (req: Request, res: Response) => {
  const information = await InformationForTheDashboardService();
  return res.status(200).json(information);
};
