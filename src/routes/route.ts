import express from "express";
import { adminRoutes } from "./admin/admin.route";
import { clientRoutes } from "./client/client.route";
import { isAuthenticated } from "../middlewares/isAuthenticated";

export const routes = express.Router();

routes.use("/admin", adminRoutes);
routes.use("/client", isAuthenticated, clientRoutes);

routes.get("/get", (req, res) => {
  res.json({ message: "Hello World!!" });
});
