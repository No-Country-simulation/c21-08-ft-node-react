import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const router = Router();
const productController = new ProductController();

router.get("/", (req, res) => productController.getAllProducts(req, res));
router.get("/category/:categoryId", (req, res) =>
  productController.getProductsByCategory(req, res)
);

export default router;
