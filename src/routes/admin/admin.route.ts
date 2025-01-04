import { Router } from "express";
import { createAdminController } from "../../controllers/admin/CreateAdminController";
import { listAdminController } from "../../controllers/admin/ListAdminController";
import { updateAdminController } from "../../controllers/admin/UpdateAdminController";
import { deleteAdminController } from "../../controllers/admin/DeleteAdminController";
import { AuthAdminController } from "../../controllers/auth/AuthAdminService";
import { AdminAuthSchema, AdminCreateSchema, AdminPartialUpdateSchema } from "../../zod/admin.Schema";
import { validateSchema } from "../../middlewares/validateSchema.middleware";
import { userExistMiddleware } from "../../middlewares/UserExistMiddlewares";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

export const adminRoutes: Router = Router();

adminRoutes.post("/create", validateSchema(AdminCreateSchema), createAdminController);
adminRoutes.get("/", isAuthenticated, listAdminController);
adminRoutes.patch("/:id", isAuthenticated, validateSchema(AdminPartialUpdateSchema), updateAdminController);
adminRoutes.delete("/:id", isAuthenticated, deleteAdminController);
adminRoutes.post("/auth", validateSchema(AdminAuthSchema), userExistMiddleware, AuthAdminController);
