import { Router } from "express";
import { CreateSaleController } from "../../controllers/sale/CreateSaleController";
import { ListSaleController } from "../../controllers/sale/ListSaleController";
import { SaleCreateSchema } from "../../zod/sale.Schema";
import { validateSchema } from "../../middlewares/validateSchema.middleware";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

export const saleRoutes = Router();

saleRoutes.use(isAuthenticated);

saleRoutes.post("/create", validateSchema(SaleCreateSchema), CreateSaleController);
saleRoutes.get("/", ListSaleController);
