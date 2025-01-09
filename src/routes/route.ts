import express from "express";
import { adminRoutes } from "./admin/admin.route";
import { clientRoutes } from "./client/client.route";
import { productRoutes } from "./product/product.route";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { saleRoutes } from "./sale/sale.route";
import { searchRoutes } from "./filters/search.route";
import { isCache } from "../middlewares/IsCache";

export const routes = express.Router();

routes.use("/admin", adminRoutes);
routes.use("/client", isAuthenticated, isCache, clientRoutes);
routes.use("/product", isAuthenticated, isCache, productRoutes);
routes.use("/sale", isAuthenticated, isCache, saleRoutes);
// filters
routes.use("/filters", isAuthenticated, isCache, searchRoutes);
