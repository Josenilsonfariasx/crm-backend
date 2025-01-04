import { Router } from "express";
import { createAdminController } from "../../controllers/CreateAdminController";
import { listAdminController } from "../../controllers/ListAdminController";
import { updateAdminController } from "../../controllers/UpdateAdminController";
import { deleteAdminController } from "../../controllers/DeleteAdminController";
import { AdminCreateSchema, AdminPartialUpdateSchema } from "../../zod/admin.Schema";
import { validateSchema } from "../../middlewares/validateSchema.middleware";

export const adminRoutes: Router = Router();

adminRoutes.post("/create", validateSchema(AdminCreateSchema), createAdminController);
adminRoutes.get("/", listAdminController);
adminRoutes.patch("/:id", validateSchema(AdminPartialUpdateSchema), updateAdminController);
adminRoutes.delete("/:id", deleteAdminController);
