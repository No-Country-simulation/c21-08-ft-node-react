import { Router } from "express";
import { PaymentsController } from "../controllers/payments.controller";

const router = Router();
const paymentsController = new PaymentsController();

router.post("/preference", (req, res, next) =>
  paymentsController.createPreference(req, res, next)
);

router.get("/prueba", () => {
  console.log("prueba");
});

export default router;
