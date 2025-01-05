import express from "express";
import { SearchProductController } from "../../controllers/filters/SearchProductController";
import { InformationForTheDashboardController } from "../../controllers/filters/dashboard/InformationForTheDashboardController";

export const searchRoutes = express.Router();

searchRoutes.post("/product", SearchProductController);
searchRoutes.get("/dashboard", InformationForTheDashboardController);
