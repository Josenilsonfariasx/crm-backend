import { Router } from "express";
import { CreateProductController } from "../../controllers/product/CreateProductController";
import { ListProductController } from "../../controllers/product/ListProductController";
import { UpdateProductController } from "../../controllers/product/UpdateProductController";
import { DeleteProductController } from "../../controllers/product/DeleteProductController";
import { ProductCreateSchema, ProductPartialUpdateSchema, StockUpdateSchema } from "../../zod/product.Schema";
import { validateSchema } from "../../middlewares/validateSchema.middleware";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { AddStockController } from "../../controllers/product/AddStockController";
import { RemoveStockController } from "../../controllers/product/RemoveStockController";

export const productRoutes = Router();

productRoutes.use(isAuthenticated);

productRoutes.post("/create", validateSchema(ProductCreateSchema), CreateProductController);
productRoutes.get("/", ListProductController);
productRoutes.patch("/:id", validateSchema(ProductPartialUpdateSchema), UpdateProductController);
productRoutes.delete("/:id", DeleteProductController);
productRoutes.patch("/:id/add-stock", validateSchema(StockUpdateSchema), AddStockController);
productRoutes.patch("/:id/remove-stock", validateSchema(StockUpdateSchema), RemoveStockController);
