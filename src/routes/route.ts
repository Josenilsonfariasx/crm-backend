import express from "express";
import { adminRoutes } from "./admin/admin.route";
import { clientRoutes } from "./client/client.route";
import { productRoutes } from "./product/product.route";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { saleRoutes } from "./sale/sale.route";
import { searchRoutes } from "./filters/search.route";

export const routes = express.Router();

routes.use("/admin", adminRoutes);
routes.use("/client", isAuthenticated, clientRoutes);
routes.use("/product", isAuthenticated, productRoutes);
routes.use("/sale", isAuthenticated, saleRoutes);
// filters
routes.use("/filters", isAuthenticated, searchRoutes);
