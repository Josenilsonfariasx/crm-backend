import express from "express";
import { SearchProductController } from "../../controllers/filters/SearchProductController";

export const searchRoutes = express.Router();

searchRoutes.post("/product", SearchProductController);
