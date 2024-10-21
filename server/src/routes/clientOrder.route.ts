import { Router } from "express";
import { ClientOrderController } from "../controllers/clientOrder.controller";

const router = Router();
const clientOrderController = new ClientOrderController();

router.post("/create", (req, res) =>
  clientOrderController.createOrder(req, res)
);
router.get("/confirm", (req, res) =>
  clientOrderController.confirmOrder(req, res)
);

export default router;
