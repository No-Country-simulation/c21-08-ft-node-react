import { Router } from "express";
import { WebHooksController } from "../controllers/webhooks.controller";

const router = Router();
const webHooksController = new WebHooksController();

router.post("/", webHooksController.handleWebHook);

export default router;
