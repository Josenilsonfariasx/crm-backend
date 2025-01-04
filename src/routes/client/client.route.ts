import { Router } from "express";
import { CreateClientController } from "../../controllers/client/CreateClientController";
import { ListClientController } from "../../controllers/client/ListClientController";
import { UpdateClientController } from "../../controllers/client/UpdateClientController";
import { DeleteClientController } from "../../controllers/client/DeleteClientController";
import { ClientCreateSchema, ClientPartialUpdateSchema } from "../../zod/client.Schema";
import { validateSchema } from "../../middlewares/validateSchema.middleware";
import { isAuthenticated } from "../../middlewares/isAuthenticated";

export const clientRoutes = Router();

clientRoutes.post("/create", validateSchema(ClientCreateSchema), CreateClientController);
clientRoutes.get("/", ListClientController);
clientRoutes.patch("/:id", validateSchema(ClientPartialUpdateSchema), UpdateClientController);
clientRoutes.delete("/:id", DeleteClientController);
