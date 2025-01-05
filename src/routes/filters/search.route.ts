import express from "express";
import { SearchProductController } from "../../controllers/filters/SearchProductController";
import { InformationForTheDashboardController } from "../../controllers/filters/dashboard/InformationForTheDashboardController";
import { ProductsWithValidityExpiredController } from "../../controllers/filters/ProductsWithValidityExpiredController";

export const searchRoutes = express.Router();

searchRoutes.post("/product", SearchProductController);
searchRoutes.get("/product/expired", ProductsWithValidityExpiredController);
searchRoutes.get("/dashboard", InformationForTheDashboardController);
