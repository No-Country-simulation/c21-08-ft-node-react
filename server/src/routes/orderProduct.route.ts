import { Router } from "express";
import { OrderProductController } from "../controllers/orderProduct.controller";

const router = Router();
const orderProductController = new OrderProductController();

router.post("/:orderId", (req, res, next) =>
  orderProductController.addProductToOrder(req, res, next)
);

export default router;
