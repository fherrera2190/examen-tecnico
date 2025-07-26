import express from "express";
import productosRoutes from "./routes/products";
import cors from "cors";
import { errorMiddleware, notFoundMiddleware } from "./middlewares";
import { envs } from "./config";

const port: Number = envs.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", productosRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
