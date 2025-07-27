import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/producto.controller";

import {
  createProductSchema,
  updateProductSchema,
} from "../schema/producto.schema";
import { validateFields } from "../middlewares/validateFields.middleware";
const router = Router();

router.get("/", getAllProducts);

router.post("/", validateFields(createProductSchema), createProduct);

router.patch("/:id", validateFields(updateProductSchema), updateProduct);

router.delete("/:id", deleteProduct);

export default router;
