import express from "express";
import { adminRoutes } from "./admin/admin.route";

export const routes = express.Router();

routes.use("/admin", adminRoutes);

routes.get("/get", (req, res) => {
  res.json({ message: "Hello World!!" });
});
