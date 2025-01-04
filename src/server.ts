import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import { routes } from "./routes/route";
import { handleErrors } from "./middlewares/handleError.middlewares";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleErrors);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
